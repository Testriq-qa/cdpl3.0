import type { Metadata } from "next";
import dynamic from "next/dynamic";

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
  : { Authorization: "Auth_Token" };

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
    quot: '"',
    apos: "'",
    rsquo: "’",
    lsquo: "‘",
    ldquo: "“",
    rdquo: "”",
    ndash: "–",
    mdash: "—",
    hellip: "…",
    middot: "·",
    bull: "•",
    copy: "©",
    reg: "®",
    trade: "™",
    euro: "€",
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
    .replace(/~~([\s\S]*?)~~/g, (_m, txt) => txt)
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

export async function getJobsServer(args: FetchJobsArgs = { page: 1, size: 10 }) {
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

export async function getJobByIdServer(job_id: string) {
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

export async function createCandidateServer(payload: CandidatePayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function verifyCandidateServer(payload: VerifyPayload) {
  "use server";
  return ohFetch<{ Message: string }>(`/candidate/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

// ---- Metadata ------------------------------------------------------------
export const metadata: Metadata = {
  title: "Job Share | Partner Jobs",
  description:
    "Browse and share partner jobs. Filter by skills and experience, then preview rich job details with smooth transitions.",
};

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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <JobOpeningsHeroSection
        title="Discover roles. Share opportunities."
        subtitle="Powered by OptimHire Partner API — curated jobs with clean UX, filters, and delightful transitions."
        ctaLabel="Explore jobs"
        scrollToId="job-browser"
      />

      <section id="job-browser" className="container mx-auto px-4 pb-28">
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
  );
}
