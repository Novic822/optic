"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedCard from "@/components/shared/animated-card";
import type { Dictionary } from "@/i18n/get-dictionary";

type ContactDetailsProps = {
  copy: Dictionary["contactPage"]["details"];
};

export default function ContactDetails({ copy }: ContactDetailsProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.25em] uppercase text-gold font-body font-medium">
              {copy.eyebrow}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mt-4">
              {copy.title}
            </h2>
            <div className="gold-rule mt-6 max-w-16" />
          </motion.div>

          <div className="mt-10 space-y-6">
            <AnimatedCard delay={0.1}>
              <a
                href="https://www.google.com/maps/place/OCULUS+dr+Magdalena+Turek/@52.0889849,16.6451353,17z/data=!3m1!4b1!4m6!3m5!1s0x4705b107f851e7a9:0xcde61effdea9a636!8m2!3d52.0889849!4d16.6451353!16s%2Fg%2F1thg94h0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-silver flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-navy font-medium">{copy.addressLine1}</p>
                  <p className="text-navy/50 text-sm">{copy.addressLine2}</p>
                </div>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={0.15}>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-silver flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <a
                    href="tel:+48655114027"
                    className="text-navy font-medium hover:text-gold transition-colors"
                  >
                    +48 65 511 40 27
                  </a>
                  <p className="text-navy/50 text-sm">{copy.landlineLabel}</p>
                  <a
                    href="tel:+48602463717"
                    className="text-navy font-medium block mt-1 hover:text-gold transition-colors"
                  >
                    +48 602 463 717
                  </a>
                  <p className="text-navy/50 text-sm">{copy.mobileLabel}</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <a
                href="mailto:oculus2@wp.pl"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-silver flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-navy font-medium">oculus2@wp.pl</p>
                  <p className="text-navy/50 text-sm">{copy.emailLabel}</p>
                </div>
              </a>
            </AnimatedCard>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedCard delay={0.25}>
              <div className="bg-silver rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gold" />
                  <h4 className="text-sm font-semibold text-navy">
                    {copy.nfzTitle}
                  </h4>
                </div>
                <div className="space-y-2">
                  {copy.nfzHours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-navy/50">{h.day}</span>
                      <span className="text-navy font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-navy rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gold" />
                  <h4 className="text-sm font-semibold text-white">
                    {copy.privateTitle}
                  </h4>
                </div>
                <div className="space-y-2">
                  {copy.privateHours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-white/40">{h.day}</span>
                      <span className="text-white font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
