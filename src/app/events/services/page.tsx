'use client';

import { trainingServices } from '@/data/servicesData';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';


export default function TrainingServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              Our Service Portfolio
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Training & Event Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions designed to empower organizations, academic institutions, and professionals with cutting-edge skills and knowledge.
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Expert Trainers", description: "Industry professionals with real-world experience" },
              { title: "Customized Programs", description: "Tailored to your specific needs and goals" },
              { title: "Proven Results", description: "150+ successful events, 25K+ professionals trained" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <article key={service.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-20 transform rotate-12 translate-x-8 -translate-y-4">
                      <IconComponent className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 line-clamp-3">{service.shortDescription}</p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/events/services/${service.slug}`}>
                      <button className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2`}>
                        View Details & Past Events
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Training Services?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description: "Trainers with 10+ years of real-world experience",
                  color: "from-purple-500 to-blue-500"
                },
                {
                  title: "Customized Content",
                  description: "Programs tailored to your specific needs",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Hands-On Learning",
                  description: "Practical exercises and real projects",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Post-Training Support",
                  description: "Ongoing assistance and resources",
                  color: "from-orange-500 to-red-500"
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss how our training services can help your organization achieve its goals.
            </p>
            <button
              onClick={() => {
                const event = new CustomEvent('openCorporateRegistration');
                window.dispatchEvent(event);
              }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
