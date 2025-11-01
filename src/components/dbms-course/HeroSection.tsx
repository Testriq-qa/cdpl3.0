'use client';

import {
    Database,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Star,
    Globe2,
    Home,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import IconCard from '@/components/ui/IconCard';
import LeadForm from '../CourseLeadForm';

/** -----------------------------
 * Feature tiles
 * ----------------------------- */
const features = [
    { icon: <Database />, title: '80% Hands-On', description: 'Build real databases from scratch', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
    { icon: <Users />, title: 'Expert Faculty', description: '15+ yrs MySQL & Oracle certified', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
    { icon: <Award />, title: 'Global Certification', description: 'MySQL + SQL Certification', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
    { icon: <Briefcase />, title: '100% Placement', description: 'Resume + Interview Prep', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
];

export default function HeroSection() {
    // JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Database Management using MySQL',
        description:
            'Hands-on MySQL course covering SQL queries, database design, normalization, indexing, transactions, and performance tuning. Includes projects, certification, and placement support.',
        provider: { '@type': 'Organization', name: 'Think and Do Institute' },
    };

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Databases' },
        { label: 'MySQL Course', href: '/mysql-course' },
    ];

    return (
        <section id="hero" aria-labelledby="mysql-hero" className="relative overflow-hidden">
            {/* Light, subtle frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.05),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(2,132,199,0.06),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
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
                    {/* Left column: copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* badges */}
                        <div className="hidden mb-5 lg:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                            <span className="inline-flex items-center gap-1">
                                <Star className="h-4 w-4 fill-current text-yellow-500" />
                                4.9/5 Rated
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Users className="h-4 w-4 text-indigo-600" />
                                2,500+ Learners
                            </span>
                            <span className="h-3 w-px bg-slate-300" />
                            <span className="inline-flex items-center gap-1">
                                <Globe2 className="h-4 w-4 text-emerald-600" />
                                Live Online & Classroom
                            </span>
                        </div>

                        {/* H1 */}
                        <h1
                            id="mysql-hero"
                            className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            <span className='text-brand'>Database Management</span> System using <span className="text-[#00758F]">MySQL</span>
                        </h1>

                        {/* Mobile form just below H1 */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" />
                        </div>

                        {/* Supporting copy */}
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Master <strong>SQL queries</strong>, <strong>database design</strong>, <strong>normalization</strong>,{' '}
                            <strong>indexing</strong>, <strong>transactions</strong>, and <strong>performance tuning</strong>. Build scalable databases for
                            web apps, analytics, and enterprise systems. Earn a verified certificate and portfolio-ready projects.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics include ER modeling, stored procedures, joins, query optimization, backup & recovery, and deployment best practices.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in MySQL course"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#curriculum"
                                className="inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full MySQL curriculum"
                            >
                                View Curriculum
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                                aria-label="Book a free demo for MySQL"
                            >
                                Free Demo
                            </a>
                        </div>

                        {/* Quick highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with project reviews
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-indigo-600" />
                                Production-grade schema & indexing
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
                        {/* Desktop feature grid under the form */}
                        <div className="mt-6 md:hidden lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md p-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column: Desktop Form */}
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

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
