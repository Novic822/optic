import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import TrustMetrics from "@/components/home/trust-metrics";
import Highlights from "@/components/home/highlights";
import AboutPreview from "@/components/home/about-preview";
import ServicesOverview from "@/components/home/services-overview";
import BrandShowcase from "@/components/home/brand-showcase";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";
import JsonLd from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: "",
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    absoluteTitle: true,
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "",
          title: dict.meta.title,
          description: dict.meta.description,
          pageType: ["WebPage", "MedicalWebPage"],
          crumbs: [{ name: dict.nav.home, path: "" }],
        })}
      />
      <Hero lang={lang} copy={dict.hero} />
      <TrustMetrics items={dict.trustMetrics} />
      <Highlights copy={dict.highlights} />
      <AboutPreview lang={lang} copy={dict.aboutPreview} />
      <ServicesOverview lang={lang} copy={dict.servicesOverview} />
      <BrandShowcase copy={dict.brandShowcase} />
      <Testimonials copy={dict.testimonials} />
      <CTASection lang={lang} copy={dict.cta} />
    </>
  );
}
