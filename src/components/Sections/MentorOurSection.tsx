// components/Sections/MentorOurSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { Mentor } from "@/lib/mentorShared";
import { DOMAIN_COLORS, classNames } from "@/lib/mentorShared";
import MentorLinkedInIcon from "./MentorLinkedInIcon";

// helper for CSS variables
type CSSVars<T extends string> = CSSProperties & Record<T, string | number>;
const numFromExp = (exp?: string) => {
  const m = exp?.match(/\d+/);
  return m ? Number(m[0]) : undefined;
};

export default function MentorOurSection({ mentors }: { mentors: Mentor[] }) {
  const hasData = Array.isArray(mentors) && mentors.length > 0;

  const trackRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<HTMLElement[]>([]);
  const [active, setActive] = useState(0);
  const initialized = useRef(false);

  // --- core scroll helpers ---
  const snapTo = (idx: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[idx];
    if (!track || !item) return;
    const containerW = track.clientWidth;
    const itemW = item.clientWidth;
    const itemLeft = item.offsetLeft;
    const target = Math.max(0, itemLeft - (containerW - itemW) / 2);
    track.scrollTo({ left: target, behavior: "smooth" });
  };

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

  const setItemRef =
    (i: number) =>
    (el: HTMLElement | null): void => {
      if (el) itemRefs.current[i] = el;
    };

  // --- effects ---
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

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };
    el.addEventListener("wheel", onWheel as EventListener, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, []);

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

  useEffect(() => {
    const onResize = () => snapTo(active);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hasData) return;
      if (e.key === "ArrowRight") snapTo((active + 1) % mentors.length);
      else if (e.key === "ArrowLeft") snapTo((active - 1 + mentors.length) % mentors.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, mentors.length, hasData]);

  const distances = useMemo(
    () => mentors.map((_, i) => Math.abs(i - active)),
    [active, mentors] // include mentors for deps
  );

  const sectionVars: CSSVars<"--color-brand" | "--navy"> = {
    "--color-brand": "#ff8c00",
    "--navy": "#0a1221",
  };

  return (
    <section
      id="our-mentors"
      aria-labelledby="mentors-heading"
      className="bg-white py-8 lg:py-10"
      style={sectionVars}
    >
      {/* JSON-LD for SEO */}
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

      {/* container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-4 sm:mb-5">
          <h2 id="mentors-heading" className="text-xl sm:text-2xl font-semibold text-slate-900">
            Our mentors
          </h2>
          <p className="mt-1 max-w-3xl text-[13px] sm:text-sm text-slate-600">
            Learn from industry mentors across QA, Data Science/AI, Product, and Engineering.
          </p>
        </header>

        {!hasData ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Mentor profiles coming soon</h3>
            <p className="mt-1 text-sm text-slate-600">Add names, roles, and headshots to populate this slider.</p>
          </div>
        ) : (
          <>
            <div className="relative">
              {/* soft background glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-[50%] opacity-[0.08] blur-2xl"
                style={{
                  background:
                    "radial-gradient(65% 55% at 50% 45%, rgba(10,18,33,.18) 0%, rgba(10,18,33,0) 65%)",
                }}
              />

              {/* TRACK */}
              <ul
                ref={trackRef}
                role="listbox"
                aria-label="Mentor carousel"
                className="snap-x snap-mandatory overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] whitespace-nowrap"
                style={{ scrollBehavior: "smooth" }}
              >
                <style>{`ul[aria-label="Mentor carousel"]::-webkit-scrollbar{display:none}`}</style>

                {mentors.map((m, i) => {
                  const id = `mentor-${i + 1}`;
                  const yrs = numFromExp(m.experience);
                  const d = distances[i];

                  // distance-based presentation
                  const rotate = d === 0 ? 0 : Math.min(d, 2) * (i < active ? -5 : 5);
                  const scale = d === 0 ? 1 : d === 1 ? 0.95 : 0.91;
                  const translateY = d === 0 ? 0 : d === 1 ? 6 : 10;
                  const grayscale = d === 0 ? "" : "grayscale";
                  const opacity = d === 0 ? "opacity-100" : d === 1 ? "opacity-85" : "opacity-70";
                  const frameOpacity = d === 0 ? "opacity-100" : "opacity-80";
                  const cardShadow =
                    d === 0
                      ? "shadow-[0_16px_44px_-30px_rgba(10,18,33,.26)]"
                      : "shadow-[0_12px_36px_-30px_rgba(15,23,42,.16)]";

                  return (
                    <li
                      key={m.id ?? id}
                      id={id}
                      role="option"
                      aria-selected={i === active}
                      className="
                        snap-center inline-block align-top px-2
                        w-[96%] sm:w-[88%] md:w-[70%] lg:w-[52%] xl:w-[44%]
                      "
                      onClick={() => snapTo(i)}
                      ref={setItemRef(i)}
                    >
                      {/* gradient frame */}
                      <div
                        className={classNames(
                          "relative rounded-xl p-[1px] transition-opacity duration-500",
                          frameOpacity
                        )}
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255,140,0,.28), rgba(255,140,0,.08) 28%, rgba(10,18,33,.14) 85%)",
                        }}
                      >
                        {/* single column: image on top, content below */}
                        <article
                          className={classNames(
                            "relative grid grid-cols-1 overflow-hidden rounded-[calc(0.75rem-1px)] border border-white/60 bg-white/80 backdrop-blur-xl transition-transform duration-500",
                            opacity,
                            cardShadow
                          )}
                          style={{
                            transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                          }}
                        >
                          {/* IMAGE (responsive height via clamp) */}
                          <div
                            className={classNames(
                              "relative overflow-hidden",
                              grayscale
                            )}
                            // clamp for fluid yet bounded height
                            style={{
                              height: "clamp(170px, 42vw, 280px)",
                            }}
                          >
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
                              sizes="(max-width:640px) 96vw, (max-width:1024px) 70vw, 52vw"
                              className="object-cover"
                              priority={i === 0}
                            />
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-12 bg-gradient-to-b from-white/60 to-transparent" />
                          </div>

                          {/* CONTENT */}
                          <div className="relative flex h-auto flex-col p-4 sm:p-5">
                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-0 -top-px h-6 [mask-image:linear-gradient(black,transparent)]"
                              style={{ background: "linear-gradient(180deg, rgba(255,140,0,.10), rgba(255,140,0,0))" }}
                            />

                            <div className="flex items-start gap-2.5">
                              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200">
                                <Image
                                  src={m.avatar || "/placeholder-avatar.png"}
                                  alt={`${m.name} avatar`}
                                  fill
                                  sizes="36px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <h3 id={`${id}-name`} className="truncate text-[14px] sm:text-[15px] font-semibold text-slate-900">
                                  {m.name}
                                </h3>
                                <p className="truncate text-[11px] sm:text-xs text-slate-600">
                                  {m.title}
                                  {m.company ? <span className="text-slate-500"> {m.company}</span> : null}
                                </p>
                                <div
                                  className={classNames(
                                    "mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] sm:text-[11px] ring-1",
                                    DOMAIN_COLORS[m.domain]
                                  )}
                                >
                                  <span>{m.domain}</span>
                                  {m.experience ? <span>• {m.experience}</span> : null}
                                </div>
                              </div>
                            </div>

                            {m.bio && (
                              <p className="mt-3 text-[13px] leading-relaxed text-slate-700 line-clamp-4 md:line-clamp-3">
                                {m.bio}
                              </p>
                            )}

                            {m.highlights?.length ? (
                              <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-[13px] text-slate-700">
                                {m.highlights.slice(0, 3).map((h, j) => (
                                  <li key={j}>{h}</li>
                                ))}
                              </ul>
                            ) : null}

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <Link
                                href={`/contact-us?mentor=${encodeURIComponent(m.name)}`}
                                className={classNames(
                                  "inline-flex items-center justify-center rounded-full px-3.5 py-2 text-[13px] font-semibold text-white shadow-sm transition",
                                  i === active ? "bg-[var(--color-brand)] hover:opacity-90" : "bg-slate-400 hover:opacity-90"
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
                                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                                    aria-label={`${m.name} on LinkedIn`}
                                  >
                                    <MentorLinkedInIcon className="h-4 w-4" />
                                    <span>LinkedIn</span>
                                  </Link>
                                ) : null
                              )}

                              {typeof yrs === "number" && (
                                <span className="ml-auto text-[11px] text-slate-500">{yrs}+ yrs exp.</span>
                              )}
                            </div>
                          </div>
                        </article>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* arrows (use container width) */}
              {mentors.length > 1 && (
                <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
                  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                      type="button"
                      onClick={() => snapTo((active - 1 + mentors.length) % mentors.length)}
                      className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
                      aria-label="Previous mentor"
                    >
                      <span aria-hidden className="text-base leading-none">‹</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => snapTo((active + 1) % mentors.length)}
                      className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 ring-1 ring-slate-200 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]"
                      aria-label="Next mentor"
                    >
                      <span aria-hidden className="text-base leading-none">›</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* dots */}
            {mentors.length > 1 && (
              <nav className="mt-4 flex items-center justify-center gap-2" aria-label="Slide position">
                {mentors.map((_, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={`dot-${i}`}
                      onClick={() => snapTo(i)}
                      aria-label={`Go to mentor ${i + 1}`}
                      className={classNames(
                        "relative h-2.5 w-2.5 rounded-full ring-[1.5px] transition focus:outline-none focus:ring-[var(--color-brand)]/60",
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

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-120%) rotate(12deg); }
          60% { transform: translateX(220%) rotate(12deg); }
          100% { transform: translateX(220%) rotate(12deg); }
        }
      `}</style>
    </section>
  );
}
