"use client";

import Link from "next/link";
import { Star } from "lucide-react";

export default function CTAJoinSection() {
  return (
    <section id="cta-join" aria-label="Join CDPL programs" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8"> {/* ↓ tighter */}
        <div className="relative isolate overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 sm:p-8 lg:p-12 shadow-[0_24px_80px_-40px_rgba(0,0,0,.35)]">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[860px] -translate-x-1/2 rounded-full bg-[var(--color-brand)]/10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-[var(--color-brand)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
                Limited seats for this cohort
              </div>

              <h2 className="mt-3 text-[22px] sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900">
                Ready to turn practice into <span className="text-[var(--color-brand)]">offers</span>?
              </h2>

              <p className="mt-2 max-w-2xl text-[13.5px] sm:text-base text-neutral-700">
                Join our hands-on programs in <span className="font-medium text-neutral-900">Testing</span>,{" "}
                <span className="font-medium text-neutral-900">Data</span>, and{" "}
                <span className="font-medium text-neutral-900">Marketing</span>. Build portfolio projects, get real feedback, and ship with confidence.
              </p>

              <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] sm:px-6 sm:py-3 sm:text-sm lg:px-7 lg:py-4 lg:text-base bg-[var(--color-brand)] text-white font-semibold shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
                >
                  Join 1000+ Successful Students
                </Link>

                <Link
                  href="#all-reviews"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-[13px] sm:px-5 sm:py-3 sm:text-sm lg:px-6 lg:py-3.5 lg:text-base font-medium text-neutral-900 transition hover:-translate-y-[1px] hover:shadow-sm"
                >
                  Read student stories
                </Link>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center gap-3 text-[12px] sm:text-xs text-neutral-600">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-brand)]" fill="currentColor" />
                  ))}
                </div>
                <span>4.8/5 average rating · Alumni at leading teams</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <StatCard kpi="1000+" label="alumni placed" />
                <StatCard kpi="94%" label="job-ready projects" />
                <StatCard kpi="6–12w" label="to first offer" />
                <StatCard kpi="1:1" label="mentor reviews" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 text-center shadow-[0_10px_30px_-20px_rgba(0,0,0,.35)]">
      <div className="text-lg sm:text-xl font-extrabold text-neutral-900">{kpi}</div>
      <div className="mt-1 text-[11px] sm:text-[12px] font-medium text-neutral-600">{label}</div>
    </div>
  );
}
