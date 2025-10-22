"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type HeroProps = {
    title: string;
    subtitle?: string;
    ctaLabel?: string;
    scrollToId?: string;
};

export default function JobOpeningsHeroSection({
    title,
    subtitle,
    ctaLabel = "Get started",
    scrollToId,
}: HeroProps) {
    return (
        <section className="relative bg-white">
            {/* soft CDPL glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(251,146,60,0.12)_0%,rgba(245,158,11,0.10)_40%,transparent_75%)]" />
            </div>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="border-b border-slate-100/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ol className="flex flex-wrap items-center gap-2 py-3 text-sm">
                        <li>
                            <Link href="/" className="text-orange-600 hover:text-orange-700">
                                Home
                            </Link>
                        </li>
                        <li className="text-slate-400">›</li>
                        <li>
                            <span className="cursor-default text-slate-500">Jobs</span>
                        </li>
                        <li className="text-slate-400">›</li>
                        <li className="font-semibold text-slate-900">Job sharing</li>
                    </ol>
                </div>
            </nav>

            {/* Hero content */}
            <header>
                <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto max-w-4xl text-center text-3xl font-semibold text-slate-900 sm:text-4xl"
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="mx-auto mt-3 max-w-2xl text-center text-slate-600"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.35 }}
                        className="mt-5 flex justify-center"
                    >
                        <a
                            href={`#${scrollToId ?? ""}`}
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
                        >
                            {ctaLabel}
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M6 14l8-8M10 6h4v4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </header>
        </section>
    );
}
