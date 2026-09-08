"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Glasses,
  Sparkles,
  Clock,
  Info,
  Star,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

type HighlightIcon = keyof typeof iconMap;
type HighlightType = keyof typeof typeStyles;

const iconMap = {
  calendar: Calendar,
  glasses: Glasses,
  sparkles: Sparkles,
  clock: Clock,
  info: Info,
  star: Star,
} as const satisfies Record<string, LucideIcon>;

const typeStyles = {
  vacation: {
    bg: "bg-red-50",
    border: "border-red-500/15",
    icon: "text-red-500",
  },
  new_arrival: {
    bg: "bg-gold/5",
    border: "border-gold/20",
    icon: "text-gold",
  },
  announcement: {
    bg: "bg-silver",
    border: "border-navy/10",
    icon: "text-navy/60",
  },
  promotion: {
    bg: "bg-gold/5",
    border: "border-gold/20",
    icon: "text-gold",
  },
  general: {
    bg: "bg-silver",
    border: "border-navy/10",
    icon: "text-navy/60",
  },
} as const;

type HighlightsProps = {
  copy: Dictionary["highlights"];
};

export default function Highlights({ copy }: HighlightsProps) {
  const [index, setIndex] = useState(0);
  const highlights = copy.items.filter((item) => item.visible);

  if (highlights.length === 0) return null;

  const safeIndex = Math.min(index, highlights.length - 1);
  const current = highlights[safeIndex];
  if (!current) return null;

  const Icon =
    iconMap[current.icon as HighlightIcon] ?? iconMap.info;
  const style =
    typeStyles[current.type as HighlightType] ?? typeStyles.general;
  const typeLabel =
    copy.types[current.type as HighlightType] ?? copy.types.general;

  const next = () => setIndex((i) => (i + 1) % highlights.length);
  const prev = () =>
    setIndex((i) => (i - 1 + highlights.length) % highlights.length);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
              {copy.sectionLabel}
            </span>
            <span className="w-8 h-px bg-gold/40" />
          </div>
          {highlights.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous highlight"
                className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold/30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-navy/30 font-body">
                {safeIndex + 1} / {highlights.length}
              </span>
              <button
                type="button"
                onClick={next}
                aria-label="Next highlight"
                className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold/30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl border ${style.border} ${style.bg} p-6 lg:p-8 flex items-start gap-5`}
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Icon className={`w-5 h-5 ${style.icon}`} />
            </div>
            <div className="flex-1">
              <span
                className={`text-[10px] tracking-[0.2em] uppercase ${style.icon} font-body font-medium`}
              >
                {typeLabel}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-navy mt-1 mb-2">
                {current.title}
              </h3>
              <p className="text-navy/50 text-sm lg:text-base leading-relaxed">
                {current.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
