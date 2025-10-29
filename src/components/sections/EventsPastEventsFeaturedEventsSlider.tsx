"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
    Calendar,
    MapPin,
    Users,
    ArrowRight,
    Star,
    ChevronLeft,
    ChevronRight,
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
    purpose: string;
    highlights: string[];
    category: string;
    categoryColor: string; // e.g. "bg-indigo-600"
    featured?: boolean;
};

type StyleWithVars = React.CSSProperties & Record<string, string | number>;

export default function EventsPastEventsFeaturedEventsSlider({
    events,
    autoplayMs = 4500,
}: {
    events: FeaturedEvent[];
    autoplayMs?: number;
}) {
    const trackRef = useRef<HTMLDivElement | null>(null);

    // responsive items per view
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

    // base + looped data (memoized)
    const base = useMemo<FeaturedEvent[]>(() => events ?? [], [events]);
    const looped = useMemo(
        () => (base.length ? [...base, ...base, ...base] : []),
        [base]
    );

    const middleStart = base.length;
    const [index, setIndex] = useState(middleStart);
    const [paused, setPaused] = useState(false);

    // layout constants
    const GAP_PX = 24; // equals gap-6

    // measure slide width from the first slide
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

    // init to the middle copy
    useEffect(() => {
        if (!base.length) return;
        const id = requestAnimationFrame(() => {
            setIndex(middleStart);
            scrollToIndex(middleStart, "auto");
        });
        return () => cancelAnimationFrame(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [perView, base.length]);

    // autoplay (pause on hover/focus)
    useEffect(() => {
        if (!base.length || paused) return;
        const id = setInterval(() => next(), autoplayMs);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paused, autoplayMs, base.length, perView, index]);

    // seamless loop
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

    // active dot (now used)
    const activeDot =
        ((index - middleStart) % base.length + base.length) % base.length;

    // helper: turn "bg-indigo-600" -> "text-indigo-600"
    const toText = (bgClass: string) => bgClass.replace(/^bg-/, "text-");

    return (
        <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {/* Outer wrapper clips any peek of the next card */}
            <div className="relative overflow-hidden">
                {/* Track */}
                <div
                    ref={trackRef}
                    className="no-scrollbar overflow-x-auto"
                    style={{
                        scrollBehavior: "smooth",
                        paddingInline: "12px",
                    } as React.CSSProperties}
                    aria-roledescription="carousel"
                >
                    {/* Flex with exact gap; slide width computed with CSS vars */}
                    {(() => {
                        const styleVars: StyleWithVars = {
                            "--gap": `${GAP_PX}px`,
                            "--pv": perView,
                            gap: "var(--gap)",
                        };
                        return (
                            <div className="flex" style={styleVars}>
                                {looped.map((event, i) => {
                                    const textCat = toText(event.categoryColor);
                                    return (
                                        <div
                                            key={`${event.id}-${i}`}
                                            data-slide
                                            className="box-border shrink-0 grow-0"
                                            style={{
                                                flex:
                                                    "0 0 calc((100% - (var(--gap) * (var(--pv) - 1))) / var(--pv))",
                                            }}
                                        >
                                            <article className="flex h-full flex-col overflow-hidden rounded-2xl border-4 border-yellow-400 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                                                {/* Top visual */}
                                                <div className="relative h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Calendar className="h-24 w-24 text-purple-300" />
                                                    </div>
                                                    <div className="absolute left-4 top-4">
                                                        <span
                                                            className={`${event.categoryColor} rounded-full px-4 py-1.5 text-sm font-semibold text-white shadow-md`}
                                                        >
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                    <div className="absolute right-4 top-4">
                                                        <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-gray-900 shadow-md">
                                                            <Star className="h-4 w-4 fill-current" />
                                                            Featured
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Body */}
                                                <div className="flex grow flex-col p-6">
                                                    <h3 className="mb-2 line-clamp-2 text-2xl font-bold text-gray-900">
                                                        {event.title}
                                                    </h3>

                                                    {event.subtitle && (
                                                        <p className={`mb-4 text-lg font-semibold ${textCat}`}>
                                                            {event.subtitle}
                                                        </p>
                                                    )}

                                                    <div className="mb-4 space-y-2 text-sm text-gray-600">
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="h-4 w-4 text-purple-600" />
                                                            <span>{event.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            {/* Location icon colored by category */}
                                                            <MapPin className={`h-4 w-4 ${textCat}`} />
                                                            <span className="line-clamp-1">{event.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Users className="h-4 w-4 text-blue-600" />
                                                            <span>
                                                                {event.attendees} participants • {event.organization}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <p className="mb-4 line-clamp-3 text-gray-700">
                                                        {event.purpose}
                                                    </p>

                                                    <div className="mb-6">
                                                        <h4 className="mb-2 text-sm font-semibold text-gray-900">
                                                            Session Highlights:
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {event.highlights.slice(0, 3).map((h, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-2 text-sm text-gray-700"
                                                                >
                                                                    <span className="mt-1 text-purple-600">•</span>
                                                                    <span className="line-clamp-1">{h}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* CTA pinned uniformly — background matches category color */}
                                                    <div className="mt-auto">
                                                        <Link href={`/events/${event.slug}`}>
                                                            <button
                                                                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${event.categoryColor}`}
                                                            >
                                                                View Full Details
                                                                <ArrowRight className="h-5 w-5" />
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

            {/* Arrows */}
            {base.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="group absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/60 bg-white/50 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white/70"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next slide"
                        className="group absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/60 bg-white/50 p-3 shadow-xl backdrop-blur-sm transition hover:bg-white/70"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
                    </button>
                </>
            )}

            {/* Dots */}
            {base.length > 1 && (
                <div className="mt-6 flex items-center justify-center gap-2">
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
