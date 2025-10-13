"use client";

import { useMemo, useState } from "react";
import type { Job } from "@/app/jobs/live-jobs/page";
import { JobsLiveJobsFilterBarSection } from "./JobsLiveJobsFilterBarSection";
import { JobsLiveJobsJobsGridSection } from "./JobsLiveJobsJobsGridSection";

export type JobsFilters = { q: string; loc: string; type: string };

export function JobsLiveJobsListingSection({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<JobsFilters>({ q: "", loc: "", type: "" });

  const locations = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach(j => {
      set.add(j.location);
      j.location.split("/").map(s => s.trim()).forEach(c => set.add(c));
    });
    const arr = Array.from(set).filter(Boolean);
    const prio = ["Mumbai", "Navi Mumbai", "Pune", "Chennai", "Bengaluru", "Hyderabad", "Gurugram", "Remote"];
    const sorted = [
      ...prio.filter(p => arr.includes(p)),
      ...arr.filter(a => !prio.includes(a))
    ];
    return sorted;
  }, [jobs]);

  return (
    <section aria-labelledby="jobs-listing" className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-4">
          <JobsLiveJobsFilterBarSection
            value={filters}
            onChange={setFilters}
            locations={locations}
          />
        </div>

        <h2 id="jobs-listing" className="text-2xl font-extrabold leading-tight">Latest openings</h2>
        <p className="mt-1 text-[15px] text-slate-600 sm:text-base">
          We verify authenticity before posting. Check venue and timing for walk-ins; carry updated CV and ID.
        </p>

        <JobsLiveJobsJobsGridSection jobs={jobs} filters={filters} />
      </div>
    </section>
  );
}
