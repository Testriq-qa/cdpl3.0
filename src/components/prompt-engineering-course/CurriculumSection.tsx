// components/sections/CurriculumSection.tsx
const modules = [
  { num: "01", title: "Introduction to Generative AI", outcome: "Understand GenAI fundamentals and applications." },
  { num: "02", title: "Prompt Engineering Basics", outcome: "Craft effective basic prompts for AI models." },
  { num: "03", title: "Advanced Prompt Techniques", outcome: "Master chain-of-thought and role-playing prompts." },
  { num: "04", title: "AI Tools & Applications", outcome: "Apply prompts in content generation and coding." },
  { num: "05", title: "Ethical AI & Capstone", outcome: "Build ethical AI projects and portfolios." },
];

export default function CurriculumSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          5-Module <span className="text-green-600">Curriculum</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {modules.map((mod) => (
            <div key={mod.num} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-green-600 mr-4">{mod.num}</span>
                <h3 className="text-2xl font-bold text-gray-900">{mod.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{mod.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}