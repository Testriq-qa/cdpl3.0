// components/sections/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">cdpl</div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-900">Cinute Digital Pvt. Ltd.</h2>
              <p className="text-green-600 font-semibold">A Premier EdTech Company</p>
            </div>
          </div>
          <h3 className="text-lg text-green-600 font-bold uppercase tracking-wider">Leaders in Professional Training Programs</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Image
            src="/prompt-classroom.jpg"
            alt="Prompt Engineering with Generative AI Training in Mumbai - CDPL"
            width={1200}
            height={600}
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              MASTER PROGRAM IN <span className="text-green-300">Prompt Engineering with Generative AI</span>
            </h1>
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2">
                <span>Duration</span> 20 Hours
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="text-yellow-500 text-3xl">*****</div>
            <span className="text-yellow-600 font-bold">#1 Mumbai's Premium Training Institute</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a href="tel:+917888383788" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              +91 788-83-83-788
            </a>
            <a href="tel:+918488988984" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              +91 84-889-889-84
            </a>
            <a href="tel:+918062785870" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              +91 806-27-85-870
            </a>
          </div>
          <a href="https://www.cinutedigital.com" className="block mt-4 text-green-600 hover:underline">
            www.cinutedigital.com
          </a>
        </div>
      </div>
    </section>
  );
}