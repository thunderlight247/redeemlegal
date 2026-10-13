/**
 * PLACEHOLDER PHOTOGRAPHY: unverified, to be replaced.
 * These are generic seeded stand-in photos (picsum.photos), shown in grayscale and
 * toned gold by <Photo />. They are NOT pictures of the business, its staff or its office.
 * To swap in real or licensed photos, change the URLs below (or use files in /public/images
 * such as "/images/hero.jpg"). Remote hosts must be listed in next.config.mjs.
 */
const p = (seed: string, w = 1600, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const images = {
  hero: "/images/stamp-commissioner-for-oaths.jpg", // client-supplied; licence unverified
  who: p("redeem-who", 1600, 700),
  about: p("redeem-about", 1600, 700),
  cta: p("redeem-cta", 1800, 900),
  services: {
    "affidavits-and-statutory-declarations": "/images/stamp-commissioner-for-oaths.jpg",
    "deeds-and-power-of-attorney": p("redeem-deeds", 1200, 700),
    "gazette-related-services": p("redeem-gazette", 1200, 700),
    "publication-filing-and-documentation": p("redeem-filing", 1200, 700),
    "paralegal-consultation-and-training": "/images/gavel.jpg", // client-supplied; use sparingly
    "diaspora-documentation-assistance": p("redeem-diaspora", 1200, 700),
  } as Record<string, string>,
} as const;
