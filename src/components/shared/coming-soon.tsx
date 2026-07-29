import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type ComingSoonProps = {
  lang: Locale;
  title: string;
};

export default async function ComingSoon({ lang, title }: ComingSoonProps) {
  const dict = await getDictionary(lang);

  return (
    <section className="flex flex-1 items-center justify-center bg-silver px-6 pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-lg text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
          {dict.comingSoon.label}
        </span>
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-4 leading-tight">
          {title}
        </h1>
        <div className="gold-rule mt-8 max-w-16 mx-auto" />
        <p className="mt-6 text-navy/50 text-base lg:text-lg leading-relaxed">
          {dict.comingSoon.message}
        </p>
      </div>
    </section>
  );
}
