// app/testimonials/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// Revalidate content periodically (change to 0 if you fetch SSR)
export const revalidate = 120;

// ---------- Small, reusable loading UI ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled, with lightweight fallbacks) ----------
const TestimonialHeroSection = dynamic(
  () => import("@/components/sections/TestimonialHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> }
);

const TestimonialFeedbackSection = dynamic(
  () => import("@/components/sections/TestimonialFeedbackSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading reviews..." /> }
);

const TestimonialCTAJoinSection = dynamic(
  () => import("@/components/sections/TestimonialCTAJoinSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

// ---------- SEO Metadata ----------
export const metadata: Metadata = generateSEO({
  title: "Customer Testimonials & Reviews - Success Stories | CDPL",
  description:
    "See why product leaders and students choose CDPL. Read authentic client testimonials, student reviews, and success stories across training, consulting, and software development. Trusted by 1000+ professionals.",
  keywords: [
    "CDPL testimonials",
    "CDPL reviews",
    "client success stories",
    "student testimonials",
    "customer reviews",
    "training testimonials",
    "software development partner",
    "product engineering reviews",
    "UI UX design testimonials",
    "testing training reviews",
    "CDPL student feedback",
    "course reviews",
    "certification testimonials",
    "tech training reviews",
    "EdTech testimonials"
  ],
  url: "/testimonials",
  image: "/og-images/og-image-testimonials.webp",
  type: "website"
});

// Example data (swap with CMS/DB)
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  industry?: string;
  rating: number;
  content: string;
  avatar: string;
  date?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Emily Johnson",
    role: "CEO",
    company: "Northstar Labs",
    industry: "SaaS",
    rating: 5,
    avatar: "/testimonial_images/testimonial.jpeg",
    content:
      "CDPL's training program transformed our QA team. The intuitive features and practical approach streamlined our testing process, boosting productivity across the board.",
    date: "2025-05-14",
  },
  {
    id: "t2",
    name: "Mia Thompson",
    role: "Design Lead",
    company: "Flowline",
    industry: "Fintech",
    rating: 5,
    avatar: "/testimonial_images/testimonial.jpeg",
    content:
      "Managing our development portfolio with CDPL is effortless. Clear visibility, real-time updates, and delightful UX. Best training investment we've made.",
    date: "2025-06-01",
  },
  {
    id: "t3",
    name: "Daniel Harrison",
    role: "Product & Sales Manager",
    company: "Acme Systems",
    industry: "B2B",
    rating: 4.1,
    avatar: "/testimonial_images/testimonial.jpeg",
    content:
      "We onboard faster and collaborate better thanks to CDPL's comprehensive training. Their team delivered on time, every time. Highly recommend!",
    date: "2025-04-09",
  },
  {
    id: "t4",
    name: "Samuel Turner",
    role: "CTO",
    company: "Vecto",
    industry: "AI",
    rating: 4.2,
    avatar: "/testimonial_images/testimonial.jpeg",
    content:
      "CDPL's consulting services helped us make data-driven decisions quickly. The interface and training materials are top-notch. Fantastic partner for our AI initiatives.",
    date: "2025-03-21",
  },
  {
    id: "t5",
    name: "Benjamin Evans",
    role: "Product Designer",
    company: "Studio 9",
    industry: "Design",
    rating: 4.5,
    avatar: "/testimonial_images/testimonial.jpeg",
    content:
      "I can track my learning portfolio effortlessly and communicate updates clearly. CDPL's certification program is worth every penny. Love it!",
    date: "2025-02-02",
  },
];

export default function Page() {
  // Calculate aggregate rating
  const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const averageRating = (totalRating / testimonials.length).toFixed(1);

  // ---------- Enhanced Schema.org (rich results) ----------
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Testimonials", url: "/testimonials" }
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // BreadcrumbList Schema
      breadcrumbSchema,
      // Organization Schema with AggregateRating
      {
        "@type": "Organization",
        "@id": "https://www.cinutedigital.com/#organization",
        "name": "CDPL - Cinute Digital Pvt. Ltd.",
        "url": "https://www.cinutedigital.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cinutedigital.com/logo.png",
          "width": 250,
          "height": 60
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": averageRating,
          "reviewCount": testimonials.length,
          "bestRating": 5,
          "worstRating": 1
        },
        "review": testimonials.map((t) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": t.name,
            "jobTitle": t.role,
            "worksFor": t.company ? {
              "@type": "Organization",
              "name": t.company
            } : undefined
          },
          "itemReviewed": {
            "@type": "Organization",
            "name": "CDPL - Cinute Digital Pvt. Ltd."
          },
          "reviewBody": t.content,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": t.rating,
            "bestRating": 5,
            "worstRating": 1
          },
          "datePublished": t.date ?? "2025-01-01",
          "inLanguage": "en-IN"
        }))
      },
      // CollectionPage Schema
      {
        "@type": "CollectionPage",
        "@id": "https://www.cinutedigital.com/testimonials#collectionpage",
        "url": "https://www.cinutedigital.com/testimonials",
        "name": "Customer Testimonials & Reviews | CDPL",
        "description":
          "A collection of verified customer testimonials, student reviews, and success stories for CDPL.",
        "isPartOf": {
          "@id": "https://www.cinutedigital.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.cinutedigital.com/testimonials#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://www.cinutedigital.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      // WebPage Schema
      {
        "@type": "WebPage",
        "@id": "https://www.cinutedigital.com/testimonials",
        "url": "https://www.cinutedigital.com/testimonials",
        "name": "Testimonials - CDPL",
        "description": "Customer testimonials and reviews for CDPL",
        "isPartOf": {
          "@id": "https://www.cinutedigital.com/#website"
        },
        "breadcrumb": {
          "@id": "https://www.cinutedigital.com/testimonials#breadcrumb"
        },
        "inLanguage": "en-IN"
      }
    ]
  };

  return (
    <div className="bg-white text-neutral-900" itemScope itemType="https://schema.org/CollectionPage">
      {/* Enhanced JSON-LD Structured Data */}
      <Script
        id="cdpl-testimonials-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden metadata for schema.org */}
      <meta itemProp="name" content="Customer Testimonials & Reviews | CDPL" />
      <meta itemProp="description" content="Verified customer testimonials and success stories for CDPL" />
      <meta itemProp="url" content="https://www.cinutedigital.com/testimonials" />

      {/* SEO-friendly H1 - Hidden visually but available for SEO */}
      <h1 className="sr-only">
        Customer Testimonials and Reviews - Success Stories from CDPL Clients and Students
      </h1>

      <TestimonialHeroSection />
      {/* Optional: Students' review strip + featured quote */}
      <TestimonialFeedbackSection />
      <TestimonialCTAJoinSection />
    </div>
  );
}
