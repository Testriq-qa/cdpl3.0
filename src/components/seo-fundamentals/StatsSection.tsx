// components/sections/StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-12">
          Why <span className="text-emerald-600">SEO Fundamentals</span>?
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-4xl mx-auto mb-16">
          92% of online experiences begin with a search engine. Master SEO → Master Visibility.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "₹8 LPA", label: "Avg. SEO Salary (Fresher)" },
            { num: "50,000+", label: "SEO Jobs in India" },
            { num: "300%", label: "ROI on Organic Traffic" },
            { num: "40 Hrs", label: "Job-Ready in 6 Weeks" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-2xl text-center border-2 border-emerald-100 hover:border-emerald-400 transition"
            >
              <div className="text-5xl font-black text-emerald-600 mb-3">{stat.num}</div>
              <p className="text-gray-700 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}