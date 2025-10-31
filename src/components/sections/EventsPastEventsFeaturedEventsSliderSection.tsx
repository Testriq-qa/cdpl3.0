// src/components/sections/EventsPastEventsFeaturedEventsSliderSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react";
import type React from "react";

export type FeaturedEvent = {
  id: string | number;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  attendees: string | number;
  organization: string;
  purpose: string;        // not shown
  highlights: string[];   // not shown
  category: string;
  categoryColor: string;
  featured?: boolean;
};

type StyleWithVars = React.CSSProperties & Record<string, string | number>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
  "AI & Machine Learning": { badgeBg: "bg-purple-600", btnBg: "bg-purple-600", text: "text-purple-600" },
  "Software Testing": { badgeBg: "bg-green-600", btnBg: "bg-green-600", text: "text-green-600" },
  "Data Science": { badgeBg: "bg-blue-600", btnBg: "bg-blue-600", text: "text-blue-600" },
  "Academic Training": { badgeBg: "bg-orange-600", btnBg: "bg-orange-600", text: "text-orange-600" },
  "Web Development": { badgeBg: "bg-cyan-600", btnBg: "bg-cyan-600", text: "text-cyan-600" },
  "Industrial Training": { badgeBg: "bg-teal-600", btnBg: "bg-teal-600", text: "text-teal-600" },
  "Corporate Training": { badgeBg: "bg-pink-600", btnBg: "bg-pink-600", text: "text-pink-600" },
  Technology: { badgeBg: "bg-indigo-600", btnBg: "bg-indigo-600", text: "text-indigo-600" },
};
const FALLBACK = { badgeBg: "bg-slate-700", btnBg: "bg-slate-700", text: "text-slate-700" };

export default function EventsPastEventsFeaturedEventsSliderSection({
  events,
  autoplayMs = 4500,
  cardHClass = "h-[480px]", // fixed to match normal card visual height
}: {
  events: FeaturedEvent[];
  autoplayMs?: number;
  cardHClass?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      if (window.matchMedia("(min-width: 1024px)").matches) setPerView(3);
      else if (window.matchMedia("(min-width: 768px)").matches) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const base = useMemo<FeaturedEvent[]>(() => events ?? [], [events]);
  const looped = useMemo(() => (base.length ? [...base, ...base, ...base] : []), [base]);

  const middleStart = base.length;
  const [index, setIndex] = useState(middleStart);
  const [paused, setPaused] = useState(false);

  const GAP_PX = 24;

  const getSlideWidth = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    return slide ? slide.offsetWidth + GAP_PX : el.clientWidth / Math.max(1, perView);
  };

  const scrollToIndex = (i: number, behavior: ScrollBehavior = "smooth") => {
    const el = trackRef.current;
    if (!el || !base.length) return;
    const w = getSlideWidth();
    el.scrollTo({ left: i * w, behavior });
  };

  useEffect(() => {
    if (!base.length) return;
    const id = requestAnimationFrame(() => {
      setIndex(middleStart);
      scrollToIndex(middleStart, "auto");
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, base.length]);

  useEffect(() => {
    if (!base.length || paused) return;
    const id = setInterval(() => next(), autoplayMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, autoplayMs, base.length, perView, index]);

  useEffect(() => {
    if (!base.length) return;
    const block = base.length;
    const start = middleStart;
    const end = start + block - 1;

    if (index < start - block) {
      const ni = index + block;
      setIndex(ni);
      scrollToIndex(ni, "auto");
    } else if (index > end + block) {
      const ni = index - block;
      setIndex(ni);
      scrollToIndex(ni, "auto");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, base.length, perView]);

  const next = () => {
    if (!base.length) return;
    const ni = index + 1;
    setIndex(ni);
    scrollToIndex(ni, "smooth");
  };
  const prev = () => {
    if (!base.length) return;
    const ni = index - 1;
    setIndex(ni);
    scrollToIndex(ni, "smooth");
  };

  if (!base.length) return null;

  const activeDot = ((index - middleStart) % base.length + base.length) % base.length;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="no-scrollbar overflow-x-auto"
          style={{ scrollBehavior: "smooth", paddingInline: "12px" } as React.CSSProperties}
          aria-roledescription="carousel"
        >
          {(() => {
            const styleVars: StyleWithVars = {
              "--gap": `${GAP_PX}px`,
              "--pv": perView,
              gap: "var(--gap)",
            };
            return (
              <div className="flex" style={styleVars}>
                {looped.map((event, i) => {
                  const cs = CATEGORY_STYLES[event.category] ?? FALLBACK;

                  return (
                    <div
                      key={`${event.id}-${i}`}
                      data-slide
                      className="box-border shrink-0 grow-0"
                      style={{
                        flex: "0 0 calc((100% - (var(--gap) * (var(--pv) - 1))) / var(--pv))",
                      }}
                    >
                      <article
                        className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${cardHClass} flex flex-col`}
                      >
                        {/* === FEATURED INDICATORS === */}
                        {event.featured && (
                          <>
                            <span className="sr-only">Featured</span>
                            <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF8C00] shadow-[0_0_6px_rgba(255,140,0,0.5)] z-20" />
                            <div className="absolute right-3 top-3 z-20">
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#FF8C00] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-white shadow-md ring-1 ring-white/60">
                                <Crown className="h-3.5 w-3.5" />
                                Featured
                              </span>
                            </div>
                          </>
                        )}

                        {/* Header (extra top padding on small screens to avoid tag overlap) */}
                        <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 pt-10 md:pt-0">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Calendar className="h-16 w-16 text-purple-300" />
                          </div>
                          <div className="absolute left-3 top-3 z-20">
                            <span className={`${cs.badgeBg} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                              {event.category}
                            </span>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex flex-col h-[calc(100%-12rem)] min-h-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                            {event.title}
                          </h3>

                          {event.subtitle && (
                            <p className={`${cs.text} text-sm font-semibold mb-3 line-clamp-1`}>
                              {event.subtitle}
                            </p>
                          )}

                          <div className="space-y-2 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-purple-600" />
                              <span className="line-clamp-1">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span className="line-clamp-1">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-600" />
                              <span className="line-clamp-1">
                                {event.attendees} participants • {event.organization}
                              </span>
                            </div>
                          </div>

                          <div className="mt-auto shrink-0">
                            <Link href={`/events/${event.slug}`}>
                              <button
                                className={`w-full text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm ${cs.btnBg}`}
                              >
                                View Details
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Desktop/tablet arrows (overlay, centered vertically) */}
      {base.length > 1 && (
        <div className="hidden md:block">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="group absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white/80"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="group absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-2xl border border-white/60 bg-white/60 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white/80"
          >
            <ChevronRight className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
          </button>
        </div>
      )}

      {/* Mobile arrows (below slider so they don't cover cards) */}
      {base.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Dots */}
      {base.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {base.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const target = middleStart + i;
                setIndex(target);
                scrollToIndex(target, "smooth");
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "h-2.5 rounded-full transition-all",
                i === activeDot ? "w-6 bg-gray-900" : "w-2.5 bg-gray-300",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
