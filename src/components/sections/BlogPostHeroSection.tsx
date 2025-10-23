import Image from 'next/image';

export const BlogPostHeroSection: React.FC = () => {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center md:text-left text-gray-600">
                The Perfect Blog Post: 20-Step Checklist for SEO Optimization
            </h1>

            {/* Author Bio */}
            <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0">
                    <Image
                        src="/images/user1.jpg"
                        alt="Connor Gillivan"
                        fill
                        className="rounded-full border-2 border-blue-600 object-cover"
                        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                </div>
                <div className="text-center sm:text-left">
                    <p className="font-semibold text-base sm:text-lg text-gray-600">Connor Gillivan</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                        7x Founder (Exit in 2019), SEO Expert at TrioSEO. Specializing in scaling companies with content marketing and SEO strategies. With over a decade of experience, I&apos;ve helped numerous businesses achieve top rankings and drive organic traffic.
                    </p>
                </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] mb-6 sm:mb-8">
                <Image
                    src="/images/automation-testing.webp"
                    alt="The Anatomy of a Perfect Blog Post Infographic"
                    fill
                    className="rounded-lg shadow-lg object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 100vw"
                    priority
                />
            </div>

            {/* Introduction */}
            <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    In today&apos;s digital landscape, creating a blog post isn&apos;t just about writing words—it&apos;s about crafting an experience that ranks high on search engines, engages readers, and converts visitors into leads or customers. Based on years of experience and the latest SEO trends as of 2025, this guide presents a comprehensive 20-step checklist for the perfect blog post. Whether you&apos;re a beginner blogger or a seasoned content marketer, following these steps will ensure your content is optimized for SEO, user-friendly, and designed to perform. We&apos;ll dive deep into each step, providing detailed explanations, tips, and examples to help you implement them effectively. By the end, you&apos;ll have a blueprint to create blog posts that not only attract traffic but also build authority and drive business growth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Why does this matter? With Google’s algorithms emphasizing E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), quality content is king. Poorly optimized posts get buried in search results, while well-structured ones can generate passive traffic for years. Let&apos;s explore the checklist, inspired by industry best practices, to make your next blog post a success.
                </p>
            </div>
        </section>
    );
};