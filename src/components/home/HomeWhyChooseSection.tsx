'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Briefcase, Clock, Globe, HeadphonesIcon, TrendingUp } from 'lucide-react';

/**
 * HomeWhyChooseSection - Unique Benefits
 * 
 * Highlights why students should choose CDPL
 * CDPL brand with 8 key benefits
 */
export default function HomeWhyChooseSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Industry Expert Trainers',
      description: 'Learn from professionals with 10+ years of experience at top companies like Google, Microsoft, and Amazon.',
    },
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Maximum 15-20 students per batch ensuring personalized attention and better learning outcomes.',
    },
    {
      icon: Briefcase,
      title: '100% Job Assistance',
      description: 'Guaranteed interview opportunities with our 50+ hiring partners and dedicated placement support.',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Choose from weekday, weekend, or fast-track batches that fit your schedule perfectly.',
    },
    {
      icon: Globe,
      title: 'Online & Offline',
      description: 'Attend classes from anywhere with our live online sessions or join our classroom training.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Lifetime Support',
      description: '24/7 doubt resolution, career guidance, and access to learning materials even after course completion.',
    },
    {
      icon: TrendingUp,
      title: 'Real-World Projects',
      description: 'Work on 90+ industry-standard projects to build a portfolio that impresses recruiters.',
    },
    {
      icon: CheckCircle2,
      title: 'Certification Included',
      description: 'Get globally recognized certifications like ISTQB, AWS, and course completion certificates.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Why Choose CDPL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            8 Reasons to <span className="text-orange-600">Join</span> CDPL
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another training institute. Here&apos;s what makes Cinute Digital the best choice for your career transformation.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Checkmark */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Still Comparing? Here&apos;s What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {[
                  'Live classes, not pre-recorded videos',
                  'Industry experts, not just trainers',
                  'Real projects, not just theory',
                  'Guaranteed interviews, not just promises',
                  'Lifetime support, not just course duration',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - CTA */}
            <div className="text-center md:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-orange-600 text-5xl font-bold mb-2">5000+</div>
                <div className="text-gray-800 font-semibold mb-4">Students Trust Us</div>
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full">
                  Join Them Today
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
