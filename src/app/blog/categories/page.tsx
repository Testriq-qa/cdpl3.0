// app/blog/categories/page.tsx
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const CategoriesHeroSection = dynamic(
    () => import("@/components/sections/CategoriesHeroSection").then((m) => m.CategoriesHeroSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const CategoriesGridSection = dynamic(
    () => import("@/components/sections/CategoriesGridSection").then((m) => m.CategoriesGridSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const CategoriesCTASection = dynamic(
    () => import("@/components/sections/CategoriesCTASection").then((m) => m.CategoriesCTASection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const CategoriesNewsletterSection = dynamic(
    () => import("@/components/sections/CategoriesNewsLetterSection").then((m) => m.CategoriesNewsletterSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)



export const metadata: Metadata = {
    title: 'Software Testing Courses & QA Mentorship Programs | Top Automation Testing Certification | Testriq Ed-Tech Institute',
    description: 'Discover expert-led software testing courses, QA mentorship programs, automation testing certification, performance testing training, and mobile app testing courses at Testriq Ed-Tech. Advance your career in quality assurance with hands-on mentorship and industry-recognized certifications.',
    keywords: 'software testing courses, QA mentorship programs, automation testing certification, performance testing training, mobile app testing courses, AI application testing, web app testing, software testing tools, QA best practices, ed-tech institute',
};

export default function Categories() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <CategoriesHeroSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <CategoriesGridSection />
                <CategoriesCTASection />
                <CategoriesNewsletterSection />
            </div>
        </div>
    );
}

