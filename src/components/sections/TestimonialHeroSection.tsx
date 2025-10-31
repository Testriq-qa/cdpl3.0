// ./src/components/sections/TestimonialHeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Script from "next/script";
import { Star } from "lucide-react";
import type { CSSProperties } from "react";

/* Students only */
const REVIEWS = [
  { id: "qa1", name: "Neha R.", role: "Software Test Engineer", quote: "Critiques were sharp yet kind. Automation + CI gave me the confidence to ship faster.", avatar: "/testimonial_images/testimonial.jpeg", rating: 4.9 },
  { id: "dm1", name: "Aarav S.", role: "Digital Marketing Specialist", quote: "Practical playbooks and analytics mindset. Campaigns improved within weeks.", avatar: "/testimonial_images/testimonial.jpeg", rating: 5 },
  { id: "ds1", name: "Zara K.", role: "Data Scientist", quote: "Great balance of product thinking and ML rigor. Loved the review cadence.", avatar: "/testimonial_images/testimonial.jpeg", rating: 4.8 },
];

const BRAND_ORANGE = "rgb(255, 140, 0)";
const BRAND_BLUE = "#0069A8";

/** Allow CSS custom property on style without using `any` */
type CSSVars = CSSProperties & { ["--color-brand"]?: string };

export default function TestimonialHeroSection() {
  const prefersReduced = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CDPL Student Ratings & Reviews",
    itemListElement: REVIEWS.map((r, i) => ({
      "@type": "Review",
      position: i + 1,
      author: { "@type": "Person", name: r.name },
      reviewBody: r.quote,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      itemReviewed: { "@type": "Course", name: "CDPL Programs" },
    })),
  };

  const sectionStyle: CSSVars = { "--color-brand": BRAND_ORANGE };

  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-label="Student ratings and reviews"
      style={sectionStyle}
    >
      <Script
        id="cdpl-students-hero-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* tighter top padding */}
      <div className="max-w-7xl mx-auto px-4 pb-8 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumbs for SEO & UX (Home > Testimonials) */}
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700">Home</Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <Link href="/testimonials" className="font-medium text-slate-700 hover:text-slate-900">
                Testimonials
              </Link>
            </li>
          </ol>
        </nav>

        {/* title + deck (kept tight) */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Rating &amp; Reviews</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
            <span style={{ color: BRAND_BLUE }}>Trusted by</span>{" "}
            <span style={{ color: BRAND_ORANGE }}>students</span>
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-neutral-700 sm:text-lg">
            Hands-on programs in <span className="font-medium text-neutral-900">Testing</span>,{" "}
            <span className="font-medium text-neutral-900">Digital Marketing</span> and{" "}
            <span className="font-medium text-neutral-900">Data Science</span>.
          </p>
        </div>

        {/* ---------- STACKED VIEW (<1024px) ---------- */}
        <div className="relative mx-auto mt-8 lg:hidden">
          <div className="pointer-events-none absolute left-1/2 top-6 h-56 w-[560px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/12 blur-3xl" />
          <div className="relative mx-auto h-[380px] w-full max-w-[420px] sm:h-[420px]">
            <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
              <TiltCard review={REVIEWS[0]} color="dark" float={!prefersReduced} className="-rotate-6" />
            </div>
            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
              <TiltCard review={REVIEWS[1]} color="brandSoft" float={!prefersReduced} className="-rotate-2" />
            </div>
            <div className="absolute left-1/2 top-[76px] z-30 -translate-x-1/2 sm:top-[88px]">
              <TiltCard review={REVIEWS[2]} color="light" float={!prefersReduced} className="rotate-6" />
            </div>
          </div>

          {/* CTA — move UP even more on small screens */}
          <div className="-mt-14 sm:-mt-12 md:-mt-10 flex justify-center">
            <Link
              href="#all-reviews"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
            >
              Read more student reviews →
            </Link>
          </div>
        </div>

        {/* ---------- DESKTOP ROW (≥1024px) ---------- */}
        <div className="relative mx-auto mt-10 hidden min-h:[420px] max-w-[1120px] lg:block">
          <div className="pointer-events-none absolute left-1/2 top-4 h-64 w-[680px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/12 blur-3xl" />
          <div className="relative mx-auto mt-4 flex w-full max-w-[980px] items-center justify-center gap-10">
            <TiltCard review={REVIEWS[0]} color="dark" float={!prefersReduced} className="-translate-y-1 rotate-[-10deg]" />
            <TiltCard review={REVIEWS[1]} color="brandSoft" float={!prefersReduced} className="translate-y-1 rotate-[-4deg]" />
            <TiltCard review={REVIEWS[2]} color="light" float={!prefersReduced} className="-translate-y-2 rotate-[7deg]" />
          </div>

          {/* CTA — move DOWN even more on large screens */}
          <div className="mt-32 xl:mt-40 2xl:mt-28 flex justify-center">
            <Link
              href="#all-reviews"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
            >
              Read more student reviews →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----- tilted card ----- */
type TiltColor = "dark" | "light" | "brandSoft" | "brandPop";
function TiltCard({
  review,
  className = "",
  color = "light",
  float = true,
  mobile = false,
}: {
  review: { name: string; role: string; quote: string; avatar: string; rating: number };
  className?: string;
  color?: TiltColor;
  float?: boolean;
  mobile?: boolean;
}) {
  const palette: Record<TiltColor, { bg: string; text: string; star: string; ring?: string }> = {
    dark: { bg: "bg-neutral-900", text: "text-white", star: "text-[var(--color-brand)]" },
    light: { bg: "bg-white", text: "text-neutral-900", star: "text-[var(--color-brand)]", ring: "ring-1 ring-neutral-200" },
    brandSoft: { bg: "bg-[rgba(255,140,0,.12)]", text: "text-neutral-900", star: "text-[var(--color-brand)]", ring: "ring-1 ring-[var(--color-brand)]/20" },
    brandPop: { bg: "bg-[#F5FFE6]", text: "text-neutral-900", star: "text-[var(--color-brand)]", ring: "ring-1 ring-lime-300/60" },
  };
  const p = palette[color];

  return (
    <motion.article
      animate={float ? { y: [0, -6, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } } : undefined}
      whileHover={{ scale: 1.02 }}
      className={[
        "relative w-[290px] rounded-2xl shadow-[0_24px_80px_-40px_rgba(0,0,0,.45)]",
        p.bg,
        p.text,
        p.ring ?? "",
        mobile ? "shrink-0 rotate-[-4deg]" : "",
        className,
      ].join(" ")}
    >
      <div className="space-y-4 p-5">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${p.star}`} fill="currentColor" />
          ))}
        </div>
        <p className="text-sm leading-relaxed opacity-95">“{review.quote}”</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/70">
            <Image src={review.avatar} alt={`${review.name} avatar`} fill className="object-cover" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{review.name}</p>
            <p className="truncate text-xs opacity-70">{review.role}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
