'use client';

import dynamic from 'next/dynamic'
import React from 'react'

const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => m.BlogPostHeroSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostSection = dynamic(
    () => import("@/components/sections/BlogPostSection").then(m => m.BlogPostSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

const BlogPostContactSection = dynamic(
    () => import("@/components/sections/BlogPostContactSection").then(m => m.BlogPostContactSection),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
)

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <div className="bg-white">
            <BlogPostHeroSection slug={params.slug} />
            <BlogPostSection slug={params.slug} />
            <BlogPostContactSection />
        </div>
    )
}

