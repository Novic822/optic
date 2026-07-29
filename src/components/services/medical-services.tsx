"use client";

import {
  Eye,
  Activity,
  Shield,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

const icons: LucideIcon[] = [Eye, Activity, Shield, Stethoscope];

type MedicalServicesProps = {
  copy: Dictionary["servicesPage"]["medical"];
};

export default function MedicalServices({ copy }: MedicalServicesProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {copy.items.map((svc, i) => {
            const Icon = icons[i] ?? Eye;
            return (
              <AnimatedCard key={svc.title} delay={i * 0.1}>
                <div className="bg-silver rounded-2xl p-8 lg:p-10 h-full border border-navy/5 hover:border-gold/15 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500 group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Icon className="w-6 h-6 text-navy/70 group-hover:text-gold transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold text-navy mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-navy/45 text-sm leading-relaxed mb-5">
                        {svc.desc}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {svc.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 text-xs text-navy/50"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
