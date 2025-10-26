"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search, X } from "lucide-react";
import Image from "next/image";

type Placement = {
  name: string;
  company: string;
  domain: "QA";
  role?: string;
  city?: string;
  image: string;
};

const DATA: Placement[] = [
  { name: "Dakshali Merya", company: "Tech Mahindra", domain: "QA", image: "/placements/Dakshali Merya.jpg" },
  { name: "Sheetal Singh", company: "Accenture", domain: "QA", image: "/placements/Sheetal Singh.jpg" },
  { name: "Shrikanth Suri", company: "eClerx", domain: "QA", image: "/placements/Shrikanth Suri.jpg" },
  { name: "Kartik Bomble", company: "JM Financial", domain: "QA", image: "/placements/Kartik Bomble.jpg" },
  { name: "Bhagyesh Mahadik", company: "Tech Mahindra", domain: "QA", image: "/placements/Bhagyesh Mahadik.jpg" },
  { name: "Latesh Kamble", company: "Testriq", domain: "QA", image: "/placements/Latesh Kamble.jpg" },
  { name: "Tejal More", company: "i-XL", domain: "QA", image: "/placements/Tejal More.jpg" },
  { name: "Rajvardhan Desai", company: "i-XL", domain: "QA", image: "/placements/Rajvardhan Desai.jpg" },
  { name: "Arun Panicker", company: "Aryan Technologies", domain: "QA", image: "/placements/Arun Panicker.jpg" },
  { name: "Bhakti Raigawali", company: "Aryan Technologies", domain: "QA", image: "/placements/Bhakti Raigawali.jpg" },
  { name: "Satya Dutt", company: "Tech Mahindra", domain: "QA", image: "/placements/Satya Dutt.jpg" },
  { name: "Mohsin Patel", company: "Testriq", domain: "QA", image: "/placements/Mohsin Patel.jpg" },
  { name: "Kishore Jha", company: "Raw Engineering", domain: "QA", image: "/placements/Kishore Jha.jpg" }, // fixed
  { name: "Krutika Penkar", company: "Tech Cryptors", domain: "QA", image: "/placements/Krutika Penkar.jpg" }, // fixed
  { name: "Insha Dosani", company: "Maxwell Energy Systems", domain: "QA", image: "/placements/Insha Dosani.jpg" },
  { name: "Jaynam Shah", company: "IDfy", domain: "QA", image: "/placements/Jaynam Shah.jpg" },
  { name: "Akash Yadav", company: "CVistar", domain: "QA", image: "/placements/Akash Yadav.jpg" },
  { name: "Preksha Mehta", company: "Tech Mahindra", domain: "QA", image: "/placements/Preksha Mehta.jpg" },
  { name: "Shreyash Pakhare", company: "Testriq", domain: "QA", image: "/placements/Shreyash Pakhare.jpg" },
  { name: "Navin Joshi", company: "Rendered Ideas", domain: "QA", image: "/placements/Navin Joshi.jpg" },
  { name: "Rucha Pawar", company: "Reeble", domain: "QA", image: "/placements/Rucha Pawar.jpg" },
  { name: "Abdul Mateen", company: "QodeNext", domain: "QA", image: "/placements/Abdul Mateen.jpg" },
  { name: "Muthukumaran Iyer", company: "Axiom TechGuru", domain: "QA", image: "/placements/Muthukumaran Iyer.jpg" },
  { name: "Aaditya Bobade", company: "Punon Technologies", domain: "QA", image: "/placements/Aaditya Bobade.jpg" },
  { name: "Sunil Pillai", company: "Tech Mahindra", domain: "QA", image: "/placements/Sunil Pillai.jpg" },
  { name: "Ashwini Badgujar", company: "Testriq", domain: "QA", image: "/placements/Ashwini Badgujar.jpg" },
  { name: "Faiz Khan", company: "Rendered Ideas", domain: "QA", image: "/placements/Faiz Khan.jpg" },
  { name: "Shrey Gupta", company: "Rendered Ideas", domain: "QA", image: "/placements/Shrey Gupta.jpg" },
];

const DOMAINS = ["All", "QA"] as const;

const DOMAIN_COLORS = {
  QA: { bg: "bg-orange-50", text: "text-[#ff8c00]", ring: "ring-[#ff8c00]/20" },
};

/** Logo files present in /placements/companies/temp (from your list) */
const COMPANY_LOGOS: Record<string, string> = {
  "tech mahindra": "tech_mahindra.png",
  "accenture": "accenture.png",
  "eclerx": "eclerx.png",
  "jm financial": "jm_financial.png",
  "testriq": "testriq.png",
  "i-xl technologies": "i-xl_technologies.png",
  "aryan technologies": "aryan_technologies.png",
  "maxwell energy systems": "maxwell.png",
  "idfy": "idfy.png",
  "vistaar": "vistaar.png",
  "rendered ideas": "rendered_ideas.png",
  "reeble": "reeble.png",
  "axiom technologies": "axiom_technologies.png",
  "punon technologies": "punon.png",
  "raw engineering": "raw_engineering.png",
  "tech cryptors": "tech_cryptors.png",
  "codex lancers": "codex_lancers.png",
  "alif management services": "alif_management_services2.png",
  "sp ultraflex": "sp_ultraflex.png",
  "xr": "xr.png",
  "ibkr": "ibkr.png",
};

/** SVG fallback (for companies without a file yet) */
const FALLBACK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="40" viewBox="0 0 180 40">
    <rect x="0.5" y="0.5" width="179" height="39" rx="6" ry="6" fill="#fafafa" stroke="#e5e7eb"/>
    <circle cx="20" cy="20" r="6" fill="#cbd5e1"/>
    <rect x="34" y="14" width="108" height="12" rx="3" fill="#e2e8f0"/>
  </svg>`
);
const COMPANY_LOGO_FALLBACK = `data:image/svg+xml;utf8,${FALLBACK_SVG}`;

/** Aliases/variants → canonical keys (or placeholders) */
function normalizeCompanyName(name: string): string {
  const n = name.trim().toLowerCase();

  if (COMPANY_LOGOS[n]) return n;

  // Axiom
  if (n === "axiom techguru" || n === "axiom tech guru") return "axiom technologies";

  // QodeNext / CodeNext variants → sp_ultraflex.png
  if (n === "qodenext" || n === "qode next" || n === "qodenext technologies" || n === "codenext" || n === "code next") {
    return "sp ultraflex";
  }

  // CVistar variants → xr.png
  if (n === "cvistar" || n === "c vistar" || n === "c-vistar") return "xr";

  // i-XL short form
  if (n === "i-xl") return "i-xl technologies";

  return n;
}

function getCompanyLogoSrc(company: string): string {
  const key = normalizeCompanyName(company);
  const file = COMPANY_LOGOS[key];
  return file ? `/placements/companies/temp/${file}` : COMPANY_LOGO_FALLBACK;
}

type Props = { contained?: boolean };

export default function PlacementsFiltersGridSection({ contained = false }: Props) {
  const [q, setQ] = useState("");
  const [domain, setDomain] = useState<(typeof DOMAINS)[number]>("All");

  const results = useMemo(() => {
    return DATA.filter((d) => {
      const qok = !q || `${d.name} ${d.company}`.toLowerCase().includes(q.toLowerCase());
      const dok = domain === "All" || d.domain === domain;
      return qok && dok;
    });
  }, [q, domain]);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : <>{children}</>;

  return (
    <section className="w-full py-10 sm:py-12">
      <Wrapper>
        {/* FILTER BAR */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, rgba(255,140,0,.35), rgba(255,209,158,.35))" }}
          />
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div className="inline-flex items-center gap-2 text-slate-500">
              <Filter className="h-4 w-4" />
              <span className="text-sm sm:text-base">Filter by domain &amp; search</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {DOMAINS.map((d) => {
                const active = domain === d;
                return (
                  <button
                    key={d}
                    onClick={() => setDomain(d)}
                    className={`rounded-full border px-3 py-1 text-sm sm:text-base font-medium transition ${
                      active
                        ? "border-[#ff8c00] bg-orange-50 text-[#ff8c00]"
                        : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full xl:w-[380px] xl:justify-self-end">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name or company…"
                className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-9 py-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-200"
              />
              {q ? (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  aria-label="Clear"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
            <span>
              Showing <span className="font-semibold">{results.length}</span> {results.length === 1 ? "result" : "results"}
            </span>
            <span className="hidden sm:inline">Tip: Use search or domain filters.</span>
          </div>

          <AnimatePresence mode="popLayout">
            {results.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="grid place-items-center rounded-2xl border border-slate-200 bg-white p-10 text-center"
              >
                <p className="text-slate-700">No matches. Try a different search.</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial="hidden"
                animate="show"
                variants={{ hidden: { opacity: 1 }, show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.02 } } }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {results.map((p, idx) => {
                  const theme = DOMAIN_COLORS[p.domain];
                  const logoSrc = getCompanyLogoSrc(p.company);

                  return (
                    <motion.div
                      key={`${p.name}-${idx}`}
                      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.25 }}
                      className="relative overflow-visible rounded-2xl border border-slate-200 bg-white p-4 shadow-sm w-full"
                    >
                      {/* left accent */}
                      <span aria-hidden className={`absolute left-0 top-0 h-full w-1.5 rounded-l-2xl ${theme.bg}`} />

                      {/* AVATAR overlapping card border */}
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={64}
                        height={64}
                        className="absolute -left-3 -top-3 h-16 w-16 rounded-full object-cover border border-slate-200 ring-4 ring-white shadow"
                      />

                      {/* Header spacer + logo bay */}
                      <div className="h-14 pr-28 sm:pr-32" />
                      <div className="absolute right-4 top-4 h-12 w-28 sm:w-32 flex items-center justify-center">
                        <Image
                          src={logoSrc}
                          alt={`${p.company} logo`}
                          width={112}
                          height={36}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>

                      {/* BODY */}
                      <div className="min-w-0 mt-0.5">
                        <p className="truncate text-xs sm:text-sm text-slate-500">{p.company}</p>
                        <h4 className="truncate text-[1.05rem] sm:text-lg font-extrabold text-slate-900">{p.name}</h4>
                      </div>

                      <div className="mt-2.5">
                        <span className={`rounded-md px-2 py-0.5 text-xs sm:text-sm font-semibold ${theme.bg} ${theme.text}`}>
                          {p.domain}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </section>
  );
}
