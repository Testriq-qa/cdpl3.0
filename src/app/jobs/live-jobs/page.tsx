import Script from "next/script";
import dynamic from "next/dynamic";

/** Lightweight loader used while sections stream in */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

/** ---------- Dynamic sections (SSR enabled, with fallbacks) ---------- */
const JobsLiveJobsHeroSection = dynamic(
  () => import("@/components/Sections/JobsLiveJobsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const JobsLiveJobsJobsTickerSection = dynamic(
  () => import("@/components/Sections/JobsLiveJobsJobsTickerSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading ticker..." /> }
);

const JobsLiveJobsSplitViewSection = dynamic(
  () => import("@/components/Sections/JobsLiveJobsSplitViewSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading jobs..." /> }
);

const JobsLiveJobsCTAEnrollSection = dynamic(
  () => import("@/components/Sections/JobsLiveJobsCTAEnrollSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

const JobsLiveJobsJobsFAQSection = dynamic(
  () => import("@/components/Sections/JobsLiveJobsJobsFAQSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> }
);

/** —————————————————————————————————————————————
 *  Page-level metadata (allowed on Server Components)
 *  ————————————————————————————————————————————— */
export const metadata = {
  title:
    "Live Jobs | Latest Internships & Fresher Roles by Cinute Digital (CDPL) Hiring Network",
  description:
    "Browse verified live jobs, internships, and fresher openings curated by Cinute Digital Pvt. Ltd. across QA, SDET, Automation, Full-Stack, Data, and DevOps. Apply with confidence and get mentor support.",
  alternates: { canonical: "/jobs/live-jobs" },
  openGraph: {
    title:
      "Live Jobs | Latest Internships & Fresher Roles by Cinute Digital (CDPL)",
    description:
      "Job-ready roles curated by Cinute Digital: QA, SDET, Automation, Full-Stack, Data, DevOps. Apply with mentor guidance.",
    url: "https://your-domain.com/jobs/live-jobs",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export type Job = {
  id: string;
  title: string;
  company: string;
  companySite?: string;
  type: "Full-time" | "Internship" | "Contract" | "Walk-in";
  mode?: "Onsite" | "Hybrid" | "Remote";
  location: string;
  postedOn: string; // ISO yyyy-mm-dd for SEO
  eventDate?: string; // for walk-in/job fair
  timeWindow?: string;
  venue?: string;
  exp: string; // "0-1 yrs", "Fresher", "1-3 yrs"
  salary?: string;
  highlights: string[];
  responsibilities?: string[];
  applyEmail?: string;
  applyLink?: string;
  contacts?: string[];
};

// Demo dataset (replace with CMS/API later)
const JOBS: Job[] = [
  {
    id: "jb-001",
    title: "QA Engineer (Fresher) – Web & API",
    company: "TechNest Labs",
    companySite: "https://technestlabs.example",
    type: "Full-time",
    mode: "Hybrid",
    location: "Bengaluru",
    postedOn: "2025-10-09",
    exp: "0–1 yrs",
    salary: "₹4–6 LPA",
    highlights: ["API Testing", "Postman", "Basic SQL", "Agile"],
    responsibilities: [
      "Write functional test cases and sanity checks",
      "Execute API tests using Postman",
      "Log, track, and verify defects",
    ],
    applyLink: "https://jobs.example/apply/qe-fresher",
  },
  {
    id: "jb-002",
    title: "SDET Intern – Cypress/Playwright",
    company: "BlueOrbit",
    type: "Internship",
    mode: "Remote",
    location: "Remote (India)",
    postedOn: "2025-10-08",
    exp: "Fresher",
    salary: "₹15–20k/mo",
    highlights: ["JavaScript", "Cypress", "CI/CD", "Git"],
    responsibilities: [
      "Author UI automation scripts",
      "Collaborate with devs on flaky test fixes",
    ],
    applyEmail: "talent@blueorbit.example",
  },
  {
    id: "jb-003",
    title: "Data Analyst (Junior)",
    company: "InsightPeak",
    companySite: "https://insightpeak.example",
    type: "Full-time",
    mode: "Onsite",
    location: "Pune",
    postedOn: "2025-10-07",
    exp: "0–2 yrs",
    salary: "₹5–7 LPA",
    highlights: ["Excel", "SQL", "Power BI", "Dashboards"],
    responsibilities: [
      "Build dashboards and weekly reports",
      "Work with stakeholders on KPIs",
    ],
    applyLink: "https://insightpeak.example/careers/da-jr",
  },
  {
    id: "jb-004",
    title: "DevOps Intern – Cloud Foundations",
    company: "SkyForge",
    type: "Internship",
    mode: "Hybrid",
    location: "Hyderabad",
    postedOn: "2025-10-05",
    exp: "Fresher",
    salary: "₹18–22k/mo",
    highlights: ["Linux", "Docker", "GitHub Actions", "AWS Basics"],
    responsibilities: [
      "Shadow senior engineers on pipelines",
      "Write YAML for CI workflows",
    ],
    applyLink: "https://skyforge.example/intern-devops",
  },
  {
    id: "jb-005",
    title: "Walk-in: Manual Tester (Fresher) – Job Fair",
    company: "Multiple Hiring Partners",
    type: "Walk-in",
    mode: "Onsite",
    location: "Mumbai",
    postedOn: "2025-10-04",
    eventDate: "2025-10-18",
    timeWindow: "10:00 AM – 4:00 PM",
    venue: "CDPL Campus, Andheri (E)",
    exp: "Fresher",
    highlights: ["Test Cases", "Bug Reporting", "Basics of SDLC"],
    contacts: ["+91 98xxxxxx12", "careers@cdpl.example"],
  },
];

// Compose minimal JobPosting JSON-LD for the first few jobs
const jobsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CDPL Live Jobs",
  itemListElement: JOBS.slice(0, 10).map((j, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "JobPosting",
      title: j.title,
      datePosted: j.postedOn,
      employmentType: j.type,
      hiringOrganization: {
        "@type": "Organization",
        name: j.company,
        sameAs: j.companySite,
      },
      jobLocationType: j.mode === "Remote" ? "TELECOMMUTE" : undefined,
      jobLocation:
        j.mode !== "Remote"
          ? {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: j.location,
                addressCountry: "IN",
              },
            }
          : undefined,
      applicantLocationRequirements:
        j.mode === "Remote" ? { "@type": "Country", name: "India" } : undefined,
      baseSalary: j.salary
        ? {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              value: j.salary,
              unitText: "YEAR",
            },
          }
        : undefined,
      validThrough: j.eventDate ?? undefined,
      url: j.applyLink ?? undefined,
      industry: "Software & IT",
      description:
        (j.highlights?.length
          ? `Highlights: ${j.highlights.join(", ")}.`
          : "") +
        (j.responsibilities?.length
          ? ` Responsibilities: ${j.responsibilities.join("; ")}`
          : ""),
    },
  })),
};

const BRAND = "#ff8c00"; // Cinute Digital accent

/** —————————————————————————————————————————————
 *  Server Component Page
 *  ————————————————————————————————————————————— */
export default async function LiveJobsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Decorative top glow (light-only appearance in all modes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 opacity-70"
        style={{
          background:
            "radial-gradient(900px 200px at 50% -20px, rgba(255,140,0,0.12), transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(900px 200px at 50% -20px, black 60%, transparent 65%)",
          maskImage:
            "radial-gradient(900px 200px at 50% -20px, black 60%, transparent 65%)",
        }}
      />

      <JobsLiveJobsHeroSection />

      {/* ——— Subtle Ticker ——— */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JobsLiveJobsJobsTickerSection jobs={JOBS} />
      </section>

      {/* ——— Filters + Listing (Client) ——— */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <JobsLiveJobsJobsFiltersAndGrid jobs={JOBS} /> */}
        <JobsLiveJobsSplitViewSection jobs={JOBS} />
      </section>

      {/* ——— CTA band ——— */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <JobsLiveJobsCTAEnrollSection />
      </section>

      {/* ——— FAQ ——— */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <JobsLiveJobsJobsFAQSection />
      </section>

      {/* JSON-LD for ItemList of JobPosting */}
      <Script
        id="jobs-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsJsonLd) }}
      />
    </main>
  );
}

/** —————————————————————————————————————————————
 *  Small server-safe UI bits
 *  ————————————————————————————————————————————— */
function Dot() {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full"
      style={{ background: BRAND }}
      aria-hidden="true"
    />
  );
}
