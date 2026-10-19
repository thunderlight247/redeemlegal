import { Compass, ExternalLink, MapPin, MessageCircle, Navigation, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { areasServed, offices, whatsappLink } from "@/lib/site";

export default function MapSection() {
  return (
    <section className="bg-white">
      <div className="wrap py-16 md:py-24">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our Offices & Wayfinding</p>
          <h2 className="h-display mt-3 text-4xl md:text-5xl">
            Find the Office Nearest You
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Redeem operates three accessible offices across Ashaiman and Tema. Each location is equipped for Commissioner for Oaths certifications, statutory declarations, and documentation consultations. Use the landmark notes and Google Maps pins below to find your way.
          </p>
        </Reveal>

        {/* Strategic Corridor Highlight */}
        <Reveal delay={0.1} className="mt-8 rounded-2xl border border-line bg-ivory/60 p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                <Navigation className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  Ashaiman – Sebrepor – Michel Camp Corridor
                </p>
                <p className="text-xs text-muted">
                  Three physical branches serving clients across Greater Accra and the diaspora.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm border border-line">
                📍 Central Ashaiman
              </span>
              <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm border border-line">
                📍 Sebrepor / Goshen
              </span>
              <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm border border-line">
                📍 Michel Camp / Tema
              </span>
            </div>
          </div>
        </Reveal>

        {/* Office Location Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {offices.map((o) => (
            <Reveal
              key={o.id}
              className={`flex flex-col justify-between rounded-2xl border bg-white p-6 transition-all hover:shadow-lg sm:p-7 ${
                o.isHeadOffice
                  ? "border-gold/60 shadow-md ring-1 ring-gold/20"
                  : "border-line hover:border-gold/50"
              }`}
            >
              <div>
                {/* Badge and Pin Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sand text-gold-deep">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wider ${
                      o.isHeadOffice
                        ? "bg-gold text-ink"
                        : "bg-sand text-gold-deep"
                    }`}
                  >
                    {o.branchBadge}
                  </span>
                </div>

                {/* Office Name & Area */}
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {o.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold-deep">
                  {o.area}
                </p>

                {/* Exact Detail Address */}
                <p className="mt-3 text-sm leading-relaxed text-slate-700 font-medium">
                  {o.detail}
                </p>

                {/* Landmark Wayfinding Note */}
                <div className="mt-5 rounded-xl border-l-4 border-gold bg-sand/40 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                    <Compass className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Nearby Landmarks</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
                    {o.landmarks}
                  </p>
                </div>

                {/* Transit & Commuter Routes */}
                <div className="mt-3 rounded-xl border border-line/80 bg-white p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
                    <Navigation className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                    <span>Transit & Commute</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {o.transitRoutes}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-2.5 border-t border-line pt-5">
                <a
                  href={o.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold flex w-full items-center justify-center gap-2 !py-2.5 !text-xs uppercase tracking-wider shadow-sm"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Open in Google Maps
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>

                <a
                  href={whatsappLink(
                    `Hello Redeem, I would like to visit your ${o.name} (${o.area}) for documentation assistance.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-white py-2 text-xs font-medium text-slate-700 transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                  Enquire via WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Areas Served & Visit Advisory */}
        <div className="mt-16 rounded-2xl border border-line bg-ivory/40 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h3 className="font-display text-2xl font-semibold text-ink">
                Areas We Serve
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Clients regularly visit from across the municipality, nationwide within Ghana, and overseas.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areasServed.map((area) => {
                  const isSpecial = area === "Within Ghana" || area === "Overseas Clients";
                  return (
                    <span
                      key={area}
                      className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${
                        isSpecial
                          ? "border border-gold/60 bg-sand/80 font-semibold text-gold-deep shadow-sm"
                          : "border border-line bg-white text-slate-800"
                      }`}
                    >
                      {isSpecial && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold-deep" />}
                      {area}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-line pt-4 md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
                <div className="text-xs leading-relaxed text-muted">
                  <strong className="block text-slate-800">Visit Advisory:</strong>
                  Please send a quick message or call prior to your visit to confirm in-chambers availability for your specific legal or documentation service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
