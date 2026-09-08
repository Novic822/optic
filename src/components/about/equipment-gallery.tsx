"use client";

import Image from "next/image";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

type EquipmentGalleryProps = {
  copy: Dictionary["aboutPage"]["equipment"];
  images: string[];
};

export default function EquipmentGallery({
  copy,
  images,
}: EquipmentGalleryProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.gallery.map((item, i) => (
            <AnimatedCard key={item.label} delay={i * 0.1}>
              <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={images[i] ?? images[0]}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-gold text-xs tracking-[0.15em] uppercase">
                    {item.label}
                  </span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
