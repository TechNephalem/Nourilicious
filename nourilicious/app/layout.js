import { Plus_Jakarta_Sans, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nourilicious.in"),
  title: {
    default: "Nourilicious — Everyday Nutrition. Deliciously Made.",
    template: "%s | Nourilicious",
  },
  description:
    "Nourilicious Foods Private Limited: Bringing protein-enriched chapathi mix, protein cookies, and isolated soya protein powder to everyday familiar meals and mindful snacking breaks.",
  keywords: [
    "Nourilicious",
    "Nourilicious Foods Private Limited",
    "protein chapathi mix",
    "protein cookies",
    "isolated soya protein powder",
    "Indian high protein atta",
    "high protein flour",
    "everyday nutrition",
    "healthy staple food",
    "Indian protein snacks",
    "non-gmo soy protein isolate",
    "functional food Hosur Krishnagiri",
  ],
  authors: [{ name: "Nourilicious Foods Private Limited", url: "https://nourilicious.in" }],
  creator: "Nourilicious Foods Private Limited",
  publisher: "Nourilicious Foods Private Limited",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    title: "Nourilicious — Everyday Nutrition. Deliciously Made.",
    description:
      "Bringing protein-enriched chapathi mix, delicious protein cookies, and isolated soya protein powder to everyday familiar meals.",
    type: "website",
    locale: "en_IN",
    url: "https://nourilicious.in",
    siteName: "Nourilicious",
    images: [
      {
        url: "/images/hero-composition.jpg",
        width: 1200,
        height: 630,
        alt: "Nourilicious everyday nutrition products and ingredients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nourilicious — Everyday Nutrition. Deliciously Made.",
    description:
      "Bringing protein-enriched chapathi mix, delicious protein cookies, and isolated soya protein powder to everyday familiar meals.",
    images: ["/images/hero-composition.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Hosur, Krishnagiri",
    "geo.position": "12.7409;77.8253",
    ICBM: "12.7409, 77.8253",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nourilicious.in/#organization",
      name: "Nourilicious Foods Private Limited",
      alternateName: ["Nourilicious", "Nourilicious Foods"],
      url: "https://nourilicious.in",
      logo: {
        "@type": "ImageObject",
        url: "https://nourilicious.in/images/logo-full.png",
        caption: "Nourilicious Foods Private Limited",
      },
      image: "https://nourilicious.in/images/logo-shadow.jpg",
      telephone: "+91-88388-27928",
      email: "hello@nourilicious.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Door No. 2/462/1, Edayanallur, Mathigiri, Nagondapalli",
        addressLocality: "Hosur",
        addressRegion: "Tamil Nadu",
        postalCode: "635110",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-88388-27928",
          contactType: "Customer Support & Wholesale Enquiries",
          areaServed: "IN",
          availableLanguage: ["English", "Tamil", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nourilicious.in/#website",
      url: "https://nourilicious.in",
      name: "Nourilicious",
      description: "Everyday Nutrition. Deliciously Made.",
      publisher: {
        "@id": "https://nourilicious.in/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF7EF] text-[#282C27] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#244B37] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
