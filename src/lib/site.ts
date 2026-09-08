export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://optic-phi.vercel.app").replace(
    /\/$/,
    ""
  ),
  name: "OCULUS",
  legalName: "OCULUS Dr Magdalena Turek",
  doctorName: "Dr Magdalena Turek",
  email: "oculus2@wp.pl",
  telephone: "+48655114027",
  telephoneDisplay: "+48 65 511 40 27",
  mobile: "+48602463717",
  mobileDisplay: "+48 602 463 717",
  address: {
    street: "Stanisława Moniuszki 10",
    streetShort: "Moniuszki 10",
    city: "Kościan",
    postalCode: "64-000",
    region: "Wielkopolskie",
    country: "PL",
    countryName: "Poland",
  },
  geo: {
    latitude: 52.0889849,
    longitude: 16.6451353,
  },
  mapsUrl:
    "https://www.google.com/maps/place/OCULUS+dr+Magdalena+Turek/@52.0889849,16.6451353,17z",
  images: {
    hero: "/assets/HERO_IMG.png",
    reception: "/assets/RECEPTION_IMG.png",
    doctor: "/assets/DOCTOR_IMG.png",
    salon: "/assets/SALON.png",
  },
} as const;

export const siteRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/optical-salon", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
] as const;

export type SitePath = (typeof siteRoutes)[number]["path"];
