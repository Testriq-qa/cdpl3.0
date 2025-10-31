"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import type { CourseData } from "@/types/courseData";
import {
  BookOpen,
  CheckCircle,
  Zap,
  Gauge,
  Shield,
  Smartphone,
  ArrowRight,
  Star,
  Users,
  Clock,
  Download,
  X,
} from "lucide-react";

interface CourseOverviewSectionProps {
  data: CourseData;
}

interface Module {
  name: string;
  description: string;
  icon: string;
  rating?: number;
  duration?: string;
  level?: string;
  studentsEnrolled?: number;
  features?: string[];
  trending?: boolean;
  offerEndsAt?: string | Date;
  topics?: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-10 h-10" />,
  CheckCircle: <CheckCircle className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Gauge: <Gauge className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
};

type Variant = {
  header: string;
  button: string;
  hoverBorder: string;
};

const VARIANTS: Variant[] = [
  {
    header:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    header:
      "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    header:
      "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-gradient-to-r from-rose-600 to-orange-500",
    hoverBorder: "hover:border-rose-300",
  },
];

// Explicitly typed pickVariant function
const pickVariant = (i: number): Variant => {
  return VARIANTS[i % VARIANTS.length];
};

const pad = (n: number) => n.toString().padStart(2, "0");

const BrochureFormModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}> = ({ isOpen, onClose, courseTitle }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, courseTitle });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md mx-4 shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Download Brochure
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Get the {courseTitle} brochure by filling out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="+1 (123) 456-7890"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Download Now
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

const ModuleCard: React.FC<{
  nowMs: number;
  category: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    rating: number;
    duration: string;
    level: string;
    studentsEnrolled: number;
    features: string[];
    trending?: boolean;
    offerEndsAt?: Date | null;
  };
  variant: Variant;
  itemVariants: Variants;
}> = ({ nowMs, category, variant, itemVariants }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const fallbackDeadlineRef = React.useRef<Date | null>(null);
  if (!category.offerEndsAt && !fallbackDeadlineRef.current) {
    fallbackDeadlineRef.current = new Date(Date.now() + 48 * 3600 * 1000);
  }

  const target: Date =
    category.offerEndsAt ?? (fallbackDeadlineRef.current as Date);
  const diff = Math.max(0, target.getTime() - nowMs);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = pad(Math.floor(totalSeconds / 3600));
  const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
  const seconds = pad(totalSeconds % 60);
  const isOver = diff <= 0;

  return (
    <>
      <motion.article
        variants={itemVariants}
        className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full`}
      >
        <div className={`${variant.header} p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <div
                className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                aria-label={`Rating ${category.rating.toFixed(1)} out of 5`}
              >
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">
                  {category.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {category.trending && (
              <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
                <Zap className="w-3 h-3" />
                TRENDING
              </span>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              {category.title}
            </h3>

            <p className="text-white/90 text-sm leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center space-x-2 text-slate-700">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{category.duration}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
                {category.level}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
            <Users className="w-4 h-4 text-purple-500" />
            <span className="font-medium">
              {category.studentsEnrolled.toLocaleString()}+ students enrolled
            </span>
          </div>

          <ul className="space-y-2 flex-grow">
            {category.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start space-x-2 text-sm text-slate-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">
              Limited-time offer ends in
            </p>

            <div
              className="grid grid-cols-3 gap-3 text-center"
              role="timer"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="rounded-lg bg-white shadow-sm p-3">
                <div className="text-xl font-bold text-slate-900 tabular-nums">
                  {hours}
                </div>
                <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                  Hours
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-sm p-3">
                <div className="text-xl font-bold text-slate-900 tabular-nums">
                  {minutes}
                </div>
                <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                  Minutes
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-sm p-3">
                <div className="text-xl font-bold text-slate-900 tabular-nums">
                  {seconds}
                </div>
                <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                  Seconds
                </div>
              </div>
            </div>

            {isOver && (
              <p className="mt-2 text-xs text-red-600 font-semibold">
                Offer has ended.
              </p>
            )}
          </div>

          <div className="pt-4 space-y-3 mt-auto">
            <button
              className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              <span>View Course Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
      </motion.article>

      <BrochureFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={category.title}
      />
    </>
  );
};

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({ data }) => {
  const { courseOverviewContent } = data;

  const [nowMs, setNowMs] = React.useState<number>(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-3"
            variants={itemVariants}
          >
            Course Structure
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
            variants={itemVariants}
          >
            {courseOverviewContent.title}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {courseOverviewContent.description}
          </motion.p>
          {courseOverviewContent.subtitle && (
            <motion.p
              className="text-sm sm:text-base text-slate-500 mt-3"
              variants={itemVariants}
            >
              {courseOverviewContent.subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courseOverviewContent.modules.map((mod: Module, idx) => {
            const variant = pickVariant(idx);
            const category = {
              id: idx,
              title: mod.name,
              description: mod.description,
              icon: iconMap[mod.icon] || <BookOpen className="w-10 h-10" />,
              rating: typeof mod.rating === "number" ? mod.rating : 4.8,
              duration: mod.duration ?? "6–8 weeks",
              level: mod.level ?? "Beginner",
              studentsEnrolled:
                typeof mod.studentsEnrolled === "number"
                  ? mod.studentsEnrolled
                  : 2200 + idx * 17,
              features:
                Array.isArray(mod.features) && mod.features.length
                  ? mod.features
                  : (mod.topics ?? []).slice(0, 4),
              trending: !!mod.trending,
              offerEndsAt: mod.offerEndsAt ? new Date(mod.offerEndsAt) : null,
            };

            return (
              <ModuleCard
                key={idx}
                nowMs={nowMs}
                category={category}
                variant={variant}
                itemVariants={itemVariants}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">
            Ready to explore all modules in detail?
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('curriculum-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            View Full Curriculum
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;