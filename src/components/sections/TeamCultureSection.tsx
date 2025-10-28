// =============================
// components/our-team/CultureValuesBand.tsx
// Futuristic, mentor-forward band for the Our Team page
// Light theme • Brand color: #ff8c00 • Next.js + Tailwind + TypeScript
// =============================
"use client";

import { useMemo } from "react";
import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  Users2,
  ShieldCheck,
  BookOpen,
  Target,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const BRAND = "#ff8c00"; // Cinute Digital brand

// ---------------------------------------------
// Color map (static Tailwind classes – no string interpolation)
// ---------------------------------------------
type PaletteKey = "red" | "blue" | "green" | "purple";

const PALETTE: Record<
  PaletteKey,
  {
    cardBg: string;
    cardBorder: string;
    iconWrapBg: string;
    iconColor: string;
    accentText: string;
    bullet: string;
  }
> = {
  red: {
    cardBg: "bg-red-50",
    cardBorder: "border-red-500",
    iconWrapBg: "bg-red-600",
    iconColor: "text-white",
    accentText: "text-red-700",
    bullet: "bg-red-600",
  },
  blue: {
    cardBg: "bg-blue-50",
    cardBorder: "border-blue-500",
    iconWrapBg: "bg-blue-600",
    iconColor: "text-white",
    accentText: "text-blue-700",
    bullet: "bg-blue-600",
  },
  green: {
    cardBg: "bg-green-50",
    cardBorder: "border-green-500",
    iconWrapBg: "bg-green-600",
    iconColor: "text-white",
    accentText: "text-green-700",
    bullet: "bg-green-600",
  },
  purple: {
    cardBg: "bg-purple-50",
    cardBorder: "border-purple-500",
    iconWrapBg: "bg-purple-600",
    iconColor: "text-white",
    accentText: "text-purple-700",
    bullet: "bg-purple-600",
  },
};

// ---------------------------------------------
// Data (tokenized colors → map to Tailwind classes above)
// ---------------------------------------------
const specialties: Array<{
  title: string;
  desc: string;
  icon: ElementType;
  tags: string[];
  tone: PaletteKey;
}> = [
  {
    title: "Manual & Automation Testing",
    desc: "Selenium, Playwright, Cypress, and BDD frameworks aligned with enterprise QA.",
    icon: ShieldCheck,
    tags: ["Selenium", "Playwright", "Cypress", "BDD", "Jest"],
    tone: "red",
  },
  {
    title: "API Testing & Tooling",
    desc: "Postman, REST & GraphQL testing, contract tests, and CI automation.",
    icon: BookOpen,
    tags: ["Postman", "REST", "GraphQL", "Newman", "Pact"],
    tone: "blue",
  },
  {
    title: "Performance & Reliability",
    desc: "Load, stress, and soak testing with stakeholder-ready reporting.",
    icon: Target,
    tags: ["k6", "JMeter", "APM", "SLOs"],
    tone: "green",
  },
  {
    title: "Data & GenAI in QA",
    desc: "Data validation, test data design, and safe GenAI-assisted authoring.",
    icon: Cpu,
    tags: ["Python", "Pandas", "Prompting", "RAG", "Security"],
    tone: "purple",
  },
];

// =============================
// Component
// =============================
export default function TeamCultureSection() {
  const marquee = useMemo(
    () => ["Skill India", "ISO 9001", "Hiring Partners", "Industry Projects", "Interview Prep"],
    []
  );

  return (
    <section
      id="our-team-mentors"
      aria-labelledby="our-team-mentors-heading"
      className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated mesh / beam background */}
      <BeamBg />

      {/* Header (centered) */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="our-team-mentors-heading"
            className="text-4xl font-bold tracking-tight text-slate-900 text-center"
          >
            The People Behind{" "}
            <span style={{ color: BRAND }}>Job-Ready</span> Careers
          </h2>

          <p className="mt-8 max-w-5xl text-lg leading-6 text-slate-700 text-center">
            Learn from <strong>industry-certified QA mentors</strong>,{" "}
            <strong>automation testing trainers</strong>, and
            <strong> API testing experts</strong> who ship real products. Human feedback,
            portfolio-first projects, and
            <strong> recruiter-ready outcomes</strong>.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge>
            <Award className="h-3.5 w-3.5" /> ISO-aligned
          </Badge>
          <Badge>
            <Handshake className="h-3.5 w-3.5" /> Hiring Network
          </Badge>
          <Badge>
            <Sparkles className="h-3.5 w-3.5" /> Live Projects
          </Badge>
          <Badge>
            <Users2 className="h-3.5 w-3.5" /> 1:1 Mentorship
          </Badge>
        </div>
      </div>

      {/* Rolling marquee — subtle credibility loop */}
      <div className="relative z-10 mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur">
        <motion.div
          className="flex gap-8 whitespace-nowrap text-xs text-slate-600"
          animate={{ x: [0, -240] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          aria-hidden
        >
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
              {m}
            </span>
          ))}
        </motion.div>
      </div>

      {/* KPI band */}
      <div
        className="relative z-10 mt-6 grid grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3"
        style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.18)" }}
      >
        <div className="text-center rounded-2xl shadow-xl p-1 border border-pink-700">
          <p className="text-3xl font-bold text-pink-700">20k+</p>
          <p className="text-slate-700">Learners Trained</p>
        </div>

        <div className="text-center rounded-2xl shadow-xl p-1 border border-purple-700">
          <p className="text-3xl font-bold text-purple-700">250+</p>
          <p className="text-slate-700">Hiring Partner Referrals</p>
        </div>

        <div className="text-center rounded-2xl shadow-xl p-1 border border-red-700">
          <p className="text-3xl font-bold text-red-700">4</p>
          <p className="text-slate-700">Job-Aligned Tracks</p>
        </div>
      </div>

      {/* Specialties — holographic grid */}
      <div className="relative z-10 mt-14 text-center">
        <h3 className="text-2xl font-bold text-slate-900">What Our Team Teaches</h3>
        <p className="mt-5 text-lg text-slate-700">
          <strong>Automation testing trainers</strong>, <strong>API testing mentors</strong>, and
          <strong> performance engineering experts</strong> deliver hands-on, recruiter-trusted skills.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {specialties.map((s) => {
            const c = PALETTE[s.tone];
            return (
              <article
                key={s.title}
                className={[
                  "rounded-2xl border p-5 shadow-sm",
                  c.cardBg,
                  c.cardBorder,
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "grid h-9 w-9 place-items-center rounded-md ring-1",
                      c.iconWrapBg,
                      c.cardBorder,
                    ].join(" ")}
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(15,23,42,0.03), 0 8px 20px -12px rgba(15,23,42,0.16)",
                    }}
                    aria-hidden="true"
                  >
                    <s.icon className={["h-5 w-5", c.iconColor].join(" ")} />
                  </span>

                  <div className="text-left">
                    <h4 className="text-xl font-bold text-slate-900">{s.title}</h4>
                    <p className="mt-3 text-md text-slate-700">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                          style={{
                            boxShadow: "0 6px 16px -10px rgba(0,0,0,0.12)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg sm:p-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-slate-900">Book a free career consultation</h3>
            <p className="mt-2 text-slate-600">
              Speak with a mentor about learning paths, real projects, and{" "}
              <span className="font-semibold text-slate-900">placement support</span>.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="flex items-center rounded-xl bg-orange-500 p-3 text-white shadow-lg transition-all hover:translate-y-1 hover:bg-orange-600"
            >
              Talk to a mentor <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/programs"
              className="flex items-center rounded-xl border-2 bg-white p-3 text-slate-900 transition-all ease-in-out"
              style={{
                borderColor: BRAND,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND;
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "";
                (e.currentTarget as HTMLAnchorElement).style.color = "";
              }}
            >
              Explore programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================
// UI helpers
// =============================
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
      style={{ boxShadow: "0 6px 16px -10px rgba(0,0,0,0.2)" }}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />
      {children}
    </span>
  );
}

// Animated beam / gradient mesh background
function BeamBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% -10%, rgba(255,140,0,0.06) 0%, rgba(255,140,0,0) 60%)",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-[-40px] h-40 w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(255,140,0,0.18)" }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-24 h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(255,179,106,0.35)" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
}
