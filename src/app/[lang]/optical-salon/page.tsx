import { notFound } from "next/navigation";
import PageHero from "@/components/services/page-hero";
import AtelierIntro from "@/components/optical-salon/atelier-intro";
import OpticalServices from "@/components/optical-salon/optical-services";
import SalonBrands from "@/components/optical-salon/salon-brands";
import SalonCta from "@/components/optical-salon/salon-cta";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const SALON_IMG = "/assets/SALON.png";
const EYEWEAR_IMG = "/assets/GLASSE_FRAME.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: dict.opticalSalonPage.meta.title,
    description: dict.opticalSalonPage.meta.description,
  };
}

export default async function OpticalSalonPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const page = dict.opticalSalonPage;

  return (
    <>
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={SALON_IMG}
      />
      <AtelierIntro copy={page.intro} image={EYEWEAR_IMG} />
      <OpticalServices copy={page.services} />
      <SalonBrands copy={page.brands} />
      <SalonCta lang={lang} copy={page.cta} />
    </>
  );
}
