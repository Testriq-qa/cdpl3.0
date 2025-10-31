// src/app/locations-we-serve/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";

import LocationsClientMapSection from "@/components/sections/LocationsClientMapSection";
import { buildLocationsHierarchy } from "@/data/courseData/buildLocationsHierarchy";

// Types
import type { CourseData } from "@/types/courseData";

// Your data (currently a Record<string, CourseData>)
import { courseData } from "@/types/courseData";

/* -------------------------------- Loaders -------------------------------- */

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  const color = label.includes("hero") ? "text-gray-500" : "text-blue-500";
  return (
    <div className="flex items-center justify-center py-16">
      <p className={color}>{label}</p>
    </div>
  );
}

/* -------------------------- Dynamic (client) sections -------------------------- */

const LocationsHeroSection = dynamic(
  () => import("@/components/sections/LocationsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);

const HierarchicalLocationsSection = dynamic(
  () => import("@/components/sections/LocationsHierarchicalLocationsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading locations..." /> }
);

const LocationsBenefitsSection = dynamic(
  () => import("@/components/sections/LocationsBenefitsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const LocationsCTASection = dynamic(
  () => import("@/components/sections/LocationsCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

/* --------------------------------- Metadata --------------------------------- */

export const metadata: Metadata = {
  title: "Locations We Serve | Software Testing & Programming Courses in India & UAE",
  description:
    "Explore our course locations across India and the UAE. Find the nearest center in Maharashtra, Karnataka, Delhi NCR, Dubai, Abu Dhabi, and more.",
  alternates: { canonical: "/locations-we-serve" },
  robots: { index: true, follow: true },
  keywords: [
    "software testing courses locations India",
    "programming training centers Maharashtra",
    "QA testing institutes Bangalore",
    "coding bootcamps Delhi NCR",
    "software testing courses UAE",
    "programming training Dubai Abu Dhabi",
  ],
};

/* ------------------------------- Utilities ------------------------------- */

function normalizeCourses(
  raw: CourseData[] | Record<string, CourseData> | undefined | null
): CourseData[] {
  if (!raw) return [];
  // If already an array, return as-is
  if (Array.isArray(raw)) return raw;
  // If it's a record keyed by slug/id, take values
  if (typeof raw === "object") return Object.values(raw);
  return [];
}

/* --------------------------------- Page --------------------------------- */

export default function LocationsWeServePage() {
  // Normalize your dataset to CourseData[]
  const courses: CourseData[] = normalizeCourses(courseData);

  // Build Country → State → District("Cities") → City hierarchy
  const countriesData = buildLocationsHierarchy(courses);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 transition-colors duration-300">
      <LocationsHeroSection />

      <section className="w-full mt-10">
        {/* Pass the derived Country[] so both India and UAE render as top-level cards */}
        <HierarchicalLocationsSection data={countriesData} />
      </section>

      {/* Client-side interactive map */}
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

/* ---------------------------------------------------------------------------
   Notes:
   - `courseData` was a Record<string, CourseData>; we now convert it using
     `Object.values()` in `normalizeCourses(...)`.
   - If you later switch to an array export (e.g. `export default [...]`), the
     same normalization works without code changes.
   - `buildLocationsHierarchy` maps state→country to place India & UAE correctly.
--------------------------------------------------------------------------- */
