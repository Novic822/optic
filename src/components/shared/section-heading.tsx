"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={cn(
        "max-w-2xl mb-12 lg:mb-16",
        center && "mx-auto text-center",
        className
      )}
    >
      {label ? (
        <span className="text-xs tracking-[0.25em] uppercase font-body font-medium text-gold block mb-4">
          {label}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base lg:text-lg leading-relaxed",
            light ? "text-white/60" : "text-navy/50"
          )}
        >
          {description}
        </p>
      ) : null}
      <div className={cn("gold-rule mt-8 max-w-16", center && "mx-auto")} />
    </motion.div>
  );
}
