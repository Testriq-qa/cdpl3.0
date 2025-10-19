import React from 'react';
import Image from 'next/image';

interface Company {
  id: string;
  name: string;
  logo?: string;
}

interface CertificationPlacementSectionProps {
  cityName: string;
  courseName: string;
  hiringPartners: Company[];
}

export default function CertificationPlacementSection({
  cityName,
  courseName,
  hiringPartners
}: CertificationPlacementSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4 shadow-lg shadow-blue-200/50">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Certification & Placement
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Get Certified & </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Land Your Dream Job</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our industry-recognized certification and dedicated placement support help you 
            kickstart your career in {cityName} and beyond.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certification Section */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-blue-100/50 shadow-xl shadow-blue-100/20 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-300/40">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Industry Certification</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">Recognized Nationwide</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Upon successful completion of the {courseName} course,you&apos;ll receive an 
              industry-recognized certification that validates your skills and enhances your professional profile. Our certifications are 
              highly valued by employers.
            </p>

            <div className="space-y-4 mb-6">
              {[
                'Certificate of Completion from accredited institution',
                'Digital badge for LinkedIn and social profiles',
                'Lifetime validity with no renewal required',
                'Recognized by 500+ companies across India',
                'Adds credibility to your resume and portfolio'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 shadow-lg border border-blue-100/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-700">Sample Certificate</span>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-bold shadow-md">
                  Verified
                </span>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 rounded-lg flex items-center justify-center border-4 border-blue-300/40 shadow-inner">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">Certificate of Achievement</div>
                  <div className="text-sm text-slate-500">{courseName}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Section */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-emerald-100/50 shadow-xl shadow-emerald-100/20 hover:shadow-2xl hover:shadow-emerald-200/30 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-300/40">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">100% Placement Support</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">Guaranteed Interviews</p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Our dedicated placement cell works tirelessly to connect you with top companies 
              in {cityName} and across India. We guarantee interview opportunities.
            </p>

            <div className="space-y-4 mb-6">
              {[
                'Resume building and LinkedIn profile optimization',
                'Mock interviews with industry professionals',
                'Soft skills and communication training',
                'Direct job referrals to 500+ partner companies',
                'Salary negotiation guidance and support',
                'Lifetime placement assistance even after course'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-600">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Placement Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '95%', label: 'Placement Rate' },
                { value: '10+', label: 'Avg Interviews' },
                { value: '6-8 LPA', label: 'Avg Package' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-emerald-50/50 rounded-xl p-4 text-center shadow-lg border border-emerald-100/50">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hiring Partners Section */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-slate-200/50 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Hiring Partners</span>
            </h3>
            <p className="text-slate-600">
              500+ companies trust our trained professionals. Here are some of our top hiring partners:
            </p>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-slate-200/50 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300 aspect-square"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={50}
                    objectFit="contain"
                    className="grayscale opacity-75 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-400">{partner.name.charAt(0)}</div>
                    <div className="text-xs text-slate-500 mt-1">{partner.name}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50">
              <span>View All Hiring Partners</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Success Stories Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl shadow-blue-300/30 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join 5000+ Successful Alumni
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Our students from {cityName} have been placed in top companies like TCS, Infosys, 
                Wipro, Accenture, and many more. Your success story starts here!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="text-white border-2 border-slate-300 bg-gradient-to-r from-blue-600 to-purple-600 font-semibold px-8 py-4 rounded-lg hover:translate-y-1 transition-all duration-300 shadow-lg">
                  View Success Stories
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-colors duration-300">
                  Talk to Alumni
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'Career Focused' },
                { icon: '💰', label: 'High Packages' },
                { icon: '🚀', label: 'Fast Placement' },
                { icon: '🤝', label: 'Lifetime Support' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold text-white/90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}