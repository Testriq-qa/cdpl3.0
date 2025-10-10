import type { Metadata } from "next";
import TrainersHeroSection from "@/components/Sections/TrainersHeroSection";
import TrainersDirectorySection from "@/components/Sections/TrainersDirectorySection";
import TrainersCalloutSection from "@/components/Sections/TrainersCalloutSection";
import TrainersPartnerSection from "@/components/Sections/TrainersPartnerSection";
import TrainersOutcomeSection from "@/components/Sections/TrainersOutcomeSection";
import TrainersCTASection from "@/components/Sections/TrainersCTASection";
import SEOJsonLd from "@/app/trainers/SEOJsonLd";
import { trainers } from "@/app/trainers/data";



export const metadata: Metadata = {
    title: "Trainers | Cinute Digital",
    description:
        "Meet Cinute Digital's expert trainers in Manual Testing, Automation Testing, API Testing, Performance, and Data Science. Mentor-led, job-ready training with projects and placement support.",
    keywords: [
        "Cinute Digital trainers",
        "automation testing mentors",
        "manual testing trainers",
        "API testing mentors",
        "performance testing trainers",
        "data science trainers",
        "edtech mentors India",
    ],
    alternates: { canonical: "/trainers" },
    openGraph: {
        title: "Cinute Digital Trainers",
        description:
            "Learn with industry mentors — QA, Automation, API, Performance & Data Science. Portfolio projects, mock interviews, hiring referrals.",
        url: "https://cinutedigital.com/trainers",
        type: "website",
    },
};


export default function Page() {
    return (
        <main className="bg-white">
            <SEOJsonLd trainers={trainers} />
            <TrainersHeroSection />
            <TrainersCalloutSection />
            <TrainersPartnerSection />
            <TrainersDirectorySection trainers={trainers} />
            <TrainersOutcomeSection />
            <TrainersCTASection />
        </main>
    );
}