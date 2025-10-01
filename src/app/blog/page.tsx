import dynamic from 'next/dynamic';
import React from 'react'

// const SampleBlogPost = dynamic(
//     () => import("@/components/Sections/SampleBlogPost"),
//     {
//         ssr: true,
//         loading: () => (
//             <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
//                 <p className="text-gray-500">Loading...</p>
//             </div>
//         ),
//     }
// );

const BlogPage = dynamic(
    () => import("@/components/Sections/BlogPage"),
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
            {/* <SampleBlogPost /> */}
            <BlogPage />
        </>
    )
}



