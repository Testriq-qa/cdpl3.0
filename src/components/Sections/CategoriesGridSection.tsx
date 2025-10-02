// components/CategoriesGridSection.tsx
"use client";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15,
            mass: 0.8,
        },
    },
    hover: {
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

const iconVariants: Variants = {
    hover: {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
            duration: 0.5,
            repeat: 1,
            ease: 'easeInOut',
        },
    },
};

const textVariants: Variants = {
    hover: {
        color: '#FFFFFF',
        transition: {
            duration: 0.3,
        },
    },
};

const categories = [
    {
        name: 'Automation Testing Certification',
        slug: 'automation-testing-certification',
        description: 'Dive into advanced automation testing with Selenium, Appium, and CI/CD. Unlock expert mentorship and earn globally recognized QA certifications to accelerate your career.',
        count: 25,
        icon: '⚙️',
        color: 'from-cyan-600 to-blue-800',
        seoKeywords: 'automation testing certification, Selenium training, Appium courses, QA mentorship programs',
    },
    {
        name: 'Performance Testing Training',
        slug: 'performance-testing-training',
        description: 'Boost app efficiency with JMeter and LoadRunner mastery. Our interactive QA mentorship delivers scalable solutions for high-performance software.',
        count: 18,
        icon: '⚡',
        color: 'from-emerald-600 to-teal-800',
        seoKeywords: 'performance testing training, JMeter courses, load testing certification, software optimization mentorship',
    },
    {
        name: 'Mobile App Testing Courses',
        slug: 'mobile-app-testing-courses',
        description: 'Conquer iOS and Android testing challenges. Hands-on mentorship ensures pixel-perfect user experiences across all devices.',
        count: 20,
        icon: '📱',
        color: 'from-violet-600 to-fuchsia-800',
        seoKeywords: 'mobile app testing courses, Android QA certification, iOS testing training, cross-device mentorship',
    },
    {
        name: 'AI Application Testing',
        slug: 'ai-application-testing',
        description: 'Pioneer ethical AI QA with machine learning model testing. Cutting-edge tools and mentorship for intelligent system validation.',
        count: 15,
        icon: '🤖',
        color: 'from-amber-600 to-rose-800',
        seoKeywords: 'AI application testing, machine learning QA courses, ethical AI mentorship, intelligent systems certification',
    },
    {
        name: 'Software Testing Tools',
        slug: 'software-testing-tools',
        description: 'Master Postman, Jira, and TestRail with practical implementations. Elevate your QA toolkit through expert-guided mentorship.',
        count: 22,
        icon: '🛠️',
        color: 'from-yellow-600 to-orange-800',
        seoKeywords: 'software testing tools, Postman training, Jira QA certification, tool implementation mentorship',
    },
    {
        name: 'Web App Testing',
        slug: 'web-app-testing',
        description: 'Secure and optimize web apps with security and cross-browser testing. Personalized mentorship for building resilient digital experiences.',
        count: 19,
        icon: '🌐',
        color: 'from-indigo-600 to-purple-800',
        seoKeywords: 'web app testing courses, security testing training, cross-browser QA, web development mentorship',
    },
];

export default function CategoriesGridSection() {
    return (
        <section id="categories" className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
            >
                Unlock Futuristic QA & Testing Categories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.slug}
                        className="group relative overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        whileHover="hover"
                        transition={{ delay: index * 0.15 }}
                    >

                        <div className={`p-6 md:p-4 lg:p-6 bg-gradient-to-br ${category.color} rounded-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500 h-full relative`}>
                            {/* Holographic Background Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_60%)] opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute inset-0 backdrop-blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <motion.span
                                        className="text-4xl mr-4  p-1 md:p-3 rounded-2xl bg-black bg-opacity-30 text-white shadow-xl"
                                        variants={iconVariants}
                                        whileHover="hover"
                                    >
                                        {category.icon}
                                    </motion.span>
                                    <div>
                                        <motion.h3
                                            className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors"
                                            variants={textVariants}
                                            whileHover="hover"
                                        >
                                            {category.name}
                                        </motion.h3>
                                        <p className="text-sm text-cyan-100 font-semibold mt-1">
                                            {category.count} Interactive Resources
                                        </p>
                                    </div>
                                </div>
                                <motion.p
                                    className="text-gray-100 mb-8 leading-relaxed text-base"
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {category.description}
                                </motion.p>
                                <div className="flex flex-col items-start gap-6">
                                    <motion.p
                                            className="px-3 py-1 bg-gray-700 bg-opacity-30 text-cyan-200 text-lg font-medium rounded-full shadow-md"
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Popular tags
                                        </motion.p>
                                    <div className="flex flex-wrap gap-2">
                                        
                                        {category.seoKeywords.split(', ').map((keyword) => (
                                            <motion.span
                                                key={keyword}
                                                className="px-3 py-1 bg-black bg-opacity-30 text-cyan-200 text-xs font-medium rounded-full shadow-md"
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                #{keyword}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <Link href={`/blog/category/${category.slug}`}>
                                        <motion.span
                                            className="text-cyan-300 font-bold text-lg hover:text-cyan-100 transition-colors"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            Explore & Level Up →
                                        </motion.span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}