"use client";

import React from "react";
import { motion } from "framer-motion";
import { CourseData } from "@/types/courseData";
import { Code2, Briefcase, Award, Zap } from "lucide-react";

interface ProjectsSectionProps {
  data: CourseData;
}

const difficultyConfig = {
  Beginner: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
  Intermediate: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
  Advanced: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const { projectsContent } = data;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
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
            Practical Experience
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            {projectsContent.title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-4"
            variants={itemVariants}
          >
            {projectsContent.description}
          </motion.p>
          <motion.p
            className="text-lg text-gray-500"
            variants={itemVariants}
          >
            {projectsContent.subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsContent.projects.map((project, index) => {
            const diffConfig = difficultyConfig[project.difficulty as keyof typeof difficultyConfig] || difficultyConfig.Intermediate;

            return (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
              >
                <div className="relative h-full bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50 group-hover:to-blue-50 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {project.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:shadow-lg transition-all duration-300">
                          <Code2 className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Difficulty Badge */}
                    <div className={`inline-flex px-4 py-2 rounded-full border ${diffConfig.bg} ${diffConfig.text} ${diffConfig.border} font-semibold text-sm`}>
                      {project.difficulty}
                    </div>

                    {/* Skills */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Skills You'll Learn
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
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

                    {/* CTA */}
                    <motion.button
                      className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project Details
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Benefits */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: "Portfolio Building",
              description: "Create impressive projects for your portfolio that showcase your skills to employers.",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Real-World Experience",
              description: "Work on projects similar to what you'll encounter in professional environments.",
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Hands-On Learning",
              description: "Apply theoretical concepts through practical implementation and problem-solving.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg text-purple-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

