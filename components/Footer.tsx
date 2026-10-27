"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import Logo from "./Logo";
import CoatOfArms from "./CoatOfArms";
import { navLinks, offices, site, socials, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-night text-white/80">
      <div className="hairline-gold" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-4">
            <Logo size={88} />
            <CoatOfArms size={76} />
          </div>
          <p className="mt-5 font-display text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Commissioner for Oaths services and book publishing. Redeeming society through law and knowledge.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <p className="eyebrow eyebrow-light mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-gold-light">{l.label}</Link></li>
            ))}
            <li><Link href="/privacy" className="hover:text-gold-light">Privacy (Draft)</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer services" className="md:col-span-3">
          <p className="eyebrow eyebrow-light mb-4">Services</p>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-gold-light">{s.title}</Link></li>
            ))}
            <li><Link href="/services" className="text-gold-light">All Services</Link></li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow eyebrow-light mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li><a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-light"><Phone className="h-4 w-4 text-gold" aria-hidden="true" />{site.phoneDisplay}</a></li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sendGAEvent("event", "whatsapp_click", { value: "whatsapp_contact" })}
                className="flex items-center gap-2 hover:text-gold-light"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                WhatsApp enquiry
              </a>
            </li>
            {offices.map((o) => (
              <li key={o.name} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={o.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                  <span className="text-white">{o.name}</span>
                  <br />
                  {o.detail}
                </a>
              </li>
            ))}
            <li><a href={site.emailHref} className="flex items-center gap-2 hover:text-gold-light"><Mail className="h-4 w-4 text-gold" aria-hidden="true" />{site.email}</a></li>
            <li className="text-white/60">{site.hours}</li>
            <li className="flex gap-5 pt-1">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gold-light">
                  {s.name}<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-white/50 md:flex-row md:justify-between">
          <div>
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p className="mt-1 text-white/40">Developed by Light</p>
          </div>
          <p className="max-w-xl">
            Information on this website is general and is not legal advice. Redeem is a paralegal and Commissioner for Oaths consult, not a law firm. This is the website of a private business, not an official government website. Redeem is not the publisher of the Ghana Gazette and does not decide whether any document is accepted by an official body.
          </p>
        </div>
      </div>
    </footer>
  );
}
