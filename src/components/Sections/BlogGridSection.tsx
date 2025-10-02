
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category: string;
    image: string;
    readTime: number;
    authorName: string;
}

const recentPosts: Post[] = [
    {
        id: 3,
        title: 'Common Pitfalls in Software Development Bootcamp and How to Avoid Them',
        excerpt: 'Identify frequent mistakes in software development bootcamp processes and gain practical advice on building efficient, scalable applications.',
        slug: 'software-development-bootcamp-pitfalls',
        date: 'Apr 5, 2025',
        category: 'Software Development Bootcamp',
        image: '/images/Image3.jpg',
        readTime: 6,
        authorName: 'Jayesh Mistry'
    },
    {
        id: 4,
        title: 'Why Performance Testing Matters in Software Testing Certification',
        excerpt: 'Understand the importance of performance testing in software testing certification to ensure applications handle high loads.',
        slug: 'performance-testing-software-certification',
        date: 'Apr 5, 2025',
        category: 'Software Testing Certification',
        image: '/images/Image4.jpg',
        readTime: 7,
        authorName: 'Jayesh Mistry'
    },
    {
        id: 5,
        title: 'Building AI-Powered Web Applications: Step-by-Step Guide for AI ML Training',
        excerpt: 'Master the integration of artificial intelligence in web development through our AI ML training courses.',
        slug: 'ai-web-applications-training-guide',
        date: 'Aug 11, 2025',
        category: 'AI/ML Training Courses',
        image: '/images/Image5.jpg',
        readTime: 10,
        authorName: 'Jayesh Mistry'

    },
    {
        id: 6,
        title: 'Advanced Techniques in Automation Testing Certification for Optimal Coverage',
        excerpt: 'Dive into advanced strategies in automation testing certification to maximize test coverage.',
        slug: 'advanced-automation-testing-certification',
        date: 'Aug 21, 2025',
        category: 'Automation Testing Certification',
        image: '/images/Image6.jpg',
        readTime: 9,
        authorName: 'Jayesh Mistry'

    },
    {
        id: 7,
        title: 'Is a Career in Artificial Intelligence and Machine Learning Training Right for You?',
        excerpt: 'Explore career opportunities in artificial intelligence training and machine learning courses.',
        slug: 'ai-ml-training-career',
        date: 'Dec 10, 2024',
        category: 'Career in AI/ML',
        image: '/images/Image7.jpg',
        readTime: 5,
        authorName: 'Jayesh Mistry'

    },
    {
        id: 8,
        title: 'Essential Strategies for Mobile App Development in Software Testing Certification',
        excerpt: 'Key testing approaches for mobile apps in software testing certification, ensuring high-quality applications.',
        slug: 'mobile-app-testing-certification-strategies',
        date: 'Sep 20, 2025',
        category: 'Software Testing Certification',
        image: '/images/Image8.png',
        readTime: 7,
        authorName: 'Jayesh Mistry'

    },
];

const categories = [
    { name: 'AI/ML Training Courses', slug: 'ai-ml-training-courses', count: 20, icon: '🤖' },
    { name: 'Automation Testing Certification', slug: 'automation-testing-certification', count: 18, icon: '⚙️' },
    { name: 'Software Testing Certification', slug: 'software-testing-certification', count: 15, icon: '🧪' },
    { name: 'Software Development Bootcamp', slug: 'software-development-bootcamp', count: 12, icon: '💻' },
    { name: 'AI Trends and Innovations', slug: 'ai-trends', count: 10, icon: '🚀' },
    { name: 'Career in AI/ML', slug: 'career-in-ai-ml', count: 8, icon: '📈' },
];

export default function BlogGridSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const filteredPosts = recentPosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 pb-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Recent Posts */}
            <section className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">Recent Posts</h2>
                <div id="search" className="mb-4 sm:mb-6 relative">
                    <input
                        type="text"
                        placeholder="Search posts on AI, automation testing..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-10 sm:pr-12 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
                    />
                    <svg
                        className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 h-4 sm:h-5 w-4 sm:w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {paginatedPosts.length > 0 ? (
                        paginatedPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-indigo-300">
                                <div className="relative h-40 sm:h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span>{post.readTime} min read</span>
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm">{post.excerpt}</p>

                                    <div className='flex justify-between'>
                                        <p className='text-sm text-gray-600'>{post.authorName}</p>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 text-sm"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 py-6 sm:py-8 col-span-1 sm:col-span-2 text-sm sm:text-base">No posts found matching your search.</p>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-colors text-sm sm:text-base ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                                }`}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-colors text-sm sm:text-base ${currentPage === page
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition-colors text-sm sm:text-base ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>

            {/* Sidebar */}
            <aside className="space-y-6 sm:space-y-8">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Quick Categories</h3>
                    <ul className="space-y-2">
                        {categories.map((cat) => (
                            <li key={cat.slug}>
                                <Link
                                    href={`/blog/category/${cat.slug}`}
                                    className="flex justify-between items-center text-gray-700 hover:text-indigo-600 transition-colors text-sm sm:text-base"
                                >
                                    <span>{cat.name}</span>
                                    <span className="text-gray-400">({cat.count})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Stay Updated</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Subscribe for the latest tips on AI training and automation testing.</p>
                    <div id="newsletter" className="space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
                        />
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Artificial Intelligence Training', 'Machine Learning Courses', 'Automation Testing', 'Software Testing Certification', 'Software Development Bootcamp', 'AI Trends'].map((tag) => (
                            <Link
                                key={tag}
                                href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                                className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                            >
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}
