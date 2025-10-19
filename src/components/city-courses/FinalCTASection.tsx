'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FinalCTASectionProps {
  cityName: string;
  courseName: string;
}

export default function FinalCTASection({ cityName, courseName }: FinalCTASectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    preferredBatch: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(167, 139, 250, 0.8) 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Urgency Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full px-4 py-2 font-semibold text-sm shadow-lg animate-pulse">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Limited Seats Available - Batch Starting Soon!</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Ready to Transform Your Career in{' '}
                </span>
                <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 bg-clip-text text-transparent">
                  {cityName}?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Don't miss this opportunity to become a certified <span className="text-cyan-300 font-semibold">{courseName}</span> professional. 
                Join thousands of successful students who started their journey with us.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Next batch starts in 7 days - Reserve your seat now'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Special discount of 20% for early enrollments'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Free demo class + course materials worth ₹5,000'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  text: 'Join 5000+ successful alumni network'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:bg-white/10">
                  <div className="flex-shrink-0 text-cyan-400">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-200 leading-relaxed">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-500/30">
              {[
                { value: '5000+', label: 'Students' },
                { value: '95%', label: 'Placement' },
                { value: '4.9/5', label: 'Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-10 border border-purple-500/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  Enroll Now & Get 20% OFF
                </span>
              </h3>
              <p className="text-gray-300">
                Limited time offer - Only <span className="text-yellow-400 font-bold">5 seats left</span> in this batch!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="cta-name" className="block text-sm font-semibold text-gray-200 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="cta-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="cta-email" className="block text-sm font-semibold text-gray-200 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="cta-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="cta-phone" className="block text-sm font-semibold text-gray-200 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="cta-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="cta-course" className="block text-sm font-semibold text-gray-200 mb-2">
                  Select Course *
                </label>
                <select
                  id="cta-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white"
                >
                  <option value="" className="bg-slate-800">Choose your course</option>
                  <option value="manual-testing" className="bg-slate-800">Manual Testing</option>
                  <option value="automation-testing" className="bg-slate-800">Automation Testing</option>
                  <option value="performance-testing" className="bg-slate-800">Performance Testing</option>
                  <option value="api-testing" className="bg-slate-800">API Testing</option>
                  <option value="mobile-testing" className="bg-slate-800">Mobile Testing</option>
                  <option value="data-science" className="bg-slate-800">Data Science</option>
                  <option value="machine-learning" className="bg-slate-800">Machine Learning</option>
                  <option value="artificial-intelligence" className="bg-slate-800">Artificial Intelligence</option>
                  <option value="business-intelligence" className="bg-slate-800">Business Intelligence</option>
                  <option value="web-development" className="bg-slate-800">Web Development</option>
                  <option value="mobile-development" className="bg-slate-800">Mobile Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="cta-batch" className="block text-sm font-semibold text-gray-200 mb-2">
                  Preferred Batch Timing
                </label>
                <select
                  id="cta-batch"
                  name="preferredBatch"
                  value={formData.preferredBatch}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-purple-500/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white"
                >
                  <option value="" className="bg-slate-800">Any</option>
                  <option value="weekday-morning" className="bg-slate-800">Weekday Morning</option>
                  <option value="weekday-evening" className="bg-slate-800">Weekday Evening</option>
                  <option value="weekend" className="bg-slate-800">Weekend</option>
                  <option value="fast-track" className="bg-slate-800">Fast-Track</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Secure Your Spot Now!
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our <Link href="/terms" className="text-cyan-400 hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-cyan-400 hover:underline">Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}