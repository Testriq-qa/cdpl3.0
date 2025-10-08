// app/components/AboutFacultyStrip.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";
import {
  Users,
  ShieldCheck,
  Brain,
  Bot,
  FlaskConical,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Mentor = {
  name: string;
  role: string;
  avatar: string;
  experience?: string; // "12+ yrs"
  tag?: "QA" | "Data" | "Automation" | "AI/ML";
  desc: string;
};

type Props = {
  className?: string;
  brand?: string; // single accent; defaults to warm, engaging orange
  mentors?: Mentor[];
  heading?: string;
  subheading?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

const DEFAULT_MENTORS: Mentor[] = [
  { name: "A. Sharma", role: "Senior QA Lead", avatar: "/images/ami-khambata.png", experience: "12+ yrs", tag: "QA", desc: "A. Sharma is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
  { name: "R. Patel", role: "Data Scientist", avatar: "/images/ami-khambata.png", experience: "10+ yrs", tag: "Data", desc: "A. Sharma is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
  { name: "S. Iyer", role: "Automation Architect", avatar: "/images/ami-khambata.png", experience: "11+ yrs", tag: "Automation", desc: "A. Sharma is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
  { name: "N. Khan", role: "AI/ML Engineer", avatar: "/images/ami-khambata.png", experience: "9+ yrs", tag: "AI/ML", desc: "A. Sharma is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
];

export default function AboutFacultyStrip({
  className,
  brand = "#ff8c00",
  mentors = DEFAULT_MENTORS,
  heading = "Learn from Practitioners",
  subheading = "10+ years average experience across Software Testing, Automation, Data Science & AI/ML.",
  primaryCtaHref = "/mentors",
  secondaryCtaHref = "/become-a-mentor",
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Cinute Digital",
    department: {
      "@type": "Organization",
      name: "Faculty & Mentors",
      member: mentors.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
      })),
    },
  };

  const TagIcon = ({ tag }: { tag?: Mentor["tag"] }) => {
    const common = "h-3.5 w-3.5";
    switch (tag) {
      case "QA":
        return <ShieldCheck className={common} aria-hidden="true" />;
      case "Data":
        return <FlaskConical className={common} aria-hidden="true" />;
      case "Automation":
        return <Users className={common} aria-hidden="true" />;
      case "AI/ML":
        return <Bot className={common} aria-hidden="true" />;
      default:
        return <Brain className={common} aria-hidden="true" />;
    }
  };

  return (
    <section
      aria-labelledby="faculty-strip-title"
      className={clsx(
        "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
        "bg-white text-slate-900",
        className
      )}
    >
      {/* Subtle top gradient wash (very light, non-distracting) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background: `radial-gradient(800px 200px at 50% -20%, ${brand}12, transparent 65%)`,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />

      {/* Header */}
      <header className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-4 w-4" style={{ color: brand }} />
          <span className="text-xs font-medium text-slate-700">
            Industry-Aligned Mentors
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="faculty-strip-title"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {heading}
            </h2>
            <p className="mt-1 max-w-[65ch] text-sm text-slate-600 sm:text-base">
              {subheading}
            </p>
          </div>

          {/* CTAs — minimal, accessible focus rings */}
          <div className="flex gap-2 pt-1">
            <a
              href={primaryCtaHref}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-slate-900 shadow-sm transition"
              style={{
                background: `linear-gradient(90deg, ${brand} , ${withAlpha(brand, 0.9)})`,
              }}
            >
              Meet the Mentors
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={secondaryCtaHref}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-sm font-medium text-slate-900",
                "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              )}
              style={{
                borderColor: "rgba(15,23,42,0.12)",
                // accessible focus ring in brand color
                boxShadow: "none",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.setProperty(
                  "box-shadow",
                  `0 0 0 2px ${withAlpha(brand, 0.35)}, 0 0 0 4px white`
                );
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.removeProperty("box-shadow");
              }}
            >
              Become a Mentor
            </a>
          </div>
        </div>

        {/* Accent rule */}
        <div
          aria-hidden="true"
          className="mt-6 h-[2px] w-16 rounded-full"
          style={{ backgroundColor: brand }}
        />
      </header>

      {/* Mentors grid */}
      <ul
        className="grid gap-4 grid-cols-1 md:grid-cols-2"
        role="list"
        aria-label="Mentors and faculty"
      >
        {mentors.map((m) => (
          <li key={m.name}>
            <article
              className={clsx(
                "group relative flex items-center gap-4 rounded-3xl border bg-white p-4 shadow-sm",
                "transition-transform duration-150 hover:-translate-y-0.5"
              )}
              style={{ borderColor: "rgba(15,23,42,0.12)" }}
            >
              {/* Avatar with subtle gradient halo */}
              <figure
                className="relative h-40 w-40 shrink-0 rounded-2xl p-[2px]"
                aria-labelledby={`${slugify(m.name)}-name`}
                aria-describedby={`${slugify(m.name)}-role`}
                
              >
                <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-white">
                  <Image
                    src={m.avatar}
                    alt={`${m.name}, ${m.role}`}
                    width={200}
                    height={100}
                    className="object-cover"
                    
                    priority={false}
                  />
                </div>
              </figure>

              {/* Text */}
              <div className="min-w-0">
                <h3
                  id={`${slugify(m.name)}-name`}
                  className="truncate font-medium text-slate-900"
                >
                  {m.name}
                </h3>
                <p
                  id={`${slugify(m.name)}-role`}
                  className="mt-0.5 line-clamp-2 text-xs text-slate-600"
                >
                  {m.role}
                  {m.experience ? (
                    <>
                      {" "}
                      ·{" "}
                      <span className="font-medium" style={{ color: brand }}>
                        {m.experience}
                      </span>
                    </>
                  ) : null}
                </p>

                {/* Tag chip with tiny icon */}
                {m.tag && (
                  <span
                    className="mt-2 inline-flex items-center gap-1.5 rounded-full border bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    style={{ borderColor: "rgba(15,23,42,0.10)" }}
                  >
                    <TagIcon tag={m.tag} />
                    {m.tag}
                  </span>
                )}

                <p className="text-sm mt-2">{m.desc}</p>
              </div>

              {/* Corner pixel accent */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-sm opacity-90"
                style={{ backgroundColor: brand }}
              />
            </article>
          </li>
        ))}
      </ul>

      {/* SEO helper for screen readers */}
      <p className="sr-only">
        Expert mentors with real-world experience in Software Testing, Automation Testing, API Testing, Data Science, and
        AI/ML lead our job-ready, industry-aligned training with portfolio-first projects and interview preparation.
      </p>

      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* ---------- Utilities ---------- */

function slugify(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Convert hex like #ff8c00 to rgba with alpha (0..1). */
function withAlpha(hex: string, alpha = 1): string {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
