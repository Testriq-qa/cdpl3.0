'use client';
import { useState, useEffect } from 'react';

// TypeScript interface for testimonials
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  avatar: string;
  company: string;
}

// Sample data with company info
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Cinute Digital's Automation Testing course transformed my career! Hands-on projects and expert mentors got me placed at a top Mumbai firm in just 3 months.",
    author: "Priya Sharma",
    role: "Software Tester",
    company: "Infosys",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    quote: "The Data Science with Python bootcamp was game-changing. From basics to ML projects, now I'm a Data Analyst earning 2x my previous salary!",
    author: "Rahul Mehta",
    role: "Data Scientist",
    company: "TCS",
    rating: 5,
    avatar: "RM",
  },
  {
    id: 3,
    quote: "Best AI/ML training in Mira Road! The internship guarantee helped me build real-world skills in Prompt Engineering and secure my dream job.",
    author: "Aisha Khan",
    role: "AI Engineer",
    company: "Accenture",
    rating: 5,
    avatar: "AK",
  },
  {
    id: 4,
    quote: "Excelled in Business Intelligence with Tableau. Cinute's placement support and mock interviews made me job-ready for high-demand roles.",
    author: "Vikram Singh",
    role: "BI Analyst",
    company: "Wipro",
    rating: 5,
    avatar: "VS",
  },
  {
    id: 5,
    quote: "Python Programming course was perfect for beginners. Live projects and one-on-one mentorship led to my first freelance gig in app development.",
    author: "Sneha Patel",
    role: "Junior Developer",
    company: "Startup",
    rating: 5,
    avatar: "SP",
  },
  {
    id: 6,
    quote: "SQL and Big Data Hadoop training boosted my resume. Grateful for the free career guidance—landed a role in data visualization!",
    author: "Arjun Reddy",
    role: "Data Engineer",
    company: "Capgemini",
    rating: 5,
    avatar: "AR",
  },
];

// Gradient colors for avatars
const avatarGradients = [
  'from-purple-500 to-pink-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-pink-500 to-rose-500',
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    console.log(direction);
    

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Calculate visible testimonials for desktop view
  const getVisibleTestimonials = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-indigo-100 text-blue-500 text-sm font-semibold px-4 py-2 rounded-full">
              ⭐ Student Success Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Lives Through
            <span className="block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Quality Education
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful graduates who launched their IT careers with our hands-on training programs
          </p>
        </div>

        {/* Desktop: 3-card carousel view */}
        <div 
          className="hidden lg:block relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center justify-center gap-6 px-16">
            {visibleIndices.map((index, position) => {
              const testimonial = testimonials[index];
              const isCenter = position === 1;
              
              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ease-out ${
                    isCenter 
                      ? 'scale-100 opacity-100 z-20' 
                      : 'scale-90 opacity-60 z-10'
                  }`}
                  style={{
                    width: isCenter ? '420px' : '380px',
                  }}
                >
                  <div 
                    className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ${
                      isCenter ? 'shadow-indigo-200/50' : ''
                    }`}
                    style={{
                      transform: isCenter ? 'translateY(0)' : 'translateY(20px)',
                    }}
                  >
                    {/* Card gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${avatarGradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Quote icon decoration */}
                    <div className="absolute top-6 right-6 text-indigo-100">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3L11 24h4l3-7c.6-1.5 1-3.2 1-5 0-3.3-2.7-6-6-6zm12 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3L23 24h4l3-7c.6-1.5 1-3.2 1-5 0-3.3-2.7-6-6-6z"/>
                      </svg>
                    </div>

                    <div className="p-8 relative">
                      {/* Rating */}
                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 text-base leading-relaxed mb-6 min-h-[120px]">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      {/* Author info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarGradients[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.author}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-indigo-600 font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet: Single card view */}
        <div className="lg:hidden relative max-w-lg mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
                      <div className="absolute top-6 right-6 text-indigo-100">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3L11 24h4l3-7c.6-1.5 1-3.2 1-5 0-3.3-2.7-6-6-6zm12 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.7-1.3L23 24h4l3-7c.6-1.5 1-3.2 1-5 0-3.3-2.7-6-6-6z"/>
                        </svg>
                      </div>

                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarGradients[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.author}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-indigo-600 font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-indigo-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students who transformed their careers with our expert-led training programs
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Book Your Free Demo Now →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

