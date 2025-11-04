'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Is Google Ads Certification included?", a: "Yes! You get official Google Ads Certification + SkillShop badges." },
  { q: "Do you provide placement assistance?", a: "100% job assistance with 500+ hiring partners like Google, Amazon, Flipkart." },
  { q: "Can I learn without prior experience?", a: "Absolutely! We start from basics and take you to advanced scaling strategies." }
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                {open === i ? <Minus /> : <Plus />}
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}