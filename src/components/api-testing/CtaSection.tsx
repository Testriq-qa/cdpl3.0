'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function CtaSection() {
  // SEO: structured data for your training org + contact
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'API Testing Master Program',
    description:
      'Hands-on API Testing training with Postman, REST/GraphQL, JSON Schema validation, OWASP API security, and CI/CD. Live 15-hour program with job assistance.',
    url: 'https://cinutedigital.com', // optional: replace with your actual URL
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91 788-83-83-788',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        email: 'contact@cinutedigital.com',
        contactType: 'sales',
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
    <section id="contact" aria-labelledby="cta-heading" className="relative py-8 sm:py-10 bg-white">
      {/* subtle top/bottom separators for a sleek, futuristic frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full shadow-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <Sparkles className="h-4 w-4 text-amber-500" />
            New batch starting soon • Limited seats
          </p>

          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Start Your <span className="text-brand">API Testing</span> Career Today
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Live <strong>15-hour</strong> mentor-led training • <strong>Postman</strong>, <strong>REST/GraphQL</strong>,{' '}
            <strong>JSON Schema</strong>, <strong>OWASP API security</strong>, and <strong>CI/CD</strong>.
          </p>

          {/* Primary actions */}
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="tel:+917888383788"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
              aria-label="Call us to enroll"
            >
              <Phone className="h-5 w-5" />
              Call: +91 788-83-83-788
            </a>

            <a
              href="mailto:contact@cinutedigital.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              aria-label="Email us for course details"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>

          {/* Highlights / trust badges */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <Clock className="h-6 w-6 text-amber-700" />
              <div>
                <div className="font-semibold text-slate-900">15-Hour Live Training</div>
                <div className="text-sm text-slate-600">Weekend & evening slots</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-4">
              <Award className="h-6 w-6 text-sky-700" />
              <div>
                <div className="font-semibold text-slate-900">Global Certification</div>
                <div className="text-sm text-slate-600">QR-verified digital badge</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <CheckCircle className="h-6 w-6 text-emerald-700" />
              <div>
                <div className="font-semibold text-slate-900">100% Job Assistance</div>
                <div className="text-sm text-slate-600">Resume & interview prep</div>
              </div>
            </div>
          </div>

          {/* Location / assurance */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="inline-flex items-center gap-2 text-sm text-slate-700">
              <MapPin className="h-4 w-4 text-rose-600" />
              Mira Road & Vasai, Maharashtra
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-slate-700">
              <Shield className="h-4 w-4 text-slate-600" />
              Secure & privacy-first enrollment
            </div>
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
