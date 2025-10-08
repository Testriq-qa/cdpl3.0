// =============================
// components/our-team/TeamCTA.tsx
// =============================
import Link from "next/link";


export default function TeamCTASection() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
            <div
                className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-8 sm:p-10"
                style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.25)" }}
            >
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Learn with mentors who build careers—not just courses</h2>
                    <p className="mt-3 text-sm text-slate-700 sm:text-base">
                        Join mentor-led programs in Manual & Automation Testing, API Testing, and Data Science. Build a portfolio, practice interviews, and get hiring partner referrals.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="/courses" className="inline-flex items-center justify-center rounded-2xl bg-[--brand] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md" style={{ backgroundColor: "var(--brand)" }}>
                            Explore Programs
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:shadow-md">
                            Talk to Admissions
                        </Link>
                    </div>
                </div>
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(255,140,0,0.25), transparent)" }} />
            </div>
        </section>
    );
}