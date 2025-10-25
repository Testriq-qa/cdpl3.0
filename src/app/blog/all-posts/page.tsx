import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import { getAllPosts, getAllCategories } from "@/data/BlogPostData";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

// ============================================================================
// SEO METADATA - ENHANCED
// ============================================================================
export const metadata: Metadata = {
  title: "All Blog Posts | Comprehensive Software Testing & Development Resources - 100+ Expert Articles",
  description: "Explore our complete collection of 100+ expert articles on software testing, data science, web development, AI & machine learning, DevOps, and more. In-depth tutorials, best practices, and actionable insights from industry professionals. Updated weekly with fresh content.",
  keywords: [
    "software testing blog",
    "web development articles",
    "AI machine learning tutorials",
    "data science guides",
    "DevOps best practices",
    "tech blog",
    "programming tutorials",
    "software development",
    "quality assurance",
    "test automation",
    "React tutorials",
    "Next.js guides",
    "Python programming",
    "JavaScript tutorials",
    "cloud computing",
    "CI/CD pipelines",
    "agile development",
    "software engineering blog"
  ],
  authors: [{ name: 'Tech Experts Team', url: 'https://yoursite.com/about' }],
  creator: 'Your Company',
  publisher: 'Your Company',
  metadataBase: new URL('https://yoursite.com'),
  openGraph: {
    title: "All Blog Posts | 100+ Software Testing & Development Resources",
    description: "Comprehensive collection of expert articles covering software testing, web development, AI/ML, data science, and modern development practices. Learn from industry professionals.",
    type: "website",
    url: "https://yoursite.com/blog/all-posts",
    siteName: 'Your Company Tech Blog',
    images: [
      {
        url: '/blog/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'All Blog Posts - Software Testing and Development Resources',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Posts | Software Testing & Development Resources",
    description: "100+ expert articles on software testing, web development, AI/ML, and more.",
    images: ['/blog/og-image.jpg'],
    creator: '@yourcompany',
    site: '@yourcompany',
  },
  alternates: {
    canonical: "https://yoursite.com/blog/all-posts",
    languages: {
      'en-US': '/blog/all-posts',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
};

// ============================================================================
// ALL POSTS PAGE COMPONENT
// ============================================================================
export default function AllPostsPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  // Group posts by category for better organization
  const postsByCategory = categories.map(category => ({
    category,
    posts: allPosts.filter(post => post.categoryId === category.id)
  })).filter(group => group.posts.length > 0);

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // CollectionPage Schema
      {
        "@type": "CollectionPage",
        "@id": "https://yoursite.com/blog/all-posts#collectionpage",
        "url": "https://yoursite.com/blog/all-posts",
        "name": "All Blog Posts - Software Testing & Development Resources",
        "description": "Comprehensive collection of expert articles on software testing, web development, AI, data science, and modern development practices",
        "isPartOf": {
          "@id": "https://yoursite.com/blog#blog"
        },
        "mainEntity": {
          "@id": "https://yoursite.com/blog/all-posts#itemlist"
        },
        "breadcrumb": {
          "@id": "https://yoursite.com/blog/all-posts#breadcrumb"
        }
      },
      // ItemList Schema - All Posts
      {
        "@type": "ItemList",
        "@id": "https://yoursite.com/blog/all-posts#itemlist",
        "name": "All Blog Posts",
        "description": `Collection of ${allPosts.length} expert articles`,
        "numberOfItems": allPosts.length,
        "itemListElement": allPosts.map((post, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "BlogPosting",
            "@id": `https://yoursite.com/blog/${post.slug}#article`,
            "headline": post.title,
            "description": post.description,
            "image": post.featuredImage,
            "url": `https://yoursite.com/blog/${post.slug}`,
            "datePublished": new Date(post.publishDate).toISOString(),
            "dateModified": post.lastModified 
              ? new Date(post.lastModified).toISOString()
              : new Date(post.publishDate).toISOString(),
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Your Company"
            },
            "articleSection": post.category,
            "keywords": post.tags.join(', ')
          }
        }))
      },
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        "@id": "https://yoursite.com/blog/all-posts#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yoursite.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://yoursite.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "All Posts",
            "item": "https://yoursite.com/blog/all-posts"
          }
        ]
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://yoursite.com/blog/all-posts",
        "url": "https://yoursite.com/blog/all-posts",
        "name": "All Blog Posts",
        "description": "Complete collection of expert articles on software development and testing",
        "isPartOf": {
          "@id": "https://yoursite.com/#website"
        },
        "breadcrumb": {
          "@id": "https://yoursite.com/blog/all-posts#breadcrumb"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic HTML Structure */}
      <div itemScope itemType="https://schema.org/CollectionPage">
        {/* Category Menu */}
        <nav aria-label="Blog categories">
          <BlogCategoryMenu />
        </nav>

        {/* Hero Section with Rich Content */}
        <header className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                All Blog Posts - Expert Software Development & Testing Resources
              </h1>
              <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                Discover our comprehensive collection of {allPosts.length}+ expert articles covering software testing, web development, artificial intelligence, data science, and modern development practices. Our in-depth guides and tutorials help developers, testers, and tech professionals stay ahead in the rapidly evolving technology landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re looking to master test automation, learn the latest web frameworks, dive into machine learning, or optimize your DevOps workflow, our curated content provides actionable insights and best practices from industry experts. Browse by category below or use the search feature to find exactly what you need.
              </p>
              
              {/* Stats Section for SEO */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">{allPosts.length}+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600">{categories.length}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-indigo-600">50k+</div>
                  <div className="text-sm text-gray-600">Monthly Readers</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">Weekly</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Category Filter Section */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <nav aria-label="Category filter" className="flex flex-wrap gap-3">
              <Link
                href="/blog/all-posts"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                aria-current="page"
              >
                All Posts ({allPosts.length})
              </Link>
              {categories.map(category => {
                const count = allPosts.filter(p => p.categoryId === category.id).length;
                return (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className={`px-4 py-2 ${category.color.bg} ${category.color.text} rounded-lg hover:opacity-80 transition-opacity font-medium`}
                  >
                    {category.name} ({count})
                  </Link>
                );
              })}
            </nav>
          </div>
        </section>

        {/* All Posts Grid */}
        <main className="py-12 bg-gray-50" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction Text for SEO */}
            <div className="mb-12 prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Our blog covers a wide range of topics essential for modern software development and quality assurance. From beginner-friendly tutorials to advanced technical deep-dives, each article is crafted by experienced professionals who share real-world insights and practical solutions. Explore articles on test automation frameworks, CI/CD pipelines, React and Next.js development, Python and JavaScript programming, machine learning algorithms, data analysis techniques, cloud infrastructure, and much more.
              </p>
            </div>

            {/* Posts by Category */}
            {postsByCategory.map(({ category, posts }) => (
              <section key={category.id} className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 whitespace-nowrap"
                  >
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map(post => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <Link href={`/blog/${post.slug}`} className="block">
                        <div className="relative h-48 bg-gray-200">
                          <Image
                            src={post.featuredImage}
                            alt={`${post.title} - Featured Image`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className={`absolute top-4 left-4 px-3 py-1 ${category.color.bg} ${category.color.text} rounded-full text-xs font-semibold`}>
                            {post.category}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2" itemProp="headline">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed" itemProp="description">
                            {post.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                              <time className="flex items-center gap-1" dateTime={post.publishDate} itemProp="datePublished">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishDate).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </time>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mt-4">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600" itemProp="author">{post.author}</span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>

        {/* Additional SEO Content Section */}
        <aside className="bg-white py-16" role="complementary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Read Our Blog?</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Insights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our articles are written by experienced software engineers, QA professionals, and tech leaders who bring real-world expertise and practical knowledge to every topic. Learn from professionals who have solved the challenges you&apos;re facing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Tutorials</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every article includes actionable advice, code examples, and step-by-step guides that you can implement immediately. We focus on practical solutions that work in production environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Latest Technologies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stay current with the rapidly evolving tech landscape. We cover the latest frameworks, tools, and best practices in software development, testing, AI, and data science.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Coverage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    From beginner tutorials to advanced technical deep-dives, our blog covers topics across the entire software development lifecycle, ensuring there&apos;s valuable content for every skill level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

