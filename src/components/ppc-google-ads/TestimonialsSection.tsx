'use client';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Building2 } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Google Ads Specialist",
    company: "Flipkart",
    salary: "₹14.2 LPA",
    text: "From zero to ₹1.2Cr campaign manager in 6 months. The live projects were game-changing.",
    rating: 5,
    avatar: "/avatars/priya.jpg"
  },
  {
    name: "Arjun Mehta",
    role: "PPC Lead",
    company: "Nykaa",
    salary: "₹18.5 LPA",
    text: "Got 3 offers before course ended. Their mock interviews are tougher than Google’s!",
    rating: 5,
    avatar: "/avatars/arjun.jpg"
  },
  {
    name: "Sneha Reddy",
    role: "Freelance PPC Expert",
    company: "Self-Employed",
    salary: "₹1.1L/month",
    text: "Now charging ₹75K per client. Best decision of 2025.",
    rating: 5,
    avatar: "/avatars/sneha.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            4500+ Students Now Earning <span className="text-green-600">₹50K–₹2L/Month</span>
          </h2>
          <p className="text-xl text-gray-600">Google Ads Success Stories • 100% Verified</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    {t.company}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-4">"{t.text}"</p>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">{t.salary}</span>
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
            Read 200+ Success Stories <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}