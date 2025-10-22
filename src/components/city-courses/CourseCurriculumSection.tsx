'use client';

import React, { useState } from 'react';

interface Module {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  learningOutcomes: string[];
}

interface CourseCurriculumSectionProps {
  courseName: string;
  cityName: string;
  modules: Module[];
}

export default function CourseCurriculumSection({
  courseName,
  cityName,
  modules
}: CourseCurriculumSectionProps) {
  const [activeModule, setActiveModule] = useState<string>(modules[0]?.id || '');

  return (
    <section
      id="curriculum"
      // HARD guards against horizontal scroll on any device:
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden w-full"
    >
      {/* Background (contained so it never pushes layout) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 left-1/4 w-[18rem] h-[18rem] sm:w-96 sm:h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 w-[18rem] h-[18rem] sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-200/20 to-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]">
          <svg width="100%" height="100%" className="block max-w-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg shadow-indigo-500/30">
            <svg className="w-4 h-4 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Course Curriculum
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              Complete {courseName}
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Syllabus
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
            Our comprehensive curriculum is designed by industry experts and updated regularly to match current industry standards and best practices in {cityName}.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 w-full">
          {/* LEFT: single list (no horizontal snap on mobile) */}
          <div className="lg:col-span-1 space-y-3 min-w-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-base sm:text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-1 sm:px-4">
                Course Modules
              </h3>

              {/* Vertical list; clamps height on small screens to avoid page stretching */}
              <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 backdrop-blur-sm break-words ${
                      activeModule === module.id
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30 md:hover:scale-105'
                        : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-lg border border-slate-200/60'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                          activeModule === module.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-700'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm mb-1 line-clamp-2 break-words">
                          {module.title}
                        </div>
                        <div
                          className={`text-xs flex items-center gap-1 ${
                            activeModule === module.id ? 'text-white/80' : 'text-slate-500'
                          }`}
                        >
                          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="truncate">{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Download CTA */}
              <div className="mt-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-5 sm:p-6 shadow-xl shadow-purple-500/30 backdrop-blur-sm">
                <h4 className="font-bold text-base sm:text-lg mb-1.5">Get Complete Syllabus</h4>
                <p className="text-white/90 mb-3 sm:mb-4 text-sm">
                  Download detailed curriculum with project details
                </p>
                <button className="w-full bg-white text-indigo-700 font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg md:hover:shadow-xl md:hover:scale-105">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-sm sm:text-base">Download PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: details */}
          <div className="lg:col-span-2 min-w-0">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`transition-all duration-500 ${activeModule === module.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 max-w-full">
                  {/* Module Header */}
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 sm:p-6 md:p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <svg width="100%" height="100%" className="block max-w-full">
                        <defs>
                          <pattern id="module-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#module-grid)" />
                      </svg>
                    </div>
                    <div className="flex items-start justify-between mb-3 sm:mb-4 relative z-10 gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold flex-1 min-w-0 break-words">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold text-sm sm:text-base">{module.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white/90 relative z-10">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{module.topics.length} Topics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <span>Hands-on Practice</span>
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                    {/* Topics */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Topics Covered</span>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group border border-slate-100/50"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-100 to-indigo-200 text-indigo-700 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-sm">
                              {idx + 1}
                            </div>
                            <span className="text-slate-700 text-sm leading-relaxed font-medium break-words">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Learning Outcomes</span>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </h4>
                      <div className="space-y-3">
                        {module.learningOutcomes.map((outcome, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-lg border border-green-200/50 hover:border-green-300 transition-all shadow-sm"
                          >
                            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 text-sm leading-relaxed font-medium break-words">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 sm:pt-6 border-t border-slate-200">
                      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border border-indigo-100/50">
                        <div className="text-left">
                          <h5 className="font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-1">
                            Want to learn more about this module?
                          </h5>
                          <p className="text-slate-600 text-sm sm:text-base">
                            Talk to our course advisor for detailed breakdown
                          </p>
                        </div>
                        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/30 md:hover:shadow-xl md:hover:scale-105">
                          Contact Advisor
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Total Duration', value: '3-4 Months', icon: '⏱️' },
            { label: 'Live Projects', value: '5+ Projects', icon: '💼' },
            { label: 'Assignments', value: '50+ Tasks', icon: '📝' },
            { label: 'Certification', value: 'Industry Recognized', icon: '🎓' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-slate-200/60 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl md:hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl mb-1.5 sm:mb-2">{stat.icon}</div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
