'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  // Structured data (helps rankings for contact/offer queries)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Full-Stack SDET Program',
    provider: { '@type': 'Organization', name: 'Think and Do Institute' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'INR',
      category: 'Education',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7888383788',
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative py-14 sm:py-16 md:py-20"
    >
      {/* Clean, light backdrop with subtle accents (no heavy/dark gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
        {/* soft radial highlight for focus */}
        <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 bg-[radial-gradient(closest-side,_rgba(59,130,246,0.08),_transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Become a <span className="text-indigo-700">Full-Stack SDET</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Next cohort starts in <strong>2 days</strong>. Limited seats—mentor-led, project-driven learning with
            <strong> 100% job assistance</strong>.
          </p>

          {/* Primary actions */}
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="tel:+917888383788"
              aria-label="Call admission helpdesk"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 788-83-83-788
            </a>
            <a
              href="mailto:contact@cinutedigital.com"
              aria-label="Email admission team"
              className="inline-flex items-center justify-center rounded-xl border-2 border-indigo-600 bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Book Free Demo
            </a>
          </div>
        </motion.div>

        {/* Benefits / trust strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-amber-600" />
              <div>
                <div className="font-semibold text-slate-900">25-Hour Live Training</div>
                <p className="text-sm text-slate-600">Weekend batches • Lifetime recordings</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-sky-700" />
              <div>
                <div className="font-semibold text-slate-900">ISTQB + Automation Cert</div>
                <p className="text-sm text-slate-600">Globally recognized • QR-verified</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-emerald-700" />
              <div>
                <div className="font-semibold text-slate-900">100% Job Assistance</div>
                <p className="text-sm text-slate-600">Resume, mock interviews & referrals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location + micro badges */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-rose-600" />
            Mira Road &amp; Vasai, Maharashtra
          </div>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Mentor-Led Cohort
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Portfolio Projects
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              CI/CD Ready
            </span>
          </div>
        </div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
