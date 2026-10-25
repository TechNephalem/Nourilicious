"use client";

import { useState } from "react";

const faqData = [
  {
    q: "What is Nourilicious?",
    a: "Nourilicious is an everyday nutrition brand dedicated to making good food with smarter nutritional value. Our core philosophy is “Nourishment meets deliciousness.” We enrich familiar dietary staples—starting with chapathi flour and protein cookies—so individuals and families can enjoy balanced nutrition without overhauling their daily eating habits.",
  },
  {
    q: "How is Nourilicious Protein Chapathi Flour different from regular wheat atta?",
    a: "Regular whole wheat atta generally provides about 10–12% protein. Nourilicious Protein Chapathi Flour is mindfully enriched with plant-based protein sources while preserving the soft texture, natural puff, and familiar comforting taste of home-cooked rotis. It fits seamlessly into your daily lunch and dinner routines.",
  },
  {
    q: "Are Nourilicious products made for bodybuilders or everyday families?",
    a: "Nourilicious is designed for everyday people, families, students, and busy working professionals. Our products are healthy, never clinical—they look, smell, and taste like wholesome kitchen food rather than intimidating gym supplements or medicinal meal replacements.",
  },
  {
    q: "What makes Nourilicious Protein Cookies different from ordinary snack biscuits?",
    a: "Standard tea-time biscuits and cookies are typically loaded with refined flour, hydrogenated fats, and excess sugar while offering negligible protein. Nourilicious Protein Cookies combine satisfying golden-brown crispness with meaningful protein content, making them ideal for tea breaks, desk snacks, and travel.",
  },
  {
    q: "Are the nutritional values and ingredient statements verified?",
    a: "Yes. In strict accordance with brand transparency guidelines, all nutritional metrics, allergen notices, and ingredient sequences published on our website and packaging are derived from verified laboratory test reports and regulatory compliance specifications.",
  },
  {
    q: "Where will Nourilicious products be available to buy?",
    a: "Nourilicious is launching across leading grocery supermarkets, modern retail outlets, gyms, health cafés, and our direct-to-consumer online platform. Register your contact details on our Contact page to receive launch notifications and availability in your city.",
  },
  {
    q: "How can retail stores, distributors, or corporate offices stock Nourilicious?",
    a: "We welcome partnerships with retail chains, regional FMCG distributors, fitness centers, cafés, and corporate wellness programs. Visit our Contact & Business Enquiry section and select your partnership category to receive our wholesale catalog and trade terms.",
  },
  {
    q: "Do chapathis made with Nourilicious flour puff and roll out easily?",
    a: "Absolutely. Our milling formula is crafted to knead smoothly with warm water and roll out into pliable dough without crumbling or drying out. Your chapathis remain soft, flexible, and delicious for lunchboxes and family meals.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-[#F0E6D5]/35 border-t border-[#282C27]/5">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
            Common Questions About Nourilicious
          </h2>
          <p className="text-sm sm:text-base text-[#6B7068] max-w-xl mx-auto">
            Everything you need to know about our ingredients, protein enrichment, everyday usage, and trade partnerships.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#282C27]/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#282C27] hover:text-[#244B37] transition-colors focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-transform ${
                      isOpen ? "bg-[#244B37] text-white rotate-180" : "bg-[#F0E6D5] text-[#244B37]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 text-sm sm:text-base text-[#6B7068] leading-relaxed border-t border-[#282C27]/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
