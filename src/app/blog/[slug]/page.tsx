import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts, getAuthorById, getCategoryById, getPostsByCategory } from '@/data/BlogPostData';
import { notFound } from 'next/navigation';
import { BlogCategoryMenu } from '@/components/blog';

const BlogPostHeroSection = dynamic(
    () => import("@/components/sections/BlogPostHeroSection").then(m => ({ default: m.BlogPostHeroSection })),
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
    () => import("@/components/sections/BlogPostSection").then(m => ({ default: m.BlogPostSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

const BlogPostContactSection = dynamic(
    () => import("@/components/sections/BlogPostContactSection").then(m => ({ default: m.BlogPostContactSection })),
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-white">
                <p className="text-gray-500">Loading...</p>
            </div>
        )
    }
);

// ============================================================================
// STATIC SITE GENERATION - Generate pages for all blog posts
// ============================================================================
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// ============================================================================
// DYNAMIC METADATA GENERATION - SEO Optimized
// ============================================================================
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found | Your Company Blog',
            description: 'The requested blog post could not be found. Browse our latest articles on technology, web development, and software engineering.',
            robots: {
                index: false,
                follow: true,
            },
        };
    }

    const author = getAuthorById(post.authorId);
    const category = getCategoryById(post.categoryId);
    const publishedTime = new Date(post.publishDate).toISOString();
    const modifiedTime = post.lastModified ? new Date(post.lastModified).toISOString() : publishedTime;

    return {
        // Primary Meta Tags - Optimized
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.keywords.join(', '),
        
        // Author Information
        authors: author ? [{ 
            name: author.name,
            url: author.social?.website || author.social?.linkedin 
        }] : undefined,
        creator: author?.name,
        publisher: 'Your Company',
        
        // Format Detection
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        
        // Base URL
        metadataBase: new URL('https://yourwebsite.com'),
        
        // Canonical URL
        alternates: {
            canonical: post.seo.canonical || `/blog/${post.slug}`,
            languages: {
                'en-US': `/blog/${post.slug}`,
            },
        },
        
        // Open Graph - Enhanced
        openGraph: {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            url: `https://yourwebsite.com/blog/${post.slug}`,
            siteName: 'Your Company Tech Blog',
            images: [
                {
                    url: post.seo.ogImage || post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                    type: 'image/jpeg',
                },
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime,
            modifiedTime,
            expirationTime: undefined,
            authors: author ? [author.name] : undefined,
            section: category?.name,
            tags: post.tags,
        },
        
        // Twitter Card - Enhanced
        twitter: {
            card: 'summary_large_image',
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            images: [post.seo.ogImage || post.featuredImage],
            creator: author?.social?.twitter,
            site: '@yourcompany',
        },
        
        // Robots Configuration
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
        
        // Additional Properties
        category: category?.name,
        classification: 'Technology Article',
    };
}

// ============================================================================
// BLOG POST PAGE COMPONENT
// ============================================================================
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const author = getAuthorById(post.authorId);
    const category = getCategoryById(post.categoryId);
    const relatedPosts = getPostsByCategory(post.categoryId)
        .filter(p => p.id !== post.id)
        .slice(0, 5);

    // Calculate estimated word count from read time
    const estimatedWordCount = parseInt(post.readTime) * 200; // Assuming 200 words per minute

    type JsonLdGraph = Array<Record<string, unknown>>;
    const jsonLd: { '@context': string; '@graph': JsonLdGraph } = {
        '@context': 'https://schema.org',
        '@graph': [
            // Article Schema - Enhanced
            {
                '@type': 'Article',
                '@id': `https://yourwebsite.com/blog/${post.slug}#article`,
                headline: post.title,
                alternativeHeadline: post.description,
                description: post.description,
                image: {
                    '@type': 'ImageObject',
                    url: post.featuredImage,
                    width: 1200,
                    height: 630,
                    caption: post.title
                },
                datePublished: new Date(post.publishDate).toISOString(),
                dateModified: post.lastModified
                    ? new Date(post.lastModified).toISOString()
                    : new Date(post.publishDate).toISOString(),
                author: author ? {
                    '@type': 'Person',
                    '@id': `https://yourwebsite.com/authors/${author.id}#person`,
                    name: author.name,
                    description: author.bio,
                    url: author.social?.website || author.social?.linkedin,
                    image: author.avatar,
                    jobTitle: author.role,
                    sameAs: [
                        author.social?.twitter,
                        author.social?.linkedin,
                        author.social?.github
                    ].filter(Boolean)
                } : undefined,
                publisher: {
                    '@type': 'Organization',
                    '@id': 'https://yourwebsite.com/#organization',
                    name: 'Your Company',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://yourwebsite.com/logo.png',
                        width: 600,
                        height: 60
                    },
                    sameAs: [
                        'https://twitter.com/yourcompany',
                        'https://linkedin.com/company/yourcompany'
                    ]
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `https://yourwebsite.com/blog/${post.slug}`,
                },
                keywords: post.tags.join(', '),
                articleSection: category?.name,
                articleBody: post.excerpt,
                wordCount: estimatedWordCount,
                timeRequired: `PT${post.readTime}`,
                inLanguage: 'en-US',
                isAccessibleForFree: true,
                isPartOf: {
                    '@type': 'Blog',
                    '@id': 'https://yourwebsite.com/blog#blog',
                    name: 'Your Company Tech Blog'
                },
                about: {
                    '@type': 'Thing',
                    name: category?.name,
                    description: category?.description
                }
            },
            // BreadcrumbList Schema
            {
                '@type': 'BreadcrumbList',
                '@id': `https://yourwebsite.com/blog/${post.slug}#breadcrumb`,
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
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: category?.name || 'Category',
                        item: `https://yourwebsite.com/blog/category/${category?.slug}`
                    },
                    {
                        '@type': 'ListItem',
                        position: 4,
                        name: post.title,
                        item: `https://yourwebsite.com/blog/${post.slug}`
                    }
                ]
            },
            // WebPage Schema
            {
                '@type': 'WebPage',
                '@id': `https://yourwebsite.com/blog/${post.slug}`,
                url: `https://yourwebsite.com/blog/${post.slug}`,
                name: post.title,
                description: post.description,
                isPartOf: {
                    '@id': 'https://yourwebsite.com/#website'
                },
                primaryImageOfPage: {
                    '@id': `https://yourwebsite.com/blog/${post.slug}#primaryimage`
                },
                datePublished: new Date(post.publishDate).toISOString(),
                dateModified: post.lastModified
                    ? new Date(post.lastModified).toISOString()
                    : new Date(post.publishDate).toISOString(),
                breadcrumb: {
                    '@id': `https://yourwebsite.com/blog/${post.slug}#breadcrumb`
                },
                inLanguage: 'en-US'
            }
        ]
    };

    // Add related posts to structured data if available
    if (relatedPosts.length > 0) {
        jsonLd['@graph'].push({
            '@type': 'ItemList',
            '@id': `https://yourwebsite.com/blog/${post.slug}#relatedposts`,
            name: 'Related Articles',
            itemListElement: relatedPosts.map((relatedPost, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: relatedPost.title,
                item: `https://yourwebsite.com/blog/${relatedPost.slug}`
            }))
        });
    }

    return (
        <>
            {/* Enhanced JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Semantic HTML Structure */}
            <article 
                itemScope 
                itemType="https://schema.org/Article"
                className="blog-post-page"
            >
                {/* Category Navigation Menu */}
                <nav aria-label="Blog categories">
                    <BlogCategoryMenu />
                </nav>

                {/* Blog Post Hero Section */}
                <header>
                    <BlogPostHeroSection slug={slug} />
                </header>

                {/* Blog Post Main Content */}
                <main role="main" aria-label="Article content">
                    <BlogPostSection slug={slug} />
                </main>

                {/* Contact Section */}
                <aside role="complementary" aria-label="Contact information">
                    <BlogPostContactSection />
                </aside>
            </article>
        </>
    );
}