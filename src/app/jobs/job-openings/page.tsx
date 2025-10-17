// app/job-share/page.tsx
import type { Metadata } from "next";

// ---- Types ---------------------------------------------------------------
export type Skill = { skill_name: string; years?: string | number | null; level?: string | null };
export type Position = { position_name: string };

export type JobSummary = {
    job_id: string;
    job_title: string;
    description: string;
    location: string | null;
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
    location: string | null;
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

// ---- Server Actions ------------------------------------------------------
export type FetchJobsArgs = { page?: number; size?: number; q?: string };

export async function getJobsServer(args: FetchJobsArgs = { page: 1, size: 10 }) {
    "use server";
    const { page = 1, size = 10 } = args;
    const query = new URLSearchParams({ page: String(page), size: String(size) }).toString();
    return ohFetch<JobListResponse>(`/job-list/?${query}`);
}

export async function getJobByIdServer(job_id: string) {
    "use server";
    if (!job_id) throw new Error("job_id is required");
    return ohFetch<JobDetailResponse>(`/job-description/?job_id=${encodeURIComponent(job_id)}`);
}

export async function createCandidateServer(payload: CandidatePayload) {
    "use server";
    return ohFetch<{ Message: string }>(`/candidate`, { method: "POST", body: JSON.stringify(payload) });
}

export async function verifyCandidateServer(payload: VerifyPayload) {
    "use server";
    return ohFetch<{ Message: string }>(`/candidate/verify`, { method: "POST", body: JSON.stringify(payload) });
}

// ---- Metadata ------------------------------------------------------------
export const metadata: Metadata = {
    title: "Job Share | Partner Jobs",
    description:
        "Browse and share partner jobs. Filter by skills and experience, then preview rich job details with smooth transitions.",
};

// ---- Sections ------------------------------------------------------------
import JobOpeningsHeroSection from "@/components/Sections/JobOpeningsHeroSection";
import JobOpeningsJobBrowser from "@/components/Sections/JobOpeningsJobBrowser";

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
                    emptyState={{ title: "No results", body: "Try adjusting filters like skills, experience, or location." }}
                    className="rounded-2xl bg-white shadow ring-1 ring-slate-200"
                />
            </section>
        </main>
    );
}