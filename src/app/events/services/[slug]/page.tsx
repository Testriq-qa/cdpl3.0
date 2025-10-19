'use client';

import { getServiceBySlug } from '@/data/servicesData';
import { getEventsByService } from '@/data/eventsData';
import { CheckCircle, Calendar, MapPin, Users, ArrowRight, Award, Target, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  const pastEvents = getEventsByService(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden bg-gradient-to-r ${service.color}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
            <IconComponent className="w-96 h-96" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <IconComponent className="w-12 h-12" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-2xl text-white/90 mb-8">{service.tagline}</p>
              <p className="text-lg text-white/80 mb-8">{service.shortDescription}</p>
              
              <button
                onClick={() => {
                  const event = new CustomEvent('openCorporateRegistration', {
                    detail: { service: service.title }
                  });
                  window.dispatchEvent(event);
                }}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Request This Service
              </button>
            </div>

            {/* Right Column - Quick Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Overview</h3>
              <div className="space-y-4">
                {service.deliveryFormats.map((format, index) => (
                  <div key={index} className="flex items-start gap-3 text-white">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">{format.format}</div>
                      <div className="text-sm text-white/80">{format.duration} • {format.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About This Service</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
              </div>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Who Should Attend?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.whoShouldAttend.map((audience, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Learning Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Methodology</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.methodology.map((method, index) => (
                <div key={index} className="relative pl-8">
                  <div className={`absolute left-0 top-0 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="text-gray-700 font-medium">{method}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events for This Service */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Past Events & Programs</h2>
            <p className="text-lg text-gray-600 mb-12">
              See how we&apos;ve successfully delivered this service to organizations like yours.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <article key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-purple-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${event.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                        {event.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Event Meta */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span className="line-clamp-1">{event.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>{event.attendees} participants</span>
                      </div>
                    </div>

                    {/* Purpose */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.purpose}</p>

                    {/* CTA */}
                    <Link href={`/events/${event.slug}`}>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                        View Full Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r ${service.color} rounded-3xl p-12 text-center text-white shadow-2xl`}>
            <IconComponent className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss how {service.title} can benefit your organization.
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openCorporateRegistration', {
                  detail: { service: service.title }
                });
                window.dispatchEvent(event);
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Request This Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
