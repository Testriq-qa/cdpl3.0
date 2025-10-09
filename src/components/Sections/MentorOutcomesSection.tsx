// app/(site)/components/MentorOutcomesSection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * MentorOutcomesSection — CDPL (Light-surface only)
 * Creative UI: "Outcome Orbit"
 * - Avatars orbit a glowing ring; hover/click a node to spotlight details in the center.
 * - On small screens we show a horizontal, overlapping avatar stack.
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

const BRAND_GRADIENT =
  "linear-gradient(90deg, #ff8c00 0%, #ffb558 50%, #ffd19e 100%)";
const ACCENT_GRADIENT =
  "linear-gradient(90deg, #7ee7ff 0%, #9d7bff 100%)";

const DOMAINS = ["All", "AI / ML", "Data Science", "Full-Stack", "Cloud & DevOps", "Product"];

const CASES: Case[] = [
  {
    name: "Ananya S.",
    role: "Machine Learning Engineer",
    company: "NVIDIA",
    before: "Manual QA",
    after: "ML Engineer",
    outcome: "CTC +140% in 5 months",
    domain: "AI / ML",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop",
  },
  {
    name: "Rahul K.",
    role: "Data Scientist",
    company: "Swiggy",
    before: "Operations Analyst",
    after: "Data Scientist",
    outcome: "Offer in 10 weeks",
    domain: "Data Science",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=80&auto=format&fit=crop",
  },
  {
    name: "Meera T.",
    role: "SDE II",
    company: "Flipkart",
    before: "Frontend Dev",
    after: "SDE II",
    outcome: "Level jump + onsite",
    domain: "Full-Stack",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop",
  },
  {
    name: "Zaid I.",
    role: "DevOps Engineer",
    company: "Paytm",
    before: "SysAdmin",
    after: "DevOps",
    outcome: "K8s + Terraform in prod",
    domain: "Cloud & DevOps",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop",
  },
  {
    name: "Priya V.",
    role: "Product Manager",
    company: "Razorpay",
    before: "Business Analyst",
    after: "PM",
    outcome: "Hired via mentor referral",
    domain: "Product",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=80&auto=format&fit=crop",
  },
];

export default function MentorOutcomesSection() {
  const [tab, setTab] = useState<string>("All");
  const filteredCases = useMemo(
    () => (tab === "All" ? CASES : CASES.filter((c) => c.domain === tab)),
    [tab]
  );

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="mentor-outcomes"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      aria-labelledby="mentor-outcomes-title"
      data-theme="light"
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-28 right-[-10%] h-72 w-[44rem] rounded-full blur-[60px] opacity-20"
        style={{ background: ACCENT_GRADIENT }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-[-10%] h-72 w-[44rem] rounded-full blur-[60px] opacity-15"
        style={{ background: BRAND_GRADIENT }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h2
            id="mentor-outcomes-title"
            className="text-3xl sm:text-4xl font-extrabold leading-tight"
          >
            Proven Outcomes &{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: BRAND_GRADIENT }}
            >
              Real Placements
            </span>
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] sm:text-base text-zinc-700">
            CDPL mentorship drives tangible career moves across AI/ML, Data
            Science, Full-Stack, Cloud & DevOps, and Product with structured guidance and interview prep.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = d === tab;
            return (
              <button
                key={d}
                onClick={() => {
                  setTab(d);
                  setActiveIdx(0);
                }}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                  active
                    ? "border-zinc-300 text-zinc-900 shadow-sm"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                }`}
                style={active ? { backgroundImage: BRAND_GRADIENT } : { background: "#fff" }}
                aria-pressed={active}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* KPI Row */}
        <div className="mb-10 grid gap-3 sm:grid-cols-4">
          {[
            { num: "92%", label: "Offer rate post mock rounds" },
            { num: "3.1x", label: "Avg. salary jump (select tracks)" },
            { num: "15–60d", label: "Typical time-to-offer" },
            { num: "150+", label: "Active hiring partners" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="text-xl font-extrabold tracking-wide">{m.num}</div>
              <div className="mt-1 text-xs text-zinc-700">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Outcome Orbit */}
        <OutcomeOrbit
          cases={filteredCases}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />

        {/* Logos strip */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {["Google", "Microsoft", "Amazon", "Flipkart", "NVIDIA", "Swiggy", "Razorpay", "Paytm"].map(
              (brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-700 shadow-sm"
                >
                  <div
                    className="h-5 w-5 rounded-md"
                    style={{ backgroundImage: BRAND_GRADIENT }}
                    aria-hidden="true"
                  />
                  {brand}
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-zinc-700">
          Results vary by effort, background, and market conditions. Your CDPL mentor will map a plan that fits your goals.
        </p>
      </div>

      {/* Hidden SEO helper */}
      <div className="sr-only">
        CDPL outcomes include placements with Google, Microsoft, Amazon, Flipkart, NVIDIA, Swiggy, Razorpay, and Paytm.
        Orbit shows transitions and results across AI/ML, Data Science, Full-Stack, Cloud & DevOps, and Product.
      </div>
    </section>
  );
}

/* ============================ OutcomeOrbit ============================ */
function OutcomeOrbit({
  cases,
  activeIdx,
  setActiveIdx,
}: {
  cases: Case[];
  activeIdx: number;
  setActiveIdx: (i: number) => void;
}) {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const set = () => setIsSmall(window.innerWidth < 640);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const N = Math.max(1, cases.length);

  const positions = useMemo(() => {
    const baseAngle = -90; // start at top
    const rBase = 48; // base radius
    return cases.map((_, i) => {
      const t = N === 1 ? 0 : i / N;
      const angle = baseAngle + t * 360;
      const rad = (angle * Math.PI) / 180;
      const horizontalBoost = Math.pow(Math.abs(Math.cos(rad)), 2) * 4;
      const r = rBase + horizontalBoost;
      const cx = 50 + Math.cos(rad) * r;
      const cy = 50 + Math.sin(rad) * (r - 2);
      return { cx, cy, angle };
    });
  }, [N, cases]);

  const active = cases[Math.min(activeIdx, Math.max(0, cases.length - 1))];

  return (
    <div className="relative mx-auto grid w-full max-w-5xl place-items-center">
      <div className="relative aspect-square w-full max-w-[680px] min-w-[280px]">
        {/* Ring visuals */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="ringfill" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,140,0,0.12)" />
                <stop offset="55%" stopColor="rgba(255,140,0,0.06)" />
                <stop offset="100%" stopColor="rgba(255,140,0,0)" />
              </radialGradient>
              <linearGradient id="ringstroke" x1="0" y1="0" x2="100" y2="0">
                <stop stopColor="#ff8c00" />
                <stop offset="0.5" stopColor="#ffb558" />
                <stop offset="1" stopColor="#ffd19e" />
              </linearGradient>
            </defs>

            <circle cx="50" cy="50" r="40" fill="url(#ringfill)" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#ringstroke)"
              strokeWidth="1.6"
              className="animate-[spin_18s_linear_infinite] [stroke-dasharray:2.5_3]"
            />
          </svg>
        </div>

        {/* Center spotlight — wider & slightly higher on mobile; extra tweaks for ≤360px */}
        <div className="absolute left-1/2 top-[44%] sm:top-1/2 w-[88%] sm:w-[66%] max-w-[440px] -translate-x-1/2 -translate-y-1/2 max-[360px]:w-[92%] max-[360px]:top-[42%]">
          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-4 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            {active ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src={active.avatar}
                    alt={`${active.name} avatar`}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-black/5"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold leading-tight">
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

                <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-600">
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

        {/* MOBILE: overlapping horizontal stack (visible <sm) */}
        <div className="absolute inset-x-0 bottom-[8%] flex items-end justify-center gap-0 sm:hidden max-[360px]:bottom-[2%]">
          {cases.map((c, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={c.name + c.company + "m"}
                onClick={() => setActiveIdx(i)}
                className="relative -ml-3 first:ml-0 shrink-0 max-[360px]:-ml-2"
                style={{ zIndex: isActive ? 100 : 10 + i }}
                aria-label={`${c.name}, ${c.role} at ${c.company}`}
              >
                <span
                  className={`inline-grid w-fit place-items-center rounded-full transition-transform ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? "0 18px 36px -18px rgba(255,140,0,0.6)"
                      : "0 14px 28px -18px rgba(0,0,0,0.35)",
                    background: "white",
                  }}
                >
                  <img
                    src={c.avatar}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white max-[360px]:h-10 max-[360px]:w-10"
                    loading="lazy"
                  />
                </span>
                {/* (No mobile label by request) */}
              </button>
            );
          })}
        </div>

        {/* DESKTOP: orbiting avatars — visible from sm and up */}
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
              <span
                className={`inline-grid w-fit place-items-center rounded-full transition-transform ${
                  isActive ? "scale-[1.06]" : "scale-100"
                }`}
                style={{
                  boxShadow: isActive
                    ? "0 18px 36px -18px rgba(255,140,0,0.6)"
                    : "0 14px 28px -18px rgba(0,0,0,0.35)",
                }}
              >
                <img
                  src={c.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                  loading="lazy"
                />
              </span>

              {/* Full label on desktop */}
              <span className="mt-1 inline-block whitespace-nowrap rounded-full border border-zinc-200 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-800 shadow-sm">
                {c.role} @ {c.company}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
