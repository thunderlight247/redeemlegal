import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy (draft)", robots: { index: false } };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Draft" title="Privacy information" />
      <section className="wrap max-w-3xl py-16 text-muted">
        <p className="border-l-2 border-gold bg-ivory p-5 text-sm">
          This is a draft placeholder for the prototype. A privacy policy must be written and reviewed by management, and by a qualified adviser where appropriate, before the website goes live.
        </p>
        <h2 className="mt-10 font-display text-3xl font-semibold text-ink">What this prototype does</h2>
        <p className="mt-3">
          This version has no database, accounts, analytics or form submission. The enquiry helper on the Contact page only prepares a WhatsApp message in your browser; nothing is sent to this website. Messages you send on WhatsApp are handled by WhatsApp and the business under their own terms.
        </p>
        <h2 className="mt-8 font-display text-3xl font-semibold text-ink">Sensitive information</h2>
        <p className="mt-3">Please do not share identification numbers or confidential documents until the business has confirmed how to do so securely.</p>
      </section>
    </>
  );
}
