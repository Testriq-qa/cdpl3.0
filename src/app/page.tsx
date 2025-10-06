'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  Code,
  Database,
  Brain,
  Target,
  TrendingUp,
  BookOpen,
  Play
} from 'lucide-react';
import dynamic from 'next/dynamic';

const TestimonialSection = dynamic(
  () => import("@/components/Sections/TestimonialSection").then(m => m.TestimonialSection),
  {
    ssr: true,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-[theme(color.background)]">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }
)

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "QA Engineer at Google",
      content: "TechEd Pro's software testing course transformed my career. The hands-on approach and industry-relevant curriculum helped me land my dream job.",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at Microsoft",
      content: "The AI and Machine Learning course exceeded my expectations. The instructors are industry experts and the projects are real-world applicable.",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Automation Test Lead",
      content: "Best investment I made for my career. The automation testing course is comprehensive and the support from instructors is outstanding.",
      rating: 5,
      image: "/images/testimonial-3.jpg"
    }
  ];

  const courses = [
    {
      title: "Software Testing Fundamentals",
      description: "Master manual and automated testing techniques with industry-standard tools and frameworks.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "2,500+",
      rating: 4.8,
      price: "$299",
      image: "/images/testing-essentials.webp",
      features: ["Manual Testing", "Test Automation", "API Testing", "Performance Testing"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Data Science & Analytics",
      description: "Learn Python, SQL, machine learning, and data visualization to become a data science expert.",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      students: "1,800+",
      rating: 4.9,
      price: "$399",
      image: "/images/data-science-ml.png",
      features: ["Python Programming", "SQL & Databases", "Machine Learning", "Data Visualization"],
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "AI & Machine Learning",
      description: "Deep dive into artificial intelligence, neural networks, and advanced ML algorithms.",
      duration: "20 weeks",
      level: "Intermediate to Advanced",
      students: "1,200+",
      rating: 4.9,
      price: "$499",
      image: "/images/ai-ml-basics.webp",
      features: ["Neural Networks", "Deep Learning", "NLP", "Computer Vision"],
      icon: <Brain className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained", icon: <Users className="h-8 w-8" /> },
    { number: "95%", label: "Job Placement Rate", icon: <Target className="h-8 w-8" /> },
    { number: "50+", label: "Industry Partners", icon: <Award className="h-8 w-8" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="h-8 w-8" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your Career with
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Expert Training</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Master Software Testing, Data Science, and AI/ML with industry-leading courses designed by experts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact-us"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Industry Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Job Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Live Projects</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/automation-testing.webp"
                  alt="EdTech Training"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-leading courses designed to accelerate your career in tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                    <div className="text-blue-600">
                      {course.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {course.students} students
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {course.level}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{course.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechEd Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive training that bridges the gap between academic learning and industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Industry-Relevant Curriculum",
                description: "Our courses are designed by industry experts and updated regularly to match current market demands."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Instructors",
                description: "Learn from professionals with 10+ years of experience in top tech companies."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Hands-on Projects",
                description: "Work on real-world projects that you can showcase in your portfolio to potential employers."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Industry Certifications",
                description: "Earn recognized certifications that validate your skills and boost your career prospects."
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Career Support",
                description: "Get personalized career guidance, resume reviews, and interview preparation support."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Flexible Learning",
                description: "Study at your own pace with our flexible online and offline learning options."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who have transformed their careers
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-4 italic">
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection/>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who have successfully transformed their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
