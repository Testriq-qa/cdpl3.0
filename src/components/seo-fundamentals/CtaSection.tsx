// components/sections/CtaSection.tsx
export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          Rank #1 in <span className="underline">40 Hours</span>
        </h2>
        <p className="text-2xl text-white mb-10">Next Batch Starts in 48 Hours • Only 20 Seats</p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <a
            href="tel:+917888383788"
            className="bg-white text-emerald-600 px-12 py-6 rounded-full font-black text-2xl hover:scale-110 transition shadow-2xl"
          >
            Call Now: +91 788-83-83-788
          </a>
          <a
            href="#enroll"
            className="bg-transparent border-4 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-emerald-600 transition"
          >
            Reserve My Seat
          </a>
        </div>
      </div>
    </section>
  );
}