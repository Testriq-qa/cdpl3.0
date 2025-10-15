import React from 'react';

interface PlacementPartnersProps {
  cityName: string;
}

const PlacementPartners: React.FC<PlacementPartnersProps> = ({ cityName }) => {
  // Sample company logos - replace with actual logos
  const companies = [
    'Google', 'Microsoft', 'Amazon', 'IBM', 'Accenture', 'TCS',
    'Infosys', 'Wipro', 'Cognizant', 'HCL', 'Tech Mahindra', 'Capgemini',
    'Oracle', 'SAP', 'Adobe', 'Salesforce', 'Cisco', 'Intel',
    'Dell', 'HP', 'Deloitte', 'EY', 'KPMG', 'PwC'
  ];

  const placementHighlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Dedicated Placement Cell',
      description: 'Our placement team works tirelessly to connect you with top companies',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Resume Building',
      description: 'Professional resume crafting and LinkedIn profile optimization',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: 'Interview Preparation',
      description: 'Mock interviews and soft skills training for interview success',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Networking Events',
      description: 'Regular meetups with industry professionals and alumni',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Placement Partners in {cityName}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have partnered with 500+ leading companies to ensure you get the best career opportunities
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Hiring Partners</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-700 font-medium">Placement Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-2">₹8 LPA</div>
            <div className="text-gray-700 font-medium">Average Package</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-600 mb-2">₹25 LPA</div>
            <div className="text-gray-700 font-medium">Highest Package</div>
          </div>
        </div>

        {/* Company Logos Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Top Companies Hiring Our Students
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center justify-center group hover:-translate-y-1"
              >
                <span className="text-gray-600 font-semibold text-center group-hover:text-blue-600 transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Support Features */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Comprehensive Placement Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Placement Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Profile Building', desc: 'Create professional resume & portfolio' },
              { step: '2', title: 'Skill Assessment', desc: 'Evaluate your technical competency' },
              { step: '3', title: 'Interview Training', desc: 'Mock interviews & feedback sessions' },
              { step: '4', title: 'Job Matching', desc: 'Connect with suitable opportunities' },
              { step: '5', title: 'Offer Support', desc: 'Guidance on offer negotiation' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Placement Assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;

