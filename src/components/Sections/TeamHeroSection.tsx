"use client";

import { Badge, fadeUp } from "@/app/our-team/ui";
import { motion, type Transition } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Users2,
  GraduationCap,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";
import { BRAND } from "@/app/our-team/data";
import Image from "next/image";
import Link from "next/link";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Stat = { label: string; value: string; note?: string };
const stats: Stat[] = [
  { label: "Expert Mentors", value: "45+", note: "QA, Automation, Data" },
  { label: "Learners Mentored", value: "1,000+", note: "Career outcomes" },
  { label: "Hiring Partners", value: "30+", note: "Industry referrals" },
];

const highlights = [
  "Project-based learning with real SDET workflows",
  "Interview prep: DSA sprints, mock interviews, feedback loops",
  "ISO-aligned curriculum & job-ready capstones",
  "Personalized learning paths & 1:1 mentor guidance",
];

const logos = [
  { src: "/images/Skill-India-Color.svg", alt: "Skill India" },
  { src: "/images/ISO-9001.png", alt: "ISO Certified" },
  { src: "/images/Testriq-Logo-1.webp", alt: "Testriq" },
  { src: "/images/github-mark.svg", alt: "GitHub Projects" },
];

/** Visibility knobs */
const VIS = {
  glowOpacity: 0.32,
  circuitOpacity: 0.28,
  strokeOpacity: 0.8,
  strokeWidth: 2,
  tokenOpacity: 0.75,
};

/** Background — mobile-safe, no horizontal overflow */
function BackgroundFuturisticMotion({ brand = "#ff8c00" }: { brand?: string }) {
  return (
    <div
      className="pointer-events-none absolute z-0 overflow-x-hidden"
      // inset:-1px absorbs blur/filter bleed so it never expands the scroll area
      style={{ inset: "-1px", mixBlendMode: "normal", contain: "layout paint" }}
      aria-hidden="true"
    >
      {/* Soft brand glow — 100% width, no vw, centered by margins */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "-12rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1200px",
          height: "58vh",
          filter: "blur(36px) saturate(1.1)",
          opacity: VIS.glowOpacity,
          background: `radial-gradient(700px 260px at 50% 0%, ${brand}99, ${brand}33 60%, transparent 78%)`,
        }}
        animate={{ y: [0, 8, -4, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Circuit lines — responsive, no fixed px width causing overflow */}
      <motion.svg
        viewBox="0 0 1400 600"
        fill="none"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          height: "46vh",
          maxHeight: 520,
          opacity: VIS.circuitOpacity,
        }}
      >
        {[
          { y: 90, amp: 18, delay: 0 },
          { y: 180, amp: 26, delay: 0.6 },
          { y: 270, amp: 14, delay: 1.2 },
          { y: 360, amp: 22, delay: 1.8 },
        ].map((row, i) => (
          <motion.path
            key={i}
            d={`M0 ${row.y} C 250 ${row.y - row.amp}, 450 ${row.y + row.amp}, 700 ${row.y}
               S 1150 ${row.y - row.amp}, 1400 ${row.y}`}
            stroke={brand}
            strokeOpacity={VIS.strokeOpacity}
            strokeWidth={VIS.strokeWidth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: row.delay,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}

        {[120, 320, 520, 820, 1080, 1280].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={i % 2 ? 180 : 270}
            r="3.5"
            fill={brand}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.2,
              delay: i * 0.25,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </motion.svg>

      {/* Floating knowledge tokens — pinned with `right` so they never extend width */}
      {[
        { txt: "</>",  right: "6%",  top: "16%", size: 48, dur: 12, rot: 22 },
        { txt: "Σ",    right: "2%",  top: "12%", size: 44, dur: 14, rot: -26 },
        { txt: "f(x)", right: "12%", top: "28%", size: 36, dur: 15, rot: 24 },
        { svg: "db",   right: "4%",  top: "38%", size: 52, dur: 13, rot: -20 },
        { svg: "cloud",right: "18%", top: "22%", size: 46, dur: 16, rot: 28 },
        { svg: "bars", right: "10%", top: "26%", size: 44, dur: 17, rot: -30 },
      ].map((t, i) => (
        <motion.div
          key={i}
          className="hidden lg:block"
          style={{
            position: "absolute",
            right: t.right as string,
            top: t.top as string,
            width: `min(${t.size}px, 16vw)`,
            height: `min(${t.size}px, 16vw)`,
            color: brand,
            opacity: VIS.tokenOpacity,
          }}
          animate={{ y: [0, 10, 0], rotate: [0, t.rot, 0] }}
          transition={{
            y: { duration: t.dur, ease: "easeInOut", repeat: Infinity },
            rotate: {
              duration: Math.abs(t.rot) + t.dur,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        >
          {t.txt ? (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <text
                x="8"
                y="44"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                fontSize={48 * 0.7}
                fill="currentColor"
              >
                {t.txt}
              </text>
            </svg>
          ) : t.svg === "db" ? (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <ellipse cx="32" cy="14" rx="18" ry="6" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M14 14 v26 c0 3.5 8 6 18 6 s18-2.5 18-6 V14" stroke="currentColor" strokeWidth="2" fill="none" />
              <ellipse cx="32" cy="40" rx="18" ry="6" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          ) : t.svg === "cloud" ? (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <path d="M18 40h28a8 8 0 0 0 0-16 12 12 0 0 0-23-3A9 9 0 1 0 18 40Z" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <rect x="12" y="30" width="8" height="18" stroke="currentColor" fill="none" strokeWidth="2" />
              <rect x="26" y="24" width="8" height="24" stroke="currentColor" fill="none" strokeWidth="2" />
              <rect x="40" y="18" width="8" height="30" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function TeamHero() {
  const brand = BRAND || "#ff8c00";

  return (
    <section
      aria-labelledby="our-team-heading"
      // overflow-x-hidden ALWAYS on the section; clip for modern engines to kill sub-pixel scroll
      className="relative isolate mx-auto max-w-7xl w-full bg-white px-4 pb-14 pt-16 sm:px-6 lg:px-8 overflow-x-hidden"
      style={{ ["--brand" as any]: brand, overflowX: "clip" as any }}
    >
      {/* Background */}
      <BackgroundFuturisticMotion brand={brand} />

      {/* Your original content */}
      <div className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li><Link href="/" className="hover:text-slate-700">Home</Link></li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li>
              <Link href="/our-team" className="font-medium text-slate-700 hover:text-slate-900">
                Our Team
              </Link>
            </li>
          </ol>
        </nav>

        <motion.div {...fadeUp} className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 border border-slate-300 rounded-2xl p-1 bg-slate-100 text-slate-800 text-xs"><Sparkles className="h-3.5 w-3.5" /> Future-Ready Mentors</div>
          <div className="hidden md:block"><ShieldCheck className="h-3.5 w-3.5" /> ISO-Aligned Training</div>
          <div className="hidden md:block"><Users2 className="h-3.5 w-3.5" /> Industry Leaders</div>
        </motion.div>

        <motion.h1
          id="our-team-heading"
          {...fadeUp}
          transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
          className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500"
        >
          Meet the People Behind <span style={{ color: brand }}>Cinute Digital</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...(fadeUp.transition as Transition), delay: 0.12 }}
          className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg"
        >
          Learn from senior <strong className="text-slate-900">Software Testing</strong>,{" "}
          <strong className="text-slate-900">Automation</strong>, and{" "}
          <strong className="text-slate-900">Data Science</strong> practitioners who ship
          production-grade solutions. Our mentor-led programs blend agile workflows, CI/CD pipelines,
          API & UI automation, and analytics so you graduate with a job-ready portfolio and
          interview-ready skills.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-800"
        >
          <GraduationCap className="h-4 w-4" />
          1,000+ learners mentored · Hiring partner referrals · Job-ready portfolios
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: easeBezier, delay: 0.22 }}
          className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
        >
          <div className="flex gap-3">
            <Link
              href="#mentors"
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              style={{ ["--brand" as any]: brand }}
            >
              Explore Mentors <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/become-a-mentor"
              className="inline-flex items-center justify-center rounded-2xl border border-brand bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
              style={{ ["--brand" as any]: brand }}
            >
              Become a Mentor
            </Link>
          </div>

          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" aria-hidden="true" />
            <span className="font-semibold text-slate-800">4.9/5</span>
            <span aria-hidden="true">·</span>
            <span>Based on verified learner reviews</span>
          </div>
        </motion.div>

        <motion.dl
          {...fadeUp}
          transition={{ duration: 0.6, ease: easeBezier, delay: 0.28 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">{s.value}</dd>
              {s.note && <p className="mt-0.5 text-xs text-slate-500">{s.note}</p>}
            </div>
          ))}
        </motion.dl>

        <motion.ul
          {...fadeUp}
          transition={{ duration: 0.6, ease: easeBezier, delay: 0.34 }}
          className="mt-8 grid gap-3 sm:grid-cols-2"
        >
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-[--brand]" style={{ ["--brand" as any]: brand }} />
              <p className="text-slate-700">{h}</p>
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: easeBezier, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-center text-sm font-medium text-slate-500">
            Trusted by industry & aligned with global standards
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-18">
            {logos.map((l) => (
              <div key={l.alt} className="relative h-8 w-28 opacity-80 transition hover:opacity-100">
                <Image src={l.src} alt={l.alt} width={100} height={100} className="object-contain" />
              </div>
            ))}
          </div>
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Cinute Digital",
              url: "https://cinutedigital.com/our-team",
              brand: { "@type": "Brand", name: "Cinute Digital", logo: "https://cinutedigital.com/logo.png" },
              department: { "@type": "Organization", name: "Mentor Network" },
              sameAs: [
                "https://www.linkedin.com/company/cinutedigital",
                "https://twitter.com/cinutedigital",
              ],
              employee: [
                { "@type": "Person", name: "Ami Khambata", jobTitle: "Lead SDET Mentor", worksFor: "Cinute Digital" },
                { "@type": "Person", name: "Rahul Verma", jobTitle: "Automation Architect", worksFor: "Cinute Digital" },
                { "@type": "Person", name: "Priya Iyer", jobTitle: "Data Science Mentor", worksFor: "Cinute Digital" },
              ],
              keywords:
                "edtech mentors, software testing mentors, automation testing trainers, SDET training, data science mentor-led program, job-ready portfolio, ISO aligned training, placement assistance",
            }),
          }}
        />
      </div>
    </section>
  );
}
