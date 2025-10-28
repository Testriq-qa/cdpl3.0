// components/our-team/LeadershipSpotlight.tsx
""
import {
    Sparkles,
    ShieldCheck,
    Users2,
    GraduationCap,
    Linkedin,
    MapPin,
} from "lucide-react";
import { useRef, useState, useEffect, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import clsx from 'clsx';
import Link from "next/link";
import Image from "next/image";

// ⬇️ NEW: import the TeamLeaders type and the dataset
import type { TeamLeaders as TeamLeaderType } from "@/app/our-team/types";
import { teamLeaders } from "@/app/our-team/data";
import { ReactNode } from "react";

interface TeamMember {
    name: string;
    title: string;
    avatar?: string;
    experience: string;
    specialization: string;
    location?: string;
    bio?: string;
    expertise?: string[];
    achievements: string[];
    linkedin?: string;
    gradient?: string; // optional custom gradient seed
}

type Props = { data: TeamMember[] };

export default function LeadershipSpotlight({ }: Props) {
    // ⬇️ Source now comes from teamLeaders; filter to Leadership (keeps section semantics)
    const leaders = teamLeaders;

    return (
        <section
            id="leadership"
            aria-labelledby="leadership-heading"
            className="relative mx-auto max-w-7xl px-4 py-6 md:py-16 sm:px-6 lg:px-8"
        >
            {/* Subtle background gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 to-transparent opacity-60"
            />

            {/* Header Section */}
            <div className="mb-12 text-center">
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <Sparkles className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                        Future-Ready Leadership
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                        ISO-Aligned Training
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <GraduationCap className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                        Mentor-Led Learning
                    </span>
                </div>

                <h2
                    id="leadership-heading"
                    className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
                >
                    Meet Our <span className="text-brand">Leaders</span>
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                    Learn from industry veterans who architect{" "}
                    <strong className="text-slate-700">job-ready, mentor-led programs</strong> with{" "}
                    <strong className="text-slate-700">real-world projects</strong>,{" "}
                    <strong className="text-slate-700">placement support</strong>, and continuously updated,{" "}
                    <strong className="text-slate-700">ISO-aligned curriculum</strong>.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="mb-16 grid gap-4 sm:grid-cols-3">
                <StatCard
                    icon={Users2}
                    value={
                        <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                            10k+
                        </span>
                    }
                    label="Learners mentored"
                    description="Live cohorts & 1:1 guidance"
                />

                <StatCard
                    icon={ShieldCheck}
                    value={
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            75+
                        </span>
                    }
                    label="Hiring partner touchpoints"
                    description="Referrals & interview prep"
                />

                <StatCard
                    icon={GraduationCap}
                    value={
                        <span className="text-lime-500">
                            94%
                        </span>
                    }
                    label="Capstone success rate"
                    description="Portfolio-first outcomes"
                />
            </div>


            {/* Leader Cards - Full Width (from teamLeaders) */}
            <div className="space-y-16">
                {leaders.map((leader, index) => (
                    <LeaderCard key={leader.id + "-" + index} leader={leader} index={index} />
                ))}
            </div>


        </section>
    );
}

// Stat Card Component
function StatCard({
    icon: Icon,
    value,
    label,
    description,
}: {
    icon: React.ElementType;
    value: ReactNode;
    label: string;
    description: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                    <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                    <p className="text-3xl font-bold text-slate-900">{value}</p>
                    <p className="mt-1 font-semibold text-slate-800">{label}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{description}</p>

            {/* Decorative element */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
        </div>
    );
}

// Leader Card Component - Full Width with Futuristic Design
function LeaderCard({ leader, index }: { leader: TeamLeaderType; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/60 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-700" aria-hidden="true" />
            
            <div className={`relative flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Avatar Section */}
                <div className="relative mx-auto shrink-0 lg:mx-0">
                    {/* Gradient ring */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 rounded-3xl opacity-0 blur-lg group-hover:opacity-30 transition-all duration-500" aria-hidden="true" />
                    
                    <div className="relative h-48 w-48 lg:h-64 lg:w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg transition-all duration-500 group-hover:shadow-xl">
                        {leader.avatar ? (
                            <Image
                                src={leader.avatar}
                                alt={`${leader.name} - ${leader.title}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                sizes="(max-width: 1024px) 192px, 256px"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-6xl lg:text-7xl font-bold text-white">
                                {leader.name.charAt(0)}
                            </div>
                        )}
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent" aria-hidden="true" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                    {/* Header with accent line */}
                    <div className="space-y-3 relative">
                        <div className="absolute left-0 top-2 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" aria-hidden="true" />
                        
                        <div className="pl-6">
                            <h3 className="text-3xl font-bold text-slate-900 lg:text-4xl tracking-tight">
                                {leader.name}
                            </h3>
                            
                            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 lg:text-xl mt-1">
                                {leader.title}
                            </p>
                        </div>
                    </div>

                    {/* Meta Info Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {leader.experience && (
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100 shadow-sm">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {leader.experience}
                            </span>
                        )}
                        
                        {leader.specialization && (
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-100 shadow-sm">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {leader.specialization}
                            </span>
                        )}

                        {leader.location && (
                            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100 shadow-sm">
                                <MapPin className="h-4 w-4" />
                                {leader.location}
                            </span>
                        )}
                    </div>

                    {/* Bio */}
                    {leader.bio && (
                        <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
                            {leader.bio}
                        </p>
                    )}

                    {/* Expertise Grid */}
                    {leader.expertise && leader.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Achievements */}
                    {leader.achievements && leader.achievements.length > 0 && (
                        <div className="space-y-3 bg-slate-50/50 rounded-2xl p-5 border border-slate-100">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Key Achievements
                            </h4>
                            <div className="space-y-2.5">
                                {leader.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className="flex items-start gap-3 group/achievement">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 group-hover/achievement:scale-125 transition-transform" />
                                        <span className="text-sm text-slate-600 leading-relaxed">
                                            {achievement}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* LinkedIn Button */}
                    {leader.linkedin && (
                        <div className="pt-2">
                            <Link
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Connect with ${leader.name} on LinkedIn`}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                <Linkedin className="h-4 w-4" />
                                Connect on LinkedIn
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom gradient border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        </div>
    );
}