import { notFound } from "next/navigation";
import PageHero from "@/components/services/page-hero";
import DoctorSection from "@/components/about/doctor-section";
import MissionSection from "@/components/about/mission-section";
import ValuesSection from "@/components/about/values-section";
import EquipmentGallery from "@/components/about/equipment-gallery";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

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
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
  };
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
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={RECEPTION_IMG}
      />
      <DoctorSection copy={page.doctor} image={DOCTOR_IMG} />
      <MissionSection copy={page.mission} />
      <ValuesSection copy={page.values} />
      <EquipmentGallery copy={page.equipment} images={GALLERY_IMAGES} />
    </>
  );
}
