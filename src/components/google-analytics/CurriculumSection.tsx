// components/sections/CurriculumSection.tsx
const modules = [
    { num: "01", title: "GA4 Fundamentals & Setup", tools: "GTM, Data Layer, Events" },
    { num: "02", title: "Advanced Tracking", tools: "E-commerce, Enhanced Measurement" },
    { num: "03", title: "Looker Studio Mastery", tools: "Custom Dashboards, Blends" },
    { num: "04", title: "BigQuery + SQL", tools: "10M-row Queries, ML Models" },
    { num: "05", title: "Adobe Analytics", tools: "Workspace, Segments, A/B Tests" },
    { num: "06", title: "AI Analytics + Capstone", tools: "GA4 + BigQuery ML, Live Audit" },
];

export default function CurriculumSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
                    6-Module <span className="text-indigo-600">GA4 Pro Curriculum</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {modules.map((mod) => (
                        <div
                            key={mod.num}
                            className="bg-white p-12 rounded-3xl shadow-3xl border-4 border-indigo-100 hover:border-purple-400 transition group"
                        >
                            <div className="flex items-start gap-8">
                                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-5xl font-black shadow-2xl">
                                    {mod.num}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition">
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