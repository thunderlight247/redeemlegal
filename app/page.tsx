import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, Clock, MapPin, MessageSquareText } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import { images } from "@/lib/images";
import { areasServed, offices } from "@/lib/site";
import { services } from "@/lib/services";

const values = [
  { icon: ClipboardCheck, title: "Accuracy", text: "Careful attention to the details that documents depend on, and clear information about what is needed." },
  { icon: CheckCircle2, title: "Dependability", text: "A clear point of contact and a straightforward process, explained before you commit to anything." },
  { icon: Clock, title: "Responsive service", text: "Enquiries are handled directly by the business, with WhatsApp as the quickest way to start." },
];

const steps = [
  { n: "01", title: "Contact the business", text: "Send a WhatsApp message or call." },
  { n: "02", title: "Explain what you need", text: "Describe the service or document and what it is for." },
  { n: "03", title: "Confirm the details", text: "Requirements, fees and next steps are confirmed with you." },
  { n: "04", title: "Proceed as agreed", text: "Work continues through the process you have agreed." },
];

const guides = [
  { q: "Understanding affidavits and statutory declarations", a: "Both are written statements of fact, but they are made in different ways and suit different purposes. The party asking for the document often decides which one it wants, so ask them for their requirements first and bring that with you when you enquire." },
  { q: "Questions to ask before arranging a power of attorney", a: "Consider what powers you intend to give, to whom, for how long and for which matters. Ask how it can be changed or ended, and whether you should take advice from a qualified lawyer on its legal effect." },
  { q: "General information about gazette-related processes", a: "The Gazette is an official government publication. Whether your matter has to appear in it, and the steps involved, depend on the rules that apply. Official timelines and decisions rest with the authorities." },
  { q: "Preparing for a documentation enquiry", a: "Note what the document is for, who will receive it, any deadline, and what you already hold. If you are abroad, mention that too. Do not send identification numbers until the business has confirmed how to share them." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-ink text-white">
        <Photo src={images.hero} absolute priority className="opacity-30" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 rounded-full border border-gold/20 lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-gold/15 lg:block" />
        <div className="wrap relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
          <Reveal stagger className="lg:col-span-7">
            <p className="eyebrow">Ashaiman, Greater Accra · Ghana</p>
            <h1 className="h-display mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.4rem]">
              Professional documentation services. Clear guidance. Dependable support.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              Redeem helps individuals with documentation-related services and enquiries in Ghana, from affidavits and deeds to gazette-related and filing matters. Redeem is also a publishing house for educational, religious and general books. Clients in Ghana and abroad are welcome to enquire.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn btn-gold">Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <WhatsAppButton variant="line-light">Enquire on WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center lg:col-span-5">
            <Logo size={360} priority className="max-w-[70vw] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
          </Reveal>
        </div>
        <div className="hairline-gold" />
      </section>

      {/* Intro */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">What we help with</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Paperwork handled with care.</h2>
          </Reveal>
          <Reveal className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              Documents often arrive with deadlines, unfamiliar terms and requirements that differ from one office to the next. Redeem helps you understand what is involved and prepare properly, across three broad areas.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[["Documents", "Affidavits, declarations, deeds, name changes, and property, family and estate documents."], ["Publication and filing", "Gazette-related, publication and filing matters."], ["Guidance", "Consultation and paralegal training."]].map(([t, d]) => (
                <div key={t} className="border-t border-gold pt-4">
                  <h3 className="font-display text-2xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Two mandates */}
      <section className="on-dark bg-ink text-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Two mandates, one vision</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Redeeming society through law and knowledge</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t border-gold/60 pt-6">
              <h3 className="font-display text-3xl font-semibold">Our legal mandate</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">A support hub for documentation and Commissioner for Oaths services: affidavits and declarations, name and age corrections, deeds, agreements, gazette services and court-related documents.</p>
              <Link href="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-light">Legal and documentation services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="border-t border-gold/60 pt-6">
              <h3 className="font-display text-3xl font-semibold">Our publication mandate</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">A house of knowledge that writes and publishes educational, religious and motivational books, with ghostwriting, editing, proofreading and self-publishing support for authors, churches, schools and organisations.</p>
              <Link href="/services/book-writing-and-publishing" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-light">Book writing and publishing <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </Reveal>
          <p className="mt-12 max-w-2xl text-white/60">Our mission: to redeem lives through accessible legal services and life-transforming publications.</p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Areas of support</h2>
            <p className="mt-4 text-muted">Whether Redeem can assist with a particular document is confirmed when you enquire.</p>
          </Reveal>
          <Reveal stagger className="mt-12 border-t border-line">
            {services.slice(0, 8).map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group grid items-start gap-4 border-b border-line py-7 transition-colors hover:bg-ivory md:grid-cols-12 md:px-4">
                <span className="font-display text-3xl text-gold md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-start gap-4 md:col-span-4">
                  <ServiceIcon name={s.icon} className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                  <h3 className="font-display text-2xl font-semibold leading-tight">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-deep md:col-span-2 md:justify-end">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </Reveal>
          <Link href="/services" className="btn btn-line-dark mt-10">View all {services.length} services</Link>
        </div>
      </section>

      {/* Values */}
      <section className="on-dark bg-ink text-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">What guides the service</h2>
            <p className="mt-4 text-white/65">These are the values the business works toward. They describe intent, not guaranteed outcomes.</p>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border-t border-gold/60 pt-6">
                <v.icon className="h-6 w-6 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Commissioner */}
      <section className="bg-white">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-5">
            <Image src="/images/caleb-dickens-suit.jpg" width={896} height={1195} alt="Caleb Dickens in a dark suit and tie, outdoors" className="h-auto w-full max-w-md" />
          </Reveal>
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Your Commissioner for Oaths</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Caleb Dickens</h2>
            <p className="mt-5 leading-relaxed text-muted">
              Appointed a Commissioner for Oaths by the Chief Justice of the Republic of Ghana in June 2020. Redeem is run directly by him, so your enquiry reaches the person who will handle it.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
              Read more and view his documents <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Who */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-20 md:grid-cols-2 md:py-24">
          <Reveal>
            <p className="eyebrow">Who we assist</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Clients in Ghana and abroad</h2>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-muted">
              Individuals in Ghana, and Ghanaians and others living abroad, may enquire about the documentation processes relevant to them.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Not every service can be completed remotely. What is possible depends on the specific document, the procedure and the rules that apply, so please ask before assuming.
            </p>
            <Link href="/services/diaspora-documentation-assistance" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
              Documentation assistance from abroad <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="md:col-span-2">
            <Photo src={images.who} aspect="aspect-[21/9]" />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">A simple, direct process</h2>
            <p className="mt-4 text-muted">Enquiries are handled directly by the business. This website does not approve, certify or validate any document.</p>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-display text-5xl text-gold">{s.n}</p>
                <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Helpful information</p>
            <h2 className="h-display mt-4 text-4xl">Before you enquire</h2>
            <p className="mt-4 flex gap-2 text-sm text-muted"><MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />Draft general information, not legal advice. To be reviewed by management before publication.</p>
          </Reveal>
          <Reveal className="md:col-span-8">
            <div className="border-t border-line">
              {guides.map((g) => (
                <details key={g.q} className="group border-b border-line py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold marker:hidden">
                    {g.q}
                    <span aria-hidden="true" className="text-2xl text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{g.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Near you */}
      <section className="bg-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Near you</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Offices in Ashaiman and Tema</h2>
            <p className="mt-4 text-muted">Serving {areasServed.join(", ")} and surrounding communities.</p>
          </Reveal>
          <Reveal stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {offices.map((o) => (
              <div key={o.name} className="flex gap-4 border-t border-gold pt-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="font-display text-2xl font-semibold">{o.name}</h3>
                  <p className="mt-1 text-sm text-muted">{o.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
            Directions and contact <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
