import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { localizedUrl } from "@/lib/seo";
import { siteConfig, type SitePath } from "@/lib/site";

type JsonLd = Record<string, unknown>;

function absoluteAsset(path: string) {
  return `${siteConfig.url}${path}`;
}

function clinicNode(lang: Locale, dict: Dictionary): JsonLd {
  return {
    "@type": ["MedicalClinic", "Optician"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: localizedUrl(lang),
    image: [
      absoluteAsset(siteConfig.images.hero),
      absoluteAsset(siteConfig.images.reception),
      absoluteAsset(siteConfig.images.salon),
    ],
    logo: `${siteConfig.url}/icon.svg`,
    description: dict.footer.description,
    email: siteConfig.email,
    telephone: [siteConfig.telephoneDisplay, siteConfig.mobileDisplay],
    currenciesAccepted: "PLN",
    availableLanguage: ["Polish", "English"],
    isAcceptingNewPatients: true,
    medicalSpecialty: "Ophthalmic",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapsUrl,
    sameAs: [siteConfig.mapsUrl],
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.address.region,
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "12:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "08:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "07:30",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "08:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    employee: { "@id": `${siteConfig.url}/#physician` },
  };
}

function physicianNode(dict: Dictionary): JsonLd {
  return {
    "@type": "Physician",
    "@id": `${siteConfig.url}/#physician`,
    name: siteConfig.doctorName,
    image: absoluteAsset(siteConfig.images.doctor),
    jobTitle: dict.aboutPage.doctor.eyebrow,
    worksFor: { "@id": `${siteConfig.url}/#clinic` },
    medicalSpecialty: "Ophthalmic",
    telephone: siteConfig.telephoneDisplay,
  };
}

function websiteNode(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.legalName,
    inLanguage: ["pl", "en"],
    publisher: { "@id": `${siteConfig.url}/#clinic` },
    about: { "@id": `${siteConfig.url}/#clinic` },
  };
}

export function breadcrumbJsonLd(
  lang: Locale,
  items: { name: string; path: SitePath | string }[]
): JsonLd {
  const pageUrl = localizedUrl(lang, items.at(-1)?.path ?? "");

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedUrl(lang, item.path),
    })),
  };
}

type PageJsonLdInput = {
  lang: Locale;
  dict: Dictionary;
  path: SitePath | string;
  title: string;
  description: string;
  pageType?: string | string[];
  crumbs: { name: string; path: SitePath | string }[];
  extra?: JsonLd[];
};

export function buildPageJsonLd({
  lang,
  dict,
  path,
  title,
  description,
  pageType = "WebPage",
  crumbs,
  extra = [],
}: PageJsonLdInput): JsonLd {
  const url = localizedUrl(lang, path);
  const types = Array.isArray(pageType) ? pageType : [pageType];

  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      clinicNode(lang, dict),
      physicianNode(dict),
      {
        "@type": types,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#clinic` },
        primaryImageOfPage: absoluteAsset(siteConfig.images.hero),
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumbJsonLd(lang, crumbs),
      ...extra,
    ],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceListJsonLd(lang: Locale, names: string[]): JsonLd {
  return {
    "@type": "ItemList",
    itemListElement: names.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalProcedure",
        name,
        url: localizedUrl(lang, "/services"),
        performer: { "@id": `${siteConfig.url}/#clinic` },
      },
    })),
  };
}
