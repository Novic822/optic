import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/services/page-hero";
import MedicalServices from "@/components/services/medical-services";
import PatientJourney from "@/components/services/patient-journey";
import ServicesCta from "@/components/services/services-cta";
import JsonLd from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageJsonLd, serviceListJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

const HERO_SERVICE_IMG = "/assets/HERO_SERVICE_IMG.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const meta = dict.servicesPage.meta;
  return buildPageMetadata({
    lang,
    path: "/services",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
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
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "/services",
          title: page.meta.title,
          description: page.meta.description,
          pageType: ["WebPage", "MedicalWebPage", "CollectionPage"],
          crumbs: [
            { name: dict.nav.home, path: "" },
            { name: dict.nav.services, path: "/services" },
          ],
          extra: [serviceListJsonLd(lang, page.medical.items.map((item) => item.title))],
        })}
      />
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={HERO_SERVICE_IMG}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${lang}` },
          { label: dict.nav.services },
        ]}
        lang={lang}
      />
      <MedicalServices copy={page.medical} />
      <PatientJourney copy={dict.patientJourney} />
      <ServicesCta lang={lang} copy={page.cta} />
    </>
  );
}
