"use client";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

/**
 * CDPL — Roles Breakdown (White theme, non-hero scale)
 * - White cards, dark text
 * - Only ORANGE + BLUE gradients (no purple)
 * - Smooth enter animation
 * - Custom tooltip (white) + no black focus outline
 * - Horizontal consistency:
 *    - If the page already uses `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,
 *      keep `contained` false (default) to avoid double padding.
 *    - Set `contained` to true only when this section should add the container itself.
 * - Non-hero typography:
 *    • Section title: text-lg font-semibold (→ sm:text-xl)
 *    • Legend label chip: text-xs → sm:text-sm
 *    • Legend value: text-base → sm:text-lg, font-bold
 */

const DATA = [
    { name: "QA", value: 32 },
    { name: "Full-Stack", value: 28 },
    { name: "Data", value: 22 },
    { name: "Cloud/DevOps", value: 18 },
];

// SVG gradient ids for <Cell fill="url(#id)">
const GRAD_IDS = [
    "grad-orange-strong",
    "grad-blue-strong",
    "grad-blue-soft",
    "grad-orange-soft",
];

// Matching CSS gradients for legend chips (order ↔ GRAD_IDS)
const GRAD_CSS = [
    "linear-gradient(90deg,#ff8c00 0%,#ffa94d 55%,#ffd29a 100%)",
    "linear-gradient(90deg,#1fa7e8 0%,#45c3ff 55%,#aee9ff 100%)",
    "linear-gradient(90deg,#7bd5ff 0%,#58c6ff 55%,#1fa7e8 100%)",
    "linear-gradient(90deg,#ffd29a 0%,#ffa94d 55%,#ff8c00 100%)",
];

type Props = {
    contained?: boolean;
};

export default function PlacementsRolesBreakdownSection({ contained = false }: Props) {
    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
            <>{children}</>
        );

    return (
        <section className="w-full py-10 sm:py-12" aria-label="CDPL roles breakdown">
            <Wrapper>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Roles Breakdown</h3>

                <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Chart Card — WHITE */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    {/* Remove weird black outline on click/focus */}
                                    <style jsx global>{`
                    .recharts-wrapper svg,
                    .recharts-surface {
                      outline: none !important;
                    }
                  `}</style>

                                    {/* Orange + Blue gradients only */}
                                    <defs>
                                        {/* ORANGE — darker to peach */}
                                        <linearGradient id="grad-orange-strong" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="0%" stopColor="#ff8c00" />
                                            <stop offset="55%" stopColor="#ffa94d" />
                                            <stop offset="100%" stopColor="#ffd29a" />
                                        </linearGradient>

                                        {/* BLUE — deep to light */}
                                        <linearGradient id="grad-blue-strong" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="0%" stopColor="#1fa7e8" />
                                            <stop offset="55%" stopColor="#45c3ff" />
                                            <stop offset="100%" stopColor="#aee9ff" />
                                        </linearGradient>

                                        {/* BLUE — light to deep */}
                                        <linearGradient id="grad-blue-soft" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="0%" stopColor="#7bd5ff" />
                                            <stop offset="55%" stopColor="#58c6ff" />
                                            <stop offset="100%" stopColor="#1fa7e8" />
                                        </linearGradient>

                                        {/* ORANGE — peach to darker */}
                                        <linearGradient id="grad-orange-soft" x1="0" x2="1" y1="0" y2="0">
                                            <stop offset="0%" stopColor="#ffd29a" />
                                            <stop offset="55%" stopColor="#ffa94d" />
                                            <stop offset="100%" stopColor="#ff8c00" />
                                        </linearGradient>
                                    </defs>

                                    <Pie
                                        data={DATA}
                                        dataKey="value"
                                        innerRadius={70}
                                        outerRadius={110}
                                        paddingAngle={2}
                                        isAnimationActive
                                        animationDuration={700}
                                    >
                                        {DATA.map((entry, i) => (
                                            <Cell
                                                key={entry.name}
                                                fill={`url(#${GRAD_IDS[i % GRAD_IDS.length]})`}
                                                stroke="transparent"
                                            />
                                        ))}
                                    </Pie>

                                    <Tooltip
                                        cursor={false}
                                        wrapperStyle={{ outline: "none" }}
                                        contentStyle={{
                                            borderRadius: 12,
                                            background: "#ffffff",
                                            border: "1px solid rgba(148,163,184,0.35)",
                                            boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
                                        }}
                                        labelStyle={{ color: "#0f172a", fontWeight: 600 }}
                                        itemStyle={{ color: "#0f172a" }}
                                        formatter={(value: number, name: string) => [`${value}%`, name]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Legend Card — WHITE */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <ul className="space-y-3">
                            {DATA.map((d, i) => (
                                <li key={d.name} className="flex items-center justify-between text-slate-800">
                                    <span className="flex items-center gap-3">
                                        <span
                                            className="inline-block h-3 w-3 rounded-sm"
                                            style={{ background: GRAD_CSS[i % GRAD_CSS.length] }}
                                        />
                                        <span
                                            className="inline-flex items-center rounded-md px-2 py-0.5 text-xs sm:text-sm font-medium text-slate-900"
                                            style={{ background: GRAD_CSS[i % GRAD_CSS.length] }}
                                        >
                                            {d.name}
                                        </span>
                                    </span>
                                    <b className="text-slate-900 text-base sm:text-lg font-bold">{d.value}%</b>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-sm text-slate-500">
                            Based on verified CDPL placement records over recent cohorts.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
