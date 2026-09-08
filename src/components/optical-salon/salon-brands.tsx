"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/section-heading";
import type { Dictionary } from "@/i18n/get-dictionary";

type SalonBrandsProps = {
  copy: Dictionary["opticalSalonPage"]["brands"];
};

export default function SalonBrands({ copy }: SalonBrandsProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {copy.items.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="aspect-[3/2] rounded-2xl border border-navy/5 bg-silver flex items-center justify-center hover:border-gold/20 hover:shadow-md transition-all duration-500 group"
            >
              <span className="font-display text-xl text-navy/25 group-hover:text-navy/60 transition-colors tracking-wide">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
