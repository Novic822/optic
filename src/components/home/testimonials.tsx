"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

type TestimonialsProps = {
  copy: Dictionary["testimonials"];
};

export default function Testimonials({ copy }: TestimonialsProps) {
  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {copy.items.map((t, i) => (
            <AnimatedCard key={t.name} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gold/60 text-xs mt-1">{t.focus}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
