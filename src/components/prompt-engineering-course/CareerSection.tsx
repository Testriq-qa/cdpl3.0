// components/sections/CareerSection.tsx
export default function CareerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Top Companies Hiring <span className="text-green-600">Prompt Engineers</span>
        </h2>
        <p className="text-3xl font-bold text-green-600 mb-8">50K+ Job Vacancies in India</p>
        <p className="text-lg text-gray-700 mb-10">
          Careers in AI content, automation, and innovation.
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/tcs-logo.png" alt="TCS" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/infosys-logo.png" alt="Infosys" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/wipro-logo.png" alt="Wipro" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/cognizant-logo.png" alt="Cognizant" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/accenture-logo.png" alt="Accenture" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/capgemini-logo.png" alt="Capgemini" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/hcl-logo.png" alt="HCL" className="mx-auto h-12" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <img src="/ibm-logo.png" alt="IBM" className="mx-auto h-12" />
          </div>
        </div>
        <p className="mt-12 text-lg text-gray-600">and many more...</p>
      </div>
    </section>
  );
}