'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, MapPin, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  course: string;
  completionDate: string;
  videoUrl?: string;
  linkedinUrl?: string;
  achievements: string[];
}

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Senior QA Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      image: '/images/testimonial-1.jpg',
      content: 'TechEd Pro\'s software testing course transformed my career completely. The hands-on approach and industry-relevant curriculum helped me land my dream job at Google. The instructors are incredibly knowledgeable and supportive throughout the journey.',
      rating: 5,
      course: 'Software Testing Fundamentals',
      completionDate: 'March 2024',
      videoUrl: '/videos/sarah-testimonial.mp4',
      linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
      achievements: [
        'Promoted to Senior QA Engineer within 6 months',
        'Increased salary by 150%',
        'Leading automation testing initiatives'
      ]
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Data Scientist',
      company: 'Microsoft',
      location: 'Seattle, WA',
      image: '/images/testimonial-2.jpg',
      content: 'The AI and Machine Learning course exceeded my expectations. The practical projects and real-world applications gave me the confidence to transition from a traditional IT role to becoming a Data Scientist at Microsoft. Highly recommended!',
      rating: 5,
      course: 'AI & Machine Learning',
      completionDate: 'January 2024',
      videoUrl: '/videos/michael-testimonial.mp4',
      linkedinUrl: 'https://linkedin.com/in/michaelchen',
      achievements: [
        'Career transition from IT to Data Science',
        'Salary increase of 200%',
        'Published 3 research papers'
      ]
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Automation Test Lead',
      company: 'Amazon',
      location: 'Austin, TX',
      image: '/images/testimonial-3.jpg',
      content: 'Best investment I made for my career! The comprehensive curriculum and expert mentorship helped me become proficient in automation testing. The job placement support was exceptional - I got multiple offers within weeks of completion.',
      rating: 5,
      course: 'Software Testing Fundamentals',
      completionDate: 'February 2024',
      videoUrl: '/videos/emily-testimonial.mp4',
      linkedinUrl: 'https://linkedin.com/in/emilyrodriguez',
      achievements: [
        'Became team lead within 8 months',
        'Implemented CI/CD pipelines',
        'Mentoring junior testers'
      ]
    },
    {
      id: '4',
      name: 'David Park',
      role: 'Senior Data Analyst',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      image: '/images/testimonial-4.jpg',
      content: 'The Data Science course provided me with practical skills that I use daily in my role. The instructors\' industry experience and the hands-on projects made all the difference. I\'m now working on recommendation algorithms at Netflix!',
      rating: 5,
      course: 'Data Science & Analytics',
      completionDate: 'April 2024',
      linkedinUrl: 'https://linkedin.com/in/davidpark',
      achievements: [
        'Joined Netflix data team',
        'Working on ML recommendation systems',
        'Increased user engagement by 25%'
      ]
    },
    {
      id: '5',
      name: 'Priya Sharma',
      role: 'ML Engineer',
      company: 'Tesla',
      location: 'Palo Alto, CA',
      image: '/images/testimonial-5.jpg',
      content: 'Exceptional training program! The AI/ML course content is cutting-edge and the practical approach helped me understand complex concepts easily. Now I\'m working on autonomous vehicle technology at Tesla. Dreams do come true!',
      rating: 5,
      course: 'AI & Machine Learning',
      completionDate: 'May 2024',
      videoUrl: '/videos/priya-testimonial.mp4',
      linkedinUrl: 'https://linkedin.com/in/priyasharma',
      achievements: [
        'Joined Tesla AI team',
        'Working on autonomous driving',
        'Filed 2 patents in ML'
      ]
    }
  ];

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

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates who have transformed their careers and achieved their professional goals through our comprehensive training programs.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="order-2 lg:order-1">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-yellow-400 opacity-50" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  <span className="text-yellow-400 font-semibold">({currentTestimonial.rating}.0)</span>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-white leading-relaxed mb-8">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {currentTestimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-blue-200 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{currentTestimonial.role} at {currentTestimonial.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTestimonial.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Calendar className="w-4 h-4" />
                    <span>Completed {currentTestimonial.course} • {currentTestimonial.completionDate}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-yellow-400 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h5>
                  <div className="space-y-2">
                    {currentTestimonial.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-100 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {currentTestimonial.videoUrl && (
                    <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm">
                      <Play className="w-4 h-4" />
                      Watch Video
                    </button>
                  )}
                  {currentTestimonial.linkedinUrl && (
                    <a
                      href={currentTestimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Profile Image */}
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Company Logo Overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {currentTestimonial.company.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={prevTestimonial}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '10,000+', label: 'Success Stories' },
            { number: '95%', label: 'Career Growth' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '50+', label: 'Top Companies' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our expert-led training programs.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
