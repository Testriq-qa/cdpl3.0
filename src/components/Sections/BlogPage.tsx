
"use client";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, Variants, Transition } from 'framer-motion';

export const metadata: Metadata = {
    title: 'Best AI ML Training Courses | Automation Testing Certification | Software Development Bootcamp | CDPL Cinute Digital',
    description: 'Explore top artificial intelligence training, machine learning courses, automation testing certification, software testing programs, and software development bootcamp at CDPL Cinute Digital - leading ed-tech institute for online AI courses and test automation tools.',
};

interface Post {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category: string;
    image: string;
    readTime: number;
}

const featuredPosts: Post[] = [
    {
        id: 1,
        title: 'The Future of Artificial Intelligence and Machine Learning Training: Trends for 2025 and Beyond',
        excerpt: 'Dive into emerging trends in artificial intelligence training and machine learning courses, including advanced neural networks, ethical AI, generative AI, and real-world applications to boost your career in AI ML certification.',
        slug: 'future-of-ai-ml-training-2025',
        date: 'Nov 18, 2024',
        category: 'AI/ML Training Courses',
        image: '/images/Image1.jpg',
        readTime: 8,
    },
    {
        id: 2,
        title: 'Mastering Automation Testing Certification: Comprehensive Guide to Selenium and Appium',
        excerpt: 'Learn the fundamentals of automation testing certification, including test automation tools like Selenium and Appium, API testing, and how to implement them in agile environments for efficient software quality assurance.',
        slug: 'automation-testing-certification-guide',
        date: 'Oct 15, 2025',
        category: 'Automation Testing Certification',
        image: '/images/Image2.jpg',
        readTime: 12,
    },
];

const recentPosts: Post[] = [
    {
        id: 3,
        title: 'Common Pitfalls in Software Development Bootcamp and How to Avoid Them',
        excerpt: 'Identify frequent mistakes in software development bootcamp processes and gain practical advice on building efficient, scalable applications using modern coding practices and full stack development techniques.',
        slug: 'software-development-bootcamp-pitfalls',
        date: 'Apr 5, 2025',
        category: 'Software Development Bootcamp',
        image: '/images/Image3.jpg',
        readTime: 6,
    },
    {
        id: 4,
        title: 'Why Performance Testing Matters in Software Testing Certification',
        excerpt: 'Understand the importance of performance testing in software testing certification to ensure applications handle high loads, provide optimal user experiences, and maintain quality in modern digital environments.',
        slug: 'performance-testing-software-certification',
        date: 'Apr 5, 2025',
        category: 'Software Testing Certification',
        image: '/images/Image4.jpg',
        readTime: 7,
    },
    {
        id: 5,
        title: 'Building AI-Powered Web Applications: Step-by-Step Guide for AI ML Training',
        excerpt: 'Master the integration of artificial intelligence in web development through our AI ML training courses, including best practices, tools like neural networks, and strategies for creating intelligent applications.',
        slug: 'ai-web-applications-training-guide',
        date: 'Aug 11, 2025',
        category: 'AI/ML Training Courses',
        image: '/images/Image5.jpg',
        readTime: 10,
    },
    {
        id: 6,
        title: 'Advanced Techniques in Automation Testing Certification for Optimal Coverage',
        excerpt: 'Dive into advanced strategies in automation testing certification to maximize test coverage, efficiency in workflows, using tools like Selenium, Appium, and API testing for comprehensive quality assurance.',
        slug: 'advanced-automation-testing-certification',
        date: 'Aug 21, 2025',
        category: 'Automation Testing Certification',
        image: '/images/Image6.jpg',
        readTime: 9,
    },
    {
        id: 7,
        title: 'Is a Career in Artificial Intelligence and Machine Learning Training Right for You?',
        excerpt: 'Explore career opportunities in artificial intelligence training and machine learning courses, required skills like data science, growth prospects, and emerging trends in AI ML certification.',
        slug: 'ai-ml-training-career',
        date: 'Dec 10, 2024',
        category: 'Career in AI/ML',
        image: '/images/Image7.jpg',
        readTime: 5,
    },
    {
        id: 8,
        title: 'Essential Strategies for Mobile App Development in Software Testing Certification',
        excerpt: 'Key testing approaches for mobile apps in software testing certification, from manual to automated testing, ensuring high-quality, user-friendly applications with performance and API testing.',
        slug: 'mobile-app-testing-certification-strategies',
        date: 'Sep 20, 2025',
        category: 'Software Testing Certification',
        image: '/images/Image8.png',
        readTime: 7,
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

export default function BlogPage() {
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

    // Animation variants for Framer Motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 15,
                mass: 0.8,
            } as Transition,
        },
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            } as Transition,
        },
        hover: {
            scale: 1.05,
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            } as Transition,
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.2,
            } as Transition,
        },
    };

    const backgroundVariants: Variants = {
        initial: { scale: 1, opacity: 0.15 },
        animate: {
            scale: 1.05,
            opacity: 0.2,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 5,
                ease: 'easeInOut',
            } as Transition,
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header/Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-blue-500 to-orange-600 text-white py-20 md:py-32">
                <motion.div
                    className="absolute inset-0 bg-[url('/api/placeholder/1920/1080?text=Dynamic+Tech+Patterns')] bg-cover bg-center"
                    variants={backgroundVariants}
                    initial="initial"
                    animate="animate"
                />
                <div className="absolute inset-0 bg-black/10" />
                <motion.div
                    className="relative z-10 container mx-auto px-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="text-center max-w-7xl mx-auto">
                        <motion.h1
                            className="text-5xl md:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            Latest Tech Insights with Cinute Digital, Top Ed-Tech, Digital Trends & Innovation
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed"
                            variants={itemVariants}
                        >
                            As a leading ed-tech institute, explore expert insights on AI ML training courses, automation testing certification, software testing programs, and software development bootcamp to advance your skills and career.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={itemVariants}
                        >
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="#search"
                                    className="px-10 py-4 bg-white text-teal-600 rounded-full font-bold shadow-2xl transition-all duration-300 hover:bg-teal-50"
                                >
                                    Discover Blogs
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Link
                                    href="#newsletter"
                                    className="px-10 py-4 border-2 border-white rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-teal-600"
                                >
                                    Join Our Community
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </header>

            <div className="container mx-auto px-4 py-12">
                {/* Featured Posts */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Insights on AI ML Training and Automation Testing</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <article key={post.id} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="relative h-48 md:h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <span className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span>{post.readTime} min read</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Engaging Categories Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Categories in AI Training and Testing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/blog/category/${cat.slug}`}
                                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-indigo-100 hover:border-indigo-300"
                            >
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl mr-4">{cat.icon}</span>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-2">Discover {cat.count} in-depth articles on {cat.name.toLowerCase()}.</p>
                                <span className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800">
                                    Browse Now →
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Main Content Grid: Recent Posts + Sidebar */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Recent Posts */}
                    <section className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Posts on Machine Learning Courses and Software Testing</h2>
                        <div id="search" className="mb-6 relative">
                            <input
                                type="text"
                                placeholder="Search posts on artificial intelligence training, automation testing certification..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 pr-12 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow"
                            />
                            <svg
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {paginatedPosts.length > 0 ? (
                                paginatedPosts.map((post) => (
                                    <article key={post.id} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 hover:border-indigo-300">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                                <time dateTime={post.date}>{post.date}</time>
                                                <span>{post.readTime} min read</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800"
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <p className="text-center text-gray-600 py-8 col-span-2">No posts found matching your search on machine learning courses or software development bootcamp.</p>
                            )}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-8 space-x-2">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${currentPage === 1
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
                                        className={`px-4 py-2 rounded-full font-semibold transition-colors ${currentPage === page
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
                                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${currentPage === totalPages
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
                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Categories</h3>
                            <ul className="space-y-2">
                                {categories.map((cat) => (
                                    <li key={cat.slug}>
                                        <Link
                                            href={`/blog/category/${cat.slug}`}
                                            className="flex justify-between items-center text-gray-700 hover:text-indigo-600 transition-colors text-sm"
                                        >
                                            <span>{cat.name}</span>
                                            <span className="text-gray-400">({cat.count})</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Stay Updated on AI Training</h3>
                            <p className="text-gray-600 mb-4 text-sm">Subscribe for the latest tips on artificial intelligence training, machine learning courses, automation testing certification, and more.</p>
                            <form id="newsletter" className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Tags for Testing and Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Artificial Intelligence Training', 'Machine Learning Courses', 'Automation Testing', 'Software Testing Certification', 'Software Development Bootcamp', 'AI Trends'].map((tag) => (
                                    <Link
                                        key={tag}
                                        href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}