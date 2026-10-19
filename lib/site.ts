export const site = {
  name: "Redeem Publication and Legal Consult",
  shortName: "Redeem Publication",
  tagline: "Commissioner for Oaths Services",
  phoneDisplay: "+233 53 046 3052",
  phoneHref: "tel:+233530463052",
  whatsappBase: "https://wa.me/233530463052",
  // Google Maps SEARCH link (not a verified Business Profile URL).
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Redeem+Publication+and+Legal+Consult+Ashaiman",
  location: "Ashaiman, Greater Accra, Ghana",
  address: "Inside the Ashaiman Old District Court, Ashaiman, Greater Accra, Ghana",
  addressShort: "Inside the Ashaiman Old District Court",
  hours: "Monday to Friday, 7:00 am to 4:00 pm",
  email: "redeemlegalconsult@gmail.com",
  emailHref: "mailto:redeemlegalconsult@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://redeemlegalconsult.com",
} as const;

export const defaultMessage =
  "Hello Redeem Publication and Legal Consult, I would like to enquire about your documentation services.";

export function whatsappLink(message: string = defaultMessage): string {
  return `${site.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Publications" },
  { href: "/contact", label: "Contact" },
] as const;

export type OfficeLocation = {
  id: string;
  name: string;
  branchBadge: string;
  area: string;
  detail: string;
  landmarks: string;
  transitRoutes: string;
  mapsHref: string;
  isHeadOffice?: boolean;
};

/** Offices with direct Google Maps pins and wayfinding landmark details */
export const offices: OfficeLocation[] = [
  {
    id: "main-office",
    name: "Main Office",
    branchBadge: "Head Office · Court Complex",
    area: "Ashaiman Central",
    detail: "Inside the Ashaiman Old District Court, Ashaiman, Greater Accra",
    landmarks: "Located directly inside the Ashaiman Old District Court premises, near the Ashaiman Police Station and Municipal Assembly, just off the main market traffic light junction.",
    transitRoutes: "Easily reached from Ashaiman Overhead, Newtown, Valco Flat, Lebanon, and Tema Motorway Roundabout. Shared taxis and trotros drop at the court junction.",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Ashaiman+Old+District+Court+Ashaiman+Ghana",
    isHeadOffice: true,
  },
  {
    id: "goshen-branch",
    name: "Goshen Branch",
    branchBadge: "Branch Office · Sebrepor",
    area: "Sebrepor, Ashaiman",
    detail: "Goshen, opposite Ebenezer Hill Basic School, Sebrepor, Greater Accra",
    landmarks: "Located in Goshen along the Sebrepor main corridor, directly opposite the entrance gate of Ebenezer Hill Basic School.",
    transitRoutes: "Best for clients coming from Golf City, Bediako, New Jerusalem, Sebrepor, and Afienya. Board any Sebrepor-bound trotro or taxi and alight opposite Ebenezer Hill School.",
    mapsHref: "https://maps.app.goo.gl/NPg4aPUDtjzoBo8e9",
    isHeadOffice: false,
  },
  {
    id: "tema-branch",
    name: "Tema / Michel Camp Branch",
    branchBadge: "Branch Office · Market Area",
    area: "Michel Camp / Tema",
    detail: "Michel Camp, Barracks Market, along Tema-Akosombo Road",
    landmarks: "Positioned within the active Michel Camp Barracks Market area, close to the military barracks main gate and market square.",
    transitRoutes: "Most accessible for military personnel, Tema Community 25, Kpone, Dawhenya, and Afienya commuters. Alight at the Michel Camp Market Gate along the highway.",
    mapsHref: "https://maps.app.goo.gl/2wXKuZsQvfpQcuFS7",
    isHeadOffice: false,
  },
];

export const areasServed = [
  "Ashaiman",
  "Tema",
  "Sakumono",
  "Golf City",
  "Bediako",
  "Afienya",
  "Dawhenya",
  "Within Ghana",
  "Overseas Clients",
] as const;

export const languages = ["English", "Twi", "Ga"] as const;

/** Social profiles supplied by the client. The Facebook link is a share link to a post; replace with the page link when available. */
export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/share/p/19YczcNvFK/" },
  { name: "TikTok", href: "https://www.tiktok.com/@commissioner.dick" },
] as const;
