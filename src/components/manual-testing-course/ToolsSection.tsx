"use client";

import type { FC } from "react";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
    Wrench,
    Bug,
    Database,
    Network,
    Laptop,
    Boxes,
    Globe,
    Workflow,
    ClipboardCheck,
    Gauge,
    Rocket,
    GitBranch,
    ServerCog,
    Kanban,
    FlaskConical,
    FileSpreadsheet,
} from "lucide-react";

/* --------------------------------------------------------------------------
   Tools Section — Light theme, responsive, sleek (no heavy gradients)
   • SEO-first copy with high-intent keywords for an EdTech/QA institute
   • Clean, slightly futuristic cards with subtle borders, soft shadows, rings
   • Filter chips to explore categories (no external libs required)
   • JSON-LD ItemList injected for SEO rich results
   -------------------------------------------------------------------------- */

/* ============================== Types ============================== */
interface Category {
    id: "plan" | "test-mgmt" | "api-auto" | "perf" | "cross" | "data" | "devops" | "utils";
    label: string;
}

interface Tool {
    name: string;
    tagline: string;
    desc: string;
    category: Category["id"];
    tags?: string[];
}

interface ToolCardProps {
    tool: Tool;
    colorClass: string;
}

interface FilterChipProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

/** Utility to map a tool to an icon */
const iconFor = (tool: string): LucideIcon => {
    const map: Record<string, LucideIcon> = {
        Jira: Kanban,
        Zephyr: ClipboardCheck,
        TestRail: ClipboardCheck,
        Postman: Network,
        "REST Assured": FlaskConical,
        "Selenium WebDriver": Rocket,
        Cypress: Rocket,
        JMeter: Gauge,
        BrowserStack: Globe,
        Playwright: Rocket,
        "Chrome DevTools": Laptop,
        "MS Excel": FileSpreadsheet,
        Excel: FileSpreadsheet,
        MySQL: Database,
        MongoDB: Database,
        Git: GitBranch,
        GitHub: GitBranch,
        Jenkins: ServerCog,
        Confluence: Workflow,
        "Apache Kafka": Boxes,
        Fiddler: Bug,
        "Charles Proxy": Bug,
        Docker: Boxes,
        K6: Gauge,
    };
    return map[tool] || Wrench;
};

const CATEGORIES: Category[] = [
    { id: "plan", label: "Plan & Track" },
    { id: "test-mgmt", label: "Test Management" },
    { id: "api-auto", label: "API & Automation" },
    { id: "perf", label: "Performance & Monitoring" },
    { id: "cross", label: "Cross‑Browser & Mobile" },
    { id: "data", label: "Databases & Analytics" },
    { id: "devops", label: "Version Control & CI/CD" },
    { id: "utils", label: "Utilities & Debugging" },
];

const TOOL_DATA: Tool[] = [
    {
        name: "Jira",
        tagline: "Agile Issue Tracking",
        desc: "Plan sprints, manage user stories, and track defects with enterprise‑grade workflows.",
        category: "plan",
        tags: ["agile", "kanban", "scrum"],
    },
    {
        name: "Zephyr",
        tagline: "Native Test Management",
        desc: "Create test cases, map requirements, and view real‑time coverage inside Jira.",
        category: "test-mgmt",
        tags: ["test-cases", "coverage"],
    },
    {
        name: "TestRail",
        tagline: "Scalable Test Suites",
        desc: "Organize suites, track runs, and generate audit‑ready QA reports at scale.",
        category: "test-mgmt",
        tags: ["suites", "runs", "reports"],
    },
    {
        name: "Postman",
        tagline: "API Testing & Mocking",
        desc: "Design REST calls, validate responses, automate collections, and monitor APIs.",
        category: "api-auto",
        tags: ["api", "rest", "automation"],
    },
    {
        name: "REST Assured",
        tagline: "Java API Automation",
        desc: "Write robust API assertions in code for CI‑ready test pipelines.",
        category: "api-auto",
        tags: ["java", "assertions", "ci"],
    },
    {
        name: "Selenium WebDriver",
        tagline: "UI Automation at Scale",
        desc: "Automate browsers, build maintainable page objects, and run cross‑browser suites.",
        category: "api-auto",
        tags: ["ui", "e2e", "page-object"],
    },
    {
        name: "Cypress",
        tagline: "Fast Front‑End E2E",
        desc: "Flaky‑resistant web tests with time‑travel debugging and rich dashboards.",
        category: "api-auto",
        tags: ["front-end", "e2e"],
    },
    {
        name: "Playwright",
        tagline: "Reliable Cross‑Browser E2E",
        desc: "Auto‑waits, trace viewer, and parallel workers for stable end‑to‑end testing.",
        category: "api-auto",
        tags: ["cross-browser", "parallel"],
    },
    {
        name: "JMeter",
        tagline: "Performance & Load",
        desc: "Model realistic traffic, analyze throughput, and expose bottlenecks early.",
        category: "perf",
        tags: ["load", "stress", "latency"],
    },
    {
        name: "K6",
        tagline: "Developer‑centric Load Tests",
        desc: "Script performance scenarios in code and integrate with CI pipelines.",
        category: "perf",
        tags: ["scripting", "metrics"],
    },
    {
        name: "BrowserStack",
        tagline: "Real Devices & Browsers",
        desc: "Execute manual and automated tests on 3000+ real browsers and devices.",
        category: "cross",
        tags: ["devices", "cloud"],
    },
    {
        name: "Chrome DevTools",
        tagline: "Debugging & Audits",
        desc: "Trace network calls, measure performance, and inspect accessibility issues.",
        category: "utils",
        tags: ["debug", "a11y"],
    },
    {
        name: "MySQL",
        tagline: "Relational Database",
        desc: "Write SQL for data validation, joins, and analytics to ensure integrity.",
        category: "data",
        tags: ["sql", "joins"],
    },
    {
        name: "MongoDB",
        tagline: "NoSQL for QA",
        desc: "Query JSON‑like documents to verify event streams and microservices.",
        category: "data",
        tags: ["nosql", "json"],
    },
    {
        name: "Git",
        tagline: "Version Control",
        desc: "Branch, review, and manage test code with modern Git workflows.",
        category: "devops",
        tags: ["vcs", "review"],
    },
    {
        name: "GitHub",
        tagline: "Collaboration & PRs",
        desc: "Pull requests, code reviews, and actions to automate quality gates.",
        category: "devops",
        tags: ["pr", "actions"],
    },
    {
        name: "Jenkins",
        tagline: "Continuous Integration",
        desc: "Trigger pipelines, run suites in parallel, and publish reports on merge.",
        category: "devops",
        tags: ["ci", "pipeline"],
    },
    {
        name: "Confluence",
        tagline: "QA Knowledge Base",
        desc: "Document test strategies, runbooks, and RCA with reusable templates.",
        category: "plan",
        tags: ["docs", "rca"],
    },
    {
        name: "Excel",
        tagline: "Test Data & Analysis",
        desc: "Quickly model test data, pivot results, and share quality dashboards.",
        category: "utils",
        tags: ["data", "reporting"],
    },
    {
        name: "Fiddler",
        tagline: "Network Sniffing",
        desc: "Capture HTTP/S traffic to diagnose API errors and performance issues.",
        category: "utils",
        tags: ["proxy", "http"],
    },
    {
        name: "Charles Proxy",
        tagline: "Mobile & API Debugging",
        desc: "Rewrite rules, throttle bandwidth, and validate edge‑case behaviors.",
        category: "utils",
        tags: ["throttle", "rewrite"],
    },
];

const colorRing = [
    "ring-indigo-200",
    "ring-cyan-200",
    "ring-emerald-200",
    "ring-amber-200",
    "ring-fuchsia-200",
    "ring-sky-200",
];

const ToolsSection: FC = () => {
    const [active, setActive] = useState<string | "all">("all");

    const filtered = useMemo<Tool[]>(() => {
        if (active === "all") return TOOL_DATA;
        return TOOL_DATA.filter((t) => t.category === active);
    }, [active]);

    // JSON-LD for SEO: ItemList of tools
    const jsonLd = useMemo(() => {
        const items = TOOL_DATA.map((t, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: `${t.name} — ${t.tagline}`,
            description: t.desc,
        }));
        return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Top QA & Software Testing Tools You’ll Master",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            itemListElement: items,
        } as const;
    }, []);

    return (
        <section id="tools" aria-labelledby="tools-heading" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Headline */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 id="tools-heading" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Tools You’ll Master in Our QA Certification Course
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn industry‑standard <strong>software testing tools</strong> used by top product teams — from
                        <strong> agile test management</strong> and <strong>API testing</strong> to <strong>UI automation</strong>,
                        <strong> performance testing</strong>, and <strong>continuous integration</strong>.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
                    <FilterChip label="All Tools" active={active === "all"} onClick={() => setActive("all")} />
                    {CATEGORIES.map((c) => (
                        <FilterChip key={c.id} label={c.label} active={active === c.id} onClick={() => setActive(c.id)} />
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {filtered.map((tool, i) => (
                        <ToolCard key={tool.name} tool={tool} colorClass={colorRing[i % colorRing.length]} />
                    ))}
                </div>

                {/* SEO JSON-LD */}
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) as unknown as string }}
                />
            </div>
        </section>
    );
};

export default ToolsSection;

/* --------------------------------- Cards --------------------------------- */

const ToolCard: FC<ToolCardProps> = ({ tool, colorClass }) => {
    const Icon = iconFor(tool.name);
    return (
        <article
            className={`group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-300`}
            aria-label={`${tool.name} — ${tool.tagline}`}
        >
            <div className={`absolute inset-0 pointer-events-none ring-1 ${colorClass} rounded-2xl`} />

            <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center rounded-xl border bg-gray-50 border-gray-200 p-2.5">
                    <Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                </span>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">{tool.name}</h3>
                    <p className="text-sm text-indigo-700 mt-0.5">{tool.tagline}</p>
                </div>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{tool.desc}</p>

            {tool.tags && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {tool.tags.map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
                        >
                            #{t}
                        </span>
                    ))}
                </div>
            )}

            <span className="sr-only">Learn more about {tool.name}</span>
        </article>
    );
};

/* ------------------------------ Filter Chip ------------------------------ */
const FilterChip: FC<FilterChipProps> = ({ label, active, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm transition-colors ${active ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
            aria-pressed={active}
            aria-label={`Filter: ${label}`}
        >
            {label}
        </button>
    );
};
