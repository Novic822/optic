"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "oculus_cookie_notice_ok";

type CookieNoticeProps = {
  lang: Locale;
  copy: {
    message: string;
    accept: string;
    learnMore: string;
  };
};

export default function CookieNotice({ lang, copy }: CookieNoticeProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={copy.message}
      className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-navy/10 bg-white shadow-xl shadow-navy/10 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-navy/70 leading-relaxed flex-1">
          {copy.message}{" "}
          <Link
            href={`/${lang}/cookies`}
            className="text-gold hover:underline font-medium"
          >
            {copy.learnMore}
          </Link>
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-navy hover:bg-navy/90 text-white text-sm font-body px-6 py-2.5 transition-colors"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
