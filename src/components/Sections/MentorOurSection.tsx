// components/Sections/MentorOurSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { Mentor } from "@/lib/mentorShared";
import { DOMAIN_COLORS, classNames } from "@/lib/mentorShared";
import MentorLinkedInIcon from "./MentorLinkedInIcon";

// pull "11" from "11+ yrs"
const numFromExp = (exp?: string) => {
  const m = exp?.match(/\d+/);
  return m ? Number(m[0]) : undefined;
};

export default function MentorOurSection({ mentors }: { mentors: Mentor[] }) {
  const hasData = Array.isArray(mentors) && mentors.length > 0;

  /** slider refs/state */
  const trackRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<HTMLElement[]>([]);
  const [active, setActive] = useState(0);
  const initialized = useRef(false);

  // ----- CORE SCROLL / SNAP HELPERS -----

  // Center a slide by index using scrollLeft math (no bounding-rect drift)
  const snapTo = (idx: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[idx];
    if (!track || !item) return;

    const containerW = track.clientWidth;
    const itemW = item.clientWidth;

    // item's left from track's scrollable content start
    const itemLeft = item.offsetLeft;

    const target = Math.max(0, itemLeft - (containerW - itemW) / 2);
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  // Update active based on which slide center is closest to container center
  const computeActiveFromScroll = () => {
    const track = trackRef.current;
    if (!track || itemRefs.current.length === 0) return;

    const center = track.scrollLeft + track.clientWidth / 2;

    let bestIdx = 0;
    let bestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(elCenter - center);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    });

    setActive(bestIdx);
  };

  // Keep a stable list of item refs
  const setItemRef =
    (i: number) =>
      (el: HTMLElement | null): void => {
        if (el) itemRefs.current[i] = el;
      };

  // ----- EFFECTS -----

  // Start centered on the first item (no flash)
  useLayoutEffect(() => {
    if (!hasData || initialized.current) return;
    const track = trackRef.current;
    const item = itemRefs.current[0];
    if (track && item) {
      const containerW = track.clientWidth;
      const itemW = item.clientWidth;
      const itemLeft = item.offsetLeft;
      const target = Math.max(0, itemLeft - (containerW - itemW) / 2);
      track.scrollTo({ left: target, behavior: "auto" });
      setActive(0);
      initialized.current = true;
    }
  }, [hasData]);

  // Horizontal scroll with mouse wheel (natural UX)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, []);

  // Track scroll → compute active
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeActiveFromScroll);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    computeActiveFromScroll();
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [hasData]);

  // Recenter active on resize (prevents drift)
  useEffect(() => {
    const onResize = () => snapTo(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  // Keyboard support (wraps)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hasData) return;
      if (e.key === "ArrowRight") snapTo((active + 1) % mentors.length);
      else if (e.key === "ArrowLeft") snapTo((active - 1 + mentors.length) % mentors.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, mentors.length, hasData]);

  // distance-based style helpers
  const distances = useMemo(
    () => mentors.map((_, i) => Math.abs(i - active)),
    [active, mentors.length]
  );

  return (
    <section
      id="our-mentors"
      aria-labelledby="mentors-heading"
      className="bg-white py-12 lg:py-16"
      style={
        {
          ["--color-brand" as any]: "#ff8c00", // CDPL brand
          ["--navy" as any]: "#0a1221",
        } as React.CSSProperties
      }
    >
      {/* SEO JSON-LD */}
      {hasData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "CDPL Mentors",
              itemListElement: mentors.map((m, i) => ({
                "@type": "Person",
                position: i + 1,
                name: m.name,
                jobTitle: m.title,
                worksFor: m.company?.replace("@ ", ""),
                image: m.avatar,
                url:
                  m.socials?.find((s) => s.platform === "linkedin")?.url ||
                  "https://cinutedigital.com/mentors",
                description: m.bio,
              })),
            }),
          }}
        />
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h2 id="mentors-heading" className="text-2xl font-semibold text-slate-900">
            Our mentors
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-600">
            Learn from industry mentors across QA, Data Science/AI, Product, and Engineering.
          </p>
        </header>

        {!hasData ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <h3 className="text-lg font-semibold text-slate-900">Mentor profiles coming soon</h3>
            <p className="mt-1 text-sm text-slate-600">Add names, roles, and headshots to populate this slider.</p>
          </div>
        ) : (
          <>
            <div className="relative">
              {/* soft light backdrop */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-[760px] w-[1200px] -translate-x-1/2 rounded-[50%] opacity-[0.12] blur-2xl"
                style={{
                  background:
                    "radial-gradient(65% 55% at 50% 45%, rgba(10,18,33,.2) 0%, rgba(10,18,33,0) 65%)",
                }}
              />

              {/* TRACK */}
              <ul
                ref={trackRef}
                role="listbox"
                aria-label="Mentor carousel"
                className="snap-x snap-mandatory overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] whitespace-nowrap"
                style={{ scrollBehavior: "smooth" }}
              >
                <style>{`ul[aria-label="Mentor carousel"]::-webkit-scrollbar{display:none}`}</style>

                {mentors.map((m, i) => {
                  const id = `mentor-${i + 1}`;
                  const yrs = numFromExp(m.experience);
                  const d = distances[i];

                  // Active: straight, full color. Others: curvy + grayscale.
                  const rotate = d === 0 ? 0 : Math.min(d, 2) * (i < active ? -7 : 7);
                  const scale = d === 0 ? 1 : d === 1 ? 0.92 : 0.86;
                  const translateY = d === 0 ? 0 : d === 1 ? 10 : 18;
                  const grayscale = d === 0 ? "" : "grayscale";
                  const opacity = d === 0 ? "opacity-100" : d === 1 ? "opacity-85" : "opacity-70";

                  // Card frame intensity
                  const frameOpacity =
                    d === 0 ? "opacity-100" : d === 1 ? "opacity-80" : "opacity-60";
                  const cardShadow =
                    d === 0
                      ? "shadow-[0_28px_80px_-36px_rgba(10,18,33,.30)]"
                      : "shadow-[0_22px_60px_-34px_rgba(15,23,42,.20)]";

                  return (
                    <li
                      key={m.id ?? id}
                      id={id}
                      role="option"
                      aria-selected={i === active}
                      className="snap-center inline-block align-top w-[88%] md:w-[80%] lg:w-[70%] xl:w-[60%] px-2"
                      onClick={() => snapTo(i)}
                      ref={setItemRef(i)}
                    >
                      {/* Gradient frame wrapper */}
                      <div
                        className={classNames(
                          "relative rounded-3xl p-[1px] transition-opacity duration-500",
                          frameOpacity
                        )}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,140,0,.35), rgba(255,140,0,.1) 28%, rgba(10,18,33,.18) 85%)",
                        }}
                      >
                        <article
                          className={classNames(
                            "relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/60 bg-white/70 backdrop-blur-xl transition-transform duration-500",
                            opacity,
                            cardShadow
                          )}
                          style={{
                            transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                          }}
                        >
                          {/* Shine sweep on hover (active only) */}
                          {d === 0 && (
                            <span
                              aria-hidden
                              className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 translate-x-[-120%] rotate-12 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                              style={{
                                animation: "shine 2.2s ease-in-out infinite",
                              }}
                            />
                          )}

                          {/* LEFT: IMAGE (only photo grayscales) */}
                          <div className={classNames("relative h-[340px] md:h-[520px] overflow-hidden", grayscale)}>
                            {/* subtle brand glow behind image */}
                            <div
                              aria-hidden
                              className="absolute inset-0 -z-10 opacity-15 blur-3xl"
                              style={{
                                background:
                                  "radial-gradient(60% 60% at 50% 50%, var(--color-brand) 0%, rgba(255,140,0,0) 70%)",
                              }}
                            />
                            <Image
                              src={m.avatar || "/placeholder-avatar.png"}
                              alt={`${m.name} — ${m.title}${m.company ? " " + m.company : ""}`}
                              fill
                              sizes="(max-width:768px) 88vw, (max-width:1280px) 50vw, 45vw"
                              className={classNames(
                                "object-cover transition-transform duration-500 will-change-transform",
                                d === 0 ? "group-hover:scale-[1.02]" : ""
                              )}
                              priority={i === 0}
                            />
                            {/* top gradient overlay for readability */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/60 to-transparent" />
                          </div>

                          {/* RIGHT: CONTENT */}
                          <div className="relative flex md:h-[520px] flex-col p-6 sm:p-7 lg:p-8">
                            {/* subtle top edge glow */}
                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-0 -top-px h-10 [mask-image:linear-gradient(black,transparent)]"
                              style={{
                                background:
                                  "linear-gradient(180deg, rgba(255,140,0,.12), rgba(255,140,0,0))",
                              }}
                            />

                            <div className="flex items-start gap-3">
                              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200">
                                <Image
                                  src={m.avatar || "/placeholder-avatar.png"}
                                  alt={`${m.name} avatar`}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <h3 id={`${id}-name`} className="truncate text-base font-semibold text-slate-900">
                                  {m.name}
                                </h3>
                                <p className="truncate text-xs text-slate-600">
                                  {m.title}
                                  {m.company ? <span className="text-slate-500"> {m.company}</span> : null}
                                </p>
                                <div
                                  className={classNames(
                                    "mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] ring-1",
                                    DOMAIN_COLORS[m.domain]
                                  )}
                                >
                                  <span>{m.domain}</span>
                                  {m.experience ? <span>• {m.experience}</span> : null}
                                </div>
                              </div>
                            </div>

                            {m.bio && (
                              <p className="mt-4 text-sm leading-relaxed text-slate-700 line-clamp-5 md:line-clamp-none">
                                {m.bio}
                              </p>
                            )}

                            {m.highlights?.length ? (
                              <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm text-slate-700">
                                {m.highlights.slice(0, 4).map((h, j) => (
                                  <li key={j}>{h}</li>
                                ))}
                              </ul>
                            ) : null}

                            <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                              <Link
                                href={`/contact-us?mentor=${encodeURIComponent(m.name)}`}
                                className={classNames(
                                  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition",
                                  i === active
                                    ? "bg-[var(--color-brand)] hover:opacity-90"
                                    : "bg-slate-400 hover:opacity-90"
                                )}
                                aria-label={`Book a free session with ${m.name}`}
                              >
                                Book session
                              </Link>

                              {m.socials?.map((s) =>
                                s.platform === "linkedin" ? (
                                  <Link
                                    key={s.platform}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener nofollow"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-sm text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                                    aria-label={`${m.name} on LinkedIn`}
                                  >
                                    <MentorLinkedInIcon className="h-4 w-4" />
                                    <span>LinkedIn</span>
                                  </Link>
                                ) : null
                              )}

                              {typeof yrs === "number" && (
                                <span className="ml-auto text-xs text-slate-500">{yrs}+ yrs exp.</span>
                              )}
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Prev / Next — WRAPPED & REFINED */}
              {mentors.length > 1 && (
                <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
                  <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-3">
                    <button
                      type="button"
                      onClick={() => snapTo((active - 1 + mentors.length) % mentors.length)}
                      className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
                      aria-label="Previous mentor"
                    >
                      <span aria-hidden className="text-lg leading-none">‹</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => snapTo((active + 1) % mentors.length)}
                      className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
                      aria-label="Next mentor"
                    >
                      <span aria-hidden className="text-lg leading-none">›</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Circle pager (compact, crisp) */}
            {mentors.length > 1 && (
              <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Slide position">
                {mentors.map((_, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={`dot-${i}`}
                      onClick={() => snapTo(i)}
                      aria-label={`Go to mentor ${i + 1}`}
                      className={classNames(
                        "relative h-3 w-3 rounded-full ring-2 transition focus:outline-none focus:ring-[var(--color-brand)]/60",
                        isActive ? "ring-[var(--color-brand)]" : "ring-slate-300 hover:ring-slate-400"
                      )}
                    >
                      <span
                        className={classNames(
                          "absolute inset-0 m-[2px] block rounded-full transition-[transform,background-color]",
                          isActive ? "bg-[var(--color-brand)] scale-100" : "bg-transparent scale-75"
                        )}
                      />
                    </button>
                  );
                })}
              </nav>
            )}
          </>
        )}
      </div>

      {/* extras */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-120%) rotate(12deg); }
          60% { transform: translateX(220%) rotate(12deg); }
          100% { transform: translateX(220%) rotate(12deg); }
        }
        @media (min-width: 1024px){
          #our-mentors .md\\:h-\\[520px\\]{height:520px}
        }
        @media (min-width: 1280px){
          #our-mentors .md\\:h-\\[520px\\]{height:560px}
        }
      `}</style>
    </section>
  );
}
