// components/sections/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Glow */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-2xl border border-pink-200">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl">
              cdpl
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900">Cinute Digital Pvt. Ltd.</h2>
              <p className="text-pink-600 font-bold text-lg">A Premier EdTech Company</p>
            </div>
          </div>
          <p className="text-pink-700 font-bold text-xl mt-4 uppercase tracking-widest">
            Leaders in Professional Training Programs
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 blur-3xl -z-10 animate-pulse"></div>
          <Image
            src="/smm-classroom.jpg"
            alt="Social Media Marketing Course in Mumbai - Live Training"
            width={1600}
            height={800}
            className="rounded-3xl shadow-3xl border-8 border-pink-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent rounded-3xl"></div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              MASTER PROGRAM IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-300">
                Social Media Marketing
              </span>
            </h1>
            <div className="flex justify-center gap-8">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-5 rounded-full font-black text-2xl shadow-3xl flex items-center gap-4">
                Duration: <span className=" h-12 w-12 bg-white/30 rounded-full flex items-center justify-center text-4xl">60</span> Hours
              </div>
            </div>
          </div>
        </div>

        {/* Trust + CTA */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-yellow-500 text-6xl">5 stars</span>
            <p className="text-yellow-600 font-black text-3xl">#1 Mumbai’s Premium SMM Institute</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            {["+91 788-83-83-788", "+91 84-889-889-84", "+91 806-27-85-870"].map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition shadow-2xl"
              >
                {phone}
              </a>
            ))}
          </div>
          <a href="https://www.cinutedigital.com" className="block mt-8 text-pink-600 hover:underline text-2xl font-bold">
            www.cinutedigital.com
          </a>
        </div>
      </div>
    </section>
  );
}