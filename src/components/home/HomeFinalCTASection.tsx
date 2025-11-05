'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

/**
 * HomeFinalCTASection - Strong Call to Action
 * 
 * Final conversion section with lead form
 * CDPL brand with gradient background
 */
export default function HomeFinalCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Our team will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 5000+ students who have successfully launched their careers in Software Testing, Data Science, and AI/ML with CDPL&apos;s industry-ready training.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Start learning within 48 hours',
                'Live interactive classes with experts',
                '100% placement support guaranteed',
                'Flexible payment options available',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5" />
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Mail className="w-5 h-5" />
                <span>info@cdpl.in</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="w-5 h-5" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Get Started Today
                </h3>
                <p className="text-gray-600">
                  Fill the form below and our team will contact you within 24 hours
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="final-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="final-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="final-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="final-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-900"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="final-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="final-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all outline-none text-gray-900"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>100% Privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
