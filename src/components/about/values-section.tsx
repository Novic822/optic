"use client";

import {
  Users,
  Award,
  Lightbulb,
  HeartPulse,
  Crosshair,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

const icons: LucideIcon[] = [
  Crosshair,
  Users,
  Award,
  Lightbulb,
  HeartPulse,
];

type ValuesSectionProps = {
  copy: Dictionary["aboutPage"]["values"];
};

export default function ValuesSection({ copy }: ValuesSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-silver">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading label={copy.label} title={copy.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {copy.items.map((v, i) => {
            const Icon = icons[i] ?? Crosshair;
            return (
              <AnimatedCard key={v.label} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 text-center h-full border border-transparent hover:border-gold/15 hover:shadow-md transition-all duration-500 group">
                  <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-6 h-6 text-navy/60 group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-navy mb-2">
                    {v.label}
                  </h4>
                  <p className="text-navy/40 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
