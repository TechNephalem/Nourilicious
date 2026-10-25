"use client";

import { useState } from "react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

const cookiesGallery = [
  {
    src: "/images/cookies-product.jpg",
    alt: "Golden-brown Nourilicious Protein Cookies stacked beside minimal stand-up pouch",
    caption: "Pouch & Cookie Stack",
  },
  {
    src: "/images/lifestyle-snack.jpg",
    alt: "Two crisp protein cookies on a ceramic plate beside hot masala chai on a wooden work desk",
    caption: "Chai-Time Pairing",
  },
  {
    src: "/images/hero-composition.jpg",
    alt: "Crisp baked edges and appetizing crumb texture of Nourilicious protein cookies",
    caption: "Artisanal Crumb & Texture",
  },
];

const packOptions = [
  { size: "Pack of 6", desc: "Single week trial & on-the-go snack pouch" },
  { size: "Pack of 12", desc: "Most popular household & desk pantry size" },
  { size: "Pantry Box (24)", desc: "Best value bundle for active families & offices" },
];

export default function ProteinCookiesPage() {
  const [selectedPack, setSelectedPack] = useState("Pack of 12");

  return (
    <div className="bg-[#FBF7EF] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#F0E6D5]/50 border-b border-[#282C27]/10 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-[#6B7068]">
          <Link href="/" className="hover:text-[#244B37] font-medium transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-[#244B37] font-medium transition-colors">
            Our Products
          </Link>
          <span>/</span>
          <span className="text-[#282C27] font-semibold">Nourilicious Protein Cookies</span>
        </div>
      </div>

      {/* Main Product Hero */}
      <section className="py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery (Left 6 Cols) */}
          <div className="lg:col-span-6">
            <ProductGallery images={cookiesGallery} />
          </div>

          {/* Details (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#C8784D] text-white text-xs font-heading font-bold uppercase tracking-wider">
                  Mindful Snacking
                </span>
                <span className="px-3 py-1 rounded-full bg-[#C8784D]/15 text-[#C8784D] text-xs font-semibold">
                  High Protein • Baked Crisp
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
                Nourilicious Protein Cookies
              </h1>
              <p className="text-base text-[#6B7068] mt-2 leading-relaxed">
                Crunchy, golden-brown baked cookies packed with meaningful protein to power through workdays and satisfy
                afternoon sweet cravings without refined sugar spikes or chalky aftertaste.
              </p>
            </div>

            {/* Pack Size Selector */}
            <div className="space-y-2.5 pt-2 border-t border-[#282C27]/10">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27]">
                Select Pack Size: <span className="text-[#C8784D]">{selectedPack}</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {packOptions.map((p) => {
                  const isSelected = selectedPack === p.size;
                  return (
                    <button
                      key={p.size}
                      type="button"
                      onClick={() => setSelectedPack(p.size)}
                      className={`p-3 rounded-2xl border text-center transition-all focus:outline-none ${
                        isSelected
                          ? "bg-[#C8784D] text-white border-[#C8784D] shadow-sm font-bold"
                          : "bg-white text-[#282C27] border-[#282C27]/15 hover:border-[#C8784D]"
                      }`}
                    >
                      <span className="block text-sm sm:text-base font-heading">{p.size}</span>
                      <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-[#FBF7EF]" : "text-[#6B7068]"}`}>
                        Resealable Pouch
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Benefits Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-[#282C27]/10">
              <h3 className="font-heading font-bold text-sm text-[#282C27] uppercase tracking-wider">
                What Sets Our Cookies Apart
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7068]">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Satisfying Oven-Baked Crunch:</strong> Genuine cookie texture without dense, gummy protein bar chewiness.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Mindfully Balanced Sweetness:</strong> Rich flavor notes that pair harmoniously with tea, filter coffee, or milk.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Satiating Protein &amp; Fibre:</strong> Keeps hunger away between main meals without a post-snack energy slump.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>No Chemical Aftertaste:</strong> Crafted with natural flavours and wholesome whole grains.</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#282C27]/10">
              <Link
                href="/contact?type=retail"
                className="flex-1 py-4 px-6 rounded-2xl bg-[#C8784D] hover:bg-[#b5673d] text-white font-heading font-bold text-center text-sm shadow-md transition-all"
              >
                Register for Retail &amp; Wholesale Launch
              </Link>
              <Link
                href="/#nutrition"
                className="py-4 px-6 rounded-2xl bg-white hover:bg-[#F0E6D5] text-[#282C27] border border-[#282C27]/15 font-heading font-bold text-center text-sm transition-all"
              >
                View Nutrition Label
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Snacking Moments Section */}
      <section className="py-14 px-4 sm:px-8 bg-[#F0E6D5]/45 border-t border-[#282C27]/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#244B37]">
              IDEAL SNACKING MOMENTS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#282C27]">
              When to Enjoy Nourilicious Protein Cookies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#282C27]/10 space-y-3">
              <span className="text-2xl block">☕</span>
              <h3 className="font-heading font-bold text-lg text-[#282C27]">The 4 PM Chai Break</h3>
              <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
                Replace empty maida biscuits with 1–2 crisp protein cookies to beat late-afternoon workplace fatigue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-[#282C27]/10 space-y-3">
              <span className="text-2xl block">🚗</span>
              <h3 className="font-heading font-bold text-lg text-[#282C27]">Commute &amp; Travel Fuel</h3>
              <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
                Keep a resealable pouch in your backpack or car glove compartment for clean hunger relief on busy travel
                days.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-[#282C27]/10 space-y-3">
              <span className="text-2xl block">🏃</span>
              <h3 className="font-heading font-bold text-lg text-[#282C27]">Pre / Post Workout Energy</h3>
              <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
                A quick, digestible source of clean protein and complex carbohydrates 45 minutes before exercise or on the
                way home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
