// =============================
// components/our-team/TeamDirectory.tsx
// =============================
"use client";


import { useId, useMemo, useState } from "react";
import type { TeamMember } from "@/app/our-team/types";
import { TeamCard } from "@/app/our-team/ui";
import { Search, Filter } from "lucide-react";


export default function TeamDirectory({ data }: { data: TeamMember[] }) {
    const [query, setQuery] = useState("");
    const [role, setRole] = useState<"All" | TeamMember["role"]>("All");
    const [skill, setSkill] = useState<string>("All");
    const id = useId();


    const skills = useMemo(() => {
        const s = new Set<string>();
        data.forEach((m) => m.expertise.forEach((e) => s.add(e)));
        return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
    }, [data]);


    const roles: ("All" | TeamMember["role"])[] = ["All", "Leadership", "Faculty", "Advisory", "Operations"];


    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return data.filter((m) => {
            const matchesRole = role === "All" || m.role === role;
            const matchesSkill = skill === "All" || m.expertise.includes(skill);
            const matchesSearch =
                q.length === 0 || [m.name, m.title, m.bio, ...m.expertise].join(" ").toLowerCase().includes(q);
            return matchesRole && matchesSkill && matchesSearch;
        });
    }, [data, query, role, skill]);

    return (
        <section id="directory" aria-labelledby={`${id}-directory`} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 id={`${id}-directory`} className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Our Team Directory</h2>


            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <label className="relative">
                    <span className="sr-only">Search team</span>
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search mentors by name, skill, or role…"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                </label>


                <label className="relative">
                    <span className="inline-flex items-center gap-2 pb-1 text-xs font-medium text-slate-600">
                        <Filter className="h-3.5 w-3.5" /> Role
                    </span>
                    <select
                        aria-label="Filter by role"
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        {roles.map((r) => (
                            <option key={r} value={r}>{r}</option>
                        ))}
                    </select>
                </label>

                <label className="relative">
                    <span className="inline-flex items-center gap-2 pb-1 text-xs font-medium text-slate-600">
                        <Filter className="h-3.5 w-3.5" /> Expertise
                    </span>
                    <select
                        aria-label="Filter by expertise"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        {skills.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </label>
            </div>


            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((m) => (
                    <TeamCard key={m.id} m={m} />
                ))}
            </div>


            {filtered.length === 0 && (
                <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-600">
                    No results. Try a different keyword or filter.
                </div>
            )}
        </section>
    );
}