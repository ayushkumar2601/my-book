"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = { src: string; alt: string };

export default function ImageCarousel({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => { setCurrent(i); setIsOpen(true); }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg border border-edge hover:border-foreground/30 transition-all"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image src={images[current].src} alt={images[current].alt} fill className="object-contain" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
