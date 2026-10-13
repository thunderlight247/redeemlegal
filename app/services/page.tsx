import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import { images } from "@/lib/images";
import { publicationSlugs, services, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Affidavits, deeds and power of attorney, name changes, attestation and notarisation, gazette-related services, paralegal consultation, book writing and publishing.",
};

function Tiles({ list }: { list: Service[] }) {
  return (
    <Reveal stagger className="grid gap-px border border-line bg-line md:grid-cols-2">
      {list.map((s) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-white p-8 transition-colors hover:bg-ivory">
          <Photo src={images.services[s.slug]} aspect="aspect-[16/9]" className="mb-6" />
          <ServiceIcon name={s.icon} className="h-7 w-7 text-gold-deep" />
          <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">{s.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
      ))}
    </Reveal>
  );
}

export default function ServicesPage() {
  const legal = services.filter((s) => !publicationSlugs.includes(s.slug));
  const publication = services.filter((s) => publicationSlugs.includes(s.slug));
  const finder = legal
    .filter((s) => !s.documentsLabel)
    .flatMap((sv) => sv.documents.map((d) => ({ d, slug: sv.slug })))
    .sort((a, b) => a.d.localeCompare(b.d));

  return (
    <>
      <PageHero eyebrow="Services" title="Law and knowledge, in one office">
        Legal documentation services and a publishing house. Choose an area to read more, look up your document below, or send a WhatsApp enquiry if you are not sure where it fits.
      </PageHero>

      <section className="bg-white">
        <div className="wrap py-16 md:py-20">
          <Reveal>
            <p className="eyebrow">Our legal mandate</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">Documentation and Commissioner for Oaths services</h2>
          </Reveal>
          <div className="mt-8"><Tiles list={legal} /></div>

          <Reveal className="mt-20">
            <p className="eyebrow">Our publication mandate</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">A house of knowledge</h2>
          </Reveal>
          <div className="mt-8"><Tiles list={publication} /></div>

          <Reveal className="mt-20">
            <p className="eyebrow">Find your document</p>
            <h2 className="h-display mt-3 text-3xl md:text-4xl">Documents people commonly ask about</h2>
            <ul className="mt-8 grid gap-x-10 border-t border-line sm:grid-cols-2">
              {finder.map((x) => (
                <li key={x.d + x.slug} className="border-b border-line">
                  <Link href={`/services/${x.slug}`} className="flex items-baseline justify-between gap-4 py-3 text-sm hover:text-gold-deep">
                    <span>{x.d}</span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gold-deep" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Not listed? Ask on WhatsApp. The business will tell you whether it can help.</p>
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
