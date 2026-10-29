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
  title: "Nourilicious — Everyday Nutrition. Deliciously Made.",
  description:
    "Nourilicious Foods Private Limited: Bringing protein-enriched chapathi mix, protein cookies, and isolated soya protein powder to everyday familiar meals and mindful snacking breaks.",
  keywords: [
    "Nourilicious",
    "Nourilicious Foods Private Limited",
    "protein chapathi mix",
    "protein cookies",
    "isolated soya protein powder",
    "everyday nutrition",
    "healthy staple food",
    "Indian protein snacks",
  ],
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  authors: [{ name: "Nourilicious Foods Private Limited" }],
  openGraph: {
    title: "Nourilicious — Everyday Nutrition. Deliciously Made.",
    description:
      "Bringing protein-enriched chapathi mix, delicious protein cookies, and isolated soya protein powder to everyday familiar meals.",
    type: "website",
    locale: "en_IN",
    url: "https://nourilicious.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
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
