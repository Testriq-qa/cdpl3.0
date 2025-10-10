// =============================
// components/our-team/CultureValuesBand.tsx
// =============================
"use client";

import { Fragment } from "react";
import {
    ShieldCheck,
    Sparkles,
    Users2,
    Check,
    Rocket,
    GraduationCap,
    Gauge,
    Handshake,
    Lightbulb,
} from "lucide-react";

type Value = {
    title: string;
    desc: string;
    points?: string[];
    icon: React.ElementType;
};

const BRAND = "#ff8c00"; // Cinute Digital brand

const values: Value[] = [
    {
        title: "Outcomes First",
        desc:
            "Industry-aligned curriculum, hiring-partner rubrics, and portfolio-ready capstones ensure graduates are truly job-ready.",
        points: ["Placement support", "Mock interviews", "ATS-friendly resume"],
        icon: ShieldCheck,
    },
    {
        title: "Evergreen Curriculum",
        desc:
            "Continuously updated stack—Playwright, Selenium, Postman, REST & GraphQL, Git, DevOps, CI/CD, and GenAI—mirrors real engineering.",
        points: ["Hands-on projects", "Tooling best practices", "Version control workflows"],
        icon: Sparkles,
    },
    {
        title: "Human Mentorship",
        desc:
            "Mentor-led cohorts, code reviews, and interview drills that boost confidence and accelerate practical learning.",
        points: ["Live problem-solving", "Career guidance", "Peer learning circles"],
        icon: Users2,
    },
    {
        title: "Project-Based Learning",
        desc:
            "Work on live or sandbox projects that simulate sprint cycles, QA workflows, and product releases.",
        points: ["Agile ceremonies", "Defect triage", "Release readiness"],
        icon: Rocket,
    },
    {
        title: "Measured Skill Growth",
        desc:
            "Rubric-based assessments, skill maps, and analytics help you track progress and close gaps faster.",
        points: ["Skill matrix", "Weekly checkpoints", "Personalized feedback"],
        icon: Gauge,
    },
    {
        title: "Community & Ethics",
        desc:
            "A supportive, inclusive community with an emphasis on responsible AI, accessibility, and professional ethics.",
        points: ["Inclusive guidelines", "A11y awareness", "Responsible AI usage"],
        icon: Handshake,
    },
];

export default function TeamCultureSection() {
    return (
        <section
            id="culture-values"
            aria-labelledby="culture-values-heading"
            className="relative mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8"
            style={{
                // Subtle futuristic glow that still feels light
                background:
                    "radial-gradient(80% 60% at 50% -10%, rgba(255,140,0,0.06) 0%, rgba(255,140,0,0.0) 60%)",
            }}
        >
            {/* Header */}
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2
                        id="culture-values-heading"
                        className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                    >
                        Culture & Values
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                        Cinute Digital champions <strong>job-ready skills</strong>,{" "}
                        <strong>mentor-led training</strong>, and{" "}
                        <strong>project-based learning</strong>—so every learner graduates with
                        demonstrable, <strong>industry-aligned</strong> competence.
                    </p>
                </div>

                {/* Mini stats / trust badges */}
                <div className="flex flex-wrap items-center gap-2">
                    <Badge>ISO-aligned training</Badge>
                    <Badge>Hiring partner network</Badge>
                    <Badge>Live projects</Badge>
                    <Badge>Interview prep</Badge>
                </div>
            </div>

            {/* Value cards */}
            <div className="mt-6 grid items-stretch gap-6 md:grid-cols-3">
                {values.map((item) => (
                    <article
                        key={item.title}
                        className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-center gap-3">
                            <IconWrap Icon={item.icon} />
                            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                        </div>

                        <p className="mt-2 text-sm text-slate-700">{item.desc}</p>

                        {item.points && item.points.length > 0 ? (
                            <ul className="mt-3 space-y-2">
                                {item.points.map((p) => (
                                    <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                                        <Check className="mt-0.5 h-4 w-4 flex-none text-slate-800" aria-hidden="true" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </article>
                ))}
            </div>

            {/* Bottom band: learning promise */}
            <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3">
                <PromiseItem
                    icon={GraduationCap}
                    title="Career-Centric Learning"
                    text="Capstones, real QA workflows, and recruiter-reviewed portfolios to accelerate placements."
                />
                <Separator />
                <PromiseItem
                    icon={Lightbulb}
                    title="Modern Tooling"
                    text="Playwright, Selenium, Postman, Git, CI/CD, and GenAI woven into every module."
                />
                <Separator className="hidden sm:block" />
                <PromiseItem
                    icon={Handshake}
                    title="Mentors Who Care"
                    text="Human feedback, code reviews, and interview drills that build confidence."
                />
            </div>
        </section>
    );
}

/* ========== Small UI helpers (kept in file for reusability) ========== */

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
            style={{
                boxShadow: "0 6px 16px -10px rgba(0,0,0,0.2)",
            }}
        >
            {/* tiny brand dot */}
            <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: BRAND }}
            />
            {children}
        </span>
    );
}

function IconWrap({ Icon }: { Icon: React.ElementType }) {
    return (
        <span
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white"
            style={{
                boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.03), 0 8px 20px -12px rgba(15,23,42,0.16)",
            }}
        >
            <Icon className="h-5 w-5 text-slate-800" aria-hidden="true" />
        </span>
    );
}

function PromiseItem({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <span
                className="grid h-10 w-10 flex-none place-items-center rounded-2xl border border-slate-200 bg-white"
                style={{ boxShadow: "0 8px 20px -12px rgba(15,23,42,0.16)" }}
            >
                <Icon className="h-5 w-5 text-slate-800" aria-hidden="true" />
            </span>
            <div>
                <p className="text-sm font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-700">{text}</p>
            </div>
        </div>
    );
}

function Separator({ className = "" }: { className?: string }) {
    return <div className={`h-px w-full bg-slate-200 ${className}`} role="separator" />;
}
