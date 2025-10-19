"use client";

import { useMemo } from "react";

/**
 * CDPL — Hiring Partners Ticker (Alternating Rows)
 * SAME BEHAVIOR, but from **768px and smaller** the item cards get tighter:
 * - Card width shrinks: 220 → 180 (md) → 150 (sm) → 140 (≤425)
 * - Padding, pill size, gaps, and text scale down accordingly
 */

const COMPANIES = [
    "AccuTest",
    "InsightIQ",
    "CloudSprint",
    "BuildFlow",
    "TestHub",
    "BrightApps",
    "DataNest",
    "RouteOps",
    "SkyByte",
    "NovaStack",
    "GreenField",
    "MintLabs",
];

const GRADS = [
    "linear-gradient(90deg,#7ee7ff 0%,#9d7bff 100%)",
    "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)",
    "linear-gradient(90deg,#9d7bff 0%,#7ee7ff 100%)",
];

type TickerRowProps = {
    items: string[];
    direction: "ltr" | "rtl";
    speedSec?: number; // larger = slower
    startOffsetPct?: number; // to desync rows a bit
};

function TickerRow({ items, direction, speedSec = 26, startOffsetPct = 0 }: TickerRowProps) {
    const loopItems = useMemo(() => [...items, ...items], [items]);

    return (
        <div className="group relative isolate overflow-hidden rounded-2xl bg-transparent">
            <div
                className={`
          ticker-track flex gap-4 md:gap-3 sm:gap-2
          py-3 md:py-2.5 sm:py-2 will-change-transform
        `}
                style={
                    direction === "ltr"
                        ? {
                            animation: `cdpl-marquee-ltr ${speedSec}s linear infinite`,
                            transform: `translateX(${startOffsetPct}%)`,
                        }
                        : {
                            animation: `cdpl-marquee-rtl ${speedSec}s linear infinite`,
                            transform: `translateX(-${startOffsetPct}%)`,
                        }
                }
            >
                {loopItems.map((name, i) => {
                    const grad = GRADS[i % GRADS.length];
                    return (
                        <div
                            key={`${name}-${i}`}
                            className={`
                shrink-0
                w-[220px] md:w-[180px] sm:w-[150px] max-[425px]:w-[140px]
                rounded-2xl border border-slate-200/80 bg-white shadow-sm
                transition-shadow hover:shadow-md
              `}
                        >
                            <div className="px-5 py-5 md:px-4 md:py-4 sm:px-3 sm:py-3 text-center">
                                <div
                                    className="mx-auto h-8 w-28 md:h-7 md:w-24 sm:h-6 sm:w-20 max-[425px]:h-5 max-[425px]:w-16 rounded-md opacity-80"
                                    style={{ background: grad }}
                                />
                                {/* Keep larger text on lg+, scale down at md and below */}
                                <div className="mt-3 font-medium text-slate-900 lg:text-base md:text-sm sm:text-[13px] text-[13px]">
                                    {name}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pause the track when row OR any card is hovered */}
            <style jsx>{`
        .group:hover .ticker-track,
        .group .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}

type Props = {
    contained?: boolean;
};

export default function PlacementsCompanyWallSection({ contained = false }: Props) {
    const rows = useMemo(() => {
        const r1: string[] = [];
        const r2: string[] = [];
        const r3: string[] = [];
        COMPANIES.forEach((c, i) => {
            if (i % 3 === 0) r1.push(c);
            else if (i % 3 === 1) r2.push(c);
            else r3.push(c);
        });
        return [r1, r2, r3];
    }, []);

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
            <>{children}</>
        );

    return (
        <section className="w-full py-10 sm:py-12" aria-label="CDPL hiring partners">
            <Wrapper>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Hiring Partners</h3>
                    <div
                        aria-hidden
                        className="hidden sm:block h-[3px] w-40 rounded-full"
                        style={{ background: "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)" }}
                    />
                </div>

                <div className="mt-5 space-y-4">
                    <TickerRow items={rows[0]} direction="ltr" speedSec={28} startOffsetPct={0} />
                    <TickerRow items={rows[1]} direction="rtl" speedSec={26} startOffsetPct={12} />
                    <TickerRow items={rows[2]} direction="ltr" speedSec={30} startOffsetPct={24} />
                </div>
            </Wrapper>

            {/* Keyframes (scoped global) */}
            <style jsx global>{`
        @keyframes cdpl-marquee-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes cdpl-marquee-rtl {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
        </section>
    );
}
