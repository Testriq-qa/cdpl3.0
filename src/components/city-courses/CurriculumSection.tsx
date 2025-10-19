"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { ChevronDown, CheckCircle } from "lucide-react";

interface CurriculumSectionProps {
  data: CourseData;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ data }) => {
  const { curriculumContent } = data;
  const [expandedWeek, setExpandedWeek] = useState<number | null>(0);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Learning Path
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {curriculumContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {curriculumContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {curriculumContent.weeks.map((week, index) => (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() =>
                  setExpandedWeek(expandedWeek === index ? null : index)
                }
                className="w-full group"
              >
                <div className="relative bg-gradient-to-r from-slate-50 to-white border border-gray-200 rounded-lg p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-start gap-6 flex-1">
                      {/* Week Number */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white font-bold text-2xl group-hover:shadow-lg transition-all duration-300">
                          {week.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left pt-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {week.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {week.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{
                        rotate: expandedWeek === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedWeek === index && week.deliverables && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 ml-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                      <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                        Deliverables
                      </p>
                      <ul className="space-y-3">
                        {week.deliverables.map((deliverable, delIndex) => (
                          <li
                            key={delIndex}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="font-medium">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Total Weeks", value: "12" },
            { label: "Total Hours", value: "120+" },
            { label: "Projects", value: "8" },
            { label: "Modules", value: "6" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 border border-gray-200 rounded-lg p-6 text-center hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;

