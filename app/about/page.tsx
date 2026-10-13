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
      <PageHero eyebrow="About" title="A documentation services provider in Ashaiman">
        Redeem Publication and Legal Consult supports clients with legal documentation and related services, with an emphasis on accuracy, trust and responsive service.
      </PageHero>

      <section className="bg-white">
        <div className="wrap grid items-start gap-12 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-7">
            <h2 className="h-display text-4xl">Business overview</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Redeem is based in Ashaiman, Greater Accra, and presents its work under the name Commissioner for Oaths Services. Its services cover affidavits and statutory declarations, deeds and powers of attorney, gazette-related matters, publication, filing and documentation, and paralegal consultation and training.
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
              src="/images/commissioner-portrait.jpg"
              width={355}
              height={510}
              alt="Caleb Dickens, Commissioner for Oaths at Redeem Publication and Legal Consult"
              className="h-auto w-full max-w-sm"
            />
          </Reveal>
          <Reveal className="md:col-span-8">
            <p className="eyebrow">Commissioner for Oaths</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Caleb Dickens</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Caleb Dickens is the Commissioner for Oaths associated with Redeem. The business states that he is appointed by the Chief Justice of the Republic of Ghana to administer oaths and affirmations.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              The scope of this role depends on the document and its intended use. Please ask the business to confirm what can be done for your particular document before you proceed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal stagger className="grid gap-10 md:grid-cols-3">
            {[
              { icon: Users, t: "How we assist clients", d: "You describe what you need, and the business confirms requirements, fees and next steps before you proceed. Communication is direct, and WhatsApp is the main enquiry channel." },
              { icon: ShieldCheck, t: "Commitment to accurate information", d: "This site gives general information only. Where something depends on your circumstances or on the rules that apply, we say so and encourage you to confirm with the business." },
              { icon: Globe, t: "Ghana and the diaspora", d: "People in Ghana and abroad can enquire. Whether a step can be handled remotely depends on the document and procedure, and is confirmed on enquiry." },
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

      <CtaBand title="Have a question about your documents?" />
    </>
  );
}
