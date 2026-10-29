import Image from "next/image";
import Link from "next/link";
import NutritionTransparency from "@/components/NutritionTransparency";
import FaqAccordion from "@/components/FaqAccordion";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": "https://nourilicious.in/#product-list",
      name: "Nourilicious Flagship Nutrition Products",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Nourilicious Protein Chapathi Mix",
          url: "https://nourilicious.in/products/protein-chapathi-mix",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Nourilicious Protein Cookies",
          url: "https://nourilicious.in/products/protein-cookies",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Nourilicious Isolated Soya Protein Powder",
          url: "https://nourilicious.in/products/isolated-soya-protein-powder",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://nourilicious.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Nourilicious?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nourilicious is an everyday nutrition brand dedicated to making good food with smarter nutritional value. Our core philosophy is 'Nourishment meets deliciousness.' We formulate everyday foods and versatile ingredients—Protein Chapathi Mix, Protein Cookies, and Isolated Soya Protein Powder—so individuals and families can enjoy balanced nutrition without overhauling their daily eating habits.",
          },
        },
        {
          "@type": "Question",
          name: "How is Nourilicious Protein Chapathi Mix different from regular wheat atta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular whole wheat atta generally provides only about 10–12% protein. Nourilicious Protein Chapathi Mix is mindfully enriched with clean plant-based proteins to deliver 15g protein per 2 chapathis while preserving the soft texture, natural puff, and familiar comforting taste of home-cooked rotis.",
          },
        },
        {
          "@type": "Question",
          name: "How do I use Nourilicious Isolated Soya Protein Powder in everyday cooking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike flavored gym supplements, Nourilicious Isolated Soya Protein Powder is 100% unflavoured, pure 90% isolate, and unsweetened. You can knead 1 scoop (30g) directly into your chapathi dough to boost any flour, stir a smooth slurry into simmering dals or soups, blend into morning smoothies, or add to idli/dosa and baking batters without changing their authentic taste.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Nourilicious Protein Cookies different from ordinary snack biscuits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard tea-time biscuits and cookies are typically loaded with refined maida, hydrogenated fats, and excess sugar while offering negligible protein. Nourilicious Protein Cookies combine satisfying golden-brown crispness with 10g bioavailable protein per cookie, making them ideal for tea breaks, desk snacks, and travel.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Nourilicious Foods Private Limited located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nourilicious Foods Private Limited is registered at Door No. 2/462/1, Edayanallur, Mathigiri, Nagondapalli, Hosur, Krishnagiri – 635110, Tamil Nadu, India.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org FAQ & Product List for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 border-b border-[#282C27]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E6D5] border border-[#244B37]/15">
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/images/logo-icon.png"
                  alt="Nourilicious Emblem"
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#244B37]">
                GOOD FOOD. SMARTER NUTRITION.
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-[#282C27] leading-[1.12] tracking-tight">
              Everyday Nutrition.{" "}
              <span className="text-[#244B37] font-editorial italic font-normal">Deliciously</span> Made.
            </h1>

            <p className="text-base sm:text-lg text-[#6B7068] leading-relaxed max-w-xl">
              Discover protein-enriched chapathi mix, delicious protein cookies, and pure isolated soya protein powder,
              thoughtfully designed to bring more nourishment to your everyday food choices without compromising on familiar taste.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/#products"
                className="px-7 py-4 rounded-2xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-base shadow-md hover:shadow-lg transition-all text-center"
              >
                Explore Our Products
              </Link>
              <Link
                href="/about"
                className="px-7 py-4 rounded-2xl bg-white hover:bg-[#F0E6D5] text-[#244B37] border-2 border-[#244B37]/20 font-heading font-bold text-base transition-all text-center"
              >
                Discover Our Story
              </Link>
            </div>

            {/* Supporting line */}
            <div className="flex items-center gap-2.5 pt-1 text-sm text-[#6B7068]">
              <svg className="w-5 h-5 text-[#73966B] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Made for everyday Indian meals and mindful snacking breaks.</span>
            </div>
          </div>

          {/* Right Column: Hero Food Composition Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#F0E6D5] p-3 sm:p-5 shadow-xl border border-[#282C27]/10 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FBF7EF]">
                <Image
                  src="/images/hero-composition.jpg"
                  alt="A rustic ceramic bowl of finely milled chapathi flour beside warm freshly cooked golden-brown chapathis on a linen cloth and textured golden-brown protein cookies on a plate in warm natural daylight"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover card-zoom-img"
                />
              </div>
              {/* Badge floating */}
              <div className="absolute -bottom-3 right-6 sm:right-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#282C27]/10 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#73966B] animate-pulse"></span>
                <span className="font-heading font-bold text-xs text-[#282C27]">
                  Staple Food + Mindful Snack
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRUST AND BRAND PILLARS STRIP                             */}
      {/* ========================================================= */}
      <section className="bg-[#F0E6D5]/75 border-b border-[#282C27]/10 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#244B37]">
              <svg className="w-5 h-5 text-[#C8784D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="font-heading font-bold text-base text-[#282C27]">Everyday Nutrition</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
              Enriched nutrition woven into foods you already eat daily, not alien pills or powders.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#244B37]">
              <svg className="w-5 h-5 text-[#C8784D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="font-heading font-bold text-base text-[#282C27]">Natural Sourcing</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
              Wholesome ingredients with clean-label plant protein blends and high dietary fibre.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#244B37]">
              <svg className="w-5 h-5 text-[#C8784D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-heading font-bold text-base text-[#282C27]">Taste First</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
              Soft rotis that puff naturally and cookies baked with comforting, authentic crunch.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#244B37]">
              <svg className="w-5 h-5 text-[#C8784D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-heading font-bold text-base text-[#282C27]">Honest Transparency</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7068] leading-relaxed">
              Laboratory-tested nutritional metrics with zero deceptive health claims.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PRODUCT SHOWCASE SECTION                                  */}
      {/* ========================================================= */}
      <section id="products" className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F0E6D5]/40">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              OUR FLAGSHIP CREATIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#282C27] tracking-tight">
              Thoughtful Nutrition for Everyday Food Choices
            </h2>
            <p className="text-base sm:text-lg text-[#6B7068]">
              Explore our core product portfolio formulated to bridge the daily protein gap with familiar satisfaction.
            </p>
          </div>

          {/* 3-Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1: Protein Chapathi Mix */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#282C27]/10 shadow-lg hover:shadow-xl transition-all flex flex-col group">
              <div className="relative aspect-[16/11] bg-[#FBF7EF] overflow-hidden">
                <Image
                  src="/images/flour-product.jpg"
                  alt="Minimal kraft and forest-green stand-up pouch beside a wooden bowl of fine chapathi flour mix, rolling pin, and freshly cooked warm chapathis"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover card-zoom-img"
                />
                <div className="absolute top-4 left-4 bg-[#244B37] text-white text-xs font-heading font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Everyday Staple Food
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      15g Protein / 2 Rotis
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      Whole Wheat
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      Soft &amp; Puffy
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#282C27]">
                    Nourilicious Protein Chapathi Mix
                  </h3>
                  <p className="text-sm text-[#6B7068] leading-relaxed">
                    Designed to replace ordinary atta seamlessly. Delivers meaningful protein enrichment while rolling out
                    smoothly, puffing on the tawa, and staying soft for family lunchboxes and warm dinners.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#282C27]/10">
                  <div className="flex items-center justify-between text-xs text-[#6B7068]">
                    <span>Packs: <strong>1 kg • 2 kg • 5 kg</strong></span>
                    <span className="text-[#244B37] font-semibold">Clean-Label Formula</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    <Link
                      href="/products/protein-chapathi-mix"
                      className="px-4 py-3 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-sm text-center transition-colors shadow-sm"
                    >
                      View Product Details →
                    </Link>
                    <Link
                      href="/contact?type=retail"
                      className="px-4 py-2.5 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors"
                    >
                      Trade &amp; Retail Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 2: Protein Cookies */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#282C27]/10 shadow-lg hover:shadow-xl transition-all flex flex-col group">
              <div className="relative aspect-[16/11] bg-[#FBF7EF] overflow-hidden">
                <Image
                  src="/images/cookies-product.jpg"
                  alt="Golden-brown artisanal protein cookies with crisp edges stacked beside an unbranded matte beige and forest-green stand-up pouch"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover card-zoom-img"
                />
                <div className="absolute top-4 left-4 bg-[#C8784D] text-white text-xs font-heading font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Mindful Snacking
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      10g Protein / Cookie
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      Artisanal Crunch
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      Chai Companion
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#282C27]">
                    Nourilicious Protein Cookies
                  </h3>
                  <p className="text-sm text-[#6B7068] leading-relaxed">
                    Golden-brown baked protein cookies that turn your afternoon chai break, desk snacking, or commute into a
                    nourishing moment. Sweetened with balance and baked without heavy grease or chalkiness.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#282C27]/10">
                  <div className="flex items-center justify-between text-xs text-[#6B7068]">
                    <span>Packs: <strong>6 pk • 12 pk • Pantry Box</strong></span>
                    <span className="text-[#C8784D] font-semibold">High Protein Snack</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    <Link
                      href="/products/protein-cookies"
                      className="px-4 py-3 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-sm text-center transition-colors shadow-sm"
                    >
                      View Product Details →
                    </Link>
                    <Link
                      href="/contact?type=retail"
                      className="px-4 py-2.5 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors"
                    >
                      Trade &amp; Retail Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Card 3: Isolated Soya Protein Powder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#282C27]/10 shadow-lg hover:shadow-xl transition-all flex flex-col group">
              <div className="relative aspect-[16/11] bg-[#FBF7EF] overflow-hidden">
                <Image
                  src="/images/soya-protein-product.jpg"
                  alt="Nourilicious Isolated Soya Protein Powder pouch in deep forest green and warm cream with wooden measuring scoop of pure plant protein"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover card-zoom-img"
                />
                <div className="absolute top-4 left-4 bg-[#73966B] text-white text-xs font-heading font-bold px-3 py-1.5 rounded-full shadow-sm">
                  90% Pure Plant Isolate
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      27g Protein / Scoop
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      0g Added Sugar
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#F0E6D5] text-[#244B37] text-xs font-semibold">
                      Unflavoured
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#282C27]">
                    Nourilicious Isolated Soya Protein Powder
                  </h3>
                  <p className="text-sm text-[#6B7068] leading-relaxed">
                    Pure 90% non-GMO soy protein isolate with zero added sugar and neutral taste. Easily mixes into chapathi
                    dough, dals, smoothies, and baking for an instant clean protein boost.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#282C27]/10">
                  <div className="flex items-center justify-between text-xs text-[#6B7068]">
                    <span>Packs: <strong>500 g • 1 kg • 2 kg</strong></span>
                    <span className="text-[#244B37] font-semibold">100% Vegan &amp; Non-GMO</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    <Link
                      href="/products/isolated-soya-protein-powder"
                      className="px-4 py-3 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-sm text-center transition-colors shadow-sm"
                    >
                      View Product Details →
                    </Link>
                    <Link
                      href="/contact?type=retail"
                      className="px-4 py-2.5 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors"
                    >
                      Trade &amp; Retail Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY NOURILICIOUS? SECTION                                 */}
      {/* ========================================================= */}
      <section id="why" className="py-16 sm:py-20 px-4 sm:px-8 bg-[#FBF7EF] border-t border-[#282C27]/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              WHY NOURILICIOUS?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#282C27] tracking-tight">
              Good Food Should Deliver Smarter Everyday Nutrition
            </h2>
            <p className="text-base sm:text-lg text-[#6B7068]">
              Most daily diets lack sufficient protein, while traditional supplements feel clinical and difficult to
              sustain. Nourilicious bridges this gap with foods you already love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F0E6D5]/40 p-7 rounded-3xl border border-[#282C27]/10 space-y-3 hover:bg-[#F0E6D5]/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#244B37] text-white flex items-center justify-center font-bold text-lg font-heading">
                01
              </div>
              <h3 className="font-heading font-bold text-xl text-[#282C27]">The Daily Protein Gap</h3>
              <p className="text-sm text-[#6B7068] leading-relaxed">
                Indian staple meals are rich in comfort but frequently low in bioavailable protein. We fortify everyday
                flour so each roti contributes more protein naturally.
              </p>
            </div>

            <div className="bg-[#F0E6D5]/40 p-7 rounded-3xl border border-[#282C27]/10 space-y-3 hover:bg-[#F0E6D5]/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#C8784D] text-white flex items-center justify-center font-bold text-lg font-heading">
                02
              </div>
              <h3 className="font-heading font-bold text-xl text-[#282C27]">Zero Habit Changes</h3>
              <p className="text-sm text-[#6B7068] leading-relaxed">
                No expensive specialty powders, shaker cups, or complicated diets. You knead the dough, roll the chapathis,
                and enjoy tea breaks exactly like you always have.
              </p>
            </div>

            <div className="bg-[#F0E6D5]/40 p-7 rounded-3xl border border-[#282C27]/10 space-y-3 hover:bg-[#F0E6D5]/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#73966B] text-white flex items-center justify-center font-bold text-lg font-heading">
                03
              </div>
              <h3 className="font-heading font-bold text-xl text-[#282C27]">Clean Formulation</h3>
              <p className="text-sm text-[#6B7068] leading-relaxed">
                Carefully selected grains, plant protein sources, and dietary fibre. Free from artificial fillers, deceptive
                gimmicks, or unverified label claims.
              </p>
            </div>

            <div className="bg-[#F0E6D5]/40 p-7 rounded-3xl border border-[#282C27]/10 space-y-3 hover:bg-[#F0E6D5]/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#173526] text-white flex items-center justify-center font-bold text-lg font-heading">
                04
              </div>
              <h3 className="font-heading font-bold text-xl text-[#282C27]">Authentic Taste</h3>
              <p className="text-sm text-[#6B7068] leading-relaxed">
                Nutrition is only sustainable when food is truly delicious. Our chapathis stay soft on the plate and our
                cookies deliver genuine artisanal baked crispness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EVERYDAY LIFESTYLE SECTION                                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F0E6D5]/45 border-t border-[#282C27]/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              NUTRITION IN MOTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
              Designed for Everyday Routines
            </h2>
            <p className="text-base text-[#6B7068]">
              From family lunchboxes to 4 PM desk snacks, Nourilicious brings nourishment naturally into real life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#282C27]/10 shadow-md flex flex-col group">
              <div className="relative aspect-[16/10] bg-[#FBF7EF] overflow-hidden">
                <Image
                  src="/images/lifestyle-meal.jpg"
                  alt="Home dining table with freshly cooked chapathis served alongside bowls of homestyle dal and seasonal vegetables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover card-zoom-img"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#244B37]">
                  FAMILIAR FAMILY MEALS
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#282C27]">
                  At the Home Dining Table
                </h3>
                <p className="text-sm text-[#6B7068] leading-relaxed">
                  Serve freshly cooked, soft chapathis alongside homestyle dal, paneer, and seasonal sabzi. The whole family
                  enjoys higher protein without changing how food is prepared or enjoyed.
                </p>
              </div>
            </div>

            {/* Panel 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#282C27]/10 shadow-md flex flex-col group">
              <div className="relative aspect-[16/10] bg-[#FBF7EF] overflow-hidden">
                <Image
                  src="/images/lifestyle-snack.jpg"
                  alt="Two golden-brown protein cookies on a ceramic plate beside a cup of chai and a notebook on a warm wooden work desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover card-zoom-img"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
                  DESK &amp; CHAI BREAKS
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#282C27]">
                  Mindful Snacking Between Tasks
                </h3>
                <p className="text-sm text-[#6B7068] leading-relaxed">
                  Pair two crisp protein cookies with hot masala chai during a busy workday or travel commute. Meaningful
                  protein keeps you focused and satiated without the sugar crash of empty biscuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NUTRITION TRANSPARENCY SECTION                            */}
      {/* ========================================================= */}
      <NutritionTransparency />

      {/* ========================================================= */}
      {/* ABOUT STORY TEASER SECTION                                */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F0E6D5]/60 border-t border-[#282C27]/5">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#282C27]/10 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#282C27]">
              “Healthy, Never Clinical. Modern, Yet Deeply Rooted in Everyday Food.”
            </h2>
            <p className="text-sm sm:text-base text-[#6B7068] leading-relaxed">
              We started Nourilicious with a straightforward goal: make better nutrition effortless by building it into the
              foods you already cook, serve, and love. No intimidation, no unproven fads—just honest, good food.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/about"
              className="px-6 py-3.5 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-sm text-center transition-colors shadow-sm"
            >
              Read Our Brand Story
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#F0E6D5] hover:bg-[#282C27]/10 text-[#282C27] font-heading font-bold text-sm text-center transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BUSINESS & DISTRIBUTION SECTION                           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#FBF7EF] border-t border-[#282C27]/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
              TRADE &amp; PARTNERSHIPS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
              Partner with Nourilicious
            </h2>
            <p className="text-base text-[#6B7068]">
              We collaborate with modern retailers, regional distributors, gyms, health cafés, and corporate pantries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#F0E6D5] text-[#244B37] text-xs font-heading font-bold uppercase tracking-wider inline-block">
                  Retail Channels
                </span>
                <h3 className="font-heading font-bold text-xl text-[#282C27]">Supermarket &amp; Grocery Chains</h3>
                <p className="text-sm text-[#6B7068] leading-relaxed">
                  Offer your health-conscious shoppers premium staple flours and protein snacks with attractive margins and
                  shelf-ready packaging.
                </p>
              </div>
              <Link
                href="/contact?type=retail"
                className="w-full py-3 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors block"
              >
                Retail Enquiry →
              </Link>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#F0E6D5] text-[#244B37] text-xs font-heading font-bold uppercase tracking-wider inline-block">
                  FMCG Supply Chain
                </span>
                <h3 className="font-heading font-bold text-xl text-[#282C27]">Regional Distributors</h3>
                <p className="text-sm text-[#6B7068] leading-relaxed">
                  Expand your FMCG distribution network with fast-moving, high-demand functional food products in tier 1 and
                  tier 2 Indian markets.
                </p>
              </div>
              <Link
                href="/contact?type=distribution"
                className="w-full py-3 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors block"
              >
                Distributor Enquiry →
              </Link>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#F0E6D5] text-[#244B37] text-xs font-heading font-bold uppercase tracking-wider inline-block">
                  Institutions &amp; Fitness
                </span>
                <h3 className="font-heading font-bold text-xl text-[#282C27]">Gyms, Cafés &amp; Corporate</h3>
                <p className="text-sm text-[#6B7068] leading-relaxed">
                  Stock healthy protein cookies at your fitness studio reception, café deli counters, or corporate employee
                  micro-kitchens.
                </p>
              </div>
              <Link
                href="/contact?type=bulk"
                className="w-full py-3 rounded-xl bg-[#F0E6D5] hover:bg-[#244B37] hover:text-white text-[#244B37] font-heading font-bold text-xs text-center transition-colors block"
              >
                Bulk &amp; Corporate Enquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQS                                                      */}
      {/* ========================================================= */}
      <FaqAccordion />

      {/* ========================================================= */}
      {/* FINAL HIGH-IMPACT CTA                                     */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#244B37] text-[#FBF7EF] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#F0E6D5] text-xs font-heading font-bold uppercase tracking-widest">
            START YOUR NOURILICIOUS JOURNEY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Bring Smarter Nutrition to Your Table Today
          </h2>
          <p className="text-base sm:text-lg text-[#F0E6D5]/80 max-w-2xl mx-auto leading-relaxed">
            Experience protein-enriched chapathi mix, delicious protein cookies, and isolated soya protein powder.
            Thoughtfully made for familiar everyday meals, mindful snacking, and versatile daily cooking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/#products"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#244B37] hover:bg-[#F0E6D5] font-heading font-bold text-base shadow-lg transition-all"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#C8784D] hover:bg-[#b5673d] text-white font-heading font-bold text-base shadow-lg transition-all"
            >
              Trade &amp; Business Enquiries
            </Link>
          </div>
        </div>

        {/* Decorative botanical background circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      </section>
    </div>
  );
}
