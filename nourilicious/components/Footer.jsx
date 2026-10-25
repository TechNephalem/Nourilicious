"use client";

import { useState } from "react";
import Link from "next/link";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("privacy");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-[#173526] text-[#FBF7EF] border-t border-white/10 pt-14 pb-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 (4 Cols): Logo & Brand Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#244B37] border border-white/15 flex items-center justify-center text-[#FBF7EF]">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path
                    d="M16 5C16 5 10 11 10 18.5C10 22.6421 12.6863 26 16 26C19.3137 26 22 22.6421 22 18.5C22 11 16 5 16 5Z"
                    stroke="#FBF7EF"
                    strokeWidth="2"
                  />
                  <path d="M16 11V26" stroke="#C8784D" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Nourilicious
              </span>
            </div>
            <p className="text-sm text-[#F0E6D5]/80 leading-relaxed max-w-sm">
              Everyday Nutrition. Deliciously Made. Bringing protein-enriched chapathi flour and delicious protein cookies to
              familiar Indian meals and daily routines.
            </p>
            <p className="text-xs text-[#F0E6D5]/60">
              Core Brand Promise: Nourishment meets deliciousness.
            </p>
          </div>

          {/* Col 2 (2 Cols): Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C8784D]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#F0E6D5]/85">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-white transition-colors">
                  Why Nourilicious
                </Link>
              </li>
              <li>
                <Link href="/#nutrition" className="hover:text-white transition-colors">
                  Nutrition Transparency
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 Cols): Product & Partnership Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C8784D]">
              Products &amp; Partnerships
            </h3>
            <ul className="space-y-2 text-sm text-[#F0E6D5]/85">
              <li>
                <Link href="/products/protein-chapathi-flour" className="hover:text-white transition-colors">
                  Protein Chapathi Flour
                </Link>
              </li>
              <li>
                <Link href="/products/protein-cookies" className="hover:text-white transition-colors">
                  Protein Cookies
                </Link>
              </li>
              <li>
                <Link href="/contact?type=retail" className="hover:text-white transition-colors">
                  Retail &amp; Grocery Enquiries
                </Link>
              </li>
              <li>
                <Link href="/contact?type=distribution" className="hover:text-white transition-colors">
                  Become a Distributor
                </Link>
              </li>
              <li>
                <Link href="/contact?type=bulk" className="hover:text-white transition-colors">
                  Gyms, Cafés &amp; Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 Cols): Contact Information & Headquarters */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#C8784D]">
              Contact &amp; Headquarters
            </h3>
            <div className="text-xs text-[#F0E6D5]/80 space-y-2 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:hello@nourilicious.in" className="hover:text-white underline">
                  hello@nourilicious.in
                </a>
              </p>
              <p>
                <strong className="text-white">Trade Desk:</strong>{" "}
                <a href="mailto:trade@nourilicious.in" className="hover:text-white underline">
                  trade@nourilicious.in
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +91 (0) 80 4123 4567
              </p>
              <p>
                <strong className="text-white">Headquarters:</strong> Nourilicious Foods Pvt. Ltd., Indiranagar, Bengaluru - 560038, Karnataka, India
              </p>
              <p>
                <strong className="text-white">Socials:</strong> @nouriliciousfoods
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0E6D5]/70">
          <p>© 2026 Nourilicious Foods Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => openModal("privacy")}
              className="hover:text-white underline focus:outline-none"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => openModal("terms")}
              className="hover:text-white underline focus:outline-none"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </footer>

      {/* Accessible Modal */}
      <LegalModal isOpen={modalOpen} onClose={() => setModalOpen(false)} modalType={modalType} />
    </>
  );
}
