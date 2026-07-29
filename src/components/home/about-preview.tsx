"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const LENS_IMG =
  "https://media.base44.com/images/public/6a2c025b442be19169396a2c/a6831d3cc_generated_886f5d4b.png";

type AboutPreviewProps = {
  lang: Locale;
  copy: Dictionary["aboutPreview"];
};

export default function AboutPreview({ lang, copy }: AboutPreviewProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden">
              <Image
                src={LENS_IMG}
                alt={copy.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-2 border-gold/20 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-gold/10 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
              {copy.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">
              {copy.title}
            </h2>
            <div className="gold-rule mt-6 max-w-16" />
            <p className="mt-8 text-navy/50 text-base lg:text-lg leading-relaxed">
              {copy.paragraph1}
            </p>
            <p className="mt-4 text-navy/50 text-base lg:text-lg leading-relaxed">
              {copy.paragraph2}
            </p>
            <Link href={`/${lang}/about`} className="inline-block mt-8">
              <Button
                variant="outline"
                className="border-navy/20 text-navy hover:bg-navy hover:text-white rounded-full px-8 py-6 group font-body text-sm"
              >
                {copy.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
