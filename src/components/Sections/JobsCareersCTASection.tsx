"use client";

import { Link } from "lucide-react";

export default function JobsCareersCTASection() {
    return (
        <section className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-200 dark:bg-white">
                    <div
                        className="absolute inset-0 -z-10 opacity-20"
                        style={{
                            background:
                                "radial-gradient(60% 80% at 50% 20%, #ffd19e 0%, rgba(255,209,158,0) 60%), radial-gradient(60% 80% at 80% 80%, #9d7bff 0%, rgba(157,123,255,0) 60%)",
                        }}
                    />
                    <div className="max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            Don’t see a perfect fit?
                        </h2>
                        <p className="mt-2 text-gray-700 text-sm sm:text-base dark:text-gray-700">
                            Tell us how you can raise the bar. Great people shape new roles.
                        </p>
                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="mailto:careers@cinutedigital.com?subject=General%20Application%20—%20CDPL"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff8c00] hover:opacity-95"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #ff8c00 0%, #ffb558 50%, #ffd19e 100%)",
                                }}
                            >
                                Write to us
                            </Link>
                            <Link
                                href="/about-us"
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition dark:text-gray-900 dark:border-gray-200 dark:hover:bg-gray-50"
                            >
                                Learn about CDPL
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
