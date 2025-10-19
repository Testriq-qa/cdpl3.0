"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { CourseData } from "@/types/courseData";

interface HeroSectionProps {
  data: CourseData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { heroContent, courseDetails, location } = data;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Location Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 w-fit"
              variants={itemVariants}
            >
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">
                {location}, {data.state}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              {heroContent.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-purple-200 font-semibold"
              variants={itemVariants}
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {heroContent.description}
            </motion.p>

            {/* Course Details */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-400">Duration</p>
                <p className="text-lg font-semibold text-white">
                  {courseDetails.duration}
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-400">Level</p>
                <p className="text-lg font-semibold text-white">
                  {courseDetails.level}
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-400">Price</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-white">
                    {courseDetails.discountedPrice}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    {courseDetails.price}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-400">Language</p>
                <p className="text-lg font-semibold text-white">
                  {courseDetails.language}
                </p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div className="space-y-3" variants={itemVariants}>
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Certifications & Benefits
              </p>
              <div className="flex flex-wrap gap-3">
                {heroContent.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2"
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-white font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

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
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6 h-full"
            variants={containerVariants}
          >
            {heroContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-lg font-semibold text-white mt-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Landmarks Section */}
        {heroContent.landmarks && heroContent.landmarks.length > 0 && (
          <motion.div
            className="mt-20 pt-20 border-t border-white/10"
            variants={itemVariants}
          >
            <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-6">
              Serving {location}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {heroContent.landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <p className="text-sm text-gray-300">{landmark}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
