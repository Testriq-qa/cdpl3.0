
import Link from 'next/link';
import Image from 'next/image';

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
        excerpt: 'Dive into emerging trends in artificial intelligence training and machine learning courses, including advanced neural networks, ethical AI, generative AI, and real-world applications.',
        slug: 'future-of-ai-ml-training-2025',
        date: 'Nov 18, 2024',
        category: 'AI/ML Training Courses',
        image: '/images/Image1.jpg',
        readTime: 8,
    },
    {
        id: 2,
        title: 'Mastering Automation Testing Certification: Comprehensive Guide to Selenium and Appium',
        excerpt: 'Learn the fundamentals of automation testing certification, including test automation tools like Selenium and Appium, API testing, and agile environments.',
        slug: 'automation-testing-certification-guide',
        date: 'Oct 15, 2025',
        category: 'Automation Testing Certification',
        image: '/images/Image2.jpg',
        readTime: 12,
    },
    {
        id: 3,
        title: 'The Future of Artificial Intelligence and Machine Learning Training: Trends for 2025 and Beyond',
        excerpt: 'Dive into emerging trends in artificial intelligence training and machine learning courses, including advanced neural networks, ethical AI, generative AI, and real-world applications.',
        slug: 'future-of-ai-ml-training-2025',
        date: 'Nov 18, 2024',
        category: 'AI/ML Training Courses',
        image: '/images/Image1.jpg',
        readTime: 8,
    },
    {
        id: 4,
        title: 'Mastering Automation Testing Certification: Comprehensive Guide to Selenium and Appium',
        excerpt: 'Learn the fundamentals of automation testing certification, including test automation tools like Selenium and Appium, API testing, and agile environments.',
        slug: 'automation-testing-certification-guide',
        date: 'Oct 15, 2025',
        category: 'Automation Testing Certification',
        image: '/images/Image2.jpg',
        readTime: 12,
    },
];

export default function BlogFeaturedSection() {
    return (
        <section className="mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6 mb-6 sm:mb-8 text-center">Featured Insights on AI ML Training</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {featuredPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                {post.category}
                            </span>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2">
                                <time dateTime={post.date}>{post.date}</time>
                                <span>{post.readTime} min read</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">{post.excerpt}</p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base"
                            >
                                Read More →
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
