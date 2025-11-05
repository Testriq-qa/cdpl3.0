// components/sections/CurriculumSection.tsx
const modules = [
  { num: "01", title: "SEO Foundations & Keyword Research", tools: "Ahrefs, SEMrush, Google Keyword Planner" },
  { num: "02", title: "On-Page SEO Mastery", tools: "Yoast, RankMath, Screaming Frog" },
  { num: "03", title: "Technical SEO & Site Speed", tools: "GTmetrix, PageSpeed Insights, Schema Pro" },
  { num: "04", title: "Link Building & Off-Page", tools: "BuzzSumo, HARO, Guest Posting" },
  { num: "05", title: "Local SEO & Google Business", tools: "Google My Business, BrightLocal" },
  { num: "06", title: "AI SEO + Capstone Project", tools: "ChatGPT, SurferSEO, Live Website Audit" },
];

export default function CurriculumSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          6-Module <span className="text-emerald-600">SEO Mastery</span> Curriculum
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-emerald-100 hover:border-cyan-400 transition group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{mod.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}