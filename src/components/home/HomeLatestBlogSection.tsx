'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * HomeLatestBlogSection - Recent Articles
 * 
 * Shows latest blog posts
 * CDPL brand with blog card design
 */
export default function HomeLatestBlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Top Data Science Trends 2025: AI, Automation, and Ethical Insights',
      excerpt: 'Explore the top data science trends shaping 2025, from generative AI and automated ML to ethical practices and edge computing.',
      category: 'Data Science',
      author: 'Shoeb Shaikh',
      date: 'October 29, 2025',
      readTime: '13 min read',
      image: '/blog/data-science-trends-2025.jpg',
      link: '/blog/future-of-ai-web-development-2025',
    },
    {
      id: 2,
      title: 'Mastering Automated Software Testing: The Complete 2025 Guide',
      excerpt: 'Learn everything about automated software testing, from fundamentals to advanced techniques, tools, and best practices.',
      category: 'Software Testing',
      author: 'CDPL Team',
      date: 'October 25, 2025',
      readTime: '15 min read',
      image: '/blog/automated-testing-guide.jpg',
      link: '/blog/automated-software-testing-guide',
    },
    {
      id: 3,
      title: 'API Testing Best Practices for Modern Applications',
      excerpt: 'Discover the essential API testing strategies and tools that every QA professional should know in 2025.',
      category: 'Software Testing',
      author: 'CDPL Team',
      date: 'October 20, 2025',
      readTime: '10 min read',
      image: '/blog/api-testing-best-practices.jpg',
      link: '/blog/api-testing-best-practices',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Our <span className="text-orange-600">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in software testing, data science, and technology.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={post.link}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
                    {/* Placeholder gradient - replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                      {post.category}
                    </div>
                    {/* 
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    */}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Date & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-orange-600 font-semibold group-hover:gap-2 transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
