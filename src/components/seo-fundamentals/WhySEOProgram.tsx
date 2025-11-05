// components/sections/WhySEOProgram.tsx
export default function WhySEOProgram() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-10">
          The <span className="text-cyan-600">Only SEO Course</span> You’ll Ever Need
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          From zero to ranking #1 on Google. Learn on-page, off-page, technical SEO, AI tools, local SEO, and earn a globally recognized certificate in just 40 hours.
        </p>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-14">
          {["40 Hours", "Live Projects", "Google Cert Prep", "100% Placement", "Lifetime Access"].map((tag) => (
            <div
              key={tag}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-xl"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}