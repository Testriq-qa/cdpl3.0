import dynamic from 'next/dynamic';
import React from 'react';
import { BlogCategoryMenu, BlogHero, BlogSidebar } from '@/components/blog';

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

export const metadata = {
    title: 'Blog - Latest Tech Insights & Tutorials | Your Company',
    description: 'Explore our latest articles on web development, AI/ML, software testing, data science, and more. Stay updated with industry trends and best practices.',
    keywords: 'tech blog, web development, AI, machine learning, software testing, data science, programming tutorials',
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-8">
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
