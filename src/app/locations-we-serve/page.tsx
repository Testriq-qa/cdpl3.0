// src/app/locations-we-serve/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { statesData } from "@/data/cities/citiesData";
import LocationsClientMapSection from "@/components/sections/LocationsClientMapSection";

// Server-only tiny loader
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  const color = label.includes("hero") ? "text-gray-500" : "text-blue-500";
  return (
    <div className="flex items-center justify-center py-16">
      <p className={color}>{label}</p>
    </div>
  );
}

// Dynamic sections (client components allowed here)
const LocationsHeroSection = dynamic(
  () => import("@/components/sections/LocationsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const HierarchicalLocationsSection = dynamic(
  () => import("@/components/sections/LocationsHierarchicalLocationsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading locations..." /> }
);

// Remove this — moved to LocationsClientMapSection
// const LocationsInteractiveMapSection = dynamic(...)

const LocationsBenefitsSection = dynamic(
  () => import("@/components/sections/LocationsBenefitsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const LocationsCTASection = dynamic(
  () => import("@/components/sections/LocationsCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

export const metadata: Metadata = {
  title: "Locations We Serve | Software Testing & Programming Courses Across India",
  description:
    "Discover all our course locations in India for software testing and programming training. From Mumbai to Delhi, find the nearest center in Maharashtra, Karnataka, Delhi NCR, and more.",
  alternates: { canonical: "/locations-we-serve" },
  robots: { index: true, follow: true },
  keywords: [
    "software testing courses locations India",
    "programming training centers Maharashtra",
    "QA testing institutes Bangalore",
    "coding bootcamps Delhi NCR",
  ],
};

export default function LocationsWeServePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 transition-colors duration-300">
      <LocationsHeroSection />

      <section className="w-full mt-10">
        <HierarchicalLocationsSection data={statesData} />
      </section>

      {/* Now safe: LocationsClientMapSection handles ssr: false */}
      <LocationsClientMapSection />

      <section className="w-full mt-10">
        <LocationsBenefitsSection />
      </section>

      <section className="w-full mt-10">
        <LocationsCTASection />
      </section>
    </div>
  );
}