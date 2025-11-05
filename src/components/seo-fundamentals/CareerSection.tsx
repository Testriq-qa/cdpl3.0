// components/sections/CareerSection.tsx
export default function CareerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-8">
          50,000+ <span className="text-cyan-600">SEO Jobs</span> Waiting
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {["Swiggy", "Zomato", "Nykaa", "MakeMyTrip", "PolicyBazaar", "Upstox"].map((comp) => (
            <div key={comp} className="bg-gradient-to-r from-emerald-100 to-cyan-100 p-6 rounded-2xl font-bold text-gray-800 shadow-lg">
              {comp}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}