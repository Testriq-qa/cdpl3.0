// components/sections/CareerSection.tsx
export default function CareerSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-black text-gray-900 mb-10">
          80,000+ <span className="text-rose-600">SMM Jobs</span> Hiring Now
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 max-w-6xl mx-auto">
          {["Myntra", "Zomato", "Swiggy", "Nykaa", "Boat", "Mamaearth"].map((comp) => (
            <div key={comp} className="bg-gradient-to-r from-pink-100 to-rose-100 p-8 rounded-3xl font-black text-gray-800 shadow-2xl">
              {comp}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}