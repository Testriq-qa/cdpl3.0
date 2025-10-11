// =============================
// components/our-team/CultureValuesBand.tsx
// Futuristic, mentor-forward band for the Our Team page
// Light theme • Brand color: #ff8c00 • Next.js + Tailwind + TypeScript
// =============================
"use client";

import { useMemo, useState } from "react";
import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
    Award,
    GraduationCap,
    Rocket,
    Gauge,
    Handshake,
    Users2,
    ShieldCheck,
    BookOpen,
    Target,
    Cpu,
    Check,
    Star,
    Sparkles,
} from "lucide-react";

// =============================
// Types
// =============================
type Pillar = {
    title: string;
    desc: string;
    icon: ElementType;
};

export type Mentor = {
    id: number;
    name: string;
    title: string;
    avatar?: string; // optional URL
    bio: string;
    tags: string[]; // skills
};

const BRAND = "#ff8c00"; // Cinute Digital brand

// =============================
// Data (sample — replace with dynamic data later if needed)
// =============================
const pillars: Pillar[] = [
    {
        title: "Mentor-Led, Job-Ready",
        desc: "Senior QA engineers & data practitioners lead live sessions, code reviews, and mock interviews for job-ready outcomes.",
        icon: GraduationCap,
    },
    {
        title: "Portfolio Over Theory",
        desc: "Ship capstones mirroring real sprints—defect triage, CI/CD, release readiness that hiring managers trust.",
        icon: Rocket,
    },
    {
        title: "Measured Skill Growth",
        desc: "Rubric-based assessments, weekly checkpoints, and personalized feedback mapped to hiring-partner skill matrices.",
        icon: Gauge,
    },
];

const specialties = [
    {
        title: "Manual & Automation Testing",
        desc: "Selenium, Playwright, Cypress, and BDD frameworks aligned with enterprise QA.",
        icon: ShieldCheck,
        tags: ["Selenium", "Playwright", "Cypress", "BDD", "Jest"],
    },
    {
        title: "API Testing & Tooling",
        desc: "Postman, REST & GraphQL testing, contract tests, and CI automation.",
        icon: BookOpen,
        tags: ["Postman", "REST", "GraphQL", "Newman", "Pact"],
    },
    {
        title: "Performance & Reliability",
        desc: "Load, stress, and soak testing with stakeholder-ready reporting.",
        icon: Target,
        tags: ["k6", "JMeter", "APM", "SLOs"],
    },
    {
        title: "Data & GenAI in QA",
        desc: "Data validation, test data design, and safe GenAI-assisted authoring.",
        icon: Cpu,
        tags: ["Python", "Pandas", "Prompting", "RAG", "Security"],
    },
];

const mentors: Mentor[] = [
    {
        id: 1,
        name: "Aisha Menon",
        title: "Principal QA Engineer • Automation",
        avatar: "/images/trainers/aisha.jpg",
        bio: "Ex-FAANG QA. Scales Playwright test suites, builds CI pipelines, and mentors on debugging at speed.",
        tags: ["Playwright", "TypeScript", "CI/CD"],
    },
    {
        id: 2,
        name: "Rohit Sharma",
        title: "Lead SDET • API & Reliability",
        avatar: "/images/trainers/rohit.jpg",
        bio: "Designs contract tests, observability dashboards, and resilient API test harnesses.",
        tags: ["Postman", "GraphQL", "k6"],
    },
    {
        id: 3,
        name: "Meera Iyer",
        title: "Data in QA • GenAI Coach",
        avatar: "/images/trainers/meera.jpg",
        bio: "Brings data-best practices to QA, plus responsible GenAI for faster authoring & analysis.",
        tags: ["Python", "Pandas", "GenAI"],
    },
];

// =============================
// Component
// =============================
export default function TeamMentorFuturisticBand() {


    const marquee = useMemo(
        () => ["Skill India", "ISO 9001", "Hiring Partners", "Industry Projects", "Interview Prep"],
        []
    );

    return (
        <section
            id="our-team-mentors"
            aria-labelledby="our-team-mentors-heading"
            className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Animated mesh / beam background */}
            <BeamBg />

            {/* Header (centered) */}
            <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="mx-auto max-w-5xl text-center">
                    <h2
                        id="our-team-mentors-heading"
                        className="text-4xl font-bold tracking-tight text-slate-900 text-center"

                    >
                        The People Behind <span className="text-brand">Job-Ready</span> Careers
                    </h2>

                    <p className="mt-5 max-w-5xl text-lg leading-6 text-slate-700 text-center">
                        Learn from <strong>industry-certified QA mentors</strong>, <strong>automation testing trainers</strong>, and
                        <strong> API testing experts</strong> who ship real products. Human feedback, portfolio-first projects, and
                        <strong> recruiter-ready outcomes</strong>.
                    </p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <Badge>
                        <Award className="h-3.5 w-3.5" /> ISO-aligned
                    </Badge>
                    <Badge>
                        <Handshake className="h-3.5 w-3.5" /> Hiring Network
                    </Badge>
                    <Badge>
                        <Sparkles className="h-3.5 w-3.5" /> Live Projects
                    </Badge>
                    <Badge>
                        <Users2 className="h-3.5 w-3.5" /> 1:1 Mentorship
                    </Badge>
                </div>
            </div>


            {/* Rolling marquee — subtle credibility loop */}
            <div className="relative z-10 mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur">
                <motion.div
                    className="flex gap-8 whitespace-nowrap text-xs text-slate-600"
                    animate={{ x: [0, -240] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    aria-hidden
                >
                    {[...marquee, ...marquee].map((m, i) => (
                        <span key={i} className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
                            {m}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* KPI band */}
            <div
                className="relative z-10 mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3"
                style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.18)" }}
            >
                <Metric kpi="20k+" label="Learners Trained" />
                <Separator className="hidden sm:block" />
                <Metric kpi="250+" label="Hiring Partner Referrals" />
                <Separator className="hidden sm:block" />
                <Metric kpi="4" label="Job‑Aligned Tracks" />
            </div>

            {/* Specialties — holographic grid */}
            <div className="relative z-10 mt-10">
                <h3 className="text-base font-semibold text-slate-900">What Our Team Teaches</h3>
                <p className="mt-1 text-sm text-slate-700">
                    <strong>Automation testing trainers</strong>, <strong>API testing mentors</strong>, and
                    <strong> performance engineering experts</strong> deliver hands‑on, recruiter‑trusted skills.
                </p>

                <div className="mt-4 grid gap-6 md:grid-cols-2">
                    {specialties.map((s) => (
                        <HoloCard key={s.title}>
                            <div className="flex items-start gap-3">
                                <IconWrap Icon={s.icon} />
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-900">{s.title}</h4>
                                    <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {s.tags.map((t: string) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                                                style={{ boxShadow: "0 6px 16px -10px rgba(0,0,0,0.12)" }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </HoloCard>
                    ))}
                </div>
            </div>

            {/* CTA band */}
            <div className="relative z-10 mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_auto]">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold text-slate-900">Learn with mentors who build careers—not just courses</p>
                    <p className="mt-1 text-sm text-slate-700">
                        Join mentor‑led programs in <strong>manual & automation testing</strong>, <strong>API testing</strong>,
                        <strong> performance engineering</strong>, and <strong>data for QA</strong>. Build a recruiter‑ready portfolio.
                    </p>
                </div>
                <a
                    href="/apply"
                    className="inline-flex items-center justify-center bg-brand rounded-xl px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.99]"
                    
                >
                    Apply Now
                </a>
            </div>
        </section>
    );
}



// =============================
// UI helpers
// =============================
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
            style={{ boxShadow: "0 6px 16px -10px rgba(0,0,0,0.2)" }}
        >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
            {children}
        </span>
    );
}

function IconWrap({ Icon }: { Icon: ElementType }) {
    return (
        <span
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white"
            style={{ boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.03), 0 8px 20px -12px rgba(15,23,42,0.16)" }}
        >
            <Icon className="h-5 w-5 text-slate-800" aria-hidden="true" />
        </span>
    );
}

function Separator({ className = "" }: { className?: string }) {
    return <div className={`h-px w-full bg-slate-200 ${className}`} role="separator" />;
}

function Metric({ kpi, label }: { kpi: string; label: string }) {
    return (
        <div className="flex items-center justify-between gap-3 sm:justify-start">
            <div className="text-xl font-bold text-slate-900">{kpi}</div>
            <div className="text-sm text-slate-600">{label}</div>
        </div>
    );
}

// Glassy holographic card with animated border sheen
function HoloCard({ children }: { children: React.ReactNode }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(120% 80% at 10% -10%, rgba(255,140,0,0.12) 0%, rgba(255,140,0,0) 50%)",
                }}
            />
            {/* sheen */}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-x-1 -top-1 h-0.5 opacity-60"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(255,140,0,0.6), rgba(255,179,106,0.8), transparent)",
                }}
                animate={{ x: ["-10%", "110%"] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "linear" }}
            />
            {children}
        </motion.article>
    );
}

// Animated beam / gradient mesh background
function BeamBg() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(80% 60% at 50% -10%, rgba(255,140,0,0.06) 0%, rgba(255,140,0,0) 60%)",
                }}
            />
            <motion.div
                className="absolute left-1/2 top-[-40px] h-40 w-[520px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: "rgba(255,140,0,0.18)" }}
                animate={{ opacity: [0.35, 0.6, 0.35] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-8 top-24 h-36 w-36 rounded-full blur-3xl"
                style={{ background: "rgba(255,179,106,0.35)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </div>
    );
}
