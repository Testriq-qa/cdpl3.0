
import dynamic from 'next/dynamic';
import React from 'react';

const BlogPageNewUI = dynamic(
    () => import("@/components/Sections/BlogPageNewUI"),
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
            <BlogPageNewUI />
        </>
    );
}

