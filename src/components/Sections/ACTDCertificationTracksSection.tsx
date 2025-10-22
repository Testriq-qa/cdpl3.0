"use client";

export default function ACTDCertificationTracksSection() {
  const tracks = [
    {
      name: "Core Concepts",
      points: ["Policies & scope", "Assessment patterns", "Readiness metrics"],
    },
    {
      name: "Practical Skills",
      points: ["Scenario tasks", "Labs & reviews", "Rubric alignment"],
    },
    {
      name: "Capstone + Interview",
      points: ["End-to-end case", "Storytelling", "Mock interviews"],
    },
  ];

  return (
    <section id="actd-tracks" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Training tracks</h2>
          <p className="mt-2 max-w-3xl text-[15px] text-slate-700 sm:text-base">
            Progress with short sprints, hands-on labs, and structured reviews. Each track culminates in a capstone.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-sm font-extrabold">{t.name}</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {t.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
