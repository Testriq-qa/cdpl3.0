"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { Rocket, Users, Sparkles, Quote } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  text: string;
};

// Opaque, visible colors (no alpha fades)
const ACCENT = "#6366f1";        // indigo-500
const ACCENT_LIGHT = "#e0e7ff";  // indigo-100
const ACCENT_RING = "#c7d2fe";   // indigo-200
// const ACCENT_ALT = "#93c5fd";    // sky-300 (opaque)
const SHADOW = "0 16px 38px -16px rgba(99,102,241,0.6)"; // shadow for depth (not a fade overlay)

const AboutStorySection = memo(function AboutStorySection() {
  const milestones: Milestone[] = useMemo(
    () => [
      { year: "2020", title: "The Spark", text: "Launched with a vision to revolutionize tech education." },
      { year: "2022", title: "Scaling Impact", text: "Expanded to include AI/ML and Automation pathways." },
      { year: "2025", title: "Global Reach", text: "Empowering 20k+ learners with innovative learning tools." },
    ],
    []
  );

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": ["Organization", "EducationalOrganization"],
      name: "Cinute Digital",
      url: "https://cinutedigital.com",
      description:
        "Cinute Digital is an ed-tech institute offering mentor-led, project-based programs in Software Testing, Automation, Data Science, and AI/ML.",
      keywords:
        "ed-tech institute, software testing course, automation testing training, data science program, AI ML certification, job-ready skills, mentor-led learning",
      areaServed: "Global",
      brand: { "@type": "Brand", name: "Cinute Digital" },
    }),
    []
  );

  return (
    <section
      aria-labelledby="about-story-heading"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* No background textures, no meshes, no conic/blur/masks */}

      {/* Header */}
      <div className="mb-14 text-center relative">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset"
          style={{
            backgroundColor: ACCENT_LIGHT, // opaque
            color: ACCENT,
            boxShadow: "0 8px 20px -12px rgba(99,102,241,0.6)",
            borderColor: ACCENT_RING,
          }}
        >
          <Rocket className="h-5 w-5" aria-hidden="true" />
          Our Journey Began
        </span>

        <h2
          id="about-story-heading"
          className="mt-4 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl"
        >
          Our Story{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              // Opaque gradient (no transparency)
              backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${ACCENT})`,
            }}
          >
            of Impact
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-700">
          At <strong>Cinute Digital</strong>, our story is one of passion, innovation, and
          transformation. We’re dedicated to empowering learners with <strong>real-world skills</strong> through{" "}
          <strong>mentorship</strong> and <strong>hands-on projects</strong>, paving the way for thriving careers in tech.
        </p>
      </div>

      {/* Wrapper (solid border, no blur, no masks) */}
      <div className="relative rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.12)]">
        {/* Solid divider lines (no transparent gradients) */}
        <div className="pointer-events-none absolute -top-px left-6 h-[2px] w-24 bg-gray-300" />
        <div className="pointer-events-none absolute -bottom-px right-6 h-[2px] w-24 bg-gray-300" />

        {/* grid */}
        <div className="grid gap-8 p-6 sm:p-8 lg:p-10 lg:grid-cols-2">
          {/* STORY CARD (solid accent frame) */}
          <article
            className="relative rounded-3xl border-2"
            style={{ borderColor: ACCENT_RING, boxShadow: SHADOW }}
          >
            <div className="rounded-3xl bg-white p-7 sm:p-8">
              <header className="flex items-center gap-3 mb-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  aria-hidden="true"
                >
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">A Vision Born from Purpose</h3>
              </header>

              <p className="text-base leading-7 text-gray-700">
                Founded in 2020, <strong>Cinute Digital</strong> was sparked by a group of tech enthusiasts who
                believed education should evolve with the industry. Our mission was clear: create a{" "}
                <strong>dynamic learning ecosystem</strong> where aspiring professionals gain practical skills in{" "}
                <strong>Software Testing</strong>, <strong>Automation</strong>, <strong>Data Science</strong>, and{" "}
                <strong>AI/ML</strong>. Through <strong>mentor-led guidance</strong> and{" "}
                <strong>real-world projects</strong>, we’ve empowered thousands to turn their ambitions into reality.
              </p>

              <figure
                className="mt-8 rounded-2xl p-6 ring-1 ring-inset"
                style={{
                  backgroundColor: "#eef2ff", // indigo-100 (opaque)
                  borderColor: ACCENT_RING,
                }}
              >
                <blockquote className="text-sm italic text-gray-800">
                  <Quote
                    className="inline-block h-4 w-4 align-text-top mr-2"
                    aria-hidden="true"
                    style={{ color: ACCENT }}
                  />
                  Cinute’s mentorship and projects gave me the tools to confidently step into a Data Science career.
                </blockquote>
                <figcaption className="mt-2 text-xs text-gray-500">— Priya, Data Scientist</figcaption>
              </figure>
            </div>
          </article>

          {/* MILESTONES (solid accent frame) */}
          <aside
            className="relative rounded-3xl border-2"
            style={{ borderColor: ACCENT_RING, boxShadow: SHADOW }}
          >
            <div className="rounded-3xl bg-white p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                >
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                Our Journey Milestones
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                From our inception to global impact, here’s how we’ve grown.
              </p>

              <ul className="space-y-6">
                {milestones.map((m) => (
                  <li key={m.title} className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold shadow-sm ring-1 ring-inset"
                      style={{
                        backgroundColor: ACCENT_LIGHT,
                        color: ACCENT,
                        borderColor: ACCENT_RING,
                      }}
                      aria-hidden="true"
                    >
                      {m.year}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{m.title}</h4>
                      <p className="text-sm text-gray-600">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Solid divider */}
              <div className="mt-8 h-px w-full bg-gray-300" />

              {/* small stat row */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Learners", value: "20k+" },
                  { label: "Tracks", value: "4" },
                  { label: "Projects", value: "Capstone+" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl py-3 ring-1 ring-gray-200 bg-white">
                    <div className="text-sm font-semibold text-gray-900">{s.value}</div>
                    <div className="text-[11px] text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* HIGHLIGHTS */}
        <div className="px-6 pb-8 sm:px-8 lg:px-10">
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {[
              { icon: <Users className="h-5 w-5" aria-hidden="true" />, h: "20k+ Learners", p: "Building a global community" },
              { icon: <Rocket className="h-5 w-5" aria-hidden="true" />, h: "Job-Ready Skills", p: "Hands-on projects & mentorship" },
              { icon: <Sparkles className="h-5 w-5" aria-hidden="true" />, h: "Innovative Pathways", p: "Tailored for tech’s future" },
            ].map(({ icon, h, p }) => (
              <div
                key={h}
                className="relative rounded-2xl border-2 text-center"
                style={{ borderColor: ACCENT_RING, boxShadow: SHADOW }}
              >
                <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-900">{h}</p>
                  <p className="mt-1 text-xs text-gray-600">{p}</p>
                  {/* Accessible CTA (visible on focus) */}
                  <Link
                    href="/contact"
                    className="sr-only focus:not-sr-only inline-flex items-center justify-center mt-3 rounded-full px-3 py-1 text-xs font-medium text-white outline-none"
                    style={{ backgroundColor: ACCENT, boxShadow: "0 10px 26px -12px rgba(99,102,241,0.7)" }}
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:ring-2"
              style={{
                // Opaque gradient (no fades)
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${ACCENT})`,
                boxShadow: SHADOW,
              }}
            >
              Join Our Journey
              <Rocket className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* No animations needed for fades; gradient text is static */}
      <style jsx>{``}</style>

      {/* SR-ONLY SEO (unchanged content) */}
      <p className="sr-only">
        Cinute Digital’s story: A journey of empowering learners with mentor-led, project-based training for careers in Software Testing, Automation, Data Science, and AI/ML, driven by innovation and impact.
      </p>

      {/* JSON-LD (unchanged) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
});

export default AboutStorySection;
