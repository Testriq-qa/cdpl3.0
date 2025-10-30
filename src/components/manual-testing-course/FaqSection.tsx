"use client";

import React, { useMemo, useState } from "react";
import { Search, Plus, Minus, HelpCircle, BadgeCheck, Clock, Video, UserCheck, CreditCard, Shield, BookOpen, Globe, Headphones, GraduationCap } from "lucide-react";

/* =========================
   Types
========================= */
type QA = {
  question: string;
  answer: string;
  category: "Admissions" | "Curriculum" | "Certification" | "Career" | "Payments" | "General";
};

/* =========================
   Data (SEO-optimized copy)
========================= */
const FAQS: QA[] = [
  {
    category: "General",
    question: "Who is this Manual Testing course best suited for?",
    answer:
      "Beginners, freshers, and career switchers who want a job-ready, industry-relevant Manual Testing course. No coding needed — we start with QA fundamentals, SDLC/STLC, and real project scenarios.",
  },
  {
    category: "Admissions",
    question: "Do I need prior IT experience to enroll?",
    answer:
      "No prior IT experience required. Our beginner-friendly path covers software testing basics, test design techniques, test planning, and defect reporting with hands-on practice.",
  },
  {
    category: "Curriculum",
    question: "What tools and skills will I learn in this QA training?",
    answer:
      "You’ll learn Test Design (EP/BVA, Decision Tables), Test Case Management, Bug Tracking (Jira), API Testing (Postman basics), Agile & Scrum, RTM, and real-world defect workflows used by product teams.",
  },
  {
    category: "Curriculum",
    question: "Are classes live or recorded?",
    answer:
      "Live, instructor-led sessions with Q&A + recorded lectures uploaded to the LMS for lifetime access. Perfect for working professionals and flexible study schedules.",
  },
  {
    category: "Curriculum",
    question: "Will I work on live projects and a portfolio?",
    answer:
      "Yes. You’ll complete capstone projects (e-commerce, banking, healthcare) and build a portfolio with test plans, cases, bug reports, and RTM to showcase to recruiters.",
  },
  {
    category: "Certification",
    question: "Is the course aligned with ISTQB Foundation Level?",
    answer:
      "Absolutely. Our syllabus maps to ISTQB CTFL learning objectives. We provide exam prep resources and mock tests. Exam registration and fee are separate.",
  },
  {
    category: "Certification",
    question: "Do I receive a completion certificate?",
    answer:
      "Yes, you’ll receive a verifiable course completion certificate that highlights your practical skills, projects, and competencies for hiring managers.",
  },
  {
    category: "Career",
    question: "Do you offer placement assistance for QA jobs?",
    answer:
      "Yes — resume building, LinkedIn branding, mock interviews, referrals through hiring partners, and targeted job alerts. Our goal is fast, high-confidence interview readiness.",
  },
  {
    category: "Career",
    question: "What salary can a Manual Tester expect in India?",
    answer:
      "Entry-level roles typically range from ₹3.5–6 LPA depending on city, domain, and interview performance. Strong portfolios and projects can accelerate growth.",
  },
  {
    category: "Payments",
    question: "What are the fees and payment options?",
    answer:
      "We support one-time payments, EMI plans via trusted partners, and corporate sponsorship (if applicable). Talk to our admissions team for current offers and EMI eligibility.",
  },
  {
    category: "General",
    question: "If I miss a class, how do I catch up?",
    answer:
      "All sessions are recorded and available in the LMS. You also get structured notes, assignments, and doubt-clearing sessions so you never fall behind.",
  },
  {
    category: "General",
    question: "What support do I get outside class hours?",
    answer:
      "Community forums, mentor office hours, and 1:1 doubt resolution. You’ll also get interview prep sprints and feedback on your portfolio artifacts.",
  },
  {
    category: "Admissions",
    question: "Can working professionals manage the schedule?",
    answer:
      "Yes. We offer evening cohorts (7–9 PM IST) and weekend doubt-clearing. The flexible learning model is designed for busy schedules.",
  },
  {
    category: "Payments",
    question: "Is there a refund policy?",
    answer:
      "We offer a transparent refund policy with defined timelines before batch commencement. Please review the policy shared during enrollment for details.",
  },
  {
    category: "Certification",
    question: "Is the ISTQB exam fee included?",
    answer:
      "The curriculum is fully aligned, but the ISTQB exam fee (approx. ₹4,500) is not included. We guide you through registration and exam preparation.",
  },
  {
    category: "Career",
    question: "Will you help with resume and interview preparation?",
    answer:
      "Yes — ATS-friendly resume templates, STAR-format answers, domain case studies, and mock interviews with personalized feedback from industry mentors.",
  },
];

/* =========================
   UI Components
========================= */
const categoryMeta: Record<QA["category"], { color: string; icon: React.ReactNode }> = {
  General: { color: "bg-indigo-50 text-indigo-700 ring-indigo-200", icon: <HelpCircle className="h-4 w-4" /> },
  Admissions: { color: "bg-emerald-50 text-emerald-700 ring-emerald-200", icon: <Globe className="h-4 w-4" /> },
  Curriculum: { color: "bg-cyan-50 text-cyan-700 ring-cyan-200", icon: <BookOpen className="h-4 w-4" /> },
  Certification: { color: "bg-amber-50 text-amber-700 ring-amber-200", icon: <GraduationCap className="h-4 w-4" /> },
  Career: { color: "bg-violet-50 text-violet-700 ring-violet-200", icon: <UserCheck className="h-4 w-4" /> },
  Payments: { color: "bg-rose-50 text-rose-700 ring-rose-200", icon: <CreditCard className="h-4 w-4" /> },
};

function Chip({
  label,
  active,
  onClick,
  colorClasses,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  colorClasses: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition
      ${active ? "bg-white shadow-sm" : "bg-white"}
      ${colorClasses} ring-1`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </button>
  );
}

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-gray-50 p-2 ring-1 ring-gray-200">
            <Shield className="h-4 w-4 text-gray-600" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{question}</h3>
        </div>
        {open ? <Minus className="h-5 w-5 text-gray-500" /> : <Plus className="h-5 w-5 text-gray-500" />}
      </button>
      <div className={`grid transition-[grid-template-rows] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm sm:text-base leading-7 text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Main Section
========================= */
export default function FaqSection() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<QA["category"] | "All">("All");

  const categories: (QA["category"] | "All")[] = ["All", "General", "Admissions", "Curriculum", "Certification", "Career", "Payments"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const hitCategory = activeCat === "All" || f.category === activeCat;
      const hitText = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return hitCategory && hitText;
    });
  }, [query, activeCat]);

  // Build JSON-LD for FAQPage
  const jsonLd = useMemo(() => {
    const items = filtered.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }));
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items,
    };
  }, [filtered]);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            Trusted by learners & hiring teams
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">FAQs</h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-600">
            Everything about our <strong>Manual Testing course</strong>, <strong>QA training</strong>,{" "}
            <strong>ISTQB-aligned syllabus</strong>, projects, and <strong>placement assistance</strong>.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs: ISTQB, fees, projects, placement…"
              aria-label="Search FAQs"
              className="w-full rounded-xl border border-gray-200 bg-white px-11 py-3 text-sm sm:text-base outline-none ring-0 focus:border-indigo-300"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const meta = cat === "All" ? { color: "bg-gray-50 text-gray-700 ring-gray-200", icon: <HelpCircle className="h-4 w-4" /> } : categoryMeta[cat];
              return (
                <Chip
                  key={cat}
                  label={
                    <span className="inline-flex items-center gap-1.5">
                      {meta.icon}
                      {cat}
                    </span> as unknown as string
                  }
                  active={activeCat === cat}
                  colorClasses={meta.color}
                  onClick={() => setActiveCat(cat)}
                />
              );
            })}
          </div>
        </div>

        {/* Stats Row (light, non-gradient, futuristic vibe) */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <StatCard icon={<Clock className="h-5 w-5" />} label="Evening Cohorts" value="7–9 PM IST" />
          <StatCard icon={<Video className="h-5 w-5" />} label="Learning Access" value="Lifetime" />
          <StatCard icon={<Headphones className="h-5 w-5" />} label="Doubt Support" value="1:1 & Forums" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <div key={idx} className="group">
              <div className="mb-1 ml-1 inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-[11px] font-medium ring-1
               bg-white text-gray-700 ring-gray-200">
                {categoryMeta[item.category].icon}
                <span>{item.category}</span>
              </div>
              <FAQItem question={item.question} answer={item.answer} />
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-gray-700 font-medium">No results found.</p>
              <p className="text-gray-500 text-sm mt-1">Try different keywords like “ISTQB”, “fees”, or “projects”.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2 ring-1 ring-indigo-200">
                <BadgeCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Still have questions?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Talk to our admissions team for syllabus, fees, and cohort start dates.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
              >
                Contact Us
              </a>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO (FAQPage) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* =========================
   Small Stat Card
========================= */
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200">{icon}</div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-base sm:text-lg font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
