"use client";

import { useMemo } from "react";
import Image from "next/image";

/**
 * CDPL — Hiring Partners Ticker (Logos Only)
 * - Seamless marquee (no snap), alternating directions per row
 * - Legal-safe allow-list (renders only mapped logos)
 * - Per-logo scale tweaks to normalize visual size
 * - Logos only (no names), with a light black-ish border
 */

const COMPANIES: string[] = [
  "Tech Mahindra",
  "Accenture",
  "eClerx",
  "JM Financial",
  "Testriq",
  "i-XL Technologies",
  "Aryan Technologies",
  "Maxwell Energy Systems",
  "IDfy",
  "Vistaar",
  "Rendered Ideas",
  "Reeble",
  "Axiom Technologies",
  "Punon Technologies",
  "Raw Engineering",
  "Tech Cryptors",
  "Codex Lancers",
  "Alif Management Services",
];

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
  "alif management services": "alif_management_services.png",
};

/** Visual normalization; strong boosts for tiny-on-canvas logos. */
const LOGO_TWEAKS: Record<string, { scale?: number; translateY?: number }> = {
  // boosted (from your last pass)
  "tech mahindra": { scale: 5.8 },
  "accenture": { scale: 6.0 },
  "jm financial": { scale: 5.8 },
  "testriq": { scale: 5.6 },
  "eclerx": { scale: 5.6 },

  // baseline for others
  "i-xl technologies": { scale: 2.6 },
  "aryan technologies": { scale: 2.2 },
  "maxwell energy systems": { scale: 2.2 },
  "idfy": { scale: 2.2 },
  "vistaar": { scale: 2.4 },
  "rendered ideas": { scale: 2.6 },
  "reeble": { scale: 2.2 },
  "axiom technologies": { scale: 2.2 },
  "punon technologies": { scale: 2.2 },
  "raw engineering": { scale: 2.2 },
  "tech cryptors": { scale: 2.2 },
  "codex lancers": { scale: 2.2 },
  "alif management services": { scale: 2.2 },
};

type TickerRowProps = {
  items: string[];
  direction: "ltr" | "rtl"; // ltr = right→left, rtl = left→right
  speedSec?: number;
  startOffsetPct?: number;
};

function getLogoPath(name: string): string | undefined {
  const key = name.trim().toLowerCase();
  const file = COMPANY_LOGOS[key];
  return file ? `/placements/companies/${file}` : undefined;
}

function getTweaks(name: string) {
  return LOGO_TWEAKS[name.trim().toLowerCase()] ?? { scale: 1 };
}

function TickerRow({
  items,
  direction,
  speedSec = 26,
  startOffsetPct = 0,
}: TickerRowProps) {
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // Static start offset lives outside the animated layer.
  const wrapperStyle =
    direction === "ltr"
      ? ({ transform: `translate3d(${startOffsetPct}%,0,0)` } as React.CSSProperties)
      : ({ transform: `translate3d(-${startOffsetPct}%,0,0)` } as React.CSSProperties);

  return (
    <div className="group relative isolate overflow-hidden rounded-2xl bg-transparent">
      <div className="marquee-start" style={wrapperStyle}>
        <div
          className={`marquee-track ${
            direction === "ltr" ? "marquee-ltr" : "marquee-rtl"
          } flex gap-4 md:gap-3 sm:gap-2 py-3 md:py-2.5 sm:py-2 will-change-transform`}
          style={
            {
              // @ts-ignore
              "--dur": `${speedSec}s`,
            } as React.CSSProperties
          }
        >
          {loopItems.map((name, i) => {
            const logoSrc = getLogoPath(name);
            if (!logoSrc) return null;

            const { scale = 1, translateY = 0 } = getTweaks(name);

            return (
              <div
                key={`${name}-${i}`}
                className={`
                  shrink-0
                  w-[220px] md:w-[180px] sm:w-[150px] max-[425px]:w-[140px]
                  rounded-2xl border border-black/10 bg-white
                  shadow-sm transition-shadow hover:shadow-md
                `}
                title={name}
              >
                {/* Keep the logo size as-is from previous version */}
                <div
                  className={`
                    mx-auto overflow-hidden rounded-xl
                    flex items-center justify-center
                    h-20 w-60
                    md:h-16 md:w-56
                    sm:h-14 sm:w-52
                    max-[425px]:h-12 max-[425px]:w-48
                  `}
                >
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                      transformOrigin: "center",
                    }}
                  >
                    <Image
                      src={logoSrc}
                      alt={`${name} logo`}
                      width={400}
                      height={150}
                      className="max-h-full max-w-full object-contain"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .group:hover .marquee-track,
        .group .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track {
          animation-duration: var(--dur, 26s);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(0, 0, 0);
        }
        .marquee-ltr {
          animation-name: cdpl-marquee-ltr;
        }
        .marquee-rtl {
          animation-name: cdpl-marquee-rtl;
        }
      `}</style>
    </div>
  );
}

type Props = { contained?: boolean };

export default function PlacementsCompanyWallSection({ contained = false }: Props) {
  // Strict allow-list (renders only those with mapped logo files)
  const SAFE_COMPANIES = useMemo(
    () => COMPANIES.filter((c) => !!getLogoPath(c)),
    []
  );

  const rows = useMemo(() => {
    const r1: string[] = [];
    const r2: string[] = [];
    const r3: string[] = [];
    SAFE_COMPANIES.forEach((c, i) => {
      if (i % 3 === 0) r1.push(c);
      else if (i % 3 === 1) r2.push(c);
      else r3.push(c);
    });
    return [r1, r2, r3];
  }, [SAFE_COMPANIES]);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    contained ? (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <section className="w-full py-10 sm:py-12" aria-label="CDPL hiring partners">
      <Wrapper>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Hiring Partners</h3>
          <div
            aria-hidden
            className="hidden sm:block h-[3px] w-40 rounded-full"
            style={{ background: "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)" }}
          />
        </div>

        <div className="mt-5 space-y-4">
          {/* Row 1: right → left */}
          <TickerRow items={rows[0]} direction="ltr" speedSec={28} startOffsetPct={0} />
          {/* Row 2: left → right */}
          <TickerRow items={rows[1]} direction="rtl" speedSec={26} startOffsetPct={12} />
          {/* Row 3: right → left */}
          <TickerRow items={rows[2]} direction="ltr" speedSec={30} startOffsetPct={24} />
        </div>
      </Wrapper>

      <style jsx global>{`
        @keyframes cdpl-marquee-ltr {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes cdpl-marquee-rtl {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
