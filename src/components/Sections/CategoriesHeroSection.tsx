// components/HeroSection.tsx (Adapted for Categories Page)
"use client";
import Link from 'next/link';
import { motion, Variants, Transition } from 'framer-motion';

const backgroundVariants: Variants = {
    initial: { scale: 1, opacity: 0.15 },
    animate: {
        scale: 1.05,
        opacity: 0.2,
        transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 5,
            ease: 'easeInOut',
        } as Transition,
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15,
            mass: 0.8,
        } as Transition,
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        } as Transition,
    },
    hover: {
        scale: 1.05,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        } as Transition,
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.2,
        } as Transition,
    },
};

export default function CategoriesHeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 bg-[url('/api/placeholder/1920/1080?text=QA+Testing+Grid')] bg-cover bg-center opacity-20"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-indigo-500/10 to-purple-700/20 mix-blend-overlay" />
            <div className="absolute inset-0 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center max-w-6xl mx-auto">
                    {/* Headline */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Explore Software Testing Courses & QA Mentorship Categories
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-base sm:text-lg mb-10 opacity-90 leading-relaxed text-gray-200"
                        variants={itemVariants}
                    >
                        Dive into our comprehensive QA mentorship programs, automation testing certification, performance testing training, and mobile app testing courses. Unlock expert insights and hands-on learning to elevate your career in software quality assurance at Testriq Ed-Tech Institute.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-10 sm:gap-6 justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="#categories"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-full font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
                            >
                                Browse Categories
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="/courses"
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-teal-400 text-white rounded-full font-bold transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:text-white text-sm sm:text-base"
                            >
                                Enroll in Mentorship
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}