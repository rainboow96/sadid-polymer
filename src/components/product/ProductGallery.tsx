"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";
import { useGallery } from "../../app/hooks/useGallery";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const galleryImages = images?.length > 0 ? images : ["/placeholder.webp"];

  const { selectedIndex, handlePrev, handleNext, selectImage } = useGallery(
    galleryImages.length
  );

  return (
    <Reveal delay={0.1} y={24} className="w-full">
      <div className="space-y-4">
        <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={galleryImages[selectedIndex]}
                alt={`${title} - تصویر ${selectedIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="تصویر قبلی"
                className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white opacity-80 backdrop-blur-md transition-all hover:scale-110 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:opacity-100"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="تصویر بعدی"
                className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white opacity-80 backdrop-blur-md transition-all hover:scale-110 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:opacity-100"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
            </>
          )}

          {galleryImages.length > 1 && (
            <div className="dir-ltr absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 font-mono text-xs tabular-nums text-slate-300 backdrop-blur-md">
              <span>{selectedIndex + 1}</span>
              <span className="mx-1 text-slate-500">/</span>
              <span>{galleryImages.length}</span>
            </div>
          )}
        </div>

        {galleryImages.length > 1 && (
          <div className="scrollbar-thin flex gap-3 overflow-x-auto pb-2">
            {galleryImages.map((img, idx) => (
              <button
                key={`${img}-${idx}`}
                type="button"
                onClick={() => selectImage(idx)}
                aria-label={`نمایش تصویر ${idx + 1} از ${galleryImages.length}`}
                aria-current={selectedIndex === idx ? "true" : undefined}
                className={cn(
                  "relative size-20 shrink-0 cursor-pointer overflow-hidden rounded-2xl border bg-slate-900/80 transition-all duration-300",
                  selectedIndex === idx
                    ? "scale-95 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)] ring-2 ring-cyan-400/30"
                    : "border-white/10 opacity-60 hover:border-white/30 hover:opacity-100"
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
    </Reveal>
  );
}
