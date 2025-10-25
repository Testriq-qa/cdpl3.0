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

// ============================================================================
// SEO METADATA - FULLY OPTIMIZED
// ============================================================================
export const metadata: Metadata = {
    // Primary Meta Tags - Optimized for CTR
    title: 'Tech Blog - Latest Insights, Tutorials & Industry Trends | Expert Articles on AI, Web Dev & More',
    description: 'Discover expert-written articles on AI/ML, web development, React, Next.js, software testing, and DevOps. Get actionable tutorials, best practices, and industry insights to level up your tech skills. Updated daily with fresh content.',
    
    // Keywords - Comprehensive and targeted
    keywords: [
        'tech blog',
        'technology blog',
        'web development tutorials',
        'AI machine learning articles',
        'React tutorials',
        'Next.js guides',
        'software testing blog',
        'DevOps best practices',
        'programming guides',
        'coding tutorials',
        'software development blog',
        'tech industry insights',
        'developer resources',
        'software engineering blog',
        'full stack development',
        'frontend development',
        'backend development',
        'cloud computing tutorials',
        'database optimization',
        'API development guides'
    ].join(', '),
    
    // Author and Publisher Information
    authors: [
        { name: 'Tech Experts Team', url: 'https://yourwebsite.com/about' }
    ],
    creator: 'Your Company',
    publisher: 'Your Company',
    
    // Format Detection
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    
    // Base URL Configuration
    metadataBase: new URL('https://yourwebsite.com'),
    
    // Canonical URL
    alternates: {
        canonical: '/blog',
        languages: {
            'en-US': '/blog',
            // Add more languages as needed
        },
    },
    
    // Open Graph - Optimized for Social Sharing
    openGraph: {
        title: 'Tech Blog - Expert Articles on AI, Web Development & Software Engineering',
        description: 'Stay ahead with expert tutorials, industry insights, and best practices. Learn AI/ML, React, Next.js, DevOps, and more from experienced professionals.',
        url: 'https://yourwebsite.com/blog',
        siteName: 'Your Company Tech Blog',
        images: [
            {
                url: '/blog/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Tech Blog - Expert Articles and Tutorials on Modern Technology',
                type: 'image/jpeg',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    
    // Twitter Card - Optimized for Twitter Sharing
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Blog - Latest Insights & Tutorials',
        description: 'Expert articles on AI/ML, web development, React, DevOps, and more. Learn from industry professionals.',
        images: ['/blog/og-image.jpg'],
        creator: '@yourcompany',
        site: '@yourcompany',
    },
    
    // Robots Configuration - Optimized for Crawling
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
    
    // Verification Codes
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // yahoo: 'your-yahoo-verification-code',
        // bing: 'your-bing-verification-code',
    },
    
    // Additional SEO Properties
    category: 'Technology',
    classification: 'Technology Blog',
};

// ============================================================================
// MAIN BLOG PAGE COMPONENT
// ============================================================================
export default function BlogPage() {
    // Structured Data (JSON-LD) for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            // WebSite Schema
            {
                '@type': 'WebSite',
                '@id': 'https://yourwebsite.com/#website',
                url: 'https://yourwebsite.com',
                name: 'Your Company',
                description: 'Expert technology blog with tutorials, insights, and best practices',
                publisher: {
                    '@id': 'https://yourwebsite.com/#organization'
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://yourwebsite.com/blog/search?q={search_term_string}'
                    },
                    'query-input': 'required name=search_term_string'
                },
                inLanguage: 'en-US'
            },
            // Organization Schema
            {
                '@type': 'Organization',
                '@id': 'https://yourwebsite.com/#organization',
                name: 'Your Company',
                url: 'https://yourwebsite.com',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://yourwebsite.com/logo.png',
                    width: 600,
                    height: 60
                },
                sameAs: [
                    'https://twitter.com/yourcompany',
                    'https://linkedin.com/company/yourcompany',
                    'https://github.com/yourcompany'
                ]
            },
            // Blog Schema
            {
                '@type': 'Blog',
                '@id': 'https://yourwebsite.com/blog/#blog',
                url: 'https://yourwebsite.com/blog',
                name: 'Your Company Tech Blog',
                description: 'Expert articles on AI/ML, web development, React, DevOps, software testing, and modern technology',
                publisher: {
                    '@id': 'https://yourwebsite.com/#organization'
                },
                inLanguage: 'en-US',
                blogPost: [] // This would be populated with recent posts
            },
            // BreadcrumbList Schema
            {
                '@type': 'BreadcrumbList',
                '@id': 'https://yourwebsite.com/blog/#breadcrumb',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://yourwebsite.com'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Blog',
                        item: 'https://yourwebsite.com/blog'
                    }
                ]
            }
        ]
    };

    return (
        <>
            {/* Structured Data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Semantic HTML with proper structure */}
            <article itemScope itemType="https://schema.org/Blog">
                {/* Category Navigation Menu - Scrollable */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Hero Section with Featured Article */}
                <header>
                    <BlogHero />
                </header>

                {/* Main Content Area */}
                <div className="bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* SEO-friendly heading - Hidden visually but available for screen readers and SEO */}
                        <h1 className="sr-only">
                            Tech Blog - Latest Articles on Web Development, AI/ML, React, and Software Engineering
                        </h1>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Article List - 2 columns */}
                            <main className="lg:col-span-2" role="main" aria-label="Blog articles">
                                <BlogArticleList />
                            </main>

                            {/* Sidebar - 1 column */}
                            <aside className="lg:col-span-1" role="complementary" aria-label="Blog sidebar">
                                <div className="lg:sticky lg:top-[200px]">
                                    <BlogSidebar />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

