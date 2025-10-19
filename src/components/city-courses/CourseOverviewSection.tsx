"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CourseData } from "@/types/courseData";
import {
  BookOpen,
  CheckCircle,
  Zap,
  Gauge,
  Shield,
  Smartphone,
  ArrowRight,
} from "lucide-react";

interface CourseOverviewSectionProps {
  data: CourseData;
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Gauge: <Gauge className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
};

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({
  data,
}) => {
  const { courseOverviewContent } = data;
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
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
            Course Structure
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {courseOverviewContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {courseOverviewContent.description}
          </motion.p>
          <motion.p
            className="text-lg text-gray-500 mt-4"
            variants={itemVariants}
          >
            {courseOverviewContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courseOverviewContent.modules.map((module, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredModule(index)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              <div className="relative h-full bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Trending Badge */}
                {module.trending && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Trending
                  </div>
                )}

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300 text-purple-600">
                    {iconMap[module.icon] || <BookOpen className="w-8 h-8" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {module.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {module.description}
                  </p>

                  {/* Topics */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Key Topics
                    </p>
                    <ul className="space-y-2">
                      {module.topics.slice(0, 3).map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-purple-500 font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-purple-600 font-medium">
                          +{module.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Link */}
                  <motion.button
                    className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to explore all modules in detail?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
            View Full Curriculum
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;

