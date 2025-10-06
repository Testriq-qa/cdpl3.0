
import dynamic from 'next/dynamic';
import React from 'react';

<<<<<<< HEAD
const BlogPageNewUI = dynamic(
    () => import("@/components/Sections/BlogPageNewUI"),
=======


const BlogHeroSection = dynamic(
    () => import("@/components/Sections/BlogHeroSection"),
>>>>>>> main
    {
        ssr: true,
        loading: () => (
            <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
                <p className="text-gray-500">Loading...</p>
            </div>
        ),
    }
);

export default function page() {
    return (
        <>
<<<<<<< HEAD
            <BlogPageNewUI />
=======
            
            <div className='bg-gray-100'>
                <BlogHeroSection />
                <BlogFeaturedSection />
                <BlogCategoriesSection />
                <BlogGridSection />
            </div>
>>>>>>> main
        </>
    );
}

