import type { Metadata } from "next";
import { defaultLocale, type Locale } from "@/i18n/config";
import { siteConfig, type SitePath } from "@/lib/site";

export function localizedUrl(lang: Locale, path: SitePath | string = "") {
  return `${siteConfig.url}/${lang}${path}`;
}

export function languageAlternates(path: SitePath | string = "") {
  return {
    pl: localizedUrl("pl", path),
    en: localizedUrl("en", path),
    "x-default": localizedUrl(defaultLocale, path),
  };
}

export function ogLocale(lang: Locale) {
  return lang === "pl" ? "pl_PL" : "en_US";
}

type PageMetaInput = {
  lang: Locale;
  path: SitePath | string;
  title: string;
  description: string;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  lang,
  path,
  title,
  description,
  keywords,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = localizedUrl(lang, path);
  const locale = ogLocale(lang);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      locale,
      alternateLocale: [lang === "pl" ? "en_US" : "pl_PL"],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
