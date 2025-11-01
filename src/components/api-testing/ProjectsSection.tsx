'use client';
import { Shield, Database, Smartphone, CheckCircle, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { JSX } from 'react';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  bg: string;
  border: string;
  ink: string;
  chip: string;
  iconTint: string;
};

const projects: Project[] = [
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'Contact List CRUD API',
    description:
      'Full-stack contact manager with user authentication, request validation, and country-wise filtering for modern micro-frontends.',
    features: ['JWT Authentication', 'CRUD Operations', 'Data Validation', 'Robust Error Handling'],
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    ink: 'text-sky-900',
    chip: 'bg-sky-100 text-sky-800 border-sky-200',
    iconTint: 'text-sky-700',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'OWASP Juice Shop Security Testing',
    description:
      'Hands-on security testing lab using a deliberately vulnerable app to practice OWASP API Top-10 attack detection and prevention.',
    features: ['SQL Injection', 'XSS Testing', 'Broken Auth', 'Rate Limiting'],
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    ink: 'text-amber-900',
    chip: 'bg-amber-100 text-amber-800 border-amber-200',
    iconTint: 'text-amber-700',
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Employee Management System',
    description:
      'Enterprise-grade HR API with role-based access control, pagination, and searchable audit logs for compliance-ready workflows.',
    features: ['RBAC Testing', 'Pagination', 'Search & Filter', 'Audit Trail'],
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    ink: 'text-violet-900',
    chip: 'bg-violet-100 text-violet-800 border-violet-200',
    iconTint: 'text-violet-700',
  },
];

export default function ProjectsSection() {
  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'API Testing Portfolio Projects',
    description:
      'Real-world API testing projects covering Postman, REST, security testing, RBAC, pagination, and audit logging to build a job-ready portfolio.',
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      description: p.description,
    })),
  };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-8 sm:py-10 bg-white">
      {/* subtle frame lines for a futuristic feel */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
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
          className="text-center mb-10 sm:mb-14"
        >
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Build Your <span className='text-blue-700'>Portfolio</span> with <span className='text-orange-500'>Real Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Practice <strong>API testing</strong>, <strong>automation</strong>, and <strong>security</strong> on realistic services.
            Publish to <strong>GitHub</strong> and showcase outcomes on your resume and LinkedIn.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              className={[
                'group relative overflow-hidden rounded-2xl border shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                p.bg,
                p.border,
              ].join(' ')}
              aria-label={p.title}
            >
              {/* top content */}
              <div className="p-6 sm:p-7">
                {/* icon + chips */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div
                    className={[
                      'grid h-12 w-12 place-items-center rounded-xl border bg-white shadow-sm',
                      p.border,
                      p.iconTint,
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* stack chips */}
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      Postman
                    </span>
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      REST
                    </span>
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      CI/CD
                    </span>
                  </div>
                </div>

                <h3 className={['text-xl font-semibold leading-tight', p.ink].join(' ')}>{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle className={['mt-0.5 h-4 w-4 flex-shrink-0', p.iconTint].join(' ')} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* card footer actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className={[
                      'inline-flex items-center justify-center rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-slate-50 focus:outline-none',
                      p.border,
                      p.ink,
                    ].join(' ')}
                    aria-label={`Request syllabus for ${p.title}`}
                  >
                    Project Syllabus
                  </a>
                  <a
                    href="#github"
                    className={[
                      'inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-slate-50 focus:outline-none',
                      p.border,
                      p.ink,
                    ].join(' ')}
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub Sample
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            These portfolio projects demonstrate <strong>API automation</strong>, <strong>schema validation</strong>, <strong>contract testing</strong>, and
            <strong> security best practices</strong>. Showcase measurable outcomes—coverage reports, response time trends, and CI/CD pipelines—to stand out for
            <strong> QA Engineer</strong> and <strong>Automation Tester</strong> roles.
          </p>
        </div>
      </div>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
