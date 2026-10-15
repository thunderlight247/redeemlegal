import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, CheckCircle2, ClipboardCheck, Clock, MapPin, MessageSquareText, User } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import { images } from "@/lib/images";
import { areasServed, offices } from "@/lib/site";
import { services } from "@/lib/services";
import { getFeaturedArticles, urlFor } from "@/lib/sanity";

const values = [
  { icon: ClipboardCheck, title: "Accuracy", text: "Careful attention to the details that documents depend on, and clear information about what is needed." },
  { icon: CheckCircle2, title: "Dependability", text: "A clear point of contact and a straightforward process, explained before you commit to anything." },
  { icon: Clock, title: "Responsive Service", text: "Enquiries are handled directly by the business, with WhatsApp as the quickest way to start." },
];

const steps = [
  { n: "01", title: "Contact the Business", text: "Send a WhatsApp message or call." },
  { n: "02", title: "Explain What You Need", text: "Describe the service or document and what it is for." },
  { n: "03", title: "Confirm the Details", text: "Requirements, fees and next steps are confirmed with you." },
  { n: "04", title: "Proceed as Agreed", text: "Work continues through the process you have agreed." },
];

const guides = [
  { q: "Understanding Affidavits and Statutory Declarations", a: "Both are written statements of fact, but they are made in different ways and suit different purposes. The party asking for the document often decides which one it wants, so ask them for their requirements first and bring that with you when you enquire." },
  { q: "Questions to Ask Before Arranging a Power of Attorney", a: "Consider what powers you intend to give, to whom, for how long and for which matters. Ask how it can be changed or ended, and whether you should take advice from a qualified lawyer on its legal effect." },
  { q: "General Information About Gazette-Related Processes", a: "The Gazette is an official government publication. Whether your matter has to appear in it, and the steps involved, depend on the rules that apply. Official timelines and decisions rest with the authorities." },
  { q: "Preparing for a Documentation Enquiry", a: "Note what the document is for, who will receive it, any deadline, and what you already hold. If you are abroad, mention that too. Do not send identification numbers until the business has confirmed how to share them." },
];

export default async function HomePage() {
  const featuredArticles = await getFeaturedArticles(3);

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
              Professional Documentation Services. Clear Guidance. Dependable Support.
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
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Paperwork Handled with Care.</h2>
          </Reveal>
          <Reveal className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              Documents often arrive with deadlines, unfamiliar terms and requirements that differ from one office to the next. Redeem helps you understand what is involved and prepare properly, across three broad areas.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[["Documents", "Affidavits, declarations, deeds, name changes, and property, family and estate documents."], ["Publication and Filing", "Gazette-related, publication and filing matters."], ["Guidance", "Consultation and paralegal training."]].map(([t, d]) => (
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
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Redeeming Society Through Law and Knowledge</h2>
          </Reveal>
          <Reveal stagger className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t border-gold/60 pt-6">
              <h3 className="font-display text-3xl font-semibold">Our Legal Mandate</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">A support hub for documentation and Commissioner for Oaths services: affidavits and declarations, name and age corrections, deeds, agreements, gazette services and court-related documents.</p>
              <Link href="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-light">Legal and Documentation Services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="border-t border-gold/60 pt-6">
              <h3 className="font-display text-3xl font-semibold">Our Publication Mandate</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">A house of knowledge that writes and publishes educational, religious and motivational books, with ghostwriting, editing, proofreading and self-publishing support for authors, churches, schools and organisations.</p>
              <Link href="/services/book-writing-and-publishing" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-light">Book Writing and Publishing <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
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
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Areas of Support</h2>
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
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </Reveal>
          <Link href="/services" className="btn btn-line-dark mt-10">View All {services.length} Services</Link>
        </div>
      </section>

      {/* Values */}
      <section className="on-dark bg-ink text-white">
        <div className="wrap py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">What Guides the Service</h2>
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
              Read More and View His Documents <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Who */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-20 md:grid-cols-2 md:py-24">
          <Reveal>
            <p className="eyebrow">Who we assist</p>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">Clients in Ghana and Abroad</h2>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-muted">
              Individuals in Ghana, and Ghanaians and others living abroad, may enquire about the documentation processes relevant to them.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Not every service can be completed remotely. What is possible depends on the specific document, the procedure and the rules that apply, so please ask before assuming.
            </p>
            <Link href="/services/diaspora-documentation-assistance" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
              Documentation Assistance from Abroad <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
            <h2 className="h-display mt-4 text-4xl md:text-5xl">A Simple, Direct Process</h2>
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
            <h2 className="h-display mt-4 text-4xl">Before You Enquire</h2>
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
            Directions and Contact <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Latest Legal Insights & Publications */}
      <section className="border-t border-line bg-sand/30">
        <div className="wrap py-20 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Legal Insights & Updates</p>
              <h2 className="h-display mt-4 text-4xl md:text-5xl">Latest Legal Insights & Publications</h2>
              <p className="mt-4 text-muted">
                Authoritative commentary, practical documentation advice, and legal insights from the Redeem editorial and counsel team.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/blog" className="btn btn-gold inline-flex items-center gap-2 whitespace-nowrap text-sm">
                View All Articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          {featuredArticles.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => {
                const imageUrl = article.mainImage
                  ? urlFor(article.mainImage).width(720).height(480).fit('crop').url()
                  : null;

                return (
                  <article
                    key={article._id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all hover:border-gold hover:shadow-md"
                  >
                    {imageUrl ? (
                      <Link
                        href={`/blog/${article.slug.current}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-sand"
                      >
                        <Image
                          src={imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </Link>
                    ) : (
                      <div className="relative flex aspect-[16/10] items-center justify-center border-b border-line bg-sand/60">
                        <BookOpen className="h-10 w-10 text-gold-deep/40" aria-hidden="true" />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3">
                        <span className="inline-block rounded bg-sand px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-gold-deep">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-gold-deep">
                        <Link href={`/blog/${article.slug.current}`}>{article.title}</Link>
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                        {article.author && (
                          <span className="inline-flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                            {article.author}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                          {new Date(article.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      {article.excerpt && (
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="mt-6 border-t border-line pt-4">
                        <Link
                          href={`/blog/${article.slug.current}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors group-hover:text-ink"
                        >
                          Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-line bg-white p-8 text-center sm:p-12">
              <BookOpen className="mx-auto h-10 w-10 text-gold-deep/60" aria-hidden="true" />
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Authoritative Legal Publications</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
                Explore our upcoming publications, guides, and articles on Ghanaian statutory declarations, gazette processes, and corporate compliance.
              </p>
              <div className="mt-6">
                <Link href="/blog" className="btn btn-gold text-xs">
                  Browse Publications Hub
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
