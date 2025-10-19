"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  data: CourseData;
}

const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const { faqsContent } = data;
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-purple-600 font-semibold uppercase tracking-wider mb-4"
            variants={itemVariants}
          >
            Questions & Answers
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {faqsContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            variants={itemVariants}
          >
            {faqsContent.subtitle}
          </motion.p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqsContent.faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === index ? null : index)
                }
                className="w-full group text-left"
              >
                <div className="relative bg-gradient-to-r from-slate-50 to-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <HelpCircle className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
                      </div>

                      {/* Question */}
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{
                        rotate: expandedFAQ === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 ml-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-white border border-purple-300 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

