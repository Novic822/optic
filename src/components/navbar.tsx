"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "opticalSalon", path: "/optical-salon" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
] as const;

type NavbarProps = {
  lang: Locale;
  copy: Dictionary["nav"];
  languageLabel: string;
};

export default function Navbar({ lang, copy, languageLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const homeHref = `/${lang}`;
  const hasDarkHero =
    pathname === homeHref ||
    pathname === `${homeHref}/` ||
    pathname === `/${lang}/services` ||
    pathname.startsWith(`/${lang}/services/`);
  const onDark = !scrolled && !mobileOpen && hasDarkHero;

  function hrefFor(path: string) {
    return path === "/" ? homeHref : `/${lang}${path}`;
  }

  function isActive(path: string) {
    const href = hrefFor(path);
    if (path === "/") return pathname === href || pathname === `${href}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const labels: Record<(typeof navItems)[number]["key"], string> = {
    home: copy.home,
    services: copy.services,
    opticalSalon: copy.opticalSalon,
    about: copy.about,
    contact: copy.contact,
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || mobileOpen ? "glass shadow-lg shadow-navy/5" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={homeHref} className="flex items-center gap-3 group">
              <div
                className={cn(
                  "w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold/10 transition-colors"
                )}
              >
                <div className="w-4 h-4 rounded-full border border-gold" />
              </div>
              <div>
                <span
                  className={cn(
                    "font-display text-xl font-semibold tracking-wide transition-colors",
                    onDark ? "text-white" : "text-navy"
                  )}
                >
                  {copy.brand}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-gold uppercase font-body">
                  {copy.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    href={hrefFor(link.path)}
                    className={cn(
                      "text-sm tracking-wide transition-colors relative group",
                      active
                        ? onDark
                          ? "text-white font-medium"
                          : "text-navy font-medium"
                        : onDark
                          ? "text-white/70 hover:text-white"
                          : "text-navy/60 hover:text-navy"
                    )}
                  >
                    {labels[link.key]}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                        active ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher
                lang={lang}
                label={languageLabel}
                variant={onDark ? "dark" : "light"}
              />
              <a
                href="tel:+48655114027"
                className={cn(
                  "flex items-center gap-2 text-sm transition-colors hover:text-gold",
                  onDark ? "text-white/70" : "text-navy/60"
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+48 65 511 40 27</span>
              </a>
              <Link href={`/${lang}/contact`}>
                <Button
                  className={cn(
                    "rounded-full px-6 text-sm font-body",
                    onDark
                      ? "bg-gold hover:bg-gold/90 text-white"
                      : "bg-navy hover:bg-navy/90 text-white"
                  )}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {copy.schedule}
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                onDark ? "text-white" : "text-navy"
              )}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={hrefFor(link.path)}
                    className={cn(
                      "font-display text-2xl",
                      isActive(link.path) ? "text-navy" : "text-navy/50"
                    )}
                  >
                    {labels[link.key]}
                  </Link>
                </motion.div>
              ))}
              <div className="gold-rule mt-4" />
              <div className="flex flex-col gap-3 mt-2">
                <LanguageSwitcher
                  lang={lang}
                  label={languageLabel}
                  variant="light"
                  className="self-start"
                />
                <a
                  href="tel:+48655114027"
                  className="flex items-center gap-3 text-navy/70"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  +48 65 511 40 27
                </a>
                <Link href={`/${lang}/contact`}>
                  <Button className="bg-navy text-white rounded-full w-full mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {copy.schedule}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
