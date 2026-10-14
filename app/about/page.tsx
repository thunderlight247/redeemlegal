import type { Metadata } from "next";
import { Globe, ShieldCheck, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Logo from "@/components/Logo";
import Photo from "@/components/Photo";
import Image from "next/image";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: "About Redeem Publication and Legal Consult, a documentation services provider in Ashaiman, Greater Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Two Mandates, One Vision: Law and Knowledge">
        Redeem Publication and Legal Consult is a registered business based at the Ashaiman Old District Court, operating as Commissioner for Oaths Services and as a publishing house.
      </PageHero>

      <section className="bg-white">
        <div className="wrap grid items-start gap-12 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <h2 className="h-display text-4xl">Business Overview</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Redeem has offices in Ashaiman, Goshen and Tema. Its business name was registered under the Registration of Business Names Act, 1962 on 31 August 2022. On the legal side it supports clients with documentation and Commissioner for Oaths services, from affidavits and statutory declarations to deeds, name changes, gazette matters and attestation. On the publication side it researches, writes and publishes educational, religious and motivational books, and offers ghostwriting, editing, proofreading and self-publishing guidance.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              <span className="font-semibold text-ink">Our mission:</span> to redeem lives through accessible legal services and life-transforming publications. <span className="font-semibold text-ink">Our motto:</span> <em>Redeeming Society Through Law and Knowledge.</em>
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Redeem is a documentation and legal support provider. It is not presented here as a law firm, and its role is to help with documents and processes rather than to represent clients or decide how an official body will respond.
            </p>
          </Reveal>
          <Reveal className="flex justify-center md:col-span-5">
            <Logo size={260} />
          </Reveal>
          <Reveal className="md:col-span-12">
            <Photo src={images.about} aspect="aspect-[21/9]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-4">
            <Image
              src="/images/caleb-dickens-studio.jpg"
              width={880}
              height={1184}
              alt="Caleb Dickens, Commissioner for Oaths, in a dark suit and tie"
              className="mx-auto h-auto w-full max-w-sm shadow-lg"
            />
          </Reveal>
          <Reveal className="md:col-span-8">
            <p className="eyebrow">Commissioner for Oaths</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Caleb Dickens</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Caleb Dickens was appointed a Commissioner for Oaths by the Chief Justice of the Republic of Ghana on 8 June 2020, under Regulation 56 of the Judicial Service Regulations, 1963 (L.I. 319). The appointment is to discharge the duties assigned to that office by the laws of Ghana or by the practice thereof.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              What can be done for a particular document depends on the document and its intended use. Please ask the business to confirm this before you proceed.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Caleb is from Akuapem Mampong in the Eastern Region. He is also a teacher and a publisher. He holds a B.A. (Hons) in Geography and Resource Development with Political Science from the University of Ghana, and a certificate in Phonetics and Basic Presentation Skills from the Ghana Broadcasting Corporation Radio Training School.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              He is the author of the Commissioners for Oaths Handbook, a legal handbook written for Commissioners for Oaths.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Credentials</p>
            <h2 className="h-display mt-4 text-4xl">Documents You Can Inspect</h2>
            <p className="mt-4 text-muted">Select a document to open it at full size.</p>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-10 sm:grid-cols-2">
            {[
              { src: "/images/appointment-certificate.jpg", w: 760, h: 1080, cap: "Appointment as Commissioner for Oaths, Chief Justice of Ghana, 8 June 2020", alt: "Certificate appointing Caleb Dickens a Commissioner for Oaths, signed by the Chief Justice of Ghana" },
              { src: "/images/business-registration.jpg", w: 720, h: 1045, cap: "Certificate of registration of the business name, 31 August 2022 (tax number removed)", alt: "Certificate of registration of the business name Redeem Publication and Legal Consult under the Registration of Business Names Act, 1962" },
            ].map((d) => (
              <figure key={d.src}>
                <a href={d.src} target="_blank" rel="noopener noreferrer" className="block border border-line p-2 transition-colors hover:border-gold">
                  <Image src={d.src} width={d.w} height={d.h} alt={d.alt} className="h-auto w-full" />
                  <span className="sr-only">(opens full size in a new tab)</span>
                </a>
                <figcaption className="mt-3 text-sm text-muted">{d.cap}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <Image
              src="/images/office-wall.jpg"
              width={1040}
              height={780}
              alt="Wall of the Redeem main office showing the framed appointment and registration certificates, the business signboard and a framed portrait of Caleb Dickens"
              className="h-auto w-full"
            />
          </Reveal>
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our main office</p>
            <h2 className="h-display mt-4 text-4xl">A Calm and Organised Office to Sort Your Paperwork</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The main office is inside the Ashaiman Old District Court, arranged for private consultations, document preparation and affidavit services.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Staff can explain things in English, Twi or Ga, for clients in Ghana and abroad.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Redeem is a paralegal and Commissioner for Oaths consult, not a law firm. Where legal representation is required, clients are referred to partner law firms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal stagger className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Users, t: "How We Assist Clients", d: "You describe what you need, and the business confirms requirements, fees and next steps before you proceed. Communication is direct, and WhatsApp is the main enquiry channel." },
              { icon: ShieldCheck, t: "Commitment to Accurate Information", d: "This site gives general information only. Where something depends on your circumstances or on the rules that apply, we say so and encourage you to confirm with the business." },
              { icon: Globe, t: "Ghana and the Diaspora", d: "People in Ghana and abroad can enquire. Whether a step can be handled remotely depends on the document and procedure, and is confirmed on enquiry." },
            ].map((x) => (
              <div key={x.t} className="border-t border-gold pt-6">
                <x.icon className="h-6 w-6 text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand title="Have a Question About Your Documents?" />
    </>
  );
}
