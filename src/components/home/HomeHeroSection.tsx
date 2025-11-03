'use client';

import React, { useState } from 'react';
import { motion, type Transition } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Star, Users, Award, TrendingUp, 
  Play, Sparkles, Home, Download, Eye, Shield, Zap, Phone
} from 'lucide-react';
import Link from 'next/link';

/**
 * HomeHeroSection - Final Fixed Version
 * 
 * Fixes:
 * 1. Brand color updated to #ff8c00
 * 2. Reduced brand color usage with varied colors for better UX
 * 3. Google-style floating labels (label floats from input to border)
 * 4. TestRiq-style integrated phone input (country code + number in single container)
 */

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeBezier } as Transition,
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
];

// Country codes with proper flag emojis
const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
];

export default function HomeHeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    mobile: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Our team will contact you within 24 hours.');
      setFormData({ name: '', countryCode: '+91', mobile: '', email: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Check if field has value or is focused for floating label
  const isFieldActive = (field: keyof typeof formData) => {
    return focusedField === field || formData[field] !== '';
  };

  return (
    <>
      {/* Custom CSS for Google-style floating labels */}
      <style jsx>{`
        /* Google-style floating label animation */
        .floating-input-container {
          position: relative;
        }

        .floating-input {
          width: 100%;
          padding: 1.25rem 0.75rem 0.5rem 0.75rem;
          font-size: 0.875rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          transition: all 0.2s ease;
          background: white;
        }

        .floating-input:focus {
          outline: none;
          border-color: #ff8c00;
          box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
        }

        .floating-label {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.875rem;
          color: #64748b;
          pointer-events: none;
          transition: all 0.2s ease;
          background: white;
          padding: 0 0.25rem;
        }

        .floating-input:focus + .floating-label,
        .floating-input:not(:placeholder-shown) + .floating-label {
          top: 0;
          transform: translateY(0);
          font-size: 0.75rem;
          color: #ff8c00;
          font-weight: 600;
        }

        /* Phone input container */
        .phone-input-container {
          position: relative;
          display: flex;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .phone-input-container:focus-within {
          border-color: #ff8c00;
          box-shadow: 0 0 0 3px rgba(255, 140, 0, 0.1);
        }

        .phone-input-container select {
          border: none;
          outline: none;
          background: #f8fafc;
          padding: 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
        }

        .phone-input-container input {
          flex: 1;
          border: none;
          outline: none;
          padding: 1.25rem 0.75rem 0.5rem 0.75rem;
          font-size: 0.875rem;
        }

        .phone-floating-label {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.875rem;
          color: #64748b;
          pointer-events: none;
          transition: all 0.2s ease;
          background: white;
          padding: 0 0.25rem;
        }

        .phone-input-container:focus-within .phone-floating-label,
        .phone-input-container input:not(:placeholder-shown) ~ .phone-floating-label {
          top: 0;
          transform: translateY(0);
          font-size: 0.75rem;
          color: #ff8c00;
          font-weight: 600;
        }
      `}</style>

      <section
        aria-labelledby="home-heading"
        className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 isolate overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)',
          maskImage:
            'linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)',
        }}
      >
        {/* Background aura - Reduced brand color usage */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="mx-auto -mt-24 h-56 w-full max-w-7xl rounded-[999px] blur-3xl sm:h-64"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.06) 50%, rgba(147,51,234,0.04) 100%)',
            }}
          />
        </div>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <Link
                  href={c.href}
                  className={`hover:text-indigo-600 ${
                    i === breadcrumbs.length - 1 ? 'font-semibold text-slate-900' : ''
                  }`}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Main Grid: Left content (wider) + Right form (narrow, stuck to right) */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          
          {/* LEFT COLUMN - Content (8 columns = 66%) */}
          <div className="order-1 lg:order-1 lg:col-span-8">
            
            {/* Top Badge - Varied colors */}
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-2 text-[11px] font-medium text-indigo-700 shadow-sm backdrop-blur sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" aria-hidden="true" />
                🏆 India&apos;s #1 Software Testing & Data Science Training Institute
              </span>
            </motion.div>

            {/* Main Headline - SEO Optimized with Primary Keywords */}
            <motion.h1
              id="home-heading"
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
              className="mt-4 py-1 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Transform Your Career with{' '}
              <span style={{ color: '#ff8c00' }}>Software Testing</span>,{' '}
              <span style={{ color: '#ff8c00' }}>Data Science & AI/ML Training</span>
            </motion.h1>

            {/* Enhanced Subheadline with Keywords */}
            <motion.p
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.12 }}
              className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg lg:text-xl"
            >
              Join India&apos;s leading <strong>Software Testing Training Institute</strong> with{' '}
              <strong className="text-green-600">100% Placement Assistance</strong>. Learn{' '}
              <strong>Manual Testing, Automation Testing, Selenium, API Testing, Data Science, Python, AI/ML</strong>{' '}
              from <strong>industry experts</strong> with <strong>15+ years experience</strong>. Get{' '}
              <strong className="text-indigo-600">ISTQB Certification</strong> and work on{' '}
              <strong>90+ real-world projects</strong>. Start your career transformation today!
            </motion.p>

            {/* Social Proof Stats - Varied colors */}
            <motion.div
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Users, value: '5,000+', label: 'Students Placed', color: 'from-blue-500 to-cyan-500' },
                { icon: Award, value: '50+', label: 'Hiring Partners', color: 'from-purple-500 to-pink-500' },
                { icon: TrendingUp, value: '1.5× - 3×', label: 'Avg Salary Hike', color: 'from-green-500 to-emerald-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-md backdrop-blur transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Urgency Message - Reduced brand color */}
            <motion.div
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.24 }}
              className="mt-6 rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-4 backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">🔥 Limited Seats Available!</h4>
                  <p className="mt-1 text-sm text-slate-700">
                    Only <strong className="text-amber-600">12 seats left</strong> in our next batch starting{' '}
                    <strong>December 15th</strong>. Enroll now to secure your spot and get{' '}
                    <strong className="text-green-600">₹5,000 early bird discount</strong>!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Updated CTA Buttons - Varied colors */}
            <motion.div
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
            >
              {/* Primary CTA: Download Brochure - Brand color */}
              <a
                href="/brochure.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%)',
                  boxShadow: '0 10px 25px -5px rgba(255, 140, 0, 0.3)',
                }}
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                <span>Download Brochure</span>
                <ArrowRight className="ml-1 h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              
              {/* Secondary CTA: View Placements - Blue */}
              <Link
                href="/jobs/placements"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-blue-300 bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 sm:w-auto"
              >
                <Eye className="h-5 w-5" aria-hidden="true" />
                <span>View Placements</span>
              </Link>

              {/* Tertiary CTA: Watch CDPL - Purple */}
              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-200 bg-purple-50/90 px-6 py-3.5 text-sm font-medium text-purple-700 shadow-sm transition hover:bg-purple-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 sm:w-auto"
                aria-label="Watch CDPL video"
              >
                <Play className="h-5 w-5 transition group-hover:scale-110" aria-hidden="true" />
                <span>Watch CDPL</span>
              </button>
            </motion.div>

            {/* Trust Badges - Varied colors */}
            <motion.div
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.36 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-2.5 shadow-sm backdrop-blur">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" aria-hidden="true" />
                <span className="text-lg font-bold text-amber-600">4.9/5</span>
                <span className="text-sm text-slate-600">(1,200+ reviews)</span>
              </div>
              
              <div className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50/90 px-4 py-2.5 shadow-sm backdrop-blur">
                <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                <span className="text-sm font-semibold text-green-700">100% Placement Support</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/90 px-4 py-2.5 shadow-sm backdrop-blur">
                <Shield className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                <span className="text-sm font-semibold text-indigo-700">ISTQB Certified Training</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN - Narrow Form (4 columns = 33%, stuck to right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: easeBezier }}
            className="order-2 lg:order-2 lg:col-span-4"
          >
            {/* Form Card - Narrower & Sticky */}
            <div className="sticky top-4 max-w-sm ml-auto">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_20px_45px_-20px_rgba(2,6,23,0.25)] backdrop-blur">
                
                {/* Form Header */}
                <div className="mb-5 text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mx-auto mb-3 inline-block"
                  >
                    <div 
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%)',
                      }}
                    >
                      <Sparkles className="h-7 w-7 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Start Your Journey
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Get <span className="font-bold" style={{ color: '#ff8c00' }}>FREE</span> demo class instantly
                  </p>
                </div>

                {/* Form with Google-style Floating Labels */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name - Google-style Floating Label */}
                  <div className="floating-input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className="floating-input"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="floating-label">
                      Full Name *
                    </label>
                  </div>

                  {/* Email - Google-style Floating Label */}
                  <div className="floating-input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className="floating-input"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="floating-label">
                      Email Address *
                    </label>
                  </div>

                  {/* Mobile with Country Code - TestRiq-style Integrated Input */}
                  <div className="phone-input-container">
                    {/* Country Code Dropdown with Flag and Phone Icon - 25% width */}
                    <div className="flex items-center gap-1 px-2 bg-slate-50 border-r-2 border-slate-200" style={{ width: '30%', minWidth: '90px' }}>
                      {/* <Phone className="h-4 w-4 text-slate-400 flex-shrink-0" /> */}
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none bg-transparent border-none outline-none text-xs font-medium text-slate-700 cursor-pointer w-full"
                      >
                        {countryCodes.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      {/* <svg className="h-4.5 w-4.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 25 25">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4"/>
                      </svg> */}
                    </div>

                    {/* Phone Number Input - 75% width */}
                    <div style={{ width: '70%', position: 'relative' }}>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        onFocus={() => handleFocus('mobile')}
                        onBlur={handleBlur}
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder=" "
                        style={{ width: '100%', padding: '1.25rem 0.75rem 0.5rem 0.75rem', border: 'none', outline: 'none', fontSize: '0.875rem' }}
                      />
                      <label htmlFor="mobile" className="phone-floating-label" style={{ left: '0.75rem' }}>
                        Mobile Number *
                      </label>
                    </div>
                  </div>

                  {/* Submit Button - Brand color */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b00 100%)',
                      boxShadow: '0 10px 25px -5px rgba(255, 140, 0, 0.3)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Get FREE Demo Class</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Indicators - Varied colors */}
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-3.5 w-3.5 text-indigo-500" />
                      <span>100% Privacy</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5" style={{ color: '#ff8c00' }} />
                      <span>Instant Access</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
