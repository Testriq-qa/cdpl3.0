"use client";

export default function AAACertificationWhySection() {
  const items = [
    { t: "Industry-aligned", d: "Mapped to AAA blueprint with graded labs & capstone." },
    { t: "Mentor guidance", d: "1:1 feedback on projects and exam readiness." },
    { t: "Outcome-focused", d: "Portfolio artifacts recruiters can evaluate." },
    { t: "Flexible learning", d: "Live + recorded sessions, weekend cohorts." },
    { t: "Shareable badge", d: "Verifiable digital certificate with unique ID." },
    { t: "Hiring visibility", d: "Surfaced to CDPL partner network." },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Why AAA with <span style={{ color: "#ff8c00" }}>CDPL</span>
          </h2>
          <p className="mt-2 max-w-3xl text-[15px] text-slate-700 sm:text-base">
            Cinute Digital Pvt. Ltd. blends instructor expertise, labs, and structured assessment for employability.
          </p>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <li
              key={f.t}
              className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-sm font-extrabold">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-700">{f.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
