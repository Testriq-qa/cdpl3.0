"use client";
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type Module = {
  title: string;
  topics: string[];
};

const curriculum: Module[] = [
  { title: 'ISTQB Foundation Manual Testing', topics: ['Test Planning', 'Test Cases', 'Defect Reporting', 'STLC'] },
  { title: 'Advanced Manual Techniques', topics: ['Exploratory', 'Risk-Based', 'UAT', 'Accessibility'] },
  { title: 'Selenium WebDriver', topics: ['POM', 'TestNG', 'Grid', 'Reporting'] },
  { title: 'API + Mobile Testing', topics: ['Postman', 'REST Assured', 'Appium', 'Cloud Devices'] },
  { title: 'Modern Automation', topics: ['Cypress', 'Playwright', 'BDD', 'CI/CD'] },
  { title: 'Capstone: Banking App', topics: ['Manual + Auto Suite', 'Regression', 'Live Dashboard', 'Defect Triage'] },
];

// Distinct accents per card (no repeated colors, no heavy gradients)
const accents = [
  { ring: 'ring-emerald-200', bar: 'bg-emerald-600', chip: 'bg-emerald-50 text-emerald-800 border-emerald-200', icon: 'text-emerald-700', card: 'bg-emerald-50/40 border-emerald-200' },
  { ring: 'ring-amber-200',   bar: 'bg-amber-600',   chip: 'bg-amber-50 text-amber-800 border-amber-200',     icon: 'text-amber-700',   card: 'bg-amber-50/40 border-amber-200' },
  { ring: 'ring-sky-200',     bar: 'bg-sky-600',     chip: 'bg-sky-50 text-sky-800 border-sky-200',           icon: 'text-sky-700',     card: 'bg-sky-50/40 border-sky-200' },
  { ring: 'ring-violet-200',  bar: 'bg-violet-600',  chip: 'bg-violet-50 text-violet-800 border-violet-200',   icon: 'text-violet-700',  card: 'bg-violet-50/40 border-violet-200' },
  { ring: 'ring-rose-200',    bar: 'bg-rose-600',    chip: 'bg-rose-50 text-rose-800 border-rose-200',         icon: 'text-rose-700',    card: 'bg-rose-50/40 border-rose-200' },
  { ring: 'ring-indigo-200',  bar: 'bg-indigo-600',  chip: 'bg-indigo-50 text-indigo-800 border-indigo-200',   icon: 'text-indigo-700',  card: 'bg-indigo-50/40 border-indigo-200' },
];

export default function CurriculumSection() {
  // SEO: structured data for curriculum
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Complete QA Master Curriculum',
    description:
      '40-hour QA training curriculum from Manual Testing (ISTQB) to Automation (Selenium, Cypress, Playwright, API, Mobile, CI/CD).',
    itemListElement: curriculum.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Course',
        name: m.title,
        description: m.topics.join(', '),
      },
    })),
  };

  return (
    <section id="curriculum" className="relative py-8 md:py-10 bg-white">
      {/* Subtle frame lines for a clean, futuristic feel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
        Complete QA Master Curriculum
      </h2>

      <p className='text-slate-600 text-lg text-center'>Manual to Automation - 40 hours of elite, job-ready training</p>

        {/* Cards */}
        <ol className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <motion.li
                key={mod.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  a.card,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                  'focus-within:outline-none focus-within:ring-2',
                  a.ring,
                ].join(' ')}
              >
                {/* Top color bar (non-gradient, distinct per card) */}
                <span
                  aria-hidden
                  className={`absolute left-0 right-0 top-0 h-1.5 ${a.bar}`}
                />

                {/* Index badge (non-overlapping, responsive) */}
                <div
                  aria-hidden
                  className={[
                    'absolute -right-2 -top-2 h-10 w-10 rounded-xl grid place-items-center text-xs font-bold text-white shadow-sm',
                    a.bar,
                    'sm:right-3 sm:top-3 sm:h-9 sm:w-9',
                  ].join(' ')}
                >
                  {i + 1}
                </div>

                {/* Content */}
                <h3 className="pr-10 text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-slate-900">
                  {mod.title}
                </h3>

                {/* Topics */}
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={`mt-0.5 h-5 w-5 flex-shrink-0 ${a.icon}`} />
                      <span className="text-sm sm:text-[15px]">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro benefits row */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${a.chip} border`}>
                    Job-oriented
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Interview-ready
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Portfolio projects
                  </span>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* SEO supportive copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Each module blends concise theory with <strong>hands-on labs</strong>, real defect triage, and
          <strong> CI/CD-ready automation</strong> so you can demonstrate <em>UI, API, Mobile, and DB</em> skills that hiring
          managers actively search for in <strong>QA Engineer</strong> and <strong>SDET</strong> roles.
        </p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
