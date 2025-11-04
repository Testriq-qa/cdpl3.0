// components/sections/CtaSection.tsx
export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-pink-600 to-rose-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-10">
          Go <span className="underline">Viral</span> in 60 Hours
        </h2>
        <p className="text-3xl text-white mb-12">Next Batch Starts in 24 Hours • Only 15 Seats</p>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <a
            href="tel:+917888383788"
            className="bg-white text-pink-600 px-16 py-8 rounded-full font-black text-3xl hover:scale-110 transition shadow-3xl"
          >
            Call: +91 788-83-83-788
          </a>
          <a
            href="#enroll"
            className="bg-transparent border-8 border-white text-white px-16 py-8 rounded-full font-black text-3xl hover:bg-white hover:text-pink-600 transition"
          >
            Grab My Seat
          </a>
        </div>
      </div>
    </section>
  );
}