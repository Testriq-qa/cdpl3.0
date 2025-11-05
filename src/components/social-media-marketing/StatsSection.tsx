// components/sections/StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-14">
          Why <span className="text-pink-600">Social Media Marketing</span>?
        </h2>
        <p className="text-center text-2xl text-gray-600 max-w-5xl mx-auto mb-16">
          4.9 Billion Users. ₹15 LPA Avg Salary. 200% ROI.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            { num: "₹15 LPA", label: "Avg. SMM Salary" },
            { num: "80,000+", label: "SMM Jobs in India" },
            { num: "4.9B", label: "Global Users" },
            { num: "60 Hrs", label: "Job-Ready Fast" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-3xl text-center border-4 border-pink-100 hover:border-rose-400 transition group"
            >
              <div className="text-6xl font-black text-pink-600 mb-4 group-hover:scale-110 transition">
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