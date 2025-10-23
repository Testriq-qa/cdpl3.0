import type { Metadata } from "next";
import dynamic from "next/dynamic";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

/* ---------- Dynamic sections (client components) ---------- */
const AAACerticationHeroSection = dynamic(
  () => import("@/components/sections/AAACerticationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const AAACertificationWhySection = dynamic(
  () => import("@/components/sections/AAACertificationWhySection"),
  { ssr: true, loading: () => <SectionLoader label="Loading highlights..." /> }
);

const AAACertificationCurriculumSection = dynamic(
  () => import("@/components/sections/AAACertificationCurriculumSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> }
);

const AAACertificationOutcomesCtaSection = dynamic(
  () => import("@/components/sections/AAACertificationOutcomesCtaSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "AAA Certification Course | CDPL (Cinute Digital Pvt. Ltd.)",
  description:
    "Mentor-led AAA certification course by CDPL with structured labs, capstone, and a verifiable digital certificate.",
  alternates: { canonical: "/aaa-certification-course" },
  openGraph: {
    title: "AAA Certification Course | CDPL",
    description:
      "Outcome-focused AAA training with projects, labs, and a proctored exam.",
    type: "website",
    url: "/aaa-certification-course",
  },
  twitter: {
    card: "summary_large_image",
    title: "AAA Certification Course | CDPL",
    description:
      "Outcome-focused AAA training with projects, labs, and a proctored exam.",
  },
};

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AAA Certification Course",
    provider: {
      "@type": "Organization",
      name: "CDPL (Cinute Digital Pvt. Ltd.)",
      url: "https://your-domain.com",
    },
    url: "https://your-domain.com/aaa-certification-course",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Page (server component) ---------- */
export default function AAACertificationCoursePage() {
  return (
    <main className="bg-white text-slate-900">
      <StructuredData />
      <AAACerticationHeroSection />
      <AAACertificationWhySection />
      <AAACertificationCurriculumSection />
      <AAACertificationOutcomesCtaSection />
    </main>
  );
}
