"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ImageGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const currentSrc = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div
        className="relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-900 cursor-crosshair"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Image
          src={currentSrc}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            zoomed ? "scale-125" : "scale-100"
          )}
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "relative h-20 w-16 flex-shrink-0 overflow-hidden border-2 transition-all duration-200",
                i === selectedIndex
                  ? "border-gold-dark dark:border-gold-light"
                  : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
