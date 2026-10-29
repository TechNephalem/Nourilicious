export const metadata = {
  title: "Isolated Soya Protein Powder — 90% Pure Plant Isolate (27g Protein)",
  description:
    "Nourilicious Isolated Soya Protein Powder: 90% non-GMO soy protein isolate with zero added sugar and neutral taste. Effortlessly blends into chapathi dough, dals, gravies, smoothies, and baking.",
  keywords: [
    "isolated soya protein powder",
    "soy protein isolate India",
    "90% soy protein isolate",
    "unflavoured protein powder for cooking",
    "vegan protein powder",
    "plant protein isolate",
    "zero sugar protein powder",
    "soy protein for chapathi dough",
    "Nourilicious soya protein",
  ],
  alternates: {
    canonical: "/products/isolated-soya-protein-powder",
  },
  openGraph: {
    title: "Nourilicious Isolated Soya Protein Powder — 90% Pure Plant Isolate",
    description:
      "Pure 90% non-GMO soy protein isolate with zero added sugar and neutral taste. Easily mixes into chapathi dough, dals, smoothies, and baking.",
    url: "https://nourilicious.in/products/isolated-soya-protein-powder",
    images: [
      {
        url: "/images/soya-protein-product.jpg",
        width: 1200,
        height: 630,
        alt: "Nourilicious Isolated Soya Protein Powder stand-up pouch with wooden scoop",
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nourilicious Isolated Soya Protein Powder",
  image: "https://nourilicious.in/images/soya-protein-product.jpg",
  description:
    "Ultra-pure 90% soy protein isolate powder, naturally processed without harsh chemicals or synthetic fillers. Completely unflavoured with zero added sugars or dairy. Incorporates easily into chapathi dough, dals, smoothies, and baking.",
  brand: {
    "@type": "Brand",
    name: "Nourilicious",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Nourilicious Foods Private Limited",
  },
  category: "Food > Dietary Supplements > Plant Protein Powders",
  nutrition: {
    "@type": "NutritionInformation",
    servingSize: "30g (1 scoop)",
    proteinContent: "27g",
    carbohydrateContent: "<1g",
    sugarContent: "0g",
    fatContent: "0.5g",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    offerCount: "3",
  },
};

export default function SoyaProteinLayout({ children }) {
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

