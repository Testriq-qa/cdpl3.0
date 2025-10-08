// app/components/AboutMissionVision.tsx
// Light-only, minimal, accessible, SEO-friendly Mission & Vision section

import { Sparkles } from "lucide-react";
import clsx from "clsx";

type Pillar = {
  title: string;
  body: string;
  seo: string;
};

type Props = {
  className?: string;
  brand?: string; // hex, e.g. "#ff8c00"
};

const PILLARS: Pillar[] = [
  {
    title: "Empowerment",
    body:
      "Mentor-led, collaborative learning that pairs real-world practice with constructive feedback to build confidence and capability.",
    seo: "mentor-led learning, peer collaboration",
  },
  {
    title: "Readiness",
    body:
      "Job-ready training with live projects, interview preparation, and portfolio building aligned to hiring needs.",
    seo: "job-ready skills, interview preparation",
  },
  {
    title: "Innovation",
    body:
      "Continuously updated content and tools—Manual & Automation Testing, API Testing, Data, AI/ML—reflecting industry workflows.",
    seo: "industry tools, modern workflows",
  },
  {
    title: "Outcomes",
    body:
      "Placement-focused guidance, hiring partner referrals, and a clear path from practice to offers for high-growth roles.",
    seo: "career outcomes, hiring partners",
  },
];

export default function AboutMissionVision({
  className,
  brand = "#ff8c00", // warm, engaging accent; easy to tweak from parent
}: Props) {
  return (
    <section
      aria-labelledby="mission-vision-title"
      className={clsx(
        "relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
        "bg-white text-slate-900", // light theme only
        className
      )}
    >
      {/* Header */}
      <header className="mx-auto max-w-3xl text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
          style={{ borderColor: "rgba(15,23,42,0.12)" }}
        >
          <Sparkles className="h-3.5 w-3.5" style={{ color: brand }} />
          Future-Ready, Industry-Aligned Training
        </span>

        <h2
          id="mission-vision-title"
          className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Mission &amp; Vision
        </h2>

        <p className="mx-auto mt-3 text-sm leading-6 text-slate-700 sm:text-base">
          We deliver <strong>industry-aligned, mentor-led, project-based</strong> training that makes learners{" "}
          <strong>job-ready</strong> for roles in <strong>Software Testing</strong>,{" "}
          <strong>Automation</strong>, <strong>Data Science</strong>, and <strong>AI/ML</strong>. Our vision is an{" "}
          <strong>inclusive, outcomes-driven</strong> ecosystem that accelerates careers and powers innovation.
        </p>

        {/* Subtle accent rule */}
        <div
          aria-hidden="true"
          className="mx-auto mt-6 h-[2px] w-28 rounded-full"
          style={{ backgroundColor: brand, opacity: 0.9 }}
        />
      </header>

      {/* Mission & Vision */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article
          aria-labelledby="mission-heading"
          className="rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "rgba(15,23,42,0.12)" }}
        >
          <h3 id="mission-heading" className="text-lg font-semibold">
            Our Mission
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            Empower learners with <strong>real-world skills</strong> via{" "}
            <strong>live projects</strong>, <strong>mentor feedback</strong>, and{" "}
            <strong>interview preparation</strong> so they can perform from day one in{" "}
            <strong>QA/Testing</strong>, <strong>Automation</strong>, <strong>Data</strong>, and <strong>AI/ML</strong>.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Portfolio-first learning with capstones &amp; case studies
            </li>
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Manual, Automation &amp; API testing aligned to employer tooling
            </li>
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Soft-skills coaching and mock interviews
            </li>
          </ul>
        </article>

        <article
          aria-labelledby="vision-heading"
          className="rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "rgba(15,23,42,0.12)" }}
        >
          <h3 id="vision-heading" className="text-lg font-semibold">
            Our Vision
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            Build an <strong>inclusive EdTech ecosystem</strong> where <strong>lifelong learning</strong>,{" "}
            <strong>innovation</strong>, and <strong>career outcomes</strong> converge—creating talent that drives
            high-impact products and services.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Continuously current with in-demand skills &amp; certifications
            </li>
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Scalable mentor network and hiring partnerships
            </li>
            <li className="flex">
              <span className="mr-2" aria-hidden="true" style={{ color: brand }}>
                •
              </span>
              Ethics, accessibility, and community at the core
            </li>
          </ul>
        </article>
      </div>

      {/* Pillars */}
      <div className="mt-10">
        <h3 className="text-sm font-semibold">Our Pillars</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border bg-white p-5 shadow-sm"
              style={{ borderColor: "rgba(15,23,42,0.12)" }}
            >
              <h4 className="text-base font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-slate-700">{p.body}</p>
              <p className="mt-2 text-[11px] leading-4 text-slate-500">
                <span className="rounded-sm bg-slate-50 px-1.5 py-0.5">{p.seo}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values - simple chips (no heavy animation) */}
      <div className="mt-10">
        <h3 className="text-sm font-semibold">Core Values</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Industry-aligned curriculum",
            "Live projects & capstones",
            "Mentor feedback loops",
            "Ethics & quality",
            "Lifelong learning",
            "Inclusive community",
          ].map((v) => (
            <span
              key={v}
              className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
              style={{ borderColor: "rgba(15,23,42,0.12)" }}
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* SEO helper for screen readers */}
      <p className="sr-only">
        Mission and Vision of our EdTech institute: industry-aligned, mentor-led, project-based training with interview
        preparation and placement assistance for careers in Software Testing, Automation, Data Science, and AI/ML.
      </p>

      {/* Subtle top mesh (very light, non-distracting) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44"
        style={{
          background: `radial-gradient(600px 200px at 50% -20%, ${brand}14, transparent 60%)`,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />
    </section>
  );
}
