"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";

type Skill = { skill_name: string; years?: string | number | null; level?: string | null };
type Position = { position_name: string };

export type JobDetail = {
    job_id: string;
    job_title: string;
    description: string;
    location: string | null;
    location_type: string;
    job_type: string;
    min_charge: string | number;
    max_charge: string | number;
    min_experience: string | number;
    max_experience: string | number;
    job_referral_url: string;
    skills: Skill[];
    positions: Position[];
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

export default function JobOpeningsJobDetails({ jobId, open, onClose, ...actions }: InternalProps) {
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<JobDetail | null>(null);
    const [error, setError] = useState<string | null>(null);

    // quick apply
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dial, setDial] = useState<`${number}` | string>("91");
    const [resume, setResume] = useState("");

    React.useEffect(() => {
        let ignore = false;
        async function run() {
            if (!open || !jobId) return;
            setLoading(true);
            setError(null);
            try {
                const res = await actions.getJobByIdAction(jobId);
                if (!ignore) setDetail(res.data);
            } catch (e: any) {
                if (!ignore) setError(e?.message ?? "Failed to load job");
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        run();
        return () => {
            ignore = true;
        };
    }, [open, jobId]);

    const skillChips = useMemo(
        () =>
            (detail?.skills ?? []).map((s) => (
                <span
                    key={s.skill_name}
                    className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200"
                >
                    {s.skill_name}
                </span>
            )),
        [detail?.skills]
    );

    async function handleApply(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        try {
            await actions.verifyCandidateAction({ email, mobile, mobile_country_code: dial });
            const created = await actions.createCandidateAction({
                email,
                mobile,
                mobile_country_code: dial,
                resume,
            });
            alert(created?.Message ?? "Submitted");
        } catch (err: any) {
            setError(err?.message ?? "Something went wrong");
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
                        className="container mx-auto my-6 max-w-6xl rounded-xl border border-slate-200 bg-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 p-4">
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

                            <div className="flex items-center gap-2">
                                {detail?.job_referral_url && (
                                    <a
                                        href={detail.job_referral_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
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

                        {/* Body */}
                        <div className="flex flex-col gap-6 p-5 md:flex-row">
                            {/* Main column */}
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
                                                <p className="whitespace-pre-line text-slate-800">{detail?.description}</p>

                                                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
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

                                                <div className="mt-5 flex flex-wrap gap-2">{skillChips}</div>
                                            </>
                                        )}
                                    </div>
                                </section>

                                {/* Quick apply */}
                                <section className="mt-6 rounded-lg border border-slate-200 bg-white">
                                    <div className="border-b border-slate-200 px-4 py-3">
                                        <h3 className="text-sm font-semibold text-slate-900">Quick Apply</h3>
                                        <p className="text-xs text-slate-600">
                                            We’ll verify and create your candidate before redirecting.
                                        </p>
                                    </div>
                                    <form onSubmit={handleApply} className="grid gap-3 px-4 py-4">
                                        <div className="grid grid-cols-3 gap-2">
                                            <input
                                                className="col-span-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                                                placeholder="Code"
                                                value={dial}
                                                onChange={(e) => setDial(e.target.value)}
                                                required
                                            />
                                            <input
                                                className="col-span-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
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
                                        <div className="mt-2 flex items-center gap-3">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
                                            >
                                                Verify & Create
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

                            {/* Sidebar */}
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
