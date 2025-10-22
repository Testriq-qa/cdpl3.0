"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BRAND_GRADIENT =
  "bg-gradient-to-r from-[#ff8c00] via-[#ffb558] to-[#ffd19e]";
const ACCENT_GRADIENT =
  "bg-gradient-to-r from-[#7ee7ff] to-[#9d7bff]";

export default function JobsCareersHeroSection() {
  const sprites = [
    { x: "10%", y: "10%", size: 10, d: 4.0 },
    { x: "85%", y: "18%", size: 12, d: 4.5 },
    { x: "18%", y: "65%", size: 8, d: 4.8 },
    { x: "78%", y: "72%", size: 9, d: 5.0 },
    { x: "45%", y: "12%", size: 11, d: 5.2 },
  ];

  // Careers-themed tiny vectors positioned near the edges so they don't overlap the central hero content
  const careerSprites = [
    { x: "2%", y: "8%", size: 28, d: 5.6, kind: "briefcase" as const },
    { x: "92%", y: "10%", size: 30, d: 6.0, kind: "resume" as const },
    { x: "4%", y: "82%", size: 26, d: 5.2, kind: "target" as const },
    { x: "90%", y: "78%", size: 30, d: 5.8, kind: "trophy" as const },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
      {/* Breadcrumb — nudged slightly upward; absolute so total height stays the same */}
      <nav
        aria-label="Breadcrumb"
        className="absolute inset-x-0 z-20 top-8 sm:top-10 lg:top-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li>
              <Link href="/" className="hover:text-neutral-700">Home</Link>
            </li>
            <li className="text-neutral-400" aria-hidden>/</li>
            <li>
              {/* Jobs is just a URL segment — not a link */}
              <span className="font-medium text-neutral-600">Jobs</span>
            </li>
            <li className="text-neutral-400" aria-hidden>/</li>
            <li className="font-semibold text-neutral-700" aria-current="page">
              Careers
            </li>
          </ol>
        </div>
      </nav>

      {/* Floating vector sprites — behind content but ABOVE the white background.
          Mask removes the center area so icons never overlap hero text/buttons. */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 0%, transparent 42%, black 50%)",
          maskImage:
            "radial-gradient(ellipse at center, transparent 0%, transparent 42%, black 50%)",
        }}
      >
        {sprites.map((s, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute opacity-80"
            style={{ left: s.x, top: s.y }}
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.9] }}
            transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width={s.size * 4} height={s.size * 4} viewBox="0 0 40 40" aria-hidden>
              <defs>
                <linearGradient id={`g-${i}`} x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7ee7ff" />
                  <stop offset="100%" stopColor="#9d7bff" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="8" fill={`url(#g-${i})`} />
              <path d="M30 22 l6 2 l-6 2 z" fill="#ffd19e" opacity="0.7" />
            </svg>
          </motion.div>
        ))}

        {/* Careers-themed micro icons — safely around the edges */}
        {careerSprites.map((s, i) => (
          <motion.div
            key={`career-${i}`}
            className="absolute"
            style={{ left: s.x, top: s.y }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <CareerTinyIcon index={i} kind={s.kind} size={s.size} />
          </motion.div>
        ))}
      </div>

      {/* Hero container — height unchanged */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white ${ACCENT_GRADIENT}`}
          >
            We’re hiring
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Build the future of{" "}
            <span className={`bg-clip-text text-transparent ${BRAND_GRADIENT}`}>
              outcomes-first ed-tech
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-600">
            Join CDPL to ship learner-centric experiences, accelerate career outcomes,
            and raise the bar for quality in Indian ed-tech.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#open-roles"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff8c00] hover:opacity-95"
              style={{
                background:
                  "linear-gradient(90deg, #ff8c00 0%, #ffb558 50%, #ffd19e 100%)",
              }}
            >
              View open roles
            </Link>
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition dark:text-gray-900 dark:border-gray-200 dark:hover:bg-gray-50"
            >
              About CDPL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Careers-themed tiny SVGs (briefcase, resume, target, trophy) */
function CareerTinyIcon({
  kind,
  size = 28,
  index = 0,
}: {
  kind: "briefcase" | "resume" | "target" | "trophy";
  size?: number;
  index?: number;
}) {
  const gid = `cgrad-${index}`;
  const aid = `agrad-${index}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.06))" }}
    >
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#ffd19e" />
        </linearGradient>
        <linearGradient id={aid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7ee7ff" />
          <stop offset="100%" stopColor="#9d7bff" />
        </linearGradient>
      </defs>

      {kind === "briefcase" && (
        <>
          <rect x="3" y="8" width="18" height="11" rx="2" fill={`url(#${aid})`} />
          <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" fill="none" stroke={`url(#${gid})`} strokeWidth="1.5" />
          <path d="M3 12h18" stroke={`url(#${gid})`} strokeWidth="1.5" />
          <rect x="11" y="11" width="2" height="2" rx="0.5" fill={`url(#${gid})`} />
        </>
      )}

      {kind === "resume" && (
        <>
          <rect x="5" y="3" width="14" height="18" rx="2" fill={`url(#${aid})`} />
          <path d="M9 7h6M9 10h6M9 13h4" stroke={`url(#${gid})`} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="17" r="1.2" fill={`url(#${gid})`} />
        </>
      )}

      {kind === "target" && (
        <>
          <circle cx="12" cy="12" r="7" fill="none" stroke={`url(#${aid})`} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" fill="none" stroke={`url(#${gid})`} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.2" fill={`url(#${gid})`} />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke={`url(#${aid})`} strokeWidth="1.2" strokeLinecap="round" />
        </>
      )}

      {kind === "trophy" && (
        <>
          <path d="M8 4h8v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V4z" fill={`url(#${aid})`} />
          <path d="M6 6h2a4 4 0 0 1-4 4V8a2 2 0 0 0 2-2zm12 0h2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2z" fill={`url(#${gid})`} opacity="0.9" />
          <rect x="10" y="11" width="4" height="3" rx="1" fill={`url(#${gid})`} />
          <rect x="8" y="16" width="8" height="2" rx="1" fill={`url(#${aid})`} />
        </>
      )}
    </svg>
  );
}
