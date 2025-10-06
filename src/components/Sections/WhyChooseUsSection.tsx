'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  TrendingUp, 
  Shield, 
  Headphones, 
  BookOpen, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Globe,
  Coffee
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const features: Feature[] = [
    {
      id: 'expert-instructors',
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with 10+ years of real-world experience in top tech companies.',
      icon: <Award className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Industry professionals from Google, Microsoft, Amazon',
        'Real-world project experience and insights',
        'Personalized mentorship and career guidance',
        'Up-to-date with latest industry trends'
      ]
    },
    {
      id: 'hands-on-learning',
      title: 'Hands-On Learning',
      description: 'Practice with real projects and live scenarios that mirror actual workplace challenges.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        '500+ real-world projects and case studies',
        'Live coding sessions and workshops',
        'Industry-standard tools and environments',
        'Portfolio-ready projects for job applications'
      ]
    },
    {
      id: 'flexible-schedule',
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with both live and recorded sessions to fit your busy lifestyle.',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      benefits: [
        'Weekend and evening batch options',
        'Self-paced learning modules',
        'Recorded sessions for review',
        'Mobile-friendly learning platform'
      ]
    },
    {
      id: 'job-assistance',
      title: 'Job Placement Support',
      description: '95% job placement rate with dedicated career support and industry connections.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Resume building and interview preparation',
        'Direct connections with 50+ hiring partners',
        'Mock interviews with industry experts',
        '6 months post-course career support'
      ]
    },
    {
      id: 'lifetime-access',
      title: 'Lifetime Access',
      description: 'Get lifetime access to course materials, updates, and our exclusive alumni network.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Lifetime access to all course materials',
        'Free updates and new content additions',
        'Exclusive alumni network and events',
        'Continued mentorship opportunities'
      ]
    },
    {
      id: 'support',
      title: '24/7 Support',
      description: 'Round-the-clock technical and academic support to ensure your learning success.',
      icon: <Headphones className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        '24/7 technical support via chat and email',
        'Dedicated student success managers',
        'Peer-to-peer learning community',
        'Regular doubt-clearing sessions'
      ]
    }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, label: '10,000+ Students', description: 'Successfully trained' },
    { icon: <Star className="w-6 h-6" />, label: '4.9/5 Rating', description: 'Average course rating' },
    { icon: <Target className="w-6 h-6" />, label: '95% Success Rate', description: 'Job placement rate' },
    { icon: <Globe className="w-6 h-6" />, label: '50+ Countries', description: 'Global reach' }
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Training</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the highest quality training experience with industry-leading instructors, cutting-edge curriculum, and comprehensive career support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${activeFeature === feature.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Benefits List */}
              <div className={`space-y-2 transition-all duration-300 ${
                activeFeature === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully transformed their careers through our comprehensive training programs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Success Stories That Inspire
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our students have gone on to work at top companies like Google, Microsoft, Amazon, and many more. Their success is our greatest achievement.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                      <Coffee className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-blue-100">+10,000 success stories</span>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Read Success Stories
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our expert-led training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
