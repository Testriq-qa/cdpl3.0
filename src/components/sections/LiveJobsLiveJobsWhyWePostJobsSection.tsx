"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users2, Rocket, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

/**
 * Non-hero typography aligned (no arbitrary px):
 * - Section H2 (non-hero): text-3xl sm:text-4xl font-extrabold text-slate-900
 * - Lead paragraph: text-lg (18px) text-slate-700
 * - KPI numbers: text-xl font-extrabold text-slate-900
 * - Card title: text-base (16px) font-extrabold text-slate-900
 * - Card body/points: text-sm (14px) text-slate-700
 * - Eyebrow/badges: text-xs
 */

type Pillar = {
  key: string;
  title: string;
  desc: string;
  points: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const PILLARS: Pillar[] = [
  {
    key: "verified",
    title: "Verified Listings",
    desc:
      "We publish only curated, verified job openings so students don’t waste time on stale or ambiguous posts.",
    points: [
      "Human-verified company details & role expectations",
      "Clear application links and walk-in timing windows",
      "Locality tags so you can filter by nearby roles",
    ],
    Icon: ShieldCheck,
  },
  {
    key: "mentor",
    title: "Mentor Help",
    desc:
      "Mentors help you tailor resumes, align projects to job JD, and prep with the right problem-sets.",
    points: [
      "Resume + LinkedIn review for role keywords",
      "Portfolio/project mapping to JD requirements",
      "Mock interviews: QA automation, Data, Full-Stack, DevOps",
    ],
    Icon: Users2,
  },
  {
    key: "faster",
    title: "Faster Referrals",
    desc:
      "CDPL partners with hiring teams; qualified learners get faster callbacks and interview slots.",
    points: [
      "Partner-driven hotlists for urgent roles",
      "Shortlist nudges after assignment reviews",
      "Interview readiness checklist before you apply",
    ],
    Icon: Rocket,
  },
];

export default function JobsLiveJobsWhyWePostJobsSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <section aria-labelledby="why-cdpl-posts-jobs" className="relative overflow-hidden bg-white font-sans">
      {/* Brand wash + flare */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg, rgba(125,211,252,.18), rgba(157,123,255,.16))",
          }}
        />
        <div
          className="absolute left-1/2 top-[-12rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl opacity-70"
          style={{
            background: "radial-gradient(closest-side, rgba(255,140,0,.20), rgba(255,140,0,0))",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Eyebrow */}
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
          <Sparkles className="h-3.5 w-3.5 text-orange-500" />
          Why we post nearby jobs for CDPL students
        </p>

        {/* H2 + intro */}
        <div className="max-w-3xl">
          <h2
            id="why-cdpl-posts-jobs"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl"
          >
            Why CDPL posts <span className="text-[#ff8c00]">verified nearby jobs</span> for students
          </h2>
          {/* Lead paragraph must be 18px -> text-lg */}
          <p className="mt-3 text-lg text-slate-700">
            We make job search simpler: CDPL curates active roles across{" "}
            <strong className="text-slate-900">QA Automation</strong>,{" "}
            <strong className="text-slate-900">Data Science</strong>,{" "}
            <strong className="text-slate-900">Full-Stack</strong> and{" "}
            <strong className="text-slate-900">DevOps</strong>, and pairs them with mentor guidance
            and hiring-partner referrals—so you can apply confidently and get to interview faster.
          </p>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["45+", "Expert mentors"],
            ["1,000+", "Learners guided"],
            ["30+", "Hiring partners"],
            ["4.9/5", "Avg. mentor rating"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div
                className="mx-auto h-1 w-16 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #ff8c00, #ffd19e)",
                }}
              />
              <p className="mt-3 text-xl font-extrabold text-slate-900">{v}</p>
              <p className="text-sm text-slate-600">{l}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ key, title, desc, points, Icon }) => {
            const isOpen = !!open[key];
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5"
              >
                {/* brand veil */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,140,0,.08), rgba(255,140,0,0))",
                    maskImage: "linear-gradient(black, transparent 65%)",
                    WebkitMaskImage: "linear-gradient(black, transparent 65%)",
                  }}
                />
                <div className="flex items-start gap-3">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                      boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)",
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#ff8c00" }} />
                  </div>
                  <div className="min-w-0">
                    {/* Card title -> 16px */}
                    <h3 className="text-base font-extrabold leading-snug text-slate-900">{title}</h3>
                    {/* Card body -> 14px */}
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
                  </div>
                </div>

                {/* Expand */}
                <button
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className="mt-3 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200"
                >
                  Details
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <motion.ul
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    {points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-slate-700">
                        • {p}
                      </li>
                    ))}
                  </div>
                </motion.ul>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA Row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/jobs/live-jobs"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
          >
            Explore nearby jobs <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm"
          >
            Get mentor help
          </Link>
        </div>
      </div>

      {/* SEO list */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Why CDPL posts verified nearby jobs",
            itemListElement: PILLARS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              description: p.desc,
            })),
          }),
        }}
      />
    </section>
  );
}
