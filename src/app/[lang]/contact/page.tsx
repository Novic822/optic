import { notFound } from "next/navigation";
import PageHero from "@/components/services/page-hero";
import ContactDetails from "@/components/contact/contact-details";
import ContactMap from "@/components/contact/contact-map";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const HERO_IMG = "/assets/RECEPTION_IMG.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: dict.contactPage.meta.title,
    description: dict.contactPage.meta.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;

  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const page = dict.contactPage;

  return (
    <>
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={HERO_IMG}
      />
      <ContactDetails copy={page.details} />
      <ContactMap
        title={page.map.title}
        address={page.map.address}
        directions={page.map.directions}
        iframeTitle={page.map.iframeTitle}
      />
    </>
  );
}
