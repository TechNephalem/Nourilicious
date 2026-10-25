"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
  "General Enquiry",
  "Retail Partnership",
  "Distribution",
  "Bulk / Corporate Order",
];

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    company: "",
    businessType: "Retail / Supermarket",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (typeParam === "retail") {
      setFormData((prev) => ({ ...prev, enquiryType: "Retail Partnership" }));
    } else if (typeParam === "distribution") {
      setFormData((prev) => ({ ...prev, enquiryType: "Distribution" }));
    } else if (typeParam === "bulk") {
      setFormData((prev) => ({ ...prev, enquiryType: "Bulk / Corporate Order" }));
    }
  }, [typeParam]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please include your message or inquiry details.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError(false);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      enquiryType: "General Enquiry",
      company: "",
      businessType: "Retail / Supermarket",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#282C27]/10 shadow-xl space-y-6">

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#244B37]/10 text-[#244B37] mx-auto flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-2xl text-[#282C27]">
            Thank You, {formData.name || "Partner"}!
          </h3>
          <p className="text-sm sm:text-base text-[#6B7068] max-w-md mx-auto leading-relaxed">
            Your {formData.enquiryType.toLowerCase()} has been received. Our team will review your requirements and
            respond to <strong>{formData.email}</strong> within 1–2 business days.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-[#244B37] text-white font-heading font-semibold text-sm hover:bg-[#173526] transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Enquiry Type Selector */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#6B7068] mb-2.5">
              Enquiry Category *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {categories.map((cat) => {
                const isSelected = formData.enquiryType === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData({ ...formData, enquiryType: cat })}
                    className={`px-3 py-2.5 rounded-xl text-xs font-heading font-semibold text-center transition-all ${
                      isSelected
                        ? "bg-[#244B37] text-white shadow-sm"
                        : "bg-[#F0E6D5]/40 text-[#282C27] hover:bg-[#F0E6D5]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-name" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
                Full Name *
              </label>
              <input
                id="form-name"
                type="text"
                placeholder="e.g. Priya Sharma"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border text-sm text-[#282C27] transition-all focus:bg-white ${
                  errors.name ? "border-red-500" : "border-[#282C27]/15 focus:border-[#244B37]"
                }`}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="form-email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
                Email Address *
              </label>
              <input
                id="form-email"
                type="email"
                placeholder="priya@company.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border text-sm text-[#282C27] transition-all focus:bg-white ${
                  errors.email ? "border-red-500" : "border-[#282C27]/15 focus:border-[#244B37]"
                }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="form-phone" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                id="form-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border border-[#282C27]/15 text-sm text-[#282C27] transition-all focus:bg-white focus:border-[#244B37]"
              />
            </div>

            <div>
              <label htmlFor="form-company" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
                Company / Organization (Optional)
              </label>
              <input
                id="form-company"
                type="text"
                placeholder="Retail Store, Gym, or Firm Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border border-[#282C27]/15 text-sm text-[#282C27] transition-all focus:bg-white focus:border-[#244B37]"
              />
            </div>
          </div>

          {/* Business Channel Selector */}
          <div>
            <label htmlFor="form-biztype" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
              Business / Interest Profile
            </label>
            <select
              id="form-biztype"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border border-[#282C27]/15 text-sm text-[#282C27] transition-all focus:bg-white focus:border-[#244B37]"
            >
              <option value="Retail / Supermarket">Supermarket / Retail Chain Store</option>
              <option value="Regional Distributor">Regional FMCG / Food Distributor</option>
              <option value="Gym / Fitness Center">Gym, Crossfit, or Fitness Studio</option>
              <option value="Café / Health Bar">Health Café, Deli, or Restaurant</option>
              <option value="Corporate Wellness">Corporate Cafeteria / Employee Pantry</option>
              <option value="Individual Consumer">Individual Customer / General Query</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#282C27] mb-1.5">
              Your Message &amp; Requirements *
            </label>
            <textarea
              id="form-message"
              rows={4}
              placeholder="Tell us about your expected monthly volumes, target city/region, or questions about Nourilicious products..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: null });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#FBF7EF] border text-sm text-[#282C27] transition-all focus:bg-white ${
                errors.message ? "border-red-500" : "border-[#282C27]/15 focus:border-[#244B37]"
              }`}
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-xl bg-[#244B37] hover:bg-[#173526] text-white font-heading font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Transmitting Enquiry...</span>
              </>
            ) : (
              <span>Submit Business Enquiry</span>
            )}
          </button>
          <p className="text-xs text-[#6B7068] text-center">
            Your contact information will only be used to respond to this inquiry. No spam.
          </p>
        </form>
      )}
    </div>
  );
}

export default function EnquiryForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#6B7068]">Loading enquiry form...</div>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
