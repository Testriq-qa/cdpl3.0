// components/sections/WhoShouldEnroll.tsx
export default function WhoShouldEnroll() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">Who Should Join?</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {["Marketers", "Analysts", "E-Commerce", "Startups"].map((role) => (
            <div key={role} className="text-center">
              <div className="bg-white w-28 h-28 rounded-full mx-auto mb-8 flex items-center justify-center shadow-3xl text-7xl">
                Chart
              </div>
              <p className="text-3xl font-black text-gray-900">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}