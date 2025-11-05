'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Users2, Briefcase, TrendingUp } from 'lucide-react';

/**
 * HomePlacementSupportSection - Job Assistance
 * 
 * Highlights placement support services
 * CDPL brand with company logos
 */
export default function HomePlacementSupportSection() {
  const placementServices = [
    {
      icon: FileCheck,
      title: 'Resume Building',
      description: 'Get your resume reviewed and optimized by industry experts to stand out to recruiters.',
    },
    {
      icon: Users2,
      title: 'Mock Interviews',
      description: 'Practice with real interview scenarios and get feedback to improve your performance.',
    },
    {
      icon: Briefcase,
      title: 'Job Referrals',
      description: 'Direct referrals to our 50+ hiring partners across India for guaranteed interviews.',
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'One-on-one career counseling to help you choose the right path and companies.',
    },
  ];

  const hiringPartners = [
    'Tech Mahindra',
    'Accenture',
    'Infosys',
    'TCS',
    'Wipro',
    'Cognizant',
    'HCL',
    'Capgemini',
    'Testriq',
    'Axiom',
    'Credility',
    'IDfy',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            100% Placement Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Don&apos;t Stop at <span className="text-orange-600">Training</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated placement cell works tirelessly to ensure you land your dream job with comprehensive support at every step.
          </p>
        </motion.div>

        {/* Placement Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {placementServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Placement Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Placement Process
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'Profile Building', desc: 'Resume, LinkedIn, Portfolio' },
              { title: 'Skill Assessment', desc: 'Mock tests & evaluations' },
              { title: 'Interview Prep', desc: 'Mock interviews & feedback' },
              { title: 'Job Matching', desc: 'Match with hiring partners' },
              { title: 'Offer Support', desc: 'Salary negotiation help' },
            ].map((step, index) => (
              <div key={index} className="relative">
                {/* Connector */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-orange-200 -z-10"></div>
                )}

                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hiring Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Hiring Partners
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We have partnerships with 50+ leading companies across India who actively hire our trained professionals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hiringPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex items-center justify-center h-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-gray-700 font-semibold text-sm text-center">
                  {partner}
                </div>
                {/* Replace with actual logos */}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'Learners Placed', icon: '👨‍💼' },
            { number: '1.5×', label: 'Avg Package Growth', icon: '📈' },
            { number: '50+', label: 'Cities Covered', icon: '🌍' },
            { number: '50+', label: 'Hiring Partners', icon: '🤝' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center text-white shadow-xl">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
