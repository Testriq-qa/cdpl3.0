// components/sections/WhoShouldEnroll.tsx
export default function WhoShouldEnroll() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Who is this <span className="text-green-600">course for</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Beginners Interested in AI</h3>
            <p className="text-gray-600">No prior experience required – start from basics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professionals in Content & Marketing</h3>
            <p className="text-gray-600">Leverage GenAI for automated content creation.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Developers & Engineers</h3>
            <p className="text-gray-600">Enhance coding with AI prompt techniques.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Career Switchers to AI</h3>
            <p className="text-gray-600">Build skills for emerging AI roles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}