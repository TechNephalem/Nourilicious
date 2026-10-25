"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="bg-[#173526] text-[#FBF7EF] px-4 py-2.5 text-xs sm:text-sm border-b border-white/10"
      role="region"
      aria-label="Announcement"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 mx-auto text-center">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[#73966B] shrink-0"
            aria-hidden="true"
          />
          <p className="font-medium">
            Nourilicious Brand Preview: Introducing Protein-Enriched Chapathi Flour &amp; Protein Cookies —{" "}
            <Link
              href="/contact?type=retail"
              className="underline font-semibold text-white hover:text-[#F0E6D5] transition-colors"
            >
              Register for product availability &amp; trade enquiries
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-[#FBF7EF]/70 hover:text-white p-1 rounded transition-colors focus:outline-none"
          aria-label="Dismiss announcement bar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
