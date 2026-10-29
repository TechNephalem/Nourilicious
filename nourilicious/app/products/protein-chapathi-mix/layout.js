export const metadata = {
  title: "Protein Chapathi Mix — 15g Protein per 2 Rotis",
  description:
    "Nourilicious Protein Chapathi Mix: Specially formulated whole wheat atta mix enriched with clean plant proteins. Pliable, rollable, and puffs into soft rotis with 15g protein per 2 chapathis.",
  keywords: [
    "protein chapathi mix",
    "high protein atta",
    "protein roti flour",
    "whole wheat protein flour",
    "Nourilicious chapathi mix",
    "plant protein atta",
    "soft protein rotis",
    "everyday staple protein India",
  ],
  alternates: {
    canonical: "/products/protein-chapathi-mix",
  },
  openGraph: {
    title: "Nourilicious Protein Chapathi Mix — 15g Protein per 2 Rotis",
    description:
      "Replace ordinary flour seamlessly. Delivers 15g protein per 2 rotis while rolling out smoothly, puffing on the tawa, and staying soft for hours.",
    url: "https://nourilicious.in/products/protein-chapathi-mix",
    images: [
      {
        url: "/images/flour-product.jpg",
        width: 1200,
        height: 630,
        alt: "Nourilicious Protein Chapathi Mix pouch with hot cooked chapathis",
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nourilicious Protein Chapathi Mix",
  image: "https://nourilicious.in/images/flour-product.jpg",
  description:
    "Thoughtfully formulated whole grain flour mix enriched with clean plant proteins to give your family higher nourishment in every single roti without sacrificing authentic soft texture or taste.",
  brand: {
    "@type": "Brand",
    name: "Nourilicious",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Nourilicious Foods Private Limited",
  },
  category: "Food > Baking & Cooking > Flours & Meals",
  nutrition: {
    "@type": "NutritionInformation",
    servingSize: "50g (approx 2 chapathis)",
    proteinContent: "15g",
    fiberContent: "6.5g",
    sugarContent: "0g",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    offerCount: "3",
  },
};

export default function ChapathiMixLayout({ children }) {
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

