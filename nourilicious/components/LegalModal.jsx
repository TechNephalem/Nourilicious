"use client";

import { useEffect } from "react";

export default function LegalModal({ isOpen, onClose, modalType }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = modalType === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF7EF] text-[#282C27] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#282C27]/15 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#282C27]/10 pb-3">
          <h2 id="legal-modal-title" className="font-heading font-extrabold text-xl text-[#282C27]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#F0E6D5] text-[#282C27] hover:bg-[#244B37] hover:text-white transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="text-sm text-[#6B7068] leading-relaxed space-y-3">
          <p>
            Welcome to Nourilicious (operated by Nourilicious Foods Private Limited, Registered Office: Door No. 2/462/1, Edayanallur, Mathigiri, Nagondapalli, Hosur, Krishnagiri – 635110, Tamil Nadu, India). We are dedicated to providing wholesome, high-quality, protein-enriched staple foods and snacks.
          </p>
          <p>
            {isPrivacy
              ? "We respect your personal privacy. All customer enquiry details, wholesale requests, and contact submissions collected through this website are used solely to communicate regarding our products, orders, and retail partnerships. We never sell, rent, or distribute your information to external advertisers."
              : "All product specifications, nutritional values, serving sizes, and shelf-life recommendations are developed under strict quality assurance standards. Trade partners and retail purchasers agree to store and handle food products in accordance with certified temperature and hygiene instructions."}
          </p>
          <p className="text-xs text-[#244B37] font-medium">
            For legal or corporate governance questions, please write to legal@nourilicious.in.
          </p>
        </div>
        <div className="pt-2 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#244B37] text-white font-heading font-bold text-xs hover:bg-[#173526] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
