'use client';
import { Briefcase, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

type Role = { label: string; bg: string; text: string; border: string };
type Company = { label: string; bg: string; text: string; border: string };

const ROLES: Role[] = [
  { label: 'SDET',                bg: 'bg-sky-50',     text: 'text-sky-800',     border: 'border-sky-200' },
  { label: 'Automation Architect',bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  { label: 'Test AI Engineer',    bg: 'bg-amber-50',   text: 'text-amber-800',   border: 'border-amber-200' },
  { label: 'DevOps Tester',       bg: 'bg-violet-50',  text: 'text-violet-800',  border: 'border-violet-200' },
  { label: 'Performance SDET',    bg: 'bg-rose-50',    text: 'text-rose-800',    border: 'border-rose-200' },
  { label: 'Cypress Expert',      bg: 'bg-indigo-50',  text: 'text-indigo-800',  border: 'border-indigo-200' },
  { label: 'Playwright Lead',     bg: 'bg-teal-50',    text: 'text-teal-800',    border: 'border-teal-200' },
  { label: 'CI/CD Engineer',      bg: 'bg-fuchsia-50', text: 'text-fuchsia-800', border: 'border-fuchsia-200' },
];

const COMPANIES: Company[] = [
  { label: 'Google',     bg: 'bg-slate-50',   text: 'text-slate-800',   border: 'border-slate-200' },
  { label: 'Amazon',     bg: 'bg-orange-50',  text: 'text-orange-800',  border: 'border-orange-200' },
  { label: 'Microsoft',  bg: 'bg-blue-50',    text: 'text-blue-800',    border: 'border-blue-200' },
  { label: 'Meta',       bg: 'bg-cyan-50',    text: 'text-cyan-800',    border: 'border-cyan-200' },
  { label: 'Netflix',    bg: 'bg-red-50',     text: 'text-red-800',     border: 'border-red-200' },
  { label: 'Adobe',      bg: 'bg-rose-50',    text: 'text-rose-800',    border: 'border-rose-200' },
  { label: 'Atlassian',  bg: 'bg-indigo-50',  text: 'text-indigo-800',  border: 'border-indigo-200' },
  { label: 'PayPal',     bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
];

export default function CareerSection() {
  // SEO: structured data for roles & companies
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Elite SDET Careers & Top Hiring Companies',
    description:
      'High-demand SDET and Automation Testing roles with placement opportunities at global product companies.',
    itemListElement: [
      ...ROLES.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: r.label,
        item: { '@type': 'Occupation', name: r.label },
      })),
      ...COMPANIES.map((c, i) => ({
        '@type': 'ListItem',
        position: ROLES.length + i + 1,
        name: c.label,
        item: { '@type': 'Organization', name: c.label },
      })),
    ],
  };

  return (
    <section id="career" aria-labelledby="career-heading" className="relative py-8 md:py-10 bg-white">
      {/* Subtle rails for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 id="career-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Elite <span className="text-brand">SDET Careers</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            <strong>3,00,000+ automation jobs</strong> across India | Typical salary for skilled SDETs:{' '}
            <strong>₹8–25 LPA</strong>. Grow into high-impact roles across <em>web, mobile, API</em>, and{' '}
            <em>DevOps/CI-CD</em> pipelines.
          </p>

          {/* micro badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">AI-Augmented Testing</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">DevOps + CI/CD</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">High Salary Growth</span>
          </div>
        </motion.header>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Roles */}
          <motion.section
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <Briefcase className="h-7 w-7 text-sky-600" />
              High-Impact Job Roles
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {ROLES.map((r, i) => (
                <li key={r.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className={[
                      'rounded-xl border px-4 py-3 text-center text-sm font-semibold',
                      r.bg,
                      r.text,
                      r.border,
                      'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] hover:shadow-md transition',
                    ].join(' ')}
                  >
                    {r.label}
                  </motion.div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Pathways: junior SDET → senior SDET → automation architect → quality platform/enablement lead.
            </p>
          </motion.section>

          {/* Companies */}
          <motion.section
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
              <Building2 className="h-7 w-7 text-violet-700" />
              Top Product Companies
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {COMPANIES.map((c, i) => (
                <li key={c.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className={[
                      'rounded-xl border px-4 py-3 text-center text-sm font-bold',
                      c.bg,
                      c.text,
                      c.border,
                      'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] hover:shadow-md transition',
                    ].join(' ')}
                  >
                    {c.label}
                  </motion.div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Plus: fintech unicorns, SaaS leaders, and cloud-native startups hiring automation-first talent.
            </p>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            aria-label="Talk to a mentor and join the program"
          >
            <Sparkles className="h-5 w-5" />
            Join the Top 1%
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-3 text-xs text-slate-500">
            Speak to a mentor about roadmap, interview prep, and portfolio projects.
          </p>
        </motion.div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
