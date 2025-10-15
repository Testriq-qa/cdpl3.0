import React, { useState } from 'react';

interface CTASectionProps {
  courseName: string;
  cityName: string;
}

const CTASection: React.FC<CTASectionProps> = ({ courseName, cityName }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    console.log('Quick enquiry:', { email, phone });
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you! Our team will contact you shortly.');
      setEmail('');
      setPhone('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Start Your {courseName} Journey in {cityName} Today!
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join our next batch and transform your career with industry-leading training
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white text-center">
              <div className="text-4xl font-bold mb-2">₹0</div>
              <div className="text-lg">Pay After Placement</div>
              <div className="text-sm text-blue-100 mt-2">Option Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Job Assistance</div>
              <div className="text-sm text-blue-100 mt-2">Guaranteed Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white text-center">
              <div className="text-4xl font-bold mb-2">Free</div>
              <div className="text-lg">Demo Class</div>
              <div className="text-sm text-blue-100 mt-2">Book Now</div>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Get Started in 3 Easy Steps
              </h3>
              <p className="text-gray-600">
                Fill in your details and our career counselor will reach out to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleQuickEnquiry} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                />
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-5 px-8 rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Get Free Career Counseling'}
              </button>
            </form>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Spam Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Additional CTAs */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a
              href="tel:+911234567890"
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="font-bold text-lg mb-1">Call Us</div>
              <div className="text-sm text-blue-100">Speak to our counselor</div>
            </a>
            <a
              href="#download-brochure"
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="font-bold text-lg mb-1">Download Brochure</div>
              <div className="text-sm text-blue-100">Get detailed information</div>
            </a>
            <a
              href="#book-demo"
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <div className="font-bold text-lg mb-1">Book Demo</div>
              <div className="text-sm text-blue-100">Attend free trial class</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

