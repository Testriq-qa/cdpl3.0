"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Building2,
  BadgeCheck,
  TrendingUp,
  Trophy,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BRAND_ORANGE_GRAD =
  "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)";

function FloatingIcon({
  children,
  className,
  x,
  y,
  size = 28,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute select-none ${className || ""}`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 6, rotate: -2 }}
      animate={{ opacity: 1, y: [0, -8, 0, 6, 0], rotate: [-2, 2, -1, 2, -2] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="rounded-xl border backdrop-blur-md bg-white/75 border-white/60 shadow-sm"
        style={{ width: size + 14, height: size + 14 }}
      >
        <div className="grid h-full place-items-center">{children}</div>
      </div>
    </motion.div>
  );
}

export default function PlacementsHeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white text-slate-900"
      aria-label="CDPL student placements hero section"
    >
      {/* Background wash (full-bleed) */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
      </div>

      {/* Decorative layer (no pointer events) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <FloatingIcon x="6%" y="9%" className="hidden min-[1040px]:grid">
          <Briefcase className="h-6 w-6 text-[#6aa9ff]" />
        </FloatingIcon>

        <FloatingIcon x="40%" y="6%" className="hidden min-[1040px]:grid">
          <BadgeCheck className="h-6 w-6 text-[#7ee7ff]" />
        </FloatingIcon>

        <FloatingIcon x="28%" y="14%" className="hidden min-[1040px]:grid">
          <Building2 className="h-6 w-6 text-[#6aa9ff]" />
        </FloatingIcon>

        <FloatingIcon x="69%" y="12%" className="hidden min-[1040px]:grid">
          <TrendingUp className="h-6 w-6 text-[#b0b9ff]" />
        </FloatingIcon>

        {/* right:9% ≈ left:91% */}
        <FloatingIcon x="91%" y="8%" className="hidden min-[1040px]:grid">
          <Trophy className="h-6 w-6 text-[#9d7bff]" />
        </FloatingIcon>

        {/* right:13% ≈ left:87% */}
        <FloatingIcon x="87%" y="26%" className="hidden min-[1040px]:grid">
          <MapPin className="h-6 w-6 text-[#7ee7ff]" />
        </FloatingIcon>

        {/* Ambient sweeping lines */}
        <svg className="absolute left-0 top-0 h-full w-full">
          <defs>
            <linearGradient id="cdpl-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(14,165,233,0)" />
              <stop offset="50%" stopColor="rgba(14,165,233,0.22)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0)" />
            </linearGradient>
          </defs>
          {[0, 90, 180, 270].map((y, i) => (
            <g key={i} transform={`translate(0, ${y})`}>
              <rect x="-45%" y="0" width="90%" height="1.5" fill="url(#cdpl-line)">
                <animate attributeName="x" values="-45%;65%;-45%" dur={`${14 + i * 2}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
        </svg>
      </div>

      {/* SINGLE CONTAINER (breadcrumb + hero) — matches MentorHeroSection */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb — keep position as-is */}
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700">Home</Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            {/* Jobs is now not clickable */}
            <li>
              <span className="font-medium text-slate-700">Jobs</span>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li aria-current="page" className="font-semibold text-slate-900">
              Placements
            </li>
          </ol>
        </nav>

        {/* Use gradient constant once (no visual change, satisfies linter) */}
        <span className="sr-only" style={{ backgroundImage: BRAND_ORANGE_GRAD }} />

        {/* Hero grid — same vertical rhythm as Mentor */}
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT — text */}
          <div className="order-1 text-center lg:order-1 lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-3 py-1 text-sm bg-white/85 backdrop-blur-md text-gray-800"
            >
              <Sparkles className="h-4 w-4 text-[#6aa9ff]" />
              <span>Real Hiring Outcomes</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            >
              CDPL Student{" "}
              <span style={{ color: "var(--color-brand, #ff8c00)" }}>
                Placements
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="mt-4 mx-auto max-w-3xl text-base text-slate-700 sm:text-lg lg:mx-0"
            >
              Explore roles, companies, locations, and success stories from learners across{" "}
              <strong className="text-slate-900">QA Automation</strong>,{" "}
              <strong className="text-slate-900">Data</strong>,{" "}
              <strong className="text-slate-900">Full-Stack</strong>, and{" "}
              <strong className="text-slate-900">Cloud/DevOps</strong> programs by
              Cinute Digital Pvt Ltd (CDPL).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-2 text-slate-700 ring-1 ring-slate-200">
                <Briefcase className="h-4 w-4" /> 1000+ Offers
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 text-sky-700 ring-1 ring-sky-200">
                <GraduationCap className="h-4 w-4" /> Mentor-led
              </span>
            </motion.div>
          </div>

          {/* RIGHT — image (pulled up to align with text) */}
          <div className="order-2 flex items-center justify-center lg:order-2 lg:justify-end mt-0 lg:mt-0 -translate-y-2 sm:-translate-y-3 lg:-translate-y-4">
            <Image
              src="/placement_images/placements_hero.png"
              alt="CDPL Student Placements illustration — partner companies & verified outcomes"
              width={1280}
              height={960}
              className="
                w-full h-auto
                max-w-[28rem] sm:max-w-[34rem]
                lg:min-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem]
                rounded-2xl
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
