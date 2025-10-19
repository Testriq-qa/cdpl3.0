"use client";

import React from "react";
import { motion } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { Award, Users, Clock, MapPin, Star } from "lucide-react";

interface WhyChooseSectionProps {
  data: CourseData;
}

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  MapPin: <MapPin className="w-8 h-8" />,
};

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ data }) => {
  const { whyChooseContent } = data;

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
            Why Choose Us
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {whyChooseContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {whyChooseContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseContent.reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative h-full bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg text-purple-600 group-hover:shadow-lg transition-all duration-300">
                    {iconMap[reason.icon] || <Award className="w-8 h-8" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900">
                    {reason.title}
                  </h3>

                  {/* Stats */}
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                    {reason.stats}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 lg:p-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Stars */}
              <motion.div
                className="flex justify-center gap-2 mb-6"
                variants={itemVariants}
              >
                {[...Array(whyChooseContent.testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-300 fill-yellow-300"
                  />
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                className="text-2xl lg:text-3xl font-bold text-white mb-8 leading-relaxed"
                variants={itemVariants}
              >
                "{whyChooseContent.testimonial.text}"
              </motion.p>

              {/* Author Info */}
              <motion.div className="space-y-2" variants={itemVariants}>
                <p className="text-lg font-bold text-white">
                  {whyChooseContent.testimonial.author}
                </p>
                <p className="text-purple-100">
                  {whyChooseContent.testimonial.role}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Students Trained" },
            { number: "95%", label: "Job Placement" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Mentor Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

