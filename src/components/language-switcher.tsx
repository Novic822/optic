"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
  variant?: "dark" | "light";
  className?: string;
};

export default function LanguageSwitcher({
  lang,
  label,
  variant = "dark",
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function switchPath(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return (
    <nav
      aria-label={label}
      className={cn(
        "flex items-center gap-1 rounded-full px-1.5 py-1",
        variant === "dark"
          ? "border border-white/15 bg-white/10"
          : "border border-navy/10 bg-navy/5",
        className
      )}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={switchPath(locale)}
          hrefLang={locale}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium tracking-wider uppercase transition-colors",
            locale === lang
              ? "bg-gold text-white"
              : variant === "dark"
                ? "text-white/70 hover:text-white"
                : "text-navy/60 hover:text-navy"
          )}
        >
          {locale}
        </Link>
      ))}
    </nav>
  );
}
