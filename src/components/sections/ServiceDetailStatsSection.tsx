'use client';

import { useEffect, useRef, useState } from 'react';
import type { ServiceClient, StatItem } from '@/types/service';

function useOnScreen<T extends Element>(
    options: IntersectionObserverInit = { root: null, threshold: 0.25 }
) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), options);
        io.observe(el);
        return () => io.disconnect();
    }, [options]);

    return { ref, visible } as const;
}

function useCountUp(active: boolean, to: number, duration = 1600) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        let raf = 0;
        const start = performance.now();
        const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [active, to, duration]);
    return val;
}

function StatNumber({ item, active }: { item: StatItem; active: boolean }) {
    const isFloat = Number.isFinite(item.value) && !Number.isInteger(item.value);
    const end = isFloat ? Math.round(item.value * 10) : item.value;
    const val = useCountUp(active, end);
    const display = isFloat ? (val / 10).toFixed(1) : String(val);
    return (
        <>
            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                {display}
                {item.suffix ?? ''}
            </div>
            <div className="mt-1 text-sm md:text-base text-slate-600">{item.label}</div>
        </>
    );
}

export default function ServiceDetailStatsSection({ service }: { service: ServiceClient }) {
    const { ref, visible } = useOnScreen<HTMLDivElement>();

    const stats: StatItem[] = service.stats ?? [
        { label: 'Learners Trained', value: 12000 },
        { label: 'Average Rating', value: 4.8, suffix: '/5' },
        { label: 'Placement Success', value: 92, suffix: '%' },
        { label: 'Hiring Partners', value: 150 },
    ];

    return (
        <section ref={ref} className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="rounded-3xl bg-gradient-to-r from-sky-50 to-indigo-50 p-8 md:p-12 ring-1 ring-black/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <StatNumber item={s} active={visible} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
