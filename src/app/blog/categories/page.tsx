import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import { getAllCategories, getAllPosts } from "@/data/BlogPostData";
import Link from "next/link";
import { FolderOpen, ArrowRight, FileText, TrendingUp } from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title: "Blog Categories | Software Testing, Web Development, AI & More",
  description: "Browse our blog by category. Find expert articles on software testing, web development, AI & machine learning, data science, DevOps, cloud computing, and more technology topics.",
  keywords: [
    "blog categories",
    "software testing category",
    "web development articles",
    "AI machine learning blog",
    "data science tutorials",
    "DevOps guides",
    "tech blog categories",
    "programming topics",
  ],
  openGraph: {
    title: "Blog Categories | Explore Tech Topics",
    description: "Browse expert articles by category: software testing, web development, AI/ML, data science, and more.",
    type: "website",
    url: "https://yoursite.com/blog/categories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Categories | Tech Topics",
    description: "Browse expert articles by category across software testing, development, AI, and more.",
  },
  alternates: {
    canonical: "https://yoursite.com/blog/categories",
  },
};

export default function CategoriesPage() {
  const categories = getAllCategories();
  const allPosts = getAllPosts();

  // Calculate posts per category
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    postCount: allPosts.filter(post => post.categoryId === category.id).length,
    latestPost: allPosts
      .filter(post => post.categoryId === category.id)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())[0]
  })).filter(cat => cat.postCount > 0);

  const totalPosts = allPosts.length;
  const totalCategories = categoriesWithCounts.length;

  return (
    <>
      {/* Category Menu */}
      <BlogCategoryMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FolderOpen className="w-12 h-12 text-purple-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Blog Categories
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-4 leading-relaxed">
              Explore our comprehensive collection of {totalPosts}+ expert articles organized into {totalCategories} specialized categories. Whether you&apos;re interested in software testing, web development, artificial intelligence, data science, or DevOps, we&apos;ve curated content to help you master modern technology.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each category contains in-depth tutorials, best practices, industry insights, and practical guides written by experienced professionals. Browse by topic below to find exactly what you&apos;re looking for, or use the search feature to discover specific content across all categories.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">{totalCategories}</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{totalPosts}+</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-indigo-600">Weekly</div>
                <div className="text-sm text-gray-600">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section for SEO */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Our blog is designed to be your comprehensive resource for staying current with the latest developments in software engineering, quality assurance, and technology innovation. We organize our content into carefully curated categories to make it easy for you to find relevant information quickly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From foundational concepts for beginners to advanced techniques for seasoned professionals, each category offers a wealth of knowledge. Our expert contributors share real-world experiences, code examples, architectural patterns, and proven strategies that you can apply immediately to your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Categories</h2>
            <p className="text-gray-600">
              Click on any category to explore all articles in that topic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesWithCounts.map(category => (
              <Link
                key={category.id}
                href={`/blog/category/${category.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`${category.color.bg} p-6 border-b border-gray-100`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${category.color.bg} rounded-lg`}>
                        <FolderOpen className={`w-6 h-6 ${category.color.text}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${category.color.text} group-hover:underline`}>
                          {category.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {category.postCount} {category.postCount === 1 ? 'article' : 'articles'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${category.color.text} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>

                  {category.latestPost && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                          Latest Post
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
                        {category.latestPost.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(category.latestPost.publishDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })} • {category.latestPost.readTime}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesWithCounts
              .sort((a, b) => b.postCount - a.postCount)
              .slice(0, 4)
              .map(category => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className={`${category.color.bg} p-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
                >
                  <h3 className={`text-xl font-bold ${category.color.text} mb-2 group-hover:underline`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">{category.postCount} articles</p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {category.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Why Browse by Category Section (SEO Content) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Browse by Category?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Focused Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dive deep into specific topics without distraction. Each category provides a curated learning path from fundamentals to advanced concepts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  Find exactly what you need quickly. No more searching through unrelated content – go straight to your area of interest.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-700 leading-relaxed">
                  Follow specific categories to stay current with the latest trends, tools, and best practices in your field of expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Try our search feature or browse all posts to discover more content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/all-posts"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View All Posts
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold border-2 border-white"
            >
              Back to Blog Home
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Blog Categories",
            "description": "Browse blog articles by category including software testing, web development, AI, data science, and more",
            "url": "https://yoursite.com/blog/categories",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": categoriesWithCounts.length,
              "itemListElement": categoriesWithCounts.map((category, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Thing",
                  "name": category.name,
                  "description": category.description,
                  "url": `https://yoursite.com/blog/category/${category.slug}`
                }
              }))
            }
          })
        }}
      />
    </>
  );
}

