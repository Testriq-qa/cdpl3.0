"use client";

import { useMemo } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

// CDPL brand system
const BRAND = {
  accent: "#ff8c00", // Orange
  accentSoft: "rgba(255,140,0,0.10)",
  text: "#0f172a", // slate-900
  pillText: "#7a4a00",
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
};

type Props = {
  jobs: Job[];
  ctaHref?: string; // optional deep link to /jobs/live-jobs
};

/**
 * Creative CDPL ticker:
 * - Seamless marquee with edge fades
 * - Pauses on hover/focus (accessibility-friendly)
 * - Respect prefers-reduced-motion (falls back to static wrap)
 * - Compact, light-theme friendly in both light/dark modes
 */
export default function JobsLiveJobsJobsTickerSection({
  jobs,
  ctaHref = "/jobs/live-jobs",
}: Props) {
  const items = useMemo(
    () =>
      (jobs ?? [])
        .slice(0, 20)
        .map((j) => `${j.title} · ${j.company} · ${j.location}`),
    [jobs]
  );

  // Duplicate list to create the infinite loop
  const loop = items.length ? items.concat(items) : [];

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      aria-label="Latest openings from Cinute Digital network"
    >
      {/* Header / Chip + CTA */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2">
        <div className="flex items-center gap-2 text-xs">
          <span
            className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-semibold"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,140,0,0.14), rgba(255,140,0,0.06))",
              boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)",
              color: BRAND.pillText,
            }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Latest openings · CDPL network
          </span>
        </div>

        <a
          href={ctaHref}
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-slate-300"
          aria-label="Browse all live jobs"
        >
          Browse all <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Marquee rail */}
      <div className="relative">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12"
          style={{
            background:
              "linear-gradient(90deg, white, rgba(255,255,255,0))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12"
          style={{
            background:
              "linear-gradient(270deg, white, rgba(255,255,255,0))",
          }}
        />

        {/* Track */}
        <div
          className="flex whitespace-nowrap py-3 text-sm text-slate-700 motion-safe:[animation:cdpl-marquee_var(--marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          style={
            {
              // 28s default; longer list = slightly faster so items don't bunch up visually
              "--marquee-duration": items.length > 10 ? "24s" : "28s",
            } as React.CSSProperties
          }
        >
          {/* Render twice for seamless loop */}
          {loop.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="mx-6 inline-flex items-center gap-2"
            >
              <span
                className="inline-flex h-2 w-2 rounded-full"
                style={{ background: BRAND.accent }}
                aria-hidden="true"
              />
              <span className="opacity-90">{t}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tiny footer helper */}
      <div className="border-t border-slate-100 px-3 py-2">
        <p className="text-[11px] text-slate-500">
          Tip: Hover to pause. Listings are curated by Cinute Digital Pvt. Ltd. from partner
          companies; apply with mentor guidance.
        </p>
      </div>

      {/* Styles */}
      <style jsx global>{`
        @keyframes cdpl-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Reduce motion: stop animation and wrap normally */
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:\\[animation\\:cdpl-marquee_var\\(--marquee-duration\\)_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
