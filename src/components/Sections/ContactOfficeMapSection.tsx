"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

type Office = {
  id: "mumbai" | "pune" | "bengaluru";
  label: string;
  addressHtml: string;
  city: string;
  state: string;
  postalCode?: string;
  landmark?: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string;
  email: string;
  hours: string;
  mapSrc: string;
  directions: string;
};

const OFFICES: Office[] = [
  {
    id: "mumbai",
    label: "Mumbai",
    addressHtml: "Office Number 2 & 3, 2nd Floor, Ashley Towers, Kanakia Rd, Vagad Nagar, Beverly Park, Mira Road East, Mira Bhayandar,",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "401107",
    landmark: "Near Movie Max(Cinemax)",
    phone: "tel:+919999999999",
    phoneDisplay: "+91 99999 99999",
    whatsapp: "https://wa.me/919999999999",
    email: "mailto:admissions@cinutedigital.com",
    hours: "Mon–Sat • 9:00 AM – 8:00 PM IST",
    mapSrc: "https://www.google.com/maps?q=Bandra+Kurla+Complex,Mumbai&output=embed",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Bandra+Kurla+Complex,Mumbai",
  },
];

export function ContactOfficeMapSection() {
  const [active] = useState<Office>(OFFICES[0]);

  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Visit <span className="text-brand">Cinute Digital</span> — Ed-Tech Campuses in India
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore our modern training centers for <strong>Software Testing courses</strong>,{" "}
            <strong>Data Science &amp; AI programs</strong>, and <strong>Full-Stack Development</strong>. Get{" "}
            <strong>job-ready training</strong>, hands-on labs, and <strong>placement assistance</strong>.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-0.5 rounded-3xl bg-gradient-to-br from-sky-400/40 via-indigo-400/30 to-fuchsia-400/20 blur-[2px]"
            />
            <div className="relative rounded-3xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{active.label}</h3>
                  {active.landmark && (
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Landmark: <span className="font-medium">{active.landmark}</span>
                    </p>
                  )}
                </div>
                <span className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1 text-[11px] text-slate-600 dark:text-slate-300">
                  Walk-in Friendly
                </span>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                  <div className="font-medium text-slate-900 dark:text-white">Address</div>
                  <div
                    className="mt-1 text-slate-700 dark:text-slate-300"
                    dangerouslySetInnerHTML={{ __html: active.addressHtml }}
                  />
                  <div className="text-slate-700 dark:text-slate-300">
                    {active.city}, {active.state}
                    {active.postalCode ? ` — ${active.postalCode}` : ""}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                  <div className="font-medium text-slate-900 dark:text-white">Office Hours</div>
                  <div className="mt-1">{active.hours}</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={active.phone}
                    className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Call ${active.label} office`}
                  >
                    <div className="font-medium text-slate-900 dark:text-white">Admissions Helpline</div>
                    <div className="mt-1 text-slate-700 dark:text-slate-300">{active.phoneDisplay}</div>
                  </a>
                  <a
                    href={active.email}
                    className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Email ${active.label} office`}
                  >
                    <div className="font-medium text-slate-900 dark:text-white">Email</div>
                    <div className="mt-1 text-slate-700 dark:text-slate-300">
                      {active.email.replace("mailto:", "")}
                    </div>
                  </a>
                  {active.whatsapp && (
                    <a
                      href={active.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 p-3 text-sm shadow-sm hover:shadow-md transition"
                      aria-label={`WhatsApp ${active.label} office`}
                    >
                      <div className="font-medium text-emerald-800 dark:text-emerald-300">WhatsApp</div>
                      <div className="mt-1 text-emerald-700 dark:text-emerald-300/90">Instant Responses</div>
                    </a>
                  )}
                  <a
                    href={active.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/30 p-3 text-sm shadow-sm hover:shadow-md transition"
                    aria-label={`Get directions to ${active.label}`}
                  >
                    <div className="font-medium text-sky-800 dark:text-sky-300">Get Directions</div>
                    <div className="mt-1 text-sky-700 dark:text-sky-300/90">Open in Google Maps</div>
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Software Testing Training",
                    "Data Science & AI Courses",
                    "Full-Stack Developer Program",
                    "Placement Assistance",
                    "Corporate Upskilling",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 z-10 p-3">
                <div className="mx-auto w-fit rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-3 py-1 text-[11px] text-slate-600 dark:text-slate-300 shadow-sm backdrop-blur">
                  {active.label} • Live Location
                </div>
              </div>
              <iframe
                className="w-full h-[420px]"
                src={active.mapSrc}
                title={`${active.label} — Cinute Digital`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Tip: For campus tours and lab access, book a slot with our admissions counselor.
            </p>
          </div>
        </div>
      </div>

      <Script id="org-local-seo" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cinute Digital",
          url: "https://www.cinutedigital.com",
          sameAs: ["https://www.facebook.com/", "https://www.instagram.com/", "https://www.linkedin.com/"],
          contactPoint: OFFICES.map((o) => ({
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: o.phone.replace("tel:", ""),
            email: o.email.replace("mailto:", ""),
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          })),
          address: OFFICES.map((o) => ({
            "@type": "PostalAddress",
            streetAddress: o.addressHtml.replace(/<br\/?>/g, ", "),
            addressLocality: o.city,
            addressRegion: o.state,
            postalCode: o.postalCode || "",
            addressCountry: "IN",
          })),
        })}
      </Script>
    </section>
  );
}
