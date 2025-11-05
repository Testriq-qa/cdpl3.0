// components/sections/FaqSection.tsx
export default function FaqSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">FAQs</h2>
        <div className="space-y-10">
          {[
            { q: "Any prior experience?", a: "Zero needed! We start from scratch." },
            { q: "Certificate?", a: "Meta + CDPL Dual Certificate." },
            { q: "Job help?", a: "100% placement + freelance gigs." },
          ].map((faq) => (
            <details
              key={faq.q}
              className="bg-white p-10 rounded-3xl shadow-3xl border-4 border-pink-100"
            >
              <summary className="text-2xl font-black text-pink-600 cursor-pointer">
                {faq.q}
              </summary>
              <p className="mt-6 text-gray-700 text-xl">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}