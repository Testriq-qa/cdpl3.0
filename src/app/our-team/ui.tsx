"use client";


import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Star } from "lucide-react";
import type { TeamMember } from "./types";


export const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const fadeUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: easeBezier } as Transition,
};


export function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
            style={{ boxShadow: "0 8px 24px -10px rgba(2,6,23,0.08)", colorScheme: "light" }}
        >
            {children}
        </span>
    );
}


export function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700 ring-1 ring-orange-200">
            {children}
        </span>
    );
}

export function TeamCard({ m }: { m: TeamMember }) {
    return (
        <motion.article
            {...fadeUp}
            className="group relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ring-1 ring-slate-200/80"
        >
            <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white">
                    <Image
                        src={m.avatar}
                        alt={`${m.name} — ${m.title}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        priority
                    />
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-slate-900">{m.name}</h3>
                    <p className="text-sm text-slate-600">{m.title}</p>
                    {m.location && <p className="mt-0.5 text-xs text-slate-500">{m.location}</p>}
                    <p className="mt-3 line-clamp-3 text-sm text-slate-700">{m.bio}</p>
                    {m.expertise?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {m.expertise.slice(0, 5).map((x) => (
                                <Pill key={x}>{x}</Pill>
                            ))}
                        </div>
                    )}
                    {(m.linkedin || m.email) && (
                        <div className="mt-4 flex items-center gap-3">
                            {m.linkedin && (
                                <a
                                    href={m.linkedin}
                                    aria-label={`Open ${m.name}'s LinkedIn profile`}
                                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
                                >
                                    LinkedIn
                                </a>
                            )}
                            {m.email && (
                                <a
                                    href={m.email}
                                    aria-label={`Email ${m.name}`}
                                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900"
                                >
                                    Email
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {m.highlights && m.highlights.length > 0 && (
                <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 text-xs text-slate-600 sm:grid-cols-3">
                    {m.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1.5">
                            <Star className="h-3.5 w-3.5" aria-hidden /> {h}
                        </li>
                    ))}
                </ul>
            )}
            <div
                className="pointer-events-none absolute inset-x-0 -bottom-2 mx-4 h-8 rounded-3xl bg-gradient-to-b from-transparent to-orange-50/60 opacity-0 transition group-hover:opacity-100"
                aria-hidden
            />
        </motion.article>
    );
}