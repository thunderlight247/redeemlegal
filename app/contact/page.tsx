import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryBuilder from "@/components/EnquiryBuilder";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Redeem Publication and Legal Consult in Ashaiman, Greater Accra, Ghana by WhatsApp or telephone.",
};

export default function ContactPage() {
  const rows = [
    { icon: MessageCircle, label: "WhatsApp", text: "Message us directly", href: whatsappLink(), external: true },
    { icon: Phone, label: "Telephone", text: site.phoneDisplay, href: site.phoneHref, external: false },
    { icon: MapPin, label: "Location", text: `${site.location} (view on Google Maps)`, href: site.mapsHref, external: true },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak with Redeem">
        WhatsApp is the quickest way to start. Tell us what you need and the business will respond with next steps.
      </PageHero>
      <section className="bg-ivory">
        <div className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-display text-4xl">{site.name}</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line bg-white">
              {rows.map((r) => (
                <li key={r.label}>
                  <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 p-5 transition-colors hover:bg-ivory">
                    <r.icon className="h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-gold-deep">{r.label}</span>
                      <span className="block text-sm">{r.text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">The map link opens a Google Maps search for the business name in Ashaiman. A street address and opening hours have not yet been provided.</p>
          </Reveal>
          <Reveal><EnquiryBuilder /></Reveal>
        </div>
      </section>
    </>
  );
}
