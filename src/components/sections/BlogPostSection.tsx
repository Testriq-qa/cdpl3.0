'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { getPostBySlug} from '@/data/BlogPostData';
import BlogSidebarRelated from '@/components/blog/BlogSidebarRelated';
import { notFound } from 'next/navigation';

interface BlogPostSectionProps {
    slug: string;
}

export const BlogPostSection: React.FC<BlogPostSectionProps> = ({ slug }) => {
    const post = getPostBySlug(slug);
    
    if (!post) {
        notFound();
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <main className="lg:col-span-2">
                {/* Table of Contents */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Table of Contents</h2>
                <ul className="list-decimal pl-4 sm:pl-6 mb-8 sm:mb-12 space-y-2 text-sm sm:text-base text-gray-700">
                    {[
                        { id: 'introduction', text: 'Introduction' },
                        { id: 'key-concepts', text: 'Key Concepts and Fundamentals' },
                        { id: 'best-practices', text: 'Best Practices and Implementation' },
                        { id: 'common-pitfalls', text: 'Common Pitfalls to Avoid' },
                        { id: 'advanced-techniques', text: 'Advanced Techniques' },
                        { id: 'tools-resources', text: 'Tools and Resources' },
                        { id: 'real-world-examples', text: 'Real-World Examples' },
                        { id: 'performance-optimization', text: 'Performance Optimization' },
                        { id: 'future-trends', text: 'Future Trends and Predictions' },
                        { id: 'conclusion', text: 'Conclusion and Next Steps' },
                    ].map((item) => (
                        <li key={item.id}>
                            <Link href={`#${item.id}`} className="text-blue-600 hover:underline">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Introduction Section */}
                <h2 id="introduction" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Introduction</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    {post.excerpt}
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    In this comprehensive guide, we&apos;ll explore everything you need to know about {post.title.toLowerCase()}. 
                    Whether you&apos;re a beginner or an experienced professional, this article will provide valuable insights 
                    and practical knowledge to help you succeed.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-8">
                    <Image
                        src={post.featuredImage || "/images/automation-testing.webp"}
                        alt={post.title}
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Key Concepts Section */}
                <h2 id="key-concepts" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Key Concepts and Fundamentals</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Understanding the core concepts is essential for mastering any technology or methodology. 
                    Let&apos;s break down the fundamental principles that form the foundation of this topic.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    The key to success lies in understanding not just the &quot;how&quot; but also the &quot;why&quot; behind each concept. 
                    This knowledge will enable you to make informed decisions and adapt to changing requirements.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-8">
                    <Image
                        src={post.featuredImage || "/images/automation-testing.webp"}
                        alt="Key Concepts Illustration"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Best Practices Section */}
                <h2 id="best-practices" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Best Practices and Implementation</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Implementing best practices ensures that your work is efficient, maintainable, and scalable. 
                    Here are the industry-standard approaches that professionals use to achieve optimal results.
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm sm:text-base text-gray-700 space-y-2">
                    <li>Follow established coding standards and conventions</li>
                    <li>Implement comprehensive testing strategies</li>
                    <li>Document your code and processes thoroughly</li>
                    <li>Use version control effectively</li>
                    <li>Optimize for performance and scalability</li>
                </ul>

                {/* Common Pitfalls Section */}
                <h2 id="common-pitfalls" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Common Pitfalls to Avoid</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Learning from common mistakes can save you countless hours of debugging and frustration. 
                    Here are the most frequent pitfalls and how to avoid them.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    By being aware of these common issues, you can proactively design solutions that are robust and reliable from the start.
                </p>

                {/* Advanced Techniques Section */}
                <h2 id="advanced-techniques" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Advanced Techniques</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Once you&apos;ve mastered the basics, these advanced techniques will help you take your skills to the next level. 
                    These strategies are used by experts to solve complex problems and optimize performance.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-8">
                    <Image
                        src={post.featuredImage || "/images/automation-testing.webp"}
                        alt="Advanced Techniques"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Tools and Resources Section */}
                <h2 id="tools-resources" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Tools and Resources</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Having the right tools can significantly improve your productivity and the quality of your work. 
                    Here are the essential tools and resources that professionals rely on.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Stay updated with the latest tools and technologies to maintain a competitive edge in your field.
                </p>

                {/* Real-World Examples Section */}
                <h2 id="real-world-examples" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Real-World Examples</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Theory is important, but seeing how concepts are applied in real-world scenarios helps solidify understanding. 
                    Let&apos;s explore some practical examples that demonstrate these principles in action.
                </p>
                <div className="relative w-full h-48 sm:h-64 md:h-72 mb-8">
                    <Image
                        src={post.featuredImage || "/images/automation-testing.webp"}
                        alt="Real-World Examples"
                        fill
                        className="rounded-lg shadow-md object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                    />
                </div>

                {/* Performance Optimization Section */}
                <h2 id="performance-optimization" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Performance Optimization</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Performance is crucial for user satisfaction and system efficiency. Learn how to identify bottlenecks 
                    and implement optimizations that make a real difference.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    Continuous monitoring and optimization ensure that your applications remain fast and responsive as they scale.
                </p>

                {/* Future Trends Section */}
                <h2 id="future-trends" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Future Trends and Predictions</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    The technology landscape is constantly evolving. Understanding emerging trends helps you stay ahead 
                    and prepare for the future of the industry.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    By staying informed about upcoming developments, you can position yourself and your projects for long-term success.
                </p>

                {/* Conclusion Section */}
                <h2 id="conclusion" className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">Conclusion and Next Steps</h2>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    We&apos;ve covered a comprehensive overview of {post.title.toLowerCase()}. The knowledge and techniques 
                    discussed in this article provide a solid foundation for both beginners and experienced practitioners.
                </p>
                <p className="mb-4 text-sm sm:text-base text-gray-700">
                    To continue your learning journey, explore the related articles below and put these concepts into practice 
                    through hands-on projects. Remember, mastery comes through consistent practice and continuous learning.
                </p>

                {/* Tags Section */}
                <div className="mt-8 mb-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-700">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Share Section */}
                <div className="border-t border-gray-200 pt-6 mt-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-700">Share this article</h3>
                    <div className="flex gap-4">
                        <Link
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                            <FaXTwitter className="w-5 h-5" />
                            <span className="text-sm font-medium">Twitter</span>
                        </Link>
                        <Link
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            <FaLinkedin className="w-5 h-5" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                        <Link
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            <FaFacebook className="w-5 h-5" />
                            <span className="text-sm font-medium">Facebook</span>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Sidebar with Related Posts */}
            <aside className="lg:col-span-1">
                <BlogSidebarRelated 
                    currentPostId={post.id} 
                    categoryId={post.categoryId} 
                />
            </aside>
        </section>
    );
};

