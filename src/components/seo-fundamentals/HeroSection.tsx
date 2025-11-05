// components/sections/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-cyan-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Glow */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-emerald-200">
            <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              cdpl
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Cinute Digital Pvt. Ltd.</h2>
              <p className="text-emerald-600 font-bold">A Premier EdTech Company</p>
            </div>
          </div>
          <p className="text-emerald-700 font-bold text-lg mt-3 uppercase tracking-wider">
            Leaders in Professional Training Programs
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-3xl -z-10"></div>
          <Image
            src="/seo-classroom.jpg"
            alt="SEO Fundamentals Training in Mumbai - Live Classroom"
            width={1400}
            height={700}
            className="rounded-3xl shadow-2xl border-4 border-emerald-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent rounded-3xl"></div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              MASTER PROGRAM IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
                SEO Fundamentals
              </span>
            </h1>
            <div className="flex justify-center gap-6">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3">
                Duration: <span className="text-3xl">40 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust + CTA */}
        <div className="mt-14 text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-yellow-500 text-5xl">5 stars</span>
            <p className="text-yellow-600 font-bold text-2xl">#1 Mumbai’s Premium SEO Training Institute</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
            {["+91 788-83-83-788", "+91 84-889-889-84", "+91 806-27-85-870"].map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl"
              >
                {phone}
              </a>
            ))}
          </div>
          <a href="https://www.cinutedigital.com" className="block mt-6 text-emerald-600 hover:underline text-xl font-medium">
            www.cinutedigital.com
          </a>
        </div>
      </div>
    </section>
  );
}