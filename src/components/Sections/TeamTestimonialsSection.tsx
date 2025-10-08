// =============================
// components/our-team/TestimonialsBand.tsx
// =============================
import { Quote } from "lucide-react";


export default function TeamTestimonialsSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-slate-800" />
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Learner stories</h2>
                </div>
                <div className="mt-4 grid gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <blockquote className="text-sm text-slate-700">“Cinute Digital helped me switch to Automation Testing with a solid portfolio and real interview prep.”</blockquote>
                            <figcaption className="mt-3 text-xs text-slate-500">— Placement Success, QA Engineer</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}