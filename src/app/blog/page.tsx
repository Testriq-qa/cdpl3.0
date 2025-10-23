import dynamic from 'next/dynamic';
import React from 'react';
import { BlogCategoryMenu, BlogHero, BlogSidebar } from '@/components/blog';
import type { Metadata } from 'next';

// Dynamically import BlogArticleList for better performance
const BlogArticleList = dynamic(
    () => import("@/components/blog/BlogArticleList"),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        ),
    }
);

// SEO Metadata - Optimized for search engines
export const metadata: Metadata = {
    title: 'Tech Blog - Latest Insights, Tutorials & Industry Trends | Expert Articles',
    description: 'Explore expert articles on AI/ML, web development, React, DevOps, and more. Stay updated with in-depth tutorials, best practices, and industry insights from experienced professionals.',
    keywords: [
        'tech blog',
        'web development tutorials',
        'AI machine learning',
        'React tutorials',
        'software testing',
        'DevOps best practices',
        'programming guides',
        'technology insights',
        'coding tutorials',
        'software development blog'
    ].join(', '),
    authors: [{ name: 'Tech Experts Team' }],
    creator: 'Your Company',
    publisher: 'Your Company',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://yourwebsite.com'),
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Tech Blog - Latest Insights, Tutorials & Industry Trends',
        description: 'Explore expert articles on AI/ML, web development, React, DevOps, and more. In-depth tutorials and industry insights.',
        url: '/blog',
        siteName: 'Your Company',
        images: [
            {
                url: '/blog/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Tech Blog - Expert Articles and Tutorials',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Blog - Latest Insights, Tutorials & Industry Trends',
        description: 'Explore expert articles on AI/ML, web development, React, DevOps, and more.',
        images: ['/blog/og-image.jpg'],
        creator: '@yourcompany',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // yahoo: 'your-yahoo-verification-code',
    },
};

export default function BlogPage() {
    return (
        <>
            {/* Category Navigation Menu - Scrollable */}
            <BlogCategoryMenu />

            {/* Hero Section with Featured Article */}
            <BlogHero />

            {/* Main Content Area */}
            <div className="bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Article List - 2 columns */}
                        <div className="lg:col-span-2">
                            <BlogArticleList />
                        </div>

                        {/* Sidebar - 1 column */}
                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-[200px]">
                                <BlogSidebar />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
