import { notFound } from "next/navigation";
import PageHero from "@/components/services/page-hero";
import MedicalServices from "@/components/services/medical-services";
import PatientJourney from "@/components/services/patient-journey";
import ServicesCta from "@/components/services/services-cta";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const HERO_IMG =
  "https://media.base44.com/images/public/6a2c025b442be19169396a2c/5f205c1bb_generated_6c533051.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: dict.servicesPage.meta.title,
    description: dict.servicesPage.meta.description,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const page = dict.servicesPage;

  return (
    <>
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={HERO_IMG}
      />
      <MedicalServices copy={page.medical} />
      <PatientJourney copy={dict.patientJourney} />
      <ServicesCta lang={lang} copy={page.cta} />
    </>
  );
}
