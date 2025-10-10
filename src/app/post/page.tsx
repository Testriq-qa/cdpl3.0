import dynamic from 'next/dynamic'
import React from 'react'

const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => m.BlogPostHeroSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostSection = dynamic(
    () => import("@/components/Sections/BlogPostSection").then(m => m.BlogPostSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const BlogPostContactSection = dynamic(
    () => import("@/components/Sections/BlogPostContactSection").then(m => m.BlogPostContactSection),
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
        <div>
            <BlogPostHeroSection />
            <BlogPostSection />
            <BlogPostContactSection />
        </div>
    )
}


