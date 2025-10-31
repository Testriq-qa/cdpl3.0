"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star, MapPin, Home, ChevronRight, X } from "lucide-react";
import type { CourseData } from "@/types/courseData";
import Link from "next/link";

interface HeroSectionProps {
  data: CourseData;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; email: string; phone: string }) => void;
  formData: { name: string; email: string; phone: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; phone: string }>
  >;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const popupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

// Extracted and exported PopupForm component
export const PopupForm: React.FC<PopupFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold text-slate-900">Enroll Now</h2>
        <p className="mt-1 text-sm text-slate-600">
          Fill in your details to start your journey with us.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }} className="mt-6 space-y-4">
          <div>
            <label htmlFor="popup-name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              id="popup-name"
              name="popup-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="popup-email" className="mb-1 block text-sm font-medium text-slate-700">
              Email *
            </label>
            <input
              id="popup-email"
              name="popup-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="popup-phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone *
            </label>
            <input
              id="popup-phone"
              name="popup-phone"
              type="tel"
              required
              pattern="^[0-9+\\-\\s()]{7,15}$"
              value={formData.phone}
              onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="+91 98765 43210"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Submit Enrollment
          </button>

          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about courses and placements.
          </p>
        </form>
      </div>
    </motion.div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { heroContent, location } = data;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupForm, setPopupForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const crumbs = useMemo(() => {
    if (data.breadcrumbs?.length) return data.breadcrumbs;
    return [
      { label: "Home", href: "/" },
      { label: "Courses", href: "/courses" },
      { label: data.courseName, href: `/courses/${data.slug}` },
      { label: location, href: "#" },
    ];
  }, [data.breadcrumbs, data.courseName, data.slug, location]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    track: data.specializations?.[0] ?? "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Submitted:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nTrack: ${form.track}`
    );
  };

  const onPopupSubmit = (formData: { name: string; email: string; phone: string }) => {
    alert(
      `Enroll Now Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    setIsPopupOpen(false);
    setPopupForm({ name: "", email: "", phone: "" });
  };

  // Form component extracted for reuse
  const LeadForm = () => (
    <motion.div variants={itemVariants} className="mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl max-w-md w-full">
        <h2 id="enroll" className="text-xl font-bold text-slate-900">
          Get a Free Counseling Session
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Tell us a bit about you, and we’ll share the best track & syllabus.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              pattern="^[0-9+\\-\\s()]{7,15}$"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="track" className="mb-1 block text-sm font-medium text-slate-700">
              Select Track *
            </label>
            <select
              id="track"
              name="track"
              required
              value={form.track}
              onChange={(e) => setForm((f) => ({ ...f, track: e.target.value }))}
              className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
            >
              {(data.specializations?.length ? data.specializations : ["General"]).map(
                (opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                )
              )}
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            Request Syllabus PDF
          </button>

          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about courses and placements.
          </p>
        </form>
      </div>
    </motion.div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* soft shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <a
                  href={c.href}
                  className={`hover:text-indigo-700 ${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <motion.div
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT: Heading + Form (mobile) + Description + Stats */}
          <div className="md:col-span-7 xl:col-span-8">
            {/* Location chip */}
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-indigo-600" />
              <span className="text-xs font-medium">
                {location}, {data.state}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-12 tracking-tight text-slate-900 sm:text-5xl"
            >
              {heroContent.title}
            </motion.h1>

            {/* Form on mobile only */}
            <div className="md:hidden">
              <LeadForm />
            </div>

            <motion.p
              variants={itemVariants}
              className="mt-7 md:mt-3 text-lg font-semibold text-indigo-700"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
            >
              {heroContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-2xl font-extrabold text-transparent">
                    {stat.number}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{stat.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Certifications & Benefits
              </p>
              <div className="flex flex-wrap gap-2">
                {heroContent.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                  >
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow-md"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Form (desktop only) */}
          <div className="hidden md:block md:col-span-5 xl:col-span-4 md:-mt-2 lg:-mt-10"> {/* OPTIONAL */}
            <LeadForm />
          </div>
        </motion.div>

        {heroContent.landmarks?.length ? (
          <motion.div variants={itemVariants} className="mt-14 border-t border-slate-200 pt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
              Serving {location}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroContent.landmarks.map((lm, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700 shadow-sm"
                >
                  {lm}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>

      {/* Popup */}
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={onPopupSubmit}
        formData={popupForm}
        setFormData={setPopupForm}
      />
    </section>
  );
};

export default HeroSection;