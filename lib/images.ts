/** All images are local files in /public/images (client-supplied unless noted). */
export const images = {
  hero: "/images/stamp-commissioner-for-oaths.jpg",
  who: "/images/consultation-office.jpg",
  about: "/images/reading-documents.jpg",
  cta: "/images/gavel.jpg",
  office: "/images/office-wall.jpg",
  services: {
    "affidavits-and-statutory-declarations": "/images/stamp-commissioner-for-oaths.jpg",
    "deeds-and-power-of-attorney": "/images/power-of-attorney-gavel.jpg",
    "gazette-related-services": "/images/gavel-on-files.jpg",
    "publication-filing-and-documentation": "/images/reading-documents.jpg",
    "paralegal-consultation-and-training": "/images/law-library-desk.jpg",
    "diaspora-documentation-assistance": "/images/travellers-airport.jpg",
    "attestation-and-notarisation-of-documents": "/images/traveller-passport-window.jpg",
    "change-of-name-and-personal-records": "/images/reading-documents.jpg",
    "property-land-and-vehicle-documents": "/images/gavel.jpg",
    "contracts-agreements-and-business-documents": "/images/consultation-office.jpg",
    "marriage-family-and-travel-attestations": "/images/family-departures.jpg",
    "wills-estates-and-court-documents": "/images/signing-documents.jpg",
    "court-proceedings-support": "/images/court-martyrs-memorial.jpg",
    "book-writing-and-publishing": "/images/books-banner.jpg",
    "ghostwriting-editing-and-self-publishing": "/images/books-banner.jpg",
  } as Record<string, string>,
  /** CSS object-position for banners that crop tall photos. */
  focus: {
    "marriage-family-and-travel-attestations": "50% 22%",
    "attestation-and-notarisation-of-documents": "50% 30%",
  } as Record<string, string>,
} as const;
