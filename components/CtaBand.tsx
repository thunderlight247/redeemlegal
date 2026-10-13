import Link from "next/link";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";
import Photo from "./Photo";
import { images } from "@/lib/images";

export default function CtaBand({ title = "Tell us what you need to arrange.", text = "Send a short WhatsApp message describing the document or service. The business will confirm requirements, fees and next steps with you directly." }: { title?: string; text?: string }) {
  return (
    <section className="on-dark relative overflow-hidden bg-night text-white">
      <Photo src={images.cta} absolute className="opacity-20" />
      <div className="hairline-gold" />
      <div className="wrap relative py-20 text-center md:py-24">
        <Reveal stagger className="mx-auto max-w-2xl">
          <p className="eyebrow">Start a conversation</p>
          <h2 className="h-display mt-4 text-4xl md:text-5xl">{title}</h2>
          <p className="mt-5 text-white/70">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton className="sm:w-auto" />
            <Link href="/services" className="btn btn-line-light sm:w-auto">View services</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
