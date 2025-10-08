"use client";

import { useState } from "react";
import { Calendar, Clock, User, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  categoryBg: string;
  categoryText: string;
  imageUrl?: string;
}

const BlogArticleList = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const articles: Article[] = [
    {
      id: "1",
      category: "Web Development",
      title: "Building Responsive Layouts with CSS Grid and Flexbox",
      description:
        "Master the art of creating flexible, responsive layouts using modern CSS techniques.",
      author: "Mike Rodriguez",
      date: "September 30, 2025",
      readTime: "6 min read",
      slug: "/blog/responsive-layouts-css-grid-flexbox",
      categoryBg: "bg-blue-100",
      categoryText: "text-blue-700",
    },
    {
      id: "2",
      category: "React",
      title: "React 19: What's New and How to Migrate",
      description:
        "A comprehensive guide to React 19's new features and migration strategies.",
      author: "Emily Johnson",
      date: "September 28, 2025",
      readTime: "10 min read",
      slug: "/blog/react-19-whats-new-migration",
      categoryBg: "bg-cyan-100",
      categoryText: "text-cyan-700",
    },
    {
      id: "3",
      category: "Backend",
      title: "Optimizing Database Performance for High-Traffic Applications",
      description:
        "Learn proven strategies to scale your database for millions of users.",
      author: "David Kim",
      date: "September 25, 2025",
      readTime: "12 min read",
      slug: "/blog/database-performance-optimization",
      categoryBg: "bg-green-100",
      categoryText: "text-green-700",
    },
    {
      id: "4",
      category: "AI & Machine Learning",
      title: "The Impact of Generative AI on Content Creation",
      description:
        "Exploring how AI is transforming writing, art, and music industries.",
      author: "Alex Green",
      date: "September 20, 2025",
      readTime: "8 min read",
      slug: "/blog/generative-ai-content-creation",
      categoryBg: "bg-purple-100",
      categoryText: "text-purple-700",
    },
    {
      id: "5",
      category: "UI/UX Design",
      title: "Designing for Accessibility: Best Practices",
      description: "Ensuring your web applications are usable by everyone.",
      author: "Sophia Lee",
      date: "September 18, 2025",
      readTime: "7 min read",
      slug: "/blog/accessibility-best-practices",
      categoryBg: "bg-pink-100",
      categoryText: "text-pink-700",
    },
    {
      id: "6",
      category: "DevOps",
      title: "Introduction to Kubernetes for Developers",
      description: "A beginner-friendly guide to container orchestration.",
      author: "Chris Evans",
      date: "September 15, 2025",
      readTime: "11 min read",
      slug: "/blog/kubernetes-for-developers",
      categoryBg: "bg-yellow-100",
      categoryText: "text-yellow-700",
    },
    {
      id: "7",
      category: "Web Development",
      title: "Understanding Serverless Architectures",
      description:
        "Building scalable and cost-effective applications without managing servers.",
      author: "Jordan Smith",
      date: "September 12, 2025",
      readTime: "9 min read",
      slug: "/blog/serverless-architectures",
      categoryBg: "bg-blue-100",
      categoryText: "text-blue-700",
    },
    {
      id: "8",
      category: "React",
      title: "State Management in React: A Deep Dive",
      description:
        "Comparing Redux, Context API, and Zustand for your React projects.",
      author: "Patty O'Lantern",
      date: "September 10, 2025",
      readTime: "13 min read",
      slug: "/blog/react-state-management",
      categoryBg: "bg-cyan-100",
      categoryText: "text-cyan-700",
    },
    {
      id: "9",
      category: "Backend",
      title: "Securing Your APIs with JWT Authentication",
      description: "Implementing JSON Web Tokens for robust API security.",
      author: "Robert Brown",
      date: "September 8, 2025",
      readTime: "10 min read",
      slug: "/blog/jwt-authentication-apis",
      categoryBg: "bg-green-100",
      categoryText: "text-green-700",
    },
  ];

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Article List */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <Link
                href="/blog/all"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Article Cards */}
            <div className="space-y-6">
              {articles.slice(0, visibleArticles).map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="md:flex">
                    {/* Article Image */}
                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <svg
                            className="w-16 h-16 text-purple-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category Badge */}
                      <span
                        className={`inline-block w-fit px-3 py-1 ${article.categoryBg} ${article.categoryText} text-xs font-semibold rounded-full mb-3`}
                      >
                        {article.category}
                      </span>

                      {/* Title */}
                      <Link href={article.slug}>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2 flex-grow">
                        {article.description}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-semibold text-[10px]">
                            {article.author.charAt(0)}
                          </div>
                          <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-purple-600" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-purple-600" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleArticles < articles.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMoreArticles}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  Load More Articles
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            )}

            {/* View All - Mobile */}
            <div className="flex sm:hidden justify-center mt-8">
              <Link
                href="/blog/all"
                className="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                View All Posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sidebar - Will be imported separately */}
          <aside className="lg:col-span-1">
            {/* Sidebar content will be in BlogSidebar component */}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogArticleList;
