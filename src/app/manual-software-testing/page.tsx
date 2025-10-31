'use client';

import type { ReactNode, ReactElement } from "react";
import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Clock,
  TrendingUp,
  Star,
  Code,
  Target,
  Zap,
  Shield,
  GraduationCap,
  FileCheck,
  ChevronRight,
  CheckSquare,
  Download,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BriefcaseBusiness,
  Globe2,
  ShieldCheck,
  PlayCircle,


} from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

// -----------------------------------------------------------------------------
// Re-usable Components (Enhanced with modern design)
// -----------------------------------------------------------------------------

function TrustStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center group">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        {number}
      </p>
      <p className="text-sm md:text-base text-gray-600 mt-1 font-medium">{label}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function CurriculumModule({ week, title, topics }: { week: string; title: string; topics: string[] }) {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 shadow-md hover:shadow-xl transition-all border border-indigo-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs md:text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{week}</span>
        <Code className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 text-sm md:text-base text-gray-700">
        {topics.map((t, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="group bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md">
        <Code className="w-7 h-7 text-white" />
      </div>
      <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, features }: { title: string; description: string; features: string[] }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-center">
            <CheckSquare className="w-4 h-4 text-emerald-500 mr-2" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LearningPhase({ phase, title, weeks, description }: { phase: string; title: string; weeks: string; description: string }) {
  return (
    <div className="group bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all">
      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
        {phase}
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-1 text-white">{title}</h3>
      <p className="text-sm text-cyan-100 font-medium mb-2">{weeks}</p>
      <p className="text-sm text-white/90">{description}</p>
    </div>
  );
}

function InstructorFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

function JobRole({ role, salary }: { role: string; salary: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="font-medium text-gray-800">{role}</span>
      <span className="text-indigo-600 font-bold">{salary}</span>
    </div>
  );
}

function CompanyBadge({ name }: { name: string }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3 text-sm md:text-base font-bold text-center text-white shadow-md">
      {name}
    </div>
  );
}

function PlacementFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow hover:shadow-lg transition-all border border-emerald-100">
      <div className="mb-4 text-emerald-600">{icon}</div>
      <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}

function Testimonial({ name, role, company, text, rating }: { name: string; role: string; company: string; text: string; rating: number }) {
  return (
    <div className="bg-gradient-to-br from-indigo-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow hover:shadow-xl transition-all">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 text-sm md:text-base">&quot;{text}&quot;</p>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-xs text-indigo-600 font-medium">{company}</p>
      </div>
    </div>
  );
}

function ComparisonFeature({ text, positive }: { text: string; positive: boolean }) {
  return (
    <div className="flex items-center space-x-3 py-2">
      {positive ? (
        <CheckCircle className="w-6 h-6 text-emerald-500" />
      ) : (
        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">×</div>
      )}
      <span className={positive ? 'text-gray-800 font-medium' : 'text-gray-500 line-through'}>{text}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-gray-900"
        onClick={() => setOpen(!open)}
      >
        {question}
        <ChevronRight className={`w-5 h-5 transition-transform text-indigo-600 ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">{answer}</p>}
    </div>
  );
}


// Sticky Navbar

const sections = [
  { id: 'why-learn', label: 'Why Learn', color: 'from-orange-500 to-pink-500' },
  { id: 'curriculum', label: 'Curriculum', color: 'from-emerald-500 to-teal-500' },
  { id: 'tools', label: 'Tools', color: 'from-indigo-500 to-purple-500' },
  { id: 'projects', label: 'Projects', color: 'from-amber-500 to-orange-500' },
  { id: 'learning-path', label: 'Path', color: 'from-cyan-500 to-blue-500' },
  { id: 'instructor', label: 'Instructor', color: 'from-rose-500 to-red-500' },
  { id: 'career', label: 'Career', color: 'from-green-500 to-emerald-500' },
  { id: 'testimonials', label: 'Reviews', color: 'from-yellow-500 to-amber-500' },
  { id: 'comparison', label: 'Compare', color: 'from-purple-500 to-pink-500' },
  { id: 'other-courses', label: 'Courses', color: 'from-teal-500 to-cyan-500' },
  { id: 'faq', label: 'FAQ', color: 'from-blue-500 to-indigo-500' },
];

function StickyNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 500);

      let current = '';
      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - (isScrolled ? 80 : 100),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={navRef}
      className={`z-20 transition-all duration-500 ${isScrolled
        ? 'fixed top-20 left-0 right-0 backdrop-blur-xl bg-white/70 shadow-lg border-b border-gray-200/50'
        : 'relative'
        }`}
    >
      {/* Subtle noise texture for depth */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Clean minimalist layout */}
        <div className="hidden lg:flex items-center justify-center gap-1 py-3 flex-wrap">
          {sections.map((sec, index) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`group relative px-5 py-2.5 rounded-full font-medium text-md transition-all duration-300
              ${activeSection === sec.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              {/* Subtle shimmer on hover (non-active only) */}
              {!activeSection && (
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              )}

              <span className="relative z-10 flex items-center gap-1.5">
                {sec.label}
              </span>

              {/* Active underline indicator */}
              {activeSection === sec.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-indigo-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile: Compact horizontal scroll */}
        <div className="lg:hidden relative py-3">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 px-4 min-w-max">
              {sections.map((sec, index) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`relative px-4 py-2 rounded-full font-medium text-xs whitespace-nowrap transition-all duration-300
                  ${activeSection === sec.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <span className="flex items-center gap-1.5">
                    {sec.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clean divider when scrolled */}
      {isScrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      )}
    </div>
  );

}

// New: Other Course Card
function OtherCourseCard({ title, duration, price, originalPrice, features, popular }: {
  title: string; duration: string; price: string; originalPrice?: string; features: string[]; popular?: boolean
}) {
  return (
    <div className={`relative group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border ${popular ? 'border-2 border-cyan-500' : 'border-gray-100'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{duration}</p>

      <div className="mb-6">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl md:text-4xl font-bold text-indigo-600">{price}</span>
          {originalPrice && <span className="text-lg text-gray-400 line-through">{originalPrice}</span>}
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
            {f}
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center space-x-2
        ${popular
          ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 shadow-lg'
          : 'bg-gray-100 text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
        }`}>
        <span>Enroll Now</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Page Component (Enhanced Design)
// -----------------------------------------------------------------------------
export default function ManualTestingCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-50">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-white" aria-labelledby="manual-testing-hero">
        {/* Background (no color gradients) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="absolute top-10 left-4 h-24 w-24 rounded-2xl bg-sky-50 border border-sky-100 shadow-sm" />
          <div className="absolute bottom-12 right-6 h-28 w-28 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18 lg:py-22">
          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.05fr_.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>ISTQB Foundation Aligned • Job-Oriented</span>
              </div>

              <h1 id="manual-testing-hero" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                Best <span className="text-indigo-700">Manual Testing Course</span>{" "}
                with <span className="whitespace-nowrap text-emerald-700">100% Placement Support</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600">
                Upgrade your QA career with hands-on <strong>Software Testing Training</strong>, <strong>ISTQB Prep</strong>, and real-world{" "}
                <strong>Manual Testing</strong> projects. Live classes, mentor support, interview preparation, and a curated job pipeline.
              </p>

              {/* Trust Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <div className="flex items-center gap-1 text-slate-800">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                  <span className="ml-1 text-slate-500">from 1,200+ reviews</span>
                </div>
                <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
                <div className="flex items-center gap-2 text-slate-800">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <span>Trusted by 5000+ learners</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#apply"
                  className="group inline-flex items-center justify-center rounded-xl bg-indigo-700 px-7 py-4 text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label="Enroll in Manual Testing Course"
                >
                  Enroll Now
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="#syllabus"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-label="Download Manual Testing syllabus"
                >
                  <Download className="mr-2 h-5 w-5 text-slate-700" />
                  Download Syllabus (PDF)
                </Link>

                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:ml-1"
                  aria-label="Book a free demo class"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Free Demo Class
                </Link>
              </div>

              {/* Feature bullets */}
              <ul className="mt-8 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                {[
                  { color: "text-emerald-600", text: "12-Week Live Program" },
                  { color: "text-indigo-700", text: "ISTQB Foundation Preparation" },
                  { color: "text-sky-700", text: "Manual + Agile + SDLC/STLC" },
                  { color: "text-rose-700", text: "Resume, Mock Interviews & Referrals" },
                ].map((item, i) => (
                  <li className="flex items-center gap-2" key={i}>
                    <CheckCircle2 className={`h-5 w-5 ${item.color}`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Company logos */}
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Alumni work at</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 opacity-90">
                  <Image src="/logos/acme.svg" alt="Acme Technologies" width={96} height={24} />
                  <Image src="/logos/pixelwave.svg" alt="Pixelwave" width={96} height={24} />
                  <Image src="/logos/groundwork.svg" alt="Groundwork Systems" width={110} height={24} />
                  <Image src="/logos/nitrosoft.svg" alt="Nitrosoft" width={96} height={24} />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Course Snapshot</h3>
                  <Award className="h-8 w-8 text-amber-500" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <SnapshotItem
                    color="bg-sky-50 text-sky-700"
                    icon={<Users className="h-6 w-6 text-sky-700" />}
                    label="Students Placed"
                    value="500+"
                  />
                  <SnapshotItem
                    color="bg-indigo-50 text-indigo-700"
                    icon={<Clock className="h-6 w-6 text-indigo-700" />}
                    label="Training Hours"
                    value="100+"
                  />
                  <SnapshotItem
                    color="bg-emerald-50 text-emerald-700"
                    icon={<BriefcaseBusiness className="h-6 w-6 text-emerald-700" />}
                    label="Real Projects"
                    value="5"
                  />
                  <SnapshotItem
                    color="bg-amber-50 text-amber-700"
                    icon={<GraduationCap className="h-6 w-6 text-amber-700" />}
                    label="ISTQB Included"
                    value="Yes"
                  />
                  <SnapshotItem
                    color="bg-rose-50 text-rose-700"
                    icon={<Globe2 className="h-6 w-6 text-rose-700" />}
                    label="Learning Access"
                    value="Lifetime"
                  />
                  <SnapshotItem
                    color="bg-violet-50 text-violet-700"
                    icon={<ShieldCheck className="h-6 w-6 text-violet-700" />}
                    label="Placement Support"
                    value="100%"
                  />
                </div>

                {/* Next Batch */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">Next Batch</p>
                      <p className="text-lg font-bold text-slate-900">Nov 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-600">Seats Left</p>
                      <p className="text-lg font-bold text-rose-700">Only 8</p>
                    </div>
                  </div>
                </div>

                {/* Lead Form */}
                <form id="apply" className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()} aria-label="Apply for Manual Testing course">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Full Name">
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-600"
                      />
                    </Field>
                    <Field label="Mobile Number">
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-600"
                      />
                    </Field>
                  </div>
                  <Field label="Email">
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:ring-2 focus:ring-sky-600"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    Get Call Back
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-2 text-center text-xs text-slate-500">
                    By submitting, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-2 text-slate-700">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline underline-offset-2 text-slate-700">
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* SEO helper text */}
          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm leading-relaxed text-slate-600">
              Join India’s leading <strong>Manual Testing Course</strong> for freshers and working professionals. Master{" "}
              <strong>software testing fundamentals, test cases, bug reporting</strong>, <strong>Agile &amp; Scrum</strong>, and interview skills.
              Available in <strong>online</strong> and <strong>classroom</strong> modes with <strong>placement assistance</strong> across Mumbai • Pune • Bengaluru.
            </p>
          </div>
        </div>

        {/* JSON-LD */}
        <Script id="course-json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Manual Testing Course with ISTQB Prep",
            description:
              "Job-oriented Manual Testing training with live classes, ISTQB Foundation preparation, real projects, and 100% placement support.",
            provider: {
              "@type": "Organization",
              name: "Your Ed-Tech Institute",
              sameAs: "https://www.example.com",
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: ["Online", "InPerson"],
              startDate: "2025-11-15",
              location: { "@type": "Place", name: "Mumbai • Pune • Bengaluru" },
            },
            educationalCredentialAwarded: "ISTQB Foundation (prep included)",
            offers: {
              "@type": "Offer",
              url: "https://www.example.com/manual-testing",
              availability: "https://schema.org/InStock",
              price: "0",
              priceCurrency: "INR",
            },
          })}
        </Script>
      </section>
      {/* ==================== TRUST INDICATORS ==================== */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <TrustStat number="5000+" label="Students Trained" />
            <TrustStat number="95%" label="Placement Rate" />
            <TrustStat number="4.8/5" label="Course Rating" />
            <TrustStat number="50+" label="Hiring Partners" />
          </div>
        </div>
      </section>

      {/* ==================== STICKY NAVBAR ==================== */}
      <StickyNav />

      {/* ==================== WHY LEARN ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50" id='why-learn'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Manual Testing in 2025?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation of quality assurance — in demand, beginner-friendly, and future-proof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <BenefitCard icon={<TrendingUp className="w-8 h-8" />} title="High Demand" description="Every app needs QA. 10,000+ tester jobs open monthly." />
            <BenefitCard icon={<Target className="w-8 h-8" />} title="No Coding" description="Perfect for non-tech backgrounds. Start from zero." />
            <BenefitCard icon={<Zap className="w-8 h-8" />} title="Fast Career" description="Job-ready in 12 weeks with ₹3.5–6 LPA starting salary." />
            <BenefitCard icon={<Award className="w-8 h-8" />} title="ISTQB Certified" description="Globally recognized certification included." />
            <BenefitCard icon={<BookOpen className="w-8 h-8" />} title="Gateway to Automation" description="Master manual first — automate later." />
            <BenefitCard icon={<Shield className="w-8 h-8" />} title="Recession-Proof" description="Quality is non-negotiable in any economy." />
          </div>
        </div>
      </section>

      {/* ==================== CURRICULUM ==================== */}
      <section className="py-20 bg-white" id='curriculum'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              12-Week Curriculum
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From fundamentals to capstone projects — everything you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <CurriculumModule week="Weeks 1-2" title="Testing Fundamentals" topics={[
              "QA & SDLC/STLC", "Testing Principles", "V-Model & Agile", "QA Roles"
            ]} />
            <CurriculumModule week="Weeks 3-4" title="Test Design" topics={[
              "Equivalence Partitioning", "Boundary Value", "Decision Tables", "Exploratory"
            ]} />
            <CurriculumModule week="Weeks 5-6" title="Test Cases" topics={[
              "Writing Test Scenarios", "RTM & Documentation", "Test Data Prep", "Review Process"
            ]} />
            <CurriculumModule week="Weeks 7-8" title="Defect Management" topics={[
              "Bug Life Cycle", "Jira Reporting", "Severity vs Priority", "Dev Communication"
            ]} />
            <CurriculumModule week="Weeks 9-10" title="Testing Types" topics={[
              "Functional/Non-Functional", "Smoke, Regression, UAT", "Web & Mobile Basics"
            ]} />
            <CurriculumModule week="Weeks 11-12" title="Projects & ISTQB" topics={[
              "Test Planning", "5 Capstone Projects", "ISTQB Mock Exams", "Interview Prep"
            ]} />
          </div>
        </div>
      </section>

      {/* ==================== TOOLS ==================== */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-cyan-50" id='tools'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tools You’ll Master
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-standard tools used by top QA teams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Jira', 'Zephyr', 'Postman', 'MySQL', 'TestRail', 'BrowserStack', 'DevTools', 'Excel'].map((tool) => (
              <ToolCard key={tool} name={tool} description={tool === 'Jira' ? 'Defect Tracking' : tool === 'Postman' ? 'API Testing' : 'Testing Tool'} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section className="py-20 bg-white" id='projects'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real-World Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Build a portfolio that gets you hired.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard title="E-commerce" description="Test cart, checkout, payments, and order flow." features={["Search", "Cart", "Payments", "Tracking"]} />
            <ProjectCard title="Banking App" description="Secure transactions, transfers, and compliance." features={["Transfers", "KYC", "Reports", "Security"]} />
            <ProjectCard title="Healthcare" description="Appointments, records, HIPAA compliance." features={["Booking", "EMR", "Prescriptions", "Compliance"]} />
            <ProjectCard title="Telecom" description="Plans, billing, usage tracking." features={["Activation", "Billing", "Usage", "Support"]} />
            <ProjectCard title="ERP System" description="HR, finance, inventory modules." features={["Inventory", "HR", "Finance", "Reports"]} />
            <ProjectCard title="Social App" description="Posts, privacy, notifications." features={["Feed", "Privacy", "Comments", "Alerts"]} />
          </div>
        </div>
      </section>

      {/* ==================== LEARNING PATH ==================== */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white" id='learning-path'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your 12-Week Journey
            </h2>
            <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
              From beginner to job-ready QA professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LearningPhase phase="1" title="Foundation" weeks="Weeks 1-3" description="SDLC, STLC, QA roles, testing principles." />
            <LearningPhase phase="2" title="Core Skills" weeks="Weeks 4-6" description="Test design, documentation, RTM." />
            <LearningPhase phase="3" title="Execution" weeks="Weeks 7-9" description="Defect tracking, tools, bug reporting." />
            <LearningPhase phase="4" title="Mastery" weeks="Weeks 10-12" description="Projects, ISTQB, interviews, placement." />
          </div>
        </div>
      </section>

      {/* ==================== INSTRUCTOR ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50" id='instructor'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Learn from Industry Leaders
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of real QA experience from Fortune 500 companies.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Expert Mentorship</h3>
                <p className="text-lg text-gray-700">
                  Learn from ISTQB-certified trainers who’ve tested products at Microsoft, Amazon, and Google.
                </p>
                <div className="space-y-3">
                  <InstructorFeature text="15+ Years in QA" />
                  <InstructorFeature text="ISTQB Advanced Level" />
                  <InstructorFeature text="Trained 3000+ Testers" />
                  <InstructorFeature text="Active in QA Community" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 shadow-inner">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    RS
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Rajesh Sharma</h4>
                    <p className="text-indigo-600 font-medium">Lead QA Instructor</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  “I make testing simple, practical, and job-ready. My students don’t just learn — they get hired.”
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow">
                    <p className="text-2xl font-bold text-indigo-600">3000+</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow">
                    <p className="text-2xl font-bold text-cyan-600">18 Yrs</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CAREER OUTCOMES ==================== */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white" id='career'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career & Salary
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Land high-paying QA roles in top companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Roles</h3>
              <JobRole role="Manual Tester" salary="₹3.5–6 LPA" />
              <JobRole role="QA Engineer" salary="₹4–7 LPA" />
              <JobRole role="Test Analyst" salary="₹4.5–7.5 LPA" />
              <JobRole role="QA Associate" salary="₹3–5.5 LPA" />
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Hiring Partners</h3>
              <div className="grid grid-cols-3 gap-3">
                {['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Capgemini'].map(name => (
                  <CompanyBadge key={name} name={name} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">100% Placement Support</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Resume, interviews, referrals — we’ve got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <PlacementFeature icon={<FileCheck className="w-10 h-10" />} title="Resume Help" description="ATS-friendly, QA-optimized resumes" />
              <PlacementFeature icon={<Users className="w-10 h-10" />} title="Mock Interviews" description="Real QA panel practice" />
              <PlacementFeature icon={<Briefcase className="w-10 h-10" />} title="Job Referrals" description="50+ direct company tie-ups" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 bg-white" id='testimonials'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From zero to hired — in just 12 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial name="Priya S." role="QA @ TCS" company="8 weeks" text="Zero IT background → Placed at TCS in 2 months!" rating={5} />
            <Testimonial name="Amit P." role="Tester @ Infosys" company="Career Switch" text="Switched from retail → ₹5 LPA in IT!" rating={5} />
            <Testimonial name="Sneha R." role="Analyst @ Wipro" company="Fresher" text="3 offers → Chose Wipro!" rating={5} />
          </div>
        </div>
      </section>

      {/* ==================== COMPARISON ==================== */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white" id='comparison'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Don’t settle for pre-recorded videos.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 mr-3" /> Our Course
                </h3>
                <div className="space-y-3">
                  <ComparisonFeature text="100+ hours live training" positive />
                  <ComparisonFeature text="5 real projects" positive />
                  <ComparisonFeature text="ISTQB prep included" positive />
                  <ComparisonFeature text="Lifetime access" positive />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-500 rounded-full mr-3 flex items-center justify-center text-white text-sm">×</span> Others
                </h3>
                <div className="space-y-3">
                  <ComparisonFeature text="40–60 hrs recorded" positive={false} />
                  <ComparisonFeature text="1–2 demo projects" positive={false} />
                  <ComparisonFeature text="No ISTQB prep" positive={false} />
                  <ComparisonFeature text="6-month access" positive={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OTHER COURSES (NEW) ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50" id='other-courses'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Other Courses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Level up your career with our expert-led programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <OtherCourseCard
              title="Automation Testing"
              duration="16 Weeks · Selenium + Java"
              price="₹24,999"
              originalPrice="₹39,999"
              popular
              features={["Selenium WebDriver", "Java OOPs", "TestNG + Maven", "API + CI/CD", "3 Live Projects"]}
            />
            <OtherCourseCard
              title="Full Stack QA"
              duration="20 Weeks · Manual + Auto"
              price="₹34,999"
              originalPrice="₹49,999"
              features={["Manual + Automation", "API + DB Testing", "Git, Jenkins", "5 Projects", "ISTQB + Placement"]}
            />
            <OtherCourseCard
              title="API Testing"
              duration="8 Weeks · Postman + RestAssured"
              price="₹14,999"
              originalPrice="₹24,999"
              features={["Postman Advanced", "RestAssured", "JSON/XML", "Automation", "Live API Project"]}
            />
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 bg-white" id='faq'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FAQs
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Got questions? We’ve got answers.
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem question="Any prior knowledge needed?" answer="None! We start from scratch. Perfect for freshers and career switchers." />
            <FAQItem question="Is ISTQB exam fee included?" answer="Curriculum is 100% aligned. Exam fee (~₹4,500) is separate." />
            <FAQItem question="Can I learn while working?" answer="Yes! Evening batches (7–9 PM IST) + recorded sessions." />
            <FAQItem question="What if I miss a class?" answer="All classes recorded. Lifetime access to portal." />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
      {children}
    </div>
  );
}

function SnapshotItem({
  icon,
  label,
  value,
  color,
}: {
  icon: ReactElement | ReactNode;
  label: string;
  value: string;
  /** Tailwind classes for the icon chip background/text, e.g. "bg-sky-50 text-sky-700" */
  color?: string;
}) {
  const colorClasses = color ?? "bg-slate-100 text-slate-700";
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${colorClasses}`}>{icon}</span>
      <div className="leading-tight">
        <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
        <div className="text-base font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}
