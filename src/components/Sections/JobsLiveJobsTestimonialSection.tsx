"use client";

import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { Play, Share2, X, Sparkles, Clock, Star } from "lucide-react";

// ----------------------------- Types ---------------------------------
export type VideoTestimonial = {
  id: string;
  title: string;
  person: string;
  role?: string;
  company?: string;
  city?: string;
  src: string;    // mp4 or YouTube embed url (https://www.youtube.com/embed/VIDEO_ID)
  poster: string; // preview image
  duration?: string; // "2:31"
  tags?: string[];
  rating?: number;   // 0-5
  transcript?: string;
};

export type JobsLiveJobsVideoTestimonialsSectionProps = {
  heading?: string;
  subheading?: string;
  videos?: VideoTestimonial[];
  defaultTag?: string | null;
};

// ----------------------------- Sample Data ---------------------------
// Note: replace src/poster with your actual assets
const DEFAULT_VIDEOS: VideoTestimonial[] = [
  {
    id: "cdpl-prathik",
    title: "CDPL helped me land interviews in 30 days",
    person: "Prathik Singh",
    role: "Data Analyst Intern",
    company: "CDPL",
    city: "Bengaluru",
    src: "/testimonial_images/video_testimonial.mp4",
    poster: "/testimonial_images/video_testimonial_thumbnail.png",
    duration: "2:31",
    tags: ["Live Jobs", "Analytics"],
    rating: 5,
    transcript:
      "I learned job-ready skills with CDPL's live projects—dashboards, workflows, and mock interviews that boosted my confidence.",
  },
  {
    id: "cdpl-swathi-qa",
    title: "From zero to QA automation in 6 weeks",
    person: "Swathi K",
    role: "QA Engineer",
    company: "Product Startup",
    city: "Hyderabad",
    src: "/testimonial_images/video_testimonial.mp4",
    poster: "/testimonial_images/video_testimonial_thumbnail.png",
    duration: "3:12",
    tags: ["Software Testing", "Automation"],
    rating: 4.8,
    transcript:
      "Mentor-led sprints, bug tracking, and interview prep turned theory into daily habits.",
  },
  {
    id: "cdpl-yash-walkin",
    title: "Walk-in success: showcasing real project work",
    person: "Yash V",
    role: "Associate QA",
    company: "IT Services",
    city: "Pune",
    src: "/testimonial_images/video_testimonial.mp4",
    poster: "/testimonial_images/video_testimonial_thumbnail.png",
    duration: "1:58",
    tags: ["Walk-in", "Interview"],
    rating: 4.9,
    transcript:
      "The CDPL portfolio checklist and recruiter-ready resume made the difference in the final round.",
  },
  {
    id: "cdpl-aman-devops",
    title: "DevOps live projects gave me real-world confidence",
    person: "Aman R",
    role: "DevOps Trainee",
    company: "Cloud Services",
    city: "Noida",
    src: "/testimonial_images/video_testimonial.mp4",
    poster: "/testimonial_images/video_testimonial_thumbnail.png",
    duration: "2:05",
    tags: ["DevOps", "Live Projects"],
    rating: 4.7,
    transcript:
      "Pipelines, CI/CD, and infra-as-code with mentors made interviews feel like demos of what I already do.",
  },
  {
    id: "cdpl-neha-analytics",
    title: "Analytics portfolio that recruiters loved",
    person: "Neha S",
    role: "Business Analyst",
    company: "FinTech",
    city: "Mumbai",
    src: "/testimonial_images/video_testimonial.mp4",
    poster: "/testimonial_images/video_testimonial_thumbnail.png",
    duration: "2:44",
    tags: ["Analytics", "Portfolio"],
    rating: 4.9,
    transcript:
      "Dashboard storytelling, case studies, and mock interviews helped me stand out in panel rounds.",
  },
];

// ----------------------------- Helpers -------------------------------
function cx(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

// Light theme tokens (fixed light look)
const LIGHT = {
  page: "relative isolate bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50",
  textPrimary: "text-slate-800",
  textSecondary: "text-slate-600",
  chip: "bg-white/80 border border-black/10",
  card: "bg-white/90 border border-black/10",
  btn: "bg-white hover:bg-white/90 border border-black/10 text-slate-900",
  iconBtn: "bg-white/90 hover:bg-white text-slate-900",
};

// ----------------------------- UI primitives -------------------------
type PillBaseProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};
type PillButtonProps = PillBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
  };
type PillSpanProps = PillBaseProps & {
  as?: "span";
};
type PillProps = PillButtonProps | PillSpanProps;

function Pill(props: PillProps) {
  if (props.as === "button") {
    const { className, children, title, ...rest } = props;
    return (
      <button
        title={title}
        {...rest}
        className={cx(
          "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
          LIGHT.chip,
          className
        )}
      >
        {children}
      </button>
    );
  }
  const { className, children, title } = props;
  return (
    <span
      title={title}
      className={cx(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
        LIGHT.chip,
        className
      )}
    >
      {children}
    </span>
  );
}

// ----------------------------- Robust index-based carousel utils -----
function getCards(container: HTMLDivElement) {
  return Array.from(container.querySelectorAll<HTMLDivElement>("[data-card]"));
}
function getNearestIndex(container: HTMLDivElement) {
  const cards = getCards(container);
  const left = container.scrollLeft;
  let idx = 0;
  let best = Number.POSITIVE_INFINITY;
  for (let i = 0; i < cards.length; i++) {
    const diff = Math.abs(cards[i].offsetLeft - left);
    if (diff < best) {
      best = diff;
      idx = i;
    }
  }
  return idx;
}
function scrollToIndex(container: HTMLDivElement, index: number) {
  const cards = getCards(container);
  if (!cards.length) return;
  const target = Math.max(0, Math.min(index, cards.length - 1));
  const x = cards[target].offsetLeft;
  container.scrollTo({ left: x, behavior: "smooth" });
}
function computeScrollAvailable(container: HTMLDivElement) {
  const canPrev = container.scrollLeft > 0;
  const max = container.scrollWidth - container.clientWidth - 1;
  const canNext = container.scrollLeft < max;
  return { canPrev, canNext };
}

// ----------------------------- Component -----------------------------
export default function JobsLiveJobsVideoTestimonialsSection({
  heading = "CDPL Learner Shorts — Real Outcomes, Live Jobs",
  subheading =
  "Swipe through short, vertical stories from learners who used CDPL's mentor-led tracks and live projects to secure interviews and offers.",
  videos = DEFAULT_VIDEOS,
  defaultTag = null,
}: JobsLiveJobsVideoTestimonialsSectionProps) {
  const [active, setActive] = useState<VideoTestimonial | null>(null);
  const [tag, setTag] = useState<string | null>(defaultTag);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const tags = useMemo(() => {
    const s = new Set<string>();
    videos.forEach((v) => v.tags?.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [videos]);

  const filtered = useMemo(
    () => (tag ? videos.filter((v) => v.tags?.includes(tag)) : videos),
    [tag, videos]
  );

  // Deep-link open (#video-<id>)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash.startsWith("video-")) return;
    const id = hash.replace("video-", "");
    const found = videos.find((v) => v.id === id);
    if (found) setActive(found);
  }, [videos]);

  // Share link
  const copyLink = (id: string) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#video-${id}`;
      navigator.clipboard.writeText(url);
      const el = document.createElement("div");
      el.textContent = "Link copied";
      el.className =
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] px-3 py-1.5 rounded-full text-sm bg-black/80 text-white";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    } catch { }
  };

  // SEO JSON-LD
  const jsonLd = useMemo(() => {
    const items = videos.map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: v.transcript || v.title,
      thumbnailUrl: [
        v.poster.startsWith("http")
          ? v.poster
          : `${typeof window !== "undefined" ? window.location.origin : ""}${v.poster}`,
      ],
      uploadDate: "2025-01-01",
      duration: v.duration ? `PT${v.duration.replace(":", "M")}S` : undefined,
      contentUrl: v.src,
      embedUrl: v.src,
      publisher: { "@type": "Organization", name: "CDPL" },
    }));
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: items,
    });
  }, [videos]);

  // Keep arrow enable/disable in sync
  const refreshArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { canPrev: p, canNext: n } = computeScrollAvailable(el);
    setCanPrev(p);
    setCanNext(n);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    refreshArrows();
    const onScroll = () => refreshArrows();
    const onResize = () => refreshArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [filtered.length]);

  // Arrow handlers (index-based)
  const handlePrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cur = getNearestIndex(el);
    scrollToIndex(el, cur - 1);
  };
  const handleNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cur = getNearestIndex(el);
    scrollToIndex(el, cur + 1);
  };

  return (
    <section className={LIGHT.page}>
      {/* Use your requested container sizing */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Pill className="mb-3">
            <Sparkles className="h-4 w-4 mr-1" />
            CDPL Success Stories
          </Pill>
          <h2 className={cx("text-3xl sm:text-4xl font-semibold", LIGHT.textPrimary)}>
            {heading}
          </h2>
          <p className={cx("mt-3", LIGHT.textSecondary)}>{subheading}</p>
        </div>

        {/* Tag Filter */}
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Pill
              as="button"
              onClick={() => setTag(null)}
              title="Show all"
              className={cx(
                "hover:bg-orange-100",
                !tag && "bg-orange-200 border-orange-300 text-orange-900"
              )}
            >
              All
            </Pill>
            {tags.map((t) => (
              <Pill
                key={t}
                as="button"
                onClick={() => setTag((prev) => (prev === t ? null : t))}
                className={cx(
                  "hover:bg-orange-100",
                  tag === t && "bg-orange-200 border-orange-300 text-orange-900"
                )}
                title={`Filter: ${t}`}
              >
                {t}
              </Pill>
            ))}
          </div>
        )}

        {/* Shorts Carousel */}
        <div className="mt-8 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              aria-label="Previous"
              onClick={handlePrev}
              disabled={!canPrev}
              className={cx(
                "h-10 w-10 rounded-full shadow transition",
                LIGHT.btn,
                !canPrev && "opacity-40 cursor-not-allowed"
              )}
            >
              ‹
            </button>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              aria-label="Next"
              onClick={handleNext}
              disabled={!canNext}
              className={cx(
                "h-10 w-10 rounded-full shadow transition",
                LIGHT.btn,
                !canNext && "opacity-40 cursor-not-allowed"
              )}
            >
              ›
            </button>
          </div>

          <div
            ref={scrollerRef}
            role="region"
            aria-label="Testimonial shorts carousel"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((v) => (
              <ShortsCard
                key={v.id}
                v={v}
                onPlay={() => setActive(v)}
                onShare={() => copyLink(v.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Player Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="absolute left-1/2 top-1/2 w-[94vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
            >
              <div className="relative aspect-video w-full">
                {(active?.src.includes("youtube.com") || active?.src.includes("youtu.be")) ? (
                  <iframe
                    src={active?.src}
                    title={active?.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={active?.src}
                    poster={active?.poster}
                    controls
                    preload="metadata"
                    className="absolute inset-0 h-full w-full bg-black"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {active && (
                <div className="px-4 py-3">
                  <h3 className="text-base sm:text-lg font-semibold">{active.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {active.person}
                    {active.role ? " • " + active.role : ""}
                    {active.company ? " @ " + active.company : ""}
                    {active.city ? " • " + active.city : ""}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Structured data for SEO */}
      <Script id="cdpl-videoobject-jsonld" type="application/ld+json">
        {jsonLd}
      </Script>
    </section>
  );
}

// ----------------------------- Shorts Card ---------------------------
function ShortsCard({
  v,
  onPlay,
  onShare,
}: {
  v: VideoTestimonial;
  onPlay: () => void;
  onShare: () => void;
}) {
  const [hovering, setHovering] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);

  const isMp4 = !v.src.includes("youtube.com") && !v.src.includes("youtu.be");

  useEffect(() => {
    if (!vidRef.current) return;
    if (hovering) {
      vidRef.current.play().catch(() => { });
    } else {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  }, [hovering]);

  return (
    <div
      id={`video-${v.id}`}
      data-card
      className={cx(
        // slightly wider on md/lg so carousel overflows even with a few cards
        "shrink-0 w-72 sm:w-80 md:w-[24rem] lg:w-[26rem] snap-start rounded-2xl overflow-hidden",
        LIGHT.card
      )}
    >
      {/* Top: title + rating */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2 text-slate-900">
            {v.title}
          </h3>
          <span className="inline-flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-medium">{(v.rating ?? 4.8).toFixed(1)}</span>
          </span>
        </div>
      </div>

      {/* Middle: 9:16 media */}
      <div className="px-4">
        <div
          className="relative aspect-[9/16] overflow-hidden rounded-xl border border-black/10"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Poster */}
          <Image
            src={v.poster}
            alt={`${v.person} — ${v.title}`}
            fill
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 26rem"
            className="object-cover"
            priority={false}
          />

          {/* Hover preview for mp4 */}
          {isMp4 && (
            <video
              ref={vidRef}
              src={v.src + "#t=0.1"}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100"
            />
          )}

          {/* Duration chip */}
          {v.duration && (
            <span className="absolute left-2 top-2 text-[11px] px-2 py-0.5 rounded-full bg-black/70 text-white">
              <Clock className="inline-block h-3 w-3 mr-1" />
              {v.duration}
            </span>
          )}

          {/* Right action rail like Shorts */}
          <div className="absolute right-2 bottom-3 flex flex-col gap-2">
            <button
              type="button"
              aria-label="Share"
              className={cx("h-10 w-10 rounded-full shadow", LIGHT.iconBtn)}
              onClick={onShare}
            >
              <Share2 className="h-4 w-4 mx-auto" />
            </button>
            <button
              type="button"
              aria-label="Play"
              className={cx("h-10 w-10 rounded-full shadow", LIGHT.iconBtn)}
              onClick={onPlay}
            >
              <Play className="h-4 w-4 mx-auto" />
            </button>
          </div>

          {/* Bottom-left meta overlay */}
          <div className="absolute left-2 bottom-3 text-white drop-shadow">
            <div className="text-xs font-semibold">
              {v.person}
              {v.role ? " • " + v.role : ""}
            </div>
            <div className="text-[11px] opacity-90">
              {v.company ? "@ " + v.company : ""}
              {v.city ? " • " + v.city : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: tags (first 3) */}
      {v.tags?.length ? (
        <div className="px-4 py-2 flex flex-wrap gap-1.5">
          {v.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 border border-black/10 text-slate-700 transition-colors hover:bg-orange-100 active:bg-orange-200"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
