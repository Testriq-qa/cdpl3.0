// "use client";


import { Metadata } from "next";
import Head from "next/head";
const AboutHeroSection = dynamic(
    () => import("@/components/Sections/AboutHeroSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutStatsSection = dynamic(
    () => import("@/components/Sections/AboutStats.Section"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)
const AboutWhyJoinUs = dynamic(
    () => import("@/components/Sections/AboutWhyJoinUs"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutStorySection = dynamic(
    () => import("@/components/Sections/AboutStorySection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutFacultyStrip = dynamic(
    () => import("@/components/Sections/AboutFacultyStrip"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutMissionVision = dynamic(
    () => import("@/components/Sections/AboutVisionMission"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutFAQSection = dynamic(
    () => import("@/components/Sections/AboutFAQSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutCTASection = dynamic(
    () => import("@/components/Sections/AboutCTASection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const AboutAccreditations = dynamic(
    () => import("@/components/Sections/AboutAccreditations"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

import dynamic from "next/dynamic";


// Optional: Next.js metadata for SEO (app router)
export const metadata: Metadata = {
    title: "About Cinute Digital | Industry-Ready EdTech for Software Testing, Data & AI",
    description:
        "Cinute Digital is an EdTech institute delivering industry-ready training in Software Testing, Data Science, AI/ML, Automation & Digital Skills with live projects, mentors, and job support.",
    keywords: [
        "Cinute Digital",
        "EdTech institute",
        "software testing course",
        "data science training",
        "ai ml course",
        "automation testing",
        "job-ready programs",
        "Mumbai Pune India",
    ],
    openGraph: {
        title: "About Cinute Digital | Industry-Ready EdTech",
        description:
            "EdTech programs with live projects, mentorship, and placement support across Software Testing, Data, AI/ML & Automation.",
        url: "https://cinutedigital.com/about",
        type: "website",
    },
    alternates: { canonical: "https://cinutedigital.com/about" },
};


// Force light theme wrapper: ensures light UI even if site prefers dark mode
const LightTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white text-slate-800 [color-scheme:light] dark:bg-white dark:text-slate-800">
        {children}
    </div>
);


export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Cinute Digital",
        url: "https://cinutedigital.com",
        description:
            "EdTech institute offering industry-aligned training in Software Testing, Data Science, AI/ML, and Automation with live projects and placement assistance.",
        sameAs: [
            "https://www.linkedin.com/company/cinutedigital",
            "https://www.facebook.com/cinutedigital",
            "https://twitter.com/cinutedigital",
        ],
        address: {
            "@type": "PostalAddress",
        },
        department: [
            { "@type": "Organization", name: "Software Testing" },
            { "@type": "Organization", name: "Data Science & AI" },
            { "@type": "Organization", name: "Programming" },
            { "@type": "Organization", name: "Digital Marketing" },
        ],
    };


    return (
        <LightTheme>
            <Head>
                <script
                    type="application/ld+json"
                    // @ts ignore — JSON-LD string is valid
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>


            <main className="relative isolate">
                {/* Subtle glow background for a futuristic, light aesthetic */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="mx-auto h-[50rem] w-[50rem] -translate-y-40 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.10),transparent)] blur-3xl" />
                </div>


                <AboutHeroSection />
                <AboutStatsSection />
                <AboutWhyJoinUs />
                <AboutStorySection />
                <AboutMissionVision />
                <AboutFacultyStrip />
                <AboutAccreditations />
                <AboutFAQSection />
                <AboutCTASection />
            </main>
        </LightTheme>
    );
}