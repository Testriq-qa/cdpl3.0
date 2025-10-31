// src/components/sections/LocationsCTASection.tsx
"use client";

import Link from "next/link";

export default function LocationsCTASection({
  sectionClassName = "",
  containerClassName = "",
}: {
  /** Extra classes for the full-width outer section */
  sectionClassName?: string;
  /** Extra classes appended to the constrained container */
  containerClassName?: string;
}) {
  return (
    <section className={`w-full ${sectionClassName}`}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-md">
          <h2 className="text-3xl font-bold">Ready to Start Learning Near You?</h2>
          <p className="mt-2 text-blue-100">Join 500+ students transforming careers in their hometowns.</p>
          <Link
            href="/enroll"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            Enroll Now — 33% Off Limited Time
          </Link>
        </div>
      </div>
    </section>
  );
}
