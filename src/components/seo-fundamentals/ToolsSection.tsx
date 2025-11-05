// components/sections/ToolsSection.tsx
export default function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          Pro Tools You’ll <span className="text-emerald-600">Master</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Google Analytics", "Search Console", "Ahrefs", "SEMrush", "SurferSEO", "Yoast", "RankMath", "Screaming Frog"].map((tool) => (
            <div
              key={tool}
              className="bg-gradient-to-br from-emerald-100 to-cyan-100 px-10 py-6 rounded-3xl font-bold text-gray-800 shadow-2xl hover:shadow-3xl transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}