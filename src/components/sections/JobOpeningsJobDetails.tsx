"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";

type Skill = { skill_name: string; years?: string | number | null; level?: string | null };

export type JobDetail = {
    job_id: string;
    job_title: string;
    description: string;
    location: string | null | "";
    location_type: string;
    job_type: string;
    min_charge: string | number;
    max_charge: string | number;
    min_experience: string | number;
    max_experience: string | number;
    job_referral_url: string;
    skills: Skill[];
};

type APIMessage = { Message: string };

export type JobDetailsProps = {
    getJobByIdAction: (job_id: string) => Promise<{ status: number; data: JobDetail }>;
    verifyCandidateAction: (p: {
        email: string;
        mobile: string;
        mobile_country_code: number | string;
    }) => Promise<APIMessage>;
    createCandidateAction: (p: {
        first_name?: string;
        last_name?: string;
        resume: string;
        mobile: string;
        mobile_country_code: number | string;
        email: string;
    }) => Promise<APIMessage>;
};

type InternalProps = JobDetailsProps & { jobId?: string | null; open: boolean; onClose: () => void };

const decodeAndStrip = (raw?: string) => {
    if (!raw) return "";
    const decoded = raw.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
    return decoded.replace(/<[^>]*>/g, "");
};

export default function JobOpeningsJobDetails({ jobId, open, onClose, ...actions }: InternalProps) {
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<JobDetail | null>(null);
    const [error, setError] = useState<string | null>(null);

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dial, setDial] = useState<`${number}` | string>("91");
    const [resume, setResume] = useState("");
    const [submitting, setSubmitting] = useState(false);

    React.useEffect(() => {
        let ignore = false;
        async function run() {
            if (!open || !jobId) return;
            setLoading(true);
            setError(null);
            try {
                const res = await actions.getJobByIdAction(jobId);
                if (!ignore) setDetail(res.data);
            } catch (e: unknown) {
                if (!ignore) setError(e instanceof Error ? e.message : "Failed to load job");
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        run();
        return () => {
            ignore = true;
        };
    }, [open, jobId, actions]);

    const skillChips = useMemo(() => {
        const names = Array.from(new Set((detail?.skills ?? []).map((s) => s.skill_name)));
        return names.map((name, i) => (
            <span
                key={`${detail?.job_id ?? "job"}-skill-${i}-${name}`}
                className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200"
            >
                {name}
            </span>
        ));
    }, [detail?.skills, detail?.job_id]);

    async function handleApply(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        if (!detail?.job_referral_url) {
            setError("Missing referral URL for this job.");
            return;
        }
        if (!resume) {
            setError("Please paste a resume URL (PDF/Docs).");
            return;
        }

        try {
            setSubmitting(true);

            const verify = await actions.verifyCandidateAction({
                email,
                mobile,
                mobile_country_code: dial,
            });

            const msg = (verify?.Message ?? "").toLowerCase();
            const exists = msg.includes("exist in our database") && !msg.includes("dose not exist");

            if (!exists) {
                await actions.createCandidateAction({
                    email,
                    mobile,
                    mobile_country_code: dial,
                    resume,
                });
            }

            window.open(detail.job_referral_url, "_blank", "noopener,noreferrer");
            onClose();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 24, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 140, damping: 18 }}
                        className="container mx-auto my-6 max-w-6xl px-4"
                    >
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                            <div className="flex flex-col items-start justify-between gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                                        {detail?.job_title ?? "Job details"}
                                    </h2>
                                    {detail?.location && (
                                        <p className="mt-1 text-sm text-slate-600">
                                            {detail.location} • {detail.location_type} • {detail.job_type}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    {detail?.job_referral_url && (
                                        <a
                                            href={detail.job_referral_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                                        >
                                            Apply
                                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7" />
                                                <path d="M10 7h7v7" />
                                            </svg>
                                        </a>
                                    )}
                                    <button
                                        onClick={onClose}
                                        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* CDPL-styled scroll area */}
                            <div className="cdpl-scroll max-h-[85vh] overflow-y-auto p-5">
                                <div className="flex flex-col gap-6 md:flex-row">
                                    <div className="flex-1">
                                        <section className="rounded-lg border border-slate-200 bg-white">
                                            <div className="border-b border-slate-200 px-4 py-3">
                                                <h3 className="text-sm font-semibold text-slate-900">Job Description</h3>
                                            </div>
                                            <div className="px-4 py-4">
                                                {loading && <p>Loading…</p>}
                                                {error && (
                                                    <p className="rounded-md border border-rose-200 bg-rose-50 p-3 text-rose-700">
                                                        {error}
                                                    </p>
                                                )}
                                                {!loading && !error && (
                                                    <>
                                                        <p className="whitespace-pre-line text-slate-800">
                                                            {decodeAndStrip(detail?.description)}
                                                        </p>

                                                        <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                                                            <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                                                                <span className="block text-xs text-slate-500">Experience</span>
                                                                <span className="font-medium text-slate-800">
                                                                    {detail?.min_experience}–{detail?.max_experience} yrs
                                                                </span>
                                                            </div>
                                                            <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                                                                <span className="block text-xs text-slate-500">Comp</span>
                                                                <span className="font-medium text-slate-800">
                                                                    {detail?.min_charge} – {detail?.max_charge}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 flex flex-wrap gap-2">
                                                            {skillChips}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </section>

                                        <section className="mt-6 rounded-lg border border-slate-200 bg-white">
                                            <div className="border-b border-slate-200 px-4 py-3">
                                                <h3 className="text-sm font-semibold text-slate-900">Quick Apply</h3>
                                                <p className="text-xs text-slate-600">
                                                    We’ll verify and create your candidate (if needed) and then take you to the application page.
                                                </p>
                                            </div>
                                            <form onSubmit={handleApply} className="grid gap-3 px-4 py-4">
                                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                                    <input
                                                        className="col-span-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                                                        placeholder="Code"
                                                        value={dial}
                                                        onChange={(e) => setDial(e.target.value)}
                                                        required
                                                    />
                                                    <input
                                                        className="col-span-1 sm:col-span-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                                                        placeholder="Mobile"
                                                        value={mobile}
                                                        onChange={(e) => setMobile(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <input
                                                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                                                    placeholder="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <input
                                                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                                                    placeholder="Resume URL (PDF/Docs)"
                                                    value={resume}
                                                    onChange={(e) => setResume(e.target.value)}
                                                    required
                                                />
                                                <div className="mt-2 flex flex-wrap items-center gap-3">
                                                    <button
                                                        type="submit"
                                                        disabled={submitting}
                                                        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
                                                    >
                                                        {submitting ? "Processing…" : "Verify & Continue"}
                                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="M7 17L17 7" />
                                                            <path d="M10 7h7v7" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={onClose}
                                                        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </form>
                                        </section>
                                    </div>

                                    <aside className="w-full shrink-0 space-y-4 md:w-[320px]">
                                        <section className="rounded-lg border border-slate-200 bg-white p-4">
                                            <h4 className="text-sm font-semibold text-slate-900">About this job</h4>
                                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                                <li>
                                                    <span className="text-slate-500">Location:</span> {detail?.location ?? "Multiple"}
                                                </li>
                                                <li>
                                                    <span className="text-slate-500">Type:</span> {detail?.job_type}
                                                </li>
                                                <li>
                                                    <span className="text-slate-500">Mode:</span> {detail?.location_type}
                                                </li>
                                            </ul>
                                        </section>

                                        <section className="rounded-lg border border-slate-200 bg-white p-4">
                                            <h4 className="text-sm font-semibold text-slate-900">Other jobs</h4>
                                            <p className="mt-2 text-xs text-slate-600">Explore more roles from the list view.</p>
                                        </section>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CDPL scrollbar styling (scoped to .cdpl-scroll) */}
                    <style jsx global>{`
            .cdpl-scroll {
              scrollbar-width: thin;
              scrollbar-color: rgba(255, 140, 0, 0.6) transparent; /* Firefox */
            }
            .cdpl-scroll::-webkit-scrollbar {
              width: 12px;
            }
            .cdpl-scroll::-webkit-scrollbar-track {
              background: transparent;
            }
            .cdpl-scroll::-webkit-scrollbar-thumb {
              background: linear-gradient(
                180deg,
                rgba(255,140,0,0.85),
                rgba(255,184,77,0.85) 50%,
                rgba(125,211,252,0.9)
              );
              border-radius: 9999px;
              border: 3px solid transparent;
              background-clip: padding-box;
            }
            .cdpl-scroll:hover::-webkit-scrollbar-thumb {
              background: linear-gradient(
                180deg,
                rgba(255,140,0,1),
                rgba(255,184,77,1) 50%,
                rgba(125,211,252,1)
              );
            }
            .cdpl-scroll::-webkit-scrollbar-thumb:active {
              background: linear-gradient(
                180deg,
                rgba(255,125,0,1),
                rgba(255,170,60,1) 50%,
                rgba(110,200,250,1)
              );
            }
            .cdpl-scroll::-webkit-scrollbar-corner {
              background: transparent;
            }
          `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
