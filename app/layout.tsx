import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { areasServed, site, socials } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Documentation services in Ashaiman, Ghana`,
    template: `%s | ${site.name}`,
  },
  description:
    "Commissioner for Oaths services, affidavits, deeds, attestation and notarisation, gazette-related enquiries and book publishing in Ashaiman, Greater Accra, Ghana. Enquire on WhatsApp.",
  openGraph: {
    title: site.name,
    description: "Professional documentation services and clear guidance in Ashaiman, Ghana.",
    type: "website",
    locale: "en_GH",
    images: ["/images/redeem-logo.png"],
  },
};

export const viewport: Viewport = { themeColor: "#191713" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  telephone: "+233530463052",
  email: site.email,
  sameAs: socials.map((s) => s.href),
  areaServed: areasServed.map((a) => ({ "@type": "Place", name: a })),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressShort,
    addressLocality: "Ashaiman",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
