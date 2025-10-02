// components/HeroSection.tsx
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

export default function BlogHeroSection() {
    return (
        <header className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white py-10 lg:py-12 xl:py-16">
            {/* Animated Background with Gradient Overlay */}
            <motion.div
                className="absolute inset-0 bg-[url('/api/placeholder/1920/1080?text=Futuristic+Tech+Grid')] bg-cover bg-center opacity-20"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-indigo-500/10 to-purple-700/20 mix-blend-overlay" />
            <div className="absolute inset-0 backdrop-blur-sm" />

            {/* Content */}
            <motion.div
                className="relative z-10 container mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="text-center max-w-7xl mx-auto">
                    {/* Headline */}
                    <motion.h1
                        className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
                        variants={itemVariants}
                    >
                        Latest Tech Insights with Cinute Digital, Top Ed-Tech, Digital Trends & Innovation
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl mb-12 opacity-90 leading-relaxed text-gray-200"
                        variants={itemVariants}
                    >
                        As a leading ed-tech institute, explore expert insights on AI ML training courses, automation testing certification, software testing programs, and software development bootcamp to advance your skills and career.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-12 md:gap-6 justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="#search"
                                className="px-10 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-full font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            >
                                Discover Blogs
                            </Link>
                        </motion.div>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Link
                                href="#newsletter"
                                className="px-10 py-4 border-2 border-teal-400 text-white rounded-full font-bold transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:text-white"
                            >
                                Join Our Community
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </header>
    );
}