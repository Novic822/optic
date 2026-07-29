import { notFound } from "next/navigation";
import ComingSoon from "@/components/shared/coming-soon";
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
  return { title: `${dict.nav.contact} — OCULUS` };
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

  return <ComingSoon lang={lang} title={dict.nav.contact} />;
}
