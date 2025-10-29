'use client';

import { pastEvents } from '@/data/eventsData';
import { Calendar, MapPin, Users, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PastEventsPage() {
  const featuredEvents = pastEvents.filter(event => event.featured);
  const regularEvents = pastEvents.filter(event => !event.featured);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
              Our Training Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Past Events & Training Programs
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successfully conducted training events, workshops, and corporate programs that have empowered thousands of professionals across India.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { label: "Events Conducted", value: "150+", color: "from-purple-500 to-blue-500" },
              { label: "Professionals Trained", value: "25K+", color: "from-blue-500 to-cyan-500" },
              { label: "Organizations Served", value: "200+", color: "from-green-500 to-emerald-500" },
              { label: "Academic Partners", value: "50+", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Slider - Redesigned */}
      {featuredEvents.length > 0 && (
        <section className="py-8 md:py-12 relative bg-gradient-to-b from-transparent to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
              <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Featured Events</h2>
              <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
            </div>

            {/* Swiper Container */}
            <div className="relative max-w-5xl mx-auto p-2">
              {/* Navigation Buttons - Outside */}
              {featuredEvents.length > 1 && (
                <>
                  <button
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Previous event"
                    className="absolute -left-3 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full p-2 sm:p-3 lg:p-4 shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 border-2 border-purple-200 group hover:scale-110 hover:border-transparent"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-600 group-hover:text-white transition-colors" />
                  </button>

                  <button
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Next event"
                    className="absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full p-2 sm:p-3 lg:p-4 shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 border-2 border-purple-200 group hover:scale-110 hover:border-transparent"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-600 group-hover:text-white transition-colors" />
                  </button>
                </>
              )}

              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={featuredEvents.length > 1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-purple-400',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-600 !w-8',
                }}
                onSwiper={setSwiperInstance}
                className="featured-swiper !pb-12"
              >
                {featuredEvents.map((event) => (
                  <SwiperSlide key={event.id}>
                    <article className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-yellow-400 transition-all duration-500 transform group">
                      {/* Image Section with Overlay */}
                      <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-[slide_20s_linear_infinite]"></div>
                        </div>

                        {/* Spotlight Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <Calendar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Badges Container */}
                        <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 flex justify-between items-start z-10">
                          <span className={`${event.categoryColor} text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg backdrop-blur-sm transform hover:scale-110 transition-transform`}>
                            {event.category}
                          </span>

                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1.5 sm:gap-2 animate-bounce-slow">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current" />
                            Featured
                          </span>
                        </div>

                        {/* Bottom Fade */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-white/20 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                        {/* Title Section */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight group-hover:text-purple-600 transition-colors line-clamp-2">
                            {event.title}
                          </h3>
                          {event.subtitle && (
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-purple-600 font-semibold line-clamp-1">{event.subtitle}</p>
                          )}
                        </div>

                        {/* Meta Info - Enhanced Design */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg sm:rounded-xl group-hover:bg-purple-100 transition-colors">
                            <div className="bg-purple-600 p-1.5 rounded-md sm:rounded-lg flex-shrink-0">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg sm:rounded-xl group-hover:bg-green-100 transition-colors">
                            <div className="bg-green-600 p-1.5 rounded-md sm:rounded-lg flex-shrink-0">
                              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg sm:rounded-xl group-hover:bg-blue-100 transition-colors">
                            <div className="bg-blue-600 p-1.5 rounded-md sm:rounded-lg flex-shrink-0">
                              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{event.attendees} attendees</span>
                          </div>
                        </div>

                        <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed line-clamp-2">{event.purpose}</p>

                        {/* Highlights with Better Design */}
                        <div className="mb-3 sm:mb-4 md:mb-5 bg-gradient-to-br from-purple-50 to-blue-50 p-3 sm:p-4 rounded-xl border border-purple-100">
                          <h4 className="font-bold text-gray-900 mb-2 text-xs uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                            <span className="w-1 h-3 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></span>
                            Key Highlights
                          </h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {event.highlights.slice(0, 3).map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
                                <span className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold mt-0.5">
                                  {idx + 1}
                                </span>
                                <span className="line-clamp-2">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button - Enhanced */}
                        <Link href={`/events/${event.slug}`}>
                          <button className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base group relative overflow-hidden">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="relative">View Full Details</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative group-hover:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      )}

      {/* All Past Events - Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">All Past Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {regularEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300" />
                  </div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`${event.categoryColor} text-white px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{event.attendees} participants</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{event.purpose}</p>

                  <Link href={`/events/${event.slug}`}>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm">
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Want Similar Training for Your Organization?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90">
              We can customize and deliver any of these programs for your team. Let&apos;s discuss your training needs.
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openCorporateRegistration');
                window.dispatchEvent(event);
              }}
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
            >
              Request Training for Your Organization
            </button>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-60px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 6px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
          .swiper-pagination-bullet-active {
            width: 32px;
          }
        }
      `}</style>
    </div>
  );
}