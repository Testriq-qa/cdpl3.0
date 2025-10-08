"use client";
import Link from "next/link";


export default function AboutCTASection() {
return (
<section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 text-center shadow-sm sm:flex-row sm:text-left">
<div>
<h3 className="text-xl font-semibold text-slate-900">Ready to become job-ready?</h3>
<p className="text-sm text-slate-600">Enroll in Software Testing, Data Science, AI/ML, Automation & more.</p>
</div>
<div className="flex gap-3">
<Link
href="/courses"
className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100"
>
Explore Courses
</Link>
<Link
href="/contact-us"
className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
>
Talk to an Advisor
</Link>
</div>
</div>
</section>
);
}