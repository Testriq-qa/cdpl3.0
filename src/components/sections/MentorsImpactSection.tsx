"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Script from "next/script";

/**
 * MentorsImpactSection — CDPL clean gradient (light-only)
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
  "radial-gradient(closest-side, rgba(255,140,0,.22), rgba(255,140,0,0) 70%)";
const GRADIENT_BRAND = `linear-gradient(90deg, ${CDPL_ORANGE_DEEP} 0%, ${CDPL_ORANGE} 55%, ${CDPL_PEACH} 100%)`;
const GRADIENT_OUTLINE = `linear-gradient(90deg, ${CDPL_ORANGE}20 0%, ${CDPL_PEACH}30 100%)`;

/** Different number colors for the metrics (per-card) */
const METRIC_NUMBER_COLORS = [
  "#ff8c00", // brand orange
  "#2563eb", // blue
  "#10b981", // emerald
  "#7c3aed", // purple
];

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

/** Per-mentor photo tweaks (only where needed) */
const IMG_TWEAKS: Record<string, string> = {
  // keep rim visible and center face a touch
  "Dnyaneshwar Bhabad": "object-[50%_30%] scale-[1.06]",
};

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
        className="pointer-events-none absolute -top-28 right-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-20"
        style={{ background: CDPL_GLOW }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-[-10%] h-80 w-[48rem] rounded-full blur-[70px] opacity-16"
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

        {/* Metrics */}
        <div className="mb-6 grid gap-3 sm:grid-cols-4">
          {[
            { num: "2,400+", label: "1:1 Sessions / month" },
            { num: "96%", label: "Interview-ready in 8 weeks" },
            { num: "4.9/5", label: "Average mentor rating" },
            { num: "150+", label: "Hiring partners" },
          ].map((m, i) => (
            <div
              key={m.label}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-sm"
            >
              <div
                className="text-xl font-extrabold tracking-wide"
                style={{ color: METRIC_NUMBER_COLORS[i % METRIC_NUMBER_COLORS.length] }}
              >
                {m.num}
              </div>
              <div className="mt-1 text-xs text-zinc-700">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => {
            const tweak = IMG_TWEAKS[m.name] || "";
            return (
              <article
                key={m.name}
                className="relative rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label={`${m.name} — ${m.role}, ${m.company}`}
              >
                <div
                  className="absolute -inset-px rounded-3xl opacity-35 pointer-events-none"
                  style={{ backgroundImage: GRADIENT_OUTLINE }}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  {/* Avatar with CONSISTENT size + visible golden rim */}
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
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-zinc-700">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ background: CDPL_ORANGE }}
                        aria-hidden="true"
                      />
                      {m.domain}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[11px] text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2">
                    <div className="text-[12px] font-extrabold">★ {m.rating.toFixed(1)}</div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Avg Rating</div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2">
                    <div className="text-[12px] font-extrabold">
                      {m.sessions.toLocaleString()}+
                    </div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Sessions</div>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white px-3 py-2">
                    <div className="text-[12px] font-extrabold">Job-ready</div>
                    <div className="mt-0.5 text-[11px] text-zinc-600">Curriculum</div>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-zinc-600">
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
      btnRef.current?.focus();
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
          aria-activedescendant={`opt-${selectedIndex}`}
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
                className={`mx-1 flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-[rgba(255,140,0,.08)] ${active ? "bg-[rgba(255,140,0,.12)] font-semibold text-zinc-900" : "text-zinc-800"
                  }`}
              >
                <span className="truncate">{opt}</span>
                {active && (
                  <svg className="ml-3 h-4 w-4 text-[var(--color-brand,#ff8c00)]" viewBox="0 0 20 20" fill="currentColor">
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
