"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type Mentor = {
  id: string;
  name: string;
  role: string;
  company?: string;
  bio: string;
  domain: "QA" | "Data" | "Product" | "Engineering" | "Marketing";
  experienceYears?: number;
  skills: string[];
  location?: string;
  image: string;
  linkedin?: string;
};

const DOMAIN_COLORS: Record<Mentor["domain"], string> = {
  QA: "#ff8c00",
  Data: "#0ea5e9",
  Product: "#8b5cf6",
  Engineering: "#10b981",
  Marketing: "#f59e0b",
};

// CDPL brand accents
const BRAND_GRADIENT = "linear-gradient(90deg, #ff8c00 0%, #ffb84d 100%)";

export default function MentorBrowserSection({ mentors }: { mentors: Mentor[] }) {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<Mentor["domain"] | "all">("all");
  const [minExp, setMinExp] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mentors
      .filter((m) => (domain === "all" ? true : m.domain === domain))
      .filter((m) => (m.experienceYears ?? 0) >= minExp)
      .filter((m) => {
        if (!q) return true;
        const hay = [
          m.name,
          m.role,
          m.company ?? "",
          m.bio,
          ...m.skills,
          m.location ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort(
        (a, b) =>
          (b.experienceYears ?? 0) - (a.experienceYears ?? 0) ||
          a.name.localeCompare(b.name),
      );
  }, [domain, mentors, minExp, query]);

  return (
    <section className="relative bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
      {/* ===================== */}
      {/* Unified center gradient */}
      {/* ===================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* soft brand glow centered between filters & grid */}
        <div
          className="
            absolute left-1/2 top-[38%] h-[700px] w-[900px]
            -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-35
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,0.45), rgba(255,184,77,0.28) 40%, rgba(255,140,0,0.0) 70%)",
          }}
        />
        {/* subtle secondary halo to add depth, still centered */}
        <div
          className="
            absolute left-1/2 top-[62%] h-[520px] w-[700px]
            -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20
          "
          style={{
            background:
              "radial-gradient(closest-side, rgba(139,92,246,0.25), rgba(139,92,246,0.10) 50%, rgba(139,92,246,0.0) 75%)",
          }}
        />
      </div>

      {/* Filters (sticky, no line/borders; remains translucent so gradient shows through) */}
      <div id="filters" className="sticky top-0 z-10 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search mentors, skills, tools…"
                aria-label="Search mentors"
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              />
            </div>

            {/* Domain chips + exp slider */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 overflow-x-auto">
                {(["all", "QA", "Data", "Product", "Engineering", "Marketing"] as const).map(
                  (d) => {
                    const active = domain === d || (d === "all" && domain === "all");
                    const content = (
                      <>
                        {d !== "all" && (
                          <span
                            className="mr-1 inline-block h-2 w-2 rounded-full"
                            style={{ backgroundColor: DOMAIN_COLORS[d as Mentor["domain"]] }}
                          />
                        )}
                        {d === "all" ? "All" : d}
                      </>
                    );
                    return (
                      <button
                        key={d}
                        onClick={() => setDomain(d as any)}
                        aria-pressed={active}
                        className={`whitespace-nowrap rounded-full border px-3 py-1 text-xs sm:text-sm transition ${
                          active
                            ? "border-transparent text-white"
                            : "border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50"
                        }`}
                        style={active ? { background: BRAND_GRADIENT } : undefined}
                      >
                        {content}
                      </button>
                    );
                  },
                )}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs sm:text-sm shadow-sm">
                <label htmlFor="exp" className="mr-1 text-neutral-600">
                  Min exp:
                </label>
                <input
                  id="exp"
                  type="range"
                  min={0}
                  max={25}
                  step={1}
                  value={minExp}
                  onChange={(e) => setMinExp(Number(e.target.value))}
                  className="accent-[#ff8c00] w-28 sm:w-36"
                  aria-label="Minimum years of experience"
                />
                <span className="tabular-nums">{minExp}+ yrs</span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-xs text-neutral-500">
            Showing {filtered.length} mentor{filtered.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      {/* Grid — unchanged structure/sizing from your latest version */}
      <div className="relative bg-transparent py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((m) => (
              <li key={m.id} className="group">
                <article className="h-full rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_24px_-12px_rgba(0,0,0,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(0,0,0,0.28)]">
                  <div className="relative">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                      <Image
                        src={m.image}
                        alt={`${m.name}, ${m.role} – CDPL mentor`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute right-2 top-2 rounded-full border border-white/50 bg-white/70 px-2 py-0.5 text-[11px] font-medium backdrop-blur">
                          {(m.experienceYears ?? 0) + "+ yrs"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 p-3.5 sm:p-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: DOMAIN_COLORS[m.domain] }}
                        aria-hidden
                      />
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-600">
                        {m.domain}
                      </p>
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-[13px] text-neutral-700">
                      {m.role} {m.company ? `· ${m.company}` : ""}
                    </p>
                    <p className="line-clamp-3 text-[13px] text-neutral-700">{m.bio}</p>

                    <ul className="mt-1 flex flex-wrap gap-1.5">
                      {m.skills.slice(0, 4).map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[11px] text-neutral-600"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-1.5 flex items-center gap-1.5">
                      {m.linkedin && (
                        <Link
                          href={m.linkedin}
                          className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-2.5 py-1 text-[12px] font-semibold text-neutral-900 transition hover:bg-neutral-50"
                          aria-label={`View ${m.name}'s LinkedIn`}
                        >
                          LinkedIn
                        </Link>
                      )}
                      <Link
                        href={`/contact-us`}
                        className="inline-flex items-center rounded-lg px-2.5 py-1 text-[12px] font-semibold text-white transition hover:brightness-105 active:brightness-95"
                        style={{
                          background: BRAND_GRADIENT,
                          border: "1px solid transparent",
                        }}
                      >
                        Book session
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
