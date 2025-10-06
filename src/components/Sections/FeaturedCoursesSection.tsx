'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Clock, Users, Star, ArrowRight, Code, Database, Brain, CheckCircle, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  rating: number;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
  category: string;
  instructor: string;
  badge?: string;
}

const FeaturedCoursesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const courses: Course[] = [
    {
      id: 'software-testing',
      title: 'Software Testing Fundamentals',
      description: 'Master manual and automated testing techniques with industry-standard tools and frameworks. Learn comprehensive testing methodologies from basics to advanced concepts.',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      students: '2,500+',
      rating: 4.8,
      price: '$399',
      originalPrice: '$599',
      image: '/images/testing-essentials.webp',
      features: ['Manual Testing', 'Test Automation', 'API Testing', 'Performance Testing', 'Selenium WebDriver', 'TestNG Framework'],
      icon: <Code className="w-6 h-6" />,
      category: 'testing',
      instructor: 'Sarah Johnson',
      badge: 'Most Popular'
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Learn Python, SQL, machine learning, and data visualization to become a data science expert. Comprehensive program covering end-to-end data science workflow.',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      students: '1,800+',
      rating: 4.9,
      price: '$499',
      originalPrice: '$799',
      image: '/images/data-science-ml.png',
      features: ['Python Programming', 'SQL & Databases', 'Machine Learning', 'Data Visualization', 'Statistics', 'Real Projects'],
      icon: <Database className="w-6 h-6" />,
      category: 'data-science',
      instructor: 'Michael Chen',
      badge: 'Trending'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Deep dive into artificial intelligence, neural networks, and advanced ML algorithms. Hands-on experience with cutting-edge AI technologies and frameworks.',
      duration: '20 weeks',
      level: 'Intermediate to Advanced',
      students: '1,200+',
      rating: 4.9,
      price: '$599',
      originalPrice: '$999',
      image: '/images/ai-ml-basics.webp',
      features: ['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'PyTorch'],
      icon: <Brain className="w-6 h-6" />,
      category: 'ai-ml',
      instructor: 'Dr. Emily Rodriguez',
      badge: 'Advanced'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Courses', count: courses.length },
    { id: 'testing', label: 'Software Testing', count: courses.filter(c => c.category === 'testing').length },
    { id: 'data-science', label: 'Data Science', count: courses.filter(c => c.category === 'data-science').length },
    { id: 'ai-ml', label: 'AI & ML', count: courses.filter(c => c.category === 'ai-ml').length }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our most popular training programs designed by industry experts to accelerate your career growth in today's competitive tech landscape.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {course.badge}
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredCard === course.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white rounded-full p-4 transform scale-100 hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </button>
                </div>

                {/* Category Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {course.icon}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Title and Rating */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({course.rating})</span>
                    <span className="text-sm text-gray-500">• {course.students} students</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <p className="text-sm text-gray-600">
                    Instructor: <span className="font-semibold text-gray-900">{course.instructor}</span>
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We offer personalized training programs and corporate solutions tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View All Courses
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Custom Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
