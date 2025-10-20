// JobOpeningsJobBrowser.tsx
"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import { JobDetailsProps } from "./JobOpeningsJobDetails";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500 dark:text-gray-500">{label}</p>
        </div>
    );
}

// ✅ dynamic lazy import (typed via the source file), with loader
const JobOpeningsJobDetails = dynamic(
    () => import("./JobOpeningsJobDetails"),
    { ssr: true, loading: () => <SectionLoader label="Loading job details..." /> }
);

type Skill = { skill_name: string; years?: string | number | null; level?: string | null };

export type JobSummary = {
    job_id: string;
    job_title: string;
    description: string;
    location: string | null | "";
    location_type: string;
    job_type: string;
    min_charge: number | string;
    max_charge: number | string;
    min_experience: string | number;
    max_experience: string | number;
    job_referral_url: string;
    skills: Skill[];
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

    // Share UI feedback
    const [copiedId, setCopiedId] = React.useState<string | null>(null);

    // Open details automatically if the URL has ?job=<id> (or ?id=<id>)
    React.useEffect(() => {
        if (typeof window === "undefined") return;
        const params = new URLSearchParams(window.location.search);
        const deepId = params.get("job") || params.get("id");
        if (deepId) {
            setSelected(deepId);
            setDrawerOpen(true);
        }
    }, []);

    async function loadPage(newPage: number) {
        const res = await getJobsAction({ page: newPage, size: pageSize });
        setJobs(res?.data?.job ?? []);
        setCount(res?.data?.total_count ?? 0);
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // kept to preserve flow; data is already clean so this simply returns text
    const decodeAndStrip = (raw?: string) => {
        if (!raw) return "";
        const decoded = raw.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
        return decoded.replace(/<[^>]*>/g, "");
    };

    const filtered = React.useMemo(() => {
        let list = [...jobs];
        if (q.trim()) {
            const term = q.toLowerCase();
            list = list.filter(
                (j) =>
                    j.job_title.toLowerCase().includes(term) ||
                    decodeAndStrip(j.description).toLowerCase().includes(term) ||
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

    // *** Sticky offset (header + breadcrumb + margin). Adjust if your header changes. ***
    const stickyStyle = { ["--sticky-top" as any]: "96px" } as React.CSSProperties;

    // Copy a deep link (?job=<id>) to clipboard
    const handleShare = async (jobId: string) => {
        const { origin, pathname, search } = window.location;
        const params = new URLSearchParams(search);
        params.set("job", jobId);
        const url = `${origin}${pathname}?${params.toString()}`;

        try {
            await navigator.clipboard.writeText(url);
        } catch {
            // fallback
            const tmp = document.createElement("input");
            tmp.value = url;
            document.body.appendChild(tmp);
            tmp.select();
            document.execCommand("copy");
            document.body.removeChild(tmp);
        } finally {
            setCopiedId(jobId);
            setTimeout(() => setCopiedId((prev) => (prev === jobId ? null : prev)), 1500);
        }
    };

    return (
        <section className={`relative ${className ?? ""}`}>
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                {/* toolbar (TOP pagination) */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-medium text-slate-900">{filtered.length}</span> of{" "}
                        <span className="font-medium text-slate-900">{count}</span> jobs
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
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

                {/* side-by-side */}
                <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-start">
                    {/* filter column */}
                    <aside
                        className={
                            "w-full shrink-0 md:sticky md:top-[var(--sticky-top)] md:w-[300px] lg:w-[320px] " +
                            "z-30 bg-white/95 supports-[backdrop-filter]:backdrop-blur md:bg-transparent"
                        }
                        style={stickyStyle}
                    >
                        <div className="rounded-xl border border-slate-200 bg-white md:sticky md:top-[var(--sticky-top)] md:max-h[calc(100vh-var(--sticky-top)-1rem)] md:overflow-y-auto md:max-h-[calc(100vh-var(--sticky-top)-1rem)]">
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
                                                    className={`rounded-md px-3 py-1 text-xs transition ${active
                                                        ? "bg-orange-500 text-white shadow-sm"
                                                        : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
                                                        }`}
                                                >
                                                    {key[0].toUpperCase() + key.slice(1)}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pb-2">
                                    <label className="mb-1 block text-xs font-medium text-slate-600">Experience (years)</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            min={0}
                                            max={exp[1]}
                                            value={exp[0]}
                                            onChange={(e) => setExp([Number(e.target.value), exp[1]])}
                                            className="w-24 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
                                        />
                                        <span className="text-slate-400">—</span>
                                        <input
                                            type="number"
                                            min={exp[0]}
                                            max={40}
                                            value={exp[1]}
                                            onChange={(e) => setExp([exp[0], Number(e.target.value)])}
                                            className="w-24 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* list column */}
                    <section className="min-w-0 flex-1">
                        <ul className="space-y-4">
                            <AnimatePresence mode="popLayout">
                                {filtered.map((job) => {
                                    const desc = decodeAndStrip(job.description).slice(0, 350);
                                    return (
                                        <motion.li
                                            key={job.job_id}
                                            layout
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {/* card */}
                                            <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[72px,1fr] xl:grid-cols-[72px,1fr,180px]">
                                                {/* logo */}
                                                <div className="sm:pt-1">
                                                    <Logo title={job.job_title} />
                                                </div>

                                                {/* content */}
                                                <div className="min-w-0">
                                                    <h3 className="truncate text-[15px] font-semibold text-slate-900">
                                                        {job.job_title}
                                                    </h3>
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
                                                    <p className="mt-2 break-words text-sm text-slate-700">
                                                        {desc}
                                                        {desc.length === 350 ? "…" : ""}
                                                    </p>
                                                    <div className="mt-3 flex flex-wrap gap-2">
                                                        {Array.from(new Set((job.skills ?? []).map((s) => s.skill_name)))
                                                            .slice(0, 8)
                                                            .map((name, i) => (
                                                                <Chip key={`${job.job_id}-skill-${i}-${name}`}>{name}</Chip>
                                                            ))}
                                                    </div>
                                                </div>

                                                {/* right action */}
                                                <div className="flex items-center justify-start gap-2 sm:justify-end">
                                                    <button
                                                        onClick={() => {
                                                            setSelected(job.job_id);
                                                            setDrawerOpen(true);
                                                        }}
                                                        className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                                                    >
                                                        View »
                                                    </button>

                                                    {/* Share button — copies deep link to clipboard */}
                                                    <button
                                                        onClick={() => handleShare(job.job_id)}
                                                        className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                                        title="Copy link to this job"
                                                    >
                                                        {copiedId === job.job_id ? "Copied" : "Share"}
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </AnimatePresence>

                            {filtered.length === 0 && (
                                <li className="rounded-xl border border-slate-200 bg-white p-10 text-center">
                                    <p className="text-sm font-medium text-slate-900">{emptyState?.title ?? "No results"}</p>
                                    {emptyState?.body && <p className="mt-1 text-sm text-slate-600">{emptyState.body}</p>}
                                </li>
                            )}
                        </ul>

                        {/* pagination at BOTTOM as well */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
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
                    </section>
                </div>
            </div>

            {/* details overlay (outside container so it can be full-screen/modal if needed) */}
            <JobOpeningsJobDetails
                jobId={selected}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                getJobByIdAction={getJobByIdAction}
                verifyCandidateAction={verifyCandidateAction}
                createCandidateAction={createCandidateAction}
            />
        </section>
    );
}
