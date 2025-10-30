// components/sections/EventsPastEventsCTASection.tsx
"use client";

import { PropsWithChildren } from "react";
import { Check, Building2, Sparkles, ArrowRight } from "lucide-react";

/**
 * EventsPastEventsCTASection — Cool, clean, and delightful CTA block
 * - Full-width section, constrained content (max-w-7xl)
 * - Subtle premium look: gradient border, aurora blobs, soft grid
 * - Two-column layout (stacks on mobile)
 * - Slot for your custom CTA buttons via `children`
 * - Optional badges and bullets kept tasteful
 */

type Bullet = { label: string; sub?: string };

export default function EventsPastEventsCTASection({
  children,
  title = "Want Similar Training for Your Organization?",
  subtitle = "We’ll tailor any of these programs for your team — hands‑on, outcomes‑driven, delivered on your schedule.",
  bullets = [
    { label: "Customized curriculum", sub: "Mapped to your tools, workflows & KPIs" },
    { label: "Real project labs", sub: "Scenarios from your domain for faster transfer" },
    { label: "Reporting & outcomes", sub: "Pre/post assessments with skill deltas" },
  ],
  badges = ["On‑site", "Virtual", "Hybrid"],
}: PropsWithChildren<{
  title?: string;
  subtitle?: string;
  bullets?: Bullet[];
  badges?: string[];
}>) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Shell with gradient border using a pseudo element */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-300 via-emerald-300 to-fuchsia-300 opacity-70" />
          <div className="relative m-[1px] rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white shadow-[0_10px_40px_-10px_rgba(2,6,23,0.12)]">
            {/* Decorative layers */}
            <BackgroundDecor />

            <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
              {/* Left: Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Enterprise & High‑impact Team Upskilling</span>
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  {subtitle}
                </p>

                {/* Badges */}
                {badges?.length ? (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Bullets */}
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {bullets.map((b, i) => (
                    <li key={i} className="group relative rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:shadow-md">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-emerald-100 p-1.5 ring-1 ring-inset ring-emerald-200">
                          <Check className="h-4 w-4 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{b.label}</p>
                          {b.sub ? (
                            <p className="mt-1 text-sm text-slate-600">{b.sub}</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px translate-y-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>

                {/* Actions slot */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {children}
                  {/* Optional secondary nudge (hidden if you don’t want it) */}
                  <a
                    href="#organization-training"
                    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right: Compact offer card */}
              <aside className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-lg backdrop-blur">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-200 to-emerald-200 opacity-60 blur-2xl" />

                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-900 p-2.5 text-white">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Team Programs</p>
                      <p className="text-xs text-slate-600">For 8–300 learners</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      { h: "Discovery & skills map", p: "Align goals, roles, and impact metrics" },
                      { h: "Sprints & capstone", p: "Hands‑on labs with your stack & data" },
                      { h: "Reports & next steps", p: "Evidence of progress + hiring signals" },
                    ].map((row) => (
                      <div key={row.h} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <p className="text-sm font-medium text-slate-900">{row.h}</p>
                        <p className="text-xs text-slate-600">{row.p}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mini stats */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { k: "NPS", v: "78" },
                      { k: "Avg. uplift", v: "+42%" },
                      { k: "On‑time", v: "99%" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                        <div className="text-xs text-slate-500">{s.k}</div>
                        <div className="text-base font-semibold text-slate-900">{s.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Contact rail */}
                  <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-slate-900">Have an RFP or quick scope?</p>
                    <p className="mt-1 text-xs text-slate-600">Share timelines & goals — we’ll reply with a crisp plan.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="mailto:training@cdpl.example"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                      >
                        Start a thread
                      </a>
                      <a
                        href="#schedule"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                      >
                        Book a call
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Aurora blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,theme(colors.sky.200/.7),transparent)] blur-2xl" />
      <div className="absolute -right-16 top-12 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,theme(colors.emerald.200/.7),transparent)] blur-2xl" />

      {/* Soft grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\' width=\\'32\\' height=\\'32\\'><path d=\\'M0 31.5H32M31.5 0V32\\' stroke=\\'%23cbd5e1\\' stroke-width=\\'1\\' opacity=\\'0.7\\'/></svg>')",
        }}
      />

      {/* Top sheen */}
      <div className="absolute inset-x-0 -top-6 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 -bottom-6 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
