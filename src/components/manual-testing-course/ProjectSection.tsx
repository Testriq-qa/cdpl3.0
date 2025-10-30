/* ==================== PROJECTS ==================== */
"use client";
import {
    CheckCircle2,
    Clock3,
    Laptop,
    ShieldCheck,
    Building2,
    HeartPulse,
    ShoppingBag,
    Network,
    GraduationCap,
} from "lucide-react";
import type { JSX } from "react";


type AccentColor = "indigo" | "emerald" | "sky" | "amber" | "rose" | "violet";

type Project = {
    title: string;
    description: string;
    features: string[];
    domain: string;
    tools: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    color: AccentColor; // tailwind color token for accents (e.g., 'indigo', 'emerald')
    href?: string;
    outcomes: string[];
};

type ProjectCardProps = {
    project: Project;
};

const accentClasses: Record<AccentColor, string> = {
    indigo:
        "border-indigo-200 hover:shadow-indigo-100 [&_.chip]:bg-indigo-50 [&_.chip]:text-indigo-700 [&_.dot]:bg-indigo-500",
    emerald:
        "border-emerald-200 hover:shadow-emerald-100 [&_.chip]:bg-emerald-50 [&_.chip]:text-emerald-700 [&_.dot]:bg-emerald-500",
    sky:
        "border-sky-200 hover:shadow-sky-100 [&_.chip]:bg-sky-50 [&_.chip]:text-sky-700 [&_.dot]:bg-sky-500",
    amber:
        "border-amber-200 hover:shadow-amber-100 [&_.chip]:bg-amber-50 [&_.chip]:text-amber-800 [&_.dot]:bg-amber-500",
    rose:
        "border-rose-200 hover:shadow-rose-100 [&_.chip]:bg-rose-50 [&_.chip]:text-rose-700 [&_.dot]:bg-rose-500",
    violet:
        "border-violet-200 hover:shadow-violet-100 [&_.chip]:bg-violet-50 [&_.chip]:text-violet-700 [&_.dot]:bg-violet-500",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const colorClass = accentClasses[project.color];

    return (
        <article
            itemScope={true}
            itemType="https://schema.org/CreativeWork"
            aria-label={`${project.title} QA project`}
            className={`group relative rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${colorClass}`}
        >
            {/* Slim top bar accent */}
            <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-black/0 via-black/5 to-black/0" />

            <div className="mb-4 flex items-center gap-3">
                <span className="dot h-2.5 w-2.5 rounded-full" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {project.domain}
                </span>
            </div>

            <h3 itemProp="name" className="mb-2 text-xl font-bold text-gray-900">
                {project.title}
            </h3>

            <p itemProp="abstract" className="mb-4 text-sm leading-relaxed text-gray-600">
                {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
                <span className="chip inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium">
                    <ShieldCheck className="mr-1 h-3.5 w-3.5" />
                    {project.difficulty}
                </span>
                <span className="chip inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium">
                    <Clock3 className="mr-1 h-3.5 w-3.5" />
                    {project.duration}
                </span>
                <span className="chip inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium">
                    <Laptop className="mr-1 h-3.5 w-3.5" />
                    Tools: {project.tools.join(" · ")}
                </span>
            </div>

            <ul className="mb-5 grid grid-cols-2 gap-2" itemProp="about">
                {project.features.map((f, i) => (
                    <li key={`${project.title}-feature-${i}`} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 opacity-80" aria-hidden="true" />
                        <span>{f}</span>
                    </li>
                ))}
            </ul>

            {/* Learning outcomes (SEO: “learn”, “hands-on”, “job-ready”) */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Hands-On Learning Outcomes
                </p>
                <ul className="space-y-1">
                    {project.outcomes.map((o, i) => (
                        <li key={`${project.title}-outcome-${i}`} className="text-sm text-gray-700">
                            {o}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center justify-between">
                <a
                    href={project.href ?? "#apply"}
                    className="rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                    aria-label={`View ${project.title} project details`}
                >
                    View Details
                </a>
                <button
                    type="button"
                    className="rounded-lg px-3.5 py-2 text-sm font-semibold text-white transition"
                    style={{ backgroundColor: "var(--btn-color, #111827)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.95")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    aria-label={`Start ${project.title} project`}
                >
                    Start Project
                </button>
            </div>
            <meta itemProp="educationalUse" content="Practical, Portfolio, Job-Ready" />
        </article>
    );
};

const projects: Project[] = [
    {
        title: "E-Commerce QA Suite",
        description:
            "End-to-end manual testing for search, cart, checkout, payments, refunds, and order tracking across web & mobile.",
        features: ["Search Relevance", "Cart & Coupons", "Payment Gateways", "Order Tracking"],
        domain: "Retail · B2C",
        tools: ["Jira", "Postman", "BrowserStack"],
        difficulty: "Intermediate",
        duration: "2–3 Weeks",
        color: "indigo",
        href: "#ecommerce",
        outcomes: [
            "Design high-coverage test cases for complex user journeys",
            "Execute cross-browser & responsive test plans",
            "Log actionable defects with evidence & priority",
        ],
    },
    {
        title: "Banking & FinTech App",
        description:
            "Manual & API testing for secure logins, funds transfer, KYC, statements, and regulatory compliance workflows.",
        features: ["KYC/AML", "Funds Transfer", "Statements", "Alerts & OTP"],
        domain: "Finance · Compliance",
        tools: ["TestRail", "Postman", "Swagger"],
        difficulty: "Advanced",
        duration: "3–4 Weeks",
        color: "emerald",
        href: "#banking",
        outcomes: [
            "Validate security, privacy, and audit trails",
            "Author risk-based test scenarios and traceability",
            "Collaborate with DevOps for release sign-off",
        ],
    },
    {
        title: "Healthcare Patient Portal",
        description:
            "Test appointments, EMR workflows, e-prescriptions, and HIPAA-aligned privacy with real-world datasets.",
        features: ["Appointment Booking", "EMR", "e-Prescription", "Role-Based Access"],
        domain: "Healthcare · HIPAA",
        tools: ["Jira", "Zephyr", "Charles Proxy"],
        difficulty: "Intermediate",
        duration: "2–3 Weeks",
        color: "rose",
        href: "#healthcare",
        outcomes: [
            "Author role-based scenarios for clinicians & patients",
            "Verify data integrity and PHI masking",
            "Report defects with reproducible steps & HAR files",
        ],
    },
    {
        title: "Telecom Self-Care Portal",
        description:
            "Plans, billing, usage analytics, and support flows tested across high-traffic, multi-tenant environments.",
        features: ["Plan Activation", "Billing", "Usage Graphs", "Support Tickets"],
        domain: "Telecom · SaaS",
        tools: ["Jira", "Postman", "Kibana"],
        difficulty: "Beginner",
        duration: "1–2 Weeks",
        color: "sky",
        href: "#telecom",
        outcomes: [
            "Design smoke, sanity, and regression suites",
            "Use logs & analytics to triage defects",
            "Document RTM for stakeholder visibility",
        ],
    },
    {
        title: "ERP Modules (HR · Finance · Inventory)",
        description:
            "Modular testing of enterprise dashboards, approvals, and reporting with real-world role hierarchies.",
        features: ["Inventory", "HR Workflows", "Finance Reports", "Audit Logs"],
        domain: "Enterprise · ERP",
        tools: ["TestLink", "Jira", "MySQL Workbench"],
        difficulty: "Advanced",
        duration: "3–4 Weeks",
        color: "amber",
        href: "#erp",
        outcomes: [
            "Optimize test data and boundary value coverage",
            "Test complex approval chains and SLAs",
            "Deliver metrics: DRE, defect density, lead time",
        ],
    },
    {
        title: "Social Media & Community",
        description:
            "Manual testing for content feeds, privacy settings, notifications, and abuse reporting across devices.",
        features: ["Personalized Feed", "Privacy Controls", "Comments", "Notifications"],
        domain: "Consumer · UGC",
        tools: ["Jira", "Figma", "BrowserStack"],
        difficulty: "Intermediate",
        duration: "2 Weeks",
        color: "violet",
        href: "#social",
        outcomes: [
            "Test accessibility (WCAG) & localized content",
            "Validate notification rules & rate limits",
            "Drive UAT with real-world acceptance criteria",
        ],
    },
];

export default function ProjectsSection(): JSX.Element {
    // Structured data for SEO (ItemList of projects)
    const listJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "QA Portfolio Projects",
        itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "CreativeWork",
                name: p.title,
                about: p.domain,
                educationalUse: "Practical",
            },
        })),
    };

    return (
        <section className="py-20 bg-white" id="projects" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-14 text-center">
                    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
                        <GraduationCap className="h-3.5 w-3.5" />
                        Job-Ready QA Portfolio
                    </div>
                    <h2
                        id="projects-heading"
                        className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
                    >
                        Real-World Projects
                    </h2>
                    <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-600">
                        Build a <strong>job-winning QA portfolio</strong> with hands-on, instructor-reviewed
                        projects. Practice <strong>manual testing</strong>, <strong>API testing</strong>, and{" "}
                        <strong>test documentation</strong> used by top tech companies.
                    </p>

                    {/* Trust mini row */}
                    <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm text-gray-700">
                            <ShoppingBag className="mx-auto mb-1 h-4 w-4" />
                            E-Commerce
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm text-gray-700">
                            <Building2 className="mx-auto mb-1 h-4 w-4" />
                            Banking
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm text-gray-700">
                            <HeartPulse className="mx-auto mb-1 h-4 w-4" />
                            Healthcare
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center text-sm text-gray-700">
                            <Network className="mx-auto mb-1 h-4 w-4" />
                            Telecom
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>

                {/* SEO JSON-LD */}
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
                />
            </div>
        </section>
    );
}
