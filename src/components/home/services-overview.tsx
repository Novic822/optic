"use client";

import Link from "next/link";
import {
  Eye,
  Activity,
  Stethoscope,
  Focus,
  Glasses,
  CircleDot,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const icons: LucideIcon[] = [
  Eye,
  Activity,
  Stethoscope,
  Focus,
  Glasses,
  CircleDot,
];

type ServicesOverviewProps = {
  lang: Locale;
  copy: Dictionary["servicesOverview"];
};

export default function ServicesOverview({ lang, copy }: ServicesOverviewProps) {
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
            const Icon = icons[i] ?? Eye;
            const href = `/${lang}${svc.path}`;

            return (
              <AnimatedCard key={svc.title} delay={i * 0.08}>
                <Link href={href} className="block group h-full">
                  <div className="bg-white rounded-2xl p-8 h-full border border-transparent hover:border-gold/20 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-navy/70 group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-navy/45 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {copy.learnMore} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
