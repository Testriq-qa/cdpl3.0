'use client';
import { CheckSquare, Bot, Shield, Globe, TrendingUp, Cpu } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { motion } from 'framer-motion';
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
  { icon: <CheckSquare className="w-6 h-6" />, title: 'Perfect Manual Foundation', description: 'ISTQB-grade test design & defect lifecycle', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Bot className="w-6 h-6" />,         title: 'Automation Mastery',       description: 'Selenium • Cypress • Playwright • REST',  bg: 'bg-indigo-50',  iconColor: 'text-indigo-700',  border: 'border-indigo-200' },
  { icon: <Shield className="w-6 h-6" />,      title: 'Real-World QA Process',    description: 'Agile ceremonies, DevOps & CI/CD gates',   bg: 'bg-amber-50',   iconColor: 'text-amber-700',   border: 'border-amber-200' },
  { icon: <Globe className="w-6 h-6" />,       title: 'Full-Stack Testing',       description: 'UI • API • DB • Mobile coverage',           bg: 'bg-sky-50',     iconColor: 'text-sky-700',     border: 'border-sky-200' },
  { icon: <Cpu className="w-6 h-6" />,         title: 'AI & Future Skills',       description: 'Self-healing, visual AI & analytics',       bg: 'bg-violet-50',  iconColor: 'text-violet-700',  border: 'border-violet-200' },
  { icon: <TrendingUp className="w-6 h-6" />,  title: 'Highest ROI',              description: 'Dual skillset → faster hiring & pay',       bg: 'bg-rose-50',    iconColor: 'text-rose-700',    border: 'border-rose-200' },
];

export default function WhyMasterProgram() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Why Choose the Manual + Automation Master Program',
    description:
      'Benefits of a combined Manual Testing and Automation Testing program covering ISTQB, Selenium, Cypress, Playwright, API, Mobile, CI/CD, and AI-driven testing.',
    itemListElement: benefits.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.title,
      description: b.description,
    })),
  };

  return (
    <section
      id="why-master-program"
      aria-labelledby="why-master-heading"
      className="relative py-8 md:py-14"
    >
      {/* Clean light backdrop + subtle separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="why-master-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Why This <span className="text-brand">Master Program</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-3xl mx-auto">
            Become a <strong>complete QA engineer</strong>: build an <em>ISTQB-level foundation</em> and
            advance to <strong>automation frameworks</strong> used in modern pipelines —
            Selenium, Cypress, Playwright, API, Mobile, <strong>CI/CD</strong>, and <strong>AI-assisted testing</strong>.
          </p>

          {/* micro badges — distinct colors, no repetitions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">ISTQB Ready</span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-800">Framework Design</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">CI/CD Integration</span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">API & Mobile</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-800">AI / Self-Healing</span>
          </div>
        </motion.header>

        {/* Benefits Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <IconCard
                {...b}
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          This dual-track approach accelerates hiring for <strong>QA Engineer</strong>, <strong>SDET</strong>, and
          <strong> Automation Engineer</strong> roles by proving mastery across <em>test strategy</em>, <em>tooling</em>,
          and <em>release engineering</em>—skills recruiters and engineering managers actively search for.
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
