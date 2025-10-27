"use client";

import {
  BadgeCheck,
  Briefcase,
  Layers,
  Rocket,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutWhyJoinUs() {
  const features = [
    {
      title: "Training",
      desc:
        "Live projects run parallel to classes. Get hands-on with planning, test design, execution, and reporting.",
      icon: Layers,
      seo: ["industry-ready training", "hands-on QA projects"],
    },
    {
      title: "Professional Exposure",
      desc:
        "Work with experienced mentors and QA leads. Build confidence to meet corporate standards and ace interviews.",
      icon: Briefcase,
      seo: ["mentor-led learning", "interview preparation"],
    },
    {
      title: "Practical Application",
      desc:
        "Practice web, mobile, and API testing on real devices. Apply concepts from manual to automation testing.",
      icon: BadgeCheck,
      seo: ["manual testing", "automation testing", "API testing"],
    },
    {
      title: "Our Experience",
      desc:
        "A decade of building QA teams. Learn in-demand tools, frameworks, and best practices used by top companies.",
      icon: Rocket,
      seo: ["QA best practices", "modern test frameworks"],
    },
    {
      title: "Career Services",
      desc:
        "Placement assistance, portfolio reviews, mock interviews, and referrals to hiring partners and startups.",
      icon: Target,
      seo: ["placement assistance", "portfolio-first approach"],
    },
    {
      title: "Certifications & Tools",
      desc:
        "Get guidance on certifications and hands-on with Jira, Postman, Selenium, Playwright, and CI/CD basics.",
      icon: ShieldCheck,
      seo: ["software testing certifications", "Selenium", "Playwright",]
    },
    {
      title: "Collaborative Community",
      desc:
        "Join a 10k+ learner network, peer reviews, and alumni support for continuous growth and opportunities.",
      icon: Users,
      seo: ["peer learning", "alumni network"],
    },
    {
      title: "Flexible Learning",
      desc:
        "Weekend/weekday cohorts, recorded sessions, and structured roadmaps tailored for job-ready outcomes.",
      icon: GraduationCap,
      seo: ["flexible cohorts", "job-ready outcomes"],
    },
  ] as const;

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      aria-labelledby="why-join-heading"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm dark:border-slate-200/70 dark:bg-white/90">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Future-Ready EdTech • Job-Oriented
        </p>
        <h2
          id="why-join-heading"
          className="mt-3 text-4xl font-bold tracking-tight"
        >
          Why join{" "}
          <span className="bg-clip-text text-transparent bg-brand">
            Cinute Digital{" "}
          </span>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-5xl md:text-lg leading-6 text-slate-600 sm:text-base">
          Industry-aligned curriculum, <strong>mentor-led learning</strong>,{" "}
          <strong>live projects</strong>, and <strong>placement assistance</strong>—everything
          designed to make you <strong>job-ready</strong> for{" "}
          <strong>Software Testing</strong>, <strong>Automation</strong>,{" "}
          <strong>Data Science</strong>, and <strong>AI/ML</strong>.
        </p>
      </div>

      {/* Feature Grid */}
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-5 shadow-sm backdrop-blur dark:border-slate-200/70 dark:bg-white/92 sm:p-7"
        role="region"
        aria-label="Key benefits and outcomes at Cinute Digital"
      >
        {/* Contained soft aura for a slightly futuristic feel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(500px 180px at 85% 10%, rgba(255,122,24,0.12), transparent 60%), radial-gradient(450px 160px at 10% 100%, rgba(37,99,235,0.10), transparent 60%)",
            maskImage:
              "radial-gradient(55% 60% at 85% 10%, black 0%, transparent 60%), radial-gradient(45% 55% at 10% 100%, black 0%, transparent 60%)",
            WebkitMaskImage:
              "radial-gradient(55% 60% at 85% 10%, black 0%, transparent 60%), radial-gradient(45% 55% at 10% 100%, black 0%, transparent 60%)",
          }}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, seo }) => (
            <article
              key={title}
              className="group relative h-auto rounded-2xl leading-relaxed border border-slate-700 bg-white p-6 shadow-md hover:shadow-orange-200 transition-transform hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-200/70 dark:bg-white"
            >
              {/* Icon */}
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 ring-1 ring-orange-100">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>

              {/* Description */}
              <p className="mt-2 text-md text-slate-600">{desc}</p>

              {/* SEO micro-tag (visually subtle) */}
              <p className="flex flex-wrap gap-2 mt-6 text-xs leading-4 text-slate-500">
            
                  {seo.map((s)=>{
                    return <span key={s} className="rounded-md bg-green-100 px-1.5 p-0.5 w-fit">
                      {s}
                    </span>
                  })}
              </p>

              {/* Hover accent line */}
              <span className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            Explore Courses
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-2xl ring-1 ring-brand bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 dark:border-slate-200/70 dark:bg-white/90"
          >
            Talk to an Advisor
          </Link>
        </div>
      </div>

      {/* Accessibility helper (screen readers) */}
      <span className="sr-only">
        Why join Cinute Digital: mentor-led training, live projects, certifications, and placement
        assistance for career-ready skills in software testing, automation, data science, and AI/ML.
      </span>
    </section>
  );
}
