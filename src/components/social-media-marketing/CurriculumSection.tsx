// components/sections/CurriculumSection.tsx
const modules = [
  { num: "01", title: "SMM Strategy & Branding", tools: "Canva Pro, Brand Kit, Tone of Voice" },
  { num: "02", title: "Instagram Growth Mastery", tools: "Reels, Stories, Hashtag AI, Collabs" },
  { num: "03", title: "Facebook Ads Manager", tools: "Pixel, A/B Testing, Lookalike Audiences" },
  { num: "04", title: "LinkedIn B2B Marketing", tools: "Sales Navigator, Content Calendar" },
  { num: "05", title: "YouTube & TikTok Virality", tools: "SEO, Hooks, Algorithm Hacks" },
  { num: "06", title: "AI Tools + Live Campaign", tools: "Predis.ai, Lately, ChatGPT Ads" },
];

export default function CurriculumSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          6-Module <span className="text-pink-600">Viral Curriculum</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="bg-white p-12 rounded-3xl shadow-3xl border-4 border-pink-100 hover:border-rose-400 transition group"
            >
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                  {mod.num}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-pink-600 transition">
                    {mod.title}
                  </h3>
                  <p className="text-gray-600 font-bold text-lg">{mod.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}