"use client";

import React, { CSSProperties } from "react";
import { Quote, ChevronRight } from "lucide-react";
import Link from "next/link";

export type Testimonial = {
  id: string;
  name: string;
  handle?: string;
  avatar?: string;
  text: string;
  date?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Patricia Martin", handle: "@pmartin", text: "ShowTracker is a real gem! I started using it a couple months ago and it completely changed the way I watch TV shows. I can only say I love it.", date: "Jan 18, 2018" },
  { id: "t2", name: "Gregory Wilson", handle: "@gwilson", text: "I use ShowTracker every day, and it's awesome! I track all of my TV shows in one place.", date: "Jan 18, 2018" },
  { id: "t3", name: "Bruce Murphy", handle: "@bruce", text: "ShowTracker is a great app! I started using it a couple months ago and it completely changed how I keep up with new episodes.", date: "Jan 18, 2018" },
  { id: "t4", name: "Megan Waters", handle: "@megwat", text: "Straightforward, clean, and fast. I started using it months ago and it completely changed how I organize my shows.", date: "Jan 20, 2018" },
  { id: "t5", name: "Crystal Perkins", handle: "@crystal", text: "Simple and delightful. I track all my TV shows and never miss an episode now.", date: "Jan 22, 2018" },
  { id: "t6", name: "Andrew Cook", handle: "@acook", text: "A must-have for TV lovers. My backlog finally makes sense.", date: "Jan 25, 2018" },
];

function chunk<T>(arr: T[], parts: number) {
  const out: T[][] = Array.from({ length: parts }, () => []);
  arr.forEach((item, i) => out[i % parts].push(item));
  return out;
}

export default function JobsLiveJobsTestimonialSection({
  testimonials = DEFAULT_TESTIMONIALS,
  ctaHref = "/testimonials",
}: {
  testimonials?: Testimonial[];
  ctaHref?: string;
}) {
  const [colA, colB] = chunk(testimonials, 2);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate w-full overflow-hidden rounded-t-[2rem] bg-white px-4 py-16 sm:px-6 md:px-8 md:py-20 shadow-[0_-10px_40px_rgba(0,0,0,0.06)]"
    >
      {/* CDPL light/orange gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: [
            "linear-gradient(180deg, #ffffff 0%, #fffdf9 24%, #fff7ed 100%)",
            "radial-gradient(60% 50% at 22% 45%, rgba(255,163,72,0.30) 0%, rgba(255,163,72,0) 60%)",
            "radial-gradient(45% 45% at 85% 8%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 55%)",
            "radial-gradient(42% 42% at 88% 85%, rgba(255,196,119,0.22) 0%, rgba(255,196,119,0) 60%)",
          ].join(", "),
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          filter: "saturate(1.03)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        {/* DESKTOP (≥901px): copy beside two vertical columns */}
        <div className="only-desktop grid grid-cols-5 gap-6 md:gap-12">
          <CopyBlock ctaHref={ctaHref} className="col-span-2" />
          <div className="col-span-3 grid grid-cols-2 gap-4 sm:gap-6">
            <MarqueeColumn direction="down" items={colA} />
            <MarqueeColumn direction="up" items={colB} />
          </div>
        </div>

        {/* TABLET (501–900px): copy on top; two vertical columns below */}
        <div className="only-tablet">
          <CopyBlock ctaHref={ctaHref} />
          <div className="grid grid-cols-2 gap-6 mt-8">
            <MarqueeColumn direction="down" items={colA} className="h-[22rem] sm:h-[26rem]" />
            <MarqueeColumn direction="up" items={colB} className="h-[22rem] sm:h-[26rem]" />
          </div>
        </div>

        {/* PHONE (≤500px): copy on top; two rows stacked, items move horizontally */}
        <div className="only-phone">
          <CopyBlock ctaHref={ctaHref} />
          <div className="space-y-6 mt-8">
            <MarqueeRow direction="ltr" items={colA} />
            <MarqueeRow direction="rtl" items={colB} />
          </div>
        </div>
      </div>

      {/* Animations + visibility (with !important to win any conflicts) */}
      <style jsx global>{`
        /* Exclusive visibility gates */
        .only-desktop, .only-tablet, .only-phone { display: none !important; }

        @media (min-width: 901px) {
          .only-desktop { display: grid !important; }
          .only-tablet, .only-phone { display: none !important; }
        }
        @media (min-width: 501px) and (max-width: 900px) {
          .only-tablet { display: block !important; }
          .only-desktop, .only-phone { display: none !important; }
        }
        @media (max-width: 500px) {
          .only-phone { display: block !important; }
          .only-desktop, .only-tablet { display: none !important; }
        }

        /* Vertical columns */
        @keyframes marquee-down { from { transform: translateY(-50%); } to { transform: translateY(0%); } }
        @keyframes marquee-up { from { transform: translateY(0%); } to { transform: translateY(-50%); } }
        .marquee-outer { mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent); }
        .marquee-track { will-change: transform; }
        .marquee-down { animation: marquee-down var(--marquee-duration, 28s) linear infinite; }
        .marquee-up { animation: marquee-up var(--marquee-duration, 28s) linear infinite; }
        .marquee-col:hover .marquee-track { animation-play-state: paused; }

        /* Horizontal rows (≤500px) */
        @keyframes marquee-ltr { from { transform: translateX(-50%); } to { transform: translateX(0%); } }
        @keyframes marquee-rtl { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        .row-mask { mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent); }
        .row-track { will-change: transform; }
        .row-ltr { animation: marquee-ltr var(--row-duration, 28s) linear infinite; }
        .row-rtl { animation: marquee-rtl var(--row-duration, 28s) linear infinite; }
        .row-wrap:hover .row-track { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .marquee-down, .marquee-up, .row-ltr, .row-rtl { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/* Copy block */
function CopyBlock({ ctaHref, className = "" }: { ctaHref: string; className?: string }) {
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <p className="text-sm/6 text-zinc-600 tracking-wide uppercase">Community</p>
      <h2 id="testimonials-heading" className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
        We believe in the
        <br /> power of community
      </h2>
      <p className="mt-4 text-zinc-700 text-base">
        Our goal is to create a product and service that you’re satisfied
        with and use every day. This is why we’re constantly working on our
        services to make it better every day and really listen to what our
        users have to say.
      </p>
      <div className="mt-6">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
        >
          Read more testimonials
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

/* Vertical column (desktop + tablet) */
function MarqueeColumn({
  items,
  direction,
  className = "",
}: {
  items: Testimonial[];
  direction: "up" | "down";
  className?: string;
}) {
  const doubled = React.useMemo(() => [...items, ...items], [items]);
  return (
    <div className={`marquee-col relative overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5 h-[28rem] sm:h-[32rem] ${className}`}>
      <div className="absolute inset-0 marquee-outer" aria-hidden />
      <ul
        className={`marquee-track ${direction === "down" ? "marquee-down" : "marquee-up"}`}
        style={{ "--marquee-duration": direction === "down" ? "30s" : "26s" } as CSSProperties}
      >
        {doubled.map((t, idx) => (
          <li key={`${t.id}-${idx}`} className="px-3 py-3 sm:px-4 sm:py-4">
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Horizontal row (phone ≤500px) */
function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "ltr" | "rtl";
}) {
  const doubled = React.useMemo(() => [...items, ...items], [items]);
  return (
    <div className="row-wrap relative w-full overflow-hidden rounded-2xl bg-white/80 ring-1 ring-black/5 row-mask">
      <ul
        className={`row-track flex gap-4 px-3 py-4 ${direction === "ltr" ? "row-ltr" : "row-rtl"}`}
      style={{ "--row-duration": direction === "ltr" ? "28s" : "24s" } as CSSProperties}
      >
        {doubled.map((t, idx) => (
          <li key={`${t.id}-row-${idx}`} className="flex-shrink-0 w-[92vw] max-w-none">
            <TestimonialCard t={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Card */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-xl border border-zinc-200 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
      <blockquote className="text-sm text-zinc-700">
        <Quote className="mb-2 h-4 w-4 text-orange-500 opacity-70" aria-hidden />
        <p>{t.text}</p>
      </blockquote>
      <figcaption className="mt-3 flex items-center justify-between text-xs text-zinc-500">
        <div className="min-w-0">
          <span className="font-medium text-zinc-800">{t.name}</span>
          {t.handle ? <span className="ml-1 text-zinc-500">{t.handle}</span> : null}
        </div>
        {t.date ? <time dateTime={new Date(t.date).toISOString()}>{t.date}</time> : null}
      </figcaption>
    </figure>
  );
}
