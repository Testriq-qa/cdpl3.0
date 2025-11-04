// components/sections/ToolsSection.tsx
export default function ToolsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Tools You’ll <span className="text-indigo-600">Master</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {["GA4", "GTM", "Looker Studio", "BigQuery", "Adobe Analytics", "Hotjar", "Mixpanel", "Amplitude"].map((tool) => (
            <div
              key={tool}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 px-12 py-8 rounded-3xl font-black text-gray-800 text-xl shadow-3xl hover:scale-110 transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}