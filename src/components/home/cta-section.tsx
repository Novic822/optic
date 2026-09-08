"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

const EYE_IMG ="/assets/EYE_IMG.png";
  
type CTASectionProps = {
  lang: Locale;
  copy: Dictionary["cta"];
};

export default function CTASection({ lang, copy }: CTASectionProps) {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={EYE_IMG}
          alt={copy.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
            {copy.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-semibold text-white mt-4 leading-tight">
            {copy.titleLine1}
            <br />
            {copy.titleLine2}
          </h2>
          <div className="gold-rule mt-8 max-w-16 mx-auto" />
          <p className="text-white/50 mt-8 text-lg max-w-xl mx-auto">
            {copy.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
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
                +48 65 511 40 27
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
