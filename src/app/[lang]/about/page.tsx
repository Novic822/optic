import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/services/page-hero";
import DoctorSection from "@/components/about/doctor-section";
import MissionSection from "@/components/about/mission-section";
import ValuesSection from "@/components/about/values-section";
import EquipmentGallery from "@/components/about/equipment-gallery";
import JsonLd from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

const RECEPTION_IMG = "/assets/RECEPTION_IMG.png";
const DOCTOR_IMG = "/assets/DOCTOR_IMG.png";
const GALLERY_IMAGES = [
  "/assets/RECEPTION_IMG.png",
  "/assets/CONSULT_IMG.png",
  "/assets/HERO_SERVICE_IMG.png",
  "/assets/SALON.png",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const meta = dict.aboutPage.meta;
  return buildPageMetadata({
    lang,
    path: "/about",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const page = dict.aboutPage;

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "/about",
          title: page.meta.title,
          description: page.meta.description,
          pageType: ["WebPage", "AboutPage", "ProfilePage"],
          crumbs: [
            { name: dict.nav.home, path: "" },
            { name: dict.nav.about, path: "/about" },
          ],
        })}
      />
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={RECEPTION_IMG}
        lang={lang}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${lang}` },
          { label: dict.nav.about },
        ]}
      />
      <DoctorSection copy={page.doctor} image={DOCTOR_IMG} />
      <MissionSection copy={page.mission} />
      <ValuesSection copy={page.values} />
      <EquipmentGallery copy={page.equipment} images={GALLERY_IMAGES} />
    </>
  );
}
