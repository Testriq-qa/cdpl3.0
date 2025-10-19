'use client';
import Link from 'next/link';

interface HeroSectionProps {
  courseName: string;
  cityName: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export default function HeroSection({
  courseName,
  cityName,
  breadcrumbs = []
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 text-slate-900 overflow-hidden">
      {/* Subtle Background Grid for depth (lighter + soft) */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Gentle pastel orbs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>

      {/* Soft dot pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(2,6,23,0.08) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol
              className="flex flex-wrap items-center space-x-2 text-sm"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              {breadcrumbs.map((crumb, index) => (
                <li
                  key={index}
                  className="flex items-center"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <Link
                    href={crumb.href}
                    className="text-amber-700 hover:text-amber-800 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                  <meta itemProp="position" content={String(index + 1)} />
                  {index < breadcrumbs.length - 1 && (
                    <svg
                      className="w-4 h-4 mx-2 text-rose-500/80"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Wider left / narrower right */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          {/* Left Content (wider) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-rose-400 text-white rounded-full px-3 py-1 shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold">Top-Rated Training Institute in {cityName}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-18 tracking-tight">
              <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff5f6d] to-[#ffc371] bg-clip-text text-transparent">
                {courseName} Training in {cityName}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Master <span className="text-amber-700 font-semibold">{courseName}</span> with industry-expert trainers. Get hands-on
              experience, real-world projects, and <span className="text-rose-700 font-semibold">100% placement assistance</span> in {cityName}.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { icon: '👨‍🏫', text: 'Expert Trainers' },
                { icon: '💼', text: '100% Placement' },
                { icon: '🎓', text: 'Certification' },
                { icon: '⏰', text: 'Flexible Batches' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/70 text-slate-900 backdrop-blur-sm rounded-lg p-3 border border-slate-200"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Primary (warm, non-shiny gradient) */}
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-rose-400 rounded-lg transition-all duration-300 hover:from-orange-500 hover:to-rose-600 hover:scale-[1.02] shadow-sm">
                <span className="relative z-10">Download Syllabus</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Secondary (light surface, clear outline) */}
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-slate-900 border-2 border-slate-300 rounded-lg transition-all duration-300 hover:bg-slate-50">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request Callback
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-700 font-medium">5000+ Students Trained</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-slate-700 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form (narrower) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-slate-200 md:-mt-6 lg:-mt-10 lg:self-start w-full lg:max-w-md lg:col-span-5">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started Today!</h3>
              <p className="text-slate-600">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-slate-400"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-1">
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value={courseName} className="bg-white">
                    {courseName} in {cityName}
                  </option>
                  <option value="other" className="bg-white">Other Course</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-500 hover:to-rose-600 transition-all duration-300 shadow-sm"
              >
                Enroll Now - Limited Seats!
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our Terms & Conditions
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
