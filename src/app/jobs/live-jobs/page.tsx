// app/jobs/live-jobs/page.tsx
// SERVER COMPONENT — Live Jobs (CDPL)
// Typography matches your “normal section” scale (LeadershipSpotlight)
// Container: max-w-7xl px-4 sm:px-6 lg:px-8

import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

// ---------- Loader ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export type Job = {
    id: string;
    title: string;
    company: string;
    companySite?: string;
    type: "Walk-in" | "Full-time" | "Internship" | "Contract";
    mode?: "Onsite" | "Hybrid" | "Remote";
    location: string;
    postedOn: string;
    eventDate?: string;
    timeWindow?: string;
    venue?: string;
    exp: string;
    salary?: string;
    highlights: string[];
    responsibilities?: string[];
    applyEmail?: string;
    applyLink?: string;
    contacts?: string[];

    // NEW: combined job title + unique id (human-readable, shareable)
    shareKey: string;
};

// ---------- Dynamic sections (SSR enabled like your example) ----------
const JobsLiveJobsJobsHeroSection = dynamic(
    () => import("@/components/Sections/JobsLiveJobsJobsHeroSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading hero..." />,
    }
);

// Named export -> use .then and add props typing
const JobsLiveJobsJobsTickerSection = dynamic<{ jobs: Job[] }>(
    () =>
        import("@/components/Sections/JobsLiveJobsJobsTickerSection").then(
            (m) => m.JobsLiveJobsJobsTickerSection
        ),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading ticker..." />,
    }
);

const JobsLiveJobsListingSection = dynamic<{ jobs: Job[] }>(
    () =>
        import("@/components/Sections/JobsLiveJobsListingSection").then(
            (m) => m.JobsLiveJobsListingSection
        ),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading listings..." />,
    }
);

// Default export — keep as-is
const JobsLiveJobsWhyWePostJobsSection = dynamic(
    () => import("@/components/Sections/LiveJobsLiveJobsWhyWePostJobsSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading why CDPL posts jobs..." />,
    }
);

const JobsLiveJobsTestimonialSection = dynamic(
    () => import("@/components/Sections/JobsLiveJobsTestimonialSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading why CDPL posts jobs..." />,
    }
);

const JobsLiveJobsReviewSection = dynamic(
    () => import("@/components/Sections/JobsLiveJobsReviewSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading why CDPL posts jobs..." />,
    }
);

// Named export -> use .then
const JobsLiveJobsSubscribeCTASection = dynamic(
    () =>
        import("@/components/Sections/JobsLiveJobsSubscribeCTASection").then(
            (m) => m.JobsLiveJobsSubscribeCTASection
        ),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading subscribe..." />,
    }
);

export const metadata: Metadata = {
    title: "Live Jobs & Placement Alerts | Cinute Digital Pvt. Ltd (CDPL)",
    description:
        "Verified live jobs and walk-in drives curated by CDPL. QA, Automation, Data, and Engineering roles across India.",
    alternates: { canonical: "https://cinutedigital.com/jobs/live-jobs" },
    openGraph: {
        title: "Live Jobs & Placement Alerts | CDPL",
        description:
            "Verified openings, walk-ins, and trainee roles curated by Cinute Digital.",
        url: "https://cinutedigital.com/jobs/live-jobs",
        siteName: "Cinute Digital",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Live Jobs & Placement Alerts | CDPL",
        description: "Verified openings curated by Cinute Digital.",
    },
    robots: { index: true, follow: true },
};

// Example SSR data (unchanged except shareKey added)
const JOBS: Job[] = [
    {
        id: "qualitykiosk-perf",
        title: "Performance Tester – JMeter",
        company: "QualityKiosk Technologies Pvt. Ltd.",
        type: "Walk-in",
        mode: "Onsite",
        location: "Mumbai / Navi Mumbai",
        postedOn: "2025-09-10",
        eventDate: "2025-09-13",
        timeWindow: "10:00 AM – 2:00 PM",
        venue:
            "F Wing, Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai",
        exp: "1–10 yrs",
        highlights: [
            "Roles: Test Engineer / Sr. Test Engineer / Associate TL / TL",
            "Performance testing with JMeter",
            "Define scenarios, workload models, KPIs",
            "Strong communication & presentation",
        ],
        responsibilities: [
            "Analyze performance requirements and design test plans",
            "Develop & execute load/stress tests (JMeter)",
            "Monitor KPIs; identify bottlenecks; recommend fixes",
            "Ensure test coverage under timelines",
        ],
        applyEmail: "anisa.patel@qualitykiosk.com",
        shareKey: "performance-tester-jmeter-qualitykiosk-perf",
    },
    {
        id: "tudip-qa",
        title: "Quality Assurance Engineer",
        company: "Tudip Technologies (Tudip Digital AI)",
        type: "Walk-in",
        mode: "Onsite",
        location: "Pune (Hinjewadi Phase 3)",
        postedOn: "2025-08-18",
        eventDate: "2025-08-23",
        timeWindow: "11:00 AM – 05:00 PM",
        venue:
            "Plot No. 11/2, Phase 3, Rajiv Gandhi Infotech Park, Hinjewadi, Pune – 411057",
        exp: "1+ yrs",
        highlights: [
            "Immediate joiner preferred",
            "Good English communication",
            "Carry a hard copy of your CV",
        ],
        responsibilities: [
            "Author test cases & scenarios; execute functional tests",
            "Bug reporting with repro; collaborate with devs",
            "Regression, smoke & sanity cycles",
        ],
        applyEmail: "joinus@tudip.com",
        shareKey: "quality-assurance-engineer-tudip-qa",
    },
    {
        id: "avasoft-trainee",
        title: "Trainee Software Engineer",
        company: "AVASOFT",
        type: "Full-time",
        mode: "Onsite",
        location: "Chennai (Navalur)",
        postedOn: "2025-08-20",
        eventDate: "2025-08-26", // Registration closes
        timeWindow: "Selection starts 30 Aug",
        venue:
            "3rd Floor, Alphacity Beta Block, SSPDL, Navalur, Tamil Nadu – 600130",
        exp: "0–1 yr (2022–2026 passouts)",
        salary: "₹6–10 LPA (CTC)",
        highlights: [
            "Immediate joining",
            "In-person written test (30 Aug)",
            "Online tech interview (from 1 Sep)",
            "Final in-person round (TBA)",
        ],
        responsibilities: [
            "Learn & contribute to production-grade code",
            "Follow SDLC, code reviews, testing & documentation",
        ],
        applyEmail: "recruitment@avasoft.com",
        contacts: ["+91 89258 67655", "+91 89250 08708", "+91 91500 50213"],
        applyLink: "https://bit.ly/TraineeSoftwareEngineer",
        shareKey: "trainee-software-engineer-avasoft-trainee",
    },
];

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "CDPL Live Jobs",
        itemListElement: JOBS.map((j, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "JobPosting",
                title: j.title,
                hiringOrganization: { "@type": "Organization", name: j.company },
                employmentType: j.type,
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: j.location,
                        addressCountry: "IN",
                    },
                },
                datePosted: j.postedOn,
                validThrough: j.eventDate ?? j.postedOn,
                description: (j.highlights ?? []).join(" • "),
                applicantLocationRequirements: "IN",
                directApply: Boolean(j.applyEmail || j.applyLink),
            },
        })),
    };

    return (
        <main className="bg-white text-slate-900 relative">
            {/* soft site-wide background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff 30%)" }}
                />
            </div>

            <Script
                id="cdpl-live-jobs-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <JobsLiveJobsJobsHeroSection />

            <JobsLiveJobsJobsTickerSection jobs={JOBS} />

            {/* 👇 Filters + Grid now live inside a client wrapper */}
            <JobsLiveJobsListingSection jobs={JOBS} />

            <JobsLiveJobsWhyWePostJobsSection />

            <JobsLiveJobsTestimonialSection />

            <JobsLiveJobsReviewSection />

            <JobsLiveJobsSubscribeCTASection />
        </main>
    );
}
