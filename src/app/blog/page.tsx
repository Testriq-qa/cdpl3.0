
import dynamic from 'next/dynamic';
import React from 'react';



const BlogHeroSection = dynamic(
    () => import("@/components/Sections/BlogHeroSection"),
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
            
            <div className='bg-gray-100'>
                <BlogHeroSection />
                <BlogFeaturedSection />
                <BlogCategoriesSection />
                <BlogGridSection />
            </div>
        </>
    );
}

