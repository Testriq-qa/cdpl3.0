import React from 'react';
import { CourseOverviewProps } from '@/app/lib/CityCoursePage';

const CourseOverview: React.FC<CourseOverviewProps> = ({ courseName, cityName, details }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {courseName} Course in {cityName}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {details.description}
          </p>
        </div>

        {/* Course Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
            <p className="text-gray-600">{details.duration}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Eligibility</h3>
            <p className="text-gray-600">{details.eligibility}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Modules</h3>
            <p className="text-gray-600">{details.modules.length}+ Comprehensive Modules</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification</h3>
            <p className="text-gray-600">Industry-Recognized Certificate</p>
          </div>
        </div>

        {/* Course Features */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Our {courseName} Training?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Course Curriculum</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {details.modules.map((module, index) => (
              <div
                key={module.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {index + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white">{module.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</p>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Download Full Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;

