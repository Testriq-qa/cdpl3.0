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
    { title: "WhatsApp Us", desc: "Quick answers on courses, fees, syllabus & career guidance. Get help from our admissions team instantly.",
      cta: "Chat on WhatsApp", href: "https://wa.me/919999999999", internal: false,
      icon: <MessageCircle className="h-5 w-5 text-sky-600 dark:text-sky-300" />, badges: ["Fastest response", "Live advisor"],
      aria: "Chat with Cinute Digital on WhatsApp" },
    { title: "Admissions Helpline", desc: "Talk to an academic counselor about eligibility, batch schedules, and application deadlines.",
      cta: "Call Admissions", href: "tel:+919999999999", internal: false,
      icon: <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />, badges: ["9am–8pm IST", "Priority support"],
      aria: "Call Cinute Digital Admissions Helpline" },
    { title: "Email Us", desc: "Detailed queries about fees, placements, or documentation? Our team replies within 24 hours.",
      cta: "Send Email", href: "mailto:admissions@cinutedigital.com", internal: false,
      icon: <Mail className="h-5 w-5 text-violet-600 dark:text-violet-300" />, badges: ["24h response", "Trackable"],
      aria: "Email Cinute Digital Admissions" },
    { title: "Corporate Training", desc: "Upskill your team in Software Testing, Data Science, AI & Full-Stack. Tailored curriculum & labs.",
      cta: "Enquire for Teams", href: "/corporate-training", internal: true,
      icon: <BriefcaseBusiness className="h-5 w-5 text-slate-700 dark:text-slate-200" />, badges: ["Custom syllabus", "Hands-on labs"],
      aria: "Corporate training enquiry" },
    { title: "Request Syllabus", desc: "Download program curriculum PDFs for Software Testing, Data Science & AI, Full-Stack Development.",
      cta: "Get Curriculum PDF", href: "/downloads/cinute-syllabus.pdf", internal: true,
      icon: <FileText className="h-5 w-5 text-sky-700 dark:text-sky-300" />, badges: ["Updated", "Detailed topics"],
      aria: "Download course syllabus PDF" },
    { title: "Book 1:1 Counseling", desc: "Personalized guidance on career paths, job roles, and the best course fit for your goals.",
      cta: "Book a Free Slot", href: "#book", internal: true,
      icon: <Calendar className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />, badges: ["15-min session", "Mentor advice"],
      aria: "Book a free counseling session" },
    { title: "Scholarships & EMI", desc: "Check eligibility for scholarships and flexible EMI options with finance partners.",
      cta: "Explore Financing", href: "/scholarships", internal: true,
      icon: <Wallet className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />, badges: ["0-cost EMI*", "Limited seats"],
      aria: "Explore scholarships and EMI options" },
    { title: "Placement Cell", desc: "Resume reviews, mock interviews, and hiring drives with our partner companies.",
      cta: "Talk to Placement", href: "/placements", internal: true,
      icon: <GraduationCap className="h-5 w-5 text-fuchsia-700 dark:text-fuchsia-300" />, badges: ["Job-ready", "Career support"],
      aria: "Connect with Cinute Digital Placement Cell" },
    { title: "Visit Our Campus", desc: "Meet faculty at our Mumbai (BKC) center. Experience classrooms, labs & learning environment.",
      cta: "Open in Maps", href: "https://www.google.com/maps?q=Bandra+Kurla+Complex,Mumbai", internal: false,
      icon: <MapPin className="h-5 w-5 text-rose-700 dark:text-rose-300" />, badges: ["Guided tour", "By appointment"],
      aria: "Open Cinute Digital location in Google Maps" },
  ];

  return (
    <section className="relative bg-white dark:bg-slate-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Talk to <span className="text-brand">Cinute Digital</span> — India’s Leading Ed-Tech Institute
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
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
                className="group relative overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-400/10 blur-3xl"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-sky-200/60 dark:group-hover:ring-slate-700" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                    {item.icon}
                  </div>
                  {item.badges && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.desc}</p>

                {/* @ts-expect error */}
                <CardShell
                  {...props}
                  aria-label={item.aria || item.cta}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200"
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
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-center shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-white">{pill.title}</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">{pill.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
