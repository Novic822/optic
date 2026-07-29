"use client";

import { motion } from "framer-motion";
import { Award, Eye, Cpu, Shield, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const icons: LucideIcon[] = [Award, Eye, Cpu, Shield];

type TrustMetricsProps = {
  items: Dictionary["trustMetrics"];
};

export default function TrustMetrics({ items }: TrustMetricsProps) {
  return (
    <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {items.map((item, i) => {
          const Icon = icons[i] ?? Award;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-navy/5 border border-navy/5 group hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-display text-2xl lg:text-3xl font-semibold text-navy">
                {item.value}
              </div>
              <p className="text-sm text-navy/70 mt-1 font-medium">{item.label}</p>
              <p className="text-xs text-navy/40 mt-1">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
