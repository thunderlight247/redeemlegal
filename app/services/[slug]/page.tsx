import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, HelpCircle, Info, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceIcon from "@/components/ServiceIcon";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";
import Photo from "@/components/Photo";
import { images } from "@/lib/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related.map((r) => getService(r)).filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <PageHero eyebrow="Service" title={service.title}>{service.intro}</PageHero>

      <section className="bg-white">
        <div className="wrap grid gap-14 py-16 md:py-20 lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-8">
            <Photo src={images.services[service.slug]} aspect="aspect-[16/7]" />
            <Reveal>
              <h2 className="h-display text-3xl md:text-4xl">What this generally concerns</h2>
              {service.concerns.map((p) => (<p key={p} className="mt-4 leading-relaxed text-muted">{p}</p>))}
            </Reveal>

            <Reveal>
              <h2 className="h-display flex items-center gap-3 text-3xl md:text-4xl"><HelpCircle className="h-6 w-6 text-gold-deep" aria-hidden="true" />Questions clients often ask</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {service.questions.map((q) => (<li key={q} className="py-3.5 text-sm">{q}</li>))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="h-display text-3xl md:text-4xl">Things to confirm</h2>
              <ul className="mt-5 space-y-3">
                {service.confirm.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />{c}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <p className="flex gap-3 border-l-2 border-gold bg-ivory p-5 text-sm leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />{service.note}
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-line p-7 lg:sticky lg:top-24">
              <ServiceIcon name={service.icon} className="h-7 w-7 text-gold-deep" />
              <h2 className="mt-4 font-display text-2xl font-semibold">Enquire about this service</h2>
              <p className="mt-2 text-sm text-muted">Message the business to confirm requirements, fees and next steps.</p>
              <WhatsAppButton variant="dark" message={service.enquiry} className="mt-5 w-full" />
              <a href={site.phoneHref} className="btn btn-line-dark mt-3 w-full"><Phone className="h-4 w-4" aria-hidden="true" />{site.phoneDisplay}</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="wrap py-16">
          <h2 className="h-display text-3xl">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group flex items-center justify-between gap-4 border border-line bg-white p-6 transition-colors hover:border-gold">
                <span className="font-display text-xl font-semibold">{r.title}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
