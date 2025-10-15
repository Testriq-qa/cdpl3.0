"use client";

import { useState } from "react";
import { Mail, TrendingUp, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PopularPost {
  id: string;
  rank: number;
  title: string;
  category: string;
  views: string;
  slug: string;
}

interface CategoryTag {
  id: string;
  name: string;
  count: number;
  slug: string;
  color: string;
}

const BlogSidebar = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const popularPosts: PopularPost[] = [
    {
      id: "1",
      rank: 1,
      title: "Complete Guide to TypeScript for Beginners",
      category: "TypeScript",
      views: "15.2k",
      slug: "/blog/typescript-beginners-guide",
    },
    {
      id: "2",
      rank: 2,
      title: "Docker Best Practices for Production",
      category: "DevOps",
      views: "12.8k",
      slug: "/blog/docker-production-best-practices",
    },
    {
      id: "3",
      rank: 3,
      title: "Building Scalable APIs with Node.js",
      category: "Backend",
      views: "11.5k",
      slug: "/blog/scalable-apis-nodejs",
    },
    {
      id: "4",
      rank: 4,
      title: "Modern CSS Techniques Every Developer Should Know",
      category: "Web Development",
      views: "10.3k",
      slug: "/blog/modern-css-techniques",
    },
    {
      id: "5",
      rank: 5,
      title: "Introduction to Machine Learning with Python",
      category: "AI & ML",
      views: "9.7k",
      slug: "/blog/machine-learning-python-intro",
    },
  ];

  const categoryTags: CategoryTag[] = [
    { id: "1", name: "Web Development", count: 45, slug: "/blog/category/web-development", color: "bg-blue-100 text-blue-700" },
    { id: "2", name: "React", count: 32, slug: "/blog/category/react", color: "bg-cyan-100 text-cyan-700" },
    { id: "3", name: "AI & ML", count: 28, slug: "/blog/category/ai-ml", color: "bg-purple-100 text-purple-700" },
    { id: "4", name: "DevOps", count: 24, slug: "/blog/category/devops", color: "bg-yellow-100 text-yellow-700" },
    { id: "5", name: "Backend", count: 21, slug: "/blog/category/backend", color: "bg-green-100 text-green-700" },
    { id: "6", name: "UI/UX", count: 18, slug: "/blog/category/ui-ux", color: "bg-pink-100 text-pink-700" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic here
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Stay Updated</h3>
          </div>

          <p className="text-white/90 mb-5 text-sm leading-relaxed">
            Get the latest tech insights, tutorials, and industry news delivered to your inbox weekly.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Subscribe Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="font-semibold">✓ Successfully subscribed!</p>
              <p className="text-sm text-white/80 mt-1">Check your inbox for confirmation.</p>
            </div>
          )}
        </div>
      </div>

      {/* Popular This Week */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Popular This Week</h3>
        </div>

        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={post.slug}
              className="group flex items-start gap-3 hover:bg-purple-50 p-3 rounded-xl transition-all duration-200 -mx-3"
            >
              {/* Rank Badge */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                  post.rank === 1
                    ? "bg-gradient-to-br from-yellow-400 to-orange-500"
                    : post.rank === 2
                    ? "bg-gradient-to-br from-gray-300 to-gray-400"
                    : post.rank === 3
                    ? "bg-gradient-to-br from-orange-300 to-orange-400"
                    : "bg-gradient-to-br from-purple-500 to-blue-600"
                }`}
              >
                {post.rank}
              </div>

              {/* Post Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Popular */}
        <Link
          href="/blog/popular"
          className="mt-5 flex items-center justify-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors duration-200"
        >
          View All Popular Posts
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Categories/Tags */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Tag className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Browse by Category</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {categoryTags.map((tag) => (
            <Link
              key={tag.id}
              href={tag.slug}
              className={`inline-flex items-center gap-2 px-4 py-2 ${tag.color} rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5`}
            >
              {tag.name}
              <span className="bg-white/50 px-2 py-0.5 rounded-full text-xs">
                {tag.count}
              </span>
            </Link>
          ))}
        </div>

        {/* View All Categories */}
        <Link
          href="/blog/categories"
          className="mt-5 flex items-center justify-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-200"
        >
          View All Categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Ad Space / CTA */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 border border-purple-100">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold">
            ?
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 text-sm">
            Explore our comprehensive training programs and accelerate your career in tech.
          </p>
          <Link href="/courses">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
