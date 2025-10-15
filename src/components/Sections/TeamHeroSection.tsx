"use client";

import { Badge, fadeUp } from "@/app/our-team/ui";
import { motion, type Transition } from "framer-motion";
import { Sparkles, ShieldCheck, Users2, GraduationCap, ArrowRight, Star, Check } from "lucide-react";
import { BRAND } from "@/app/our-team/data";
import Image from "next/image";
import Link from "next/link";

// Easing shared with fadeUp if you want synchronized motion
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Stat = { label: string; value: string; note?: string };
const stats: Stat[] = [
    { label: "Expert Mentors", value: "45+", note: "QA, Automation, Data" },
    { label: "Learners Mentored", value: "1,000+", note: "Career outcomes" },
    { label: "Hiring Partners", value: "30+", note: "Industry referrals" },
];

const highlights = [
    "Project-based learning with real SDET workflows",
    "Interview prep: DSA sprints, mock interviews, feedback loops",
    "ISO-aligned curriculum & job-ready capstones",
    "Personalized learning paths & 1:1 mentor guidance",
];

const logos = [
    { src: "/images/Skill-India-Color.svg", alt: "Skill India" },
    { src: "/images/ISO-9001.png", alt: "ISO Certified" },
    { src: "/images/Testriq-Logo-1.webp", alt: "Testriq" },
    { src: "/images/github-mark.svg", alt: "GitHub Projects" },
];

export default function TeamHero() {
    return (
        <section
            aria-labelledby="our-team-heading"
            className="relative mx-auto max-w-7xl bg-white px-4 pb-14 pt-16 sm:px-6 lg:px-8"
        >
            {/* Subtle decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(1200px 220px at 50% -60px, rgba(255,140,0,0.12), transparent 60%)",
                    maskImage:
                        "radial-gradient(1200px 220px at 50% -60px, rgba(0,0,0,1), transparent 60%)",
                }}
            />

            {/* Breadcrumbs for SEO & UX */}
            <nav aria-label="Breadcrumb" className="mb-3">
                <ol className="flex items-center gap-2 text-sm text-slate-500">
                    <li>
                        <Link href="/" className="hover:text-slate-700">Home</Link>
                    </li>
                    <li aria-hidden="true" className="text-slate-400">/</li>
                    <li>
                        <Link href="/our-team" className="font-medium text-slate-700 hover:text-slate-900">
                            Our Team
                        </Link>
                    </li>
                </ol>
            </nav>

            {/* Badges */}
            <motion.div {...fadeUp} className="flex flex-wrap items-center gap-3">
                <Badge><Sparkles className="h-3.5 w-3.5" /> Future-Ready Mentors</Badge>
                <Badge><ShieldCheck className="h-3.5 w-3.5" /> ISO-Aligned Training</Badge>
                <Badge><Users2 className="h-3.5 w-3.5" /> Industry Leaders</Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
                id="our-team-heading"
                {...fadeUp}
                transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
                className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500"
            >
                Meet the People Behind <span style={{ color: BRAND }}>Cinute Digital</span>
            </motion.h1>

            {/* Subheading / SEO-rich paragraph */}
            <motion.p
                {...fadeUp}
                transition={{ ...(fadeUp.transition as Transition), delay: 0.12 }}
                className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg"
            >
                Learn from senior <strong className="text-slate-900">Software Testing</strong> engineers,{" "}
                <strong className="text-slate-900">Automation</strong> architects, and{" "}
                <strong className="text-slate-900">Data Science</strong> practitioners who ship
                production-grade solutions. Our mentor-led programs blend agile workflows, CI/CD pipelines,
                API & UI automation, and analytics so you graduate with a job-ready portfolio and
                interview-ready skills.
            </motion.p>

            {/* Social proof pill */}
            <motion.div
                {...fadeUp}
                transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-800"
            >
                <GraduationCap className="h-4 w-4" />
                1,000+ learners mentored · Hiring partner referrals · Job-ready portfolios
            </motion.div>

            {/* CTA + rating */}
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, ease: easeBezier, delay: 0.22 }}
                className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
                <div className="flex gap-3">
                    <Link
                        href="#mentors"
                        className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                        style={{ ["--brand" as any]: BRAND }}
                    >
                        Explore Mentors <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="/become-a-mentor"
                        className="inline-flex items-center justify-center rounded-2xl border border-brand bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
                    >
                        Become a Mentor
                    </Link>
                </div>

                <div className="flex items-center gap-1 text-sm text-slate-600">
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" aria-hidden="true" />
                    <span className="font-semibold text-slate-800">4.9/5</span>
                    <span aria-hidden="true">·</span>
                    <span>Based on verified learner reviews</span>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.dl
                {...fadeUp}
                transition={{ duration: 0.6, ease: easeBezier, delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
                {stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</dt>
                        <dd className="mt-1 text-2xl font-bold text-slate-900">{s.value}</dd>
                        {s.note && <p className="mt-0.5 text-xs text-slate-500">{s.note}</p>}
                    </div>
                ))}
            </motion.dl>

            {/* Key highlights (SEO bullet list) */}
            <motion.ul
                {...fadeUp}
                transition={{ duration: 0.6, ease: easeBezier, delay: 0.34 }}
                className="mt-8 grid gap-3 sm:grid-cols-2"
            >
                {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[--brand]" style={{ ["--brand" as any]: BRAND }} />
                        <p className="text-slate-700">{h}</p>
                    </li>
                ))}
            </motion.ul>

            {/* Trust logos */}
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, ease: easeBezier, delay: 0.4 }}
                className="mt-10"
            >
                <p className="text-center text-sm font-medium text-slate-500">
                    Trusted by industry & aligned with global standards
                </p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-18">
                    {logos.map((l) => (
                        <div key={l.alt} className="relative h-8 w-28 opacity-80 transition hover:opacity-100">
                            <Image src={l.src} alt={l.alt} width={100} height={100} className="object-contain" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* JSON-LD for SEO (EducationalOrganization + Mentors as Persons) */}
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "Cinute Digital",
                        url: "https://cinutedigital.com/our-team",
                        brand: { "@type": "Brand", name: "Cinute Digital", logo: "https://cinutedigital.com/logo.png" },
                        department: {
                            "@type": "Organization",
                            name: "Mentor Network",
                        },
                        sameAs: [
                            "https://www.linkedin.com/company/cinutedigital",
                            "https://twitter.com/cinutedigital",
                        ],
                        employee: [
                            {
                                "@type": "Person",
                                name: "Ami Khambata",
                                jobTitle: "Lead SDET Mentor",
                                worksFor: "Cinute Digital",
                            },
                            {
                                "@type": "Person",
                                name: "Rahul Verma",
                                jobTitle: "Automation Architect",
                                worksFor: "Cinute Digital",
                            },
                            {
                                "@type": "Person",
                                name: "Priya Iyer",
                                jobTitle: "Data Science Mentor",
                                worksFor: "Cinute Digital",
                            },
                        ],
                        keywords:
                            "edtech mentors, software testing mentors, automation testing trainers, SDET training, data science mentor-led program, job-ready portfolio, ISO aligned training, placement assistance",
                    }),
                }}
            />
        </section>
    );
}
