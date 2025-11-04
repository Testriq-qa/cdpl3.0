'use client';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { end: 97, suffix: '%', label: 'Placement Rate' },
    { end: 4500, suffix: '+', label: 'Students Trained' },
    { end: 87, suffix: '%', label: 'Got 2X Salary Hike' },
    { end: 50, suffix: 'Cr+', label: 'Ad Spend Managed' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-blue-600">
                <CountUp end={stat.end} duration={3} />{stat.suffix}
              </div>
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}