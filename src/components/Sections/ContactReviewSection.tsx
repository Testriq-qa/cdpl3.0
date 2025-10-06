'use client';

// --- Explore Our Reviews (Light + Futuristic, with Logos + Marquee Slider) ---
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Review = {
  name: string;
  date: string;
  source: "Google" | "Sulekha" | "Justdial";
  text: string;
  city?: string; // for Sulekha
  logo: { src: string; alt: string };
};

const PLATFORM = {
  Google: {
    title: "Google",
    statLabel: "Based on",
    statValue: "289 reviews",
    overall: "EXCELLENT",
    logo: { src: "/slider_logos/google-logo.svg", alt: "Google logo" },
  },
  Sulekha: {
    title: "Sulekha",
    statLabel: "Rating",
    statValue: "5.0 · 84 reviews",
    overall: "EXCELLENT",
    logo: { src: "/slider_logos/sulekha.svg", alt: "Sulekha logo" },
  },
  Justdial: {
    title: "Justdial",
    statLabel: "Ratings",
    statValue: "210 ratings",
    overall: "GREAT",
    logo: { src: "/slider_logos/justdial.svg", alt: "Justdial logo" },
  },
} as const;

// --- your same REVIEWS array here (unchanged) ---
const REVIEWS: Review[] = [
  // GOOGLE
  {
    name: "Prathik Singh",
    date: "2025-06-27",
    source: "Google",
    text:
      "I had the opportunity to intern at Cinute, and it has been a great learning experience... I worked on data analysis in Excel, created dashboards, and explored Power BI & Tableau. The quality of teaching is so good...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  { name: "YASH", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  { name: "Sujal Vaity", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  {
    name: "bhumika Ankush",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Vedang Mohit",
    date: "2025-06-27",
    source: "Google",
    text: "The subjects taught are relevant and help prepare students for real-world challenges.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Aryan Prasad",
    date: "2025-06-27",
    source: "Google",
    text: "It's a good opportunity to do course and learn coding languages... good mentors.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Dhruv Salvi",
    date: "2025-06-27",
    source: "Google",
    text:
      "Helped me to learn and gain a lot of knowledge and skills growth throughout, humble and good communicating staff and members.",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  {
    name: "Bhuvan Sharma",
    date: "2025-06-27",
    source: "Google",
    text:
      "Good information provided by the domain providers, very good at communicating and humble...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },
  { name: "Sahil Bhaye", date: "2025-06-27", source: "Google", text: "—", logo: { src: "/slider_logos/google.svg", alt: "Google logo" } },
  {
    name: "Durgesh parab",
    date: "2025-06-27",
    source: "Google",
    text:
      "It is best company to get experience... I’m learning full-stack with highly talented staff...",
    logo: { src: "/slider_logos/google.svg", alt: "Google logo" },
  },

  // SULEKHA
  {
    name: "Aarya",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Excellent Service, Extremely Professional Behavior, Most Trusted Company. Good explanation and friendly nature.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Riya Rajnath Yadav",
    city: "Mumbai",
    date: "06 Nov, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. The instructor teaches very well...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Shital Sawant",
    city: "Mumbai",
    date: "28 Oct, 2024",
    source: "Sulekha",
    text:
      "Highly Affordable Service, Extremely Professional Behavior, Most Trusted Company. Would recommend the class to freshers & newcomers...",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },
  {
    name: "Piyush Prasad",
    city: "Mumbai",
    date: "17 Oct, 2024",
    source: "Sulekha",
    text:
      "Tableau and Excel are excellent batches and the instructors are helpful... I recommend students to enroll in Cinute Digital.",
    logo: { src: "/slider_logos/sulekha-logo.webp", alt: "Sulekha logo" },
  },

  // JUSTDIAL
  {
    name: "Atul",
    date: "18 Nov",
    source: "Justdial",
    text:
      "EMI available, one-on-one mentoring from specialized faculty in AC classrooms. Approachable faculty and resourceful library...",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "User",
    date: "18 Nov",
    source: "Justdial",
    text:
      "Amazing trainers who make even tough topics easy to understand. Super approachable and always ready to help.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "Aatish",
    date: "06 Nov",
    source: "Justdial",
    text:
      "Clean and highly specialized facilities. Regular evaluation ensures top-notch quality; multiple facilities cater to diverse needs.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
  {
    name: "Ami",
    date: "18 Nov",
    source: "Justdial",
    text: "Trainers were amazing.",
    logo: { src: "/slider_logos/justdial-logo.png", alt: "Justdial logo" },
  },
];

export function ContactReviewSection() {
  const [tab, setTab] = useState<keyof typeof PLATFORM>("Google");

  const filtered = useMemo(() => REVIEWS.filter((r) => r.source === tab), [tab]);
  const stat = PLATFORM[tab];
  const statLogo = filtered[0]?.logo ?? stat.logo;

  // Marquee ticker state
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);          // current translateX
  const halfWidthRef = useRef(0);       // width of one sequence (for seamless loop)
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(80); // px/sec (tweak if you like)

  // Respect prefers-reduced-motion
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Measure half width (one sequence) and adjust speed responsively
  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    // total content is duplicated; half is one sequence
    const half = track.scrollWidth / 2;
    halfWidthRef.current = half;

    // Optional: adjust speed by viewport
    if (window.innerWidth >= 1280) setSpeed(110);
    else if (window.innerWidth >= 1024) setSpeed(95);
    else if (window.innerWidth >= 640) setSpeed(85);
    else setSpeed(75);
  };

  useEffect(() => {
    measure();
    const onResize = () => {
      measure();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, filtered.length]);

  // Reset ticker when tab changes
  useEffect(() => {
    offsetRef.current = 0;
    lastTsRef.current = null;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(0px)`;
    }
  }, [tab]);

  // RAF ticker
  useEffect(() => {
    if (reduced) return; // disable animation for reduced motion

    const tick = (ts: number) => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (paused) {
        lastTsRef.current = ts; // maintain last timestamp to avoid jump after pause
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000; // seconds
      lastTsRef.current = ts;

      // move left by speed * dt
      offsetRef.current -= speed * dt;

      // seamless wrap: when moved further than one sequence, add it back
      const half = halfWidthRef.current || 0;
      if (half > 0 && Math.abs(offsetRef.current) >= half) {
        // Keep offset within [-half, 0)
        offsetRef.current += half;
      }

      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, speed, reduced]);

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
                <span className="inline-flex items-center gap-2">
                  <Image
                    src={PLATFORM[p].logo.src}
                    alt={PLATFORM[p].logo.alt}
                    width={80}
                    height={80}
                    priority={p === "Google"}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Stat bar (uses same logo type as cards) */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 border border-slate-200 shadow-sm">
              <Image src={statLogo.src} alt={statLogo.alt} width={18} height={18} />
              {stat.overall}
            </span>
            <span className="opacity-60">•</span>
            <span>
              {stat.statLabel} <strong className="text-slate-900">{stat.statValue}</strong>
            </span>
          </div>
        </div>

        {/* MARQUEE */}
        <div
          className="mt-10 overflow-hidden"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{
            // soft edge fade (mask). If your Tailwind config supports arbitrary properties, this works nicely.
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {/* We duplicate the sequence for a seamless loop */}
          <div ref={trackRef} className="flex will-change-transform">
            {[...filtered, ...filtered].map((r, idx) => (
              <div
                key={`${r.source}-${r.name}-${idx}`}
                className="w-[88vw] sm:w-[40vw] md:w-[33.333vw] lg:w-[28vw] xl:w-[22vw] px-2"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
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
                      <Image src={r.logo.src} alt={r.logo.alt} width={14} height={14} />
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
        </div>

        {/* Platform badges row */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <BadgeCard label="Google Reviews" value="80+" note="Public reviews" logo="/slider_logos/google.svg" />
          <BadgeCard label="Sulekha Reviews" value="84" note="5.0 average" logo="/slider_logos/sulekha-logo.webp" />
          <BadgeCard label="Justdial Ratings" value="210" note="Verified users" logo="/slider_logos/justdial-logo.png" />
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
