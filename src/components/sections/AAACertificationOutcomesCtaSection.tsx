"use client";

import Link from "next/link";

export default function AAACertificationOutcomesCtaSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold">Program outcomes</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• AAA exam success path + mock test analytics</li>
              <li>• Portfolio-ready artifacts & capstone</li>
              <li>• Interview readiness & resume alignment</li>
              <li>• Access to CDPL partner opportunities</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50/60 to-orange-100/40 p-6 shadow-sm">
            <h3 className="text-xl font-extrabold">Next cohort</h3>
            <p className="mt-2 text-sm text-slate-700">
              Limited seats with mentor bandwidth. Early applicants receive
              capstone prep material.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Talk to admissions
              </Link>
              <Link
                href="/cdpl-certificate-validation"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Validate a certificate
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white">
          <FAQ
            items={[
              {
                q: "Is the AAA certificate verifiable?",
                a: "Yes. Graduates receive a digital certificate with a unique ID verifiable on the CDPL Certificate Validation page.",
              },
              {
                q: "Do I need prior experience?",
                a: "Basics help, but we start with foundations and provide bridging resources.",
              },
              {
                q: "How are assessments conducted?",
                a: "Time-bounded, proctored assessments with scenario tasks and rubric-based grading.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200">
      {items.map((it) => (
        <FaqRow key={it.q} q={it.q} a={it.a} />
      ))}
    </div>
  );
}

import { useState } from "react";
function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold ring-1 ring-slate-200 transition hover:bg-slate-50"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <p className="px-4 py-3 text-sm text-slate-700">{a}</p>}
    </div>
  );
}
