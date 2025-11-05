// components/sections/WhyMediaProgram.tsx
export default function WhyMediaProgram() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl font-black text-gray-900 mb-12">
          The <span className="text-rose-600">Only SMM Course</span> You’ll Ever Need
        </h2>
        <p className="text-2xl text-gray-600 max-w-5xl mx-auto mb-16 leading-relaxed">
          Master Instagram, Facebook, LinkedIn, YouTube, TikTok, WhatsApp Business & AI Tools. Build viral campaigns, grow 100K+ followers, and land ₹15 LPA jobs in 60 hours.
        </p>

        <div className="grid md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {["60 Hours", "Live Campaigns", "Meta Cert Prep", "100% Placement", "Viral Toolkit", "Lifetime Mentorship"].map((tag) => (
            <div
              key={tag}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-5 px-8 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}