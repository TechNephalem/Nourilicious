export const metadata = {
  title: "Protein Cookies — 10g Protein per Cookie",
  description:
    "Nourilicious Protein Cookies: Golden-brown oven-baked cookies with 10g protein each. The perfect crunchy companion for your chai breaks and everyday snacking.",
  keywords: [
    "protein cookies",
    "high protein biscuits",
    "chai time protein snack",
    "healthy cookies India",
    "Nourilicious protein cookies",
    "baked protein snack",
    "clean protein biscuit",
  ],
  alternates: {
    canonical: "/products/protein-cookies",
  },
  openGraph: {
    title: "Nourilicious Protein Cookies — 10g Protein per Cookie",
    description:
      "Golden-brown baked protein cookies that turn your afternoon chai break, desk snacking, or commute into a nourishing moment.",
    url: "https://nourilicious.in/products/protein-cookies",
    images: [
      {
        url: "/images/cookies-product.jpg",
        width: 1200,
        height: 630,
        alt: "Artisanal Nourilicious Protein Cookies stack with pouch",
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nourilicious Protein Cookies",
  image: "https://nourilicious.in/images/cookies-product.jpg",
  description:
    "Artisanal golden-brown baked protein cookies with 10g protein per cookie. Ideal for tea breaks, desk snacks, and mindful on-the-go nourishment without clinical aftertaste.",
  brand: {
    "@type": "Brand",
    name: "Nourilicious",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Nourilicious Foods Private Limited",
  },
  category: "Food > Snack Foods > Cookies & Biscuits",
  nutrition: {
    "@type": "NutritionInformation",
    servingSize: "30g (1 cookie)",
    proteinContent: "10g",
    fiberContent: "2g",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    offerCount: "3",
  },
};

export default function CookiesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {children}
    </>
  );
}

