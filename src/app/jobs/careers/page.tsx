// app/jobs/careers/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ============================================================================
// SEO METADATA - Enhanced for Careers Page
// ============================================================================
export const metadata: Metadata = generateSEO({
    title: "Careers at CDPL - Join Our EdTech Team | Software, Data, Product Roles",
    description: "Explore career opportunities at Cinute Digital (CDPL) across Engineering, Data Science, Product Management, Growth, and Student Success. Work on high-impact EdTech products, ship fast, learn faster. Join our product-led team building the future of tech education.",
    keywords: [
        "CDPL careers",
        "Cinute Digital jobs",
        "EdTech jobs",
        "software engineer jobs",
        "data scientist jobs",
        "product manager jobs",
        "growth marketing jobs",
        "student success jobs",
        "tech jobs India",
        "startup jobs",
        "work at CDPL",
    ],
    url: "/jobs/careers",
    image: "/og/cdpl-careers-1536x1024.png",
    imageAlt: "Careers at CDPL - Build the future of outcomes-first EdTech",
});

// NOTE: Add your existing dynamic imports and component code here
// This is a template showing the SEO structure

export default function CareersPage() {
    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs/careers" },
        { name: "Careers", url: "/jobs/careers" },
    ]);

    // Add your existing page content here
    // Keep all existing functionality intact

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Add your existing JSX here */}
        </>
    );
}
