// components/sections/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Go <span className="text-rose-600">Viral</span> – Live Campaigns
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Fashion Brand Reels", result: "1.2M Views in 7 Days" },
            { title: "Restaurant Facebook Ads", result: "₹45 ROI per ₹1 Spent" },
            { title: "Startup LinkedIn Growth", result: "10K Followers in 30 Days" },
          ].map((proj) => (
            <div
              key={proj.title}
              className="bg-gradient-to-br from-pink-50 to-rose-50 p-10 rounded-3xl shadow-3xl border-4 border-pink-200"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">{proj.title}</h3>
              <p className="text-rose-600 font-black text-2xl">{proj.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}