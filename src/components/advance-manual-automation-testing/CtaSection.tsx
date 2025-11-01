'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Complete QA Engineer Program',
    url: 'https://example.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-788-83-83-788',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-16 sm:py-20 text-white"
    >
      {/* Soft angular sheen for a subtle futuristic vibe (no heavy gradients) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-x-0 top-0 h-40 bg-white/5 blur-xl" />
        <div className="absolute -left-24 top-10 h-56 w-56 rotate-12 rounded-3xl bg-cyan-500/10" />
        <div className="absolute -right-24 bottom-10 h-56 w-56 -rotate-12 rounded-3xl bg-violet-500/10" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight">
            Become a <span className="text-cyan-300">Complete QA Engineer</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-200">
            Next cohort starts in <strong className="text-white">2 days</strong> — limited seats, high-impact
            mentorship, and placement support.
          </p>

          {/* Primary Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="tel:+917888383788"
              aria-label="Call +91 788-83-83-788"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-300"
            >
              <Phone className="h-5 w-5 text-cyan-700 transition group-hover:scale-110" />
              Call: +91 788-83-83-788
            </a>
            <a
              href="mailto:contact@cinutedigital.com"
              aria-label="Email contact@cinutedigital.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-300"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>

          {/* Trust bullets with distinct accent colors (no repeating) */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-cyan-300" />
                <div>
                  <div className="font-semibold">40-Hour Live Training</div>
                  <div className="text-sm text-slate-200/80">Weekend Batches • Mentor-led</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-amber-300" />
                <div>
                  <div className="font-semibold">Dual Certification</div>
                  <div className="text-sm text-slate-200/80">ISTQB + Automation (QR Verified)</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-300" />
                <div>
                  <div className="font-semibold">100% Placement Support</div>
                  <div className="text-sm text-slate-200/80">Resume • Mock Interviews • Referrals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location + micro-badges */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-200/80">
              <MapPin className="h-4 w-4 text-pink-300" />
              <span>Mira Road &amp; Vasai, Maharashtra</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-slate-100">
                Beginner Friendly
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-slate-100">
                Portfolio Projects
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-slate-100">
                Mentor-Led Cohort
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
