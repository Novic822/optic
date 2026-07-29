"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type ServicesCtaProps = {
  lang: Locale;
  copy: Dictionary["servicesPage"]["cta"];
};

export default function ServicesCta({ lang, copy }: ServicesCtaProps) {
  return (
    <section className="py-20 lg:py-24 bg-silver">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy">
          {copy.title}
        </h2>
        <p className="text-navy/45 mt-4 text-lg">{copy.description}</p>
        <Link href={`/${lang}/contact`} className="inline-block mt-8">
          <Button className="bg-navy hover:bg-navy/90 text-white rounded-full px-8 py-6 font-body text-sm group">
            {copy.button}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
