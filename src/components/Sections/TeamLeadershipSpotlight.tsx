// =============================
// components/our-team/LeadershipSpotlight.tsx
// =============================
"use client";

import type { TeamMember } from "@/app/our-team/types";
import { TeamCard } from "@/app/our-team/ui";
import Link from "next/link";
import Script from "next/script";
import {
    ChevronRight,
    Sparkles,
    ShieldCheck,
    Users2,
    GraduationCap,
    ArrowRight,
} from "lucide-react";
import { useMemo } from "react";

type Props = { data: TeamMember[] };

const BRAND = "#ff8c00"; // Cinute Digital brand accent

export default function TeamLeadershipSpotlight({ data }: Props) {
    const leaders = useMemo(
        () => data.filter((m) => m.role === "Leadership"),
        [data]
    );

    if (leaders.length === 0) return null;

    // JSON-LD: expose leaders as an ItemList for better SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Cinute Digital Leadership Team",
        description:
            "Meet the leadership team behind Cinute Digital’s mentor-led training, ISO-aligned curriculum, and job-ready outcomes.",
        itemListElement: leaders.map((m, idx) => ({
            "@type": "Person",
            position: idx + 1,
            name: m.name,
            jobTitle: m.title ?? "Leadership",
            worksFor: { "@type": "Organization", name: "Cinute Digital" },
            image: m.avatar ?? undefined,
            sameAs: m.linkedin ? [m.linkedin] : undefined,
        })),
    };

    return (
        <section
            id="leadership"
            aria-labelledby="leadership-heading"
            className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
            {/* subtle light-theme flourish */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-60"
                style={{
                    maskImage:
                        "radial-gradient(60% 50% at 50% 0%, black 40%, transparent 65%)",
                    WebkitMaskImage:
                        "radial-gradient(60% 50% at 50% 0%, black 40%, transparent 65%)",
                    background:
                        "linear-gradient(180deg, rgba(255,140,0,0.07), rgba(255,255,255,0.0))",
                }}
            />

            {/* Heading + CTA */}
            <div className="flex flex-wrap items-end justify-center text-center gap-4">
                <div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                            Future-Ready Leadership
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                            ISO-Aligned Training
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                            Mentor-Led Learning
                        </span>
                    </div>

                    <h2
                        id="leadership-heading"
                        className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent"
                    >
                        Leadership Spotlight
                    </h2>

                    <p className="mt-5 max-w-5xl text-lg leading-relaxed text-slate-600">
                        Learn from industry veterans who architect{" "}
                        <strong>job-ready, mentor-led programs</strong> with{" "}
                        <strong>real-world projects</strong>, <strong>placement support</strong>, and
                        continuously updated, <strong>ISO-aligned curriculum</strong>. Our leadership
                        team drives outcomes with <strong>hands-on training</strong>,{" "}
                        <strong>portfolio-first learning</strong>, and{" "}
                        <strong>cutting-edge tools</strong> used in modern software engineering.
                    </p>
                </div>

                {/* <div className="shrink-0">
                    <Link
                        href="#directory"
                        className="group inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
                        aria-label="See all mentors in the team directory"
                    >
                        See all mentors{" "}
                        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                </div> */}
            </div>

            {/* Trust metrics / proof points */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <StatChip
                    icon={Users2}
                    label="Learners mentored"
                    value="10k+"
                    helper="Live cohorts & 1:1 guidance"
                />
                <StatChip
                    icon={ShieldCheck}
                    label="Hiring partner touchpoints"
                    value="75+"
                    helper="Referrals & interview prep"
                />
                <StatChip
                    icon={GraduationCap}
                    label="Capstone success rate"
                    value="94%"
                    helper="Portfolio-first outcomes"
                />
            </div>

            {/* Leader cards */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {leaders.map((m) => (
                    <TeamCard key={m.id} m={m} />
                ))}
            </div>

            {/* CTA band */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-sm font-semibold tracking-tight text-slate-900">
                            Book a free career consultation
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                            Speak with a mentor about learning paths, real projects, and
                            <span className="font-medium"> placement support</span>.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-1 rounded-xl border border-transparent bg-[color:#ff8c00] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[color:#ff8c00]/30"
                        >
                            Talk to a mentor <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/programs"
                            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
                        >
                            Explore programs
                        </Link>
                    </div>
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <Script
                id="leadership-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}

/** ————— Reusable subcomponent: light-themed stat chip ————— */
function StatChip({
    icon: Icon,
    value,
    label,
    helper,
}: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    value: string;
    label: string;
    helper?: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition">
            <div className="flex items-center gap-3">
                <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                        boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.06)",
                    }}
                    aria-hidden="true"
                >
                    <Icon className="h-5 w-5" style={{ color: BRAND }} />
                </div>
                <div>
                    <div className="text-lg font-extrabold leading-none text-slate-900">
                        {value}
                    </div>
                    <div className="text-xs font-medium text-slate-600">{label}</div>
                </div>
            </div>
            {helper ? (
                <p className="mt-2 text-xs text-slate-500">{helper}</p>
            ) : null}
        </div>
    );
}
