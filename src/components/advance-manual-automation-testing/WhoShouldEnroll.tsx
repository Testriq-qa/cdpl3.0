'use client';
import { Users, GraduationCap, Briefcase, Target } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { motion } from 'framer-motion';
import type { JSX } from 'react';

type Audience = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const audience: Audience[] = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Career Switchers',
    description: 'Transition from non-tech roles to QA with mentor-led projects.',
    bg: 'bg-sky-50',
    iconColor: 'text-sky-700',
    border: 'border-sky-200',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Fresh Graduates',
    description: 'BTech • BCA • BCom — get job-ready QA skills fast.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Manual Testers',
    description: 'Level up to automation (UI • API • Mobile • CI/CD).',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-700',
    border: 'border-amber-200',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Developers',
    description: 'Add reliable testing to your stack and ship with confidence.',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-700',
    border: 'border-violet-200',
  },
];

export default function WhoShouldEnroll() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Who Should Enroll — QA / SDET Program',
    description:
      'Audience for QA and SDET training: career switchers, fresh graduates, manual testers, and developers learning automation.',
    itemListElement: audience.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      description: a.description,
    })),
    keywords:
      'who should enroll QA, SDET course for beginners, manual to automation testing, QA training India, job-ready QA skills',
  };

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="who-heading"
      className="relative py-12 md:py-12 bg-white"
    >
      {/* Subtle futuristic frame + dots */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute left-1/2 top-6 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-slate-200 md:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + SEO copy */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="who-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Who Should <span className="text-slate-700">Enroll</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
            No prior experience required. Ideal for <strong>career switchers</strong>,{' '}
            <strong>fresh graduates</strong>, <strong>manual testers</strong>, and{' '}
            <strong>developers</strong> seeking <em>job-ready QA & SDET skills</em>-framework
            design, <abbr title="Continuous Integration / Continuous Delivery">CI/CD</abbr>, and
            real projects.
          </p>

          {/* Micro-badges with distinct colors */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
              Beginner Friendly
            </span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700">
              Mentor-Led Cohort
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">
              Portfolio Projects
            </span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-700">
              Interview Prep
            </span>
          </div>
        </motion.header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <IconCard
                {...a}
                className={[
                  'h-full transition',
                  'hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                ].join(' ')}
              />
            </motion.div>
          ))}
        </div>

        {/* Supporting SEO text */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Gain hands-on experience with <strong>Selenium/Appium</strong>,{' '}
          <strong>REST Assured</strong>, <strong>Cypress/Playwright</strong>, Git, and{' '}
          <strong>CI/CD pipelines</strong>. Graduate with a portfolio that showcases
          <strong> real-world QA impact</strong>.
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
