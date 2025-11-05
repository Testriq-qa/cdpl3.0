// components/sections/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Students Who Went <span className="text-pink-600">Viral</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: "Riya Kapoor", role: "SMM Manager @ Myntra", salary: "₹18 LPA" },
            { name: "Arjun Singh", role: "Freelance Creator", earnings: "₹5L/month" },
            { name: "Sneha Verma", role: "Agency Founder", growth: "50 Clients in 6 Months" },
          ].map((t) => (
            <div key={t.name} className="bg-white p-10 rounded-3xl shadow-3xl border-4 border-rose-100">
              <p className="text-gray-700 italic text-xl mb-8">“From 0 to ₹{t.salary || t.earnings} — CDPL is magic.”</p>
              <p className="font-black text-pink-600 text-2xl">{t.name}</p>
              <p className="text-gray-600 text-lg">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}