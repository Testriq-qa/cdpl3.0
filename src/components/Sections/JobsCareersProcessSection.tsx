"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { JSX } from "react";

/**
 * JobsCareersProcessSection — CDPL
 * Creative “Flow Spine” layout:
 * - Mobile: stacked timeline with a soft left rail.
 * - md+: Two staggered columns with a glowing central spine.
 * - Cards are ALWAYS left-aligned (no right-aligned text), with small pointers toward the spine.
 * - Gentle motion, CDPL gradients, curved vibe without clutter.
 */

type Step = { title: string; desc: string; icon: JSX.Element };

export default function JobsCareersProcessSection() {
    const steps: Step[] = [
        {
            title: "Apply",
            desc: "Send your resume/portfolio. A short form is okay.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <path d="M4 7a2 2 0 0 1 2-2h9l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15 5v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: "Intro call",
            desc: "30 mins: role fit, expectations, timelines.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <path d="M3 5h14v10H3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17 9l4-2v6l-4-2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: "Craft exercise",
            desc: "Practical task aligned to real CDPL work.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            ),
        },
        {
            title: "Panel",
            desc: "Deep dive with Engineering/Product/Success.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <circle cx="7" cy="8" r="2.5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <circle cx="17" cy="8" r="2.5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <path d="M3.5 18a4.5 4.5 0 0 1 9 0M11 18a4.5 4.5 0 0 1 9 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
            ),
        },
        {
            title: "Offer",
            desc: "We move fast and keep it transparent.",
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                    <path d="M6 7h12v12H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8.5 13.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
            ),
        },
    ];

    const reduce = useReducedMotion();

    return (
        <section
            id="process"
            aria-labelledby="careers-process-heading"
            className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16 text-neutral-900"
        >
            {/* Feathered background accents */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-x-0 -top-28 h-72 bg-feather"
                    style={{
                        opacity: 0.18,
                        background:
                            "radial-gradient(1100px 460px at 58% -10%, rgba(255,181,88,0.18), rgba(255,209,158,0.08) 40%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute -left-40 bottom-[-18%] h-[28rem] w-[28rem] bg-feather"
                    style={{
                        opacity: 0.1,
                        background:
                            "radial-gradient(50% 50% at 50% 50%, rgba(255,181,88,0.14), transparent 60%)",
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="mb-8 sm:mb-10">
                    <h2 id="careers-process-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Hiring process
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Respect for your time, signal-rich assessments, and quick decisions.
                    </p>
                </header>

                {/* MOBILE — simple vertical list with left rail */}
                <ol className="md:hidden relative">
                    <span className="absolute left-3 top-0 h-full w-px bg-amber-100" aria-hidden />
                    {steps.map((s, i) => (
                        <motion.li
                            key={s.title}
                            initial={{ opacity: 0, x: reduce ? 0 : 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                            className="relative mb-4 last:mb-0 pl-8"
                        >
                            <span className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-300 ring-4 ring-amber-100" />
                            <Card index={i} step={s} pointerSide="left" />
                        </motion.li>
                    ))}
                </ol>

                {/* DESKTOP — Creative “Flow Spine”:
            Two columns, both left-aligned. Cards stagger down with soft curve pointers into a glowing vertical spine. */}
                <div className="hidden md:grid grid-cols-[1fr_64px_1fr] gap-6 lg:gap-8 items-stretch">
                    {/* Spine */}
                    <div className="col-start-2 relative">
                        {/* spine base */}
                        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-amber-100" />
                        {/* inner glow */}
                        <div className="absolute left-1/2 top-0 h-full w-[28px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,181,88,.18),transparent)]" />
                        {/* floating beads */}
                        <span className="absolute left-1/2 -translate-x-1/2 top-6 h-2 w-2 rounded-full bg-amber-300 animate-float" />
                        <span className="absolute left-1/2 -translate-x-1/2 top-40 h-2 w-2 rounded-full bg-amber-300 animate-float delay-150" />
                        <span className="absolute left-1/2 -translate-x-1/2 top-72 h-2 w-2 rounded-full bg-amber-300 animate-float delay-300" />
                    </div>

                    {/* LEFT column: steps 1,3,5 */}
                    <div className="col-start-1 space-y-6 lg:space-y-8">
                        {[0, 2, 4].map((idx) => {
                            const s = steps[idx];
                            if (!s) return null;
                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: reduce ? 0 : 16, x: reduce ? 0 : -12, scale: reduce ? 1 : 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative"
                                >
                                    {/* curved pointer toward spine */}
                                    <Curve toward="right" />
                                    <Card index={idx} step={s} pointerSide="right" />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT column: steps 2,4 (still left-aligned text) */}
                    <div className="col-start-3 space-y-6 lg:space-y-8">
                        {[1, 3].map((idx) => {
                            const s = steps[idx];
                            if (!s) return null;
                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: reduce ? 0 : 16, x: reduce ? 0 : 12, scale: reduce ? 1 : 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative"
                                >
                                    <Curve toward="left" />
                                    <Card index={idx} step={s} pointerSide="left" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Local CSS */}
            <style

                dangerouslySetInnerHTML={{
                    __html: `
          .bg-feather{
            -webkit-mask-image: radial-gradient(65% 65% at 50% 50%, #000 35%, rgba(0,0,0,0.6) 60%, transparent 85%);
                    mask-image: radial-gradient(65% 65% at 50% 50%, #000 35%, rgba(0,0,0,0.6) 60%, transparent 85%);
          }
          @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
          .animate-float { animation: float 4s ease-in-out infinite; }

          /* tiny helper for SVG stroke dashes */
          @keyframes dash {
            to { stroke-dashoffset: -100; }
          }
        `,
                }}
            />
        </section>
    );
}

/* ---------------------------- Decorative Curve ---------------------------- */

function Curve({ toward }: { toward: "left" | "right" }) {
    // A short, smooth curve from the card edge to the spine
    // Stroke animates subtly to imply flow.
    const flip = toward === "left" ? -1 : 1;
    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute top-10 hidden md:block"
            style={{
                [toward === "left" ? "left" : "right"]: "-56px",
            } as React.CSSProperties}
            width="60"
            height="40"
            viewBox="0 0 60 40"
        >
            <path
                d={`M ${toward === "left" ? 60 : 0} 20 C ${30 + 10 * flip} 20, ${30 + 22 * flip} 0, ${toward === "left" ? 0 : 60} 0`}
                fill="none"
                stroke="url(#grad)"
                strokeWidth="2"
                strokeDasharray="12 24"
                style={{ animation: "dash 6s linear infinite" }}
            />
            <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(255,140,0,.0)" />
                    <stop offset="50%" stopColor="rgba(255,181,88,.8)" />
                    <stop offset="100%" stopColor="rgba(255,209,158,.0)" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/* --------------------------------- Card --------------------------------- */

function Card({
    index,
    step,
    pointerSide,
}: {
    index: number;
    step: Step;
    pointerSide: "left" | "right";
}) {
    return (
        <div className="group relative rounded-2xl border border-amber-100 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            {/* pointer “beak” toward spine (small diamond) */}
            <span
                aria-hidden
                className={`absolute top-8 h-3 w-3 rotate-45 bg-white border border-amber-100 ${pointerSide === "left" ? "-left-1" : "-right-1"}`}
            />

            <div className="flex items-start gap-3">
                {/* Number badge */}
                <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white shadow-sm ring-1 ring-white/60"
                    style={{
                        background: "linear-gradient(90deg, #ff8c00 0%, #ffb558 50%, #ffd19e 100%)",
                        boxShadow: "0 6px 18px rgba(255,140,0,.18)",
                    }}
                >
                    {index + 1}
                </span>

                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="text-neutral-700">{step.icon}</span>
                        <h3 className="truncate text-base font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.desc}</p>

                    {/* Accent underline on hover */}
                    <span
                        className="mt-3 block h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-24"
                        style={{ background: "linear-gradient(90deg, #ff8c00, #ffd19e)" }}
                        aria-hidden
                    />
                </div>
            </div>

            {/* Glow ring on hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    boxShadow: "0 0 0 1px rgba(255,209,158,.65) inset, 0 12px 28px rgba(255,181,88,.10)",
                }}
            />
        </div>
    );
}
