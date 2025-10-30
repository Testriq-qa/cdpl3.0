"use client";

import { useMemo } from "react";
import {
  Clock,
  Star,
  BadgeCheck,
  TrendingUp,
  Zap,
  ShieldCheck,
  BookOpen,
  Layers,
  Code,
  Network,
  BarChart3,
  Smartphone,
  ArrowRight,
} from "lucide-react";

type Course = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  originalPrice?: string;
  features: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  mode: "Online" | "Hybrid" | "Classroom";
  badge?: "Most Popular" | "New" | "Placement Prep";
  accent: string; // Tailwind color (no gradient)
  icon: React.ReactNode;
};

const COURSES: Course[] = [
  {
    slug: "automation-testing-selenium-java",
    title: "Automation Testing (Selenium + Java)",
    duration: "16 Weeks",
    price: "₹24,999",
    originalPrice: "₹39,999",
    features: [
      "Selenium WebDriver",
      "Java OOPs + Collections",
      "TestNG + Maven",
      "API + CI/CD (Jenkins, GitHub Actions)",
      "3 Industry Projects",
    ],
    level: "Intermediate",
    mode: "Online",
    badge: "Most Popular",
    accent: "indigo",
    icon: <Code className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "full-stack-qa-manual-automation",
    title: "Full-Stack QA (Manual + Automation)",
    duration: "20 Weeks",
    price: "₹34,999",
    originalPrice: "₹49,999",
    features: [
      "Manual + Automation",
      "API & DB Testing",
      "Git, Jenkins, Docker basics",
      "5 Capstone Projects",
      "ISTQB + Placement Assistance",
    ],
    level: "Advanced",
    mode: "Hybrid",
    badge: "Placement Prep",
    accent: "cyan",
    icon: <Layers className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "api-testing-postman-restassured",
    title: "API Testing (Postman + RestAssured)",
    duration: "8 Weeks",
    price: "₹14,999",
    originalPrice: "₹24,999",
    features: [
      "Postman Advanced",
      "RestAssured + Java",
      "JSON/XML + Auth",
      "Automation Frameworks",
      "Live API Project",
    ],
    level: "Intermediate",
    mode: "Online",
    accent: "emerald",
    icon: <Network className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "performance-testing-jmeter",
    title: "Performance Testing (JMeter)",
    duration: "6 Weeks",
    price: "₹12,499",
    features: [
      "Load/Stress/Soak Testing",
      "Throughput & Latency Analysis",
      "Distributed Testing",
      "Grafana + InfluxDB Dashboards",
      "Real E-commerce Scenario",
    ],
    level: "Intermediate",
    mode: "Online",
    badge: "New",
    accent: "amber",
    icon: <BarChart3 className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "mobile-app-testing",
    title: "Mobile App Testing (Android + iOS)",
    duration: "8 Weeks",
    price: "₹16,999",
    features: [
      "Appium Basics to Advanced",
      "Real Devices & Emulators",
      "Mobile Gestures & Locators",
      "Hybrid/Native App Coverage",
      "Device Lab Project",
    ],
    level: "Intermediate",
    mode: "Online",
    accent: "rose",
    icon: <Smartphone className="w-6 h-6" aria-hidden="true" />,
  },
  {
    slug: "istqb-foundation",
    title: "ISTQB® Foundation Certification Prep",
    duration: "4 Weeks",
    price: "₹9,999",
    features: [
      "Syllabus-Aligned Modules",
      "High-Yield Question Bank",
      "Mock Exams & Explanations",
      "Exam Strategy Workshops",
      "Official-Style Patterns",
    ],
    level: "Beginner",
    mode: "Online",
    accent: "sky",
    icon: <BookOpen className="w-6 h-6" aria-hidden="true" />,
  },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function accentClass(accent: Course["accent"]) {
  // subtle futuristic ring + border without gradients
  return {
    ring: `ring-1 ring-${accent}-200`,
    border: `border border-${accent}-100`,
    topBar: `bg-${accent}-600`,
    badge: `bg-${accent}-50 text-${accent}-700`,
    price: `text-${accent}-700`,
    check: `text-${accent}-600`,
    hover: `hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)]`,
  };
}

const Badge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">
    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
    {label}
  </span>
);

const Feature = ({ text, accent }: { text: string; accent: Course["accent"] }) => {
  const styles = accentClass(accent);
  return (
    <li className="flex items-start gap-3">
      <ShieldCheck className={cx("mt-0.5 h-5 w-5 flex-none", styles.check)} aria-hidden="true" />
      <span className="text-sm text-neutral-700">{text}</span>
    </li>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  const a = accentClass(course.accent);
  return (
    <article
      className={cx(
        "group relative flex flex-col rounded-2xl bg-white/90 backdrop-blur p-6 shadow-sm",
        a.border,
        a.ring,
        a.hover,
        "transition-shadow"
      )}
      itemScope
      itemType="https://schema.org/Course"
    >
      {/* top accent bar */}
      <div className={cx("absolute inset-x-0 -top-0.5 h-1.5 rounded-t-2xl", a.topBar)} aria-hidden="true" />

      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cx("grid place-items-center rounded-xl p-2.5 bg-neutral-50 ring-1 ring-neutral-200")}>
            {course.icon}
          </div>
          <h3 className="text-lg font-semibold text-neutral-900" itemProp="name">
            {course.title}
          </h3>
        </div>
        {course.badge && (
          <span className={cx("ml-3 hidden rounded-full px-2.5 py-1 text-xs font-medium md:inline-flex", a.badge)}>
            <SparkLine />
            {course.badge}
          </span>
        )}
      </header>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span itemProp="timeRequired">{course.duration}</span>
        </span>
        <Badge label={course.level} />
        <Badge label={course.mode} />
      </div>

      <ul className="mb-6 space-y-2" itemProp="description">
        {course.features.map((f) => (
          <Feature key={f} text={f} accent={course.accent} />
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between">
        <div>
          <div className={cx("text-2xl font-bold", a.price)} aria-label="Course Price">
            {course.price}
          </div>
          {course.originalPrice && (
            <div className="text-sm text-neutral-500 line-through">{course.originalPrice}</div>
          )}
        </div>
        <a
          href={`/courses/${course.slug}`}
          className={cx(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white",
            `bg-${course.accent}-700 hover:bg-${course.accent}-800`,
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            `focus-visible:ring-${course.accent}-600`
          )}
          aria-label={`View syllabus for ${course.title}`}
        >
          View Syllabus
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};

const SparkLine = () => (
  <svg className="mr-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 17l5-6 4 3 6-8 3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function OtherCoursesSection() {
  const itemListJson = useMemo(() => {
    const list = COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://example.com/courses/${c.slug}`,
      name: c.title,
    }));
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: list,
    };
  }, []);

  return (
    <section className="py-20 bg-white" id="other-courses" aria-label="Other professional software testing courses">
      {/* Invisible SEO keywords helper for screen readers and crawlers */}
      <p className="sr-only">
        Best software testing courses, automation testing with Selenium Java, full-stack QA training, API testing with
        Postman and RestAssured, performance testing JMeter, mobile app testing Appium, ISTQB Foundation certification.
        Job-ready curriculum, placement assistance, live projects.
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title block */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Explore <span className="underline decoration-indigo-300 decoration-4 underline-offset-4">Other Courses</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Accelerate your career with industry-ready, mentor-led training. Hands-on, project-based and aligned with
            high-demand QA jobs.
          </p>

          {/* trust strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200">
              <Star className="h-4 w-4" aria-hidden="true" /> 4.8/5 Learner Rating
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700 ring-1 ring-indigo-200">
              <TrendingUp className="h-4 w-4" aria-hidden="true" /> Job-Ready Curriculum
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700 ring-1 ring-cyan-200">
              <Zap className="h-4 w-4" aria-hidden="true" /> Live Projects & Labs
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>

        {/* Value props (simple, no gradients) */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <BadgeCheck className="h-5 w-5 text-indigo-600" aria-hidden="true" /> Industry-Validated Syllabus
            </h3>
            <p className="text-neutral-700 text-sm">
              Designed with input from hiring managers to help you master **Selenium, API testing, CI/CD, JMeter, and
              Appium** with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <ShieldCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" /> Placement Assistance
            </h3>
            <p className="text-neutral-700 text-sm">
              Resume reviews, mock interviews, and referrals to **QA Analyst**, **Automation Engineer**, and **SDET**
              roles.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <BookOpen className="h-5 w-5 text-rose-600" aria-hidden="true" /> Lifetime Learning Access
            </h3>
            <p className="text-neutral-700 text-sm">
              Get recordings, templates, and updates—stay current with **test automation frameworks** and **DevOps** trends.
            </p>
          </div>
        </div>

        {/* FAQ (native details/summary for zero deps) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h3>
          <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
            <details className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-neutral-900">
                <span className="font-medium">Do I need coding experience for these QA courses?</span>
                <Chevron />
              </summary>
              <p className="mt-3 text-sm text-neutral-700">
                **No.** Beginner-friendly tracks start with fundamentals. Coding is introduced gradually for automation and
                API testing.
              </p>
            </details>
            <details className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-neutral-900">
                <span className="font-medium">Are there live projects and interview preparation?</span>
                <Chevron />
              </summary>
              <p className="mt-3 text-sm text-neutral-700">
                Yes—each course includes **hands-on projects**, **mock interviews**, **resume reviews**, and **job-oriented
                assignments**.
              </p>
            </details>
            <details className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-neutral-900">
                <span className="font-medium">Can I switch between tracks later?</span>
                <Chevron />
              </summary>
              <p className="mt-3 text-sm text-neutral-700">
                You can upgrade to **Full-Stack QA** or add modules like **Performance** or **Mobile Testing** with
                prorated pricing.
              </p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm ring-1 ring-neutral-100">
          <h3 className="text-2xl font-bold text-neutral-900">
            Not sure which course fits you best?
          </h3>
          <p className="mt-2 text-neutral-700">
            Talk to a mentor for a personalized **career roadmap** based on your experience and goals.
          </p>
          <a
            href="/counselling"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
          >
            Get Free Counselling
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* JSON-LD for SEO Rich Results */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJson),
        }}
      />
    </section>
  );
}

/* ---------- Small inline icons (no dependency bloat) ---------- */
function Chevron() {
  return (
    <svg
      className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
