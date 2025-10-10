"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
// helper to make longer copy for bigger cards
const long = (t: string) =>
  `${t} We practiced with structured reviews, shipped capstones, and wrote docs like in a real team. I came out with a portfolio piece, confident interviews, and habits I still use daily.`;


const REVIEWS: StudentReview[] = [
  { id: "r1", name: "Neha R.", role: "QA Engineer", course: "Manual + Automation Testing", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: long("CDPL’s mentor cadence and projects sharpened my testing mindset. We didn’t just learn theory—we ran focused exploratory sessions with charters, mapped risks, and compared coverage heuristics. I built API and UI suites that ran on CI for every PR, learned to tame flakiness with better waits/selectors, and used traces to debug fast. Weekly reviews pushed me to justify priorities and document crisp repro steps. By demo day I had a clean repo, a small dashboard for suite health, and the confidence to walk engineers through my approach end-to-end."), span: "big" },
  { id: "r2", name: "Aarav S.", role: "Digital Marketing", course: "Performance Marketing", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Practical playbooks and live dashboards meant I could launch, read signals, and iterate fast in my new role.", span: "normal" },
  { id: "r3", name: "Zara K.", role: "Data Scientist", course: "ML & MLOps", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: long("The product-first approach to ML made evaluation and deployment feel natural."), span: "tall" },
  { id: "r4", name: "Ishaan P.", role: "Data Analyst", course: "Analytics + BI", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "From SQL to stakeholder storytelling, the reps made interviews feel like a recap of class work.", span: "normal" },
  { id: "r5", name: "Priya D.", role: "Software Testing", course: "API + Postman + Cypress", rating: 5.0, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Real-world bug bashes and CI integrations helped me ship with quality."), span: "wide" },
  { id: "r6", name: "Kabir M.", role: "Digital Marketing", course: "SEO + Content Systems", rating: 4.5, avatar: "/testimonial_images/testimonial.jpeg", quote: "Strategy plus systems thinking: we built calendars, briefs, and reporting that finally scaled.", span: "normal" },
  { id: "r7", name: "Mira S.", role: "Data Analyst", course: "Advanced SQL + dbt", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Modeled real pipelines, added tests, and delivered clear dashboards—day-1 impact at work.", span: "normal" },
  { id: "r8", name: "Sanjay V.", role: "Software Testing", course: "Playwright + Test Strategy", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: long("We stabilized flaky suites and added trace-based debugging that saved hours each week."), span: "tall" },

  { id: "r9", name: "Rhea K.", role: "Data Scientist", course: "GenAI for Product", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Loved the focus on measurable product impact—offline metrics tied to real user outcomes.", span: "normal" },
  { id: "r10", name: "Tanmay G.", role: "Digital Marketing", course: "Analytics for Growth", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Attribution, cohorts, and experimentation finally clicked with templates I still reuse."), span: "wide" },
  { id: "r11", name: "Ananya B.", role: "Software Testing", course: "Test Design + Strategy", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Industry mentors, practical reviews, and real deliverables—exactly what hiring managers asked about.", span: "normal" },
  { id: "r12", name: "Dev S.", role: "Data Analyst", course: "Power BI + Storytelling", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Critical feedback on my dashboards improved clarity and decision speed for business users.", span: "normal" },
  { id: "r13", name: "Meera T.", role: "Data Scientist", course: "End-to-End ML Projects", rating: 5.0, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Shipping real ML with code reviews made interviews feel like show-and-tell. We framed problems with measurable metrics, versioned data properly, and wrote evals that matched business goals—not just leaderboard scores. I practiced PR hygiene, paired reviews, and safe rollouts with monitoring and guardrails. The capstone shipped as a tiny service with docs and a post-mortem template, so I could clearly explain objectives, trade-offs, and results to recruiters."), span: "big" },
  { id: "r14", name: "Nikhil A.", role: "Digital Marketing", course: "Lifecycle + CRM", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Mapped journeys, built experiments, and learned to read retention like a scientist.", span: "normal" },
  { id: "r15", name: "Ira P.", role: "QA Engineer", course: "Automation from Zero", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Selectors, CI, and flakiness—solved. I finally enjoy writing tests.", span: "normal" },
  { id: "r16", name: "Vihaan C.", role: "Software Testing", course: "Test Architecture", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Designing test pyramids and contracts helped us cut runtime and increase confidence."), span: "wide" },

  { id: "r17", name: "Aisha M.", role: "Data Analyst", course: "SQL for Product Analytics", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Case studies on funnels, churn, and LTV made me feel like a PM with a keyboard.", span: "normal" },
  { id: "r18", name: "Rudra T.", role: "Digital Marketing", course: "Paid Social Ops", rating: 4.5, avatar: "/testimonial_images/testimonial.jpeg", quote: "We built naming conventions, QA checklists, and experiments that actually shipped.", span: "normal" },
  { id: "r19", name: "Swara J.", role: "Data Scientist", course: "MLOps Foundations", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Feature stores, eval suites, and rollout strategies finally made sense in practice."), span: "tall" },
  { id: "r20", name: "Kunal V.", role: "QA Engineer", course: "API Testing + Contract Tests", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Contract tests caught breaking changes before prod—devs actually thank me now.", span: "normal" },
  { id: "r21", name: "Jiya B.", role: "Software Testing", course: "Mobile QA + CI", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Parallel runs and artifact sharing made triage quick and collaborative."), span: "wide" },
  { id: "r22", name: "Aman G.", role: "Data Analyst", course: "dbt + Metrics Layer", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Versioned models and tests meant fewer surprises and faster trust in numbers.", span: "normal" },
  { id: "r23", name: "Tara N.", role: "Digital Marketing", course: "SEO Tech + Content", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: long("From audits to briefs to reporting, the system keeps compounding results."), span: "tall" },
  { id: "r24", name: "Reyansh D.", role: "Data Scientist", course: "GenAI Evaluation", rating: 4.5, avatar: "/testimonial_images/testimonial.jpeg", quote: "We learned to measure helpfulness and latency like product metrics, not just models.", span: "normal" },
  { id: "r25", name: "Arjun D.", role: "QA Engineer", course: "Playwright + CI", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "We moved from flaky UI runs to consistent green builds. The review cadence made me precise with selectors and assertions.", span: "normal" },
  { id: "r26", name: "Simran L.", role: "Data Analyst", course: "SQL + Product Metrics", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "I finally learned to translate questions into queries and decisions. Stakeholders trust my dashboards now.", span: "normal" },
  { id: "r27", name: "Omar H.", role: "Digital Marketing", course: "Creative Testing + UGC Ops", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "We built a fast loop for briefs, variants, and measurement. Cost dropped and learning speed went up.", span: "normal" },
  { id: "r28", name: "Ritika P.", role: "Software Testing", course: "API Testing + Postman", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Schema-first tests and contract checks caught breaking changes before they reached staging. The habit stuck with my team."), span: "wide" },
  { id: "r29", name: "Daniel K.", role: "Data Scientist", course: "Feature Engineering", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "I learned to reason about leakage, drift, and real business metrics, not just accuracy.", span: "normal" },
  { id: "r30", name: "Ishita V.", role: "Digital Marketing", course: "SEO Content Systems", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: long("From audits to briefs to publishing cadence—having a system meant we kept ranking and compounding traffic."), span: "tall" },
  { id: "r31", name: "Rohan G.", role: "QA Engineer", course: "Test Strategy + Risk", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: "Risk mapping changed how I talk to PMs. I can defend trade-offs clearly now.", span: "normal" },
  { id: "r32", name: "Lavanya S.", role: "Data Analyst", course: "dbt + Metrics Layer", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Versioned models, tests, and docs—feels like engineering, not ad-hoc reports.", span: "normal" },
  { id: "r33", name: "Kabir A.", role: "Data Scientist", course: "MLOps + Monitoring", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: long("We added basic monitoring and alerts tied to product metrics. It made incidents boring—in the best way."), span: "wide" },
  { id: "r34", name: "Tanya J.", role: "Digital Marketing", course: "Lifecycle + CRM", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Playbooks for onboarding and re-activation gave us repeatable wins.", span: "normal" },
  { id: "r35", name: "Naveen R.", role: "Software Testing", course: "Mobile QA", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Device labs, artifacts, and fast repros made triage painless.", span: "normal" },
  { id: "r36", name: "Aadhya M.", role: "Data Analyst", course: "Power BI Storytelling", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: long("We rewrote cluttered dashboards into clear narratives. Adoption and decision speed improved immediately."), span: "tall" },
  { id: "r37", name: "Yash P.", role: "QA Engineer", course: "Cypress + Test Design", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Flake rate dropped and our suite finally reflects user flows instead of brittle paths.", span: "normal" },
  { id: "r38", name: "Mehul S.", role: "Digital Marketing", course: "Analytics for Growth", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: "Attribution finally made sense. We make creative and budget calls with data now.", span: "normal" },
  { id: "r39", name: "Sana Q.", role: "Data Scientist", course: "GenAI for Product", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Evaluation was practical—grounded in helpfulness, latency, and safety. It changed how I present results."), span: "wide" },
  { id: "r40", name: "Harsh T.", role: "Software Testing", course: "Contract Testing", rating: 4.9, avatar: "/testimonial_images/testimonial.jpeg", quote: "Contracts became our early-warning system. Fewer late-night rollbacks.", span: "normal" },
  { id: "r41", name: "Pooja C.", role: "Data Analyst", course: "Advanced SQL + Debugging", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Window functions, CTEs, and careful validation—no more mystery numbers.", span: "normal" },
  { id: "r42", name: "Aditya N.", role: "Digital Marketing", course: "Performance Media Ops", rating: 4.6, avatar: "/testimonial_images/testimonial.jpeg", quote: long("Naming conventions, QA steps, and reporting templates let us scale spend without chaos."), span: "tall" },
  { id: "r43", name: "Minal K.", role: "Data Scientist", course: "End-to-End ML", rating: 4.8, avatar: "/testimonial_images/testimonial.jpeg", quote: long("From problem framing to rollout, I can finally explain my work like a product engineer, not just a model builder."), span: "big" },
  { id: "r44", name: "Veer J.", role: "QA Engineer", course: "Playwright + Trace Viewer", rating: 4.7, avatar: "/testimonial_images/testimonial.jpeg", quote: "Trace viewer turned debugging into a few clicks. It’s my favorite demo in interviews.", span: "normal" },
];

type StudentReview = {
  id: string;
  name: string;
  role: "Software Testing" | "QA Engineer" | "Data Analyst" | "Data Scientist" | "Digital Marketing";
  course: string;
  company?: string;
  rating: number;
  quote: string;
  avatar: string;
  span?: "normal" | "wide" | "tall" | "big";
};

const spanClasses: Record<NonNullable<StudentReview["span"]>, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  tall: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  big: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
};

const colsForWidth = (w: number) => (w >= 1024 ? 4 : w >= 768 ? 3 : w >= 640 ? 2 : 1);

export default function TestimonialFeedbackSection() {
  const ROWS_PER_PAGE = 3;
  const [perPage, setPerPage] = useState<number>(12);
  const [visible, setVisible] = useState<number>(12);

  const scrollToCTA = () => {
    const CTA_IDS = ["cta-join", "apply", "cta", "join", "hero-cta"];
    const HEADER_OFFSET = 80;
    const el = CTA_IDS.map((id) => document.getElementById(id)).find(Boolean);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.location.hash = "cta-join";
    }
  };

  useEffect(() => {
    const compute = () => {
      const cols = colsForWidth(window.innerWidth);
      const pp = cols * ROWS_PER_PAGE;
      setPerPage(pp);
      setVisible((v) => (v === 12 ? pp : Math.max(pp, v)));
    };
    compute();
    let t: number | undefined;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(compute, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  const jsonLd = useMemo(() => {
    const slice = REVIEWS.slice(0, visible);
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "CDPL Student Testimonials",
      itemListElement: slice.map((r, i) => ({
        "@type": "Review",
        position: i + 1,
        author: { "@type": "Person", name: r.name },
        itemReviewed: { "@type": "Course", name: r.course },
        reviewBody: r.quote,
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
        publisher: { "@type": "Organization", name: "CDPL" },
      })),
    };
  }, [visible]);

  const canLoadMore = visible < REVIEWS.length;

  return (
    <section
      id="all-reviews"
      className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pt-0 sm:px-6 lg:px-8"
      aria-label="Student success stories and testimonials"
    >

      <Script id="cdpl-students-grid-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mx-auto mb-6 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">What our alumni say</h2>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          All reviewers are ex-students from <span className="font-medium text-neutral-900">Testing</span>,{" "}
          <span className="font-medium text-neutral-900">Data Analyst</span>,{" "}
          <span className="font-medium text-neutral-900">Data Science</span>, and{" "}
          <span className="font-medium text-neutral-900">Marketing</span> programs—sharing how CDPL prepared them for industry.
        </p>
      </header>

      <ul
        className="
          grid grid-cols-1 gap-4
          [grid-auto-rows:auto]
          sm:grid-cols-2 sm:[grid-auto-rows:minmax(10.5rem,_auto)]
          md:grid-cols-3 md:[grid-auto-rows:minmax(11rem,_auto)]
          lg:grid-cols-4 lg:[grid-auto-rows:minmax(12rem,_auto)]
          grid-flow-dense
        "
      >
        <AnimatePresence mode="popLayout">
          {REVIEWS.slice(0, visible).map((r) => (
            <motion.li
              key={r.id}
              layout
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={[
                "group relative overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 shadow-[0_24px_80px_-40px_rgba(0,0,0,.35)]",
                spanClasses[r.span ?? "normal"],
              ].join(" ")}
              itemScope
              itemType="https://schema.org/Review"
            >
              <article className="flex h-full flex-col">
                <div className="flex-1 p-5">
                  <div className="mb-2 inline-flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i + 0.01 < r.rating ? "text-[var(--color-brand)]" : "text-neutral-300"}`} fill={i + 0.01 < r.rating ? "currentColor" : "none"} />
                    ))}
                    <span className="ml-1 text-xs font-medium text-neutral-500">{r.rating.toFixed(1)}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-neutral-800 sm:line-clamp-8" itemProp="reviewBody">
                    “{r.quote}”
                  </blockquote>
                </div>
                <footer className="mt-auto flex items-center gap-3 border-t border-neutral-100 bg-neutral-50/50 p-4">
                  <span className="relative inline-block h-9 w-9 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src={r.avatar} alt={`${r.name} headshot`} fill className="object-cover" sizes="36px" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-neutral-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{r.name}</span>
                    </p>
                    <p className="truncate text-xs text-neutral-500">
                      {r.role} • {r.course}
                    </p>
                  </div>
                </footer>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[var(--color-brand)]/0 transition group-hover:ring-2 group-hover:ring-[var(--color-brand)]/25" />
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className="mt-6 flex justify-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + perPage, REVIEWS.length))}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold cursor-pointer text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/40"
            aria-label="View more reviews"
          >
            View more
          </button>
        ) : (
          <a
            href="#cta-join"
            onClick={(e) => {
              e.preventDefault();
              scrollToCTA();
            }}
            className="text-sm text-neutral-500 cursor-pointer hover:text-[var(--color-brand)] underline decoration-dotted underline-offset-4"
            aria-label="Jump to application call-to-action"
            title="Jump to apply"
          >
            That&apos;s all! — <span className="font-semibold">join 1,000+ successful students</span> →
          </a>
        )}
      </div>
    </section>
  );
}