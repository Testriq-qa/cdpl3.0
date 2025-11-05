'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

/**
 * HomeFeaturedCoursesSection - Interactive Course Cards
 * 
 * Shows popular courses with filtering
 * CDPL brand design with orange accents
 */
export default function HomeFeaturedCoursesSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Software Testing', 'Data Science', 'Automation', 'Full Stack'];

  const courses = [
    {
      id: 1,
      title: 'Manual Testing Course',
      category: 'Software Testing',
      description: 'Master software testing fundamentals with ISTQB preparation and 100% placement support.',
      duration: '12 Weeks',
      students: '500+',
      rating: 4.9,
      level: 'Beginner',
      popular: true,
      link: '/manual-testing-course',
    },
    {
      id: 2,
      title: 'Automation Testing',
      category: 'Automation',
      description: 'Learn Selenium, Playwright, API testing, and CI/CD with hands-on projects.',
      duration: '16 Weeks',
      students: '400+',
      rating: 4.8,
      level: 'Intermediate',
      popular: true,
      link: '/automation-testing-course',
    },
    {
      id: 3,
      title: 'Data Science & AI/ML',
      category: 'Data Science',
      description: 'Complete data science program with Python, ML, AI, and real-world projects.',
      duration: '20 Weeks',
      students: '350+',
      rating: 4.9,
      level: 'Beginner',
      popular: true,
      link: '/data-science-course',
    },
    {
      id: 4,
      title: 'API Testing',
      category: 'Software Testing',
      description: 'Master API testing with Postman, REST Assured, and automation frameworks.',
      duration: '8 Weeks',
      students: '300+',
      rating: 4.7,
      level: 'Intermediate',
      link: '/api-testing',
    },
    {
      id: 5,
      title: 'Full Stack Development',
      category: 'Full Stack',
      description: 'Become a full stack developer with React, Node.js, and MongoDB.',
      duration: '24 Weeks',
      students: '250+',
      rating: 4.8,
      level: 'Beginner',
      link: '/full-stack-development',
    },
    {
      id: 6,
      title: 'Performance Testing',
      category: 'Automation',
      description: 'Learn JMeter, LoadRunner, and performance optimization techniques.',
      duration: '10 Weeks',
      students: '200+',
      rating: 4.6,
      level: 'Advanced',
      link: '/performance-testing',
    },
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Popular Courses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-orange-600">Industry-Ready</span> Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="relative p-6 bg-gradient-to-br from-orange-500 to-orange-600">
                {course.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">
                    POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <span className="px-2 py-1 bg-white/20 rounded-md">{course.level}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>

                {/* Course Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span><strong>Students:</strong> {course.students} placed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span><strong>Certification:</strong> Included</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={course.link}
                  className="block w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-center shadow-md hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-orange-500 transition-all duration-300"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
