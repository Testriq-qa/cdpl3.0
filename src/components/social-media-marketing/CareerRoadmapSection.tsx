// components/sections/CareerRoadmapSection.tsx
export default function CareerRoadmapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-black text-center text-gray-900 mb-16">
          Your <span className="text-pink-600">60-Hour Viral Path</span>
        </h2>
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-16 rounded-3xl shadow-3xl max-w-6xl mx-auto">
          <ol className="space-y-12">
            {[
              { step: 1, title: "Learn SMM", desc: "60 hrs live" },
              { step: 2, title: "Run 5 Campaigns", desc: "Real clients" },
              { step: 3, title: "Build Portfolio", desc: "1M+ reach" },
              { step: 4, title: "Earn ₹15 LPA+", desc: "Job or freelance" },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-10">
                <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-5xl font-black shadow-2xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-4xl font-black text-gray-900">{item.title}</h3>
                  <p className="text-2xl text-gray-700">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}