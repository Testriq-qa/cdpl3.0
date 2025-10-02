
import Link from 'next/link';

const categories = [
    { name: 'AI/ML Training Courses', slug: 'ai-ml-training-courses', count: 20, icon: '🤖' },
    { name: 'Automation Testing Certification', slug: 'automation-testing-certification', count: 18, icon: '⚙️' },
    { name: 'Software Testing Certification', slug: 'software-testing-certification', count: 15, icon: '🧪' },
    { name: 'Software Development Bootcamp', slug: 'software-development-bootcamp', count: 12, icon: '💻' },
    { name: 'AI Trends and Innovations', slug: 'ai-trends', count: 10, icon: '🚀' },
    { name: 'Career in AI/ML', slug: 'career-in-ai-ml', count: 8, icon: '📈' },
];

export default function BlogCategoriesSection() {
    return (
        <section className="mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Explore Our Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.slug}
                        href={`/blog/category/${cat.slug}`}
                        className="group p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-indigo-100 hover:border-indigo-300"
                    >
                        <div className="flex items-center mb-3 sm:mb-4">
                            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">{cat.icon}</span>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{cat.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">Discover {cat.count} articles on {cat.name.toLowerCase()}.</p>
                        <span className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 text-sm sm:text-base">
                            Browse Now →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
