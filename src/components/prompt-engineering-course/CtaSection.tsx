// components/sections/CtaSection.tsx
export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Master <span className="underline">Prompt Engineering & GenAI</span>?
        </h2>
        <p className="text-xl text-white mb-8">Enroll Now & Get 100% Job Assistance</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+917888383788" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Call: +91 788-83-83-788
          </a>
          <a href="mailto:contact@cinutedigital.com" className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}