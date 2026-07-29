"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import type { Dictionary } from "@/i18n/get-dictionary";

type BrandShowcaseProps = {
  copy: Dictionary["brandShowcase"];
};

export default function BrandShowcase({ copy }: BrandShowcaseProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {copy.brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="aspect-[3/2] rounded-2xl border border-navy/5 bg-silver flex items-center justify-center group-hover:border-gold/20 group-hover:shadow-md group-hover:shadow-gold/5 transition-all duration-500">
                <span className="font-display text-xl lg:text-2xl text-navy/30 group-hover:text-navy/60 transition-colors duration-500 tracking-wide">
                  {brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
