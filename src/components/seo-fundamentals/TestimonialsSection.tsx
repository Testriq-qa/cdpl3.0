// components/sections/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          Students Who Ranked <span className="text-emerald-600">#1</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { name: "Neha Sharma", role: "SEO Specialist @ Zomato", salary: "₹9.5 LPA" },
            { name: "Vikram Rao", role: "Freelance SEO Consultant", earnings: "₹3L/month" },
            { name: "Priya Mehta", role: "Digital Marketer @ Nykaa", growth: "Promoted in 3 months" },
          ].map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-cyan-100">
              <p className="text-gray-700 italic mb-6">“From zero to ₹{t.salary || t.earnings} — this course is pure gold.”</p>
              <p className="font-bold text-emerald-600 text-xl">{t.name}</p>
              <p className="text-gray-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}