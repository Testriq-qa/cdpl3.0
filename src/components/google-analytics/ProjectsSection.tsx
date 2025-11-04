// components/sections/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Track Real <span className="text-purple-600">Websites</span> – Live Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "E-Commerce GA4 Audit", result: "+285% Conversion Tracking" },
            { title: "BigQuery Dashboard", result: "10M Rows in 3 Sec" },
            { title: "Looker Studio Report", result: "Used by 50+ Clients" },
          ].map((proj) => (
            <div
              key={proj.title}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-3xl shadow-3xl border-4 border-indigo-200"
            >
              <h3 className="text-3xl font-black text-gray-900 mb-6">{proj.title}</h3>
              <p className="text-purple-600 font-black text-2xl">{proj.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}