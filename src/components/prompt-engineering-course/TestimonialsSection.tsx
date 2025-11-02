// components/sections/TestimonialsSection.tsx
export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          What Our <span className="text-green-600">Students Say</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
            <p className="text-gray-700 italic mb-4">"Mastered prompt engineering in 20 hours – revolutionary!"</p>
            <p className="font-bold text-green-600">- Rohan Mehta, AI Specialist</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
            <p className="text-gray-700 italic mb-4">"The GenAI projects boosted my portfolio immensely."</p>
            <p className="font-bold text-green-600">- Sneha Patel, Content Creator</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
            <p className="text-gray-700 italic mb-4">"Landed a prompt engineer role with 100% assistance."</p>
            <p className="font-bold text-green-600"> - Arjun Singh, Fresher</p>
          </div>
        </div>
      </div>
    </section>
  );
}