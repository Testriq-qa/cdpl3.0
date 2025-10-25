import dynamic from 'next/dynamic';
import React from 'react';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts, getAuthorById } from '@/data/BlogPostData';
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

// Generate static params for all blog posts (SSG)
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate dynamic metadata for each blog post (SEO)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const author = getAuthorById(post.authorId);
    const publishedTime = new Date(post.publishDate).toISOString();
    const modifiedTime = post.lastModified ? new Date(post.lastModified).toISOString() : publishedTime;

    return {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.keywords.join(', '),
        authors: author ? [{ name: author.name }] : undefined,
        creator: author?.name,
        publisher: 'Your Company',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL('https://yourwebsite.com'),
        alternates: {
            canonical: post.seo.canonical || `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            url: `/blog/${post.slug}`,
            siteName: 'Your Company',
            images: [
                {
                    url: post.seo.ogImage || post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime,
            modifiedTime,
            authors: author ? [author.name] : undefined,
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            images: [post.seo.ogImage || post.featuredImage],
            creator: author?.social?.twitter ? `@${author.social.twitter.split('/').pop()}` : '@yourcompany',
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
        other: {
            'article:published_time': publishedTime,
            'article:modified_time': modifiedTime,
            'article:author': author?.name || 'Unknown',
            'article:section': post.category,
            'article:tag': post.tags.join(', '),
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.featuredImage,
        datePublished: new Date(post.publishDate).toISOString(),
        dateModified: post.lastModified ? new Date(post.lastModified).toISOString() : new Date(post.publishDate).toISOString(),
        author: {
            '@type': 'Person',
            name: post.author,
            url: `https://yourwebsite.com/author/${post.authorId}`,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Your Company',
            logo: {
                '@type': 'ImageObject',
                url: 'https://yourwebsite.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://yourwebsite.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        wordCount: 1500, // You can calculate this dynamically if you have content
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
            
            <div className="bg-white">
                <BlogPostHeroSection slug={slug} />
                <BlogPostSection slug={slug} />
                <BlogPostContactSection />
            </div>
        </>
    );
}