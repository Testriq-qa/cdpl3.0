// components/sections/CareerRoadmapSection.tsx
export default function CareerRoadmapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Your <span className="text-green-600">GenAI Career Roadmap</span>
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <ol className="space-y-6">
            <li className="flex items-start">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <div>
                <h3 className="font-bold text-lg">Complete 20-Hour Hero Program</h3>
                <p className="text-gray-600">Basics → Advanced Prompting → Projects.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <div>
                <h3 className="font-bold text-lg">Build AI Portfolio</h3>
                <p className="text-gray-600">Create GenAI apps and showcase on GitHub.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <div>
                <h3 className="font-bold text-lg">Get 100% Job Assistance</h3>
                <p className="text-gray-600">Resume, interviews, placements at top firms.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">4</span>
              <div>
                <h3 className="font-bold text-lg">Land 8 LPA+ Job</h3>
                <p className="text-gray-600">Prompt Engineer, AI Specialist, Content AI Lead.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}