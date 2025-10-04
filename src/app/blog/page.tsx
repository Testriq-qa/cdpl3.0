import dynamic from 'next/dynamic';
import React from 'react'

const BlogPage = dynamic(
    () => import("@/components/Sections/BlogPage"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

const BlogHeroSection = dynamic(
    () => import("@/components/Sections/BlogHeroSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const BlogFeaturedSection = dynamic(
    () => import("@/components/Sections/BlogFeaturedSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const BlogCategoriesSection = dynamic(
    () => import("@/components/Sections/BlogCategoriesSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const BlogGridSection = dynamic(
    () => import("@/components/Sections/BlogGridSection"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

export default function page() {
    return (
        <>
            
            <div className='bg-gray-100'>
                <BlogHeroSection />
                <BlogFeaturedSection />
                <BlogCategoriesSection />
                <BlogGridSection />
            </div>
        </>
    )
}



