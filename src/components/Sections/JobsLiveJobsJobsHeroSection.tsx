"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMemo } from "react";

type CDPLHeroProps = {
    title?: string;
    subtitle?: string;
    primaryCtaText?: string;
    primaryHref?: string;
    secondaryCtaText?: string;
    secondaryHref?: string;
};

const BRAND_GRADIENT =
    "bg-[linear-gradient(90deg,#ff8c00_0%,#ffb558_50%,#ffd19e_100%)]";

export default function JobsLiveJobsJobsHeroSection({
    title: _title = "CDPL Live Jobs — Curated Openings to Help Our Students Get Hired",
    subtitle = "Verified nearby roles across QA Automation, Data Science, Full-Stack, and DevOps — posted by CDPL so students can apply faster.",
    primaryCtaText = "Browse all openings",
    primaryHref = "/jobs/live-jobs",
    secondaryCtaText = "Subscribe to job alerts",
    secondaryHref = "/jobs/live-jobs#subscribe",
}: CDPLHeroProps) {
    const jsonLd = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cinute Digital Pvt Ltd (CDPL)",
            description:
                "CDPL posts curated jobs and internships to help students and alumni get placed across QA Automation, Data Science, Full-Stack, and DevOps.",
            url: "https://cdpl.example",
            department: {
                "@type": "EducationalOrganization",
                name: "CDPL Mentorship & Placements",
            },
            areaServed: "IN",
        }),
        []
    );

    return (
        <section aria-label="CDPL jobs hero" className="bg-white text-neutral-900">
            {/* Breadcrumb (Jobs is NOT a link) */}
            <div className="border-t border-[#cde4f7]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav aria-label="Breadcrumb" className="py-2 text-sm text-neutral-500">
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li className="text-neutral-400">/</li>
                            <li>
                                <span className="text-neutral-600">Jobs</span>
                            </li>
                            <li className="text-neutral-400">/</li>
                            <li className="font-semibold text-neutral-700">Live Jobs</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* FLEX on md+: image sits BESIDE content, top-aligned */}
                <div className="py-12 sm:py-16 md:py-20">
                    <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
                        {/* LEFT — content */}
                        <div className="max-w-2xl md:flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1"
                            >
                                <Sparkles className="h-3.5 w-3.5 text-[#ff8c00]" />
                                <span className="text-xs font-medium text-neutral-700">
                                    CDPL Live Jobs • Verified nearby roles
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl"
                            >
                                <span className={`bg-clip-text text-transparent ${BRAND_GRADIENT}`}>
                                    Jobs & Internships we post
                                </span>{" "}
                                to help CDPL students get placed
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-3 max-w-3xl text-base leading-7 text-neutral-700"
                            >
                                {subtitle}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
                            >
                                <Link
                                    href={primaryHref}
                                    className="group inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #ff8c00 0%, #ffb558 50%, #ffd19e 100%)",
                                    }}
                                >
                                    {primaryCtaText}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href={secondaryHref}
                                    className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                >
                                    {secondaryCtaText}
                                </Link>
                            </motion.div>
                        </div>

                        {/* RIGHT — illustration BESIDE the copy (top-aligned) */}
                        <div className="relative self-start md:w-[380px] lg:w-[440px]">
                            <div className="relative ml-auto mr-0 w-full">
                                <Image
                                    src="/testimonial_images/search-jobs-no-bg.png"
                                    alt="Search jobs illustration"
                                    width={880}
                                    height={880}
                                    priority
                                    className="h-auto w-full select-none"
                                />
                            </div>

                            {/* Floating CDPL shapes (kept, do not overlap content) */}
                            <div aria-hidden className="pointer-events-none absolute inset-0">
                                <motion.svg
                                    viewBox="0 0 60 60"
                                    className="absolute -right-6 top-6 h-10 w-10"
                                    initial={{ y: 0, opacity: 0.9 }}
                                    animate={{ y: [-4, 2, -4] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <defs>
                                        <linearGradient id="cdplStroke" x1="0" x2="1">
                                            <stop offset="0%" stopColor="#ff8c00" />
                                            <stop offset="50%" stopColor="#ffb558" />
                                            <stop offset="100%" stopColor="#ffd19e" />
                                        </linearGradient>
                                    </defs>
                                    <circle
                                        cx="30"
                                        cy="30"
                                        r="15"
                                        fill="none"
                                        stroke="url(#cdplStroke)"
                                        strokeWidth="1.8"
                                    />
                                </motion.svg>

                                <motion.div
                                    className="absolute -right-2 bottom-10 h-3.5 w-3.5 rounded-[4px]"
                                    style={{
                                        transform: "rotate(45deg)",
                                        background:
                                            "linear-gradient(180deg, rgba(157,123,255,0.95), rgba(157,123,255,0.7))",
                                        boxShadow: "0 6px 14px rgba(157,123,255,0.35)",
                                    }}
                                    initial={{ y: 0, opacity: 0.95 }}
                                    animate={{ y: [3, -3, 3] }}
                                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                                />

                                <motion.div
                                    className="absolute -right-8 top-1/2 h-2 w-2 rounded-full"
                                    style={{
                                        background:
                                            "linear-gradient(180deg, rgba(126,231,255,1), rgba(126,231,255,0.7))",
                                        boxShadow: "0 6px 16px rgba(126,231,255,0.5)",
                                    }}
                                    initial={{ y: 0, opacity: 0.95 }}
                                    animate={{ y: [-2, 2, -2] }}
                                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
