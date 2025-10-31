// src/components/sections/LocationsBenefitsSection.tsx
"use client";

type Benefit = { icon: string; title: string; desc: string };

export default function LocationsBenefitsSection({
  sectionClassName = "",
  containerClassName = "",
}: {
  /** Extra classes for the full-width outer section */
  sectionClassName?: string;
  /** Extra classes appended to the constrained container */
  containerClassName?: string;
}) {
  const benefits: Benefit[] = [
    { icon: "🌍", title: "Nationwide Reach", desc: "Courses in 50+ cities across 5 states." },
    { icon: "💼", title: "95% Placement", desc: "Job assistance in local tech hubs." },
    { icon: "🆓", title: "Flexible Modes", desc: "Online, offline, hybrid learning options." },
    { icon: "📱", title: "Mobile-First", desc: "Access materials anytime, anywhere." },
  ];

  return (
    <section className={`w-full ${sectionClassName}`}>
      {/* Constrained container as requested */}
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="grid gap-6 text-center md:grid-cols-4">
          <h2 className="col-span-full text-3xl font-bold text-gray-900">
            Why Choose Our Locations?
          </h2>

          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="mb-2 text-4xl">{b.icon}</div>
              <h3 className="mb-2 font-semibold text-gray-900">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
