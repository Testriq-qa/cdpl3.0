// components/sections/StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-14">
          Why <span className="text-indigo-600">Google Analytics</span>?
        </h2>
        <p className="text-center text-2xl text-gray-600 max-w-5xl mx-auto mb-16">
          71% of Fortune 500 use GA4. ₹12 LPA Avg Salary. 300% ROI.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            { num: "₹12 LPA", label: "Avg. Analytics Salary" },
            { num: "60,000+", label: "GA Jobs in India" },
            { num: "71%", label: "Fortune 500 Use GA4" },
            { num: "50 Hrs", label: "GA4 Certified Fast" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-3xl text-center border-4 border-indigo-100 hover:border-purple-400 transition group"
            >
              <div className="text-6xl font-black text-indigo-600 mb-4 group-hover:scale-110 transition">
                {stat.num}
              </div>
              <p className="text-gray-700 font-bold text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}