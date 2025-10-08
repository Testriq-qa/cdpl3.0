"use client";
import Image from "next/image";


export default function AboutAccreditations() {
const logos = [
{ src: "/logos/skill-india.png", alt: "Skill India" },
{ src: "/logos/iso.png", alt: "ISO Certified" },
{ src: "/logos/partner.png", alt: "Hiring Partners" },
];


return (
<section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-center text-sm text-slate-600">Trusted by industry & aligned with standards</p>
<div className="mt-4 grid grid-cols-3 place-items-center gap-4">
{logos.map((l) => (
<div key={l.alt} className="relative h-10 w-28 opacity-80">
<Image src={l.src} alt={l.alt} fill className="object-contain" />
</div>
))}
</div>
</div>
</section>
);
}