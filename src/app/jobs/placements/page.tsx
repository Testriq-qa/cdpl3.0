// app/jobs/placements/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Script from "next/script";
import { generateSEO, generateBreadcrumbSchema } from "@/lib/seo";

// ============================================================================
// SEO METADATA - Enhanced for Placements Page
// ============================================================================
export const metadata: Metadata = generateSEO({
    title: "Student Placements - Real Hiring Outcomes & Success Stories | CDPL",
    description: "Explore CDPL student placements across top companies like TCS, Infosys, Wipro, Accenture, and startups. See roles, packages (3-12 LPA), locations, partner companies, and success stories driven by our product-led, mentor-first training in QA, Data Science, Full-Stack, and DevOps.",
    keywords: [
        "CDPL placements",
        "Cinute Digital placements",
        "student placements",
        "hiring partners",
        "job outcomes",
        "edtech placements",
        "QA automation placements",
        "data science placements",
        "full-stack developer placements",
        "DevOps placements",
        "CDPL success stories",
        "software testing jobs",
        "placement assistance",
    ],
    url: "/jobs/placements",
    image: "/og/placements-1536x1024.jpg",
    imageAlt: "CDPL Student Placements & Hiring Partners",
});

/** =====================================
 * Lightweight client-free loading UI
 * ===================================== */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500 dark:text-gray-400">{label}</p>
        </div>
    );
}

/** =========================
 * Dynamic Imports (Client)
 * ========================= */
const PlacementsHeroSection = dynamic(
    () => import("@/components/sections/PlacementsHeroSection"),
    { ssr: true, loading: () => <SectionLoader label="Preparing hero…" /> }
);
const PlacementsHighlightsStatsSection = dynamic(
    () => import("@/components/sections/PlacementsHighlightsStatsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading highlights…" /> }
);
const PlacementsOffersTickerSection = dynamic(
    () => import("@/components/sections/PlacementsOffersTickerSection"),
    { ssr: true, loading: () => <SectionLoader label="Fetching offers…" /> }
);
const PlacementsFiltersGridSection = dynamic(
    () => import("@/components/sections/PlacementsFiltersGridSection"),
    { ssr: true, loading: () => <SectionLoader label="Building grid…" /> }
);
const PlacementsCompanyWallSection = dynamic(
    () => import("@/components/sections/PlacementsCompanyWallSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading partners…" /> }
);
const PlacementsSuccessStoriesCarousel = dynamic(
    () => import("@/components/sections/PlacementsSuccessStoriesCarousel"),
    { ssr: true, loading: () => <SectionLoader label="Loading stories…" /> }
);

const PlacementsMentorCTASection = dynamic(
    () => import("@/components/sections/PlacementsMentorCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Setting up CTA…" /> }
);
const PlacementsFAQSection = dynamic(
    () => import("@/components/sections/PlacementsFAQSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading FAQs…" /> }
);
const PlacementsNewsletterCTASection = dynamic(
    () => import("@/components/sections/PlacementsNewsletterCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Loading updates…" /> }
);

export default function PlacementsPage() {
    // Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs/placements" },
        { name: "Placements", url: "/jobs/placements" },
    ]);

    // Enhanced Organization Schema with Placements
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": "https://www.cinutedigital.com/#organization",
        name: "Cinute Digital Pvt Ltd (CDPL)",
        url: "https://www.cinutedigital.com",
        description: "Leading EdTech with proven placement track record",
        sameAs: [
            "https://www.linkedin.com/company/cinutedigital",
            "https://twitter.com/cinutedigital",
            "https://www.facebook.com/cinutedigital",
            "https://www.instagram.com/cinutedigital",
        ],
        department: {
            "@type": "CollegeOrUniversity",
            name: "CDPL Placements",
            url: "https://www.cinutedigital.com/jobs/placements",
            description: "Placement assistance and career support for CDPL students",
        },
    };

    // CollectionPage Schema for Placements
    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.cinutedigital.com/jobs/placements#collectionpage",
        url: "https://www.cinutedigital.com/jobs/placements",
        name: "CDPL Student Placements",
        description: "Browse verified student placements, hiring partners, and success stories",
        inLanguage: "en-IN",
    };

    // Service Schema for Placement Assistance
    const placementServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.cinutedigital.com/jobs/placements#service",
        name: "Placement Assistance & Career Support",
        description: "Comprehensive placement assistance including resume building, interview preparation, and job referrals to top companies",
        provider: {
            "@type": "EducationalOrganization",
            "@id": "https://www.cinutedigital.com/#organization",
            name: "CDPL - Cinute Digital",
        },
        serviceType: "Career Services",
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
        },
    };

    // WebPage Schema with placement statistics
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.cinutedigital.com/jobs/placements#webpage",
        url: "https://www.cinutedigital.com/jobs/placements",
        name: "Student Placements - CDPL",
        description: "Verified CDPL placements across QA, Automation, Data, Full-Stack, and Cloud/DevOps",
        inLanguage: "en-IN",
        isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.cinutedigital.com/#website",
            url: "https://www.cinutedigital.com",
            name: "CDPL - Cinute Digital",
        },
        about: {
            "@type": "Thing",
            name: "Student Placements",
            description: "Real hiring outcomes and success stories from CDPL training programs",
        },
    };

    return (
        <>
            {/* Structured Data - Multiple Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(placementServiceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* Main Content - Semantic HTML Structure */}
            <main 
                className="relative min-h-screen overflow-hidden"
                itemScope 
                itemType="https://schema.org/CollectionPage"
            >
                {/* Hidden metadata for schema.org */}
                <meta itemProp="name" content="CDPL Student Placements" />
                <meta itemProp="description" content="Browse verified student placements, hiring partners, and success stories" />
                <meta itemProp="url" content="https://www.cinutedigital.com/jobs/placements" />

                {/* Soft, moving CDPL gradients */}
                <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
                    <div className="absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 mix-blend-soft-light bg-[conic-gradient(at_50%_50%,#ff8c00_0deg,#ffb558_90deg,#ffd19e_180deg,#7ee7ff_270deg,#9d7bff_360deg)] animate-[spin_30s_linear_infinite]" />
                    <div className="absolute bottom-[-12rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 mix-blend-screen bg-[radial-gradient(closest-side,#9d7bff,transparent)] animate-[pulse_6s_ease-in-out_infinite]" />
                </div>

                {/* HERO is self-contained (handles its own container) */}
                <PlacementsHeroSection />

                {/* All other sections: full-width wrapper + centered content */}
                {/* NOTE: data-scroll-target + scroll-mt[...] for sticky navbar compensation */}
                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-highlights"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsHighlightsStatsSection />
                    </div>
                </section>

                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-offers"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsOffersTickerSection />
                    </div>
                </section>

                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-grid"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsFiltersGridSection />
                    </div>
                </section>

                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-partners"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsCompanyWallSection />
                    </div>
                </section>

                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-stories"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsSuccessStoriesCarousel />
                    </div>
                </section>

                <section
                    className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-mentor"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsMentorCTASection />
                    </div>
                </section>

                <section
                    className="w-full pb-16 scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-faq"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsFAQSection />
                    </div>
                </section>

                <section
                    className="w-full pb-24 scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
                    data-scroll-target="placements-newsletter"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PlacementsNewsletterCTASection />
                    </div>
                </section>

                {/* Data-attribute scroll manager (hash clicks + hash on load) */}
                <Script id="cdpl-data-attr-scroll" strategy="afterInteractive">
                    {`
(function(){
  function navOffset(){
    var w = window.innerWidth || 0;
    if (w >= 1024) return 112;  // lg
    if (w >= 768)  return 104;  // md
    return 96;                  // base
  }
  function getEl(name){
    return document.querySelector('[data-scroll-target="'+ CSS.escape(name) +'"]');
  }
  function scrollToTarget(name, opts){
    var el = getEl(name);
    if(!el) return;
    var rect = el.getBoundingClientRect();
    var extra = (opts && opts.extra) || 8; // small breathing room
    var y = window.scrollY + rect.top - (navOffset() + extra);
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }
  // expose for inline handlers if needed
  window.CDPLscrollTo = scrollToTarget;

  function handleHash(){
    var frag = decodeURIComponent((location.hash || '').replace('#',''));
    if(!frag) return;
    if(getEl(frag)){
      // avoid native jump since no ID exists; do our own scroll
      requestAnimationFrame(function(){ scrollToTarget(frag, { extra: 0 }); });
    }
  }

  // Intercept in-page anchor clicks with href starting '#'
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest && e.target.closest('a[href^="#"]');
    if(!a) return;
    var href = a.getAttribute('href') || '';
    var frag = decodeURIComponent(href.slice(1));
    if(!frag) return;
    if(!getEl(frag)) return; // allow normal behavior if no data target
    e.preventDefault();
    scrollToTarget(frag);
    // reflect the hash so back/forward works without native jump
    history.replaceState(null, '', '#' + frag);
  }, { capture: true });

  window.addEventListener('hashchange', handleHash);
  window.addEventListener('DOMContentLoaded', handleHash);
})();
        `}
                </Script>
            </main>
        </>
    );
}
