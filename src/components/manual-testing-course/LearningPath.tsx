/* ==================== LEARNING PATH (Light Theme, SEO-Optimized) ==================== */
import { CheckCircle2, Clock, Rocket, BookOpen, ClipboardList, Bug, Briefcase, ShieldCheck, Target, Sparkles } from "lucide-react";
import Link from "next/link";

const ACCENTS = ["cyan", "indigo", "emerald", "rose"] as const;
type Accent = typeof ACCENTS[number];

void ACCENTS;

const COLOR_MAP: Record<Accent, {
  iconBg: string;
  cardBg: string;
  border: string;
  accentBorder: string;
  ring: string;
}> = {
  cyan: {
    iconBg: "bg-cyan-600",
    cardBg: "bg-cyan-50",
    border: "border-cyan-200",
    accentBorder: "border-cyan-600",
    ring: "ring-cyan-200"
  },
  indigo: {
    iconBg: "bg-indigo-600",
    cardBg: "bg-indigo-50",
    border: "border-indigo-200",
    accentBorder: "border-indigo-600",
    ring: "ring-indigo-200"
  },
  emerald: {
    iconBg: "bg-emerald-600",
    cardBg: "bg-emerald-50",
    border: "border-emerald-200",
    accentBorder: "border-emerald-600",
    ring: "ring-emerald-200"
  },
  rose: {
    iconBg: "bg-rose-600",
    cardBg: "bg-rose-50",
    border: "border-rose-200",
    accentBorder: "border-rose-600",
    ring: "ring-rose-200"
  }
};

export default function LearningPath() {
  const phases = [
    {
      id: "phase-1",
      phase: "Phase 1",
      title: "Foundation • Weeks 1–3",
      accent: "cyan" as Accent,
      badge: "Beginner Friendly",
      icon: <BookOpen className="w-5 h-5" aria-hidden="true" />,
      outcomes: ["SDLC & STLC mastery", "QA Roles & Responsibilities", "Testing Principles"],
      topics: ["SDLC/STLC", "V-Model & Agile", "Test Levels & Types", "QA Documentation Basics"],
      seo: "Manual Testing Course fundamentals and QA training basics",
    },
    {
      id: "phase-2",
      phase: "Phase 2",
      title: "Core Skills • Weeks 4–6",
      accent: "indigo" as Accent,
      badge: "Hands-On Labs",
      icon: <ClipboardList className="w-5 h-5" aria-hidden="true" />,
      outcomes: ["Design high-quality test cases", "Requirements Traceability Matrix (RTM)", "Test data strategy"],
      topics: ["Equivalence & Boundary", "Decision Tables", "State Transition", "RTM & Checklists"],
      seo: "Test design techniques, RTM, and documentation best practices",
    },
    {
      id: "phase-3",
      phase: "Phase 3",
      title: "Execution • Weeks 7–9",
      accent: "emerald" as Accent,
      badge: "Real Tools",
      icon: <Bug className="w-5 h-5" aria-hidden="true" />,
      outcomes: ["Defect life cycle end-to-end", "Bug reporting that gets fixed", "Tooling fluency"],
      topics: ["Jira / Azure DevOps", "Test Runs & Reports", "Defect Triage", "Exploratory Testing"],
      seo: "Defect tracking, bug reporting with Jira, real-world QA tooling",
    },
    {
      id: "phase-4",
      phase: "Phase 4",
      title: "Mastery • Weeks 10–12",
      accent: "rose" as Accent,
      badge: "Career Ready",
      icon: <Rocket className="w-5 h-5" aria-hidden="true" />,
      outcomes: ["ISTQB® exam readiness", "Portfolio capstone project", "Interview preparation & placement"],
      topics: ["ISTQB Syllabus", "Capstone Project", "Mock Interviews", "Resume & LinkedIn"],
      seo: "ISTQB certification prep, QA interview preparation, job placement support",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "12-Week QA Learning Path",
    "itemListElement": phases.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.title,
      "description": p.seo,
      "item": {
        "@type": "Course",
        "name": p.title,
        "provider": { "@type": "Organization", "name": "Your Institute", "sameAs": "https://example.com" }
      }
    })),
  };

  return (
    <section className="relative md:py-20 bg-white overflow-hidden" id="learning-path" aria-labelledby="learning-path-title">
      {/* Subtle futuristic accents */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full border border-cyan-200/60"></div>
        <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full border border-indigo-200/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-[13px] shadow-md font-medium text-gray-700">
            <Sparkles className="w-4 h-4" aria-hidden="true" /> Structured, job-ready QA curriculum
          </span>
          <h2 id="learning-path-title" className="mt-6 text-4xl font-bold text-gray-900">
            Your <span className="text-red-800">12-Week</span> Learning Path
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Become a <strong>job-ready Manual QA Tester</strong> with industry-standard
            <span className="whitespace-nowrap"> tools, </span> <strong>ISTQB® preparation</strong>, and a portfolio-grade
            capstone project. Designed for beginners and career-switchers.
          </p>

          {/* Snapshot KPIs */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Snapshot metric="Live Projects" value="2" />
            <Snapshot metric="Practice Questions" value="300+" />
            <Snapshot metric="Interview Drills" value="20+" />
            <Snapshot metric="Placement Support" value="Yes" />
          </div>
        </div>

        {/* Phases */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" itemScope itemType="https://schema.org/ItemList">
          {phases.map((p, i) => {
            const colors = COLOR_MAP[p.accent];

            return (
              <li
                key={p.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className={`group relative rounded-2xl ${colors.cardBg} border ${colors.border} border-l-4 ${colors.accentBorder} hover:shadow-lg transition-all duration-200 p-6 focus-within:ring-2 focus-within:ring-offset-2 ${colors.ring}`}
              >
                <meta itemProp="position" content={(i + 1).toString()} />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-gray-500">{p.phase}</span>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" /> {p.badge}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-gray-900 flex items-center gap-2">
                  <div className={`${colors.iconBg} rounded-lg p-2`}>
                    <div className="text-white">{p.icon}</div>
                  </div>
                  <span itemProp="name">{p.title}</span>
                </h3>

                <p className="mt-2 text-sm text-gray-600" itemProp="description">
                  {p.seo}
                </p>

                {/* Outcomes */}
                <div className="mt-4 space-y-2">
                  {p.outcomes.map((o) => (
                    <div key={o} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-600" aria-hidden="true" />
                      <span className="text-sm text-gray-800">{o}</span>
                    </div>
                  ))}
                </div>

                {/* Topics */}
                <div className="mt-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Topics</div>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {p.topics.map((t) => (
                      <li key={t} className="text-xs bg-white border border-gray-200 text-gray-800 rounded-full px-2.5 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span>{p.title.split("•")[1]?.trim() ?? "Weeks"}</span>
                  </div>
                  <a
                    href="#apply"
                    className={`inline-flex items-center gap-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-3 py-2 ${p.accent === "cyan" ? "bg-cyan-600 focus:ring-cyan-500" : p.accent === "indigo" ? "bg-indigo-600 focus:ring-indigo-500" : p.accent === "emerald" ? "bg-emerald-600 focus:ring-emerald-500" : "bg-rose-600 focus:ring-rose-500"}`}
                    aria-label={`Explore ${p.title}`}
                  >
                    Explore <Target className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </li>
            );
          })}
        </ol>

        {/* CTA Row */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-amber-200 p-6 bg-white">
            <div className="flex items-center gap-2">
              <div className="bg-amber-800 p-3 rounded-xl">
                <Rocket className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Career Outcomes
              </h4>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Land roles like <strong>Manual QA Tester</strong>, <strong>QA Analyst</strong>, or <strong>Test Engineer</strong>.
              Build an ATS-optimized resume and a GitHub-hosted portfolio with real test assets.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              <li className="flex gap-2"><Briefcase className="w-4 h-4 mt-0.5" /> 1:1 mock interviews & HR screening prep</li>
              <li className="flex gap-2"><ShieldCheck className="w-4 h-4 mt-0.5" /> ISTQB® Foundation exam planning</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-gray-300 p-6 bg-white">
            <div className="flex items-center gap-2">
              <div className="bg-gray-800 p-3 rounded-xl">
                <Bug className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Tools You’ll Use
              </h4>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Practice with industry tools so you’re productive from day one.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Jira", "Azure DevOps", "TestRail", "Postman", "Confluence", "Zephyr"].map(tool => (
                <span key={tool} className="text-xs bg-gray-50 border border-gray-200 text-gray-800 rounded-full px-2.5 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-blue-300 p-6 bg-white">
            <div className="flex items-center gap-2">
              <div className="bg-blue-800 p-3 rounded-xl">
                <ClipboardList className="w-5 h-5" aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                What You’ll Deliver
              </h4>
            </div>

            <ul className="mt-3 space-y-2 text-sm text-gray-800">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Test Plan, Test Strategy, RTM</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Test Cases, Test Data, Bug Reports</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Capstone project with repository</li>
            </ul>
            <a
              href="#download-syllabus"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium bg-blue-800 text-white hover:bg-emerald-900 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-3 py-2 border border-emerald-200"
            >
              Download Syllabus
            </a>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="mt-10 text-center">
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-red-800 px-6 py-3 text-base font-semibold text-white hover:bg-red-700 transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            Start Your QA Journey <ArrowRightTiny />
          </Link>
          <p className="mt-3 text-sm text-gray-600">
            Cohort starts monthly • Live sessions + recorded classes • Certificates on completion
          </p>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* ===== Small UI helpers (TypeScript-friendly) ===== */
function Snapshot({ metric, value }: { metric: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 text-center">
      <div className="text-sm text-gray-500">{metric}</div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}

function ArrowRightTiny() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}