"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/get-dictionary";

type MissionSectionProps = {
  copy: Dictionary["aboutPage"]["mission"];
};

export default function MissionSection({ copy }: MissionSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
            {copy.label}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-6 leading-tight">
            {copy.title}
          </h2>
          <div className="gold-rule mt-8 max-w-16 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
