"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, X } from "lucide-react";

type Placement = {
    name: string;
    role: string;
    company: string;
    city: string;
    pkg: string;
    domain: "QA" | "Data" | "Full-Stack" | "Cloud/DevOps";
};

const DATA: Placement[] = [
    { name: "Aarav", role: "QA Engineer", company: "AccuTest", city: "Pune", pkg: "6.0", domain: "QA" },
    { name: "Ishita", role: "Data Analyst", company: "InsightIQ", city: "Bengaluru", pkg: "7.5", domain: "Data" },
    { name: "Zara", role: "SDE", company: "CloudSprint", city: "Hyderabad", pkg: "10.0", domain: "Full-Stack" },
    { name: "Rohit", role: "DevOps Engineer", company: "BuildFlow", city: "Remote", pkg: "8.2", domain: "Cloud/DevOps" },
    { name: "Neha", role: "Automation Engg", company: "TestHub", city: "Mumbai", pkg: "7.0", domain: "QA" },
    { name: "Kabir", role: "Full-Stack Dev", company: "BrightApps", city: "Gurgaon", pkg: "8.4", domain: "Full-Stack" },
];

const DOMAINS = ["All", "QA", "Data", "Full-Stack", "Cloud/DevOps"] as const;

const DOMAIN_COLORS: Record<
    Placement["domain"],
    { bg: string; text: string; ring: string }
> = {
    QA: { bg: "bg-orange-50", text: "text-[#ff8c00]", ring: "ring-[#ff8c00]/20" },
    Data: { bg: "bg-sky-50", text: "text-sky-700", ring: "ring-sky-300/40" },
    "Full-Stack": { bg: "bg-violet-50", text: "text-violet-700", ring: "ring-violet-300/40" },
    "Cloud/DevOps": { bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-300/40" },
};

function companyInitials(name: string) {
    const parts = name.split(/\s+/).slice(0, 2);
    return parts.map((p) => p[0]?.toUpperCase() || "").join("");
}

type Props = {
    contained?: boolean;
};

export default function PlacementsFiltersGridSection({ contained = false }: Props) {
    const [q, setQ] = useState("");
    const [domain, setDomain] = useState<(typeof DOMAINS)[number]>("All");

    const results = useMemo(() => {
        return DATA.filter((d) => {
            const qok =
                !q ||
                `${d.name} ${d.role} ${d.company} ${d.city} ${d.pkg}`.toLowerCase().includes(q.toLowerCase());
            const dok = domain === "All" || d.domain === domain;
            return qok && dok;
        });
    }, [q, domain]);

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
            <>{children}</>
        );

    return (
        <section className="w-full py-10 sm:py-12">
            <Wrapper>
                {/* FILTER BAR */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                    {/* top accent line */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(255,140,0,.35), rgba(255,209,158,.35), rgba(126,231,255,.35), rgba(157,123,255,.35))",
                        }}
                    />

                    {/* Layout:
              - Default & sm: your original (stacked)
              - md (768) & lg (1024): FORCE three rows -> label, chips, input
              - xl+: back to single row inline with search pinned right
          */}
                    <div className="
              flex flex-col gap-3
              md:flex-col md:gap-3
              lg:flex-col lg:gap-3
              xl:flex-row xl:items-center xl:justify-between
            "
                    >
                        {/* 1) Filter by label */}
                        <div className="inline-flex items-center gap-2 text-slate-500">
                            <Filter className="h-4 w-4" />
                            <span className="text-sm sm:text-base">Filter by domain &amp; search</span>
                        </div>

                        {/* 2) Filter tags */}
                        <div className="flex flex-wrap gap-2">
                            {DOMAINS.map((d) => {
                                const active = domain === d;
                                return (
                                    <button
                                        key={d}
                                        onClick={() => setDomain(d)}
                                        className={`rounded-full border px-3 py-1 text-sm sm:text-base font-medium transition ${active
                                                ? "border-[#ff8c00] bg-orange-50 text-[#ff8c00]"
                                                : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                                            }`}
                                    >
                                        {d}
                                    </button>
                                );
                            })}
                        </div>

                        {/* 3) Search input */}
                        <div className="relative w-full xl:w-[380px] xl:justify-self-end">
                            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search name, role, company, city…"
                                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-9 py-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-200"
                            />
                            {q ? (
                                <button
                                    type="button"
                                    onClick={() => setQ("")}
                                    aria-label="Clear"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
                        <span>
                            Showing <span className="font-semibold">{results.length}</span>{" "}
                            {results.length === 1 ? "result" : "results"}
                        </span>
                        <span className="hidden sm:inline">Tip: Use domain chips to quickly narrow down.</span>
                    </div>

                    <AnimatePresence mode="popLayout">
                        {results.length === 0 ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center"
                            >
                                <p className="text-slate-700">No matches. Try a different search or domain.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 1 },
                                    show: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.05, delayChildren: 0.02 },
                                    },
                                }}
                                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
                            >
                                {results.map((p, idx) => {
                                    const theme = DOMAIN_COLORS[p.domain];
                                    return (
                                        <motion.div
                                            key={`${p.name}-${idx}`}
                                            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                                            whileHover={{ y: -2 }}
                                            transition={{ duration: 0.25 }}
                                            className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                        >
                                            <span
                                                aria-hidden
                                                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl ${theme.bg}`}
                                            />
                                            <div className="flex items-center gap-3">
                                                <div className={`grid h-10 w-10 place-items-center rounded-xl ring-4 ${theme.ring} ${theme.bg}`}>
                                                    <span className={`text-xs font-extrabold ${theme.text}`}>
                                                        {companyInitials(p.company)}
                                                    </span>
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="truncate text-xs sm:text-sm text-slate-500">
                                                        {p.company} • {p.city}
                                                    </p>
                                                    <h4 className="truncate text-lg sm:text-xl font-extrabold text-slate-900">
                                                        {p.name}
                                                    </h4>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-sm sm:text-base font-medium text-slate-800">{p.role}</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <span className={`rounded-md px-2 py-1 text-xs sm:text-sm font-semibold ${theme.bg} ${theme.text}`}>
                                                    {p.domain}
                                                </span>
                                                <span className="text-sm sm:text-base">
                                                    CTC: <b className="font-semibold">{p.pkg} LPA</b>
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Wrapper>
        </section>
    );
}
