"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/get-dictionary";

type DoctorSectionProps = {
  copy: Dictionary["aboutPage"]["doctor"];
  image: string;
};

export default function DoctorSection({ copy, image }: DoctorSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
              <Image
                src={image}
                alt={copy.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-navy rounded-2xl p-6 shadow-xl hidden lg:block">
              <div className="font-display text-3xl font-bold text-gold">
                {copy.yearsValue}
              </div>
              <div className="text-white/60 text-xs mt-1">{copy.yearsLabel}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
              {copy.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">
              {copy.name}
            </h2>
            <div className="gold-rule mt-6 max-w-16" />
            <p className="mt-8 text-navy/50 text-base lg:text-lg leading-relaxed">
              {copy.paragraph1}
            </p>
            <p className="mt-4 text-navy/50 text-base lg:text-lg leading-relaxed">
              {copy.paragraph2}
            </p>
            {copy.note ? (
              <p className="mt-4 text-navy/40 text-sm italic">{copy.note}</p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
