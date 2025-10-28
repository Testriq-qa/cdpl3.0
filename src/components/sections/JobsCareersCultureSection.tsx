"use client";

import { motion, type Variants } from "framer-motion";
import {
    Sparkles,
    NotebookPen,
    ShieldCheck,
    Target,
    HeartHandshake,
    GaugeCircle,
} from "lucide-react";

const BRAND_GRADIENT = "text-[#ff8c00]"; // switched to solid brand color
const BRAND_RING = "ring-1 ring-[#ffedd5] hover:ring-[#ffd19e] dark:ring-[#ffedd5]";
const BRAND_BG =
    "bg-gradient-to-b from-white via-white to-[#fff7ed] dark:from-white dark:via-white dark:to-[#fff7ed]";
const BRAND_ACCENT_TEXT = "text-[#ff8c00]";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

type Principle = { k: string; v: string; icon: React.ElementType; tag: string };

const principles: Principle[] = [
    { k: "Write it down", v: "Clear writing beats meetings. Specs, PRDs, and decision logs keep us shipping faster with fewer surprises.", icon: NotebookPen, tag: "Operating Rhythm" },
    { k: "Solve for the learner", v: "Every feature must tie back to learner outcomes or mentor productivity. No vanity velocity, only value.", icon: Target, tag: "Product Truth" },
    { k: "Move with care", v: "Speed matters, but accessibility, stability, and reliability matter more. We ship small and verify safely.", icon: ShieldCheck, tag: "Quality First" },
    { k: "Own the craft", v: "Reviews, pairing, and refactors are investments. We leave code, copy, and data models better than we found them.", icon: GaugeCircle, tag: "Craftsmanship" },
    { k: "Mentor-led outcomes", v: "Human + AI. Mentors unblock learners while AI handles routing, insights, and instant feedback loops.", icon: HeartHandshake, tag: "CDPL Edge" },
    { k: "Bias to experiment", v: "Hypotheses > hunches. We instrument, A/B, and sunset ruthlessly to double-down on what moves the needle.", icon: Sparkles, tag: "Growth Mindset" },
];

export default function JobsCareersCultureSection() {
    return (
        <section
            id="culture"
            aria-labelledby="culture-heading"
            className={`relative w-full overflow-hidden ${BRAND_BG} text-neutral-900`}
        >
            {/* feathered background (unchanged) */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[160vw] h-full">
                    <div
                        className="absolute inset-x-0 -top-28 mx-auto h-80 bg-feather"
                        style={{
                            opacity: 0.22,
                            background:
                                "radial-gradient(1500px 560px at 55% -12%, rgba(255,181,88,0.14), rgba(255,209,158,0.08) 40%, rgba(255,209,158,0.03) 60%, transparent 75%)",
                            filter: "blur(3px)",
                        }}
                    />
                    <div
                        className="absolute -left-[14vw] -bottom-[14vw] h-[34rem] w-[34rem] bg-feather"
                        style={{
                            opacity: 0.14,
                            background:
                                "radial-gradient(44% 44% at 50% 50%, rgba(255,181,88,0.10), rgba(255,209,158,0.05) 45%, transparent 70%)",
                            filter: "blur(2px)",
                        }}
                    />
                    <div
                        className="absolute -right-[12vw] top-10 h-[30rem] w-[30rem] bg-feather"
                        style={{
                            opacity: 0.12,
                            background:
                                "radial-gradient(46% 46% at 50% 50%, rgba(255,181,88,0.08), rgba(255,209,158,0.04) 40%, transparent 70%)",
                        }}
                    />
                    <div
                        className="absolute inset-x-0 top-0 h-36"
                        style={{
                            opacity: 0.18,
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-x-0 bottom-0 h-36"
                        style={{
                            opacity: 0.2,
                            background:
                                "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0) 100%)",
                        }}
                    />
                </div>
            </div>

            {/* CONTENT WRAPPER (standardized) */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <header className="mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden />
                        We’re hiring
                    </div>

                    <h2 id="culture-heading" className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
                        Culture &nbsp;<span className={BRAND_GRADIENT}>that ships outcomes</span>
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm sm:text-base text-neutral-600">
                        At <span className="font-semibold">Cinute Digital Pvt Ltd (CDPL)</span>, we’re a{" "}
                        <span className={BRAND_ACCENT_TEXT}>product-led ed-tech team</span> where mentors, data,
                        and thoughtful design come together to help learners get hired faster.
                    </p>
                </header>

                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {principles.map((p) => {
                        const Icon = p.icon;
                        return (
                            <motion.li
                                key={p.k}
                                variants={cardVariants}
                                className={`relative group animated-border rounded-2xl border border-transparent bg-white/90 p-[1px] shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${BRAND_RING}`}
                            >
                                <div className="relative z-10 rounded-2xl bg-white p-5 sm:p-6">
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff3e6] to-white">
                                            <Icon className="h-5 w-5 text-amber-600" aria-hidden />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                                                    {p.k}
                                                </h3>
                                                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700 ring-1 ring-amber-100">
                                                    {p.tag}
                                                </span>
                                            </div>
                                            <p className="mt-1.5 text-sm text-neutral-700">{p.v}</p>
                                        </div>
                                    </div>

                                    <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-100">
                                        CDPL
                                    </div>
                                </div>

                                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl" />
                            </motion.li>
                        );
                    })}
                </motion.ul>

                <div className="mt-8 flex items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-neutral-600">
                        <span className="font-medium">Product first</span>, people always. We create space for
                        deep work, clear writing, and meaningful mentorship.
                    </p>
                    <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "CDPL Culture & Principles",
                        itemListElement: principles.map((p, idx) => ({
                            "@type": "ListItem",
                            position: idx + 1,
                            name: p.k,
                            description: p.v,
                        })),
                        author: { "@type": "Organization", name: "Cinute Digital Pvt Ltd (CDPL)" },
                    }),
                }}
            />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
          .bg-feather{
            -webkit-mask-image: radial-gradient(72% 72% at 50% 50%, #000 34%, rgba(0,0,0,0.55) 60%, transparent 86%);
                    mask-image: radial-gradient(72% 72% at 50% 50%, #000 34%, rgba(0,0,0,0.55) 60%, transparent 86%);
          }
          .animated-border { position: relative; overflow: hidden; }
          .animated-border::before{
            content:""; position:absolute; inset:-2px; padding:2px; border-radius:1rem;
            background: conic-gradient(
              from 0deg,
              rgba(255,140,0,0.0) 0deg,
              rgba(255,140,0,0.9) 90deg,
              rgba(255,209,158,0.85) 180deg,
              rgba(255,181,88,0.9) 270deg,
              rgba(255,140,0,0.0) 360deg
            );
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            animation: cdpl-rotate 3.5s linear infinite; pointer-events:none; opacity:.9;
          }
          .animated-border::after{
            content:""; position:absolute; inset:2px; border-radius:calc(1rem - 2px); background:white; z-index:0;
          }
          @keyframes cdpl-rotate { to { transform: rotate(360deg); } }
        `,
                }}
            />
        </section>
    );
}
