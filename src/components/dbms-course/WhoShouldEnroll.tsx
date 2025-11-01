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
  { icon: <Users />,          title: 'Career Switchers', description: 'Non-tech professionals transitioning to database & SQL roles', bg: 'bg-sky-50',     iconColor: 'text-sky-700',     border: 'border-sky-200' },
  { icon: <GraduationCap />,  title: 'Fresh Graduates',  description: 'BSc, BTech, BCA students seeking job-ready MySQL skills',     bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Briefcase />,      title: 'Job Seekers',      description: 'Upskill from low-growth roles to in-demand SQL careers',      bg: 'bg-amber-50',   iconColor: 'text-amber-700',   border: 'border-amber-200' },
  { icon: <Target />,         title: 'Developers',       description: 'Add database design, indexing & optimization to your stack',  bg: 'bg-violet-50',  iconColor: 'text-violet-700',  border: 'border-violet-200' },
];

export default function WhoShouldEnroll() {
  // SEO: structured data for audiences
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Who Should Enroll in the MySQL Course',
    description:
      'Target learners for the MySQL course: career switchers, fresh graduates, job seekers, and developers adding SQL and database design skills.',
    itemListElement: audience.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: a.title,
      description: a.description,
    })),
  };

  return (
    <section id="who-should-enroll" aria-labelledby="who-heading" className="relative py-8 md:py-10 bg-white">
      {/* subtle top/bottom separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Beginner-friendly • No prior coding required
          </p>
          <h2 id="who-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Who Should <span className="text-[#00758F]">Enroll</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Ideal for <strong>career switchers</strong>, <strong>fresh graduates</strong>, and <strong>developers</strong> who want
            practical expertise in <strong>MySQL</strong>, <strong>SQL querying</strong>, <strong>schema design</strong>, and <strong>performance optimization</strong>.
          </p>
        </motion.header>

        {/* audience grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* supportive SEO line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Learn the essentials—<strong>ER modeling</strong>, <strong>index strategies</strong>, <strong>transactions</strong>, and{' '}
          <strong>query optimization</strong>—to stand out for <strong>SQL Developer</strong>, <strong>Database Administrator</strong>,
          and <strong>Data Analyst</strong> roles.
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
