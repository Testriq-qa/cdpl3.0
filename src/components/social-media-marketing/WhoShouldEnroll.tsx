// components/sections/WhoShouldEnroll.tsx
export default function WhoShouldEnroll() {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">Who Should Join?</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {["Freshers", "Entrepreneurs", "Influencers", "Marketers"].map((role) => (
            <div key={role} className="text-center">
              <div className="bg-white w-28 h-28 rounded-full mx-auto mb-8 flex items-center justify-center shadow-3xl text-7xl">
                Rocket
              </div>
              <p className="text-3xl font-black text-gray-900">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}