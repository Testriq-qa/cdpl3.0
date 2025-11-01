'use client';

import { motion } from 'framer-motion';
import {
    Shuffle,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    CheckCircle2,
    Home,
    ChevronRight,
} from 'lucide-react';
import IconCard from '../ui/IconCard';
import LeadForm from '../CourseLeadForm';


/* -----------------------------
 * Feature cards
 * ----------------------------- */
const features = [
    {
        icon: <Shuffle />,
        title: '80% Hands-On',
        description: 'Test real ETL/ELT data pipelines end-to-end',
        bg: 'bg-emerald-50',
        iconColor: 'text-emerald-700',
        border: 'border-emerald-200',
    },
    {
        icon: <Users />,
        title: 'Expert Mentors',
        description: '15+ yrs in Data Warehousing & BI',
        bg: 'bg-violet-50',
        iconColor: 'text-violet-700',
        border: 'border-violet-200',
    },
    {
        icon: <Award />,
        title: 'Global Certification',
        description: 'ETL + SQL certificate with QR verification',
        bg: 'bg-amber-50',
        iconColor: 'text-amber-700',
        border: 'border-amber-200',
    },
    {
        icon: <Briefcase />,
        title: '100% Placement',
        description: 'Resume, mock interviews & referrals',
        bg: 'bg-sky-50',
        iconColor: 'text-sky-700',
        border: 'border-sky-200',
    },
];

/* -----------------------------
 * Hero Section
 * ----------------------------- */
export default function HeroSection() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'ETL Testing using SQL & Tools',
        description:
            'Hands-on ETL testing course covering data validation, SQL for data quality, pipeline automation, and enterprise reporting with job assistance.',
        provider: {
            '@type': 'Organization',
            name: 'Think and Do Institute',
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0',
            priceCurrency: 'INR',
            category: 'Education',
        },
    };

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Software Testing' },
        { label: 'ETL Testing', href: '/etl-testing' },
    ];

    return (
        <section id="hero" aria-labelledby="etl-hero" className="relative overflow-hidden">
            {/* Light, subtle background (sleek, non-distracting) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1100px_520px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <a
                                    href={c.href}
                                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : ''}`}
                                >
                                    {c.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Badge */}
                        <div className="mb-4 hidden lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                            18-Hour Master Program • Weekend & Evening Slots
                        </div>

                        {/* H1 */}
                        <h1
                            id="etl-hero"
                            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            ETL Testing using{' '}
                            <span className="text-[#00758F]">SQL</span> &{' '}
                            <span className="text-amber-700">Enterprise Tools</span>
                        </h1>

                        {/* Mobile form under H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        {/* Sub copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Validate data at every stage—<strong>extract</strong>,{' '}
                            <strong>transform</strong>, and <strong>load</strong>. Learn{' '}
                            <em>dataset profiling, schema checks, reconciliation, automation,
                                and reporting</em> to ensure accurate BI & analytics.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics: test design for ETL/ELT, SQL data quality rules, SCD types,
                            partitioning, orchestration basics, CI/CD integration, and evidence-based
                            reporting for audits.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in ETL Testing program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full ETL curriculum"
                            >
                                View Curriculum
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="Book a free demo for ETL testing"
                            >
                                Free Demo
                            </a>
                        </div>

                        {/* Quick highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with real datasets
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                Data quality rules & reconciliation tests
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                                Interview prep & portfolio guidance
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                                QR-verified global certification
                            </li>
                        </ul>

                        <div className="mt-6 md:hidden grid lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={`desk-${i}`}
                                    {...f}
                                    className="hover:shadow-md p-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Desktop Form + Feature cards */}
                    <motion.aside
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" />
                    </motion.aside>
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
