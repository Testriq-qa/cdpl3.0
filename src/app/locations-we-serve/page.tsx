// src/app/locations-we-serve/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getFlatLocations, statesData } from "@/data/cities/citiesData";

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

const LocationsInteractiveMapSection = dynamic(
  () => import("@/components/sections/LocationsInteractiveMapSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading map..." /> }
);

const LocationsBenefitsSection = dynamic(
  () => import("@/components/sections/LocationsBenefitsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const LocationsCTASection = dynamic(
  () => import("@/components/sections/LocationsCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

export type MapProps = {
  locations: Array<{ name: string; lat: number; lng: number; type: string; link?: string }>;
};

// ✅ Safe to export metadata here (server file)
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
      {/* HERO — already full-width; inner layout handled inside component */}
      <LocationsHeroSection />

      {/* Hierarchical Locations — 100% width */}
      <section className="w-full mt-10">
        <HierarchicalLocationsSection data={statesData} />
      </section>

      {/* Interactive Map — 100% width */}
      <section className="w-full mt-10">
        <LocationsInteractiveMapSection locations={getFlatLocations(statesData)} />
      </section>

      {/* Benefits — 100% width */}
      <section className="w-full mt-10">
        <LocationsBenefitsSection />
      </section>

      {/* CTA — 100% width */}
      <section className="w-full mt-10">
        <LocationsCTASection />
      </section>
    </div>
  );
}
