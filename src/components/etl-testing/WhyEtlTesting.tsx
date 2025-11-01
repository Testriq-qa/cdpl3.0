'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Database, Globe, TrendingUp, BadgeCheck } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { JSX } from 'react';

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const benefits: Benefit[] = [
  { icon: <CheckCircle />, title: '99.9% Data Accuracy',  description: 'Prevent costly BI & dashboard errors with strict reconciliation and schema checks.', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Zap />,         title: '10x Faster Validation', description: 'Automate ETL/ELT test suites for repeatable, audit-ready data quality.',         bg: 'bg-amber-50',   iconColor: 'text-amber-700',   border: 'border-amber-200' },
  { icon: <Shield />,      title: 'Compliance-Ready',      description: 'GDPR, HIPAA, SOX-aligned test evidence with verifiable logs & reports.',       bg: 'bg-violet-50',  iconColor: 'text-violet-700',  border: 'border-violet-200' },
  { icon: <Database />,    title: 'Pipeline Reliability',  description: 'Validate sources, transforms, partitions, and loads that power analytics & ML.', bg: 'bg-sky-50',     iconColor: 'text-sky-700',     border: 'border-sky-200' },
  { icon: <Globe />,       title: 'Global Demand',         description: 'Every industry depends on governed data—finance, health, e-commerce, SaaS.',   bg: 'bg-indigo-50',  iconColor: 'text-indigo-700',  border: 'border-indigo-200' },
  { icon: <TrendingUp />,  title: 'Higher Salaries',        description: 'ETL testing specialists earn up to 30% more than generic QA roles.',           bg: 'bg-rose-50',    iconColor: 'text-rose-700',    border: 'border-rose-200' },
];

export default function WhyEtlTesting() {
  // SEO: ItemList for benefits
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Learn ETL Testing',
    description:
      'Key reasons to master ETL Testing: data accuracy, faster validation, compliance, reliable pipelines, global demand, and higher salaries.',
    itemListElement: benefits.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      description: b.description,
    })),
  };

  return (
    <section id="why-etl" aria-labelledby="why-etl-heading" className="relative py-12 md:py-10 bg-white">
      {/* Subtle top/bottom separators for a sleek, slightly futuristic frame */}
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
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            2025 Ready • Industry-Validated Skills
          </p>
          <h2 id="why-etl-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Why Master <span className="text-[#00758F]">ETL Testing</span> in 2025?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Data powers every decision. <strong>ETL Testing</strong> ensures your datasets are{' '}
            <strong>accurate</strong>, <strong>compliant</strong>, and <strong>analytics-ready</strong>—from raw extract to trusted dashboards.
          </p>
        </motion.header>

        {/* Benefit Cards — distinct, non-repeating colors (no heavy gradients) */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            >
              <IconCard
                {...b}
                // polish defaults of IconCard with accessible, sleek touches
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* SEO-supportive line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Validate <strong>schemas</strong>, <strong>transforms</strong>, <strong>partitions</strong>, and{' '}
          <strong>loads</strong>. Automate <strong>reconciliation</strong>, generate <strong>audit-ready reports</strong>,
          and boost reliability for <strong>BI</strong>, <strong>ML</strong>, and <strong>data platforms</strong>.
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
