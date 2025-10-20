// src/components/Sections/JobsLiveJobsJobsGridSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Share2, Copy } from "lucide-react";
import dynamic from "next/dynamic";

import type { Job } from "@/app/jobs/live-jobs/page";
import type { JobsFilters } from "./JobsLiveJobsListingSection";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// Lazy-load the heavy inner card section
const JobsLiveJobsJobCardSection = dynamic(
  () =>
    import("./JobsLiveJobsJobCardSection").then(
      (m) => m.JobsLiveJobsJobCardSection
    ),
  {
    ssr: false, // target is a "use client" component
    loading: () => <SectionLoader label="Loading job..." />,
  }
);


function norm(s: string) {
  return (s || "").toLowerCase();
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


// ---- Chunking config ----
const CHUNK_SIZE = 10;

// ---- Helper to fabricate extra demo jobs when list is small (dev-only aid) ----
function makeDemoJobs(seed: Job[], targetCount = 60): Job[] {
  if (!seed.length) return [];
  const out: Job[] = [...seed];
  let copyIdx = 1;
  while (out.length < targetCount) {
    for (let i = 0; i < seed.length && out.length < targetCount; i++) {
      const j = seed[i];
      out.push({
        ...j,
        id: `${j.id || `job-${i}`}-demo-${copyIdx}`,
        title: `${j.title} (copy ${copyIdx})`,
        postedOn: j.postedOn
          ? new Date(new Date(j.postedOn).getTime() - copyIdx * 24 * 3600 * 1000).toISOString()
          : new Date(Date.now() - copyIdx * 24 * 3600 * 1000).toISOString(),
      });
      copyIdx++;
    }
  }
  return out;
}

export function JobsLiveJobsJobsGridSection({
  jobs,
  filters,
}: {
  jobs: Job[];
  filters: JobsFilters;
}) {
  // Build base URL once (client-only) for share links
  const baseUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    // Preserve current search params too (optional—nice for UTMs)
    return `${window.location.origin}${window.location.pathname}${window.location.search}`;
  }, []);

  const buildShareUrl = (id: string) => `${baseUrl}#${encodeURIComponent(id)}`;

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

  // Demo data so chunking is visible when your list is small
  const withDemo = useMemo(() => {
    if (jobs.length >= 35) return jobs;
    return makeDemoJobs(
      jobs.length
        ? jobs
        : ([
          {
            id: "ex-1",
            title: "Frontend Engineer",
            company: "Acme Corp",
            location: "Bengaluru",
            type: "Full-time",
            postedOn: new Date().toISOString(),
            highlights: ["React", "TypeScript", "UI/UX"],
          },
          {
            id: "ex-2",
            title: "Backend Engineer",
            company: "Globex",
            location: "Remote (India)",
            type: "Full-time",
            postedOn: new Date(Date.now() - 86400000).toISOString(),
            highlights: ["Node.js", "PostgreSQL", "Microservices"],
          },
          {
            id: "ex-3",
            title: "SDE Intern",
            company: "Initech",
            location: "Hyderabad",
            type: "Internship",
            postedOn: new Date(Date.now() - 2 * 86400000).toISOString(),
            highlights: ["JavaScript", "APIs", "Testing"],
          },
        ] as Job[]),
      60
    );
  }, [jobs]);

  const sorted = useMemo(() => {
    return [...withDemo].sort((a, b) => {
      const da = new Date(a.eventDate || a.postedOn).getTime();
      const db = new Date(b.eventDate || b.postedOn).getTime();
      return db - da;
    });
  }, [withDemo]);

  const filtered = useMemo(
    () => sorted.filter((j) => matchesFilters(j, filters)),
    [sorted, filters]
  );

  // ---- Button-only chunked loading ----
  const [visibleCount, setVisibleCount] = useState<number>(CHUNK_SIZE);

  // Reset chunks on filter changes; reveal enough if deep-linked
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTargetId = () => {
      const { hash, search } = window.location;
      let targetId = hash?.replace(/^#/, "") || "";
      if (!targetId) {
        const params = new URLSearchParams(search);
        const qId = params.get("id");
        if (qId) targetId = qId;
      }
      try {
        targetId = decodeURIComponent(targetId);
      } catch { }
      return targetId;
    };

    const targetId = getTargetId();
    if (targetId) {
      const idx = filtered.findIndex((j) => j.id === targetId);
      if (idx >= 0) {
        const needed = Math.ceil((idx + 1) / CHUNK_SIZE) * CHUNK_SIZE;
        setVisibleCount(Math.max(CHUNK_SIZE, Math.min(needed, filtered.length)));
        return;
      }
    }
    setVisibleCount(Math.min(CHUNK_SIZE, filtered.length));
  }, [filters, filtered.length, filtered]);

  // Scroll to deep link after chunks are revealed
  useEffect(() => {
    if (typeof window === "undefined") return;

    const getTargetId = () => {
      const { hash, search } = window.location;
      let targetId = hash?.replace(/^#/, "") || "";
      if (!targetId) {
        const params = new URLSearchParams(search);
        const qId = params.get("id");
        if (qId) targetId = qId;
      }
      try {
        targetId = decodeURIComponent(targetId);
      } catch { }
      return targetId;
    };

    const desiredId = getTargetId();
    if (!desiredId) return;

    const index = filtered.findIndex((j) => j.id === desiredId);
    if (index >= 0 && index < visibleCount) {
      const el = document.getElementById(desiredId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visibleCount, filtered]);

  const visibleItems = useMemo(
    () => filtered.slice(0, Math.min(visibleCount, filtered.length)),
    [filtered, visibleCount]
  );

  const canLoadMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setVisibleCount((v) => Math.min(v + CHUNK_SIZE, filtered.length));
  };

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
          Showing{" "}
          <span className="font-semibold">
            {Math.min(visibleCount, filtered.length)}
          </span>{" "}
          of <span className="font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "role" : "roles"}
        </span>
        {filters.q || filters.loc || filters.type ? (
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs">
            Filters active
          </span>
        ) : null}
      </div>

      {/* DETAILS-ONLY LIST — meta row above title removed */}
      <section aria-label="Job details">
        <ul className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((job) => (
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
                  {/* Share button: static on mobile (no overlap), absolute on md+ */}
                  <div className="mb-2 flex justify-end md:mb-0 md:absolute md:right-3 md:top-3 md:z-10">
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

        {/* Button to load next chunk */}
        {canLoadMore ? (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        ) : (
          filtered.length > 0 && (
            <div className="mt-6 text-center text-xs text-slate-400">
              You’re all caught up.
            </div>
          )
        )}
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
          background: linear-gradient(
            180deg,
            rgba(255, 140, 0, 0.55),
            rgba(255, 184, 77, 0.55)
          );
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        .nice-scroll:hover::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(255, 140, 0, 0.75),
            rgba(255, 184, 77, 0.75)
          );
        }
        .nice-scroll::-webkit-scrollbar-thumb:active {
          background: linear-gradient(
            180deg,
            rgba(255, 140, 0, 0.95),
            rgba(255, 184, 77, 0.95)
          );
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
      :target { scroll-margin-top: 96px; }
      `}</style>
    </>
  );
}
