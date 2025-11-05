'use client';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const tools = [
  { name: "Google Ads Editor", level: "Pro", color: "from-blue-500 to-blue-600" },
  { name: "Google Analytics 4", level: "Expert", color: "from-orange-500 to-red-500" },
  { name: "Looker Studio", level: "Dashboard Ninja", color: "from-green-500 to-teal-500" },
  { name: "SEMrush", level: "Keyword Spy", color: "from-purple-500 to-pink-500" },
  { name: "Microsoft Clarity", level: "Heatmap Pro", color: "from-indigo-500 to-purple-600" },
  { name: "Zapier Automation", level: "No-Code Scaling", color: "from-yellow-500 to-orange-500" }
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools You’ll <span className="text-purple-600">Master in 30 Days</span>
          </h2>
          <p className="text-xl text-gray-600">Agency-Grade Stack • Lifetime Access</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{tool.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600 font-medium">{tool.level}</span>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                PRO
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-purple-100 to-blue-100 py-8 rounded-3xl">
          <p className="text-2xl font-bold text-gray-800">
            Plus: <span className="text-purple-600">Custom Google Ads Script Library</span>
          </p>
          <p className="text-gray-600 mt-2">Auto-bidding, fraud detection, 1-click scaling</p>
        </div>
      </div>
    </section>
  );
}