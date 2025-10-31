"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type { LatLngExpression, LatLngBoundsLiteral } from "leaflet";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";

/** ── Marker icon fix for Next/ESM (handles StaticImageData | string) ───────── */
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

type MaybeImage = string | { src: string };
const toUrl = (u: MaybeImage): string => (typeof u === "string" ? u : u.src);

// Extract string URLs (works for string or StaticImageData-like objects)
const iconRetina = toUrl(iconRetinaUrl as unknown as MaybeImage);
const icon = toUrl(iconUrl as unknown as MaybeImage);
const shadow = toUrl(shadowUrl as unknown as MaybeImage);

// Build a default icon with explicit sizes/anchors
const DefaultIcon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: icon,
    shadowUrl: shadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

// Apply globally to all markers
L.Marker.prototype.options.icon = DefaultIcon;
/* ──────────────────────────────────────────────────────────────────────────── */

export type FlatLocation = {
    name: string;
    lat: number;
    lng: number;
    type?: string;
    link?: string;
};

/** Re-fit/lock to India and keep the view clamped */
function EnforceIndia({
    bounds,
    minZoom,
}: {
    bounds: L.LatLngBounds | LatLngBoundsLiteral;
    minZoom: number;
}) {
    const map = useMap();

    useEffect(() => {
        const lb = bounds instanceof L.LatLngBounds ? bounds : L.latLngBounds(bounds);

        map.setMaxBounds(lb);
        map.options.minZoom = minZoom;

        // First fit; cap zoom so it doesn't zoom too far out
        map.fitBounds(lb, { padding: [20, 20], maxZoom: Math.max(minZoom + 1, 5) });

        const clamp = () => {
            const within = lb.contains(map.getCenter());
            const tooFarOut = map.getZoom() < minZoom;
            if (!within || tooFarOut) {
                map.flyToBounds(lb, {
                    duration: 0.35,
                    maxZoom: Math.max(minZoom + 1, 5),
                });
            }
        };

        map.on("dragend", clamp);
        map.on("moveend", clamp);
        map.on("zoomend", clamp);
        return () => {
            map.off("dragend", clamp);
            map.off("moveend", clamp);
            map.off("zoomend", clamp);
        };
    }, [map, bounds, minZoom]);

    return null;
}

/** Invalidate size after mount & whenever the container is resized */
function InvalidateOnResize() {
    const map = useMap();

    useEffect(() => {
        const once = () => map.invalidateSize({ animate: false });
        // run a few times to catch CSS transitions/transforms
        once();
        const t1 = setTimeout(once, 50);
        const t2 = setTimeout(once, 200);
        const t3 = setTimeout(once, 500);

        const ro = new ResizeObserver(() => map.invalidateSize({ animate: false }));
        ro.observe(map.getContainer());

        const onVisibility = () => map.invalidateSize({ animate: false });
        window.addEventListener("orientationchange", onVisibility);
        window.addEventListener("resize", onVisibility);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            ro.disconnect();
            window.removeEventListener("orientationchange", onVisibility);
            window.removeEventListener("resize", onVisibility);
        };
    }, [map]);

    return null;
}

export default function LocationsLeafletMapInnerSection({
    locations,
    center,
    bounds,
    height = 420,
    minZoom = 4,
    maxZoom = 12,
    className = "",
}: {
    locations: FlatLocation[];
    center: LatLngExpression;
    bounds: L.LatLngBounds | LatLngBoundsLiteral; // e.g., [[6,66],[38,100]]
    height?: number;
    minZoom?: number;
    maxZoom?: number;
    className?: string;
}) {
    // Build a concrete LatLngBounds once and reuse it (avoids TS mismatch)
    const lb = useMemo(
        () => (bounds instanceof L.LatLngBounds ? bounds : L.latLngBounds(bounds)),
        [bounds]
    );

    return (
        <div className={className} style={{ height }}>
            <MapContainer
                center={center}
                zoom={Math.max(minZoom + 1, 5)}
                minZoom={minZoom}
                maxZoom={maxZoom}
                scrollWheelZoom
                style={{ height: "100%", width: "100%" }}
                className="rounded-2xl"
                maxBounds={lb}
                maxBoundsViscosity={1.0}
                worldCopyJump={false}
                zoomControl={true}
            >
                <InvalidateOnResize />
                <EnforceIndia bounds={lb} minZoom={minZoom} />

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap={true}
                    updateWhenIdle={true}
                />

                {locations.map((loc, i) => (
                    <Marker key={`${loc.name}-${i}`} position={[loc.lat, loc.lng]}>
                        <Popup>
                            <div className="text-sm">
                                <div className="font-medium text-slate-900">{loc.name}</div>
                                {loc.type && <div className="text-slate-600">{loc.type}</div>}
                                {loc.link && (
                                    <a className="text-indigo-600 underline" href={loc.link}>
                                        View details
                                    </a>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
