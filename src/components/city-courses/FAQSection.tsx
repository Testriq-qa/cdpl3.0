'use client';

import React, { useState } from 'react';
import { FAQ } from './types';

interface FAQSectionProps {
  faqs: FAQ[];
  cityName: string;
  courseName: string;
}

export default function FAQSection({ faqs, cityName, courseName }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden" 
      itemScope 
      itemType="https://schema.org/FAQPage"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #f0f4ff 50%, #faf5ff 75%, #fef3f8 100%)'
      }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg shadow-purple-500/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L5.4 11H8a1 1 0 011 1v3a1 1 0 102 0v-3a1 1 0 011-1h2.6l-2.733-3.5A1 1 0 0010 7z" clipRule="evenodd" />
            </svg>
            Common Questions
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Got Questions? We&apos;ve Got{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Answers
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most frequently asked questions about our{' '}
            <span className="font-semibold text-purple-700">{courseName}</span> training in{' '}
            <span className="font-semibold text-blue-700">{cityName}</span>.
            <br className="hidden sm:block" />
            If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-5">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
              <div
                key={faq.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-200"
                itemProp="mainEntity" 
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  className="flex justify-between items-center w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent pr-4 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300" itemProp="name">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md transform transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-4"></div>
                    <p className="text-slate-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-5">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
              <div
                key={faq.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-200"
                itemProp="mainEntity" 
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  className="flex justify-between items-center w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent pr-4 group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300" itemProp="name">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md transform transition-all duration-300 ${openFAQ === faq.id ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn" itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-4"></div>
                    <p className="text-slate-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/80 max-w-3xl">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-600 text-base">
                Our team is here to help! Get in touch with us for personalized assistance.
              </p>
            </div>
            <button className="group flex-shrink-0 relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-10 py-4 rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}