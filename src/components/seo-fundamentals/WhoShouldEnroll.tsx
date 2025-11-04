// components/sections/WhoShouldEnroll.tsx
export default function WhoShouldEnroll() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">Who Should Join?</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {["Freshers", "Bloggers", "Marketers", "Entrepreneurs"].map((role) => (
            <div key={role} className="text-center">
              <div className="bg-white w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl text-5xl">
                Rocket
              </div>
              <p className="text-2xl font-bold text-gray-900">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}