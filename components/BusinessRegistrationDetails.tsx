import { CheckCircle2, Clock, Zap, Building2, User, FileText, Phone, Mail } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const pricingPackages = [
  {
    type: "Limited Company (LTD)",
    icon: Building2,
    badge: "Most Comprehensive",
    description: "Ideal for companies with shareholders and directors seeking full limited liability corporate protection.",
    tiers: [
      {
        speed: "Standard Processing",
        days: "20 Working Days",
        price: "GHS 2,000.00",
        highlight: false,
      },
      {
        speed: "Express Processing",
        days: "5 Working Days",
        price: "GHS 3,500.00",
        highlight: true,
      },
    ],
  },
  {
    type: "Sole Proprietorship",
    icon: User,
    badge: "Popular for Individuals",
    description: "Perfect for single-owner enterprises, traders, retail stores, consultants, and independent practitioners.",
    tiers: [
      {
        speed: "Standard Processing",
        days: "20 Working Days",
        price: "GHC 800.00",
        highlight: false,
      },
      {
        speed: "Express Processing",
        days: "5 Working Days",
        price: "GHC 1,400.00",
        highlight: true,
      },
    ],
  },
];

const intakeFields = [
  { num: 1, label: "Name of Business", desc: "Provide your preferred name (and alternative names in case of prior registration)." },
  { num: 2, label: "Activity of the Business", desc: "Detailed nature of business / commercial operations to be undertaken." },
  { num: 3, label: "Full Name of The Owner / Directors", desc: "Full official name as displayed on national identity documents." },
  { num: 4, label: "TIN (Tax Identification Number)", desc: "Required for all owners/directors. Can be registered if you do not have one." },
  { num: 5, label: "Date of Birth", desc: "Day, month, and year matching your birth certificate or passport." },
  { num: 6, label: "Occupation", desc: "Current profession or trade of the owner/directors." },
  { num: 7, label: "Place of Birth", desc: "Town/city and region of birth as listed in official records." },
  { num: 8, label: "Contact Phone Number", desc: "Active phone number for official Registrar General / ORC SMS notifications." },
  { num: 9, label: "Email Address", desc: "Active email address for receipt of digital certificates and correspondences." },
  { num: 10, label: "Postal Address", desc: "P.O. Box address or private mail bag (P/M/B) for official mail." },
  {
    num: 11,
    label: "Residential Address",
    desc: "Complete personal residence details:",
    subItems: [
      "House number",
      "Name of Area",
      "Street name",
      "Nearest Landmark",
      "Name of City",
    ],
  },
  {
    num: 12,
    label: "Principal Place of Business & Digital Address",
    desc: "Physical shop, office or operational premises location, including the official Digital Address (GhanaPost GPS code, e.g., GA-123-4567).",
  },
  { num: 13, label: "Marital Status", desc: "Single, Married, Divorced, or Widowed." },
  { num: 14, label: "Picture of Signature", desc: "Clear image of your official signature written on clean white paper." },
  { num: 15, label: "Mother's Name", desc: "Full name (including maiden surname) of the owner's mother for identity verification." },
];

export default function BusinessRegistrationDetails() {
  const whatsappChecklistMessage = `Hello Redeem Publication and Legal Consult, I would like to register a business.

DETAILS FOR BUSINESS REGISTRATION:
1. Name of Business: 
2. Activity of the business: 
3. Full Name of The Owner: 
4. TIN - Tax Identification Number: 
5. Date of Birth: 
6. Occupation: 
7. Place of Birth: 
8. Contact: 
9. Email address: 
10. Postal address: 
11. Residential Address: 
- House number: 
- Name of Area: 
- Street name: 
- Nearest Landmark: 
- Name of City: 
12. Digital Address (Principal Place of Business): 
13. Marital status: 
14. Picture of Signature: 
15. Mother's Name: 

Please advise on next steps.`;

  return (
    <div className="space-y-12">
      {/* Pricing and Packages Section */}
      <Reveal>
        <div className="border border-line bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">Official Packages</span>
              <h2 className="h-display mt-1 text-2xl sm:text-3xl">Business Registration Pricing & Timelines</h2>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-3.5 py-1 text-xs font-medium text-ink border border-line">
              <Clock className="h-3.5 w-3.5 text-gold-deep" />
              Regular & Express Options
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pricingPackages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div key={pkg.type} className="flex flex-col justify-between rounded border border-line bg-ivory/60 p-6 transition-all hover:border-gold">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded bg-dark text-gold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-display text-xl font-semibold text-ink">{pkg.type}</h3>
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-gold-deep bg-gold/10 px-2 py-0.5 rounded">
                        {pkg.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted">{pkg.description}</p>

                    <div className="mt-6 space-y-3">
                      {pkg.tiers.map((t) => (
                        <div
                          key={t.speed}
                          className={`flex items-center justify-between rounded border p-3 text-sm ${
                            t.highlight
                              ? "border-gold/60 bg-gold/5 font-semibold text-ink shadow-sm"
                              : "border-line bg-white text-ink"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {t.highlight ? (
                              <Zap className="h-4 w-4 text-gold-deep shrink-0" />
                            ) : (
                              <Clock className="h-4 w-4 text-muted shrink-0" />
                            )}
                            <div>
                              <div className="text-xs font-medium text-muted">{t.speed}</div>
                              <div className="text-xs text-ink/80">{t.days}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-display text-base font-bold text-ink">{t.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TIN Notice Card */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded border-l-4 border-gold bg-dark p-5 text-white">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gold-light text-sm sm:text-base">TIN Number Registration Requirement</span>
              </div>
              <p className="text-xs text-white/80">
                A Tax Identification Number (TIN) is mandatory for registering your business. The client shall pay{" "}
                <strong className="text-white font-bold">GHC 100.00</strong> for TIN NUMBER Registration if he or she doesn&apos;t have one.
              </p>
            </div>
            <span className="shrink-0 rounded bg-gold/20 px-3 py-1 font-display text-sm font-semibold text-gold-light border border-gold/30">
              GHC 100.00
            </span>
          </div>
        </div>
      </Reveal>

      {/* 15 Intake Details Section */}
      <Reveal>
        <div className="border border-line bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">Intake Checklist</span>
              <h2 className="h-display mt-1 text-2xl sm:text-3xl">Details Needed for Business Registration</h2>
            </div>
            <FileText className="h-6 w-6 text-gold-deep hidden sm:block" />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            Please prepare the following fifteen (15) pieces of information before submitting your registration request. You can copy or send these directly to us on WhatsApp:
          </p>

          <ol className="mt-6 divide-y divide-line border-y border-line">
            {intakeFields.map((item) => (
              <li key={item.num} className="grid gap-2 py-4 sm:grid-cols-12 sm:items-start">
                <div className="flex items-center gap-2 sm:col-span-1">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory border border-line text-xs font-semibold text-gold-deep">
                    {item.num}
                  </span>
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-medium text-sm text-ink">{item.label}</h3>
                  <p className="mt-0.5 text-xs text-muted leading-relaxed">{item.desc}</p>
                  {item.subItems ? (
                    <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {item.subItems.map((sub) => (
                        <li key={sub} className="flex items-center gap-2 bg-ivory px-3 py-1.5 rounded border border-line/60 text-muted">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold-deep shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          {/* Quick Submission & Contact Actions */}
          <div className="mt-8 rounded bg-ivory p-6 border border-line">
            <h4 className="font-display text-lg font-semibold text-ink">Ready to Submit Your Details?</h4>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              You can send the checklist directly to Redeem Legal Consult via WhatsApp or email. Our team will verify the details, confirm the processing fee, and start the ORC filing immediately.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                variant="dark"
                message={whatsappChecklistMessage}
              >
                Submit Details on WhatsApp
              </WhatsAppButton>
              <a
                href={`mailto:${site.email}?subject=Business%20Registration%20Details&body=${encodeURIComponent(whatsappChecklistMessage)}`}
                className="btn btn-line-dark text-xs flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Email Checklist
              </a>
              <a
                href={site.phoneHref}
                className="btn btn-line-dark text-xs flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call: {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
