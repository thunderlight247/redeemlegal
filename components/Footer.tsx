import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-night text-white/80">
      <div className="hairline-gold" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo size={88} />
          <p className="mt-5 font-display text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Documentation, publication and filing support, with clear guidance for clients in Ghana and abroad.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <p className="eyebrow eyebrow-light mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-gold-light">{l.label}</Link></li>
            ))}
            <li><Link href="/privacy" className="hover:text-gold-light">Privacy (draft)</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer services" className="md:col-span-3">
          <p className="eyebrow eyebrow-light mb-4">Services</p>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-gold-light">{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow eyebrow-light mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li><a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-light"><Phone className="h-4 w-4 text-gold" aria-hidden="true" />{site.phoneDisplay}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light"><MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />WhatsApp enquiry</a></li>
            <li><a href={site.mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light"><MapPin className="h-4 w-4 text-gold" aria-hidden="true" />{site.location}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="max-w-xl">
            Information on this website is general and is not legal advice. Redeem is not the publisher of the Ghana Gazette and does not decide whether any document is accepted by an official body.
          </p>
        </div>
      </div>
    </footer>
  );
}
