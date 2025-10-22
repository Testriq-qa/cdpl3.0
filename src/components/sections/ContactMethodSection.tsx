import Link from "next/link";
import {
  MessageCircle, Phone, Mail, BriefcaseBusiness, FileText, Calendar,
  GraduationCap, Wallet, MapPin,
} from "lucide-react";

type Card = {
  title: string; desc: string; cta: string; href: string;
  internal?: boolean; icon: React.ReactNode; badges?: string[]; aria?: string;
};

export function ContactMethodsSection() {
  const cards: Card[] = [
    {
      title: "WhatsApp Us", desc: "Quick answers on courses, fees, syllabus & career guidance. Get help from our admissions team instantly.",
      cta: "Chat on WhatsApp", href: "https://wa.me/919999999999", internal: false,
      icon: <MessageCircle className="h-5 w-5 text-sky-600" />, badges: ["Fastest response", "Live advisor"],
      aria: "Chat with Cinute Digital on WhatsApp"
    },
    {
      title: "Admissions Helpline", desc: "Talk to an academic counselor about eligibility, batch schedules, and application deadlines.",
      cta: "Call Admissions", href: "tel:+919999999999", internal: false,
      icon: <Phone className="h-5 w-5 text-indigo-600" />, badges: ["9am–8pm IST", "Priority support"],
      aria: "Call Cinute Digital Admissions Helpline"
    },
    {
      title: "Email Us", desc: "Detailed queries about fees, placements, or documentation? Our team replies within 24 hours.",
      cta: "Send Email", href: "mailto:admissions@cinutedigital.com", internal: false,
      icon: <Mail className="h-5 w-5 text-violet-600" />, badges: ["24h response", "Trackable"],
      aria: "Email Cinute Digital Admissions"
    },
    {
      title: "Corporate Training", desc: "Upskill your team in Software Testing, Data Science, AI & Full-Stack. Tailored curriculum & labs.",
      cta: "Enquire for Teams", href: "/corporate-training", internal: true,
      icon: <BriefcaseBusiness className="h-5 w-5 text-slate-700" />, badges: ["Custom syllabus", "Hands-on labs"],
      aria: "Corporate training enquiry"
    },
    {
      title: "Request Syllabus", desc: "Download program curriculum PDFs for Software Testing, Data Science & AI, Full-Stack Development.",
      cta: "Get Curriculum PDF", href: "/downloads/cinute-syllabus.pdf", internal: true,
      icon: <FileText className="h-5 w-5 text-sky-700" />, badges: ["Updated", "Detailed topics"],
      aria: "Download course syllabus PDF"
    },
    {
      title: "Book 1:1 Counseling", desc: "Personalized guidance on career paths, job roles, and the best course fit for your goals.",
      cta: "Book a Free Slot", href: "#book", internal: true,
      icon: <Calendar className="h-5 w-5 text-indigo-700" />, badges: ["15-min session", "Mentor advice"],
      aria: "Book a free counseling session"
    },
    {
      title: "Scholarships & EMI", desc: "Check eligibility for scholarships and flexible EMI options with finance partners.",
      cta: "Explore Financing", href: "/scholarships", internal: true,
      icon: <Wallet className="h-5 w-5 text-emerald-700" />, badges: ["0-cost EMI*", "Limited seats"],
      aria: "Explore scholarships and EMI options"
    },
    {
      title: "Placement Cell", desc: "Resume reviews, mock interviews, and hiring drives with our partner companies.",
      cta: "Talk to Placement", href: "/placements", internal: true,
      icon: <GraduationCap className="h-5 w-5 text-fuchsia-700" />, badges: ["Job-ready", "Career support"],
      aria: "Connect with Cinute Digital Placement Cell"
    },
    {
      title: "Visit Our Campus", desc: "Meet faculty at our Mumbai (BKC) center. Experience classrooms, labs & learning environment.",
      cta: "Open in Maps", href: "https://www.google.com/maps?q=Bandra+Kurla+Complex,Mumbai", internal: false,
      icon: <MapPin className="h-5 w-5 text-rose-700" />, badges: ["Guided tour", "By appointment"],
      aria: "Open Cinute Digital location in Google Maps"
    },
  ];

  return (
    <section className="relative bg-slate-50 dark:[color-scheme:light]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Talk to <span className="text-brand">Cinute Digital</span> — India’s Leading Ed-Tech Institute
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Get admissions support, course syllabus, <strong>job-ready training</strong> advice,{" "}
            <strong>placement assistance</strong>, and <strong>corporate upskilling</strong> solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {
            const CardShell = item.internal ? Link : "a";
            const props = item.internal ? { href: item.href } : { href: item.href, target: "_blank", rel: "noopener noreferrer" };

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-400/10 blur-3xl"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-sky-200/60" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                    {item.icon}
                  </div>
                  {item.badges && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-md leading-6 text-slate-700">{item.desc}</p>

                {/* @ts-expect error */}
                <CardShell
                  {...props}
                  aria-label={item.aria || item.cta}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800"
                >
                  {item.cta} <span aria-hidden>→</span>
                </CardShell>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Software Testing Courses", note: "Manual • Automation • QA" },
            { title: "Data Science & AI Programs", note: "Python • ML • Power BI" },
            { title: "Full-Stack Development", note: "React • Node.js • SQL" },
          ].map((pill) => (
            <div
              key={pill.title}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="text-md font-semibold text-slate-900">{pill.title}</div>
              <div className="mt-1 text-sm text-slate-600">{pill.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
