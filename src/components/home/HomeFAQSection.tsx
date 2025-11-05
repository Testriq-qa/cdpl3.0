'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * HomeFAQSection - Common Questions
 * 
 * Accordion-style FAQ section
 * CDPL brand with smooth animations
 */
export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What courses does CDPL offer?',
      answer: 'We offer comprehensive training in Software Testing (Manual & Automation), Data Science & AI/ML, API Testing, Performance Testing, Mobile Testing, and Full Stack Development. All courses include hands-on projects, industry certifications, and 100% placement support.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We provide 100% placement support including resume building, mock interviews, interview preparation, and guaranteed interview opportunities with our 50+ hiring partners. Our dedicated placement cell works with you until you land your dream job.',
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'Course duration varies from 8 to 24 weeks depending on the program. We offer flexible batch timings including weekday, weekend, and fast-track options to fit your schedule. You also get lifetime access to all course materials.',
    },
    {
      question: 'Are the classes online or offline?',
      answer: 'We offer both online and offline training options. Our live online classes are interactive with real-time doubt resolution, just like classroom training. You can also attend our classroom sessions at our Pune center.',
    },
    {
      question: 'Do I need prior experience to join?',
      answer: 'No prior experience is required for most of our beginner-level courses. We start from fundamentals and gradually move to advanced topics. Our trainers ensure everyone understands the concepts before moving forward.',
    },
    {
      question: 'What certifications will I receive?',
      answer: 'You will receive a course completion certificate from CDPL. Additionally, we prepare you for globally recognized certifications like ISTQB (for testing courses), AWS (for cloud courses), and other industry-standard certifications relevant to your course.',
    },
    {
      question: 'How experienced are the trainers?',
      answer: 'All our trainers are industry professionals with 10+ years of hands-on experience at top companies like Google, Microsoft, Amazon, and leading Indian IT firms. They bring real-world expertise and practical insights to every session.',
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention and better learning outcomes. This allows our trainers to focus on each student\'s progress and provide individual guidance.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We&apos;ve got answers. Find everything you need to know about our courses and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    openIndex === index
                      ? 'bg-orange-600'
                      : 'bg-orange-100'
                  }`}>
                    <HelpCircle className={`w-5 h-5 ${
                      openIndex === index ? 'text-white' : 'text-orange-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pl-20">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we&apos;ll answer all your queries.
          </p>
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Talk to an Advisor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
