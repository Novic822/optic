"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedCardProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedCard({
  children,
  delay = 0,
  className,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
}
