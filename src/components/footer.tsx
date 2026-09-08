import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type FooterProps = {
  lang: Locale;
  copy: Dictionary["footer"];
};

const quickLinks = [
  { key: "services" as const, path: "/services" },
  { key: "opticalSalon" as const, path: "/optical-salon" },
  { key: "about" as const, path: "/about" },
  { key: "contact" as const, path: "/contact" },
];

export default function Footer({ lang, copy }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-gold" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold tracking-wide">
                  {copy.brand}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-gold uppercase font-body">
                  {copy.tagline}
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              {copy.description}
            </p>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.quickLinksTitle}
            </h2>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={`/${lang}${link.path}`}
                  className="text-white/50 hover:text-gold transition-colors text-sm"
                >
                  {copy.links[link.key]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.contactTitle}
            </h2>
            <address className="flex flex-col gap-4 not-italic">
              <a
                href="tel:+48655114027"
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold/70 shrink-0" />
                +48 65 511 40 27
              </a>
              <a
                href="tel:+48602463717"
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold/70 shrink-0" />
                +48 602 463 717
              </a>
              <a
                href="mailto:oculus2@wp.pl"
                className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold/70 shrink-0" />
                oculus2@wp.pl
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
                <span>
                  {copy.addressLine1}
                  <br />
                  {copy.addressLine2}
                </span>
              </div>
            </address>
          </div>

          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.hoursTitle}
            </h2>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 font-medium mb-1">{copy.nfzLabel}</p>
                  <p>{copy.nfzHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 font-medium mb-1">
                    {copy.privateLabel}
                  </p>
                  <p>{copy.privateMon}</p>
                  <p>{copy.privateThu}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-white/35 text-xs leading-relaxed max-w-3xl">
          {copy.disclaimer}
        </p>

        <div className="gold-rule mt-8 mb-8 opacity-30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {year} {copy.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href={`/${lang}/privacy`}
              className="text-white/30 hover:text-gold text-xs transition-colors"
            >
              {copy.legal.privacy}
            </Link>
            <Link
              href={`/${lang}/cookies`}
              className="text-white/30 hover:text-gold text-xs transition-colors"
            >
              {copy.legal.cookies}
            </Link>
            <a
              href="https://www.google.com/maps/place/OCULUS+dr+Magdalena+Turek/@52.0889849,16.6451353,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-gold text-xs transition-colors"
            >
              {copy.maps}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
