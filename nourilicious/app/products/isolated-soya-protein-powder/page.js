"use client";

import { useState } from "react";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";

const soyaGallery = [
  {
    src: "/images/soya-protein-product.jpg",
    alt: "Nourilicious Isolated Soya Protein Powder stand-up pouch with wooden measuring scoop of pure plant isolate powder",
    caption: "Pouch & Measuring Scoop",
  },
  {
    src: "/images/hero-composition.jpg",
    alt: "Clean wholesome culinary ingredients and fine plant isolate powder",
    caption: "Fine Isolate Texture & Purity",
  },
  {
    src: "/images/lifestyle-meal.jpg",
    alt: "Everyday kitchen cooking: blend into chapathi dough, homestyle dal, and breakfast dishes",
    caption: "Versatile Daily Cooking",
  },
];

const packSizes = [
  { size: "500 g", desc: "Introductory pouch pack (~17 servings)" },
  { size: "1 kg", desc: "Most popular size for active daily routines (~33 servings)" },
  { size: "2 kg", desc: "Value pantry pouch for active households (~66 servings)" },
];

export default function SoyaProteinPage() {
  const [selectedPack, setSelectedPack] = useState("1 kg");

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
          <span className="text-[#282C27] font-semibold">Nourilicious Isolated Soya Protein Powder</span>
        </div>
      </div>

      {/* Main Product Hero */}
      <section className="py-10 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Gallery (Left 6 Cols) */}
          <div className="lg:col-span-6">
            <ProductGallery images={soyaGallery} />
          </div>

          {/* Details (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#244B37] text-white text-xs font-heading font-bold uppercase tracking-wider">
                  90% Pure Plant Isolate
                </span>
                <span className="px-3 py-1 rounded-full bg-[#73966B]/15 text-[#244B37] text-xs font-semibold">
                  100% Vegan • Non-GMO • Unflavoured
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
                Nourilicious Isolated Soya Protein Powder
              </h1>
              <p className="text-base text-[#6B7068] mt-2 leading-relaxed">
                Ultra-pure 90% soy protein isolate powder, naturally processed without harsh chemicals or synthetic fillers.
                Completely unflavoured with zero added sugars, artificial sweeteners, or dairy. Effortlessly incorporates into
                everyday staples—from kneading into your chapathi dough to mixing into dals, shakes, gravies, and baking.
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
                Key Performance &amp; Culinary Highlights
              </h3>
              <ul className="space-y-2 text-sm text-[#6B7068]">
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>27g Bioavailable Protein per 30g Scoop:</strong> 90% protein concentration on dry basis with a complete amino acid profile (PDCAAS = 1.0).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>100% Unflavoured &amp; Neutral:</strong> Zero artificial sweeteners (no stevia, sucralose, or maltodextrin). Won&apos;t alter the taste of your cooking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Zero Sugar &amp; &lt;1g Net Carbs:</strong> Ideal for diabetic-friendly, low-carb, keto, vegetarian, and fitness-conscious lifestyles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-[#73966B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Instant Dissolution &amp; Smooth Blend:</strong> Naturally lecithin-treated with non-GMO sunflower lecithin for lump-free mixing in hot or cold preparations.</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#282C27]/10">
              <Link
                href="/contact?type=retail"
                className="flex-1 py-4 px-6 rounded-2xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-center text-sm shadow-md transition-all"
              >
                Register for Retail &amp; Bulk Orders
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

      {/* Culinary & Usage Guide Section */}
      <section className="py-14 px-4 sm:px-8 bg-[#F0E6D5]/45 border-t border-[#282C27]/10">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#244B37] block mb-1">
              CULINARY GUIDE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#282C27]">
              4 Effortless Ways to Use Isolated Soya Protein in Everyday Meals
            </h2>
            <p className="text-sm text-[#6B7068] mt-2">
              Unlike flavored fitness whey powders that are confined to shaker cups, our pure unflavoured isolate seamlessly integrates into genuine cooking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#282C27]/10 space-y-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#244B37] text-white flex items-center justify-center font-bold text-sm font-heading mb-3">
                  01
                </div>
                <h3 className="font-heading font-bold text-lg text-[#282C27]">Chapathi &amp; Dough</h3>
                <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed mt-2">
                  Add 1 level scoop (30g) per 2 cups of your regular wheat flour or Nourilicious mix. Knead with lukewarm water as usual.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#244B37] bg-[#F0E6D5] px-2.5 py-1 rounded-lg w-fit">
                +27g Protein to Dough
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#282C27]/10 space-y-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C8784D] text-white flex items-center justify-center font-bold text-sm font-heading mb-3">
                  02
                </div>
                <h3 className="font-heading font-bold text-lg text-[#282C27]">Dals &amp; Soups</h3>
                <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed mt-2">
                  Mix 1 scoop with 3 tablespoons of warm water to create a slurry. Stir into simmering dal or vegetable soup 2 minutes before serving.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#C8784D] bg-[#F0E6D5] px-2.5 py-1 rounded-lg w-fit">
                Zero Clumping Slurry
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#282C27]/10 space-y-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#73966B] text-white flex items-center justify-center font-bold text-sm font-heading mb-3">
                  03
                </div>
                <h3 className="font-heading font-bold text-lg text-[#282C27]">Smoothies &amp; Oats</h3>
                <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed mt-2">
                  Blend 1 scoop with chilled plant milk, seasonal fruits, cocoa, or warm morning oatmeal porridge for a dairy-free morning breakfast.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#244B37] bg-[#F0E6D5] px-2.5 py-1 rounded-lg w-fit">
                100% Lactose-Free
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#282C27]/10 space-y-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#173526] text-white flex items-center justify-center font-bold text-sm font-heading mb-3">
                  04
                </div>
                <h3 className="font-heading font-bold text-lg text-[#282C27]">Batters &amp; Baking</h3>
                <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed mt-2">
                  Stir 1 scoop into idli/dosa batter, besan chilla batter, or replace up to 20% of flour in homemade cookies, muffins, and breads.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#244B37] bg-[#F0E6D5] px-2.5 py-1 rounded-lg w-fit">
                Heat-Stable Nutrition
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

