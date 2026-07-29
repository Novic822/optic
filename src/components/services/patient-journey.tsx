"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  HeartPulse,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import type { Dictionary } from "@/i18n/get-dictionary";

const icons: LucideIcon[] = [
  CalendarCheck,
  Search,
  FileText,
  HeartPulse,
  RefreshCw,
];

type PatientJourneyProps = {
  copy: Dictionary["patientJourney"];
};

export default function PatientJourney({ copy }: PatientJourneyProps) {
  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label={copy.label}
          title={copy.title}
          description={copy.description}
          light
        />
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gold/20" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {copy.steps.map((step, i) => {
              const Icon = icons[i] ?? CalendarCheck;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-24 h-24 rounded-full bg-white/5 border border-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">
                    {step.label}
                  </h4>
                  <p className="text-white/40 text-xs">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
