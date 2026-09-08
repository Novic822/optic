import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { languageAlternates, localizedUrl } from "@/lib/seo";
import { siteConfig, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((lang) =>
    siteRoutes.map((route) => ({
      url: localizedUrl(lang, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: lang === "pl" ? route.priority : Number((route.priority * 0.9).toFixed(2)),
      alternates: {
        languages: languageAlternates(route.path),
      },
      ...(route.path === ""
        ? { images: [`${siteConfig.url}${siteConfig.images.hero}`] }
        : {}),
    }))
  );
}
