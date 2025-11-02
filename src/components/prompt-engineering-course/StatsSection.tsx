// components/sections/StatsSection.tsx
export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Why <span className="text-green-600">Prompt Engineering with Gen AI</span>?
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Unlock the power of AI with prompt engineering – the skill of the future.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-green-100">
            <div className="text-4xl font-bold text-green-600 mb-2">20 Hours</div>
            <p className="text-gray-700">Intensive Training</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-yellow-100">
            <div className="text-4xl font-bold text-yellow-600 mb-2">80:20</div>
            <p className="text-gray-700">Practical to Theory</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-indigo-100">
            <div className="text-4xl font-bold text-indigo-600 mb-2">1:1</div>
            <p className="text-gray-700">Doubt Solving</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-pink-100">
            <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
            <p className="text-gray-700">Job Assistance</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">14+</div>
            <p className="text-gray-700">Years Expertise</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-blue-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">AAA</div>
            <p className="text-gray-700">Global Certification</p>
          </div>
        </div>
      </div>
    </section>
  );
}