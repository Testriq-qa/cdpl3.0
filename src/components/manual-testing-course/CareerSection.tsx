/* ==================== CAREER & SALARY (Light Theme) ==================== */

import {
  CheckCircle2,
  Briefcase,
  Users,
  FileCheck,
  Building2,
  Star,
  TrendingUp,
  Sparkles,
  IndianRupee,
  ArrowRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import Image from "next/image";

/* ---------- Local, strongly-typed UI primitives ---------- */
type JobRoleProps = { role: string; salary: string; keywords?: string[] };
const JobRole = ({ role, salary, keywords = [] }: JobRoleProps) => (
  <div
    className="group flex items-start justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all"
    role="listitem"
    aria-label={`${role} average salary ${salary}`}
  >
    <div>
      <p className="font-semibold text-gray-900">{role}</p>
      {keywords.length > 0 && (
        <ul className="mt-1 flex flex-wrap gap-1.5" aria-label="Top keywords">
          {keywords.map((k) => (
            <li
              key={k}
              className="text-[11px] md:text-xs rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-gray-700"
            >
              {k}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="ml-4 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-emerald-700 border border-emerald-200">
      <IndianRupee className="h-4 w-4" />
      <span className="text-sm font-semibold">{salary}</span>
    </div>
  </div>
);

type CompanyBadgeProps = { name: string; logoSrc?: string };
const CompanyBadge = ({ name, logoSrc }: CompanyBadgeProps) => (
  <div
    className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-3 hover:shadow-sm hover:border-indigo-300 transition-all"
    aria-label={`Hiring partner ${name}`}
    title={name}
  >
    {logoSrc ? (
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        width={80}
        height={28}
        className="object-contain opacity-90"
      />
    ) : (
      <div className="flex items-center gap-2 text-gray-800">
        <Building2 className="h-4 w-4" />
        <span className="text-sm font-medium">{name}</span>
      </div>
    )}
  </div>
);

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
};
const PlacementFeature = ({ icon, title, description, badge }: FeatureProps) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-all">
    <div className="mb-3 flex items-center gap-2">
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-2 text-indigo-700">
        {icon}
      </div>
      {badge && (
        <span className="text-[11px] rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
          {badge}
        </span>
      )}
    </div>
    <p className="font-semibold text-gray-900">{title}</p>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
  </div>
);

/* ---------- JSON-LD for SEO Rich Results (optional but helpful) ---------- */
const CareerSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Manual & Software Testing Career Outcomes",
    description:
      "Job-ready manual testing course with 100% placement support. QA Engineer salary, top roles, interview prep, and hiring partners in India.",
    provider: {
      "@type": "Organization",
      name: "Your EdTech Institute",
      sameAs: "https://example.com",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      price: "0",
    },
    educationalCredentialAwarded: "ISTQB-aligned Certificate",
    occupationalCredentialAwarded: "QA Engineer / Manual Tester",
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

/* ==================== SECTION ==================== */
type Company = { name: string; logoSrc?: string };

export default function CareerSection() {
  const companies: Company[] = [
  { name: "TCS", logoSrc: "/logos/tcs.svg" },
  { name: "Infosys", logoSrc: "/logos/infosys.svg" },
  { name: "Wipro", logoSrc: "/logos/wipro.svg" },
  { name: "Cognizant", logoSrc: "/logos/cognizant.svg" },
  { name: "Accenture", logoSrc: "/logos/accenture.svg" },
  { name: "Capgemini", logoSrc: "/logos/capgemini.svg" },
];

  const cities = [
    { city: "Bengaluru", range: "₹6–11 LPA" },
    { city: "Hyderabad", range: "₹5.5–10 LPA" },
    { city: "Pune", range: "₹5–9.5 LPA" },
    { city: "Gurugram", range: "₹5–9 LPA" },
    { city: "Chennai", range: "₹4.8–9 LPA" },
    { city: "Mumbai", range: "₹5–9.5 LPA" },
  ];

  const outcomes = [
    "Interview-ready portfolio with real QA projects",
    "Hands-on mastery of Test Design, RTM, Bug Tracking",
    "Confidence with Agile, Scrum ceremonies & QA metrics",
    "ATS-optimized resume and LinkedIn profile keywords",
  ];

  const snapshots = [
    { label: "Avg. Interview Calls", value: "8–12", icon: <PhoneIcon /> },
    { label: "Offer Conversions", value: "3–5/wk", icon: <Sparkles className="h-4 w-4" /> },
    { label: "Alumni Network", value: "5,000+", icon: <Users className="h-4 w-4" /> },
    { label: "Hiring Partners", value: "50+", icon: <Building2 className="h-4 w-4" /> },
  ];

  return (
    <section
      className="relative py-20 bg-white"
      id="career"
      aria-label="Career outcomes and salary insights for Software Testing"
    >
      <CareerSchema />

      {/* Decorative, subtle futuristic accents (no heavy gradients) */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_40%,black,transparent)]">
        <div className="mx-auto h-full max-w-7xl bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-medium">
              100% Placement Support • Job-Ready in 12 Weeks
            </span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Career & Salary Outcomes
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Land high-growth <strong>QA Engineer</strong> and{" "}
            <strong>Manual Tester</strong> roles with interview-ready projects,
            <span className="whitespace-nowrap"> ATS-friendly</span> resumes, and
            <span className="whitespace-nowrap"> recruiter-optimized</span> profiles.
          </p>
        </div>

        {/* KPI Snapshot */}
        <div className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {snapshots.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white px-4 py-5 text-center hover:shadow-sm"
              role="group"
              aria-label={`${s.label} ${s.value}`}
            >
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-gray-50">
                {s.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Roles & Partners */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">High-Demand Roles</h3>
              <div className="inline-flex items-center gap-1 rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-amber-700">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-medium">Top Keywords</span>
              </div>
            </div>

            <div className="space-y-3" role="list" aria-label="Job roles and salary ranges">
              <JobRole
                role="Manual Tester"
                salary="₹3.5–6 LPA"
                keywords={["Manual Testing Course", "Test Cases", "Bug Reporting", "JIRA"]}
              />
              <JobRole
                role="QA Engineer"
                salary="₹4–7 LPA"
                keywords={["Agile QA", "Regression", "ISTQB", "SDLC/STLC"]}
              />
              <JobRole
                role="Test Analyst"
                salary="₹4.5–7.5 LPA"
                keywords={["Test Strategy", "RTM", "UAT", "Defect Lifecycle"]}
              />
              <JobRole
                role="QA Associate"
                salary="₹3–5.5 LPA"
                keywords={["Test Scenarios", "Smoke Testing", "Functional QA"]}
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-600">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>
                SEO keywords: Manual Testing Course, Software Testing Jobs, QA Engineer Salary India 2025,
                ISTQB Certification, Placement Assistance
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiring Partners</h3>
            <div className="grid grid-cols-3 gap-3">
              {companies.map((c) => (
                <CompanyBadge key={c.name} name={c.name} logoSrc={c.logoSrc} />
              ))}
            </div>

            {/* City-wise salary bands */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                City-Wise Salary Bands
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {cities.map(({ city, range }) => (
                  <li
                    key={city}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
                  >
                    <span className="text-gray-800">{city}</span>
                    <span className="font-medium text-gray-900">{range}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Career Support */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              100% Placement Support
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Get end-to-end <strong>career services</strong> — resume building, mock interviews,
              job referrals, and continuous recruiter feedback to help you secure
              <strong> high-paying software testing jobs</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PlacementFeature
              icon={<FileCheck className="h-5 w-5" />}
              title="ATS Resume + LinkedIn Optimization"
              description="Beat filters with keyword-rich, QA-optimized profiles aligned to Naukri & LinkedIn search."
              badge="SEO-Ready"
            />
            <PlacementFeature
              icon={<Users className="h-5 w-5" />}
              title="Mock Interviews with Senior QA"
              description="Real interviewer panels, role-based questions, and structured feedback loops."
              badge="Real-World"
            />
            <PlacementFeature
              icon={<Briefcase className="h-5 w-5" />}
              title="Priority Referrals & Job Alerts"
              description="50+ partner companies, curated openings, and weekly recruiter connects."
              badge="Fast-Track"
            />
          </div>

          {/* Outcome list */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {outcomes.map((o) => (
              <div key={o} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md border border-emerald-200 bg-emerald-50 p-1">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                </div>
                <p className="text-gray-800">{o}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700"
            >
              Get Free Career Session <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#syllabus"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 font-semibold hover:bg-gray-50"
            >
              Download Syllabus
            </a>
          </div>
        </div>

        {/* FAQs (compact & SEO-friendly) */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              What is the average QA Engineer salary in India?
            </p>
            <p className="text-sm text-gray-700">
              Entry roles start at ₹3.5–6 LPA and scale to ₹9–12 LPA with 2–4 years of experience,
              depending on city, domain, and skills (Agile, test design, defect management).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              How soon can I get interview calls?
            </p>
            <p className="text-sm text-gray-700">
              Most learners see interview calls within 2–4 weeks of completing the portfolio
              and resume optimization steps. We align your profile with trending recruiter keywords.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small inline icon (no extra import clutter) */
function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 0 1 2-2h2.2a2 2 0 0 1 1.94 1.515l.7 2.622a2 2 0 0 1-.485 1.94L8.2 10.8a12.04 12.04 0 0 0 5 5l1.72-1.16a2 2 0 0 1 1.94-.485l2.62.7A2 2 0 0 1 22 16.6V19a2 2 0 0 1-2 2h-.5C9.61 21 3 14.39 3 6.5V6a2 2 0 0 1 0-.5Z"
      />
    </svg>
  );
}
