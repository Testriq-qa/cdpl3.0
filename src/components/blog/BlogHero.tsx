"use client";

import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FeaturedArticle {
  category: string;
  categoryBg: string;
  categoryText: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
  imageUrl?: string;
}

const BlogHero = () => {
  const featuredArticle: FeaturedArticle = {
    category: "AI & Machine Learning",
    categoryBg: "bg-orange-200",
    categoryText: "text-orange-600",
    title: "The Future of AI in Web Development: Trends and Predictions for 2025",
    description:
      "Explore how artificial intelligence is revolutionizing web development, from automated code generation to intelligent user experiences. Discover the tools and techniques that will shape the industry.",
    author: "Sarah Chen",
    date: "October 8, 2025",
    readTime: "8 min read",
    slug: "/blog/future-of-ai-web-development-2025",
    imageUrl: "/blog/featured-ai.jpg",
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Article Card */}
        <article className="gradient-bg rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 ${featuredArticle.categoryBg} ${featuredArticle.categoryText} text-xs font-semibold rounded-md`}
              >
                {featuredArticle.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
                {featuredArticle.title}
              </h1>

              {/* Description */}
              <p className="text-gray-800 text-base leading-relaxed">
                {featuredArticle.description}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link href={featuredArticle.slug}>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[theme(color.brand)] hover:bg-orange-600 text-white shadow-md hover:shadow-lg h-9 px-6 py-2 transform hover:-translate-y-0.5 duration-200">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Featured Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center">
                {featuredArticle.imageUrl ? (
                  <Image
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg
                      className="w-20 h-20 mb-4"
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
                    <p className="text-gray-600 text-sm">Featured Article Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogHero;
