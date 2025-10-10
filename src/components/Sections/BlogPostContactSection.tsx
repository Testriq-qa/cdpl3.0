import React from 'react';
import Link from 'next/link';

export const BlogPostContactSection: React.FC = () => {
    return (
        <section className="mt-8 sm:mt-12 p-4 sm:p-6 bg-blue-50 rounded-lg max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
                Ready for Career Guidance?
            </h3>
            <p className="mb-4 text-sm sm:text-base text-center sm:text-left">
                At CDPL Ed-tech Institute, we provide expert career advice and counselling in AI, ML, Software Testing, Software Development, and more. Apply this checklist to your content strategy and elevate your skills. For personalized guidance, book a session today.
            </p>
            <div className="text-center sm:text-left">
                <Link
                    href="/book-counselling"
                    className="inline-block bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-blue-700 transition-all duration-300"
                >
                    Book a Free Counselling Session
                </Link>
            </div>
        </section>
    );
};