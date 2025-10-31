'use client';

import { Home, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMemo, type ComponentType, type SVGProps } from 'react';
import type { ServiceClient, DeliveryFormat } from '@/types/service';

const RequestButton = dynamic(() => import('@/app/services/[slug]/RequestButton'), {
    loading: () => (
        <div className="inline-flex items-center px-8 py-4 bg-gray-200 rounded-xl animate-pulse">
            <div className="h-4 w-32 bg-gray-300 rounded" />
        </div>
    ),
});

// Strongly-typed icon resolver (no `any`)
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;
function getIcon(name: string): LucideIcon {
    const key = name as keyof typeof Icons;
    const Icon = Icons[key];
    return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

export default function ServiceDetailHeroSection({ service }: { service: ServiceClient }) {
    const IconComponent = getIcon(service.iconName);

    const breadcrumbs = useMemo(
        () => [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title, href: `/services/${service.slug}` },
        ],
        [service.slug, service.title]
    );

    return (
        <section className="relative isolate overflow-hidden">
            {/* Floral-ish pattern layer (subtle) */}
            <div
                aria-hidden
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage:
                        'radial-gradient(60% 50% at 10% 10%, rgba(14,165,233,0.10), transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(99,102,241,0.10), transparent 60%)',
                }}
            />
            {/* light grid overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
                style={{
                    backgroundImage:
                        'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                    maskImage: 'radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)',
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-14">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => (
                            <li key={c.href} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                <Link
                                    href={c.href}
                                    className={i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : 'hover:text-sky-700'}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
                    <div className="md:col-span-7 lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-3 py-1 text-[11px] font-medium text-sky-700 shadow-sm backdrop-blur">
                            🚀 Mentor-led • 🎯 Job-ready curriculum
                        </span>

                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                            {service.title}
                        </h1>
                        <p className="mt-3 text-lg text-slate-700 max-w-prose">{service.tagline}</p>
                        <p className="mt-2 text-[15px] text-slate-700 max-w-2xl">{service.shortDescription}</p>

                        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                            {(service.keywords ?? [
                                'industry-relevant projects',
                                'placement assistance',
                                'certification',
                                'hands-on labs',
                            ]).map((k) => (
                                <span
                                    key={k}
                                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 ring-1 ring-slate-200 text-slate-700"
                                >
                                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                                    {k}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <RequestButton serviceTitle={service.title} />
                        </div>
                    </div>

                    <div className="md:col-span-5 lg:col-span-5">
                        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/70 via-indigo-100/60 to-orange-100/70 shadow-2xl">
                            <div className="rounded-[calc(1.5rem-1px)] backdrop-blur bg-white/80 p-8">
                                <div className="w-20 h-20 rounded-2xl bg-slate-900/5 flex items-center justify-center">
                                    <IconComponent className="w-12 h-12 text-slate-800" />
                                </div>
                                <h2 className="mt-5 text-2xl font-bold text-slate-900">Program Overview</h2>
                                <ul className="mt-4 space-y-3 text-slate-700">
                                    {(service.deliveryFormats ?? []).map((f: DeliveryFormat, idx: number) => (
                                        <li key={String(idx)} className="flex items-start gap-3">
                                            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-sky-500" />
                                            <div>
                                                <div className="font-semibold">{f.format}</div>
                                                <div className="text-sm opacity-80">
                                                    {f.duration} • {f.description}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
