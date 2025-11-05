// components/sections/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Analysts Who <span className="text-indigo-600">Track Millions</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Anjali Mehta", role: "GA4 Specialist @ Flipkart", salary: "₹14 LPA" },
            { name: "Rohan Gupta", role: "BigQuery Engineer @ Zomato", salary: "₹16 LPA" },
            { name: "Priya Singh", role: "Looker Pro @ Nykaa", growth: "Promoted in 4 months" },
          ].map((t) => (
            <div key={t.name} className="bg-white p-10 rounded-3xl shadow-3xl border-4 border-purple-100">
              <p className="text-gray-700 italic text-xl mb-8">“From zero to ₹{t.salary} — CDPL is pure analytics gold.”</p>
              <p className="font-black text-indigo-600 text-2xl">{t.name}</p>
              <p className="text-gray-600 text-lg">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}