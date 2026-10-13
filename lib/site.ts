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
  email: "calebdickens212@gmail.com",
  emailHref: "mailto:calebdickens212@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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
  { href: "/contact", label: "Contact" },
] as const;

const mapsSearch = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

/** Offices. Maps links are text searches, not verified Business Profile URLs. */
export const offices = [
  {
    name: "Main office",
    area: "Ashaiman",
    detail: "Inside the Ashaiman Old District Court",
    mapsHref: site.mapsHref,
  },
  {
    name: "Goshen office",
    area: "Sebrepor, Ashaiman",
    detail: "Goshen, opposite Ebenezer Hill Basic School, Sebrepor",
    mapsHref: mapsSearch("Redeem Publication and Legal Consult Goshen Ebenezer Hill Basic School Sebrepor Ashaiman"),
  },
  {
    name: "Tema office",
    area: "Tema",
    detail: "Michel Camp, Barracks Market",
    mapsHref: mapsSearch("Redeem Publication and Legal Consult Michel Camp Barracks Market Tema"),
  },
] as const;

export const areasServed = ["Ashaiman", "Tema", "Sakumono", "Golf City", "Bediako", "Afienya", "Dawhenya"] as const;

export const languages = ["English", "Twi", "Ga"] as const;
