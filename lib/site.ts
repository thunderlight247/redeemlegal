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
