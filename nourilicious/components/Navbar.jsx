"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isProducts = pathname.startsWith("/products");

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF7EF]/95 backdrop-blur-md border-b border-[#282C27]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-2 group focus:outline-none py-1"
          aria-label="Nourilicious Foods Private Limited - Home"
        >
          <div className="relative h-12 w-40 sm:h-14 sm:w-48 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/images/logo-full.png"
              alt="Nourilicious Foods Private Limited"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary Navigation">
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
              isHome
                ? "text-[#244B37] bg-[#F0E6D5]/70 font-semibold"
                : "text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50"
            }`}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
                isProducts
                  ? "text-[#244B37] bg-[#F0E6D5]/70 font-semibold"
                  : "text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50"
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>Our Products</span>
              <svg className="w-3.5 h-3.5 opacity-75" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`transition-all duration-200 absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-[#282C27]/10 p-2 z-50 ${
                dropdownOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                href="/products/protein-chapathi-mix"
                className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#FBF7EF] transition-colors flex items-start gap-3 group"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#244B37] mt-1.5 shrink-0"></span>
                <div>
                  <span className="block text-sm font-heading font-bold text-[#282C27] group-hover:text-[#244B37]">
                    Protein Chapathi Mix
                  </span>
                  <span className="block text-xs text-[#6B7068]">Enriched mix for soft daily rotis</span>
                </div>
              </Link>
              <Link
                href="/products/protein-cookies"
                className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#FBF7EF] transition-colors flex items-start gap-3 group mt-1"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8784D] mt-1.5 shrink-0"></span>
                <div>
                  <span className="block text-sm font-heading font-bold text-[#282C27] group-hover:text-[#C8784D]">
                    Protein Cookies
                  </span>
                  <span className="block text-xs text-[#6B7068]">Crisp crunch for mindful snack breaks</span>
                </div>
              </Link>
              <Link
                href="/products/isolated-soya-protein-powder"
                className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#FBF7EF] transition-colors flex items-start gap-3 group mt-1"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#73966B] mt-1.5 shrink-0"></span>
                <div>
                  <span className="block text-sm font-heading font-bold text-[#282C27] group-hover:text-[#73966B]">
                    Isolated Soya Protein Powder
                  </span>
                  <span className="block text-xs text-[#6B7068]">90% pure plant isolate for everyday meals</span>
                </div>
              </Link>
            </div>
          </div>

          <Link
            href="/#why"
            className="px-3.5 py-2 rounded-xl text-sm font-medium text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50 transition-colors"
          >
            Why Nourilicious
          </Link>
          <Link
            href="/#nutrition"
            className="px-3.5 py-2 rounded-xl text-sm font-medium text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50 transition-colors"
          >
            Nutrition
          </Link>
          <Link
            href="/about"
            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
              pathname === "/about"
                ? "text-[#244B37] bg-[#F0E6D5]/70 font-semibold"
                : "text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
              pathname === "/contact"
                ? "text-[#244B37] bg-[#F0E6D5]/70 font-semibold"
                : "text-[#282C27] hover:text-[#244B37] hover:bg-[#F0E6D5]/50"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA & Mobile Drawer Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#products"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-semibold text-sm shadow-sm transition-all"
          >
            Explore Products
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F0E6D5] text-[#244B37] hover:bg-[#244B37] hover:text-white transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#282C27]/10 bg-[#FBF7EF] px-4 pt-3 pb-6 space-y-2 shadow-inner">
          <Link
            href="/"
            onClick={closeMobile}
            className="w-full block px-4 py-3 rounded-xl font-heading font-semibold text-base text-[#244B37] bg-[#F0E6D5]/60"
          >
            Home
          </Link>
          <div className="pl-3 space-y-1 border-l-2 border-[#244B37]/20 ml-2">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#6B7068] px-2 py-1">
              Our Products
            </p>
            <Link
              href="/products/protein-chapathi-mix"
              onClick={closeMobile}
              className="w-full block px-3 py-2 rounded-lg text-sm font-semibold text-[#282C27] hover:bg-[#F0E6D5]/50"
            >
              • Protein Chapathi Mix
            </Link>
            <Link
              href="/products/protein-cookies"
              onClick={closeMobile}
              className="w-full block px-3 py-2 rounded-lg text-sm font-semibold text-[#282C27] hover:bg-[#F0E6D5]/50"
            >
              • Protein Cookies
            </Link>
            <Link
              href="/products/isolated-soya-protein-powder"
              onClick={closeMobile}
              className="w-full block px-3 py-2 rounded-lg text-sm font-semibold text-[#282C27] hover:bg-[#F0E6D5]/50"
            >
              • Isolated Soya Protein Powder
            </Link>
          </div>
          <Link
            href="/#why"
            onClick={closeMobile}
            className="w-full block px-4 py-3 rounded-xl font-heading font-medium text-base text-[#282C27] hover:bg-[#F0E6D5]/50"
          >
            Why Nourilicious
          </Link>
          <Link
            href="/#nutrition"
            onClick={closeMobile}
            className="w-full block px-4 py-3 rounded-xl font-heading font-medium text-base text-[#282C27] hover:bg-[#F0E6D5]/50"
          >
            Nutrition Transparency
          </Link>
          <Link
            href="/about"
            onClick={closeMobile}
            className="w-full block px-4 py-3 rounded-xl font-heading font-medium text-base text-[#282C27] hover:bg-[#F0E6D5]/50"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={closeMobile}
            className="w-full block px-4 py-3 rounded-xl font-heading font-medium text-base text-[#282C27] hover:bg-[#F0E6D5]/50"
          >
            Contact &amp; Business Enquiries
          </Link>
          <div className="pt-2">
            <Link
              href="/#products"
              onClick={closeMobile}
              className="w-full block py-3.5 rounded-xl bg-[#244B37] text-white font-heading font-bold text-center shadow-sm"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
