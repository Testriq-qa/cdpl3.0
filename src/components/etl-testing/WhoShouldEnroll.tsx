'use client';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, Target, BadgeCheck } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { JSX } from 'react';

type Audience = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const audience: Audience[] = [
  { icon: <Users />,          title: 'Career Switchers',  description: 'Non-tech professionals moving into high-growth Data QA roles', bg: 'bg-sky-50',     iconColor: 'text-sky-700',     border: 'border-sky-200' },
  { icon: <GraduationCap />,  title: 'Fresh Graduates',   description: 'BSc, BTech, BCA students seeking job-ready ETL testing skills', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Briefcase />,      title: 'Manual Testers',    description: 'Upskill from UI/functional testing to data quality & DWH testing', bg: 'bg-amber-50',  iconColor: 'text-amber-700',   border: 'border-amber-200' },
  { icon: <Target />,         title: 'SQL Learners',      description: 'Apply SQL to real ETL/ELT pipelines, reconciliation & reporting', bg: 'bg-violet-50', iconColor: 'text-violet-700',  border: 'border-violet-200' },
];

export default function WhoShouldEnroll() {
  // SEO: structured data describing audiences
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ETL Testing — Who Should Enroll',
    description:
      'Ideal audiences for ETL Testing: career switchers, graduates, manual testers, and SQL learners.',
    itemListElement: audience.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      description: a.description,
    })),
  };

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="enroll-heading"
      className="relative py-8 md:py-10 bg-white"
    >
      {/* subtle separators for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Beginner-friendly • Mentor-led • Job-focused
          </p>

          <h2
            id="enroll-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Who Should <span className="text-[#00758F]">Join</span>?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            No prior ETL experience needed. If you want to work with <strong>data quality</strong>,{' '}
            <strong>data warehouses</strong>, and <strong>analytics pipelines</strong>, this program is for you.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            >
              <IconCard
                {...a}
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* SEO supportive microcopy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Build confidence with <strong>real ETL/ELT scenarios</strong>, <strong>SQL reconciliation</strong>, and{' '}
          <strong>audit-ready reporting</strong>—skills that hiring managers value for Data QA and DWH roles.
        </p>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
