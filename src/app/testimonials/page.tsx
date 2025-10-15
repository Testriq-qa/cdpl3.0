// app/testimonials/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";

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

export const metadata: Metadata = {
  title: "Customer Testimonials & Reviews | CDPL",
  description:
    "See why product leaders choose CDPL. Read authentic client testimonials and student reviews across SaaS, eCommerce, fintech and enterprise.",
  keywords: [
    "CDPL testimonials",
    "CDPL reviews",
    "client stories",
    "customer success",
    "software development partner",
    "product engineering",
    "UI UX design",
  ],
  alternates: { canonical: "https://www.cdpl.example/testimonials" },
  openGraph: {
    title: "Customer Testimonials & Reviews | CDPL",
    description:
      "Proof that CDPL delivers. Explore verified reviews and success stories.",
    url: "https://www.cdpl.example/testimonials",
    type: "website",
    siteName: "CDPL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Testimonials & Reviews | CDPL",
    description: "Trusted by leaders across industries.",
  },
  robots: { index: true, follow: true },
};

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
      "Its intuitive features streamline our process, boosting productivity across the board.",
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
      "Managing our portfolio is effortless. Clear visibility, real-time updates, delightful UX.",
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
      "We onboard faster and collaborate better. CDPL’s team shipped on time, every time.",
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
      "The interface helps us decide quickly with data we trust. Fantastic partner.",
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
      "I can track my portfolio effortlessly and communicate updates clearly. Love it.",
    date: "2025-02-02",
  },
];

export default function Page() {
  // Schema.org (rich results)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Customer Testimonials & Reviews | CDPL",
    description:
      "A collection of verified customer testimonials and reviews for CDPL.",
    mainEntity: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      itemReviewed: { "@type": "Organization", name: "CDPL" },
      reviewBody: t.content,
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      datePublished: t.date ?? "2025-01-01",
    })),
  };

  return (
    <div className="bg-white text-neutral-900">
      <Script
        id="cdpl-testimonials-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TestimonialHeroSection />
      {/* Optional: Students’ review strip + featured quote */}
      <TestimonialFeedbackSection />
      <TestimonialCTAJoinSection />
    </div>
  );
}
