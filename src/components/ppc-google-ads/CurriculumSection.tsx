'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const modules = [
  { week: "1-2", title: "PPC Fundamentals & Keyword Mastery", topics: 12 },
  { week: "3-4", title: "Advanced Google Ads Campaign Setup", topics: 15 },
  { week: "5-6", title: "Conversion Tracking & Remarketing", topics: 10 },
  { week: "7-8", title: "Shopping Ads & Performance Max", topics: 14 },
  { week: "9-10", title: "YouTube & Display Ads Mastery", topics: 11 },
  { week: "11-12", title: "Live Campaign Optimization & Scaling", topics: 16 }
];

export default function CurriculumSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            12-Week <span className="text-purple-600">Google Ads Mastery</span> Curriculum
          </h2>
          <p className="text-xl text-gray-600">From Zero to Pro in 90 Days</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((m, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all flex justify-between items-center"
              >
                <div>
                  <span className="text-sm font-medium text-blue-600">Week {m.week}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{m.title}</h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-8 py-6 bg-white border-t">
                  <p className="text-gray-600">Includes {m.topics} live projects, quizzes, and campaign audits</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}