"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import type { JobsFilters } from "./JobsLiveJobsListingSection";
import { JobsLiveJobsJobCardSection } from "./JobsLiveJobsJobCardSection";

export type Job = {
  id: string;
  title: string;
  company: string;
  companySite?: string;
  type: "Walk-in" | "Full-time" | "Internship" | "Contract";
  mode?: "Onsite" | "Hybrid" | "Remote";
  location: string;
  postedOn: string;
  eventDate?: string;
  timeWindow?: string;
  venue?: string;
  exp: string;
  salary?: string;
  highlights: string[];
  responsibilities?: string[];
  applyEmail?: string;
  applyLink?: string;
  contacts?: string[];
};

function norm(s: string) {
  return s.toLowerCase();
}

function matchesFilters(job: Job, f: JobsFilters) {
  const q = norm(f.q || "");
  const hay =
    norm(job.title) +
    " " +
    norm(job.company) +
    " " +
    norm(job.location) +
    " " +
    norm((job.highlights || []).join(" "));
  const qOk = q ? hay.includes(q) : true;

  const locOk = f.loc ? norm(job.location).includes(norm(f.loc)) : true;
  const typeOk = f.type ? job.type === f.type : true;

  return qOk && locOk && typeOk;
}

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : "";

export function JobsLiveJobsJobsGridSection({
  jobs,
  filters,
}: {
  jobs: Job[];
  filters: JobsFilters;
}) {
  const FIRST_CHUNK = 12;
  const NEXT_CHUNK = 12;

  // Detect ≥lg for master-detail behavior
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLg(e.matches);
    setIsLg(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // DEV convenience: clone to showcase scroll behavior if list is small
  const jobsForView = useMemo(() => {
    if (!jobs?.length) return jobs;
    if (jobs.length >= 18) return jobs;
    const clones: Job[] = [];
    let i = 0;
    while (jobs.length + clones.length < 20) {
      const base = jobs[i % jobs.length];
      clones.push({
        ...base,
        id: `${base.id}-dup-${i}`,
        title: `${base.title} (Batch ${Math.floor(i / jobs.length) + 1})`,
      });
      i++;
    }
    return [...jobs, ...clones];
  }, [jobs]);

  const sorted = useMemo(() => {
    return [...jobsForView].sort((a, b) => {
      const da = new Date(a.eventDate || a.postedOn).getTime();
      const db = new Date(b.eventDate || b.postedOn).getTime();
      return db - da;
    });
  }, [jobsForView]);

  const filtered = useMemo(
    () => sorted.filter((j) => matchesFilters(j, filters)),
    [sorted, filters]
  );

  const [visible, setVisible] = useState<number>(Math.min(FIRST_CHUNK, filtered.length));

  useMemo(() => {
    (visible > filtered.length) && setVisible(Math.min(FIRST_CHUNK, filtered.length));
  }, [filtered.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const canLoad = visible < filtered.length;
  const list = filtered.slice(0, visible);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedJob = useMemo(
    () => (selectedId ? filtered.find((j) => j.id === selectedId) ?? null : null),
    [selectedId, filtered]
  );

  useEffect(() => {
    if (isLg) {
      if (!selectedId && list.length) setSelectedId(list[0].id);
      if (selectedId && !filtered.some((j) => j.id === selectedId)) {
        setSelectedId(list[0]?.id ?? null);
      }
    } else {
      if (selectedId && !filtered.some((j) => j.id === selectedId)) {
        setSelectedId(null);
      }
    }
  }, [isLg, filtered, list, selectedId]);

  const showList = isLg || !selectedId;
  const showDetail = isLg || !!selectedId;

  return (
    <>
      <div aria-hidden className="pointer-events-none relative -mx-4 sm:-mx-6 lg:-mx-8 mb-2">
        <div
          className="h-10 w-full opacity-30 blur-2xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,140,0,.18), rgba(255,184,77,.18) 45%, rgba(125,211,252,.22))",
          }}
        />
      </div>

      {/* Results meta */}
      <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
        <span>
          Showing <span className="font-semibold">{list.length}</span> of{" "}
          <span className="font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "role" : "roles"}
        </span>
        {filters.q || filters.loc || filters.type ? (
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs">
            Filters active
          </span>
        ) : null}
      </div>

      {/* Master–Detail */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* LEFT: list */}
        {showList && (
          <section
            className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-auto nice-scroll"
            aria-label="Job listings"
          >
            <ul className="divide-y divide-slate-100">
              <AnimatePresence mode="popLayout">
                {list.map((job) => {
                  const active = job.id === selectedId;
                  return (
                    <motion.li
                      key={job.id}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <button
                        onClick={() => setSelectedId(job.id)}
                        className={`group grid w-full grid-cols-[auto,1fr] gap-3 p-4 text-left transition ${active ? "bg-orange-50/40" : "hover:bg-slate-50 focus:bg-slate-50"
                          }`}
                      >
                        <div
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                            boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
                          }}
                        >
                          <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="truncate text-[15px] font-extrabold leading-tight text-slate-900">
                              {job.title}
                            </h3>
                            {active && (
                              <span className="shrink-0 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700">
                                Selected
                              </span>
                            )}
                          </div>

                          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-slate-600">
                            <span className="inline-flex items-center">
                              <Building2 className="mr-1 h-3.5 w-3.5" />
                              {job.company}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center">
                              <MapPin className="mr-1 h-3.5 w-3.5" />
                              {job.location}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="inline-flex items-center">
                              <Calendar className="mr-1 h-3.5 w-3.5" />
                              {job.eventDate ? `Event: ${formatDate(job.eventDate)}` : `Posted: ${formatDate(job.postedOn)}`}
                            </span>
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-1.5">
                            <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                              {job.type}
                            </span>
                            {job.mode && (
                              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                                {job.mode}
                              </span>
                            )}
                            <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700">
                              Exp: {job.exp}
                            </span>
                            {job.salary && (
                              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700">
                                {job.salary}
                              </span>
                            )}
                          </div>

                          {job.highlights?.length ? (
                            <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-slate-700">
                              {job.highlights[0]}
                            </p>
                          ) : null}
                        </div>
                      </button>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>

            <div className="flex items-center justify-center border-t border-slate-100 p-3">
              {filtered.length === 0 ? (
                <span className="text-sm text-slate-500">
                  No matching roles right now. Try clearing filters or broadening your search.
                </span>
              ) : canLoad ? (
                <button
                  onClick={() => setVisible((v) => Math.min(v + NEXT_CHUNK, filtered.length))}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
                >
                  Load more <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <span className="text-sm text-slate-500">
                  You’re all caught up. New roles appear here as soon as we verify them.
                </span>
              )}
            </div>
          </section>
        )}

        {/* RIGHT: detail */}
        {showDetail && (
          <section
            className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:max-h:[calc(100vh-7rem)] lg:max-h-[calc(100vh-7rem)] lg:overflow-auto nice-scroll"
            aria-label="Job details"
          >
            {/* Increased z-index so header sits above content/glows */}
            {!isLg && (
              <div className="sticky top-16 z-20 -mx-4 mb-3 flex items-center gap-2 border-b border-slate-100 bg-white px-4 py-2 shadow-sm">
                <button
                  onClick={() => setSelectedId(null)}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to listings
                </button>
                <div className="ml-auto text-xs text-slate-500">
                  {filtered.length} {filtered.length === 1 ? "role" : "roles"}
                </div>
              </div>
            )}

            {!selectedJob ? (
              <div className="grid min-h-[240px] place-items-center p-8 text-center">
                <p className="text-sm text-slate-600">Select a job from the list to see details.</p>
              </div>
            ) : (
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full opacity-30 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255,140,0,.25), rgba(255,140,0,0))",
                  }}
                />
                <JobsLiveJobsJobCardSection job={selectedJob} />
              </div>
            )}
          </section>
        )}
      </div>

      {/* Global scrollbar styling (WebKit + Firefox) */}
      <style jsx global>{`
        /* Firefox */
        .nice-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 140, 0, 0.45) transparent;
        }

        /* WebKit (Chrome, Edge, Brave, etc.) */
        .nice-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .nice-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .nice-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255,140,0,0.55), rgba(255,184,77,0.55));
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        .nice-scroll:hover::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255,140,0,0.75), rgba(255,184,77,0.75));
        }
        .nice-scroll::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, rgba(255,140,0,0.95), rgba(255,184,77,0.95));
        }

        /* ---- HARD-REMOVE WebKit arrow buttons (Chrome/Edge) ---- */
        .nice-scroll::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
          -webkit-appearance: none;
          background: transparent;
        }
        /* Some Chromium builds still draw triangles unless ALL variants are targeted */
        .nice-scroll::-webkit-scrollbar-button:single-button,
        .nice-scroll::-webkit-scrollbar-button:double-button,
        .nice-scroll::-webkit-scrollbar-button:start:decrement,
        .nice-scroll::-webkit-scrollbar-button:end:increment,
        .nice-scroll::-webkit-scrollbar-button:vertical:decrement,
        .nice-scroll::-webkit-scrollbar-button:vertical:increment,
        .nice-scroll::-webkit-scrollbar-button:horizontal:decrement,
        .nice-scroll::-webkit-scrollbar-button:horizontal:increment {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          -webkit-appearance: none !important;
        }

        /* Avoid stray artifacts in some platforms */
        .nice-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
    </>
  );
}
