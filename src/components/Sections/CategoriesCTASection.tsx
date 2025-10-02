// components/CTASection.tsx
"use client";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

export default function CategoriesCTASection() {
    return (
        <motion.section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 sm:py-16 rounded-3xl shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div variants={itemVariants}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Ready to Advance Your QA Career?
                    </h2>
                    <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                        Join our software testing courses and QA mentorship programs today. Get personalized guidance, hands-on projects, and certification to become a top-tier quality assurance professional.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                    variants={itemVariants}
                >
                    <Link
                        href="/courses/enroll"
                        className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
                    >
                        Start Free Trial
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border-2 border-white text-white rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-indigo-600 text-lg"
                    >
                        Book Mentorship Session
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}