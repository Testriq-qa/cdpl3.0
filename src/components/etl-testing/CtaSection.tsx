'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, CheckCircle, BadgeCheck } from 'lucide-react';

export default function CtaSection() {
  // SEO: ContactPoint JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Think and Do Institute',
    url: 'https://example.com/api-testing/etl', // replace with your canonical URL
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Admissions',
        telephone: '+91-788-83-83-788',
        email: 'contact@cinutedigital.com',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mira Road & Vasai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative py-8 md:py-10 bg-white"
    >
      {/* Subtle separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          {/* trust chip */}
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Mentor-led • Job Assistance • QR-Verified Certificate
          </p>

          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Become an <span className="text-[#00758F]">ETL Testing</span> Expert
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Next cohort starts in <strong>3 days</strong>. Limited seats—talk to our admissions team or email us for the
            detailed syllabus, fees, and batch timings.
          </p>

          {/* actions */}
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="tel:+917888383788"
              className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
              aria-label="Call admissions"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Admissions
            </a>

            <a
              href="mailto:contact@cinutedigital.com"
              className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 bg-white px-7 py-3 text-sm sm:text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              aria-label="Email admissions"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>

            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border-2 border-amber-600 bg-white px-7 py-3 text-sm sm:text-base font-semibold text-amber-800 shadow-sm transition hover:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-amber-200"
              aria-label="Book a free demo session"
            >
              <Clock className="mr-2 h-5 w-5" />
              Book Free Demo
            </a>
          </div>

          {/* key highlights */}
          <div className="mt-8 grid gap-4 text-left sm:gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]">
              <div className="mb-2 flex items-center gap-3">
                <Clock className="h-6 w-6 text-sky-700" />
                <div className="font-semibold text-slate-900">18-Hour Live Training</div>
              </div>
              <p className="text-sm text-slate-700">Weekend batches with recordings and post-class practice tasks.</p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]">
              <div className="mb-2 flex items-center gap-3">
                <Award className="h-6 w-6 text-amber-700" />
                <div className="font-semibold text-slate-900">Global Certification</div>
              </div>
              <p className="text-sm text-slate-700">QR-verified digital credential accepted by top employers.</p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]">
              <div className="mb-2 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-emerald-700" />
                <div className="font-semibold text-slate-900">100% Job Assistance</div>
              </div>
              <p className="text-sm text-slate-700">Resume support, mock interviews, referrals, and portfolio review.</p>
            </div>
          </div>

          {/* location */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            Mira Road & Vasai, Maharashtra • Live Online & Classroom
          </div>
        </motion.div>
      </div>

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
