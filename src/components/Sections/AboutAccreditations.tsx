"use client";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, Sparkles, Star, Users, Building2 } from "lucide-react";

/**
 * AboutAccreditations (Enhanced)
 * - Light theme by default with subtle, modern accents
 * - SEO-friendly copy targeting ed‑tech + certification keywords
 * - Responsive, accessible, and slightly futuristic visuals
 * - Includes trust/kpi stats, accreditation highlights, partner logos, and a compact CTA
 */
export default function AboutAccreditations() {
  const logos = [
    { src: "/images/Skill-India-Color.svg", alt: "Skill India (NSDC)" },
    { src: "/images/ISO-9001.png", alt: "ISO 9001:2015 Certified" },
    { src: "/images/Testriq-Logo-1.webp", alt: "Testriq – Hiring Partner" },
  ];

  const highlights = [
    {
      icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
      title: "Industry-recognized standards",
      text:
        "Curriculum aligned to ISO 9001:2015 quality practices and Skill India (NSDC) outcomes, ensuring rigorous delivery and assessment.",
    },
    {
      icon: <Award className="h-5 w-5" aria-hidden="true" />,
      title: "Job-ready certifications",
      text:
        "Earn verifiable certificates in Software Testing, Automation, API Testing, Data Science, AI/ML, and Analytics—optimized for employer ATS and LinkedIn.",
    },
    {
      icon: <Users className="h-5 w-5" aria-hidden="true" />,
      title: "Hiring partner network",
      text:
        "Screened placement pipeline with product companies, startups, and consulting partners for internships and full‑time roles.",
    },
    {
      icon: <Sparkles className="h-5 w-5" aria-hidden="true" />,
      title: "Modern tooling",
      text:
        "Hands-on projects with Selenium, Playwright, Postman, Git, CI/CD, Python, SQL, and cloud sandboxes that mirror real engineering workflows.",
    },
  ];

  const stats = [
    { label: "Learner satisfaction", value: "98%" },
    { label: "Avg. completion rate", value: "91%" },
    { label: "Hiring partners", value: "50+" },
    { label: "Capstone projects", value: "200+" },
  ];

  return (
    <section
      aria-labelledby="accreditations-heading"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Shell */}
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        {/* Decorative top glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-100/70 via-white to-white"
        />

        {/* Header */}
        <div className="relative px-6 pb-6 pt-10 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Verified Quality & Placement Focus
            </div>
            <h2
              id="accreditations-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Trusted <span className="text-brand">Accreditations</span> & Employer‑Ready <span className="text-brand">Certifications</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Build a future‑proof career with <strong>industry‑aligned software testing, automation, API testing, data science, and AI/ML programs</strong>.
              Our quality framework blends <strong>ISO 9001:2015</strong> standards with <strong>Skill India (NSDC)</strong> outcomes for measurable learning impact and <strong>job‑ready skills</strong>.
            </p>
          </div>
        </div>

        {/* Logos row */}
        <div className="relative px-6 sm:px-10">
          <div className="grid grid-cols-3 items-center justify-items-center gap-6 rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur">
            {logos.map((l) => (
              <div key={l.alt} className="relative opacity-90 transition-opacity hover:opacity-100">
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Stats */}
        <div className="relative grid gap-8 px-6 py-10 sm:grid-cols-5 sm:px-10">
          {/* Highlights list */}
          <div className="sm:col-span-3">
            <ul className="grid gap-4">
              {highlights.map((item) => (
                <li
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 text-slate-700 ring-1 ring-inset ring-slate-200">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* KPI / Social proof */}
          <div className="sm:col-span-2">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2 text-slate-900">
                  <Star className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-wide">Outcomes that employers trust</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
                      <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                      <div className="mt-1 text-xs text-slate-600">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  Metrics reflect rolling program averages across flagship cohorts; updated quarterly.
                </p>
              </div>

              {/* Mini quote */}
              <figure className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-slate-700">
                  “The <span className="font-semibold">portfolio‑first</span> training and ISO‑driven rubrics gave us confidence to hire quickly
                  for automation testing and data analyst roles.”
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Talent Partner, Product Engineering (via campus drive)
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Value bullets */}
        <div className="relative border-t border-slate-200 px-6 py-6 sm:px-10">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Mapped to NQR compatible outcomes",
              "Verifiable digital credentials & badges",
              "Career services: mock interviews, resume clinics",
              "Real‑world capstones with CI/CD pipelines",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="relative flex flex-col items-center gap-3 border-t border-slate-200 px-6 pb-10 pt-6 sm:px-10">
          <p className="text-center text-sm text-slate-600">
            Looking for <strong>accredited software testing</strong> or <strong>AI & Data Science certification</strong> that converts into real offers?
            Explore our curriculum and placement playbook.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/certifications"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md hover:translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Browse Certifications
            </Link>
            <Link
              href="/placements"
              className="inline-flex items-center justify-center rounded-xl border border-brand bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              View Hiring Partners
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO: Organization + Accreditation */}
      <script
        type="application/ld+json"
        // eslint disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Cinute Digital",
              url: "https://cinutedigital.com",
              description:
                "Cinute Digital offers industry-aligned software testing, automation, API testing, data science, AI/ML, and analytics certifications with ISO 9001:2015 quality practices and Skill India outcomes.",
              sameAs: [
                "https://www.linkedin.com/company/cinutedigital",
                "https://www.youtube.com/@cinutedigital",
              ],
              accreditation: [
                "ISO 9001:2015 aligned quality practices",
                "Skill India (NSDC) aligned outcomes",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "ProfessionalCertificate",
                  name: "Software Testing & Automation Certificate",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "ProfessionalCertificate",
                  name: "Data Science & AI/ML Certificate",
                },
              ],
            },
            null,
            2
          ),
        }}
      />
    </section>
  );
}
