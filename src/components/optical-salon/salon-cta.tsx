"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type SalonCtaProps = {
  lang: Locale;
  copy: Dictionary["opticalSalonPage"]["cta"];
};

export default function SalonCta({ lang, copy }: SalonCtaProps) {
  return (
    <section className="py-20 lg:py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">
          {copy.title}
        </h2>
        <p className="text-white/45 mt-4 text-lg">{copy.description}</p>
        <Link href={`/${lang}/contact`} className="inline-block mt-8">
          <Button className="bg-gold hover:bg-gold/90 text-white rounded-full px-8 py-6 font-body text-sm group">
            {copy.button}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
