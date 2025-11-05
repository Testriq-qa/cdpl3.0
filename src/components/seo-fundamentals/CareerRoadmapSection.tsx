// components/sections/CareerRoadmapSection.tsx
export default function CareerRoadmapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-14">
          Your <span className="text-emerald-600">40-Hour SEO Success Path</span>
        </h2>
        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-12 rounded-3xl shadow-3xl max-w-5xl mx-auto">
          <ol className="space-y-10">
            {[
              { step: 1, title: "Learn SEO", desc: "40 hrs live training" },
              { step: 2, title: "Rank 3 Websites", desc: "Live project portfolio" },
              { step: 3, title: "Ace Interviews", desc: "50+ SEO questions" },
              { step: 4, title: "Earn ₹8 LPA+", desc: "Job or freelance" },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-8">
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-black shadow-xl">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xl text-gray-700">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}