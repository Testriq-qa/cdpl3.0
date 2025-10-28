"use client";

import { useMemo, useState } from "react";

/**
 * MentorOutcomesSection — polished / clean
 * - Soft ring, no dashed spinner
 * - Evenly spaced larger avatars, no external labels
 * - Balanced center card with neat spacing
 * - Tight but breathable section spacing
 */

type Case = {
  name: string;
  role: string;
  company: string;
  before: string;
  after: string;
  outcome: string;
  domain: string;
  avatar: string;
};

const BRAND = "#ff8c00";
const GRADIENT_BRAND =
  "linear-gradient(90deg, #ff8c00 0%, #ffb558 55%, #ffd19e 100%)";
const GRADIENT_ACCENT = "linear-gradient(90deg,#e0f2ff 0%,#efe9ff 100%)";

/** Updated filters per request */
const DOMAINS = ["All", "QA", "Full-Stack", "Cloud & DevOps"];

/** Anonymous fallback avatar */
const ANONYMOUS = "/placement_images/anonymous_student.png";

/**
 * Keep Jaynam Shah (has real image) — now QA
 * Add 1 QA person with real image (Shrikanth Suri — eClerx)
 * Avatars for Avdhut and Asifali set to anonymous image
 */
const CASES: Case[] = [
  {
    name: "Jaynam Shah",
    role: "QA (Business Delivery)",
    company: "IDfy",
    before: "CDPL Trainee",
    after: "Quality Assurance",
    outcome: "Joined IDfy — July 2023",
    domain: "QA",
    avatar: "/placements/Jaynam Shah.jpg",
  },
  {
    name: "Shrikanth Suri",
    role: "Junior Manual Tester",
    company: "eClerx",
    before: "CDPL Trainee",
    after: "QA / Manual Tester",
    outcome: "Hired at eClerx",
    domain: "QA",
    avatar: "/placements/Shrikanth Suri.jpg",
  },
  {
    name: "Asifali Sayed",
    role: "Full Stack Developer",
    company: "Marqetrix Web Solutions",
    before: "CDPL Trainee",
    after: "Full Stack Developer",
    outcome: "Offer at Marqetrix",
    domain: "Full-Stack",
    avatar: ANONYMOUS,
  },
  {
    name: "Avdhut Patil",
    role: "Software Deployment Executive",
    company: "Mediventurz",
    before: "CDPL Trainee",
    after: "Deployment / Ops",
    outcome: "22,000 per month",
    domain: "Cloud & DevOps",
    avatar: ANONYMOUS,
  },
];

export default function MentorOutcomesSection() {
  const [tab, setTab] = useState<string>("All");
  const filtered = useMemo(
    () => (tab === "All" ? CASES : CASES.filter((c) => c.domain === tab)),
    [tab]
  );
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="mentor-outcomes"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      aria-labelledby="mentor-outcomes-title"
    >
      {/* soft background aura */}
      <div
        className="pointer-events-none absolute -top-24 right-[-12%] h-72 w-[46rem] rounded-full blur-[70px] opacity-25"
        style={{ background: GRADIENT_ACCENT }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[-12%] h-72 w-[46rem] rounded-full blur-[70px] opacity-20"
        style={{ background: GRADIENT_BRAND }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h2
            id="mentor-outcomes-title"
            className="text-3xl font-extrabold leading-tight sm:text-4xl"
          >
            <span style={{ color: BRAND }}>Featured </span>
            Learner Outcomes {" "}
          </h2>
        </header>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = d === tab;
            return (
              <button
                key={d}
                onClick={() => {
                  setTab(d);
                  setActiveIdx(0);
                }}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${active
                  ? "border-zinc-300 text-zinc-900 shadow-sm"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                  }`}
                style={active ? { backgroundImage: GRADIENT_BRAND } : {}}
                aria-pressed={active}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* KPIs (numbers now have distinct colors per card) */}
        <div className="mb-8 grid gap-3 sm:grid-cols-4">
          {[
            { num: "92%", label: "Offer rate post mock rounds", cls: "text-orange-600" },
            { num: "3.1x", label: "Avg. salary jump (select tracks)", cls: "text-indigo-600" },
            { num: "15–60d", label: "Typical time-to-offer", cls: "text-emerald-600" },
            { num: "150+", label: "Active hiring partners", cls: "text-sky-600" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-sm"
            >
              <div className={`text-xl font-extrabold tracking-wide ${m.cls}`}>
                {m.num}
              </div>
              <div className="mt-1 text-xs text-zinc-700">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Orbit */}
        <Orbit
          cases={filtered}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />

        {/* Brand strip */}
        <BrandMarquee />
        <p className="mt-4 text-center text-xs text-zinc-700">
          Results vary by effort, background, and market conditions. Your CDPL
          mentor will map a plan that fits your goals.
        </p>
      </div>

      <div className="sr-only">
        CDPL outcomes include placements with technoscripts, jm-financial,
        vistaar, sp-ultraflex, marqetrix, raw-engineering, galentic,
        tech-cryptors, axiom, medi-venturz, aryan-technologies, credility,
        idfy, and testriq.
      </div>
    </section>
  );
}

/* ============================ BrandMarquee ============================ */
function BrandMarquee() {
  // pause/resume on hover OR click
  const [paused, setPaused] = useState(false);
  const toggleClickPause = () => setPaused((p) => !p);

  // source: 14 logos from your Elementor carousel
  const BRANDS = [
    {
      name: "Technoscripts",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006266.webp",
    },
    {
      name: "JM-Financial",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006267.webp",
    },
    {
      name: "Vistaar",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006278.webp",
    },
    {
      name: "SP-Ultraflex",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006279.webp",
    },
    {
      name: "Marqetrix",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006280.webp",
    },
    {
      name: "Raw-Engineering",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006281.webp",
    },
    {
      name: "Galentic",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006282.webp",
    },
    {
      name: "Tech-Cryptors",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006283.webp",
    },
    {
      name: "Axiom",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006284.webp",
    },
    {
      name: "Medi-Venturz",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006285.webp",
    },
    {
      name: "Aryan-Technologies",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006286.webp",
    },
    {
      name: "Credility",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006287.webp",
    },
    {
      name: "IDfy",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006289.webp",
    },
    {
      name: "Testriq",
      logo:
        "https://cinutedigital.com/wp-content/uploads/2024/06/Group-1000006290.webp",
    },
  ];

  // duplicate once for seamless loop
  const scrollingList = [...BRANDS, ...BRANDS];

  // keyboard accessibility for pause on Enter/Space
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleClickPause();
    }
  };

  return (
    <>
      <div
        className="group relative mt-8 select-none overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50/60 to-orange-100/40 p-2"
        role="region"
        aria-label="Hiring partners carousel"
      >
        <div
          className="marquee-track flex w-[200%] items-center gap-4"
          style={{ animationPlayState: paused ? "paused" : "running" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={toggleClickPause}
          onKeyDown={onKeyDown}
          tabIndex={0}
          aria-roledescription="marquee"
          aria-live="off"
        >
          {scrollingList.map((brand, i) => (
            <div
              key={brand.name + i}
              className="flex min-w-52 max-w-60 flex-none items-center gap-3 rounded-2xl bg-white/80 px-4 py-2 shadow-sm ring-1 ring-zinc-200 backdrop-blur"
              title={brand.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-7 w-7 flex-none rounded-md object-contain"
                loading="lazy"
              />
              <span className="block w-full truncate text-sm font-semibold text-zinc-800">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* subtle gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-orange-50/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-orange-50/90 to-transparent" />
      </div>

      {/* marquee styles */}
      <style jsx>{`
        .marquee-track {
          /* Move LEFT -> RIGHT continuously */
          animation: marquee-ltr 28s linear infinite;
          will-change: transform;
        }
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </>
  );
}

/* ============================ Orbit ============================ */
function Orbit({
  cases,
  activeIdx,
  setActiveIdx,
}: {
  cases: Case[];
  activeIdx: number;
  setActiveIdx: (i: number) => void;
}) {
  const N = Math.max(1, cases.length);

  // even distribution around a slightly smaller radius to reduce empty center
  const positions = useMemo(() => {
    const r = 40; // cleaner, closer circle
    const start = -90; // top
    return new Array(N).fill(0).map((_, i) => {
      const angle = start + (360 / N) * i;
      const rad = (angle * Math.PI) / 180;
      return {
        cx: 50 + Math.cos(rad) * r,
        cy: 50 + Math.sin(rad) * (r - 1.5),
      };
    });
  }, [N]);

  const active = cases[Math.min(activeIdx, Math.max(0, N - 1))];

  return (
    <div className="relative mx-auto grid w-full max-w-5xl place-items-center">
      <div className="relative aspect-square w-full min-w-[280px] max-w-[680px]">
        {/* Soft ring */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="o-fill" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,140,0,0.10)" />
                <stop offset="55%" stopColor="rgba(255,140,0,0.05)" />
                <stop offset="100%" stopColor="rgba(255,140,0,0)" />
              </radialGradient>
              <linearGradient id="o-stroke" x1="0" y1="0" x2="100" y2="0">
                <stop stopColor="#ffd8b0" />
                <stop offset="1" stopColor="#ffe8cb" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38.5" fill="url(#o-fill)" />
            <circle
              cx="50"
              cy="50"
              r="38.5"
              fill="none"
              stroke="url(#o-stroke)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[420px] -translate-x-1/2 -translate-y-1/2 sm:w-[66%]">
          <div className="rounded-3xl border border-zinc-200 bg-white/95 p-4 shadow-[0_22px_50px_-30px_rgba(2,6,23,0.45)] backdrop-blur">
            {active ? (
              <>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={active.avatar}
                    alt={`${active.name} avatar`}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-extrabold leading-tight">
                      {active.name} — {active.role}
                    </div>
                    <div className="text-xs text-zinc-700">{active.company}</div>
                  </div>
                </div>

                <dl className="mt-3 grid gap-1.5 text-[12px] text-zinc-800">
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">Before</dt>
                    <dd>{active.before}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">After</dt>
                    <dd>{active.after}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">Outcome</dt>
                    <dd className="font-semibold">{active.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-zinc-600">
                  <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5">
                    {active.domain}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span>CDPL Mentorship</span>
                </div>
              </>
            ) : (
              <div className="text-center text-sm text-zinc-700">
                No outcomes in this track yet.
              </div>
            )}
          </div>
        </div>

        {/* MOBILE: small stacked avatars at bottom */}
        <div className="absolute inset-x-0 bottom-[8%] flex items-end justify-center gap-1.5 sm:hidden">
          {cases.map((c, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={c.name + c.company + "m"}
                onClick={() => setActiveIdx(i)}
                className="relative"
                aria-label={`${c.name}, ${c.role} at ${c.company}`}
                style={{ zIndex: isActive ? 100 : 10 + i }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.avatar}
                  alt=""
                  className={`h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform ${isActive ? "scale-105" : "scale-100"
                    }`}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>

        {/* DESKTOP: clean orbiting avatars (no labels) */}
        {cases.map((c, i) => {
          const { cx, cy } = positions[i];
          const isActive = i === activeIdx;
          return (
            <button
              key={c.name + c.company}
              onMouseEnter={() => setActiveIdx(i)}
              onFocus={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
              className="hidden sm:block sm:absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${cx}%`, top: `${cy}%` }}
              aria-label={`${c.name}, ${c.role} at ${c.company}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.avatar}
                alt=""
                className={`h-16 w-16 rounded-full object-cover ring-2 ring-white shadow-md transition-transform ${isActive ? "scale-[1.06]" : "scale-100"
                  }`}
                loading="lazy"
                style={{
                  boxShadow: isActive
                    ? "0 20px 38px -20px rgba(255,140,0,0.35)"
                    : "0 16px 32px -22px rgba(2,6,23,0.35)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
