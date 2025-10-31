"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

/** Palettes */
const STATE_GRADIENTS = [
  "from-indigo-500 to-sky-500",
  "from-rose-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-fuchsia-500 to-purple-500",
  "from-amber-500 to-pink-500",
  "from-blue-600 to-cyan-500",
] as const;

const DISTRICT_BG = [
  "bg-indigo-50",
  "bg-rose-50",
  "bg-emerald-50",
  "bg-fuchsia-50",
  "bg-amber-50",
  "bg-blue-50",
] as const;

const DISTRICT_BG_HOVER = [
  "hover:bg-indigo-100",
  "hover:bg-rose-100",
  "hover:bg-emerald-100",
  "hover:bg-fuchsia-100",
  "hover:bg-amber-100",
  "hover:bg-blue-100",
] as const;

const DISTRICT_BORDER = [
  "border-indigo-200",
  "border-rose-200",
  "border-emerald-200",
  "border-fuchsia-200",
  "border-amber-200",
  "border-blue-200",
] as const;

/* ---------- Types ---------- */
type City = {
  name: string;
  lat: number;
  lng: number;
  courseType?: string;
  link?: string;
};

type District = {
  district: string; // sub-category
  description?: string;
  cities: City[]; // sub sub-category
};

type StateT = {
  state: string;
  description?: string;
  districts: District[];
};

type Country = {
  country: string;
  description?: string;
  states: StateT[];
};

/** Legacy type (your previous top-level) */
type LegacyState = StateT;

type HierarchyData = Country[] | LegacyState[];

interface HierarchyProps {
  /** Accepts either the new Country[] or old State[] */
  data: HierarchyData;
  /** Used only when `data` is Legacy State[]; wraps into a single country with this label */
  defaultCountryLabel?: string; // e.g., "India"
  sectionClassName?: string;
  containerClassName?: string;
}

/* ---------- Utils ---------- */
function paletteIndex(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % STATE_GRADIENTS.length;
}

/** Narrow to a plain object (no arrays/functions) */
function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

function isCountryArray(arr: unknown[]): arr is Country[] {
  return arr.every((x): x is Country => {
    if (!isRecord(x)) return false;
    const hasCountry = "country" in x && typeof (x as { country?: unknown }).country === "string";
    const maybeStates = (x as { states?: unknown }).states;
    return hasCountry && Array.isArray(maybeStates);
  });
}

function isLegacyStateArray(arr: unknown[]): arr is LegacyState[] {
  return arr.every((x): x is LegacyState => {
    if (!isRecord(x)) return false;
    const hasState = "state" in x && typeof (x as { state?: unknown }).state === "string";
    const maybeDistricts = (x as { districts?: unknown }).districts;
    return hasState && Array.isArray(maybeDistricts);
  });
}

/** Normalize both shapes to Country[] so the renderer is simple */
function normalizeToCountries(
  data: HierarchyData,
  fallbackCountryLabel: string
): Country[] {
  if (Array.isArray(data)) {
    if (isCountryArray(data)) return data;
    if (isLegacyStateArray(data)) {
      return [
        {
          country: fallbackCountryLabel,
          states: data,
        },
      ];
    }
  }
  return [];
}

/* ---------- Component ---------- */
export default function LocationsHierarchicalLocationsSection({
  data,
  defaultCountryLabel = "India",
  sectionClassName = "",
  containerClassName = "",
}: HierarchyProps) {
  const countries = normalizeToCountries(data, defaultCountryLabel);

  // Expanded sets for each level
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set());
  // Map country -> Set of expanded states
  const [expandedStates, setExpandedStates] = useState<Record<string, Set<string>>>({});
  // Map country -> state -> Set of expanded districts
  const [expandedDistricts, setExpandedDistricts] = useState<
    Record<string, Record<string, Set<string>>>
  >({});

  /* ---------- Toggles ---------- */
  const toggleCountry = (country: string) => {
    setExpandedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(country)) {
        next.delete(country);
        setExpandedStates((prevStates) => {
          const copy = { ...prevStates };
          delete copy[country];
          return copy;
        });
        setExpandedDistricts((prevDistricts) => {
          const copy = { ...prevDistricts };
          delete copy[country];
          return copy;
        });
      } else {
        next.add(country);
      }
      return next;
    });
  };

  const toggleState = (country: string, state: string) => {
    setExpandedStates((prev) => {
      const currentSet = prev[country] ?? new Set<string>();
      const nextSet = new Set(currentSet);
      if (nextSet.has(state)) {
        nextSet.delete(state);
        setExpandedDistricts((prevDists) => {
          const copy = { ...prevDists };
          if (copy[country]) {
            const inner = { ...copy[country] };
            delete inner[state];
            copy[country] = inner;
          }
          return copy;
        });
      } else {
        nextSet.add(state);
      }
      return { ...prev, [country]: nextSet };
    });
  };

  const toggleDistrict = (country: string, state: string, district: string) => {
    setExpandedDistricts((prev) => {
      const byCountry = prev[country] ?? {};
      const setForState = byCountry[state] ?? new Set<string>();
      const nextForState = new Set(setForState);

      if (nextForState.has(district)) nextForState.delete(district);
      else nextForState.add(district);

      return {
        ...prev,
        [country]: {
          ...byCountry,
          [state]: nextForState,
        },
      };
    });
  };

  /* ---------- Render ---------- */
  return (
    <section className={`w-full ${sectionClassName}`}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Browse Our Locations</h2>
            <p className="text-gray-600">
              Explore our global network—jump from{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                Country → State → City
              </span>{" "}
              and find the perfect classroom near you.
            </p>
          </div>

          <div className="grid gap-5">
            {countries.map((countryObj) => {
              const totalStates = countryObj.states.length;
              const totalCities = countryObj.states.reduce(
                (acc, s) => acc + s.districts.reduce((a, d) => a + d.cities.length, 0),
                0
              );

              const countryIdx = paletteIndex(countryObj.country);
              const countryGradient = STATE_GRADIENTS[countryIdx];

              const countryOpen = expandedCountries.has(countryObj.country);

              return (
                <div
                  key={countryObj.country}
                  className="relative overflow-hidden rounded-2xl ring-1 ring-black/5"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${countryGradient} opacity-10`}
                    aria-hidden="true"
                  />
                  <div className="relative rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                    {/* Country header */}
                    <button
                      type="button"
                      onClick={() => toggleCountry(countryObj.country)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5"
                      aria-expanded={countryOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${countryGradient} text-white shadow`}
                          aria-hidden="true"
                        >
                          {countryObj.country.charAt(0).toUpperCase()}
                        </span>
                        <div className="text-left">
                          <div className="text-base font-semibold text-gray-900">
                            {countryObj.country}
                          </div>
                          <div className="text-sm text-gray-600">
                            {totalStates} {totalStates === 1 ? "State" : "States"} • {totalCities}{" "}
                            {totalCities === 1 ? "Location" : "Locations"}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-xl text-gray-700 transition-transform ${countryOpen ? "rotate-180" : ""
                          }`}
                        aria-hidden="true"
                      >
                        {countryOpen ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </button>

                    {/* States within country */}
                    {countryOpen && (
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                        <div className="space-y-4">
                          {countryObj.states.map((stateObj) => {
                            const stateOpen =
                              expandedStates[countryObj.country]?.has(stateObj.state) ?? false;

                            const sIdx = paletteIndex(`${countryObj.country}::${stateObj.state}`);
                            const stateGradient = STATE_GRADIENTS[sIdx];
                            const districtBg = DISTRICT_BG[sIdx];
                            const districtBgHover = DISTRICT_BG_HOVER[sIdx];
                            const districtBorder = DISTRICT_BORDER[sIdx];

                            const totalCitiesInState = stateObj.districts.reduce(
                              (acc, d) => acc + d.cities.length,
                              0
                            );

                            return (
                              <div
                                key={`${countryObj.country}-${stateObj.state}`}
                                className="relative overflow-hidden rounded-2xl ring-1 ring-black/5"
                              >
                                <div
                                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stateGradient} opacity-10`}
                                  aria-hidden="true"
                                />
                                <div className="relative rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                                  {/* State header */}
                                  <button
                                    type="button"
                                    onClick={() => toggleState(countryObj.country, stateObj.state)}
                                    className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5"
                                    aria-expanded={stateOpen}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span
                                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stateGradient} text-white shadow`}
                                        aria-hidden="true"
                                      >
                                        {stateObj.state.charAt(0).toUpperCase()}
                                      </span>
                                      <div className="text-left">
                                        <div className="text-base font-semibold text-gray-900">
                                          {stateObj.state}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                          {stateObj.districts.length}{" "}
                                          {stateObj.districts.length === 1 ? "District" : "Districts"} •{" "}
                                          {totalCitiesInState}{" "}
                                          {totalCitiesInState === 1 ? "Location" : "Locations"}
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      className={`text-xl text-gray-700 transition-transform ${stateOpen ? "rotate-180" : ""
                                        }`}
                                      aria-hidden="true"
                                    >
                                      {stateOpen ? <ChevronUp /> : <ChevronDown />}
                                    </span>
                                  </button>

                                  {/* Districts within state */}
                                  {stateOpen && (
                                    <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                                      <div className="space-y-3">
                                        {stateObj.districts.map((districtObj) => {
                                          const districtOpen =
                                            expandedDistricts[countryObj.country]?.[stateObj.state]?.has(
                                              districtObj.district
                                            ) ?? false;

                                          return (
                                            <div
                                              key={`${countryObj.country}-${stateObj.state}-${districtObj.district}`}
                                              className={`rounded-xl ${districtBg} ${districtBorder} border pl-0`}
                                            >
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  toggleDistrict(
                                                    countryObj.country,
                                                    stateObj.state,
                                                    districtObj.district
                                                  )
                                                }
                                                className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition ${districtBg} ${districtBgHover}`}
                                                aria-expanded={districtOpen}
                                              >
                                                <div className="flex items-center gap-2">
                                                  <span
                                                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${stateGradient}`}
                                                    aria-hidden="true"
                                                  />
                                                  <span className="font-medium text-gray-800">
                                                    {districtObj.district}
                                                  </span>
                                                  <span className="text-gray-600">
                                                    ({districtObj.cities.length}{" "}
                                                    {districtObj.cities.length === 1 ? "City" : "Cities"})
                                                  </span>
                                                </div>
                                                <span
                                                  className={`text-base text-gray-700 transition-transform ${districtOpen ? "rotate-180" : ""
                                                    }`}
                                                  aria-hidden="true"
                                                >
                                                  {districtOpen ? <ChevronUp /> : <ChevronDown />}
                                                </span>
                                              </button>

                                              {/* Cities within district */}
                                              {districtOpen && (
                                                <div className="px-4 pb-4">
                                                  <div className="flex flex-wrap gap-2">
                                                    {districtObj.cities.map((city, i) => (
                                                      <Link
                                                        key={
                                                          city.link ??
                                                          `${countryObj.country}-${stateObj.state}-${districtObj.district}-${city.name}-${i}`
                                                        }
                                                        href={city.link || "#"}
                                                        className={`group inline-flex items-center gap-2 rounded-lg border ${districtBorder} bg-white/70 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white`}
                                                      >
                                                        <span
                                                          className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${stateGradient}`}
                                                          aria-hidden="true"
                                                        />
                                                        <span>{city.name}</span>
                                                        {city.courseType && (
                                                          <span className="text-slate-500 group-hover:text-slate-700">
                                                            – {city.courseType.replace("-", " & ")} Courses
                                                          </span>
                                                        )}
                                                      </Link>
                                                    ))}
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
