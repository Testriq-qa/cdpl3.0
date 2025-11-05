'use client';
import { CheckCircle2, Zap, Award, Users } from 'lucide-react';

export default function WhyADProgram() {
  const features = [
    { icon: Zap, title: "Live Campaign Access", desc: "Run real ₹50K Google Ads campaigns" },
    { icon: Award, title: "Google Ads Certification", desc: "Official Google Partner Badge" },
    { icon: Users, title: "1:1 Mentorship", desc: "Ex-Google & Flipkart strategists" },
    { icon: CheckCircle2, title: "Job Guarantee", desc: "Or 100% refund" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Our <span className="text-blue-600">PPC Advertising Course</span> Stands Out
          </h2>
          <p className="text-xl text-gray-600">Best Google Ads Training Program in 2025</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}