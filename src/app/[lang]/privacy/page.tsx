import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LegalDocument from "@/components/legal/legal-document";
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
    path: "/privacy",
    title: dict.privacyPage.meta.title,
    description: dict.privacyPage.meta.description,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  if (!isLocale(langParam)) notFound();

  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const page = dict.privacyPage;

  return (
    <>
      <JsonLd
        data={buildPageJsonLd({
          lang,
          dict,
          path: "/privacy",
          title: page.meta.title,
          description: page.meta.description,
          crumbs: [
            { name: dict.nav.home, path: "" },
            { name: dict.footer.legal.privacy, path: "/privacy" },
          ],
        })}
      />
      <LegalDocument
        title={page.title}
        updated={page.updated}
        intro={page.intro}
        sections={page.sections}
        lang={lang}
        breadcrumbs={[
          { label: dict.nav.home, href: `/${lang}` },
          { label: dict.footer.legal.privacy },
        ]}
      />
    </>
  );
}
