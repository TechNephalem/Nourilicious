"use client";

import { useState } from "react";
import Link from "next/link";

const nutritionData = {
  flour: {
    name: "Protein Chapathi Flour",
    serving: "Serving Size: 50g (approx. 2 chapathis) | Servings per 1kg Pack: 20",
    ingredients:
      "Whole Wheat Flour (Premium Sharbati Gehun), Isolated Plant Protein Blend (Pea Protein, Soy Protein Isolate), Whole Grain Dietary Fibre.",
    allergens:
      "Contains Wheat (Gluten), Soy. Produced in a clean, certified facility following strict cross-contact and allergen control protocols.",
    storage:
      "Store in a cool, dry, hygienic place away from direct sunlight. Once opened, transfer contents to an airtight container to preserve freshness.",
    route: "/products/protein-chapathi-flour",
    badge: "100% Whole Wheat Base",
    highlights: [
      { label: "Target Protein", value: "15g per 2 Chapathis" },
      { label: "Dietary Fibre", value: "High Fibre (6.5g)" },
      { label: "Texture & Softness", value: "Tender, Rollable, Pliable" },
      { label: "Formulation", value: "100% Vegetarian, No Maida" },
    ],
  },
  cookies: {
    name: "Protein Cookies",
    serving: "Serving Size: 30g (1 cookie) | Servings per Pack: 12",
    ingredients:
      "Whole Grain Wheat Flour, Rolled Oats, Plant Protein Blend (Pea Protein, Whey Protein Isolate), Cold-Pressed Vegetable Oil, Unrefined Cane Sugar, Cocoa / Natural Flavours, Baking Powder, Sea Salt.",
    allergens:
      "Contains Milk, Wheat (Gluten), Oats. May contain traces of tree nuts and soy.",
    storage:
      "Store in a cool, dry place away from direct sunlight. Reseal pouch tightly after opening to maintain authentic oven-baked cookie crispness.",
    route: "/products/protein-cookies",
    badge: "Oven-Baked Crisp",
    highlights: [
      { label: "Target Protein", value: "10g per Cookie" },
      { label: "Bake Profile", value: "Golden-Brown, Crisp Crumb" },
      { label: "Sweetness", value: "Mindfully Balanced" },
      { label: "Ideal For", value: "Chai-Time, Workday & Commute" },
    ],
  },
};

export default function NutritionTransparency() {
  const [activeTab, setActiveTab] = useState("flour");
  const current = nutritionData[activeTab];

  return (
    <section id="nutrition" className="py-16 sm:py-20 px-4 sm:px-8 bg-[#FBF7EF] border-t border-[#282C27]/10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D] block mb-2">
            HONEST &amp; TRANSPARENT
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
            Nutrition Transparency &amp; Quality Ingredients
          </h2>
          <p className="text-base text-[#6B7068] mt-3 leading-relaxed">
            We believe you deserve exact, truthful nutrition without misleading marketing claims. Clean ingredients,
            bioavailable plant proteins, and honest allergen disclosures on every pack.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 bg-[#F0E6D5]/60 p-1.5 rounded-2xl w-fit" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "flour"}
            onClick={() => setActiveTab("flour")}
            className={`px-5 py-2.5 rounded-xl text-sm font-heading font-bold transition-all ${
              activeTab === "flour"
                ? "bg-[#244B37] text-white shadow-sm"
                : "text-[#282C27] hover:text-[#244B37] hover:bg-white/50"
            }`}
          >
            Protein Chapathi Flour
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "cookies"}
            onClick={() => setActiveTab("cookies")}
            className={`px-5 py-2.5 rounded-xl text-sm font-heading font-bold transition-all ${
              activeTab === "cookies"
                ? "bg-[#244B37] text-white shadow-sm"
                : "text-[#282C27] hover:text-[#244B37] hover:bg-white/50"
            }`}
          >
            Protein Cookies
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#282C27]/10 shadow-lg space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#282C27]/10 pb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#73966B]/15 text-[#244B37] text-xs font-semibold mb-2">
                {current.badge}
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#282C27]">{current.name}</h3>
              <p className="text-xs sm:text-sm text-[#6B7068] mt-1 font-mono">{current.serving}</p>
            </div>
            <Link
              href={current.route}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-semibold text-sm transition-colors self-start md:self-auto"
            >
              View Full Product Page →
            </Link>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {current.highlights.map((h, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#F0E6D5]/40 border border-[#282C27]/5">
                <span className="text-xs font-heading font-semibold text-[#6B7068] uppercase tracking-wider block">
                  {h.label}
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#244B37] mt-1 block">
                  {h.value}
                </span>
              </div>
            ))}
          </div>

          {/* Ingredient & Allergen Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#FBF7EF] border border-[#282C27]/10 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C8784D] block">
                Full Ingredient Statement
              </span>
              <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">{current.ingredients}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FBF7EF] border border-[#282C27]/10 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#C8784D] block">
                Allergen &amp; Cross-Contact Declarations
              </span>
              <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">{current.allergens}</p>
            </div>
          </div>

          {/* Storage note */}
          <div className="p-4 rounded-xl bg-[#F0E6D5]/30 border border-[#282C27]/5 flex items-start gap-3 text-xs text-[#6B7068]">
            <svg className="w-4 h-4 text-[#73966B] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Storage Instructions:</strong> {current.storage}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
