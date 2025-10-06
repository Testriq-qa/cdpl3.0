'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MessageCircle, Calendar, CheckCircle, Star, Zap, Users } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    'Expert-led training programs',
    'Hands-on project experience',
    'Industry-recognized certifications',
    '95% job placement rate',
    'Lifetime access to materials',
    '24/7 learning support'
  ];

  const urgencyFeatures = [
    { icon: <Users className="w-5 h-5" />, text: 'Limited seats available' },
    { icon: <Star className="w-5 h-5" />, text: 'Early bird discount ending soon' },
    { icon: <Zap className="w-5 h-5" />, text: 'Next batch starts in 2 weeks' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpolygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Urgency Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {urgencyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full border border-white/20"
              >
                {feature.icon}
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Career
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Starting Today
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have accelerated their careers with our industry-leading training programs. Your success story starts here.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-500 hover:bg-white/20 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Primary CTA Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Learning Immediately
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Get instant access to our comprehensive course library and start your transformation journey today.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/courses"
                className="group w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Browse All Courses
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/contact"
                className="group w-full border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                Schedule Free Consultation
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">10K+</div>
                  <div className="text-xs text-blue-200">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-xs text-blue-200">Job Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                  <div className="text-xs text-blue-200">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA Card - Newsletter */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Get exclusive insights, course updates, and career tips delivered to your inbox. Join our community of learners.
              </p>
            </div>

            {/* Email Signup Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : isSubmitting
                    ? 'bg-gray-500 text-white cursor-not-allowed'
                    : 'bg-white text-blue-900 hover:bg-gray-100'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Successfully Subscribed!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Get Free Resources
                  </>
                )}
              </button>
            </form>

            {/* Contact Options */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-center text-blue-200 text-sm mb-4">
                Prefer to talk? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+1-555-0123"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
                <a
                  href="mailto:info@techedpro.com"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              🎯 Special Launch Offer - Limited Time Only!
            </h3>
            <p className="text-blue-100 mb-6">
              Get <span className="text-yellow-400 font-bold">50% OFF</span> on all courses + 
              <span className="text-yellow-400 font-bold"> FREE</span> career counseling session. 
              Offer expires in <span className="text-orange-400 font-bold">7 days</span>!
            </p>
            
            {/* Countdown Timer Placeholder */}
            <div className="flex justify-center gap-4 mb-6">
              {['06', '23', '45', '12'].map((time, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold text-yellow-400">{time}</div>
                  <div className="text-xs text-blue-200">
                    {['DAYS', 'HRS', 'MIN', 'SEC'][index]}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/courses"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              🔥 Claim Your Discount Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
