'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Clock, Award } from 'lucide-react';

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  { q: 'Do I need ETL tool knowledge?', a: 'No. We start from the basics of data pipelines. Knowing SQL helps but is not mandatory.' },
  { q: 'Will I get a certificate?',     a: 'Yes. You’ll receive a globally recognized ETL Testing certificate with QR verification.' },
  { q: 'What is the duration?',         a: '18 hours of live, mentor-led training with lifetime access to recordings and updates.' },
  { q: 'Is placement guaranteed?',      a: 'We provide 100% job assistance: resume support, mock interviews, and referral guidance.' },
];

// Distinct, non-repeating light accents (no heavy gradients)
const accents = [
  { ring: 'ring-sky-200',     border: 'border-sky-200',     chip: 'bg-sky-50 text-sky-800',       icon: <HelpCircle className="h-5 w-5 text-sky-700" /> },
  { ring: 'ring-emerald-200', border: 'border-emerald-200', chip: 'bg-emerald-50 text-emerald-800', icon: <ShieldCheck className="h-5 w-5 text-emerald-700" /> },
  { ring: 'ring-amber-200',   border: 'border-amber-200',   chip: 'bg-amber-50 text-amber-900',     icon: <Clock className="h-5 w-5 text-amber-700" /> },
  { ring: 'ring-violet-200',  border: 'border-violet-200',  chip: 'bg-violet-50 text-violet-800',   icon: <Award className="h-5 w-5 text-violet-700" /> },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0); // open first by default for engagement

  // SEO: FAQPage JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-7 md:py-10 bg-white">
      {/* Subtle separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
        Frequently Asked Questions
      </h2>

        {/* SEO-supportive microcopy */}
        <p className="mx-auto mt-2 mb-10 max-w-2xl text-center text-sm sm:text-base text-slate-600">
          Learn how our <strong>mentor-led</strong> program prepares you for <strong>ETL / ELT pipelines</strong>,{' '}
          <strong>data quality</strong>, and <strong>industry certifications</strong> with job assistance.
        </p>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const a = accents[i % accents.length];
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-button-${i}`;

            return (
              <div
                key={faq.q}
                className={[
                  'rounded-2xl border bg-white',
                  a.border,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md',
                  isOpen ? `ring-2 ${a.ring}` : '',
                ].join(' ')}
              >
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className={['inline-flex items-center gap-2 rounded-lg px-2.5 py-1 text-xs font-medium', a.chip].join(' ')}>
                      {a.icon}
                      FAQ {i + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                  </span>

                  <ChevronDown
                    className={[
                      'h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={[
                    'grid transition-[grid-template-rows] duration-200 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-slate-700 text-sm sm:text-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact hint */}
        <p className="mt-6 text-center text-xs sm:text-sm text-slate-600">
          Still have questions? <a href="#contact" className="font-semibold text-sky-700 hover:underline">Talk to an advisor</a>.
        </p>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
