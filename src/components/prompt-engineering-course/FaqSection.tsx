// components/sections/FaqSection.tsx
export default function FaqSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
            <h3 className="font-bold text-lg mb-2">Do I need AI experience?</h3>
            <p className="text-gray-600">No, the course starts from basics of prompt engineering.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
            <h3 className="font-bold text-lg mb-2">What is the duration?</h3>
            <p className="text-gray-600">20 hours with 80% practical focus on GenAI.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-200">
            <h3 className="font-bold text-lg mb-2">Will I get certification?</h3>
            <p className="text-gray-600">Yes, AAA global certification with QR validation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}