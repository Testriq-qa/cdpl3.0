
import React from 'react';
import Link from 'next/link';

const BlogPageNewUI: React.FC = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero/Featured Article */}
            <section className="gradient-bg rounded-2xl shadow-lg p-8 md:p-12 mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md mb-4">
                            AI & Machine Learning
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            The Future of AI in Web Development: Trends and Predictions for 2025
                        </h1>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences. Discover the tools and techniques that will shape the industry.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                            <div className="flex items-center">
                                <i className="fas fa-user mr-2"></i>
                                <span>Sarah Chen</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-calendar mr-2"></i>
                                <span>October 2, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock mr-2"></i>
                                <span>8 min read</span>
                            </div>
                        </div>
                        <Link href="#" className="gradient-btn text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
                            Read Full Article
                            <i className="fas fa-arrow-right ml-2"></i>
                            <span className="ml-2 badge bg-indigo-700 text-white">7</span>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full h-80 bg-white bg-opacity-50 rounded-xl flex flex-col items-center justify-center">
                            <i className="fas fa-book-open text-gray-400 text-8xl mb-4"></i>
                            <p className="text-gray-500 text-sm">Featured Article Image</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Latest Articles Section */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                        <Link href="#" className="px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-all duration-200 flex items-center">
                            View All Posts
                            <i className="fas fa-arrow-right ml-2"></i>
                            <span className="ml-2 badge bg-orange-500 text-white">3</span>
                        </Link>
                    </div>

                    {/* Article Cards */}
                    <div className="space-y-6">
                        {/* Article 1 */}
                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-48 h-48 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-book-open text-gray-300 text-6xl"></i>
                                </div>
                                <div className="p-6 flex-1">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md mb-3">
                                        Web Development
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                                        Building Responsive Layouts with CSS Grid and Flexbox
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Master the art of creating flexible, responsive layouts using modern CSS techniques.
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <i className="fas fa-user mr-1"></i>
                                            <span>Mike Rodriguez</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar mr-1"></i>
                                            <span>September 30, 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-clock mr-1"></i>
                                            <span>6 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Article 2 */}
                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-48 h-48 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-book-open text-gray-300 text-6xl"></i>
                                </div>
                                <div className="p-6 flex-1">
                                    <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-md mb-3">
                                        React
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                                        React 19: What's New and How to Migrate
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        A comprehensive guide to React 19's new features and migration strategies.
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <i className="fas fa-user mr-1"></i>
                                            <span>Emily Johnson</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar mr-1"></i>
                                            <span>September 28, 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-clock mr-1"></i>
                                            <span>10 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Article 3 */}
                        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-48 h-48 bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-book-open text-gray-300 text-6xl"></i>
                                </div>
                                <div className="p-6 flex-1">
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-md mb-3">
                                        Backend
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                                        Optimizing Database Performance for High-Traffic Applications
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Learn proven strategies to scale your database for millions of users.
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <i className="fas fa-user mr-1"></i>
                                            <span>David Kim</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar mr-1"></i>
                                            <span>September 25, 2025</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-clock mr-1"></i>
                                            <span>12 min read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-8">
                        <Link href="#" className="gradient-btn text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center">
                            Load More Articles
                            <i className="fas fa-arrow-down ml-2"></i>
                            <span className="ml-2 badge bg-indigo-700 text-white">7</span>
                        </Link>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                    {/* Stay Updated Box */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-envelope text-purple-600 text-2xl mr-3"></i>
                            <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Get the latest tech insights delivered to your inbox weekly.
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input type="email" placeholder="Enter your email" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 badge bg-green-500 text-white">9</span>
                            </div>
                            <button className="w-full gradient-btn text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                                Subscribe Now
                                <span className="ml-2 badge bg-pink-500 text-white">10</span>
                            </button>
                        </div>
                    </div>

                    {/* Popular This Week */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-fire text-orange-500 text-xl mr-2"></i>
                            <h3 className="text-xl font-bold text-gray-900">Popular This Week</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">1</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-purple-600 cursor-pointer">
                                        Complete Guide to TypeScript for Beginners
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">TypeScript</span>
                                        <span>15.2k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">2</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-purple-600 cursor-pointer">
                                        Docker Best Practices for Production
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">DevOps</span>
                                        <span>12.8k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">3</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-purple-600 cursor-pointer">
                                        Building Scalable APIs with Node.js
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">Backend</span>
                                        <span>11.5k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">4</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-purple-600 cursor-pointer">
                                        Understanding Microservices Architecture
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">Architecture</span>
                                        <span>9.8k views</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">5</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 hover:text-purple-600 cursor-pointer">
                                        Getting Started with GraphQL
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span className="mr-2">API</span>
                                        <span>8.7k views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-tags text-blue-500 text-xl mr-2"></i>
                            <h3 className="text-xl font-bold text-gray-900">Categories</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="badge bg-purple-100 text-purple-700">Web Development</span>
                            <span className="badge bg-blue-100 text-blue-700">AI & ML</span>
                            <span className="badge bg-green-100 text-green-700">DevOps</span>
                            <span className="badge bg-yellow-100 text-yellow-700">Cloud</span>
                            <span className="badge bg-red-100 text-red-700">Cybersecurity</span>
                            <span className="badge bg-indigo-100 text-indigo-700">Data Science</span>
                            <span className="badge bg-pink-100 text-pink-700">Mobile Dev</span>
                            <span className="badge bg-teal-100 text-teal-700">UI/UX</span>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default BlogPageNewUI;

