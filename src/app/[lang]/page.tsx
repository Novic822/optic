import { notFound } from "next/navigation";
import Hero from "@/components/home/hero";
import TrustMetrics from "@/components/home/trust-metrics";
import Highlights from "@/components/home/highlights";
import AboutPreview from "@/components/home/about-preview";
import ServicesOverview from "@/components/home/services-overview";
import BrandShowcase from "@/components/home/brand-showcase";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

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
