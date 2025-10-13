// components/Sections/JobsLiveJobsSubscribeCTASection.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export function JobsLiveJobsSubscribeCTASection() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState<null | "ok" | "err">(null);

  useEffect(() => {
    if (!ok) return;
    const t = setTimeout(() => setOk(null), 2200);
    return () => clearTimeout(t);
  }, [ok]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOk(email && email.includes("@") ? "ok" : "err");
  }

  // simple confetti points (no lib)
  const confetti = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.cos((i / 12) * Math.PI * 2),
        y: Math.sin((i / 12) * Math.PI * 2),
        r: 3 + ((i * 7) % 4),
      })),
    []
  );

  return (
    <section
      aria-labelledby="subscribe-jobs"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* top blob */}
        <div
          className="absolute left-1/2 top-[-8rem] h-48 w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 sm:h-60 sm:w-[70rem] sm:top-[-6rem]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,.22), rgba(255,184,77,.12), transparent 70%)",
          }}
        />
        {/* bottom blob */}
        <div
          className="absolute left-1/2 bottom-[-10rem] h-44 w-[38rem] -translate-x-1/2 rounded-full blur-3xl opacity-25 sm:left-1/3 sm:h-56 sm:w-[56rem] sm:bottom-[-8rem] sm:-translate-x-1/2"
          style={{
            background:
              "radial-gradient(closest-side, rgba(126,231,255,.26), rgba(157,123,255,.18), transparent 65%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:py-10">
        {/* Card with animated gradient border + subtle shine */}
        <div className="relative overflow-hidden rounded-3xl p-[1px]">
          {/* animated gradient border */}
          <div
            aria-hidden
            className="absolute inset-0 animate-[spin-slow_10s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,140,0,.45), rgba(255,184,77,.45), rgba(126,231,255,.45), rgba(157,123,255,.45), rgba(255,140,0,.45))",
              filter: "blur(0.5px)",
            }}
          />
          <div className="relative rounded-[calc(1.5rem-1px)] border border-slate-200 bg-white/80 shadow-sm backdrop-blur-md sm:p-6 p-4">
            {/* inner top shine */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,140,0,.06), rgba(255,184,77,0))",
                maskImage: "linear-gradient(black, transparent 70%)",
                WebkitMaskImage: "linear-gradient(black, transparent 70%)",
              }}
            />

            <div className="relative grid gap-5 sm:grid-cols-12">
              <div className="sm:col-span-7">
                <h3
                  id="subscribe-jobs"
                  className="text-lg font-extrabold leading-tight text-slate-900 sm:text-xl"
                >
                  Get CDPL job alerts in your inbox
                </h3>
                <p className="mt-1 max-w-2xl text-[14.5px] text-slate-600 sm:text-base">
                  Subscribe to weekly updates on{" "}
                  <strong className="text-slate-900">QA</strong>,{" "}
                  <strong className="text-slate-900">Automation</strong>,{" "}
                  <strong className="text-slate-900">Data</strong> and{" "}
                  <strong className="text-slate-900">Engineering</strong> roles.
                  No spam—just verified openings.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={onSubmit}
                className="sm:col-span-5 flex flex-col gap-2 sm:flex-row sm:items-start"
              >
                <label className="sr-only">Email</label>
                <div className="group relative w-full">
                  {/* input icon */}
                  <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path
                        d="M4 6h16v12H4z"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 7l8 6 8-6"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="min-w-0 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-orange-200"
                  />
                  {/* focus glow */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-focus-within:ring-2 group-focus-within:ring-orange-200" />
                </div>

                <button
                  type="submit"
                  className="relative w-full sm:w-auto inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform focus:outline-none focus:ring-2 focus:ring-orange-300 hover:-translate-y-[1px] hover:shadow-md"
                  style={{
                    background:
                      "linear-gradient(90deg,#ff8c00, #ffb558 50%, #ffd19e)",
                  }}
                >
                  <span className="relative z-10">Subscribe</span>
                  {/* subtle sheen */}
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 animate-[sheen_1.8s_ease_infinite] bg-white/30" />
                  </span>
                </button>

                {/* status line */}
                <p
                  aria-live="polite"
                  className="min-h-5 text-xs text-slate-600 sm:ml-2 sm:self-center"
                  role="status"
                >
                  {ok === "ok"
                    ? "Subscribed! Check your inbox."
                    : ok === "err"
                      ? "Please enter a valid email."
                      : ""}
                </p>
              </form>
            </div>

            {/* links */}
            <div className="relative mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
              <Link
                href="/placement-updates"
                className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                title="CDPL Placement Updates"
              >
                Placement Updates (archive)
              </Link>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <Link
                href="/our-placements"
                className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                title="CDPL Student Placements"
              >
                Student Placements
              </Link>
              <span className="hidden text-slate-300 sm:inline">•</span>
              <Link
                href="/career"
                className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                title="Careers at CDPL"
              >
                Careers @ CDPL
              </Link>
            </div>

            {/* confetti burst when ok */}
            {ok === "ok" && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-4 sm:pr-6">
                <svg width="120" height="120" viewBox="-60 -60 120 120">
                  {confetti.map((c) => (
                    <circle
                      key={c.id}
                      cx={c.x * 8}
                      cy={c.y * 8}
                      r={c.r}
                      className="animate-pop"
                      style={{
                        fill:
                          c.id % 3 === 0
                            ? "#ff8c00"
                            : c.id % 3 === 1
                              ? "#7ee7ff"
                              : "#9d7bff",
                        transformOrigin: "0 0",
                        animationDelay: `${c.id * 40}ms`,
                      }}
                    />
                  ))}
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes sheen {
          0% {
            transform: translateX(-40px) skewX(-15deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateX(140%) skewX(-15deg);
            opacity: 0;
          }
        }
        @keyframes pop {
          0% {
            transform: translate(0, 0) scale(0.6);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 0), var(--ty, 0)) scale(1);
            opacity: 0;
          }
        }
        .animate-pop {
          animation: pop 900ms ease-out forwards;
          --tx: 0px;
          --ty: -18px;
        }
      `}</style>
    </section>
  );
}
