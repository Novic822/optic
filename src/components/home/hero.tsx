"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const HERO_IMG =
  "https://media.base44.com/images/public/6a2c025b442be19169396a2c/80d5c25cf_generated_c06bed2f.png";

type HeroProps = {
  lang: Locale;
  copy: Dictionary["hero"];
};

export default function Hero({ lang, copy }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt={copy.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase font-body font-medium mb-6">
              <span className="w-8 h-px bg-gold" />
              {copy.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            {copy.title}{" "}
            <span className="text-gold italic">{copy.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg font-body"
          >
            {copy.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={`/${lang}/contact`}>
              <Button className="bg-gold hover:bg-gold/90 text-white rounded-full px-8 py-6 text-sm font-body group">
                <Calendar className="w-4 h-4 mr-2" />
                {copy.schedule}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+48655114027">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-sm font-body"
              >
                <Phone className="w-4 h-4 mr-2" />
                {copy.call}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-silver to-transparent" />
    </section>
  );
}
