"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import JobDetails, { JobDetailsProps } from "./JobOpeningsJobDetails";

type Skill = { skill_name: string; years?: string | number | null; level?: string | null };
type Position = { position_name: string };

export type JobSummary = {
    job_id: string;
    job_title: string;
    description: string;
    location: string | null;
    location_type: string;
    job_type: string;
    min_charge: number | string;
    max_charge: number | string;
    min_experience: string | number;
    max_experience: string | number;
    job_referral_url: string;
    skills: Skill[];
    positions: Position[];
    currencySymbol?: string;
    currency?: string;
};

export type JobListResponse = { status: number; data: { job: JobSummary[]; total_count: number } };
export type FetchJobsArgs = { page?: number; size?: number; q?: string };

type Props = {
    initialJobs: JobSummary[];
    totalCount: number;
    pageSize: number;
    className?: string;
    emptyState?: { title: string; body?: string };

    getJobsAction: (args: FetchJobsArgs) => Promise<JobListResponse>;
    getJobByIdAction: JobDetailsProps["getJobByIdAction"];
    verifyCandidateAction: JobDetailsProps["verifyCandidateAction"];
    createCandidateAction: JobDetailsProps["createCandidateAction"];
};

export default function JobOpeningsJobBrowser({
    initialJobs,
    totalCount,
    pageSize,
    className,
    emptyState,
    getJobsAction,
    getJobByIdAction,
    verifyCandidateAction,
    createCandidateAction,
}: Props) {
    const [jobs, setJobs] = React.useState<JobSummary[]>(initialJobs);
    const [count, setCount] = React.useState<number>(totalCount);
    const [page, setPage] = React.useState(1);

    // UI filters
    const [q, setQ] = React.useState("");
    const [locType, setLocType] = React.useState<"all" | "remote" | "onsite" | "hybrid">("all");
    const [exp, setExp] = React.useState<[number, number]>([0, 15]);

    // details
    const [selected, setSelected] = React.useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    async function loadPage(newPage: number) {
        const res = await getJobsAction({ page: newPage, size: pageSize });
        setJobs(res?.data?.job ?? []);
        setCount(res?.data?.total_count ?? 0);
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const filtered = React.useMemo(() => {
        let list = [...jobs];
        if (q.trim()) {
            const term = q.toLowerCase();
            list = list.filter(
                (j) =>
                    j.job_title.toLowerCase().includes(term) ||
                    j.description?.toLowerCase().includes(term) ||
                    j.skills?.some((s) => s.skill_name.toLowerCase().includes(term))
            );
        }
        if (locType !== "all") list = list.filter((j) => (j.location_type || "").toLowerCase() === locType);
        list = list.filter((j) => {
            const min = Number(j.min_experience ?? 0);
            const max = Number(j.max_experience ?? min);
            return max >= exp[0] && min <= exp[1];
        });
        return list;
    }, [jobs, q, locType, exp]);

    const totalPages = Math.max(1, Math.ceil(count / pageSize));

    const Chip = ({ children }: { children: React.ReactNode }) => (
        <span className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200">
            {children}
        </span>
    );

    const Logo = ({ title }: { title: string }) => {
        const initials = title
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0]?.toUpperCase())
            .join("");
        return (
            <div className="grid h-14 w-14 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                {initials || "•"}
            </div>
        );
    };

    return (
        <div
            className={`mt-8 flex flex-col gap-6 md:flex-row md:items-start ${className ?? ""}`}
        >
            {/* Sticky filter column */}
            <aside className="w-full shrink-0 rounded-xl border border-slate-200 bg-white md:sticky md:top-6 md:w-[320px]">
                <div className="border-b border-slate-200 p-4 text-center text-sm font-semibold text-slate-900">
                    Search other jobs
                </div>
                <div className="space-y-4 p-4 text-sm">
                    <div>
                        <label className="mb-1 block text-xs font-medium text-slate-600">Search</label>
                        <input
                            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                            placeholder="Enter skills or title, e.g. Java, C++"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-xs font-medium text-slate-600">Location type</label>
                        <div className="flex flex-wrap gap-2">
                            {(["all", "remote", "onsite", "hybrid"] as const).map((key) => {
                                const active = locType === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setLocType(key)}
                                        className={`rounded-md px-3 py-1 text-xs ${active
                                                ? "bg-emerald-500 text-white"
                                                : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
                                            }`}
                                    >
                                        {key[0].toUpperCase() + key.slice(1)}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <label className="mb-1 block text-xs font-medium text-slate-600">
                            Experience (years)
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                min={0}
                                max={exp[1]}
                                value={exp[0]}
                                onChange={(e) => setExp([Number(e.target.value), exp[1]])}
                                className="w-20 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
                            />
                            <span className="text-slate-400">—</span>
                            <input
                                type="number"
                                min={exp[0]}
                                max={40}
                                value={exp[1]}
                                onChange={(e) => setExp([exp[0], Number(e.target.value)])}
                                className="w-20 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Results column */}
            <section className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-medium text-slate-900">{filtered.length}</span> of{" "}
                        <span className="font-medium text-slate-900">{count}</span> jobs
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                        <button
                            disabled={page <= 1}
                            onClick={() => loadPage(page - 1)}
                            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700 disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="text-slate-600">
                            {page} / {totalPages}
                        </span>
                        <button
                            disabled={page * pageSize >= count}
                            onClick={() => loadPage(page + 1)}
                            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-slate-700 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>

                <ul className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((job) => (
                            <motion.li
                                key={job.job_id}
                                layout
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Card: logo / content / right 'View »' */}
                                <div className="relative grid grid-cols-[72px,1fr,110px] gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                    {/* Vertical divider */}
                                    <div className="pointer-events-none absolute inset-y-0 right-[110px] hidden w-px bg-slate-200 md:block" />
                                    {/* Logo */}
                                    <div className="pt-1">
                                        <Logo title={job.job_title} />
                                    </div>
                                    {/* Content */}
                                    <div>
                                        <h3 className="text-[15px] font-semibold text-slate-900">{job.job_title}</h3>
                                        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-600">
                                            <span className="flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#64748b" />
                                                    <circle cx="12" cy="9" r="2.5" stroke="#64748b" />
                                                </svg>
                                                Job available in {job.location || "Multiple"}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 4h14v14H5z" stroke="#64748b" />
                                                    <path d="M3 8h18" stroke="#64748b" />
                                                </svg>
                                                {job.min_experience}–{job.max_experience} years
                                            </span>
                                        </div>
                                        <p className="mt-2 line-clamp-2 text-sm text-slate-700">{job.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {job.skills?.slice(0, 8).map((s) => (
                                                <Chip key={s.skill_name}>{s.skill_name}</Chip>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Right: View button */}
                                    <div className="flex items-center justify-end">
                                        <button
                                            onClick={() => {
                                                setSelected(job.job_id);
                                                setDrawerOpen(true);
                                            }}
                                            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"
                                        >
                                            View »
                                        </button>
                                    </div>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <li className="rounded-xl border border-slate-200 bg-white p-10 text-center">
                            <p className="text-sm font-medium text-slate-900">{emptyState?.title ?? "No results"}</p>
                            {emptyState?.body && <p className="mt-1 text-sm text-slate-600">{emptyState.body}</p>}
                        </li>
                    )}
                </ul>
            </section>

            {/* Details overlay */}
            <JobDetails
                jobId={selected}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                getJobByIdAction={getJobByIdAction}
                verifyCandidateAction={verifyCandidateAction}
                createCandidateAction={createCandidateAction}
            />
        </div>
    );
}
