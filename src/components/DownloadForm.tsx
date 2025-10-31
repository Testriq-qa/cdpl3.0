"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export type DownloadFormValues = {
  name: string;
  email: string;
  phone: string;
};

export type DownloadFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Shown in the copy inside the modal, optional */
  courseTitle?: string;
  /** Called with form values; you can trigger your download here */
  onSubmit?: (values: DownloadFormValues, e: React.FormEvent<HTMLFormElement>) => void;
  /** Override headings / CTA text if you want */
  title?: string;
  description?: string;
  submitText?: string;
};

export function DownloadFormModal({
  isOpen,
  onClose,
  courseTitle,
  onSubmit,
  title = "Download Brochure",
  description = "Get the brochure by filling out the form below.",
  submitText = "Download Now",
}: DownloadFormModalProps) {
  const [formData, setFormData] = React.useState<DownloadFormValues>({
    name: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    if (isOpen) {
      // reset for a fresh form each time it opens (optional)
      setFormData({ name: "", email: "", phone: "" });
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(formData, e);
    // You can choose to close here or let parent close after file starts
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-form-title"
    >
      <motion.div
        className="relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md mx-4 shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 id="download-form-title" className="text-2xl font-bold text-slate-900 mb-2">
          {title}
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          {courseTitle ? <>Get the <span className="font-semibold">{courseTitle}</span> brochure.</> : null} {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="df-name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              id="df-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="df-email" className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              id="df-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="john@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="df-phone" className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              id="df-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="^[0-9+\-\s()]{7,15}$"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            {submitText}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

/**
 * Convenience wrapper that renders the trigger button + manages modal open/close internally.
 * Use this if you just want a ready-made “Download Brochure” CTA with the same styling.
 */
export function DownloadFormButton({
  courseTitle,
  buttonText = "Download Brochure",
  buttonClassName = "w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300",
  onSubmit,
}: {
  courseTitle?: string;
  buttonText?: string;
  buttonClassName?: string;
  onSubmit?: (values: DownloadFormValues, e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>
      <DownloadFormModal
        isOpen={open}
        onClose={() => setOpen(false)}
        courseTitle={courseTitle}
        onSubmit={onSubmit}
      />
    </>
  );
}
