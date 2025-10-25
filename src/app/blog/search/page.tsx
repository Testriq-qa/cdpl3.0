import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import { getAllPosts } from "@/data/BlogPostData";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Search as SearchIcon } from "lucide-react";

// Dynamic metadata based on search query
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q?: string };
}): Promise<Metadata> {
  const query = searchParams.q || "";
  
  return {
    title: query 
      ? `Search Results for "${query}" | Blog` 
      : "Search Blog Posts | Software Testing & Development Resources",
    description: query
      ? `Find articles about ${query}. Search our comprehensive blog covering software testing, web development, AI, data science, and more.`
      : "Search our blog for articles on software testing, web development, AI, machine learning, data science, DevOps, and modern development practices.",
    openGraph: {
      title: query ? `Search Results for "${query}"` : "Search Blog Posts",
      description: "Search our comprehensive tech blog for expert articles and tutorials",
      type: "website",
    },
    robots: {
      index: false, // Don't index search results pages
      follow: true,
    },
  };
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";
  const allPosts = getAllPosts();

  // Perform search
  const searchResults = query.trim().length > 0
    ? allPosts.filter((post) => {
        const searchLower = query.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.description.toLowerCase().includes(searchLower) ||
          post.category.toLowerCase().includes(searchLower) ||
          post.author.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          post.seo.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
        );
      })
    : [];

  return (
    <>
      {/* Category Menu */}
      <BlogCategoryMenu />

      {/* Search Results Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {query ? (
              <>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <SearchIcon className="w-8 h-8 text-purple-600" />
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Search Results
                  </h1>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Found <span className="font-bold text-purple-600">{searchResults.length}</span> {searchResults.length === 1 ? 'result' : 'results'} for{" "}
                  <span className="font-bold text-purple-600">&quot;{query}&quot;</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explore our curated articles matching your search query. Each article provides in-depth insights, practical examples, and expert guidance to help you master modern software development and testing practices.
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <SearchIcon className="w-8 h-8 text-purple-600" />
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Search Our Blog
                  </h1>
                </div>
                <p className="text-xl text-gray-700 mb-4">
                  Discover expert articles on software testing, web development, AI, data science, and more
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Use the search feature in the navigation menu above to find articles on specific topics, technologies, or concepts. Our comprehensive blog covers everything from beginner tutorials to advanced technical guides.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      {query && (
        <section className="py-12 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchResults.length > 0 ? (
              <>
                {/* Results Info */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {searchResults.length} {searchResults.length === 1 ? 'Article' : 'Articles'} Found
                  </h2>
                  <p className="text-gray-600">
                    Showing all results matching your search query. Browse through our curated content below.
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map(post => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="relative h-48 bg-gray-200">
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                            {post.category}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {post.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishDate).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-4">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Additional Search Tips */}
                <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Search Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Try different keywords or phrases related to your topic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Use specific technology names like &quot;React&quot;, &quot;Python&quot;, or &quot;Kubernetes&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Browse by category using the menu above for curated content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Check out our <Link href="/blog/all-posts" className="text-purple-600 hover:underline font-medium">all posts page</Link> to see everything we offer</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="bg-white rounded-xl p-12 shadow-md max-w-2xl mx-auto">
                  <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    No Results Found
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We couldn&apos;t find any articles matching &quot;{query}&quot;. Try searching with different keywords or browse our categories to discover relevant content.
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-700">Suggestions:</p>
                    <ul className="text-left space-y-2 text-gray-600 max-w-md mx-auto">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Check your spelling and try again</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Use more general keywords</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Try searching for related topics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/blog"
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    >
                      Browse All Posts
                    </Link>
                    <Link
                      href="/blog/categories"
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                      View Categories
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Popular Topics Section (when no query) */}
      {!query && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Software Testing", slug: "software-testing", count: "25+" },
                { name: "Web Development", slug: "web-development", count: "30+" },
                { name: "AI & Machine Learning", slug: "ai-ml", count: "20+" },
                { name: "Data Science", slug: "data-science", count: "18+" },
              ].map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/blog/category/${topic.slug}`}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-gray-600">{topic.count} articles</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Structured Data */}
      {query && searchResults.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SearchResultsPage",
              "name": `Search Results for "${query}"`,
              "url": `https://yoursite.com/blog/search?q=${encodeURIComponent(query)}`,
              "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": searchResults.length,
                "itemListElement": searchResults.slice(0, 10).map((post, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.description,
                    "url": `https://yoursite.com/blog/${post.slug}`,
                  }
                }))
              }
            })
          }}
        />
      )}
    </>
  );
}

