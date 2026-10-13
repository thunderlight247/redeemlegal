import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import Photo from "@/components/Photo";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: "Affidavits, deeds and power of attorney, gazette-related services, publication and filing support, paralegal consultation and diaspora documentation assistance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Documentation services and guidance">
        Six areas of support. Choose one to read more, or send a WhatsApp enquiry if you are not sure where your document fits.
      </PageHero>
      <section className="bg-white">
        <div className="wrap py-16 md:py-20">
          <Reveal stagger className="grid gap-px border border-line bg-line md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-white p-8 transition-colors hover:bg-ivory">
                <Photo src={images.services[s.slug]} aspect="aspect-[16/9]" className="mb-6" />
                <ServiceIcon name={s.icon} className="h-7 w-7 text-gold-deep" />
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </Reveal>
          <p className="mt-8 max-w-3xl text-sm text-muted">
            Redeem does not guarantee outcomes, turnaround times or acceptance of documents by any court, embassy or agency. Fees and timing are confirmed directly with the business.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
