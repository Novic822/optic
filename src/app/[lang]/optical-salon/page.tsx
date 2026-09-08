import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/services/page-hero";
import AtelierIntro from "@/components/optical-salon/atelier-intro";
import OpticalServices from "@/components/optical-salon/optical-services";
import SalonBrands from "@/components/optical-salon/salon-brands";
import SalonCta from "@/components/optical-salon/salon-cta";
import JsonLd from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

const SALON_IMG = "/assets/SALON.png";
const EYEWEAR_IMG = "/assets/GLASSE_FRAME.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const meta = dict.opticalSalonPage.meta;
  return buildPageMetadata({
    lang,
    path: "/optical-salon",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
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
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "/optical-salon",
          title: page.meta.title,
          description: page.meta.description,
          pageType: ["WebPage", "CollectionPage"],
          crumbs: [
            { name: dict.nav.home, path: "" },
            { name: dict.nav.opticalSalon, path: "/optical-salon" },
          ],
        })}
      />
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={SALON_IMG}
        lang={lang}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${lang}` },
          { label: dict.nav.opticalSalon },
        ]}
      />
      <AtelierIntro copy={page.intro} image={EYEWEAR_IMG} />
      <OpticalServices copy={page.services} />
      <SalonBrands copy={page.brands} />
      <SalonCta lang={lang} copy={page.cta} />
    </>
  );
}
