"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryImages = images?.length > 0 ? images : ["/placeholder.webp"];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">

      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl group">
        <Image
          src={galleryImages[selectedIndex]}
          alt={`${title} - تصویر ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-all duration-500 ease-out"
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="عکس قبلی"
              className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-slate-950/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center opacity-80 transition-all hover:opacity-100 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-400/40"
            >
              <ChevronRight className="size-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="عکس بعدی"
              className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-slate-950/70 text-white backdrop-blur-md border border-white/10 flex items-center justify-center opacity-80 transition-all hover:opacity-100 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-400/40"
            >
              <ChevronLeft className="size-5" />
            </button>
          </>
        )}

        {galleryImages.length > 1 && (
          <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs text-slate-300 backdrop-blur-md border border-white/10">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        )}
      </div>

      {galleryImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "relative size-20 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 bg-slate-900/80",
                selectedIndex === idx
                  ? "border-cyan-400 ring-2 ring-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.35)] scale-95"
                  : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
              )}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
