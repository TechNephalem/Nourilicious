import Link from "next/link";

export const metadata = {
  title: "About Us — Nourilicious | Nutrition That Belongs in Everyday Life",
  description:
    "Learn about Nourilicious, our food philosophy, and our mission to bring smarter everyday nutrition to familiar Indian meals and mindful snacking routines.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FBF7EF] min-h-screen">
      {/* Header Banner */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 bg-[#FBF7EF] border-b border-[#282C27]/10">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#F0E6D5] text-[#244B37] text-xs font-heading font-bold uppercase tracking-widest">
            OUR BRAND PHILOSOPHY
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#282C27] tracking-tight leading-tight">
            Nutrition That Belongs in <span className="text-[#244B37] font-editorial italic font-normal">Everyday Life</span>
          </h1>
          <p className="text-base sm:text-xl text-[#6B7068] leading-relaxed max-w-3xl">
            At Nourilicious, we believe that food should bring together enjoyment, convenience, and thoughtful nutrition. Our
            focus is on creating food choices that fit naturally into everyday routines, from familiar kitchen meals to
            convenient snack breaks.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-14 px-4 sm:px-8 bg-[#F0E6D5]/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FBF7EF] p-8 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#244B37] text-white flex items-center justify-center font-bold font-heading">
              1
            </div>
            <h2 className="font-heading font-bold text-xl text-[#244B37]">Healthy, Never Clinical</h2>
            <p className="text-sm text-[#6B7068] leading-relaxed">
              Food is about warmth, family dining tables, and shared moments. We design products that feel like real,
              appetizing kitchen food—never like clinical hospital formulas or intimidating bodybuilding supplements.
            </p>
          </div>

          <div className="bg-[#FBF7EF] p-8 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8784D] text-white flex items-center justify-center font-bold font-heading">
              2
            </div>
            <h2 className="font-heading font-bold text-xl text-[#244B37]">Rooted in Familiar Habits</h2>
            <p className="text-sm text-[#6B7068] leading-relaxed">
              Instead of asking people to overhaul how they eat or learn complicated new dietary rituals, we focus on
              formats already beloved in Indian homes and workplaces: daily chapathis and comforting tea-time cookies.
            </p>
          </div>

          <div className="bg-[#FBF7EF] p-8 rounded-3xl border border-[#282C27]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#73966B] text-white flex items-center justify-center font-bold font-heading">
              3
            </div>
            <h2 className="font-heading font-bold text-xl text-[#244B37]">Honest &amp; Transparent</h2>
            <p className="text-sm text-[#6B7068] leading-relaxed">
              Every nutritional value, serving size, and ingredient statement on our website and packaging is designed to
              mirror laboratory-verified facts without exaggerated promises or pseudo-scientific marketing claims.
            </p>
          </div>
        </div>

        {/* Manufacturing Quality & Sourcing Standards */}
        <div className="max-w-6xl mx-auto mt-10 bg-white rounded-3xl p-8 sm:p-10 border border-[#282C27]/10 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#244B37]/10 text-[#244B37] text-xs font-heading font-bold uppercase tracking-wider inline-block">
                Quality Assurance &amp; Food Safety
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#282C27]">
                Rigorous Milling Standards &amp; Certified Clean Sourcing
              </h3>
              <p className="text-sm text-[#6B7068] max-w-2xl leading-relaxed">
                We partner with certified whole-grain mills and plant-protein processors across India adhering to ISO 22000,
                HACCP, and Good Manufacturing Practices (GMP). Every production batch undergoes multi-stage laboratory testing
                for purity, protein consistency, moisture levels, and microbiological safety.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-sm shrink-0 self-start md:self-center transition-colors shadow-sm"
            >
              Connect With Our Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values Statement */}
      <section className="py-16 px-4 sm:px-8 bg-[#FBF7EF] border-t border-[#282C27]/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
            OUR COMMITMENT
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
            “Feel Good About Every Bite”
          </h2>
          <p className="text-base sm:text-lg text-[#6B7068] leading-relaxed">
            Whether you are kneading our flour for your evening family dinner or reaching into your bag for a crisp cookie
            between meetings, Nourilicious stands for delicious everyday food you can feel confident about serving and enjoying.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/#products"
              className="px-6 py-3.5 rounded-xl bg-[#244B37] text-white font-heading font-bold text-sm hover:bg-[#173526] transition-colors"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#F0E6D5] text-[#244B37] font-heading font-bold text-sm hover:bg-[#282C27]/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
