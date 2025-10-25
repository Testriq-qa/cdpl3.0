"use client";

import { TrendingUp, FolderOpen, Mail } from "lucide-react";
import Link from "next/link";
import { SIDEBAR_CATEGORIES, getPostsByCategory } from "@/data/BlogPostData";

interface BlogSidebarCategoryProps {
  categoryId: string;
  categoryName: string;
}

const BlogSidebarCategory = ({ categoryId, categoryName }: BlogSidebarCategoryProps) => {
  // Get latest 5 posts from this specific category
  const categoryPosts = getPostsByCategory(categoryId).slice(0, 5);

  return (
    <aside className="space-y-6">
      {/* Latest Posts in This Category */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 shadow-sm border border-indigo-100">
        <div className="flex items-center gap-2 mb-5">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold text-gray-900">Latest in {categoryName}</h3>
        </div>
        
        {categoryPosts.length > 0 ? (
          <div className="space-y-4">
            {categoryPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-600">
                      <span className="px-2 py-0.5 bg-white rounded-full font-medium">
                        {new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="text-indigo-600 font-semibold">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No posts available in this category yet.</p>
        )}
      </div>

      {/* All Categories Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border border-purple-100">
        <div className="flex items-center gap-2 mb-5">
          <FolderOpen className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-bold text-gray-900">All Categories</h3>
        </div>
        <div className="space-y-2">
          {SIDEBAR_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={category.slug}
              className={`group flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                category.id === categoryId
                  ? 'bg-purple-100 border-purple-300'
                  : 'bg-white hover:bg-purple-50 border-transparent hover:border-purple-200'
              }`}
            >
              <span className={`text-sm font-medium transition-colors ${
                category.id === categoryId
                  ? 'text-purple-700'
                  : 'text-gray-700 group-hover:text-purple-700'
              }`}>
                {category.name}
              </span>
              <span className={`px-2.5 py-1 ${category.color} text-xs font-semibold rounded-full`}>
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm border border-orange-100">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-orange-600" />
          <h3 className="text-lg font-bold text-gray-900">Newsletter</h3>
        </div>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Get the latest {categoryName.toLowerCase()} articles delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 bg-white border-2 border-orange-200 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-xs text-gray-600 mt-3 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* Popular Tags */}
      <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 shadow-sm border border-cyan-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'TypeScript', 'Next.js', 'AI', 'Web Dev', 'CSS', 'Node.js', 'Python', 'DevOps'].map((tag) => (
            <Link
              key={tag}
              href={`/blog/search?q=${tag.toLowerCase()}`}
              className="px-3 py-1.5 bg-white hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 text-xs font-medium rounded-full border border-cyan-200 hover:border-cyan-300 transition-all duration-200"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebarCategory;

