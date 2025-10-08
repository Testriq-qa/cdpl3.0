"use client";
import { useState } from "react";


const faqs = [
{
q: "Do you provide placement assistance?",
a: "Yes. We include resume reviews, mock interviews, and referrals through our hiring partners.",
},
{
q: "Are the programs beginner friendly?",
a: "Absolutely. We cover fundamentals and offer guided labs so learners from any background can ramp up.",
},
{
q: "Will I work on live projects?",
a: "Yes. Our training runs alongside live or sandbox projects so you learn by doing.",
},
];


export default function AboutFAQSection() {
const [open, setOpen] = useState<number | null>(0);


return (
<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">FAQ</h2>
<div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
{faqs.map((f, idx) => (
<button
key={f.q}
onClick={() => setOpen(open === idx ? null : idx)}
className="w-full px-6 py-4 text-left hover:bg-slate-50"
>
<div className="flex items-center justify-between">
<span className="font-medium text-slate-900">{f.q}</span>
<span className="text-slate-500">{open === idx ? "–" : "+"}</span>
</div>
{open === idx && <p className="mt-2 text-sm text-slate-600">{f.a}</p>}
</button>
))}
</div>
</section>
);
}