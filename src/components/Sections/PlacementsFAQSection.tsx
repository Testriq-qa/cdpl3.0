"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * CDPL — FAQ (Clean, minimal)
 * Horizontal consistency notes remain the same.
 */

const FAQS = [
    {
        q: "Are placements guaranteed?",
        a: "We don’t guarantee jobs. We guarantee rigorous training, interview prep, and access to our hiring network.",
    },
    {
        q: "Do you provide referrals?",
        a: "Yes—based on performance and project quality, mentors put you forward to partner companies.",
    },
    {
        q: "Is prior experience required?",
        a: "No. We have beginner-friendly tracks along with advanced modules for upskilling.",
    },
];

type Props = {
    contained?: boolean;
};

export default function PlacementsFAQSection({ contained = false }: Props) {
    const [open, setOpen] = useState<number | null>(0);

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        contained ? (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        ) : (
            <>{children}</>
        );

    return (
        <section className="w-full py-6 sm:py-8" aria-label="CDPL FAQs">
            <Wrapper>
                {/* Non-hero section title scale */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">FAQs</h3>

                <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="divide-y divide-gray-200">
                        {FAQS.map((f, idx) => {
                            const isOpen = open === idx;
                            const panelId = `faq-panel-${idx}`;
                            const buttonId = `faq-trigger-${idx}`;
                            return (
                                <div key={f.q} className="group">
                                    <button
                                        id={buttonId}
                                        onClick={() => setOpen(isOpen ? null : idx)}
                                        className="w-full px-5 py-4 text-left transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        <div className="flex items-center justify-between">
                                            {/* Question text — non-hero label scale */}
                                            <span className="text-base sm:text-lg font-semibold text-slate-900">
                                                {f.q}
                                            </span>
                                            <ChevronDown
                                                className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </button>

                                    {/* Collapsible answer */}
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className={`grid overflow-hidden px-5 pt-0 transition-all duration-300 ease-out ${isOpen
                                                ? "grid-rows-[1fr] opacity-100 pb-4"
                                                : "grid-rows-[0fr] opacity-0 pb-0"
                                            }`}
                                    >
                                        <div className="min-h-0">
                                            {/* Non-hero body scale */}
                                            <p className="text-sm sm:text-base text-slate-700">{f.a}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
