import Image from "next/image";
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
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#282C27]/10 space-y-4 text-xs text-[#6B7068] shadow-md">
              <div className="flex items-center justify-between gap-4 border-b border-[#282C27]/10 pb-4">
                <div className="relative h-12 w-44">
                  <Image
                    src="/images/logo-full.png"
                    alt="Nourilicious Foods Private Limited"
                    fill
                    sizes="176px"
                    className="object-contain object-left"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#244B37] text-white text-[10px] font-heading font-bold uppercase tracking-wider shrink-0">
                  Registered Entity
                </span>
              </div>
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
                <strong className="text-[#282C27]">Phone &amp; WhatsApp:</strong>{" "}
                <a href="tel:+918838827928" className="hover:text-[#244B37] underline font-semibold">
                  +91 88388 27928
                </a>
              </p>
              <div className="pt-0.5">
                <a
                  href="https://wa.me/918838827928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#244B37] text-white hover:bg-[#173526] font-heading font-semibold text-xs transition-colors shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.043.072.043.419-.101.824z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <p className="leading-relaxed">
                <strong className="text-[#282C27] block mb-1">Registered Office &amp; Facility:</strong>
                Nourilicious Foods Private Limited<br />
                Door No. 2/462/1, Edayanallur, Mathigiri,<br />
                Nagondapalli, Hosur, Krishnagiri – 635110,<br />
                Tamil Nadu, India
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
