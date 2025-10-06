'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Award, Star, Target, Globe, BookOpen, Zap } from 'lucide-react';

interface StatItem {
  id: string;
  number: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      id: 'students',
      number: '10000',
      label: 'Students Trained',
      description: 'Professionals successfully trained across various domains',
      icon: <Users className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'placement',
      number: '95',
      label: 'Job Placement Rate',
      description: 'High success rate in career advancement and job placements',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'partners',
      number: '50',
      label: 'Industry Partners',
      description: 'Leading companies partnering with us for talent acquisition',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'rating',
      number: '4.9',
      label: 'Average Rating',
      description: 'Consistently high ratings from our satisfied students',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'courses',
      number: '25',
      label: 'Expert Courses',
      description: 'Comprehensive courses designed by industry experts',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'experience',
      number: '8',
      label: 'Years Experience',
      description: 'Proven track record in professional training and development',
      icon: <Award className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'projects',
      number: '500',
      label: 'Live Projects',
      description: 'Real-world projects for hands-on learning experience',
      icon: <Target className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'success',
      number: '98',
      label: 'Success Rate',
      description: 'Students completing courses and achieving their goals',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    stats.forEach((stat) => {
      const target = stat.id === 'rating' ? 4.9 : parseInt(stat.number);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setAnimatedNumbers(prev => ({
          ...prev,
          [stat.id]: stat.id === 'rating' ? Math.round(current * 10) / 10 : Math.floor(current)
        }));
      }, duration / steps);
    });
  };

  const formatNumber = (statId: string, value: number) => {
    if (statId === 'students') return `${(value / 1000).toFixed(0)}K+`;
    if (statId === 'placement' || statId === 'success') return `${value}%`;
    if (statId === 'partners') return `${value}+`;
    if (statId === 'rating') return `${value}/5`;
    if (statId === 'courses') return `${value}+`;
    if (statId === 'experience') return `${value}+`;
    if (statId === 'projects') return `${value}+`;
    return value.toString();
  };

  return (
    <section 
      id="stats-section"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e0e7ff" fill-opacity="0.3"%3E%3Cpolygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have transformed their careers through our comprehensive training programs and industry-focused curriculum.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mb-4">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                  {formatNumber(stat.id, animatedNumbers[stat.id] || 0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your journey with industry-leading training programs designed to accelerate your career growth and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Learning Today
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
