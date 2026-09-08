"use client";

import {
  Glasses,
  Sun,
  Bike,
  CircleDot,
  Wrench,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

const icons: LucideIcon[] = [
  Glasses,
  Glasses,
  Monitor,
  Sun,
  Bike,
  CircleDot,
  Wrench,
];

type OpticalServicesProps = {
  copy: Dictionary["opticalSalonPage"]["services"];
};

export default function OpticalServices({ copy }: OpticalServicesProps) {
  return (
    <section className="py-24 lg:py-32 bg-silver">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.items.map((svc, i) => {
            const Icon = icons[i] ?? Glasses;
            return (
              <AnimatedCard key={svc.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 h-full border border-transparent hover:border-gold/15 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-navy/40 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
