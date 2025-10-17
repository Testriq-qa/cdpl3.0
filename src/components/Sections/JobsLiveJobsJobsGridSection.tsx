// src/components/Sections/JobsLiveJobsJobsGridSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, MapPin, Building2, Share2, Copy } from "lucide-react";
import type { Job } from "@/app/jobs/live-jobs/page";
import type { JobsFilters } from "./JobsLiveJobsListingSection";
import { JobsLiveJobsJobCardSection } from "./JobsLiveJobsJobCardSection";

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
    ? new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "";

export function JobsLiveJobsJobsGridSection({
  jobs,
  filters,
}: {
  jobs: Job[];
  filters: JobsFilters;
}) {
  // Build base URL once (client-only)
  const baseUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    // keep query string off so the link is clean; hash will point to the card
    return `${window.location.origin}${window.location.pathname}`;
  }, []);

  const buildShareUrl = (id: string) => `${baseUrl}#${id}`;

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = async (job: Job) => {
    const url = buildShareUrl(job.id);
    try {
      if (navigator.share && typeof navigator.share === "function") {
        await navigator.share({
          title: job.title,
          text: `${job.title} @ ${job.company}`,
          url,
        });
        return;
      }
    } catch {
      // fall through to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(job.id);
      setTimeout(() => setCopiedId((prev) => (prev === job.id ? null : prev)), 1500);
    } catch {
      // last-resort fallback
      const tmp = document.createElement("input");
      tmp.value = url;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      setCopiedId(job.id);
      setTimeout(() => setCopiedId((prev) => (prev === job.id ? null : prev)), 1500);
    }
  };

  const sorted = useMemo(() => {
    return [...jobs].sort((a, b) => {
      const da = new Date(a.eventDate || a.postedOn).getTime();
      const db = new Date(b.eventDate || b.postedOn).getTime();
      return db - da;
    });
  }, [jobs]);

  const filtered = useMemo(
    () => sorted.filter((j) => matchesFilters(j, filters)),
    [sorted, filters]
  );

  // Deep-link scroll (#id or ?id=)
  useEffect(() => {
    const { hash, search } = window.location;
    let targetId = hash?.replace(/^#/, "") || "";
    if (!targetId) {
      const params = new URLSearchParams(search);
      const qId = params.get("id");
      if (qId) targetId = qId;
    }
    if (!targetId) return;

    const t = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    const onHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      const node = id ? document.getElementById(id) : null;
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", onHash);
    };
  }, [filtered.length]);

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
          Showing <span className="font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "role" : "roles"}
        </span>
        {filters.q || filters.loc || filters.type ? (
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs">
            Filters active
          </span>
        ) : null}
      </div>

      {/* DETAILS-ONLY LIST — each LI is its own card */}
      <section aria-label="Job details">
        {/* spacing reduced: gap-y-6 / md:gap-y-8 */}
        <ul className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <motion.li
                key={job.id}
                id={job.id}
                className="scroll-mt-24"
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  {/* Share button (top-right) */}
                  <div className="absolute right-3 top-3 z-10">
                    <button
                      onClick={() => handleShare(job)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                      aria-label={`Share ${job.title}`}
                      title={copiedId === job.id ? "Link copied!" : "Share"}
                    >
                      {copiedId === job.id ? (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" />
                          Share
                        </>
                      )}
                    </button>
                  </div>

                  {/* compact meta row */}
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-slate-600">
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
                      {job.eventDate
                        ? `Event: ${formatDate(job.eventDate)}`
                        : `Posted: ${formatDate(job.postedOn)}`}
                    </span>
                  </div>

                  <div className="relative">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full opacity-30 blur-2xl"
                      style={{
                        background:
                          "radial-gradient(closest-side, rgba(255,140,0,.25), rgba(255,140,0,0))",
                      }}
                    />
                    <JobsLiveJobsJobCardSection job={job} />
                  </div>

                  {/* optional: tiny link preview under the card (comment out if not needed) */}
                  {/* <div className="mt-3 text-[11px] text-slate-500 break-all">
                    {buildShareUrl(job.id)}
                  </div> */}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <li className="text-sm text-slate-500">
              No matching roles right now. Try clearing filters or broadening your search.
            </li>
          )}
        </ul>
      </section>

      {/* Global scrollbar styling */}
      <style jsx global>{`
        .nice-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 140, 0, 0.45) transparent;
        }
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
        .nice-scroll::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
          -webkit-appearance: none;
          background: transparent;
        }
        .nice-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
    </>
  );
}
