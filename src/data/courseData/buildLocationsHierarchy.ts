// src/lib/buildLocationsHierarchy.ts

import { CourseData } from "@/types/courseData";

// These types match the LocationsHierarchicalLocationsSection component
export type City = {
  name: string;
  lat: number;
  lng: number;
  courseType?: string;
  link?: string;
};

export type District = {
  district: string;
  description?: string;
  cities: City[];
};

export type StateT = {
  state: string;
  description?: string;
  districts: District[];
};

export type Country = {
  country: string;
  description?: string;
  states: StateT[];
};

/** Normalize keys to avoid casing mismatches */
const norm = (s: string) => s.trim().toLowerCase();

/** Map known states/emirates to their country. Add more as you expand. */
const COUNTRY_BY_STATE: Record<string, "India" | "UAE"> = {
  // --- INDIA ---
  [norm("Maharashtra")]: "India",
  [norm("Karnataka")]: "India",
  [norm("Tamil Nadu")]: "India",
  [norm("Telangana")]: "India",
  [norm("Delhi")]: "India",
  [norm("Gujarat")]: "India",
  [norm("West Bengal")]: "India",
  [norm("Rajasthan")]: "India",
  [norm("Uttar Pradesh")]: "India",
  [norm("Madhya Pradesh")]: "India",
  [norm("Punjab")]: "India",
  [norm("Haryana")]: "India",
  [norm("Kerala")]: "India",
  [norm("Andhra Pradesh")]: "India",
  [norm("Odisha")]: "India",
  [norm("Bihar")]: "India",
  [norm("Jharkhand")]: "India",
  [norm("Chhattisgarh")]: "India",
  [norm("Assam")]: "India",
  [norm("Goa")]: "India",
  // ...add remaining as needed

  // --- UAE (Emirates as "state") ---
  [norm("Dubai")]: "UAE",
  [norm("Abu Dhabi")]: "UAE",
  [norm("Sharjah")]: "UAE",
  [norm("Ajman")]: "UAE",
  [norm("Umm Al Quwain")]: "UAE",
  [norm("Ras Al Khaimah")]: "UAE",
  [norm("Fujairah")]: "UAE",
};

/** Build a link for a course/location chip. Customize if your routing differs. */
const makeCourseLink = (slug: string) => `/${slug}`;

/**
 * Convert CourseData[] -> Country[] (Country -> State -> District("Cities") -> City)
 * - `districts` are synthesized as a single group called "Cities"
 * - Each unique (state, location) becomes one City with a link
 */
export function buildLocationsHierarchy(courses: CourseData[]): Country[] {
  // country -> state -> set of city names (and remember one slug/course as link)
  const tree = new Map<string, Map<string, Map<string, string>>>();

  for (const c of courses) {
    const stateName = c.state?.trim();
    const cityName = c.location?.trim();

    if (!stateName || !cityName) continue;

    const country = COUNTRY_BY_STATE[norm(stateName)];
    if (!country) continue; // skip unknown states until mapped

    if (!tree.has(country)) tree.set(country, new Map());
    const byState = tree.get(country)!;

    if (!byState.has(stateName)) byState.set(stateName, new Map());
    const byCity = byState.get(stateName)!;

    // Keep first seen slug as the link target for that city
    if (!byCity.has(cityName)) byCity.set(cityName, c.slug);
  }

  // Convert to typed arrays
  const countries: Country[] = [];
  for (const [country, statesMap] of tree) {
    const states: StateT[] = [];

    for (const [state, citiesMap] of statesMap) {
      const cities: City[] = Array.from(citiesMap, ([cityName, slug]) => ({
        name: cityName,
        lat: 0, // not used in UI; keep types happy
        lng: 0,
        courseType: undefined, // you can derive from c.courseName or specializations if desired
        link: makeCourseLink(slug),
      })).sort((a, b) => a.name.localeCompare(b.name));

      const districts: District[] = [
        {
          district: "Cities",
          cities,
        },
      ];

      states.push({
        state,
        districts,
      });
    }

    // Sort states alphabetically (optional)
    states.sort((a, b) => a.state.localeCompare(b.state));

    countries.push({
      country,
      states,
    });
  }

  // Sort countries by name (India, UAE, etc.)
  countries.sort((a, b) => a.country.localeCompare(b.country));

  return countries;
}
