"use client";

import { useState } from "react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

const mixGallery = [
  {
    src: "/images/flour-product.jpg",
    alt: "Nourilicious Protein Chapathi Mix stand-up pouch with wooden bowl of flour mix and hot cooked chapathis",
    caption: "Pouch & Table Presentation",
  },
  {
    src: "/images/lifestyle-meal.jpg",
    alt: "Freshly cooked chapathis served with dal and homestyle vegetables on a warm family dining table",
    caption: "Home Meal Serving Idea",
  },
  {
    src: "/images/hero-composition.jpg",
    alt: "Finely milled chapathi mix texture and freshly stacked rotis on a kitchen linen towel",
    caption: "Mix Texture & Soft Roti Stack",
  },
];

const packSizes = [
  { size: "1 kg", desc: "Ideal for individuals & small households (~20 rotis)" },
  { size: "2 kg", desc: "Most popular for everyday family cooking (~40 rotis)" },
  { size: "5 kg", desc: "Pantry saver pack for weekly household routines (~100 rotis)" },
];

export default function ChapathiMixPage() {
  const [selectedPack, setSelectedPack] = useState("2 kg");

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
          <span className="text-[#282C27] font-semibold">Nourilicious Protein Chapathi Mix</span>
        </div>
      </div>

      {/* Main Product Hero */}
      <section className="py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery (Left 6 Cols) */}
          <div className="lg:col-span-6">
            <ProductGallery images={mixGallery} />
          </div>

          {/* Details (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#244B37] text-white text-xs font-heading font-bold uppercase tracking-wider">
                  Everyday Kitchen Staple
                </span>
                <span className="px-3 py-1 rounded-full bg-[#73966B]/15 text-[#244B37] text-xs font-semibold">
                  100% Vegetarian • High Fibre
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
                Nourilicious Protein Chapathi Mix
              </h1>
              <p className="text-base text-[#6B7068] mt-2 leading-relaxed">
                Thoughtfully formulated whole grain flour mix enriched with clean plant proteins to give your family higher
                nourishment in every single roti without sacrificing authentic soft texture or taste.
              </p>
            </div>

            {/* Pack Size Selector */}
            <div className="space-y-2.5 pt-2 border-t border-[#282C27]/10">
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27]">
                Select Pack Size: <span className="text-[#244B37]">{selectedPack}</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {packSizes.map((p) => {
                  const isSelected = selectedPack === p.size;
                  return (
                    <button
                      key={p.size}
                      type="button"
                      onClick={() => setSelectedPack(p.size)}
                      className={`p-3 rounded-2xl border text-center transition-all focus:outline-none ${
                        isSelected
                          ? "bg-[#244B37] text-white border-[#244B37] shadow-sm font-bold"
                          : "bg-white text-[#282C27] border-[#282C27]/15 hover:border-[#244B37]"
                      }`}
                    >
                      <span className="block text-base font-heading">{p.size}</span>
                      <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-[#F0E6D5]" : "text-[#6B7068]"}`}>
                        Pouch Pack
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Benefits Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-[#282C27]/10">
              <h3 className="font-heading font-bold text-sm text-[#282C27] uppercase tracking-wider">
                Why Families Love It
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7068]">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Higher Protein per Roti:</strong> Delivers 15g protein per 2 chapathis to bridge daily dietary protein deficits naturally.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Soft &amp; Rollable Dough:</strong> Kneads effortlessly with lukewarm water and rolls without tearing or cracking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Stays Soft for Hours:</strong> Perfect for office tiffins, school lunchboxes, and warm evening dinners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>100% Clean Formulation:</strong> Sharbati whole wheat base, isolated pea and soy protein, no maida, and zero artificial softeners.</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#282C27]/10">
              <Link
                href="/contact?type=retail"
                className="flex-1 py-4 px-6 rounded-2xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-center text-sm shadow-md transition-all"
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

      {/* Culinary Guide & Pairing Section */}
      <section className="py-14 px-4 sm:px-8 bg-[#F0E6D5]/45 border-t border-[#282C27]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kneading Guide */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#282C27]/10 space-y-4">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#244B37]">
              CULINARY TIP
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#282C27]">
              How to Make the Softest Protein Chapathis
            </h3>
            <ol className="space-y-3 text-sm text-[#6B7068] list-decimal list-inside leading-relaxed">
              <li>
                <strong>Lukewarm Water:</strong> Mix 2 cups of Nourilicious Protein Chapathi Mix with 1 cup of lukewarm water and a pinch of salt.
              </li>
              <li>
                <strong>Rest the Dough:</strong> Knead until smooth and pliable. Let the dough rest covered for 10–15 minutes to hydrate the plant proteins and dietary fibres thoroughly.
              </li>
              <li>
                <strong>Gentle Rolling:</strong> Dust lightly with dry mix and roll with even, gentle strokes from center to edge.
              </li>
              <li>
                <strong>Hot Tawa:</strong> Place onto a well-heated tawa. Cook for 20 seconds, flip, press lightly with a clean cloth until it puffs into golden perfection.
              </li>
            </ol>
          </div>

          {/* Wholesome Pairings */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#282C27]/10 space-y-4">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              SERVING INSPIRATION
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#282C27]">
              Wholesome Meal Pairings
            </h3>
            <div className="space-y-3 text-sm text-[#6B7068]">
              <div className="p-3.5 rounded-xl bg-[#FBF7EF] border border-[#282C27]/5">
                <strong className="text-[#282C27] block">Homestyle Dal Tadka &amp; Ghee:</strong>
                <span className="text-xs">
                  Combines complementary amino acids from lentils and grains for a wholesome complete protein meal.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FBF7EF] border border-[#282C27]/5">
                <strong className="text-[#282C27] block">Paneer Bhurji / Soya Matar:</strong>
                <span className="text-xs">
                  A high-protein lunchbox champion providing sustained energy throughout your afternoon.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FBF7EF] border border-[#282C27]/5">
                <strong className="text-[#282C27] block">Mixed Seasonal Vegetable Korma:</strong>
                <span className="text-xs">
                  Loaded with micronutrients, dietary fibre, and authentic comforting flavors.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

