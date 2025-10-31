/* ==================== WHY LEARN (Manual Testing 2025) ==================== */

import {
    TrendingUp,
    Target,
    Zap,
    Award,
    BookOpen,
    Shield,
    Users,
    Briefcase,
    Clock,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

import Link from "next/link";

type BenefitCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights?: string[];
    accent?: "indigo" | "emerald" | "amber" | "rose" | "sky" | "violet";
};

const accentStyles: Record<NonNullable<BenefitCardProps["accent"]>, string> = {
    indigo:
        "ring-indigo-200 bg-indigo-700",
    emerald:
        "ring-emerald-200 bg-emerald-700",
    amber:
        "ring-amber-200 bg-amber-700",
    rose: "ring-rose-200 bg-rose-700",
    sky: "ring-sky-200 bg-sky-700",
    violet:
        "ring-violet-200 bg-violet-700",
};

function BenefitCard({
    icon,
    title,
    description,
    highlights = [],
    accent = "indigo",
}: BenefitCardProps) {
    return (
        <article
            className="group h-full rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm transition-all hover:shadow-md"
            role="listitem"
        >
            <div
                className={`inline-flex w-12 h-12 text-white items-center justify-center rounded-xl ring-1 ${accentStyles[accent]} transition-colors`}
                aria-hidden="true"
            >
                {icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>

            {highlights.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm">
                    {highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-gray-400" />
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}

export default function WhyLearnSection() {
    return (
        <section
            className="py-5 md:py-10 bg-gradient-to-b from-white to-indigo-50"
            id="why-learn"
            aria-labelledby="why-learn-title"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="inline-flex items-center gap-2 rounded-full border border-slate-300 shadow-md bg-white px-3 py-2 text-[13px] font-medium text-indigo-700">
                        <Shield className="h-4 w-4" />
                        Industry-aligned QA career path
                    </p>
                    <h2
                        id="why-learn-title"
                        className="mt-4 text-4xl font-bold text-gray-900"
                    >
                        Why <span className="bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">Manual Testing</span> in 2025?
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        The foundation of <strong>software quality assurance</strong> — high
                        demand, beginner-friendly, and a proven gateway to{" "}
                        <strong>automation testing</strong>, <strong>API testing</strong>,
                        and <strong>DevOps-ready QA</strong>.
                    </p>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                    <div className="rounded-xl border-2 border-emerald-600 bg-white p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-gray-800">
                            <TrendingUp className="h-5 w-5 text-emerald-600" />
                            <span className="text-sm font-semibold">Hiring Demand</span>
                        </div>
                        <p className="mt-1 text-2xl font-bold text-gray-900">10k+/mo</p>
                        <p className="text-xs text-gray-500">QA/Test Engineer roles</p>
                    </div>
                    <div className="rounded-xl border-2 border-indigo-600 bg-white p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-gray-800">
                            <Clock className="h-5 w-5 text-indigo-600" />
                            <span className="text-sm font-semibold">Time to Job</span>
                        </div>
                        <p className="mt-1 text-2xl font-bold text-gray-900">8–12 weeks</p>
                        <p className="text-xs text-gray-500">structured learning track</p>
                    </div>
                    <div className="rounded-xl border-2 border-amber-600 bg-white p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-gray-800">
                            <Briefcase className="h-5 w-5 text-amber-600" />
                            <span className="text-sm font-semibold">Starter CTC</span>
                        </div>
                        <p className="mt-1 text-2xl font-bold text-gray-900">₹3.5–6 LPA</p>
                        <p className="text-xs text-gray-500">India, fresher QA roles</p>
                    </div>
                    <div className="rounded-xl border-2 border-rose-600 bg-white p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-gray-800">
                            <Users className="h-5 w-5 text-rose-600" />
                            <span className="text-sm font-semibold">Beginner-Friendly</span>
                        </div>
                        <p className="mt-1 text-2xl font-bold text-gray-900">No Coding</p>
                        <p className="text-xs text-gray-500">start from zero</p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    role="list"
                    aria-label="Key benefits of learning Manual Testing"
                >
                    <BenefitCard
                        icon={<TrendingUp className="h-6 w-6" />}
                        title="Consistent Hiring Across Industries"
                        description="Every product—fintech, e-commerce, healthcare, SaaS—needs reliable QA to ship confidently."
                        highlights={[
                            "Work with web, mobile, and API layers",
                            "Join Agile/Scrum teams from day one",
                            "Real impact on release quality",
                        ]}
                        accent="emerald"
                    />
                    <BenefitCard
                        icon={<Target className="h-6 w-6" />}
                        title="No Coding Prerequisite"
                        description="Manual testing builds analytical thinking, test design, and defect reporting—no prior programming needed."
                        highlights={[
                            "Test case writing & boundary analysis",
                            "Bug tracking (Jira) & reporting",
                            "Collaboration with Dev & Product",
                        ]}
                        accent="indigo"
                    />
                    <BenefitCard
                        icon={<Zap className="h-6 w-6" />}
                        title="Fast Career Launch"
                        description="Master core QA skills quickly with hands-on projects, interviews, and portfolio-ready case studies."
                        highlights={[
                            "Live projects & capstones",
                            "Interview prep & mock tests",
                            "Portfolio on GitHub/Notion",
                        ]}
                        accent="amber"
                    />
                    <BenefitCard
                        icon={<Award className="h-6 w-6" />}
                        title="ISTQB/Global Certification"
                        description="Stand out with internationally recognized QA credentials and standardized testing knowledge."
                        highlights={[
                            "Syllabus-aligned training",
                            "Exam strategy & practice sets",
                            "Credibility with recruiters",
                        ]}
                        accent="violet"
                    />
                    <BenefitCard
                        icon={<BookOpen className="h-6 w-6" />}
                        title="Gateway to Automation"
                        description="Manual first, automation next—transition smoothly to Selenium, Cypress, and API test frameworks."
                        highlights={[
                            "Strong fundamentals = easier automation",
                            "Data-driven testing mindset",
                            "Bridges into SDET roles",
                        ]}
                        accent="sky"
                    />
                    <BenefitCard
                        icon={<Shield className="h-6 w-6" />}
                        title="Recession-Resilient Skill"
                        description="Quality is non-negotiable: companies prioritize user experience, security, and reliability—always."
                        highlights={[
                            "Critical for regulated domains",
                            "Reduces production incidents",
                            "Protects brand & retention",
                        ]}
                        accent="rose"
                    />
                </div>

                {/* Learning Path (micro-journey) */}
                <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                    <div className="md:flex md:items-center md:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Your 12-Week QA Learning Path
                            </h3>
                            <p className="mt-2 text-gray-600">
                                A curated roadmap to land entry-level{" "}
                                <strong>Manual Tester</strong> /{" "}
                                <strong>QA Engineer</strong> roles with job-ready skills and
                                interview confidence.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-3">
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                            >
                                View curriculum <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#apply"
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                            >
                                Apply now
                            </Link>
                        </div>
                    </div>

                    <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: "Weeks 1–3",
                                title: "QA Mindset & Test Design",
                                points: ["SDLC/STLC", "Test cases", "Bug life cycle"],
                            },
                            {
                                step: "Weeks 4–6",
                                title: "Web/Mobile/App Testing",
                                points: ["UI/UX checks", "Compatibility", "Accessibility"],
                            },
                            {
                                step: "Weeks 7–9",
                                title: "API & Database Basics",
                                points: ["Postman flows", "SQL checks", "Auth & status codes"],
                            },
                            {
                                step: "Weeks 10–12",
                                title: "Projects & Placement",
                                points: ["Capstone", "Resume/LinkedIn", "Mock interviews"],
                            },
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="rounded-xl border border-gray-200 bg-white p-4"
                            >
                                <p className="text-xs font-semibold text-indigo-700">
                                    {item.step}
                                </p>
                                <h4 className="mt-1 text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h4>
                                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                                    {item.points.map((p, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-gray-400" />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* SEO Helper Text */}
                <p className="sr-only">
                    Learn manual testing, QA fundamentals, software testing certification,
                    ISTQB preparation, API testing with Postman, test case design,
                    Agile/Scrum workflows, defect tracking with Jira, and portfolio-ready
                    projects for high-demand QA careers in 2025.
                </p>
            </div>

            {/* JSON-LD FAQ for SEO (rich results) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Is manual testing still relevant in 2025?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Yes. Manual testing remains essential for user experience, exploratory testing, accessibility, and validating edge cases before automation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do I need coding skills to start in QA?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "No. You can start with manual testing and later transition to automation with tools like Selenium and Cypress.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does it take to become job-ready?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "With a focused curriculum and hands-on projects, most learners become job-ready in 8–12 weeks.",
                                },
                            },
                        ],
                    }),
                }}
            />
        </section>
    );
}
