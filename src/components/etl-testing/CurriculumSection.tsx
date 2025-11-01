'use client';
import { CheckCircle } from 'lucide-react';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
  {
    title: 'ETL Basics & Architecture',
    topics: ['ETL vs ELT', 'Staging Area', 'Data Flow', 'Source to Target Mapping'],
  },
  {
    title: 'SQL for ETL Testing',
    topics: ['Complex JOINs', 'Data Reconciliation', 'Duplicate Checks', 'NULL Handling'],
  },
  {
    title: 'Data Validation Techniques',
    topics: ['Count Validation', 'Sum & Aggregate', 'Data Type Checks', 'Reference Integrity'],
  },
  {
    title: 'Defect Management',
    topics: ['Root Cause Analysis', 'Bug Life Cycle', 'Test Closure Report', 'SLA Tracking'],
  },
  {
    title: 'Real-World ETL Projects',
    topics: ['Banking Data Pipeline', 'E-Commerce DW', 'Healthcare ETL', 'Insurance Claims'],
  },
];

// Distinct, non-repeating accents (no heavy gradients)
const accents = [
  { cardBg: 'bg-sky-50',     cardBorder: 'border-sky-200',     title: 'text-sky-900',     icon: 'text-sky-700',     pill: 'bg-sky-600 text-white' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', title: 'text-emerald-900', icon: 'text-emerald-700', pill: 'bg-emerald-600 text-white' },
  { cardBg: 'bg-amber-50',   cardBorder: 'border-amber-200',   title: 'text-amber-900',   icon: 'text-amber-700',   pill: 'bg-amber-600 text-white' },
  { cardBg: 'bg-violet-50',  cardBorder: 'border-violet-200',  title: 'text-violet-900',  icon: 'text-violet-700',  pill: 'bg-violet-600 text-white' },
  { cardBg: 'bg-rose-50',    cardBorder: 'border-rose-200',    title: 'text-rose-900',    icon: 'text-rose-700',    pill: 'bg-rose-600 text-white' },
];

export default function CurriculumSection() {
  // SEO: JSON-LD (ItemList of modules)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ETL Testing Course Curriculum',
    description:
      'Industry-ready ETL Testing curriculum: architecture, SQL data quality, validation techniques, defect management, and real projects.',
    itemListElement: curriculum.map((m, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: m.title,
      item: {
        '@type': 'Course',
        name: m.title,
        description: m.topics.join(', '),
      },
    })),
  };

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-6 md:py-10 bg-white">
      {/* subtle top/bottom separators for a sleek frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
        Industry-Ready <span className='text-brand'>ETL Testing</span> Curriculum
      </h2>

        {/* SEO supportive line */}
        <p className="mx-auto mt-4 mb-6 max-w-3xl text-center text-sm sm:text-base text-slate-600">
          Master <strong>ETL/ELT architecture</strong>, <strong>SQL data reconciliation</strong>,{' '}
          <strong>validation techniques</strong>, and <strong>defect management</strong>. Build a job-ready portfolio
          with real <strong>banking</strong>, <strong>e-commerce</strong>, and <strong>healthcare</strong> projects.
        </p>

        {/* Responsive grid */}
        <ol className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2" aria-label="Course modules">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index pill (not absolute) — avoids covering the title on mobile */}
                <div className="mb-3 flex items-center gap-2">
                  <span className={['inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-bold', a.pill].join(' ')}>
                    {i + 1}
                  </span>
                  <h3 className={['text-lg sm:text-xl font-semibold leading-tight', a.title].join(' ')}>{mod.title}</h3>
                </div>

                {/* topics */}
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* outcome microcopy */}
                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, checklists, and review rubrics to validate every ETL stage (extract → transform → load).
                </p>
              </li>
            );
          })}
        </ol>

        {/* Optional CTA row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </a>
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
