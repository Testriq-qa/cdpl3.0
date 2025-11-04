// components/sections/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          Rank Real Websites – <span className="text-cyan-600">Live SEO Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "E-Commerce SEO Audit", result: "+340% Organic Traffic in 90 Days" },
            { title: "Local Business GMB Optimization", result: "Top 3 Pack in 4 Weeks" },
            { title: "Blog Content Strategy", result: "10 Keywords on Page 1" },
          ].map((proj) => (
            <div
              key={proj.title}
              className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border border-emerald-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{proj.title}</h3>
              <p className="text-emerald-600 font-bold text-lg">{proj.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}