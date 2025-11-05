// components/sections/FaqSection.tsx
export default function FaqSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">FAQs</h2>
        <div className="space-y-10">
          {[
            { q: "Coding needed?", a: "No! 100% no-code + SQL basics." },
            { q: "Certificate?", a: "Google Analytics IQ + CDPL Pro." },
            { q: "Job help?", a: "100% placement + MNC referrals." },
          ].map((faq) => (
            <details
              key={faq.q}
              className="bg-white p-10 rounded-3xl shadow-3xl border-4 border-indigo-100"
            >
              <summary className="text-2xl font-black text-indigo-600 cursor-pointer">
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