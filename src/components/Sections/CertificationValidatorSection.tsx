"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Certificate } from "@/data/certificates/registry";
import { getCertificateById } from "@/data/certificates/registry";
import { CertificationPreviewSection } from "./CertificationPreviewSection";

export default function CertificationValidatorSection() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Accept IDs like CDPL-AAA-2025-8Q7K2 / CDPL-ACTD-2025-3M8Q1
  const pattern = useMemo(() => /^CDPL-(AAA|ACTD)-2025-[A-Z0-9]{5}$/i, []);

  const setUrlId = (id?: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    if (!id) params.delete("id");
    else params.set("id", id);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const validateAndShow = (raw: string) => {
    const id = raw.trim().toUpperCase();
    setError("");
    setResult(null);

    if (!pattern.test(id)) {
      setError(
        "Invalid format. Use CDPL-AAA-2025-XXXXX or CDPL-ACTD-2025-XXXXX (A–Z, 0–9)."
      );
      setUrlId(undefined);
      return;
    }
    const hit = getCertificateById(id);
    if (!hit) {
      setError("No certificate found for this ID.");
      setUrlId(undefined);
      return;
    }
    setResult(hit);
    setUrlId(hit.id); // show in URL for sharing
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateAndShow(query);
  };

  // Auto-load from ?id=...
  useEffect(() => {
    const id = searchParams?.get("id");
    if (id) {
      setQuery(id);
      validateAndShow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareUrl =
    result && typeof window !== "undefined"
      ? `${window.location.origin}${pathname}?id=${encodeURIComponent(result.id)}`
      : result
      ? `${pathname}?id=${encodeURIComponent(result.id)}`
      : null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label htmlFor="certId" className="sr-only">
              Certificate ID
            </label>
            <input
              id="certId"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: CDPL-AAA-2025-8Q7K2 or CDPL-ACTD-2025-3M8Q1"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-orange-300"
              aria-describedby="certHelp"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Validate
            </button>
            <p id="certHelp" className="col-span-full text-xs text-slate-600">
              Format: CDPL-AAA-2025-XXXXX or CDPL-ACTD-2025-XXXXX (letters & numbers).
            </p>
          </form>

          <div className="mt-5">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {result && (
              <div className="grid gap-4 rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50/60 to-orange-100/40 p-4 sm:grid-cols-5">
                <div className="sm:col-span-2">
                  <CertificationPreviewSection cert={result} />
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-lg font-extrabold">
                    {result.program} Certificate — {result.status}
                  </h3>

                  <dl className="mt-3 grid grid-cols-1 gap-1 text-sm text-slate-800 sm:grid-cols-2">
                    <div>
                      <dt className="font-semibold">Certificate ID</dt>
                      <dd className="break-all">{result.id}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Issued on</dt>
                      <dd>{new Date(result.issuedOn).toLocaleDateString("en-IN")}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Holder</dt>
                      <dd>{result.holder}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Shareable link</dt>
                      <dd className="truncate">
                        <Link
                          href={shareUrl ?? "#"}
                          className="text-slate-900 underline underline-offset-4"
                        >
                          {shareUrl}
                        </Link>
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-xs text-slate-700">
                    This verification is provided by CDPL (Cinute Digital Pvt. Ltd.). If you suspect misuse,{" "}
                    <Link href="/contact-us" className="underline underline-offset-4">
                      contact CDPL support
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="sr-only">
          Validate CDPL AAA and ACTD certificates using their unique IDs.
        </p>
      </div>
    </section>
  );
}
