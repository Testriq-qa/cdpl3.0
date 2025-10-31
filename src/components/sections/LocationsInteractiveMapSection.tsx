"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const LocationsLeafletMapInnerSection = dynamic(
  () => import("./LocationsLeafletMapInnerSection"),
  { ssr: false }
);

export type FlatLocation = {
  name: string;
  lat: number;
  lng: number;
  type?: string;
  link?: string;
};

export default function LocationsInteractiveMapSection({
  locations,
  variant = "default",
  className = "",
  height = 420,
  constrained = true,
}: {
  locations: FlatLocation[];
  variant?: "default" | "bare";
  className?: string;
  height?: number;
  constrained?: boolean;
}) {
  const indiaCenter = useMemo<[number, number]>(() => [22.9734, 78.6569], []);

  const indiaBounds = useMemo<[[number, number], [number, number]]>(
    () => [
      [6.0, 66.0],   // SW
      [38.0, 100.0], // NE
    ],
    []
  );

  const mapShellClasses =
    variant === "bare"
      ? `w-full ${className}`
      : `w-full rounded-2xl bg-white/90 ring-1 ring-slate-200 shadow-sm ${className}`;

  const Top = constrained
    ? ({ children }: { children: React.ReactNode }) => (
      <section className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</div>
      </section>
    )
    : ({ children }: { children: React.ReactNode }) => <div className="w-full">{children}</div>;

  return (
    <Top>
      <div className="relative z-20" style={{ height }}>
        <LocationsLeafletMapInnerSection
          locations={locations}
          center={indiaCenter}
          bounds={indiaBounds}
          height={height}
          className={mapShellClasses}
          minZoom={4}
          maxZoom={12}
        />
      </div>
    </Top>
  );
}
