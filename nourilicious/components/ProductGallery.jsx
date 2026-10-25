"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images = [], defaultIndex = 0 }) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  if (!images || images.length === 0) return null;

  const current = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="rounded-3xl overflow-hidden bg-[#F0E6D5] border border-[#282C27]/10 aspect-[4/3] shadow-md relative group">
        <Image
          src={current.src}
          alt={current.alt || "Product image"}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover card-zoom-img"
        />
        {current.caption && (
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {current.caption}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] border-2 transition-all p-0.5 focus:outline-none ${
                  isSelected
                    ? "border-[#244B37] ring-2 ring-[#244B37]/30 shadow-md scale-102"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#F0E6D5]">
                  <Image
                    src={img.src}
                    alt={img.alt || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 30vw, 15vw"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
