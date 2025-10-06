// --- Explore Our Reviews (Light + Futuristic, with Logos + Auto Slider) ---
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Review = {
  name: string;
  date: string;
  source: "Google" | "Sulekha" | "Justdial";
  text: string;
  city?: string;      // for Sulekha
};

const PLATFORM = {
  Google: {
    title: "Google",
    statLabel: "Based on",
    statValue: "289 reviews",
    overall: "EXCELLENT",
    logo: { src: "/logos/google.svg", alt: "Google logo" },
  },
  Sulekha: {
    title: "Sulekha",
    statLabel: "Rating",
    statValue: "5.0 · 84 reviews",
    overall: "EXCELLENT",
    logo: { src: "/logos/sulekha.svg", alt: "Sulekha logo" },
  },
  Justdial: {
    title: "Justdial",
    statLabel: "Ratings",
    statValue: "210 ratings",
    overall: "GREAT",
    logo: { src: "/logos/justdial.svg", alt: "Justdial logo" },
  },
} as const;

const REVIEWS: Review[] = [
  // --- Google ---
  {
    name: "Prathik Singh",
    date: "2025-06-27",
    source: "Google",
    text:
      "I had the opportunity to intern at Cinute, and it has been a great learning experience... I worked on data analysis in Excel, created dashboards, and explored Power BI & Tableau. The quality of teaching is so good...",
  },
  { name: "YASH", date: "2025-06-27", source: "Google", text: "—" },
  { name: "Sujal Vaity", date: "2025-06-27", source: "Google", text: "—" },
  {
    name: "bhumika Ankush",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
  },
  {
    name: "Vedang Mohit",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
  },
  {
    name: "Aryan Prasad",
    date: "2025-06-27",
    source: "Google",
    text: "It's a good opportunity to do course and learn coding languages... good mentors.",
  },
  {
    name: "Dhruv Salvi",
    date: "2025-06-27",
    source: "Google",
    text: "Helped me to learn and gain a lot of knowledge and skills growth throughout, humble and good communicating staff and members.",
  },
  {
    name: "Bhuvan Sharma",
    date: "2025-06-27",
    source: "Google",
    text: "Good information provided by the domain providers, very good at communicating and humble...",
  },
  { name: "Sahil Bhaye", date: "2025-06-27", source: "Google", text: "—" },
  {
    name: "Durgesh parab",
    date: "2025-06-27",
    source: "Google",
    text: "It is best company to get experience... I’m learning full-stack with highly talented staff...",
  },

  // --- Sulekha ---
  {
    name: "Aarya",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text: "Excellent Service, Extremely Professional Behavior, Most Trusted Company. Good explanation and friendly nature.",
  },
  {
    name: "Riya Rajnath Yadav",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text: "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. The instructor teaches very well...",
  },
  {
    name: "Shital Sawant",
    city: "Mumbai",
    date: "28 Oct, 2024",
    source: "Sulekha",
    text: "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. Would recommend the class to freshers & newcomers...",
  },
  {
    name: "Piyush Prasad",
    city: "Mumbai",
    date: "17 Oct, 2024",
    source: "Sulekha",
    text: "Tableau and Excel are excellent batches and the instructors are helpful... I recommend students to enroll in Cinute Digital.",
  },

  // --- Justdial ---
  {
    name: "Atul",
    date: "18 Nov",
    source: "Justdial",
    text: "EMI available, one-on-one mentoring from specialized faculty in AC classrooms. Approachable faculty and resourceful library...",
  },
  {
    name: "User",
    date: "18 Nov",
    source: "Justdial",
    text: "Amazing trainers who make even tough topics easy to understand. Super approachable and always ready to help.",
  },
  {
    name: "Aatish",
    date: "06 Nov",
    source: "Justdial",
    text: "Clean and highly specialized facilities. Regular evaluation ensures top-notch quality; multiple facilities cater to diverse needs.",
  },
  { name: "Ami", date: "18 Nov", source: "Justdial", text: "Trainers were amazing." },
];

export function ContactReviewSection() {
  const [tab, setTab] = useState<keyof typeof PLATFORM>("Google");

  const filtered = useMemo(() => REVIEWS.filter((r) => r.source === tab), [tab]);
  const stat = PLATFORM[tab];

  // --- Slider state ---
  const [index, setIndex] = useState(0);
  const [perPage, setPerPage] = useState(1); // responsive cards per view
  const [paused, setPaused] = useState(false);
  const maxIndex = Math.max(0, filtered.length - perPage);

  // determine perPage on resize
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1024) setPerPage(3);
      else if (window.innerWidth >= 768) setPerPage(2);
      else setPerPage(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // reset index when tab/perPage changes
  useEffect(() => {
    setIndex(0);
  }, [tab, perPage]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 2500);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative isolate">
      {/* soft gradient bg + glow */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-violet-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-x-0 top-[-80px] mx-auto h-64 w-[70%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(56,189,248,.20), rgba(167,139,250,.12) 60%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            ⭐ Explore Our Reviews
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            What learners say about{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Cinute Digital
            </span>
          </h2>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-md">
            {(Object.keys(PLATFORM) as Array<keyof typeof PLATFORM>).map((p) => (
              <button
                key={p}
                onClick={() => setTab(p)}
                className={[
                  "px-4 py-2 text-sm font-medium rounded-xl transition",
                  tab === p
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow"
                    : "text-slate-700 hover:bg-slate-50",
                ].join(" ")}
                aria-label={`View ${PLATFORM[p].title} reviews`}
              >
                {/* tab logo */}
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={PLATFORM[p].logo.src}
                    alt={PLATFORM[p].logo.alt}
                    width={16}
                    height={16}
                    priority={p === "Google"}
                  />
                  {PLATFORM[p].title}
                </span>
              </button>
            ))}
          </div>

          {/* Stat bar */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
              <Image src={stat.logo.src} alt={`${stat.title} logo`} width={16} height={16} />
              {stat.overall}
            </span>
            <span className="opacity-60">•</span>
            <span>
              {stat.statLabel} <strong className="text-slate-900">{stat.statValue}</strong>
            </span>
          </div>
        </div>

        {/* Slider */}
        <div
          className="mt-10 overflow-hidden"
          ref={sliderRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(index * 100) / perPage}%)`,
              width: `${(filtered.length * 100) / perPage}%`,
            }}
          >
            {filtered.map((r, idx) => (
              <div
                key={`${r.source}-${r.name}-${idx}`}
                className="w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:shadow-xl">
                  {/* corner glow */}
                  <div
                    aria-hidden
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-400/10 blur-2xl"
                  />
                  <header className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-slate-900 truncate">{r.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {r.city ? `${r.city} • ` : ""}
                        {r.date} • {r.source}
                      </p>
                    </div>
                    {/* source logo badge */}
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600">
                      <Image
                        src={PLATFORM[r.source].logo.src}
                        alt={`${r.source} logo`}
                        width={14}
                        height={14}
                      />
                      Verified
                    </span>
                  </header>

                  <p className="mt-3 text-sm leading-6 text-slate-700">{r.text}</p>

                  <footer className="mt-4 text-xs text-slate-500">
                    Trustindex verifies source on Google / platform verifies identity where applicable.
                  </footer>
                </article>
              </div>
            ))}
          </div>

          {/* slider controls (optional) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Platform badges row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <BadgeCard label="Google Reviews" value="80+" note="Public reviews" logo="/slider_logos/google.svg" />
          <BadgeCard label="Sulekha Reviews" value="84" note="5.0 average" logo="/slider_logos/sulekha.svg" />
          <BadgeCard label="Justdial Ratings" value="210" note="Verified users" logo="/slider_logos/justdial.svg" />
        </div>
      </div>
    </section>
  );
}

function BadgeCard({
  label,
  value,
  note,
  logo,
}: {
  label: string;
  value: string;
  note?: string;
  logo: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-md">
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center">
        <Image src={logo} alt={`${label} logo`} width={50} height={50} />
      </div>
      <div className="text-3xl font-extrabold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 text-sm font-medium text-slate-700">{label}</div>
      {note && <div className="text-xs text-slate-500 mt-1">{note}</div>}
    </div>
  );
}
