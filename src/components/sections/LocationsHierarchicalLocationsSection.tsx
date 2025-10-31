"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

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

type City = {
  name: string;
  lat: number;
  lng: number;
  courseType?: string;
  link?: string;
};

type District = {
  district: string;
  description?: string;
  cities: City[];
};

type State = {
  state: string;
  description?: string;
  districts: District[];
};

interface HierarchyProps {
  data: State[];
  sectionClassName?: string;
  containerClassName?: string;
}

function paletteIndex(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h % STATE_GRADIENTS.length;
}

export default function LocationsHierarchicalLocationsSection({
  data,
  sectionClassName = "",
  containerClassName = "",
}: HierarchyProps) {
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [expandedDistricts, setExpandedDistricts] = useState<Record<string, Set<string>>>({});

  const toggleState = (state: string) => {
    setExpandedStates((prev) => {
      const next = new Set(prev);
      if (next.has(state)) {
        next.delete(state);
        setExpandedDistricts((prevDistricts) => {
          const newState = { ...prevDistricts }; // Create a shallow copy
          delete newState[state]; // Delete the state from the copy
          return newState; // Return the new object without the state
        });
      } else {
        next.add(state);
      }
      return next;
    });
  };

  const toggleDistrict = (state: string, district: string) => {
    setExpandedDistricts((prev) => {
      const current = prev[state] ?? new Set();
      const nextForState = new Set(current);

      if (nextForState.has(district)) {
        nextForState.delete(district);
      } else {
        nextForState.add(district);
      }

      return { ...prev, [state]: nextForState };
    });
  };

  return (
    <section className={`w-full ${sectionClassName}`}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Browse Our Locations</h2>
            <p className="text-gray-600">
              States get bold, unique gradients. Districts use matching light, blended tones.
            </p>
          </div>

          <div className="grid gap-5">
            {data.map((stateObj: State) => {
              const totalCities = stateObj.districts.reduce((acc, d) => acc + d.cities.length, 0);

              const pIdx = paletteIndex(stateObj.state);
              const stateGradient = STATE_GRADIENTS[pIdx];
              const districtBg = DISTRICT_BG[pIdx];
              const districtBgHover = DISTRICT_BG_HOVER[pIdx];
              const districtBorder = DISTRICT_BORDER[pIdx];

              const isOpen = expandedStates.has(stateObj.state);

              return (
                <div
                  key={stateObj.state}
                  className="relative overflow-hidden rounded-2xl ring-1 ring-black/5"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stateGradient} opacity-10`}
                    aria-hidden="true"
                  />
                  <div className="relative rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                    <button
                      type="button"
                      onClick={() => toggleState(stateObj.state)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stateGradient} text-white shadow`}
                          aria-hidden="true"
                        >
                          {stateObj.state.charAt(0).toUpperCase()}
                        </span>
                        <div className="text-left">
                          <div className="text-base font-semibold text-gray-900">{stateObj.state}</div>
                          <div className="text-sm text-gray-600">{totalCities} Locations</div>
                        </div>
                      </div>
                      <span
                        className={`text-xl text-gray-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                        <div className="space-y-3">
                          {stateObj.districts.map((districtObj: District) => {
                            const districtOpen =
                              expandedDistricts[stateObj.state]?.has(districtObj.district) ?? false;

                            return (
                              <div
                                key={districtObj.district}
                                className={`rounded-xl ${districtBg} ${districtBorder} border pl-0`}
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleDistrict(stateObj.state, districtObj.district)}
                                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition ${districtBg} ${districtBgHover}`}
                                  aria-expanded={districtOpen}
                                >
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${stateGradient}`}
                                      aria-hidden="true"
                                    />
                                    <span className="font-medium text-gray-800">{districtObj.district}</span>
                                    <span className="text-gray-600">({districtObj.cities.length} Cities)</span>
                                  </div>
                                  <span
                                    className={`text-base text-gray-700 transition-transform ${districtOpen ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                  >
                                    {districtOpen ? <ChevronUp /> : <ChevronDown />}
                                  </span>
                                </button>

                                {districtOpen && (
                                  <div className="px-4 pb-4">
                                    <div className="flex flex-wrap gap-2">
                                      {districtObj.cities.map((city: City, i: number) => (
                                        <Link
                                          key={city.link ?? `${districtObj.district}-${city.name}-${i}`}
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
      </div>
    </section>
  );
}
