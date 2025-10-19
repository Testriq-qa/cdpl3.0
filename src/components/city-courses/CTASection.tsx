"use client";

import React from "react";
import { motion } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react";

interface CTASectionProps {
  data: CourseData;
}

const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  const { ctaContent } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-4"
                variants={itemVariants}
              >
                {ctaContent.title}
              </motion.h2>
              <motion.p
                className="text-xl text-purple-200 font-semibold mb-4"
                variants={itemVariants}
              >
                {ctaContent.subtitle}
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                {ctaContent.description}
              </motion.p>
            </div>

            {/* Benefits List */}
            {ctaContent.benefits && ctaContent.benefits.length > 0 && (
              <motion.div className="space-y-3" variants={itemVariants}>
                {ctaContent.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                Get Free Demo
              </button>
            </motion.div>

            {/* Offer Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/50 rounded-full px-4 py-3"
              variants={itemVariants}
            >
              <span className="text-yellow-300 font-bold">⚡</span>
              <span className="text-white font-semibold">
                Limited Time: 33% Discount Available!
              </span>
            </motion.div>
          </motion.div>

          {/* Right Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            {/* Contact Card */}
            <motion.div
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={`tel:${ctaContent.contactInfo.phone}`}
                    className="text-lg font-semibold text-white hover:text-purple-300 transition-colors"
                  >
                    {ctaContent.contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${ctaContent.contactInfo.email}`}
                    className="text-lg font-semibold text-white hover:text-purple-300 transition-colors break-all"
                  >
                    {ctaContent.contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {ctaContent.contactInfo.address}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form CTA */}
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Get Free Consultation
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

