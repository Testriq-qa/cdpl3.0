import React from 'react';
import type { Metadata } from 'next';
import { BlogCategoryMenu, BlogSidebar } from '@/components/blog';
import { getCategoryBySlug, getPostsByCategory, getAllCategories } from '@/data/BlogPostData';
import { notFound } from 'next/navigation';
import CategoryHero from '@/components/blog/CategoryHero';
import CategoryArticleList from '@/components/blog/CategoryArticleList';

// Generate static params for all categories (SSG)
export async function generateStaticParams() {
    const categories = getAllCategories();
    return categories.map((category) => ({
        slug: category.slug,
    }));
}

// Generate dynamic metadata for each category (SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: 'Category Not Found',
            description: 'The requested category could not be found.',
        };
    }

    const posts = getPostsByCategory(category.id);

    return {
        title: `${category.name} - Expert Articles & Tutorials | Tech Blog`,
        description: `${category.description} Browse ${posts.length}+ articles on ${category.name.toLowerCase()}.`,
        keywords: [
            category.name,
            `${category.name} tutorials`,
            `${category.name} articles`,
            `${category.name} blog`,
            'tech blog',
            'programming',
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
            canonical: `/blog/category/${category.slug}`,
        },
        openGraph: {
            title: `${category.name} - Expert Articles & Tutorials`,
            description: category.description,
            url: `/blog/category/${category.slug}`,
            siteName: 'Your Company',
            images: [
                {
                    url: '/blog/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: `${category.name} Articles`,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${category.name} - Expert Articles & Tutorials`,
            description: category.description,
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
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    const posts = getPostsByCategory(category.id);

    if (posts.length === 0) {
        notFound();
    }

    // JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: category.name,
        description: category.description,
        url: `https://yourwebsite.com/blog/category/${category.slug}`,
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: posts.map((post, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'BlogPosting',
                    headline: post.title,
                    description: post.description,
                    image: post.featuredImage,
                    datePublished: new Date(post.publishDate).toISOString(),
                    author: {
                        '@type': 'Person',
                        name: post.author,
                    },
                    url: `https://yourwebsite.com/blog/${post.slug}`,
                },
            })),
        },
    };

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Category Navigation Menu */}
            <BlogCategoryMenu />

            {/* Hero Section with Featured Article from this category */}
            <CategoryHero categoryId={category.id} categoryName={category.name} />

            {/* Main Content Area */}
            <div className="bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Article List - 2 columns */}
                        <div className="lg:col-span-2">
                            <CategoryArticleList categoryId={category.id} categoryName={category.name} />
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