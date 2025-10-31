import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ---- Types ---------------------------------------------------------------
export type Skill = { skill_name: string; years?: string | number | null; level?: string | null };
export type Position = { position_name: string };

export type JobSummary = {
  job_id: string;
  job_title: string;
  description: string;
  location: string | null | "";
  location_type: "remote" | "onsite" | "hybrid" | string;
  job_type: string;
  min_charge: number | string;
  max_charge: number | string;
  min_experience: string | number;
  max_experience: string | number;
  job_created_at?: string;
  job_referral_url: string;
  skills: Skill[];
  positions: Position[];
  currencySymbol?: string;
  currency?: string;
};

export type JobListResponse = { status: number; data: { job: JobSummary[]; total_count: number } };

export type JobDetail = {
  job_id: string;
  job_title: string;
  description: string;
  location: string | null | "";
  location_type: string;
  job_type: string;
  min_charge: string | number;
  max_charge: string | number;
  min_experience: string | number;
  max_experience: string | number;
  job_referral_url: string;
  skills: Skill[];
  positions: Position[];
};

export type JobDetailResponse = { status: number; data: JobDetail };

export type CandidatePayload = {
  first_name?: string;
  last_name?: string;
  resume: string;
  mobile: string;
  mobile_country_code: number | string;
  email: string;
};

export type VerifyPayload = { email: string; mobile: string; mobile_country_code: number | string };

// ---- Helpers -------------------------------------------------------------
const API_BASE =
  process.env.OPTIMHIRE_API_BASE ?? "https://partnerapi.optimhire.com/v1/partner";
const AUTH_HEADER = process.env.OPTIMHIRE_API_KEY
  ? { Authorization: `Bearer ${process.env.OPTIMHIRE_API_KEY}` }
  : { Authorization: "Auth Token" };

async function ohFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...AUTH_HEADER, ...(init?.headers ?? {}) },
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`OptimHire API ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

/** Clean/sanitize OptimHire HTML-ish descriptions into plain text */
function cleanHTML(raw?: string): string {
  if (!raw) return "";

  // 1) Decode common named entities (incl. &middot;) + extras
  const named: Record<string, string> = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: "\"",
    apos: "'",
    rsquo: "\u2019",
    lsquo: "\u2018",
    ldquo: "\u201C",
    rdquo: "\u201D",
    ndash: "\u2013",
    mdash: "\u2014",
    hellip: "\u2026",
    middot: "\u00B7",
    bull: "\u2022",
    copy: "\u00A9",
    reg: "\u00AE",
    trade: "\u2122",
    euro: "\u20AC",
  };

  let s = raw.replace(/&([a-zA-Z]+);/g, function (_m, name) {
    return name in named ? named[name] : _m;
  });

  // 2) Decode numeric entities: decimal and hex
  s = s
    .replace(/&#(\d+);/g, function (_m, d) {
      const n = parseInt(d, 10);
      return isFinite(n) ? String.fromCodePoint(n) : _m;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, function (_m, h) {
      const n = parseInt(h, 16);
      return isFinite(n) ? String.fromCodePoint(n) : _m;
    });

  // 3) Convert structural tags to line breaks before stripping tags
  s = s
    .replace(/<\/(p|div|section|article|h[1-6])>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/(ul|ol|table|tr)>/gi, "\n");

  // 4) Strip all remaining tags
  s = s.replace(/<[^>]+>/g, "");

  // 5) Strip Markdown-ish formatting
  s = s
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, (_m, alt) => (alt || "").trim())
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text) => (text || "").trim())
    .replace(/`([^`]+)`/g, (_m, code) => code)
    .replace(/(\*\*|__)([\s\S]*?)\1/g, (_m, _d, txt) => txt)
    .replace(/(\*|_)([\s\S]*?)\1/g, (_m, _d, txt) => txt)
    .replace(/~~([\\s\S]*?)~~/g, (_m, txt) => txt)
    .replace(/^[ \t]{0,3}#{1,6}[ \t]*/gm, "")
    .replace(/^[ \t]*>[ \t]?/gm, "")
    .replace(/^[ \t]*([-*_]){3,}[ \t]*$/gm, "");

  // 6) Remove leftover markdown tokens
  s = s.replace(/(^|\s)#{2,}(\s|$)/g, " ").replace(/\*{2,}/g, "").replace(/_{2,}/g, "");

  // 7) Tidy repeated punctuation
  s = s.replace(/\?{2,}/g, "?").replace(/!{2,}/g, "!");

  // 8) Normalize whitespace
  s = s.replace(/\u00A0/g, " ").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();

  return s;
}

// ---- Server Actions ------------------------------------------------------
export type FetchJobsArgs = { page?: number; size?: number; q?: string };

async function getJobsServer(args: FetchJobsArgs = { page: 1, size: 10 }) {
  "use server";
  const { page = 1, size = 10 } = args;
  const query = new URLSearchParams({ page: String(page), size: String(size) }).toString();

  const res = await ohFetch<JobListResponse>(`/job-list/?${query}`);

  const cleaned = {
    ...res,
    data: {
      ...res.data,
      job: (res.data?.job ?? []).map((j) => ({
        ...j,
        description: cleanHTML(j.description),
      })),
    },
  };

  return cleaned;
}

async function getJobByIdServer(job_id: string) {
  "use server";
  if (!job_id) throw new Error("job_id is required");
  const res = await ohFetch<JobDetailResponse>(
    `/job-description/?job_id=${encodeURIComponent(job_id)}`
  );

  const cleaned = {
    ...res,
    data: {
      ...res.data,
      description: cleanHTML(res.data?.description),
    },
  };

  return cleaned;
}

async function createCandidateServer(payload: CandidatePayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

async function verifyCandidateServer(payload: VerifyPayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

// ============================================================================
// SEO METADATA - Enhanced for Job Openings Page
// ============================================================================
export const metadata: Metadata = generateSEO({
  title: "Job Openings - Apply to Latest Tech Jobs | CDPL Partner Jobs",
  description: "Browse and apply to latest job openings curated by CDPL through OptimHire. QA, Automation, Data Science, Full-Stack, and DevOps roles from top companies. Filter by skills and experience, then apply directly with resume upload.",
  keywords: [
    "job openings",
    "apply jobs",
    "tech jobs",
    "QA jobs",
    "automation jobs",
    "data science jobs",
    "software developer jobs",
    "job applications",
    "career opportunities",
    "OptimHire jobs",
    "partner jobs",
    "CDPL job portal",
  ],
  url: "/jobs/job-openings",
  image: "/og-image-job-openings.jpg",
  imageAlt: "CDPL Job Openings - Apply to Latest Tech Jobs",
});

// ---- Loader for dynamic sections ----------------------------------------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---- Dynamic Sections ----------------------------------------------------
// Default export components → direct dynamic import (SSR enabled)
const JobOpeningsHeroSection = dynamic(
  () => import("@/components/sections/JobOpeningsHeroSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading hero..." />,
  }
);

const JobOpeningsJobBrowser = dynamic(
  () => import("@/components/sections/JobOpeningsJobBrowser"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading jobs..." />,
  }
);

// ---- Page ----------------------------------------------------------------
export default async function JobSharePage() {
  const initial = await getJobsServer({ page: 1, size: 20 });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs/job-openings" },
    { name: "Job Openings", url: "/jobs/job-openings" },
  ]);

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.cinutedigital.com/jobs/job-openings#collectionpage",
    url: "https://www.cinutedigital.com/jobs/job-openings",
    name: "Job Openings",
    description: "Browse and apply to latest job openings curated by CDPL",
    inLanguage: "en-IN",
  };

  // JobPosting ItemList Schema (using JobSummary type)
  const jobListSchema = initial?.data?.job && initial.data.job.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.cinutedigital.com/jobs/job-openings#itemlist",
    name: "CDPL Partner Job Openings",
    description: "Latest job openings available through CDPL's partnership with OptimHire",
    numberOfItems: initial.data.total_count || initial.data.job.length,
    itemListElement: initial.data.job.slice(0, 10).map((job, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        "@id": `https://www.cinutedigital.com/jobs/job-openings#job-${job.job_id}`,
        title: job.job_title,
        description: job.description || `${job.job_title} position`,
        hiringOrganization: {
          "@type": "Organization",
          name: "CDPL Partner Companies",
        },
        employmentType: job.job_type || "FULL_TIME",
        ...(job.location && {
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
              addressCountry: "IN",
            },
          },
        }),
        ...(job.location_type && {
          jobLocationType: job.location_type === "remote" ? "TELECOMMUTE" : undefined,
        }),
        ...(job.min_experience && job.max_experience && {
          experienceRequirements: {
            "@type": "OccupationalExperienceRequirements",
            description: `${job.min_experience}-${job.max_experience} years`,
          },
        }),
        ...(job.job_referral_url && {
          directApply: true,
          applicationContact: {
            "@type": "ContactPoint",
            url: job.job_referral_url,
          },
        }),
      },
    })),
  } : null;

  return (
    <>
      {/* Structured Data - Multiple Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {jobListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobListSchema) }}
        />
      )}

      {/* Main Content - Semantic HTML Structure */}
      <main 
        className="min-h-screen bg-slate-50 text-slate-800"
        itemScope 
        itemType="https://schema.org/CollectionPage"
      >
        {/* Hidden metadata for schema.org */}
        <meta itemProp="name" content="Job Openings" />
        <meta itemProp="description" content="Browse and apply to latest job openings" />
        <meta itemProp="url" content="https://www.cinutedigital.com/jobs/job-openings" />

        {/* Keep hero as-is; it can manage its own inner width */}
        <section className="w-full">
          <JobOpeningsHeroSection
            title="Discover roles. Share opportunities."
            subtitle="As part of our commitment to expanding career opportunities for our learners, Cinute Digital Pvt. Ltd. has partnered with OptimHire Software Solutions Pvt. Ltd., a third-party recruitment platform."
            ctaLabel="Explore jobs"
            scrollToId="job-browser"
          />
        </section>

        {/* 100% width section; inner component handles max-w-7xl + padding */}
        <section id="job-browser" className="w-full">
          <JobOpeningsJobBrowser
            initialJobs={initial?.data?.job ?? []}
            totalCount={initial?.data?.total_count ?? 0}
            pageSize={20}
            getJobsAction={getJobsServer}
            getJobByIdAction={getJobByIdServer}
            verifyCandidateAction={verifyCandidateServer}
            createCandidateAction={createCandidateServer}
            emptyState={{
              title: "No results",
              body: "Try adjusting filters like skills, experience, or location.",
            }}
            className=""
          />
        </section>
      </main>
    </>
  );
}
