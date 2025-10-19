'use client';

import React from 'react';
import Image from 'next/image';
import ReviewsMarquee from '../sections/ReviewMarque';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  course: string;
  batch: string;
  package?: string;
}

interface TestimonialsSectionProps {
  cityName: string;
  courseName: string;
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  cityName,
  courseName,
  testimonials
}: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-32 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-bold mb-6 shadow-sm">
            <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Success Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              What Our Students Say About{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              {courseName}
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our successful students who transformed
            their careers after completing <span className="font-semibold text-slate-700">{courseName}</span> training in <span className="font-semibold text-slate-700">{cityName}</span>.
          </p>
        </div>

        <ReviewsMarquee />

        {/* Video Testimonials CTA */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          {/* Floating Orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Watch Video Testimonials
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                See how our students from <span className="font-semibold">{cityName}</span> transformed their careers.
                Real stories, real success, real impact.
              </p>
              <button className="group inline-flex items-center space-x-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Watch Success Stories</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { count: '5000+', label: 'Happy Students' },
                { count: '95%', label: 'Placement Rate' },
                { count: '500+', label: 'Companies' },
                { count: '4.9/5', label: 'Average Rating' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">{stat.count}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges (Responsive) */}
        <div className="mt-8 sm:mt-12 px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex justify-center">
              <div className="min-w-0 overflow-hidden text-center w-full sm:w-auto sm:px-4 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-sm">
                <div className="text-xs sm:text-sm text-slate-500 mb-2 font-medium">
                  Featured On
                </div>

                {/* Badges list that wraps on small screens */}
                <ul className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-2">
                  <li className="font-semibold text-sm sm:text-base bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Google Reviews
                  </li>
                  {/* show dot only on >=sm; on mobile items wrap without dot */}
                  <li className="hidden sm:inline text-slate-300" aria-hidden>•</li>

                  <li className="font-semibold text-sm sm:text-base bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Trustpilot
                  </li>
                  <li className="hidden sm:inline text-slate-300" aria-hidden>•</li>

                  <li className="font-semibold text-sm sm:text-base bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                    Glassdoor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}