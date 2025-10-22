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
const ACTDCertificationHeroSection = dynamic(
  () => import("@/components/sections/ACTDCertificationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const ACTDCertificationTracksSection = dynamic(
  () => import("@/components/sections/ACTDCertificationTracksSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading tracks..." /> }
);

const ACTDCertificationProgressFaqSection = dynamic(
  () => import("@/components/sections/ACTDCertificationProgressFaqSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "ACTD Certification Training | CDPL (Cinute Digital Pvt. Ltd.)",
  description:
    "ACTD-aligned certification training by CDPL with practical labs, capstone, and verifiable digital certificate.",
  alternates: { canonical: "/actd-certification-training" },
  openGraph: {
    title: "ACTD Certification Training | CDPL",
    description:
      "Structured ACTD training with sprints, labs, and portfolio outcomes.",
    type: "website",
    url: "/actd-certification-training",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACTD Certification Training | CDPL",
    description:
      "Structured ACTD training with sprints, labs, and portfolio outcomes.",
  },
};

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "ACTD Certification Training",
    provider: {
      "@type": "Organization",
      name: "CDPL (Cinute Digital Pvt. Ltd.)",
      url: "https://your-domain.com",
    },
    url: "https://your-domain.com/actd-certification-training",
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
export default function ACTDCertificationTrainingPage() {
  return (
    <main className="bg-white text-slate-900">
      <StructuredData />
      <ACTDCertificationHeroSection />
      <ACTDCertificationTracksSection />
      <ACTDCertificationProgressFaqSection />
    </main>
  );
}
