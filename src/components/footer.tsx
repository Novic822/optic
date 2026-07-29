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
          {/* Brand */}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.quickLinksTitle}
            </h4>
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

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.contactTitle}
            </h4>
            <div className="flex flex-col gap-4">
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
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-body font-medium">
              {copy.hoursTitle}
            </h4>
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

        {/* Bottom */}
        <div className="gold-rule mt-12 mb-8 opacity-30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {year} {copy.copyright}
          </p>
          <a
            href="https://www.google.com/maps/place/OCULUS+dr+Magdalena+Turek/@52.0889736,16.6450183,42m/data=!3m1!1e3!4m15!1m8!3m7!1s0x4705b107f8e91007:0x8047417800748a5e!2sStanis%C5%82awa+Moniuszki+10,+64-000+Ko%C5%9Bcian,+Poland!3b1!8m2!3d52.0889979!4d16.6451884!16s%2Fg%2F11b8y5lgdm!3m5!1s0x4705b107f851e7a9:0xcde61effdea9a636!8m2!3d52.0889849!4d16.6451353!16s%2Fg%2F1thg94h0?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-gold text-xs transition-colors"
          >
            {copy.maps}
          </a>
        </div>
      </div>
    </footer>
  );
}
