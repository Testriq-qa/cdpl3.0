'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ContactReviewSection } from '@/components/Sections/ContactReviewSection';

// --------- TYPES ----------
type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'Do you offer placement assistance?',
    a: 'Yes. Cinute Digital provides resume reviews, mock interviews, career counseling, and hiring drives with partner companies.',
  },
  {
    q: 'Are classes live or self-paced?',
    a: 'Live mentor-led classes with recorded sessions, hands-on projects, and weekly doubt-solving.',
  },
  {
    q: 'Do you have EMI or flexible payment options?',
    a: 'Yes. We offer convenient EMI plans via finance partners on eligible programs.',
  },
  {
    q: 'Can you customize corporate training?',
    a: 'Absolutely. Share your team’s skill gaps and timeline; we’ll tailor content, labs, and assessments.',
  },
  {
    q: 'How soon will I get a response after contacting you?',
    a: 'Within one business day. For urgent queries, use WhatsApp for the fastest response.',
  },
];

// --------- COMPONENT ----------
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', interest: '', message: '' });
      }, 1500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="relative min-h-[220vh] bg-gradient-to-b from-sky-50 via-white to-violet-50">
      {/* HERO */}
      <section className="container mx-auto px-4 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Contact{' '}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Cinute Digital
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
          Speak with our academic advisors for <strong>admissions</strong>, <strong>career guidance</strong>,
          or <strong>corporate training solutions</strong>. We respond within one business day.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* external actions stay as <a> */}
          <Link
            href="https://wa.me/919999999999"
            className="rounded-full bg-sky-600 px-5 py-3 text-white shadow-md transition hover:bg-sky-700"
            aria-label="Chat with Cinute Digital on WhatsApp"
          >
            WhatsApp Us
          </Link>
          <Link
            href="tel:+919999999999"
            className="rounded-full bg-white px-5 py-3 text-sky-700 border border-sky-200 shadow-md transition hover:bg-sky-50"
            aria-label="Call Cinute Digital Admissions"
          >
            Call Admissions
          </Link>
          <Link
            href="mailto:admissions@cinutedigital.com"
            className="rounded-full bg-indigo-600 px-5 py-3 text-white shadow-md transition hover:bg-indigo-700"
            aria-label="Email Cinute Digital"
          >
            Email Us
          </Link>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Live Chat',
              desc: 'Instant responses about courses, fees, and admissions support.',
              cta: 'Chat Now',
              href: 'https://wa.me/919999999999', // external
              internal: false,
            },
            {
              title: 'Email Consultation',
              desc: 'Ideal for corporate training, syllabus, or partnership queries.',
              cta: 'Email Us',
              href: 'mailto:admissions@cinutedigital.com', // external
              internal: false,
            },
            {
              title: 'Schedule a Call',
              desc: 'Book a 15-minute counseling session with our experts.',
              cta: 'Book a Slot',
              href: '#book', // internal hash link
              internal: true,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100 transition hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>

              {item.internal ? (
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-sky-600 font-medium hover:underline"
                  aria-label={item.cta}
                >
                  {item.cta} →
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-sky-600 font-medium hover:underline"
                  aria-label={item.cta}
                >
                  {item.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-slate-800">Get in Touch</h2>
            <p className="mt-2 text-slate-600">
              Share your goals with us — we’ll help you find the perfect course or training plan.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="e.g., Priya Sharma"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Phone (Optional)</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="+91 98XXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Area of Interest</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                >
                  <option value="">Select…</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="Corporate Training">Corporate Training</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 py-3 text-white font-semibold shadow-md transition hover:brightness-110"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm mt-2">Thank you! We’ll get back to you soon.</p>
              )}
            </form>
          </div>

          <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-8">
            <h3 className="text-xl font-bold text-slate-800">Our Offices</h3>
            <ul className="mt-4 space-y-4 text-slate-600">
              <li>
                <strong>Mumbai (BKC):</strong> Bandra Kurla Complex, Maharashtra
              </li>
              <li>
                <strong>Pune:</strong> Hinjawadi Phase 1, Maharashtra
              </li>
              <li>
                <strong>Bengaluru:</strong> Koramangala, Karnataka
              </li>
            </ul>
            <iframe
              className="mt-6 w-full h-72 rounded-xl border border-slate-200"
              src="https://www.google.com/maps?q=Bandra+Kurla+Complex,Mumbai&output=embed"
              title="Cinute Digital Map"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Review Section */}
      <ContactReviewSection />

      {/* BOOKING CTA */}
      <section id="book" className="container mx-auto px-4 pb-28">
        <div className="rounded-3xl bg-gradient-to-r from-sky-100 to-indigo-100 border border-slate-200 p-10 text-center shadow-md">
          <h2 className="text-2xl font-bold text-slate-800">
            Book a <span className="text-sky-600">Free 1:1 Career Counseling</span> Session
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Get personalized guidance on your learning path, placement support, and flexible payment options.
          </p>
          {/* external scheduler remains <a> */}
          <Link
            href="https://cal.com/your-link"
            className="mt-6 inline-block rounded-full bg-sky-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-sky-700 transition"
            aria-label="Schedule a counseling call"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-32">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <p className="mt-2 text-slate-600">
            Everything you need to know about admissions, learning formats, and support.
          </p>

          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 open:bg-white open:shadow-md transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-slate-800 font-medium">{item.q}</span>
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition group-open:rotate-45"
                    aria-hidden
                    title="Toggle"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 text-slate-600">{item.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* SEO: FAQPage JSON-LD using next/script */}
        <Script id="faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </Script>
      </section>
    </main>
  );
}
