"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  image: string;
};

export default function PageHero({
  label,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase font-body font-medium mb-4">
            <span className="w-8 h-px bg-gold" />
            {label}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            {title}
          </h1>
          {description ? (
            <p className="text-white/50 text-base lg:text-lg mt-6 leading-relaxed max-w-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
