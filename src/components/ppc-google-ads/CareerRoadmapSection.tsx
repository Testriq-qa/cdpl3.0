'use client';
import { ArrowRight, Briefcase, Trophy, Rocket } from 'lucide-react';

export default function CareerRoadmapSection() {
  const roadmap = [
    { step: 1, role: "PPC Executive", salary: "₹4-7 LPA", icon: Briefcase },
    { step: 2, role: "Google Ads Specialist", salary: "₹8-14 LPA", icon: Trophy },
    { step: 3, role: "PPC Manager", salary: "₹15-25 LPA", icon: Rocket },
    { step: 4, role: "Head of Performance Marketing", salary: "₹30-60 LPA", icon: Rocket }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Your <span className="text-blue-600">PPC Career Roadmap</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {roadmap.map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all border border-purple-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.role}</h3>
                <p className="text-2xl font-bold text-purple-600">{item.salary}</p>
                <p className="text-sm text-gray-500 mt-2">After {i === 0 ? '3' : i === 1 ? '12' : i === 2 ? '24' : '36'} months</p>
              </div>
              {i < roadmap.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-purple-400 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}