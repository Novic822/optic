import "server-only";
import type { Locale } from "@/i18n/config";
import type en from "@/dictionaries/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  pl: () => import("@/dictionaries/pl.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
