// src/components/sections/EventsPastEventsHeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

export default function EventsPastEventsHeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const featured = document.getElementById("featured-events");
    const all = document.getElementById("all-past-events");
    (featured ?? all)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* subtle geometric bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ✅ Breadcrumb (kept) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-indigo-700">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span>Events</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span className="font-semibold text-slate-900">Past Events</span>
            </li>
          </ol>
        </nav>

        {/* split */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Our Training Portfolio
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#0069A8]">Past Events</span>{" "}
              <span className="text-slate-900">&amp;</span>{" "}
              <span className="text-[#FF8C00]">Training Programs</span>
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg">
              Explore our portfolio of successfully conducted training events, workshops, and corporate programs across India.
            </p>

            {/* scroll button */}
            <div className="mt-6">
              <button
                onClick={handleScrollDown}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: "#FF8C00" }}
                aria-label="Scroll to events"
              >
                Browse events
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* RIGHT — plain image (no border/radius/lightness) */}
          <div className="order-1 lg:order-2 mt-6 lg:mt-0">
            <Image
              src="/events/services_past-events-hero.png"
              alt="CDPL training events collage"
              width={1280}
              height={960}
              className="w-full h-auto object-contain"
              style={{ filter: "none", mixBlendMode: "normal" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
