"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Script from "next/script";

/**
 * MentorsImpactSection — CDPL clean gradient (light-only)
 * Update: Reworked ONLY the numeric (metrics) card backgrounds to be neatly blended,
 * modern conic+radial tints with subtle noise. No chalky whites, just soft color.
 */

type MentorCard = {
  name: string;
  role: string;
  company: string;
  domain: string;
  rating: number;
  sessions: number;
  tags: string[];
  img: string;
  keywords: string;
};

const CDPL_ORANGE = "#ff8c00";
const CDPL_ORANGE_DEEP = "#ff6a00";
const CDPL_PEACH = "#ffd19e";
const CDPL_GLOW =
  "radial-gradient(closest-side, rgba(255,140,0,.26), rgba(255,140,0,0) 70%)";
const GRADIENT_BRAND = `linear-gradient(90deg, ${CDPL_ORANGE_DEEP} 0%, ${CDPL_ORANGE} 55%, ${CDPL_PEACH} 100%)`;
const GRADIENT_OUTLINE = `linear-gradient(90deg, ${CDPL_ORANGE}35 0%, ${CDPL_PEACH}45 100%)`;

/** Metric number colors */
const METRIC_NUMBER_COLORS = ["#ff8c00", "#2563eb", "#10b981", "#7c3aed"];

/** Subtle SVG noise (for natural paper-like blend) */
const NOISE =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" opacity=\"0.08\" width=\"80\" height=\"80\" viewBox=\"0 0 80 80\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')";

/**
 * NEW — METRIC card backgrounds:
 * - conic-gradient gives a premium “sweep” highlight
 * - radial-gradient adds a soft corner glow
 * - noise layer ties it together
 * - No plain white overlays, all color-driven.
 */
const METRIC_CARD_BACKGROUNDS = [
  // ORANGE
  {
    border: "border-orange-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(255,140,0,0.16)]",
    style: {
      backgroundImage: [
        // conic sweep highlight (peach → orange)
        "conic-gradient(from 220deg at 25% 0%, rgba(255,212,170,0.65), rgba(255,166,77,0.35) 35%, rgba(255,212,170,0.65) 65%, rgba(255,166,77,0.35))",
        // corner glow
        "radial-gradient(90% 80% at 100% 0%, rgba(255,176,102,0.45) 0%, rgba(255,176,102,0) 60%)",
        // texture
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  // SKY
  {
    border: "border-sky-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(2,132,199,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 210deg at 25% 0%, rgba(186,230,253,0.65), rgba(125,211,252,0.35) 35%, rgba(186,230,253,0.65) 65%, rgba(125,211,252,0.35))",
        "radial-gradient(90% 80% at 100% 0%, rgba(148,216,255,0.45) 0%, rgba(148,216,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  // EMERALD
  {
    border: "border-emerald-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(16,185,129,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 225deg at 25% 0%, rgba(187,247,208,0.65), rgba(134,239,172,0.35) 35%, rgba(187,247,208,0.65) 65%, rgba(134,239,172,0.35))",
        "radial-gradient(90% 80% at 100% 0%, rgba(160,240,195,0.45) 0%, rgba(160,240,195,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
  // VIOLET
  {
    border: "border-violet-200",
    ring: "shadow-[inset_0_0_0_1px_rgba(139,92,246,0.16)]",
    style: {
      backgroundImage: [
        "conic-gradient(from 200deg at 25% 0%, rgba(221,214,254,0.68), rgba(196,181,253,0.38) 35%, rgba(221,214,254,0.68) 65%, rgba(196,181,253,0.38))",
        "radial-gradient(90% 80% at 100% 0%, rgba(210,200,255,0.48) 0%, rgba(210,200,255,0) 60%)",
        NOISE,
      ].join(","),
      backgroundBlendMode: "screen, soft-light, multiply",
    } as React.CSSProperties,
  },
];

type MentorCardTweak = Record<string, string>;
const IMG_TWEAKS: MentorCardTweak = {
  "Dnyaneshwar Bhabad": "object-[50%_30%] scale-[1.06]",
};

const MENTORS: MentorCard[] = [
  {
    name: "Pravin Mhaske",
    role: "Data Science Manager",
    company: "Infosys (India)",
    domain: "Data Science",
    rating: 4.9,
    sessions: 1200,
    tags: ["Leadership", "Analytics", "Machine Learning", "Strategy"],
    img: "/mentors_images/Pravin-Maske.jpg",
    keywords:
      "pravin mhaske data science manager infosys analytics machine learning leadership india",
  },
  {
    name: "Piyali Mondal",
    role: "Program Leader · M.Sc (Data Science AI & ML)",
    company: "Exeed College (UAE)",
    domain: "Data Science",
    rating: 4.8,
    sessions: 980,
    tags: ["Academia", "Curriculum Design", "Research", "Python"],
    img: "/mentors_images/Piyali-Mondal.jpg",
    keywords:
      "piyali mondal program leader exeed college uae academia data science ai ml curriculum professor",
  },
  {
    name: "Revathi Soundarrajan",
    role: "Data Scientist (PhD)",
    company: "Electra Vehicles (USA)",
    domain: "Data Science",
    rating: 5.0,
    sessions: 860,
    tags: ["ML Research", "Time Series", "AutoML", "Python"],
    img: "/mentors_images/Revathi-Soundarrajan.jpg",
    keywords:
      "revathi soundarrajan dr s revathi data scientist phd electra vehicles machine learning research usa",
  },
  {
    name: "Dnyaneshwar Bhabad",
    role: "Assistant Manager – Technology",
    company: "Deloitte – Technology Academy (India)",
    domain: "Full-Stack",
    rating: 4.7,
    sessions: 740,
    tags: ["JavaScript", "Training", "Backend", "System Design"],
    img: "/mentors_images/Dnyaneshwar-Bhabad.jpg",
    keywords:
      "dnyaneshwar bhabad assistant manager technology deloitte training software development full-stack india",
  },
  {
    name: "Abhirupa Manna",
    role: "Consultant",
    company: "KPMG (India)",
    domain: "Data Science",
    rating: 4.8,
    sessions: 690,
    tags: ["SQL", "Tableau", "Power BI", "ETL", "Python"],
    img: "/mentors_images/Abhirupa-Manna.jpg",
    keywords:
      "abhirupa manna consultant kpmg data analytics bi sql tableau power bi qlikview etl python india",
  },
  {
    name: "Urvi Verma",
    role: "AVP – Data Engineering",
    company: "Deutsche Bank (Germany)",
    domain: "Cloud & DevOps",
    rating: 4.9,
    sessions: 820,
    tags: ["Big Data", "AWS", "GCP", "Python", "SQL"],
    img: "/mentors_images/Urvi-Verma.jpg",
    keywords:
      "urvi verma avp data engineering deutsche bank germany big data aws gcp cloud services python sql",
  },
  {
    name: "Eshita Gangwar",
    role: "Application Engineer",
    company: "Oracle (USA)",
    domain: "Full-Stack",
    rating: 4.8,
    sessions: 610,
    tags: ["Java", "Python", "Genomic Data", "Software Development"],
    img: "/mentors_images/Ishita.jpg",
    keywords:
      "eshita gangwar application engineer oracle usa masters computer science usc genomic data analysis software development",
  },
];

const DOMAINS = [
  "AI / Machine Learning",
  "Data Science",
  "Full-Stack",
  "Cloud & DevOps",
  "Product Management",
  "UI/UX Design",
];

export default function MentorsImpactSection() {
  const [domain, setDomain] = useState<string>("");

  const filtered = useMemo(() => {
    const d = domain.toLowerCase();
    return MENTORS.filter((m) => !d || m.domain.toLowerCase() === d);
  }, [domain]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CDPL Mentors — Industry Experts for Career Growth",
    itemListElement: MENTORS.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
        affiliation: m.company,
        knowsAbout: [...m.tags, m.domain],
      },
    })),
  };

  return (
    <section
      id="mentors-impact"
      aria-labelledby="mentors-impact-title"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      data-theme="light"
    >
      {/* background glows */}
      <div
        className="pointer-events-none absolute -top-28 right-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-22"
        style={{ background: CDPL_GLOW }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-18"
        style={{ background: CDPL_GLOW }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              "Top-rated Industry Experts",
              "1:1 Live Mentorship",
              "Career-Focused Guidance",
            ].map((b) => (
              <span
                key={b}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-700 shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>

          <h2
            id="mentors-impact-title"
            className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight"
          >
            Learn Faster with{" "}
            <span className="drop-shadow-sm text-[var(--color-brand,#ff8c00)]">
              CDPL World-Class Mentors
            </span>
          </h2>

          <p className="mt-2 max-w-3xl text-[15px] sm:text-base text-zinc-800">
            Accelerate your career with <strong>outcome-driven mentorship</strong> from leaders at Google, Microsoft,
            Amazon, and high-growth startups. Master <strong>Data Science</strong>, <strong>Machine Learning</strong>,{" "}
            <strong>Software Testing</strong> and{" "}
            <strong>Product Management</strong> through live projects, interview prep, and portfolio reviews designed
            for <strong>job placement</strong> and <strong>promotions</strong>.
          </p>

          {/* Domain filter */}
          <div role="group" aria-label="Mentor domain filter" className="mt-4 max-w-sm">
            <label className="block rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-sm">
              <div className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-zinc-500">
                Filter by Domain
              </div>

              <select
                id="mentor-domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="sr-only"
                aria-label="Filter mentors by domain"
              >
                <option value="">All domains</option>
                {DOMAINS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <FancySelect
                value={domain}
                onChange={setDomain}
                options={["All domains", ...DOMAINS]}
                className="w-full"
              />
            </label>
          </div>
        </header>

        {/* Metrics — NEW neatly blended backgrounds */}
        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {[
            { num: "2,400+", label: "1:1 Sessions / month" },
            { num: "96%", label: "Interview-ready in 8 weeks" },
            { num: "4.9/5", label: "Average mentor rating" },
            { num: "150+", label: "Hiring partners" },
          ].map((m, i) => {
            const bg = METRIC_CARD_BACKGROUNDS[i % METRIC_CARD_BACKGROUNDS.length];
            return (
              <div
                key={m.label}
                className={`relative overflow-hidden rounded-2xl border p-4 text-center shadow-sm ${bg.border} ${bg.ring}`}
                style={bg.style}
              >
                {/* tiny soft sheen arc for premium feel */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(from 140deg at 0% 0%, rgba(255,255,255,0.6), transparent 20%, transparent 80%, rgba(255,255,255,0.35))",
                    opacity: 0.25,
                    WebkitMask:
                      "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
                    mask: "radial-gradient(120% 80% at 0% 0%, black 45%, transparent 70%)",
                  }}
                />

                <div
                  className="text-xl font-extrabold tracking-wide"
                  style={{ color: METRIC_NUMBER_COLORS[i % METRIC_NUMBER_COLORS.length] }}
                >
                  {m.num}
                </div>
                <div className="mt-1 text-xs text-zinc-800">{m.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mentor Cards — tinted gradients + noise */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m, idx) => {
            const tweak = IMG_TWEAKS[m.name] || "";
            const hue = [28, 210, 162, 262, 34, 196, 142][idx % 7];
            return (
              <article
                key={m.name}
                className="relative rounded-3xl border border-zinc-200 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label={`${m.name} — ${m.role}, ${m.company}`}
                style={{
                  backgroundImage: [
                    `linear-gradient(135deg, hsla(${hue}, 90%, 94%, .95) 0%, hsla(${hue}, 98%, 90%, .85) 55%, hsla(${hue}, 98%, 88%, .70) 100%)`,
                    NOISE,
                  ].join(","),
                  backgroundBlendMode: "soft-light, multiply",
                }}
              >
                {/* inner glow ring */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-38"
                  style={{ backgroundImage: GRADIENT_OUTLINE }}
                />
                {/* faint grid mask */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                    opacity: 0.26,
                    mixBlendMode: "overlay",
                    WebkitMask:
                      "radial-gradient(160% 110% at 0% 0%, black 38%, transparent 72%)",
                    mask: "radial-gradient(160% 110% at 0% 0%, black 38%, transparent 72%)",
                  }}
                />

                <div className="flex items-start gap-4 relative">
                  {/* Avatar rim */}
                  <div
                    className="h-[88px] w-[88px] shrink-0 rounded-2xl p-[3px]"
                    style={{ backgroundImage: GRADIENT_BRAND }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.img}
                      alt={`Mentor portrait — ${m.domain} ${m.company}`}
                      width={88}
                      height={88}
                      loading="lazy"
                      className={`block h-full w-full rounded-[14px] object-cover ring-1 ring-black/5 ${tweak}`}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-[16px] font-extrabold leading-tight">{m.name}</h3>
                    <p className="mt-1 text-[13px] text-zinc-700">
                      {m.role} · {m.company}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-zinc-700">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: CDPL_ORANGE }}
                        aria-hidden="true"
                      />
                      {m.domain}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 relative">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white/90 backdrop-blur px-2 py-1 text-[11px] text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center relative">
                  <div className="rounded-xl border border-zinc-200 bg-white/90 backdrop-blur px-3 py-2">
                    <div className="text-[12px] font-extrabold">★ {m.rating.toFixed(1)}</div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Avg Rating</div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white/90 backdrop-blur px-3 py-2">
                    <div className="text-[12px] font-extrabold">
                      {m.sessions.toLocaleString()}+
                    </div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Sessions</div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white/90 backdrop-blur px-3 py-2">
                    <div className="text-[12px] font-extrabold">Job-ready</div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Curriculum</div>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-zinc-600 relative">
                  Includes roadmap planning, project reviews, and mock interviews. Ideal for career transitions and promotions.
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            "Trusted by 50,000+ learners",
            "Outcome-driven mentorship",
            "Placement support & referrals",
            "Live projects & code reviews",
            "Interview prep bootcamps",
          ].map((t) => (
            <span
              key={t}
              className="snap-start whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="sr-only">
          CDPL Mentors for Data Science, AI/ML, Full-Stack Development, Cloud & DevOps, Product Management, and UI/UX Design
        </h3>

        <p className="mt-3 text-center text-xs text-zinc-700">
          Tip: Book a free 15-minute intro to map your career goals and create a personalized learning roadmap.
        </p>
      </div>

      <Script id="mentors-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="sr-only">
        CDPL mentors provide live 1:1 mentorship, portfolio reviews, mock interviews, and job-focused upskilling for
        Data Science, AI, Full-Stack, DevOps, Product Management, and UX. Learn with real projects and accelerate placements.
      </div>
    </section>
  );
}

/* ---------- Tiny, accessible custom select (styled options) ---------- */
function FancySelect({
  value,
  onChange,
  options,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const display = value || "All domains";
  const selectedIndex = options.findIndex((o) => o === display);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !listRef.current?.contains(t)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function choose(v: string) {
    setOpen(false);
    onChange(v === "All domains" ? "" : v);
    btnRef.current?.focus();
  }

  function onKey(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const el = listRef.current?.querySelector<HTMLLIElement>(
          `li[data-index="${Math.max(0, selectedIndex)}"]`
        );
        el?.focus();
      });
    }
  }

  function onItemKey(e: React.KeyboardEvent<HTMLLIElement>, i: number) {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current!.focus();
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[i]);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      (e.currentTarget.nextElementSibling as HTMLLIElement | null)?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      (e.currentTarget.previousElementSibling as HTMLLIElement | null)?.focus();
    }
  }

  return (
    <div className={`relative ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={onKey}
        className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--color-brand,#ff8c00)]/30"
      >
        <span className="truncate">{display}</span>
        <svg
          className={`ml-2 h-4 w-4 shrink-0 text-zinc-500 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.18z" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          aria-activedescendant={`opt-${Math.max(0, selectedIndex)}`}
          className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-zinc-200 bg-white py-1 shadow-lg"
        >
          {options.map((opt, i) => {
            const active = i === selectedIndex;
            return (
              <li
                key={opt}
                id={`opt-${i}`}
                data-index={i}
                role="option"
                aria-selected={active}
                tabIndex={0}
                onKeyDown={(e) => onItemKey(e, i)}
                onClick={() => choose(opt)}
                className={`mx-1 flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-[rgba(255,140,0,.08)] ${
                  active ? "bg-[rgba(255,140,0,.12)] font-semibold text-zinc-900" : "text-zinc-800"
                }`}
              >
                <span className="truncate">{opt}</span>
                {active && (
                  <svg
                    className="ml-3 h-4 w-4 text-[var(--color-brand,#ff8c00)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.415l-7.01 7.01a1 1 0 01-1.414 0L3.296 8.72a1 1 0 011.414-1.415l3.154 3.155 6.303-6.303a1 1 0 011.537.133z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
