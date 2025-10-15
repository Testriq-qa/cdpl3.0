"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    GraduationCap,
    Briefcase,
    Building2,
    BadgeCheck,
    TrendingUp,
    Trophy,
    MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ for breadcrumb links

const BRAND_ORANGE_GRAD =
    "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)";

/** Small floating perimeter icon */
function FloatingIcon({
    children,
    className,
    x,
    y,
    size = 28,
    delay = 0,
    duration = 6,
}: {
    children: React.ReactNode;
    className?: string;
    x: string;
    y: string;
    size?: number;
    delay?: number;
    duration?: number;
}) {
    return (
        <motion.div
            className={`pointer-events-none absolute select-none ${className || ""}`}
            style={{ left: x, top: y }}
            initial={{ opacity: 0, y: 6, rotate: -2 }}
            animate={{ opacity: 1, y: [0, -8, 0, 6, 0], rotate: [-2, 2, -1, 2, -2] }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div
                className="rounded-xl border backdrop-blur-md bg-white/75 border-white/60 shadow-sm"
                style={{ width: size + 14, height: size + 14 }}
            >
                <div className="grid h-full place-items-center">{children}</div>
            </div>
        </motion.div>
    );
}

export default function PlacementsHeroSection() {
    // This section is a **hero**. From your two references:
    // - Hero headline: text-3xl -> sm:text-5xl, font-extrabold
    // - Non-hero headline: text-3xl -> sm:text-4xl, font-extrabold
    // - Hero paragraph: text-base -> sm:text-lg
    // We apply the **hero** scale here.

    return (
        <section
            className="relative w-full overflow-visible"
            aria-label="CDPL student placements hero section"
        >
            {/* background */}
            <div className="pointer-events-none absolute inset-0 -z-20">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(240,248,255,1) 0%, rgba(236,246,255,1) 35%, rgba(232,244,255,1) 65%, rgba(228,241,255,1) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-[0.45] blur-3xl"
                    style={{
                        background:
                            "radial-gradient(46% 52% at 80% 25%, rgba(157,123,255,0.34) 0%, rgba(157,123,255,0) 60%), radial-gradient(42% 48% at 90% 70%, rgba(126,231,255,0.32) 0%, rgba(126,231,255,0) 60%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px),
               linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                        backgroundSize: "64px 64px, 64px 64px, 16px 16px, 16px 16px",
                        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
                    }}
                />
            </div>

            {/* perimeter icons */}
            <div className="absolute inset-0 -z-10">
                <FloatingIcon x="2%" y="6%" delay={0.2} duration={7} className="hidden sm:block">
                    <Briefcase className="h-6 w-6 text-[#6aa9ff]" />
                </FloatingIcon>
                <FloatingIcon x="8%" y="14%" delay={0.8} duration={6.5} className="hidden lg:block">
                    <BadgeCheck className="h-6 w-6 text-[#7ee7ff]" />
                </FloatingIcon>
                <FloatingIcon x="92%" y="8%" delay={0.4} duration={6.2} className="hidden sm:block">
                    <Trophy className="h-6 w-6 text-[#9d7bff]" />
                </FloatingIcon>
                <FloatingIcon x="86%" y="16%" delay={1.0} duration={7.2} className="hidden xl:block">
                    <TrendingUp className="h-6 w-6 text-[#b0b9ff]" />
                </FloatingIcon>
                <FloatingIcon x="1.5%" y="46%" delay={0.6} duration={7.6} className="hidden lg:block">
                    <Building2 className="h-6 w-6 text-[#6aa9ff]" />
                </FloatingIcon>
                <FloatingIcon x="94%" y="50%" delay={0.3} duration={6.8} className="hidden lg:block">
                    <MapPin className="h-6 w-6 text-[#7ee7ff]" />
                </FloatingIcon>
                <FloatingIcon x="4%" y="86%" delay={0.9} duration={7.4} className="hidden sm:block">
                    <GraduationCap className="h-6 w-6 text-[#9d7bff]" />
                </FloatingIcon>
                <FloatingIcon x="90%" y="88%" delay={0.5} duration={6.4} className="hidden sm:block">
                    <Briefcase className="h-6 w-6 text-[#6aa9ff]" />
                </FloatingIcon>
            </div>

            {/* ✅ Breadcrumb */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-slate-500">
                        <li>
                            <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                        </li>
                        <li className="text-slate-300">/</li>
                        <li>
                            <Link href="/jobs" className="hover:text-slate-700 transition-colors">Jobs</Link>
                        </li>
                        <li className="text-slate-300">/</li>
                        <li aria-current="page" className="font-semibold text-slate-900">
                            Placements
                        </li>
                    </ol>
                </nav>
            </div>

            {/* content wrapper — EXACT width spec requested */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-3 py-1 text-sm bg-white/85 backdrop-blur-md text-gray-800"
                        >
                            <Sparkles className="h-4 w-4 text-[#6aa9ff]" />
                            <span>Real Hiring Outcomes</span>
                        </motion.div>

                        {/* HERO headline scale (3xl->5xl, extrabold) */}
                        <motion.h1
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.08 }}
                            className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
                            style={{ filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.55))" }}
                        >
                            CDPL Student{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: BRAND_ORANGE_GRAD,
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                Placements
                            </span>
                        </motion.h1>

                        {/* HERO paragraph scale (base->lg) */}
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.14 }}
                            className="mt-4 max-w-2xl text-base sm:text-lg leading-7 text-slate-700"
                        >
                            Explore roles, companies, locations, and success stories from learners across{" "}
                            <strong className="text-slate-900">QA Automation</strong>,{" "}
                            <strong className="text-slate-900">Data</strong>,{" "}
                            <strong className="text-slate-900">Full-Stack</strong>, and{" "}
                            <strong className="text-slate-900">Cloud/DevOps</strong> programs by
                            Cinute Digital Pvt Ltd (CDPL).
                            <span className="sr-only">
                                CDPL placements, mentor-led training, interview preparation, hiring partners, India
                                tech jobs, fresher and experienced roles.
                            </span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-slate-700 border border-slate-200/70">
                                <Briefcase className="h-4 w-4" /> 1000+ Offers
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-sky-700 border border-sky-200/70">
                                <GraduationCap className="h-4 w-4" /> Mentor-led
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.985 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="relative"
                    >
                        <div className="relative aspect-[6/4] overflow-visible px-2 sm:px-3 md:px-4">
                            <div
                                aria-hidden
                                className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-55"
                                style={{
                                    background:
                                        "radial-gradient(55% 45% at 78% 42%, rgba(126,231,255,0.28) 0%, rgba(126,231,255,0) 60%), radial-gradient(50% 40% at 88% 72%, rgba(157,123,255,0.26) 0%, rgba(157,123,255,0) 60%)",
                                }}
                            />
                            <motion.div
                                className="absolute inset-[-2px] will-change-transform pointer-events-none select-none"
                                initial={{ scale: 1.002, translateZ: 0 }}
                                animate={{ scale: [1.002, 1, 1.002] }}
                                transition={{ duration: 9, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                                style={{ transform: "translateZ(0)" }}
                            >
                                <Image
                                    src="/testimonial_images/placements.png"
                                    alt="CDPL Student Placements illustration — partner companies & verified outcomes"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 44vw"
                                    priority
                                    className="object-contain object-center"
                                />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-2 left-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/70 px-3 py-1.5 text-xs text-gray-800"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.22, duration: 0.5 }}
                            >
                                Verified by Mentors
                            </motion.div>
                            <motion.div
                                className="absolute top-2 right-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/70 px-3 py-1.5 text-xs text-gray-800"
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.26, duration: 0.5 }}
                            >
                                Partner Companies
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
