"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

/**
 * CDPL Success Stories — continuous, clean carousel (non-hero scale)
 * - Continuous CSS marquee that pauses on hover/focus/touch
 * - Compact card widths (never full row)
 * - **No container background/border** — only the cards are styled
 * - Subtle edge fades for polish
 * - Non-hero typography:
 *    • Section title: text-lg font-semibold
 *    • Card name: text-sm → sm:text-base, font-semibold
 *    • Card role: text-xs → sm:text-sm
 *    • Card text/body: text-sm → sm:text-base
 * - Horizontal consistency via `contained`
 */

type Story = { name: string; role: string; text: string; src: string };

const STORIES: Story[] = [
    {
        name: "Aarav",
        role: "QA Automation",
        text: "CDPL’s automation track got me job-ready. Cleared interviews with confidence.",
        src: "/testimonial_images/testimonial.jpeg",
    },
    {
        name: "Ishita",
        role: "Data Analyst",
        text: "Mentors are amazing—practical projects + referrals made the difference.",
        src: "/testimonial_images/testimonial.jpeg",
    },
    {
        name: "Kabir",
        role: "SDET",
        text: "Loved the mock interviews. My recruiter called back the same week.",
        src: "/testimonial_images/testimonial.jpeg",
    },
    {
        name: "Zara",
        role: "Full-Stack",
        text: "From zero to SDE—structured, fast, and motivating curriculum.",
        src: "/testimonial_images/testimonial.jpeg",
    },
];

type Props = {
    /**
     * Provide the page container here if the parent doesn't.
     * Use `contained={false}` when the parent already wraps content with
     * `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
     */
    contained?: boolean;
};

export default function PlacementsSuccessStoriesCarousel({ contained = false }: Props) {
    const SLIDES = [...STORIES, ...STORIES]; // two copies for seamless loop

    const trackClasses = [
        "flex",
        "gap-5",
        "w-max",
        "animate-[cdpl-marquee_28s_linear_infinite]",
        "[animation-play-state:running]",
        "group-hover:[animation-play-state:paused]",
        "focus-within:[animation-play-state:paused]",
    ].join(" ");

    const cardClasses = [
        "shrink-0",
        "w-[260px]",
        "sm:w-[300px]",
        "lg:w-[340px]",
        "rounded-2xl",
        "border",
        "border-slate-200",
        "bg-white",
        "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
        "transition-transform",
        "duration-300",
        "hover:-translate-y-0.5",
        "hover:shadow-md",
    ].join(" ");

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : <>{children}</>;

    return (
        <section aria-label="CDPL Success Stories" className="w-full py-10 sm:py-12">
            <Wrapper>
                {/* Header */}
                <div className="mb-5 sm:mb-6">
                    <h3 className="text-lg font-semibold text-slate-900">Success Stories</h3>
                    <p className="mt-1 text-sm text-slate-600 sm:text-base">
                        Real outcomes from CDPL learners across QA, Data, Full-Stack and Cloud/DevOps.
                    </p>
                </div>

                {/* Clean track wrapper (no bg / no border) */}
                <div className="relative overflow-hidden">
                    {/* Edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white/90 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white/90 to-transparent" />

                    {/* Marquee track */}
                    <div className="group">
                        <div className={trackClasses}>
                            {SLIDES.map((s, i) => (
                                <article key={`${s.name}-${i}`} className={cardClasses}>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow">
                                                <Image
                                                    src={s.src}
                                                    alt={`${s.name} — CDPL success story`}
                                                    fill
                                                    sizes="48px"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="truncate text-sm font-semibold text-slate-900 sm:text-base">{s.name}</div>
                                                <div className="truncate text-xs text-slate-500 sm:text-sm">{s.role}</div>
                                            </div>
                                            <div
                                                className="ml-auto grid h-8 w-8 place-items-center rounded-full"
                                                style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(255,140,0,0.18), rgba(126,231,255,0.18), rgba(157,123,255,0.18))",
                                                }}
                                                aria-hidden
                                            >
                                                <Quote className="h-4 w-4 text-[#9d7bff]" />
                                            </div>
                                        </div>
                                        <p className="mt-3 leading-relaxed text-slate-800 text-sm sm:text-base">{s.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-3 text-center text-xs text-slate-500">Hover to pause • Drag or swipe to explore</p>
            </Wrapper>

            {/* Keyframes */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
@keyframes cdpl-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
        `,
                }}
            />
        </section>
    );
}
