'use client';
import { Users, GraduationCap, Briefcase, Target, BadgeCheck } from 'lucide-react';
import IconCard from '@/components/api-testing/ui/IconCard';
import { motion } from 'framer-motion';
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
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Career Switchers',
    description: 'Non-IT professionals transitioning to high-growth QA roles with API testing.',
    bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Fresh Graduates',
    description: 'BSc, BTech, BCA grads kick-start IT careers with job-ready API skills.',
    bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Job Seekers',
    description: 'Upskill quickly—move from low-growth roles to API test automation.',
    bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Manual Testers',
    description: 'Advance from UI testing to API automation, security, and performance.',
    bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200',
  },
];

export default function WhoShouldEnroll() {
  // SEO: structured data describing the audience segments
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Who Should Enroll — API Testing Course',
    description:
      'Ideal learners for API Testing: career switchers, fresh graduates, job seekers, and manual testers moving to automation.',
    itemListElement: audience.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      description: a.description,
    })),
  };

  return (
    <section id="who-should-enroll" aria-labelledby="enroll-heading" className="relative py-8 sm:py-10 bg-white">
      {/* subtle separators for a clean, slightly futuristic frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
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
            Beginner-friendly • No coding required
          </p>
          <h2 id="enroll-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Who Is This <span className="text-brand">For?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Ideal for <strong>career switchers</strong>, <strong>fresh graduates</strong>, <strong>job seekers</strong>, and
            <strong> manual testers</strong> aiming to master <strong>API testing</strong>, <strong>automation</strong>, and <strong>security</strong>.
          </p>
        </motion.header>

        {/* Audience grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* SEO-supportive line */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Learn <strong>Postman</strong>, <strong>REST/GraphQL</strong>, <strong>JSON Schema validation</strong>,{' '}
            <strong>CI/CD integration</strong>, and <strong>OWASP API security</strong> to become job-ready for QA, SDET,
            and Automation roles.
          </p>
        </div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
