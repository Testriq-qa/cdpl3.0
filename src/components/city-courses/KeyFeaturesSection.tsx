import React from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string;
}

interface KeyFeaturesSectionProps {
  cityName: string;
  courseName: string;
}

export default function KeyFeaturesSection({ cityName, courseName }: KeyFeaturesSectionProps) {
  const features: Feature[] = [
    {
      id: 'expert-trainers',
      title: 'Industry Expert Trainers',
      description: 'Learn from professionals with 10+ years of real-world experience in top MNCs and product companies.',
      stats: '15+ Years',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'hands-on-projects',
      title: 'Real-World Projects',
      description: 'Work on live industry projects and build a portfolio that showcases your skills to potential employers.',
      stats: '20+ Projects',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'placement-assistance',
      title: '100% Placement Assistance',
      description: 'Dedicated placement cell with tie-ups with 500+ companies. Resume building, mock interviews, and job referrals.',
      stats: '95% Success',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 'flexible-batches',
      title: 'Flexible Batch Timings',
      description: 'Choose from weekday, weekend, or fast-track batches. Online and offline modes available in {cityName}.',
      stats: 'Your Schedule',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'certification',
      title: 'Industry Recognized Certification',
      description: 'Get certified upon course completion. Our certifications are recognized by top companies across India.',
      stats: 'Accredited',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'lifetime-support',
      title: 'Lifetime Learning Support',
      description: 'Access to updated course materials, alumni network, and doubt-clearing sessions even after course completion.',
      stats: 'Forever',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-300/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-indigo-300/10 to-blue-200/10 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-tr from-violet-300/10 to-fuchsia-200/10 rounded-full filter blur-2xl"></div>
      </div>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs md:text-sm font-semibold mb-4 shadow-lg shadow-blue-500/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Why Choose Us
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">What Makes Us </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Different</span>
          </h2>

          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
           We don&apos;t just teach {courseName}, we prepare you for a successful career.
            Here&apos;s why thousands of students in {cityName} trust us with their career growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                {feature.stats && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {feature.stats}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description.replace('{cityName}', cityName)}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]"></div>
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-2">
              <div className="text-4xl font-bold">5000+</div>
              <div className="text-white/80">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-white/80">Hiring Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">95%</div>
              <div className="text-white/80">Placement Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-white/80">Student Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center mx-auto px-4">
          <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200/50">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                Ready to Start Your {courseName} Journey?
              </h3>
              <p className="text-slate-600">
                Join our next batch in {cityName} and transform your career
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 sm:whitespace-nowrap">
                Enroll Now
              </button>
              <button className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 sm:whitespace-nowrap">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}