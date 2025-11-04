'use client';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Earning ₹50K–₹2L/Month as a PPC Expert
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Next Batch Starts in 3 Days • Limited Seats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-blue-600 font-bold text-xl rounded-xl shadow-2xl hover:shadow-blue-300 transform hover:scale-105 transition">
              Reserve My Seat @ ₹29,999
            </button>
            <button className="px-10 py-5 border-4 border-white text-white font-bold text-xl rounded-xl hover:bg-white/10 transition">
              Talk to Counselor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}