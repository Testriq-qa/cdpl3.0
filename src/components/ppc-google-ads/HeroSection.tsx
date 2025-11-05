'use client';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="absolute inset-0 bg-grid-blue-100/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            #1 Google Ads Course in India
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Master PPC Advertising<br />
            <span className="text-gray-800">with Google Ads</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Launch high-ROI campaigns, dominate search results, and become a certified Google Ads expert. 
            Learn from ex-Google strategists running ₹50Cr+ ad budgets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Target className="w-5 h-5" />
              Enroll Now & Save 35%
            </button>
            <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 font-semibold rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all">
              Download Free Syllabus
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600">
            {[
              { icon: TrendingUp, text: "₹12L Avg Salary" },
              { icon: Target, text: "1000+ Campaigns Launched" },
              { icon: Sparkles, text: "Google Partner Certified" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-md border border-gray-100"
              >
                <item.icon className="w-8 h-8 text-blue-600" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}