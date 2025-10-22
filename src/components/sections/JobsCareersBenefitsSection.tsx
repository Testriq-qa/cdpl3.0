"use client";

import { useMemo } from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import {
    Rocket,
    Gauge,
    Users,
    Laptop,
    BookOpenCheck,
    Coins,
    Sparkles,
    ArrowRight,
} from "lucide-react";

const BRAND_GRADIENT =
    "bg-gradient-to-r from-[#ff8c00] via-[#ffb558] to-[#ffd19e] text-transparent bg-clip-text";

// Typed cubic-bezier to satisfy Easing
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Reusable item variants (no per-item resolver here)
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

type Benefit = {
    title: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    seoId: string;
};

export default function JobsCareersBenefitsSection() {
    const benefits: Benefit[] = useMemo(
        () => [
            {
                title: "Outcomes over vanity",
                desc:
                    "We optimize for learner outcomes and business value, not dashboards that just look pretty.",
                icon: Gauge,
                seoId: "outcomes-over-vanity",
            },
            {
                title: "Ownership & speed",
                desc:
                    "Small teams, tight loops, clean interfaces—so you can ship, learn, and iterate fast.",
                icon: Rocket,
                seoId: "ownership-and-speed",
            },
            {
                title: "Mentor ecosystem",
                desc:
                    "Access to expert mentors & hiring partners across QA, Data, Full-Stack, and DevOps.",
                icon: Users,
                seoId: "mentor-ecosystem",
            },
            {
                title: "Hybrid flexibility",
                desc:
                    "Collaborative in-office rhythms with remote-friendly space for deep work when it matters.",
                icon: Laptop,
                seoId: "hybrid-flexibility",
            },
            {
                title: "Learning budget",
                desc:
                    "Courses, books, conferences—grow your craft with a dedicated L&D stipend and peer reviews.",
                icon: BookOpenCheck,
                seoId: "learning-budget",
            },
            {
                title: "Competitive comp",
                desc:
                    "We pay for impact and potential. ESOPs available for critical, high-leverage roles.",
                icon: Coins,
                seoId: "competitive-comp",
            },
        ],
        []
    );

    return (
        <section
            className="relative w-full overflow-hidden bg-white text-neutral-900 dark:bg-white dark:text-neutral-900"
            aria-labelledby="benefits-title"
        >
            {/* ===== Full-bleed, center-weighted background gradient ===== */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-full w-[140vw] sm:w-[120vw] md:w-[110vw] lg:w-[100vw] max-w-none">
                    <div
                        className="absolute left-1/2 top-[15%] -translate-x-1/2 h-[56vh] sm:h-[62vh] md:h-[68vh] lg:h-[72vh] w-[140vw] sm:w-[120vw] md:w-[110vw] lg:w-[100vw]"
                        style={{
                            background:
                                "radial-gradient(closest-side, rgba(255,181,88,0.16), rgba(255,209,158,0.08) 45%, transparent 70%)",
                            filter: "blur(6px)",
                        }}
                    />
                    <div
                        className="absolute right-[-12vw] sm:right-[-10vw] md:right-[-8vw] top-[-4rem] sm:top-[-5rem] md:top-[-6rem] h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] w-[22rem] sm:w-[28rem] md:w-[32rem] lg:w-[36rem]"
                        style={{
                            background:
                                "radial-gradient(45% 45% at 50% 50%, rgba(255,209,158,0.15), transparent 65%)",
                            filter: "blur(3px)",
                        }}
                    />
                    <div
                        className="absolute left-1/2 bottom-[-6rem] md:bottom-[-7rem] lg:bottom-[-8rem] -translate-x-1/2 h-[16rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem] w-[30rem] sm:w-[40rem] md:w-[44rem] lg:w-[48rem]"
                        style={{
                            background:
                                "radial-gradient(closest-side, rgba(255,181,88,0.10), transparent 70%)",
                            filter: "blur(4px)",
                        }}
                    />
                    <div
                        className="absolute inset-x-0 top-0 h-20 sm:h-24 md:h-28"
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-28"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.72) 40%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                    <div
                        className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                    <div
                        className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-16 lg:w-20"
                        style={{
                            background:
                                "linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                </div>
            </div>

            {/* Top accent line (unchanged) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-20 max-w-7xl [mask-image:linear-gradient(to_bottom,black,transparent)]"
            >
                <div className="mx-4 sm:mx-6 lg:mx-8 h-[2px] rounded-full bg-gradient-to-r from-[#ff8c00]/30 via-[#ffb558]/30 to-[#ffd19e]/30" />
            </div>

            {/* Content container */}
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                <header className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Life at <span className={BRAND_GRADIENT}>Cinute Digital (CDPL)</span>
                    </div>
                    <h2
                        id="benefits-title"
                        className="mt-3 text-2xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight"
                    >
                        Why <span className={BRAND_GRADIENT}>CDPL</span> is different
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-neutral-600">
                        A culture crafted for builders who care about quality, learner impact, and shipping with
                        discipline.
                    </p>
                </header>

                {/* Scrolling value ticker (duplicated for seamless marquee on all widths) */}
                <div className="relative mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
                    <div className="flex min-w-max gap-8 whitespace-nowrap py-3 text-sm font-medium text-neutral-700 [animation:marquee_24s_linear_infinite] will-change-transform">
                        <TickerItems />
                        <TickerItems ariaHidden />
                    </div>
                </div>

                {/* Benefits grid */}
                <ul className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((b, i) => {
                        const Icon = b.icon;
                        const transition: Transition = {
                            delay: 0.05 * i,
                            duration: 0.45,
                            ease: easeBezier,
                        };
                        return (
                            <motion.li
                                key={b.seoId}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                variants={itemVariants}
                                transition={transition}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                itemProp="itemListElement"
                                itemScope
                                itemType="https://schema.org/ListItem"
                            >
                                <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
                                    <div className="shimmer-line h-[2px] w-1/3 bg-[linear-gradient(90deg,rgba(255,140,0,0)_0%,rgba(255,140,0,0.6)_50%,rgba(255,140,0,0)_100%)]" />
                                </div>

                                <meta itemProp="position" content={`${i + 1}`} />
                                <div className="flex items-start gap-3">
                                    <div className="relative shrink-0">
                                        <div className="grid h-11 w-11 place-items-center rounded-xl border border-neutral-200 bg-white">
                                            <Icon className="h-5 w-5 text-neutral-800" />
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="absolute inset-0 rounded-xl ring-4 ring-[#ff8c00]/5" />
                                        </div>
                                    </div>
                                    <div className="min-w-0">
                                        {/* Title back to neutral color (orange removed) */}
                                        <h3
                                            className="text-base sm:text-lg font-semibold tracking-tight"
                                            itemProp="name"
                                            id={b.seoId}
                                        >
                                            {b.title}
                                        </h3>
                                        <p
                                            className="mt-1.5 text-sm leading-relaxed text-neutral-700 break-words"
                                            itemProp="description"
                                        >
                                            {b.desc}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-600">
                                    Learn more
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>

                <p className="mt-8 text-xs text-neutral-500">
                    CDPL is product-led. We value clarity, craft, and measurable learner outcomes.
                </p>
            </div>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Why work at Cinute Digital Pvt Ltd (CDPL)",
                        itemListElement: benefits.map((b, idx) => ({
                            "@type": "ListItem",
                            position: idx + 1,
                            item: {
                                "@type": "Thing",
                                name: b.title,
                                description: b.desc,
                            },
                        })),
                    }),
                }}
            />

            <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .shimmer-line {
          animation: shimmer 2.4s linear infinite;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        /* Responsive safety tweaks for very small screens */
        @media (max-width: 360px) {
          :global(#benefits-title) {
            font-size: 1.6rem;
            line-height: 1.25;
          }
        }

        /* Respect users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .shimmer-line {
            animation: none !important;
          }
          :global([style*="marquee_"]) {
            animation: none !important;
          }
        }
      `}</style>
        </section>
    );
}

/** Duplicated ticker content for seamless loop on all screen sizes */
function TickerItems({ ariaHidden = false }: { ariaHidden?: boolean }) {
    return (
        <div
            className="flex min-w-max gap-8 px-4"
            aria-hidden={ariaHidden ? true : undefined}
        >
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Builder mindset
            </span>
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> ESOPs for impact roles
            </span>
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Mentor-led learning
            </span>
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Clean interfaces, fewer meetings
            </span>
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Outcome-driven execution
            </span>
            <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Hybrid flexibility
            </span>
        </div>
    );
}
