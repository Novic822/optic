import { notFound } from "next/navigation";
import LegalDocument from "@/components/legal/legal-document";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.privacyPage.meta.title,
    description: dict.privacyPage.meta.description,
  };
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
    <LegalDocument
      title={page.title}
      updated={page.updated}
      intro={page.intro}
      sections={page.sections}
    />
  );
}
