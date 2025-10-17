"use client";

import { motion } from "framer-motion";
import React from "react";

type HeroProps = { title: string; subtitle?: string; ctaLabel?: string; scrollToId?: string };

export default function JobOpeningsHeroSection({
    title,
    subtitle,
    ctaLabel = "Get started",
    scrollToId,
}: HeroProps) {
    return (
        <header className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.12)_0%,rgba(139,92,246,0.10)_40%,transparent_75%)]" />
            </div>

            <div className="container mx-auto px-4 pb-8 pt-12">
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
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
                    >
                        {ctaLabel}
                        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                            <path d="M6 14l8-8M10 6h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </header>
    );
}
