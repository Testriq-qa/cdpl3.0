"use client";

import { useState } from "react";
import Link from "next/link";
import { statesData as StatesDataType } from "@/data/cities/citiesData";

interface HierarchyProps {
  data: typeof StatesDataType;
  /** Optional: extra classes for the outer section (kept full-width) */
  sectionClassName?: string;
  /** Optional: extra classes appended to the default constrained container */
  containerClassName?: string;
}

export default function LocationsHierarchicalLocationsSection({
  data,
  sectionClassName = "",
  containerClassName = "",
}: HierarchyProps) {
  const [expandedStates, setExpandedStates] = useState<Set<string>>(new Set());
  const [expandedDistricts, setExpandedDistricts] = useState<Record<string, Set<string>>>({});

  const toggleState = (state: string) => {
    const next = new Set(expandedStates);
    if (next.has(state)) {
      next.delete(state);
    } else {
      next.add(state);
    }
    setExpandedStates(next);
    setExpandedDistricts({}); // collapse districts when switching states
  };

  const toggleDistrict = (state: string, district: string) => {
    const current = expandedDistricts[state] || new Set<string>();
    const nextForState = new Set(current);
    if (nextForState.has(district)) {
      nextForState.delete(district);
    } else {
      nextForState.add(district);
    }
    setExpandedDistricts({ ...expandedDistricts, [state]: nextForState });
  };

  return (
    // Full-width section
    <section className={`w-full ${sectionClassName}`}>
      {/* Constrained container WITH padding as requested */}
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">Browse Our Locations</h2>

          <div className="grid gap-4">
            {data.map((stateObj) => {
              const totalCities = stateObj.districts.reduce((acc, d) => acc + d.cities.length, 0);

              return (
                <div key={stateObj.state} className="rounded-xl border border-gray-200 bg-white p-4">
                  <button
                    type="button"
                    onClick={() => toggleState(stateObj.state)}
                    className="flex w-full items-center justify-between rounded p-2 text-left hover:bg-gray-50"
                    aria-expanded={expandedStates.has(stateObj.state)}
                  >
                    <span className="font-semibold text-gray-900">
                      {stateObj.state} ({totalCities} Locations)
                    </span>
                    <span
                      className={`transition-transform ${expandedStates.has(stateObj.state) ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>

                  {expandedStates.has(stateObj.state) && (
                    <div className="mt-2 space-y-2">
                      {stateObj.districts.map((districtObj) => {
                        const isOpen =
                          expandedDistricts[stateObj.state]?.has(districtObj.district) || false;

                        return (
                          <div
                            key={districtObj.district}
                            className="ml-4 border-l-2 border-blue-200 pl-4"
                          >
                            <button
                              type="button"
                              onClick={() => toggleDistrict(stateObj.state, districtObj.district)}
                              className="flex w-full items-center justify-between rounded p-2 text-left hover:bg-gray-50"
                              aria-expanded={isOpen}
                            >
                              <span className="font-medium text-gray-800">
                                {districtObj.district} ({districtObj.cities.length} Cities)
                              </span>
                              <span
                                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                aria-hidden="true"
                              >
                                ▼
                              </span>
                            </button>

                            {isOpen && (
                              <div className="mt-2 space-y-1">
                                {districtObj.cities.map((city) => (
                                  <Link
                                    // key={city.name}
                                    key={city.link}
                                    href={city.link || "#"}
                                    className="ml-4 block rounded p-2 text-blue-600 hover:bg-blue-50 hover:text-blue-800"
                                  >
                                    {city.name} – {city.courseType?.replace("-", " & ")} Courses
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
