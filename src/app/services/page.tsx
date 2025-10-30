// app/services/training/page.tsx
import dynamic from "next/dynamic";

// Simple loading UI used by all sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const ServicesHeroSection = dynamic(
  () => import("@/components/sections/ServicesHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const ServicesGridSection = dynamic(
  () => import("@/components/sections/ServicesGridSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading services..." /> }
);

const ServicesWhyChooseUsSection = dynamic(
  () => import("@/components/sections/ServicesWhyChooseUsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const ServicesCTASection = dynamic(
  () => import("@/components/sections/ServicesCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

// This file is a Server Component (no "use client")
export default function TrainingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <ServicesHeroSection />
      <ServicesGridSection />
      <ServicesWhyChooseUsSection />
      <ServicesCTASection />
    </div>
  );
}
