import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Contact & Business Enquiries — Nourilicious",
  description:
    "Get in touch with Nourilicious for retail partnerships, FMCG distribution, corporate pantry supply, or customer product enquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FBF7EF] min-h-screen py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 Cols): Context & Channel Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#C8784D] block">
                GET IN TOUCH
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#282C27] tracking-tight">
                Contact &amp; Business Enquiries
              </h1>
              <p className="text-base text-[#6B7068] leading-relaxed">
                Whether you have a question about our products or want to explore retail, distribution, gym, café, or
                corporate partnerships, we would love to connect.
              </p>
            </div>

            {/* Partnerships breakdown */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-sm text-[#282C27] uppercase tracking-wider">
                Partnership Channels
              </h2>

              <div className="space-y-3 text-sm text-[#6B7068]">
                <div className="p-4 rounded-2xl bg-white border border-[#282C27]/10 space-y-1">
                  <strong className="text-[#244B37] block font-heading">Retail &amp; Supermarket Placement</strong>
                  <p className="text-xs leading-relaxed">
                    Wholesale terms, shelf-ready display packaging, and retail margins for modern supermarkets and specialty
                    grocery stores.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#282C27]/10 space-y-1">
                  <strong className="text-[#244B37] block font-heading">Regional FMCG Distribution</strong>
                  <p className="text-xs leading-relaxed">
                    Exclusive territory distribution rights, pallet orders, and logistics support across Indian metros and
                    tier 2 cities.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#282C27]/10 space-y-1">
                  <strong className="text-[#244B37] block font-heading">Gyms, Health Cafés &amp; Corporate</strong>
                  <p className="text-xs leading-relaxed">
                    Bulk snack boxes for fitness studios, employee wellness micro-pantries, co-working cafés, and catering.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Headquarters & Trade Desk */}
            <div className="p-6 rounded-2xl bg-[#F0E6D5]/60 border border-[#282C27]/10 space-y-3 text-xs text-[#6B7068]">
              <span className="px-3 py-1 rounded-full bg-[#244B37] text-white text-[11px] font-heading font-bold uppercase tracking-wider inline-block">
                Corporate Headquarters &amp; Trade Desk
              </span>
              <p className="mt-1">
                <strong className="text-[#282C27]">General Email:</strong>{" "}
                <a href="mailto:hello@nourilicious.in" className="hover:text-[#244B37] underline">
                  hello@nourilicious.in
                </a>
              </p>
              <p>
                <strong className="text-[#282C27]">Wholesale &amp; Retail Desk:</strong>{" "}
                <a href="mailto:trade@nourilicious.in" className="hover:text-[#244B37] underline">
                  trade@nourilicious.in
                </a>
              </p>
              <p>
                <strong className="text-[#282C27]">Corporate Office:</strong> Nourilicious Foods Pvt. Ltd., 100 Feet Road, Indiranagar, Bengaluru - 560038, Karnataka, India
              </p>
              <p>
                <strong className="text-[#282C27]">Operating Hours:</strong> Monday – Saturday, 9:30 AM – 6:30 PM IST
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}
