"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
  Briefcase,
  Building2,
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  Link as LinkIcon,
  Tag,
  Mail,
  ImageOff,
  Share2,
  Copy,
} from "lucide-react";
import type { Job } from "@/lib/jobsData";

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

type AnyJob = Job & {
  bannerImage?: string;
  bannerImageAlt?: string;
  tags?: string[];
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800">
      {children}
    </span>
  );
}

export function JobsLiveJobsJobCardSection({
  job,
  onShare,
  isCopied,
}: {
  job: AnyJob;
  onShare: (job: Job) => void;
  isCopied: boolean;
}) {
  const dateText = job.eventDate
    ? `Event: ${formatDate(job.eventDate)}`
    : job.postedOn
    ? `Posted: ${formatDate(job.postedOn)}`
    : "";

  const techFromText = (() => {
    const hay = [job.title, ...(job.highlights || []), ...(job.responsibilities || [])]
      .join(" ")
      .toLowerCase();
    const DICT = [
      "jmeter","selenium","postman","restassured","rest assured","cypress","playwright","appium",
      "java","python","javascript","typescript","sql","mysql","postgres","mongodb",
      "jenkins","docker","kubernetes","aws","azure","gcp","react","node","next.js","ci/cd"
    ];
    const found = new Set<string>();
    for (const k of DICT) if (hay.includes(k)) found.add(k.replace(/\brest assured\b/, "Rest Assured"));
    const title = (s: string) =>
      s.split(/[\s/]+/).map(w => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(" ");
    return Array.from(found).map(t => t.replace("next.js", "Next.js")).map(title).slice(0, 12).sort();
  })();

  const imageBadge =
    job.type || job.mode || (job.eventDate ? formatDate(job.eventDate) : undefined);

  const candidateSrcs = useMemo(() => {
    const hasExt = (p?: string) => !!p && /\.(png|jpe?g|webp|gif|avif|svg)$/i.test(p);
    const EXT_ORDER_GENERIC = [".jpg", ".jpeg", ".png", ".webp"];
    const EXT_ORDER_FALLBACK = [".png", ".jpg", ".jpeg", ".webp"];

    const expand = (base?: string, exts: string[] = EXT_ORDER_GENERIC) => {
      if (!base) return [] as string[];
      if (hasExt(base)) return [base];
      return exts.map((e) => `${base}${e}`);
    };

    const fallbackBase =
      job.imageFallback || "/live-jobs_images/jobs_image/cdpl-no-job-image-bag-icon";

    const arr = [
      ...expand(job.bannerImage, EXT_ORDER_GENERIC),
      ...expand(fallbackBase, EXT_ORDER_FALLBACK),
    ];
    return Array.from(new Set(arr));
  }, [job.bannerImage, job.imageFallback]);

  const [imgIdx, setImgIdx] = useState(0);
  const [giveUp, setGiveUp] = useState(false);
  const currentSrc = candidateSrcs[imgIdx];
  const isLocal = !!currentSrc && currentSrc.startsWith("/");

  const handleImgError = () => {
    if (imgIdx < candidateSrcs.length - 1) setImgIdx((i) => i + 1);
    else setGiveUp(true);
  };

  return (
    <article className="relative font-sans">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        {/* IMAGE: above on small screens, right on md+; narrower on large screens */}
        <aside
          className="
            order-1 md:order-2 md:self-start relative
            w-full md:w-[300px] lg:w-[340px] xl:w-[380px]
            md:shrink-0
          "
        >
          {!giveUp && currentSrc ? (
            <Image
              key={currentSrc}
              src={currentSrc}
              alt={job.bannerImageAlt || `${job.company} hiring`}
              width={1600}
              height={900}
              className="w-full h-auto rounded-2xl object-contain bg-white"
              priority={false}
              unoptimized={isLocal}
              onError={handleImgError}
              onLoadingComplete={(img) => {
                if (!img?.naturalWidth) handleImgError();
              }}
            />
          ) : (
            <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-slate-50 text-slate-400 sm:h-64">
              <ImageOff className="h-8 w-8" />
            </div>
          )}

          {imageBadge && (
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur-sm">
              <Tag className="h-3.5 w-3.5 opacity-70" />
              <span className="truncate max-w-[240px] sm:max-w-[300px] md:max-w-[300px]">
                {imageBadge}
              </span>
            </div>
          )}

          <div className="mt-2 flex justify-end">
            <button
              onClick={() => onShare(job)}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-label={`Share ${job.title}`}
              title={isCopied ? "Link copied!" : "Share"}
            >
              {isCopied ? (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5" />
                  Share
                </>
              )}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="order-2 md:order-1 min-w-0 md:flex-1">
          <div className="flex items-start gap-3">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
              style={{
                background: "linear-gradient(180deg, rgba(255,140,0,0.12), rgba(255,140,0,0.06))",
                boxShadow: "inset 0 0 0 1px rgba(15,23,42,0.06)",
              }}
            >
              <Briefcase className="h-5 w-5" style={{ color: "#ff8c00" }} />
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-xl font-extrabold leading-tight text-slate-900">
                {job.title}
              </h3>

              <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center">
                  <Building2 className="mr-1 h-3.5 w-3.5" />
                  {job.company}
                </span>

                {job.companySite && (
                  <>
                    <span className="text-slate-300">•</span>
                    <a
                      href={job.companySite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-700 hover:text-slate-900"
                      title="Company website"
                    >
                      <LinkIcon className="mr-1 h-3.5 w-3.5" />
                      Visit site
                    </a>
                  </>
                )}

                {job.location && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </>
                )}

                {dateText && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center">
                      <Calendar className="mr-1 h-3.5 w-3.5" />
                      {dateText}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags?.map((t) => <Pill key={t}>{t}</Pill>)}
            {job.type && <Pill>{job.type}</Pill>}
            {job.mode && <Pill>{job.mode}</Pill>}
            {job.exp && (
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                Exp: {job.exp}
              </span>
            )}
            {job.salary && (
              <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700">
                {job.salary}
              </span>
            )}
          </div>

          {!!job.highlights?.length && (
            <div className="mt-3">
              <h4 className="mb-1 text-sm font-semibold text-slate-900">What we’re looking for</h4>
              <ul className="grid gap-1.5">
                {job.highlights.slice(0, 6).map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-slate-600">
                    • {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!!job.responsibilities?.length && (
            <div className="mt-4">
              <h4 className="mb-1 text-sm font-semibold text-slate-900">Roles & responsibilities</h4>
              <ul className="grid gap-1.5">
                {job.responsibilities.slice(0, 8).map((r, i) => (
                  <li key={`${i}-${r}`} className="text-sm leading-relaxed text-slate-600">
                    • {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!!techFromText.length && (
            <div className="mt-4">
              <div className="mb-2 flex items-center gap-2">
                <Tag className="h-4 w-4 text-slate-500" />
                <h4 className="text-sm font-semibold text-slate-900">Tech stack</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techFromText.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(job.venue || job.eventDate || job.timeWindow || job.location) && (
            <div className="mt-5 border-t border-slate-100 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Venue & schedule</h4>
              <div className="mt-2 grid gap-1.5 text-sm leading-relaxed text-slate-600">
                {job.venue && (
                  <p className="inline-flex items-start">
                    <MapPin className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                    <span>{job.venue}</span>
                  </p>
                )}
                {job.eventDate && (
                  <p className="inline-flex items-start">
                    <Calendar className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                    <span>{formatDate(job.eventDate)}</span>
                  </p>
                )}
                {job.timeWindow && (
                  <p className="inline-flex items-start">
                    <Clock className="mr-1 mt-[2px] h-3.5 w-3.5 text-slate-500" />
                    <span>{job.timeWindow}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {Array.isArray(job.contacts) && job.contacts.length > 0 && (
            <div className="mt-5 border-t border-slate-100 pt-3">
              <h4 className="text-sm font-semibold text-slate-900">Contacts</h4>
              <ul className="mt-2 grid gap-1.5">
                {job.contacts.slice(0, 4).map((c, i) => (
                  <li key={`${i}-${c}`} className="text-sm leading-relaxed text-slate-600">
                    • {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
            {job.applyEmail && (
              <a
                href={`mailto:${job.applyEmail}`}
                className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Apply via Email
              </a>
            )}
            {job.applyLink && (
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-[1px] hover:shadow-sm"
              >
                Apply Online <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            {(job.timeWindow || job.eventDate) && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                <Clock className="h-3.5 w-3.5" />
                {job.timeWindow ?? formatDate(job.eventDate)}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
