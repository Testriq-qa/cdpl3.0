// components/sections/FaqSection.tsx
export default function FaqSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">FAQs</h2>
        <div className="space-y-8">
          {[
            { q: "Any coding needed?", a: "No! Purely beginner-friendly." },
            { q: "Will I get a certificate?", a: "Yes — Google + CDPL dual certificate." },
            { q: "Job guarantee?", a: "100% placement support + freelance leads." },
          ].map((faq) => (
            <details
              key={faq.q}
              className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-emerald-100"
            >
              <summary className="text-xl font-bold text-emerald-600 cursor-pointer">
                {faq.q}
              </summary>
              <p className="mt-4 text-gray-700 text-lg">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}