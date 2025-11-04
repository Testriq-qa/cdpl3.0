// components/sections/WhySEOProgram.tsx
export default function WhySEOProgram() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          The <span className="text-purple-600">Only GA4 Course</span> You’ll Ever Need
        </h2>
        <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed">
          Master GA4, GTM, Looker Studio, BigQuery, Adobe Analytics & AI-Powered Insights. Earn Google Analytics IQ + CDPL Dual Certificate in 50 hours.
        </p>

        <div className="grid md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {["50 Hours", "GA4 Live Setup", "Google IQ Prep", "100% Placement", "BigQuery Lab", "Lifetime Access"].map((tag) => (
            <div
              key={tag}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-5 px-8 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}