"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getFlatLocations, statesData } from "@/data/cities/citiesData";
import InteractiveMapSection from "./LocationsInteractiveMapSection";

// simple responsive height hook for the map
function useResponsiveMapHeight() {
  const [h, setH] = useState(420);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      // <640 = mobile, <1024 = tablet, else desktop
      setH(w < 640 ? 280 : w < 1024 ? 360 : 420);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return h;
}

export default function LocationsHeroSection() {
  const mapHeight = useResponsiveMapHeight();

  const handleFindClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = (e.currentTarget.getAttribute("href") || "").replace("#", "");
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-slate-900">
      {/* background */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
      </div>

      {/* decorative layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="absolute left-0 top-0 h-full w-full" aria-hidden />
      </div>

      {/* inner container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <Link href="/locations-we-serve" className="font-medium text-slate-700 hover:text-slate-900">
                Locations We Serve
              </Link>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
              <span className="hidden h-2 w-2 rounded-full sm:inline-block" style={{ backgroundColor: "var(--color-brand, #ff8c00)" }} />
              India-wide presence • State → District → City
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#0069A8]">
              Explore our <span style={{ color: "var(--color-brand, #ff8c00)" }}>locations</span> across India
            </h1>

            <p className="mt-4 mx-auto max-w-3xl text-base text-slate-600 sm:text-lg lg:mx-0">
              From bustling Mumbai to innovative Bengaluru, discover CDPL’s industry-leading{" "}
              <strong>Software Testing (QA)</strong>, <strong>Data Science &amp; AI/ML</strong>,{" "}
              <strong>Product</strong>, and <strong>Engineering</strong> programs near you.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-slate-200">40+ cities</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-slate-200">Pan-India placements</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-slate-200">Local mentor support</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
              >
                Talk to our team
              </Link>
              <Link
                href="#locations-directory"
                onClick={handleFindClick}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Find your nearest center
              </Link>
            </div>
          </div>

          {/* RIGHT — Map, responsive and above overlays */}
          <div className="order-2 lg:order-2 relative mt-4 flex items-start justify-center sm:mt-6 lg:justify-end lg:mt-0 -translate-y-0 sm:-translate-y-1 lg:-translate-y-8 xl:-translate-y-10">
            {/* soft halo */}
            <div aria-hidden className="pointer-events-none absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:-inset-y-8 rounded-[2rem] bg-gradient-to-b from-indigo-100/40 to-white/0 blur-xl" />
            <div className="relative z-20 w-full max-w-full sm:max-w-[32rem] lg:max-w-[40rem]">
              <InteractiveMapSection
                locations={getFlatLocations(statesData)}
                variant="bare"
                constrained={false}
                className="overflow-hidden rounded-2xl !bg-transparent !ring-0 !shadow-none"
                height={mapHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
