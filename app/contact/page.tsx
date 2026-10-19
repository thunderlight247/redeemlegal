import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryBuilder from "@/components/EnquiryBuilder";
import MapSection from "@/components/MapSection";
import { languages, site, socials, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Offices",
  description: "Contact Redeem Publication and Legal Consult by WhatsApp, phone or email. Offices in Ashaiman (main), Goshen (Sebrepor) and Tema (Michel Camp).",
};

type Row = { icon: typeof Phone; label: string; text: string; href?: string; external?: boolean };

export default function ContactPage() {
  const rows: Row[] = [
    { icon: MessageCircle, label: "WhatsApp", text: "Message us directly", href: whatsappLink(), external: true },
    { icon: Phone, label: "Telephone", text: site.phoneDisplay, href: site.phoneHref },
    { icon: Mail, label: "Email", text: site.email, href: site.emailHref },
    { icon: Clock, label: "Opening hours", text: site.hours },
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
              {rows.map((r) => {
                const inner = (
                  <>
                    <r.icon className="h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-gold-deep">{r.label}</span>
                      <span className="block text-sm">{r.text}</span>
                    </span>
                  </>
                );
                return (
                  <li key={r.label}>
                    {r.href ? (
                      <a href={r.href} {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-4 p-5 transition-colors hover:bg-ivory">{inner}</a>
                    ) : (
                      <div className="flex items-center gap-4 p-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-sm text-muted">Hours may differ between offices. Please message first to confirm that someone is available before you visit.</p>
            <p className="mt-2 text-sm text-muted">Staff can explain things in {languages.join(", ")}.</p>
            <p className="mt-2 text-sm text-muted">
              Follow Redeem on{" "}
              {socials.map((s, i) => (
                <span key={s.name}>
                  {i > 0 ? " and " : ""}
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-deep underline underline-offset-4">{s.name}<span className="sr-only"> (opens in a new tab)</span></a>
                </span>
              ))}
              .
            </p>
          </Reveal>
          <Reveal><EnquiryBuilder /></Reveal>
        </div>
      </section>

      <MapSection />
    </>
  );
}
