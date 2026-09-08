import type { MetadataRoute } from "next";
import { defaultLocale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description:
      "Gabinet okulistyczny i salon optyczny w Kościanie. Badania wzroku, diagnostyka jaskry i okulary korekcyjne.",
    start_url: `/${defaultLocale}`,
    lang: defaultLocale,
    display: "standalone",
    background_color: "#f0f1f3",
    theme_color: "#0b1d36",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
