// components/Sections/MentorFAQSection.tsx
"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const menteeFaqs: QA[] = [
  { q: "Can I be both a mentor and a mentee?", a: "Yes. Many learners mentor juniors while being mentored by seniors." },
  { q: "What happens when I connect with someone?", a: "You can schedule a session, share context, and receive action items after the call." },
  { q: "Is there a cost to join?", a: "Exploration is free. Paid 1:1s and programs are clearly labelled before you book." },
  { q: "What makes a good mentor?", a: "Clear guidance, relevant projects, and honest feedback with a growth plan you can follow." },
];

const mentorFaqs: QA[] = [
  { q: "Who can become a mentor?", a: "Experienced professionals with hands-on work in QA, Data, Product, or Engineering." },
  { q: "How are sessions scheduled?", a: "You set your availability. Mentees book slots; reminders and calendar invites are sent automatically." },
  { q: "Do mentors get resources?", a: "Yes—session templates, project briefs, and interview rubrics aligned with CDPL outcomes." },
  { q: "How is impact measured?", a: "Based on mentee progress: shipped projects, interview readiness, and placement outcomes." },
];

export default function MentorFAQSection() {
  const [audience, setAudience] = useState<"mentee" | "mentor">("mentee");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = audience === "mentee" ? menteeFaqs : mentorFaqs;

  const baseTab =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ring-1 transition";
  const activeTab =
    "bg-[var(--color-brand,#ff8c00)] text-white ring-transparent hover:opacity-95";
  const inactiveTab =
    "bg-white text-slate-800 ring-slate-300 hover:bg-slate-50";

  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row: stack on small screens, row on larger */}
        <div className="mb-5 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
            <p className="mt-1 text-sm text-slate-600">Short answers to common queries.</p>
          </div>

          {/* Toggle: sits below title on small, right side on larger */}
          <div className="mt-1 sm:mt-0 flex flex-wrap gap-2.5">
            <button
              type="button"
              className={`${baseTab} ${audience === "mentee" ? activeTab : inactiveTab}`}
              onClick={() => { setAudience("mentee"); setOpenIdx(null); }}
              aria-pressed={audience === "mentee"}
            >
              For Mentees
            </button>
            <button
              type="button"
              className={`${baseTab} ${audience === "mentor" ? activeTab : inactiveTab}`}
              onClick={() => { setAudience("mentor"); setOpenIdx(null); }}
              aria-pressed={audience === "mentor"}
            >
              For Mentors
            </button>
          </div>
        </div>

        {/* FAQ list */}
        <div className="grid grid-cols-1 gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ring-1 transition ${
                      isOpen
                        ? "bg-[var(--color-brand,#ff8c00)] text-white ring-transparent"
                        : "bg-white text-slate-700 ring-slate-300"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 pt-0 ${
                    isOpen ? "pb-4 grid grid-rows-[1fr]" : "pb-0 grid grid-rows-[0fr]"
                  } text-sm text-slate-600 transition-[grid-template-rows]`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
