import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/services/page-hero";
import ContactDetails from "@/components/contact/contact-details";
import ContactMap from "@/components/contact/contact-map";
import FaqSection from "@/components/contact/faq-section";
import JsonLd from "@/components/seo/json-ld";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageJsonLd, faqJsonLd } from "@/lib/json-ld";
import { buildPageMetadata } from "@/lib/seo";

const HERO_IMG = "/assets/RECEPTION_IMG.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const meta = dict.contactPage.meta;
  return buildPageMetadata({
    lang,
    path: "/contact",
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  });
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
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "/contact",
          title: page.meta.title,
          description: page.meta.description,
          pageType: ["WebPage", "ContactPage"],
          crumbs: [
            { name: dict.nav.home, path: "" },
            { name: dict.nav.contact, path: "/contact" },
          ],
          extra: [faqJsonLd(page.faq.items)],
        })}
      />
      <PageHero
        label={page.hero.label}
        title={page.hero.title}
        description={page.hero.description}
        image={HERO_IMG}
        lang={lang}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${lang}` },
          { label: dict.nav.contact },
        ]}
      />
      <ContactDetails copy={page.details} />
      <FaqSection copy={page.faq} />
      <ContactMap
        title={page.map.title}
        address={page.map.address}
        directions={page.map.directions}
        iframeTitle={page.map.iframeTitle}
      />
    </>
  );
}
