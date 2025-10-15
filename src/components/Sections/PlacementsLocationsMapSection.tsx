"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";

/* ========= Types & Data ========= */

type City = {
    name: string;
    lat: number;
    lng: number;
    count: number;
    avgLpa: number;
    maxLpa: number;
    domains: string[];
};

const CITY_DATA: City[] = [
    { name: "Bengaluru", lat: 12.9716, lng: 77.5946, count: 42, avgLpa: 7.2, maxLpa: 17, domains: ["QA", "SDET", "Data"] },
    { name: "Hyderabad", lat: 17.385, lng: 78.4867, count: 31, avgLpa: 6.8, maxLpa: 15, domains: ["QA", "Full-Stack"] },
    { name: "Pune", lat: 18.5204, lng: 73.8567, count: 28, avgLpa: 6.4, maxLpa: 13, domains: ["SDET", "Data"] },
    { name: "Mumbai", lat: 19.076, lng: 72.8777, count: 36, avgLpa: 7.0, maxLpa: 16, domains: ["QA", "Full-Stack"] },
    { name: "Gurgaon", lat: 28.4595, lng: 77.0266, count: 22, avgLpa: 6.5, maxLpa: 12, domains: ["QA", "Data"] },
    { name: "Noida", lat: 28.5355, lng: 77.391, count: 19, avgLpa: 6.1, maxLpa: 10, domains: ["QA"] },
    { name: "Chennai", lat: 13.0827, lng: 80.2707, count: 27, avgLpa: 6.3, maxLpa: 11, domains: ["SDET", "Full-Stack"] },
];

const CHIP_CITIES = ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Gurgaon", "Chennai", "Noida"];

/* ========= Component ========= */

export default function PlacementsLocationsMapSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);
    const baseRef = useRef<any>(null);
    const providersRef = useRef<number>(0);
    const layersRef = useRef<Record<string, any>>({});
    const resizeObsRef = useRef<ResizeObserver | null>(null);

    const [active, setActive] = useState<string | null>(null);
    const [tileMsg, setTileMsg] = useState<string>("");

    const stats = useMemo(() => {
        const total = CITY_DATA.reduce((s, c) => s + c.count, 0);
        const topCity = CITY_DATA.slice().sort((a, b) => b.count - a.count)[0];
        const avg = Math.round((CITY_DATA.reduce((s, c) => s + c.avgLpa * c.count, 0) / Math.max(1, total)) * 10) / 10;
        return { total, topCity, avg };
    }, []);

    /* ===== Helpers ===== */

    const radiusFor = (count: number) => {
        const cmin = 15, cmax = 55;
        const t = (Math.min(cmax, Math.max(cmin, count)) - cmin) / (cmax - cmin);
        return 600 + t * 1200; // meters
    };

    const tileProviders = [
        {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: ["a", "b", "c"],
        },
        {
            url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: ["a", "b", "c", "d"],
        },
        {
            url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: ["a", "b", "c", "d"],
        },
    ];

    /* ===== Effect: load Leaflet + init map with provider fallback ===== */

    useEffect(() => {
        let cancelled = false;

        const addOnce = (node: HTMLLinkElement | HTMLScriptElement, key: string) => {
            node.setAttribute("data-leaflet-key", key);
            if (!document.querySelector(`[data-leaflet-key="${key}"]`)) {
                (node.tagName === "LINK" ? document.head : document.body).appendChild(node);
            }
        };

        const loadLeaflet = async () => {
            if (!document.querySelector('[data-leaflet-key="leaflet-css"]')) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
                addOnce(link, "leaflet-css");
            }
            const ensureScript = (src: string, key: string) =>
                new Promise<void>((resolve, reject) => {
                    if ((window as any).L) return resolve();
                    if (document.querySelector(`[data-leaflet-key="${key}"]`)) {
                        const check = () => ((window as any).L ? resolve() : setTimeout(check, 50));
                        return check();
                    }
                    const script = document.createElement("script");
                    script.src = src;
                    script.async = true;
                    addOnce(script, key);
                    script.onload = () => resolve();
                    script.onerror = () => reject(new Error(`Failed to load ${src}`));
                });

            try {
                await ensureScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", "leaflet-js-unpkg");
            } catch {
                await ensureScript("https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js", "leaflet-js-jsdelivr");
            }
        };

        const wireBaseLayer = (L: any, map: any) => {
            // remove previous base layer
            if (baseRef.current) {
                baseRef.current.remove();
                baseRef.current = null;
            }
            const idx = providersRef.current % tileProviders.length;
            const p = tileProviders[idx];

            const layer = L.tileLayer(p.url, {
                maxZoom: 19,
                subdomains: p.subdomains as any,
                attribution: p.attribution,
                crossOrigin: true,
            });

            let loaded = false;
            const onLoad = () => {
                loaded = true;
                setTileMsg("");
                layer.off("load", onLoad);
                layer.off("tileerror", onError);
            };
            const onError = () => {
                if (loaded) return;
                // fallback to next provider
                providersRef.current += 1;
                setTileMsg("Switching tile provider...");
                setTimeout(() => {
                    wireBaseLayer(L, map);
                }, 50);
            };

            layer.on("load", onLoad);
            layer.on("tileerror", onError);
            layer.addTo(map);
            baseRef.current = layer;

            // safety timeout in case no events fire
            setTimeout(() => {
                if (!loaded) onError();
            }, 1500);
        };

        const init = async () => {
            if (!containerRef.current) return;
            try {
                await loadLeaflet();
            } catch (err: any) {
                setTileMsg(err?.message || "Leaflet failed to load.");
                return;
            }
            if (cancelled) return;

            const L = (window as any).L;
            if (!L) {
                setTileMsg("Leaflet not available on window.");
                return;
            }

            // destroy previous map (Fast Refresh/StrictMode)
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }

            // create map
            mapRef.current = L.map(containerRef.current!, {
                zoomControl: false,
                scrollWheelZoom: true,
            });
            L.control.zoom({ position: "bottomright" }).addTo(mapRef.current);

            // base layer with fallback chain
            wireBaseLayer(L, mapRef.current);

            // markers
            Object.values(layersRef.current).forEach((layer: any) => layer.remove());
            layersRef.current = {};
            const group = L.featureGroup();

            CITY_DATA.forEach((c) => {
                const circle = L.circle([c.lat, c.lng], {
                    radius: radiusFor(c.count),
                    color: "#7ee7ff",
                    weight: 1.2,
                    opacity: 0.85,
                    fillColor: "#9d7bff",
                    fillOpacity: 0.25,
                    className: "cdpl-pulse-circle",
                });
                const innerDot = L.circleMarker([c.lat, c.lng], {
                    radius: 6,
                    color: "#ffffff",
                    weight: 2,
                    fillColor: "#7ee7ff",
                    fillOpacity: 1,
                });

                const popupHTML = `
          <div style="font-size:12px; line-height:1.35">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:9999px;background:#e6faff;border:1px solid #bdefff;">📍</span>
              <strong>${c.name}</strong>
              <span style="margin-left:6px;padding:2px 6px;border-radius:6px;background:#f1fafe;color:#0284c7;border:1px solid #bae6fd;">${c.count} placements</span>
            </div>
            <div style="color:#475569;margin-bottom:4px">Avg: <b style="color:#0f172a">${c.avgLpa} LPA</b> • Max: <b style="color:#0f172a">${c.maxLpa} LPA</b></div>
            <div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px;">
              ${c.domains.map((d) => `<span style="font-size:10px;padding:2px 6px;border-radius:6px;border:1px solid #e5e7eb;background:#fff;color:#374151">${d}</span>`).join("")}
            </div>
          </div>
        `;

                circle.bindPopup(popupHTML, { closeButton: false, offset: [0, -6] });
                innerDot.bindPopup(popupHTML, { closeButton: false, offset: [0, -6] });

                const layerGroup = L.layerGroup([circle, innerDot]).addTo(mapRef.current);
                layerGroup.on("mouseover", () => (circle as any).setStyle({ fillOpacity: 0.35, weight: 1.8 }));
                layerGroup.on("mouseout", () => (circle as any).setStyle({ fillOpacity: 0.25, weight: 1.2 }));
                layerGroup.on("click", () => {
                    setActive(c.name);
                    innerDot.openPopup();
                });

                layersRef.current[c.name] = { circle, innerDot, layerGroup };
                group.addLayer(layerGroup);
            });

            const bounds = group.getBounds();
            if (bounds.isValid()) mapRef.current.fitBounds(bounds.pad(0.2));

            // pulse animation
            const styleId = "cdpl-map-pulse-style";
            if (!document.getElementById(styleId)) {
                const style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
          .cdpl-pulse-circle { animation: cdplPulse 2.2s ease-in-out infinite; }
          @keyframes cdplPulse { 0% {opacity:.22} 50% {opacity:.38} 100% {opacity:.22} }
          .leaflet-container { background: #f7f7f7; } /* avoids full grey */
        `;
                document.head.appendChild(style);
            }

            setTimeout(() => mapRef.current?.invalidateSize(), 60);

            if (!resizeObsRef.current && "ResizeObserver" in window) {
                resizeObsRef.current = new ResizeObserver(() => mapRef.current?.invalidateSize());
            }
            resizeObsRef.current?.observe(containerRef.current!);
        };

        init();

        return () => {
            cancelled = true;
            try {
                resizeObsRef.current?.disconnect();
            } catch { }
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    const focusCity = (name: string) => {
        setActive(name);
        const L = (window as any).L;
        const map = mapRef.current;
        const layer = layersRef.current[name];
        if (!L || !map || !layer) return;
        const { innerDot, circle } = layer;
        map.setView(innerDot.getLatLng(), Math.max(10, map.getZoom()));
        innerDot.openPopup();
        (circle as any).setStyle({ fillOpacity: 0.35, weight: 1.8 });
        setTimeout(() => (circle as any).setStyle({ fillOpacity: 0.25, weight: 1.2 }), 900);
    };

    return (
        <section className="py-10 sm:py-12">
            <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">Placements by Location</h3>
                <div className="hidden sm:flex items-center gap-3 text-xs text-gray-600">
                    <Pill label="Total" value={String(stats.total)} />
                    <Pill label="Avg LPA" value={`${stats.avg} LPA`} />
                    <Pill label="Top City" value={stats.topCity.name} />
                </div>
            </div>

            {/* Chips */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {CHIP_CITIES.map((c) => (
                    <button
                        key={c}
                        onClick={() => focusCity(c)}
                        onMouseEnter={() => setActive(c)}
                        onMouseLeave={() => setActive((v) => (v === c ? null : v))}
                        className={`rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md px-3 py-2 text-center text-sm transition hover:shadow-sm ${active === c ? "shadow-sm ring-1 ring-[#7ee7ff]/50" : ""
                            }`}
                    >
                        <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-[#7ee7ff]" />
                            <span className="truncate">{c}</span>
                        </span>
                    </button>
                ))}
            </div>

            {/* Map wrapper (no heavy overlays on the actual map div) */}
            <div className="mt-6 rounded-2xl border border-gray-100/70 dark:border-white/10 overflow-hidden">
                <div
                    ref={containerRef}
                    className="w-full h-[420px] sm:h-[500px] lg:h-[560px]"
                    aria-label="Placements map"
                />
                {tileMsg && (
                    <div className="px-4 py-2 text-xs text-amber-700 bg-amber-50 border-t border-amber-100">
                        {tileMsg} — if it persists, your CSP or network may block map tiles. Allow one of:
                        <code className="ml-1"> *.tile.openstreetmap.org </code> or
                        <code className="ml-1"> *.basemaps.cartocdn.com </code> in <code>img-src</code>.
                    </div>
                )}
                <div className="flex flex-wrap items-center gap-3 px-4 py-3">
                    <LegendDot label="More placements" gradient />
                    <LegendDot label="Fewer placements" />
                    <span className="ml-auto text-xs text-gray-500">
                        Click a city chip or marker to view Avg/Max LPA & domains
                    </span>
                </div>
            </div>
        </section>
    );
}

/* ===== Small UI bits ===== */

function Pill({ label, value }: { label: string; value: string }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold">{value}</span>
        </span>
    );
}

function LegendDot({ label, gradient = false }: { label: string; gradient?: boolean }) {
    return (
        <span className="inline-flex items-center gap-2 text-xs text-gray-600">
            <span
                className={`inline-block h-3 w-3 rounded-full ${gradient ? "bg-gradient-to-br from-[#7ee7ff] to-[#9d7bff]" : "bg-[#cfe8ff]"
                    }`}
            />
            {label}
        </span>
    );
}
