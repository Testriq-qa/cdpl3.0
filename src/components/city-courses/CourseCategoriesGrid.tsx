import React from 'react';
import { Star, Clock, Users, CheckCircle, ArrowRight, Download, TrendingUp, Zap } from 'lucide-react';

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  studentsEnrolled: number;
  rating: number;
  href: string;
  features: string[];
}

interface CourseCategoriesGridProps {
  cityName: string;
  mainCourse: string;
  categories: CourseCategory[];
}

// Sample data for demo
const sampleCategories: CourseCategory[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with modern frameworks',
    icon: '💻',
    duration: '6 months',
    level: 'Intermediate',
    studentsEnrolled: 2500,
    rating: 4.8,
    href: '#',
    features: ['Live Projects', 'Industry Mentors', 'Job Assistance']
  },
  {
    id: '2',
    title: 'Data Science & AI',
    description: 'Learn machine learning, AI, and data analytics from scratch',
    icon: '🤖',
    duration: '8 months',
    level: 'Advanced',
    studentsEnrolled: 1800,
    rating: 4.9,
    href: '#',
    features: ['Real Datasets', 'ML Projects', 'Career Support']
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Create stunning user interfaces and exceptional user experiences',
    icon: '🎨',
    duration: '4 months',
    level: 'Beginner',
    studentsEnrolled: 1500,
    rating: 4.7,
    href: '#',
    features: ['Design Tools', 'Portfolio Building', 'Client Projects']
  }
];

export default function CourseCategoriesGrid({
  cityName = "Mumbai",
  mainCourse = "Technology",
  categories = sampleCategories
}: CourseCategoriesGridProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4 shadow-lg shadow-blue-500/20">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Our {mainCourse} Courses in {cityName}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Comprehensive {mainCourse}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Training Programs
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our wide range of specialized {mainCourse.toLowerCase()} courses designed 
            to match your career goals and skill level. All courses include hands-on projects and placement support.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <article 
              key={category.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-blue-200 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-800">{category.rating}</span>
                    </div>
                  </div>
                  
                  {category.studentsEnrolled > 2000 && (
                    <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
                      <Zap className="w-3 h-3" />
                      TRENDING
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col space-y-4">
                {/* Course Meta */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{category.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
                      {category.level}
                    </span>
                  </div>
                </div>

                {/* Students Enrolled */}
                <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="font-medium">{category.studentsEnrolled.toLocaleString()}+ students enrolled</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 flex-grow">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="pt-4 space-y-3 mt-auto">
                  <button className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <span>View Course Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button className="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold mb-2">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Not sure which course is right for you?
                </span>
              </h3>
              <p className="text-slate-600">
                Talk to our career counselor and get personalized course recommendations
              </p>
            </div>
            <button className="flex-shrink-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Get Free Counselling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}