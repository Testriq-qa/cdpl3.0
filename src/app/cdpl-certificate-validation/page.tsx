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
const CertificationValidationHeroSection = dynamic(
  () => import("@/components/sections/CertificationValidationHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const CertificationValidatorSection = dynamic(
  () => import("@/components/sections/CertificationValidatorSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading validator..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = {
  title: "CDPL Certificate Validation | Verify AAA & ACTD Certificates",
  description:
    "Instantly validate AAA and ACTD certificates issued by CDPL (Cinute Digital Pvt. Ltd.). Enter a unique certificate ID to verify authenticity.",
  alternates: { canonical: "/cdpl-certificate-validation" },
  openGraph: {
    title: "CDPL Certificate Validation",
    description:
      "Verify AAA and ACTD certificates issued by CDPL with a unique ID.",
    type: "website",
    url: "/cdpl-certificate-validation",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDPL Certificate Validation",
    description:
      "Verify AAA and ACTD certificates issued by CDPL with a unique ID.",
  },
};

/* ---------- JSON-LD ---------- */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CDPL Certificate Validation",
    url: "https://your-domain.com/cdpl-certificate-validation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  return (
    <main className="bg-white text-slate-900">
      <StructuredData />
      <CertificationValidationHeroSection />
      <CertificationValidatorSection />
    </main>
  );
}
