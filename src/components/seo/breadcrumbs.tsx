import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  lang: Locale;
  items: Crumb[];
  variant?: "light" | "dark";
  className?: string;
};

export default function Breadcrumbs({
  lang,
  items,
  variant = "light",
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label={lang === "pl" ? "Okruszki" : "Breadcrumb"} className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-wide">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span
                  aria-hidden
                  className={cn(
                    variant === "light" ? "text-white/35" : "text-navy/30"
                  )}
                >
                  /
                </span>
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    variant === "light"
                      ? "text-white/55 hover:text-gold"
                      : "text-navy/50 hover:text-gold"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={cn(
                    variant === "light" ? "text-white/80" : "text-navy/70"
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
