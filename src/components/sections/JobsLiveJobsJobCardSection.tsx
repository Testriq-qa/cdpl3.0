"use client";

import {
    Briefcase,
    Building2,
    MapPin,
    Calendar,
    Clock,
    ExternalLink,
    Link as LinkIcon,
    Tag,
} from "lucide-react";
import type { Job } from "@/app/jobs/live-jobs/page";

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

function inferTech(job: Job) {
    const hay = [job.title, ...(job.highlights || []), ...(job.responsibilities || [])]
        .join(" ")
        .toLowerCase();

    const DICT = [
        "java", "python", "javascript", "typescript", "selenium", "jmeter", "postman", "restassured", "rest assured",
        "cypress", "playwright", "appium", "sql", "mysql", "postgres", "mongodb", "aws", "azure", "gcp", "docker",
        "kubernetes", "jenkins", "git", "pytest", "testng", "maven", "gradle", "react", "node", "next.js", "go", "golang", "ci/cd"
    ];

    const found = new Set<string>();
    for (const k of DICT) {
        if (hay.includes(k)) found.add(k.replace(/\brest assured\b/, "Rest Assured"));
    }
    const titleCase = (s: string) =>
        s
            .split(/[\s/]+/)
            .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
            .join(" ");

    return Array.from(found)
        .map((t) => t.replace("next.js", "Next.js"))
        .map(titleCase)
        .sort();
}

export function JobsLiveJobsJobCardSection({ job }: { job: Job }) {
    const dateText = job.eventDate ? `Event: ${formatDate(job.eventDate)}` : `Posted: ${formatDate(job.postedOn)}`;

    const anyJob = job as unknown as {
        tech?: string[];
        requirements?: string[];
        tips?: string | string[];
    };

   
    const _requirements =
        (anyJob.requirements && anyJob.requirements.length
            ? anyJob.requirements
            : job.responsibilities && job.responsibilities.length
                ? job.responsibilities
                : job.highlights)?.slice(0, 6) || [];

    const _tip =
        typeof anyJob.tips === "string"
            ? anyJob.tips
            : Array.isArray(anyJob.tips) && anyJob.tips.length
                ? anyJob.tips[0]
                : (() => {
                    if ((job.title || "").toLowerCase().includes("qa") || inferTech(job).includes("Selenium")) {
                        return "Quick tip: bring examples of test cases you’ve designed and how you measured coverage. Keep one API + one UI scenario ready.";
                    }
                    if ((job.title || "").toLowerCase().includes("data")) {
                        return "Quick tip: show a small portfolio repo—SQL query samples + one notebook with EDA. Recruiters love quick, tangible proof.";
                    }
                    return "Quick tip: tailor your resume keywords to the skills listed here. Keep a 30-sec project story that ends with a measurable outcome.";
                })();

    return (
        <article className="relative flex h-full flex-col">
            <div
                aria-hidden
                className="pointer-events-none absolute right-3 top-3 h-16 w-16 rounded-full blur-xl opacity-30"
                style={{ background: "radial-gradient(closest-side, rgba(125,211,252,.45), rgba(255,140,0,.0))" }}
            />

            <div className="flex items-start gap-3">
                <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{
                        background: "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                        boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
                    }}
                >
                    <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-xl font-extrabold leading-tight text-slate-900">{job.title}</h3>
                    <p className="mt-0.5 flex flex-wrap items-center gap-2 text-[13px] text-slate-600">
                        <span className="inline-flex items-center">
                            <Building2 className="mr-1 h-3.5 w-3.5" />
                            {job.company}
                        </span>

                        {job.companySite ? (
                            <>
                                <span className="text-slate-300">•</span>
                                <a
                                    href={job.companySite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-slate-700 hover:text-slate-900"
                                    title="Company website"
                                >
                                    <LinkIcon className="mr-1 h-3.5 w-3.5" />
                                    Visit site
                                </a>
                            </>
                        ) : null}

                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center">
                            <MapPin className="mr-1 h-3.5 w-3.5" />
                            {job.location}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center">
                            <Calendar className="mr-1 h-3.5 w-3.5" />
                            {dateText}
                        </span>
                    </p>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {job.type}
                </span>
                {job.mode && (
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {job.mode}
                    </span>
                )}
                <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                    Exp: {job.exp}
                </span>
                {job.salary && (
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                        {job.salary}
                    </span>
                )}
            </div>

            {job.highlights?.length ? (
                <ul className="mt-3 grid gap-1.5">
                    {job.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="text-[13.5px] leading-relaxed text-slate-700">
                            • {h}
                        </li>
                    ))}
                </ul>
            ) : null}

            <div className="mt-4">
                <div className="mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-slate-500" />
                    <h4 className="text-sm font-semibold text-slate-900">Tech stack</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {(function infer(job: Job) {
                        const hay = [job.title, ...(job.highlights || []), ...(job.responsibilities || [])]
                            .join(" ")
                            .toLowerCase();
                        const DICT = [
                            "java", "python", "javascript", "typescript", "selenium", "jmeter", "postman", "restassured", "rest assured",
                            "cypress", "playwright", "appium", "sql", "mysql", "postgres", "mongodb", "aws", "azure", "gcp", "docker",
                            "kubernetes", "jenkins", "git", "pytest", "testng", "maven", "gradle", "react", "node", "next.js", "go", "golang", "ci/cd"
                        ];
                        const found = new Set<string>();
                        for (const k of DICT) if (hay.includes(k)) found.add(k.replace(/\brest assured\b/, "Rest Assured"));
                        const titleCase = (s: string) =>
                            s
                                .split(/[\s/]+/)
                                .map((w) => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
                                .join(" ");
                        return Array.from(found)
                            .map((t) => t.replace("next.js", "Next.js"))
                            .map(titleCase)
                            .slice(0, 12)
                            .sort();
                    })(job).map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
                <a
                    href={`mailto:${job.applyEmail ?? ""}`}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                    style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
                >
                    Apply via Email
                </a>

                {job.applyLink && (
                    <a
                        href={job.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm"
                    >
                        Apply Online <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                )}

                <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                    <Clock className="h-3.5 w-3.5" />
                    {job.timeWindow ?? "Timing TBA"}
                </span>
            </div>

            {/* === Additional content (appended; styles match existing) === */}
            {_requirements.length ? (
                <div className="mt-5 border-t border-slate-100 pt-3">
                    <h4 className="text-sm font-semibold text-slate-900">Requirements</h4>
                    <ul className="mt-2 grid gap-1.5">
                        {_requirements.map((r, idx) => (
                            <li key={`${idx}-${r}`} className="text-[13.5px] leading-relaxed text-slate-700">
                                • {r}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {(job.venue || job.eventDate || job.timeWindow) && (
                <div className="mt-5 border-t border-slate-100 pt-3">
                    <h4 className="text-sm font-semibold text-slate-900">Venue & schedule</h4>
                    <div className="mt-2 grid gap-1.5 text-[13.5px] leading-relaxed text-slate-700">
                        {job.venue && (
                            <p className="inline-flex items-start">
                                <MapPin className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                                <span>{job.venue}</span>
                            </p>
                        )}
                        {job.eventDate && (
                            <p className="inline-flex items-start">
                                <Calendar className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                                <span>{formatDate(job.eventDate)}</span>
                            </p>
                        )}
                        {job.timeWindow && (
                            <p className="inline-flex items-start">
                                <Clock className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                                <span>{job.timeWindow}</span>
                            </p>
                        )}
                    </div>
                </div>
            )}

            {Array.isArray(job.contacts) && job.contacts.length > 0 ? (
                <div className="mt-5 border-t border-slate-100 pt-3">
                    <h4 className="text-sm font-semibold text-slate-900">Hiring contacts</h4>
                    <ul className="mt-2 grid gap-1.5">
                        {job.contacts.slice(0, 4).map((c, i) => (
                            <li key={`${i}-${c}`} className="text-[13.5px] leading-relaxed text-slate-700">
                                • {c}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

            {_tip ? (
                <div className="mt-5 border-t border-slate-100 pt-3">
                    <p className="text-[13px] text-slate-700">
                        <span className="mr-2 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700">
                            Pro tip
                        </span>
                        {_tip}
                    </p>
                </div>
            ) : null}
            {/* === End additional content === */}
        </article>
    );
}
