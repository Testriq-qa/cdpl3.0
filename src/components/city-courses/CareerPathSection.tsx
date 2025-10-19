"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { TrendingUp, Briefcase, ArrowRight } from "lucide-react";

interface CareerPathSectionProps {
  data: CourseData;
}

const CareerPathSection: React.FC<CareerPathSectionProps> = ({ data }) => {
  const { careerPathContent } = data;
  const [hoveredPath, setHoveredPath] = useState<number | null>(null);

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
    <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Career Growth
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {careerPathContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            {careerPathContent.description}
          </motion.p>
          <motion.p
            className="text-lg text-gray-500"
            variants={itemVariants}
          >
            {careerPathContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Career Paths Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {careerPathContent.paths.map((path, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredPath(index)}
              onMouseLeave={() => setHoveredPath(null)}
            >
              <div className="relative h-full bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {path.role}
                        </h3>
                        {path.trending && (
                          <div className="flex items-center gap-1 bg-gradient-to-r from-red-100 to-orange-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {path.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:shadow-lg transition-all duration-300">
                        <Briefcase className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Average Salary Range
                    </p>
                    <p className="text-2xl font-bold text-purple-600">
                      {path.salaryRange}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Key Skills Required
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <span className="text-purple-500">✓</span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Opportunities */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Job Opportunities
                    </p>
                    <ul className="space-y-2">
                      {path.opportunities.map((opportunity, oppIndex) => (
                        <li
                          key={oppIndex}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <span className="text-purple-500 font-bold">→</span>
                          <span>{opportunity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore This Path
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Career Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our comprehensive course prepares you for all these exciting career paths. With industry mentorship and job placement support, you'll be ready to land your dream role.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
            Enroll Now & Start Learning
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerPathSection;

