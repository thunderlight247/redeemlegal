"use client";

import { useState } from "react";
import { MessageCircle, ShieldAlert } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";
import { services } from "@/lib/services";
import { whatsappLink } from "@/lib/site";

/**
 * Prototype enquiry helper. Nothing is submitted to a server: it only composes
 * a WhatsApp message that the visitor sends themselves.
 */
export default function EnquiryBuilder() {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");

  const message = [
    "Hello Redeem Publication and Legal Consult,",
    topic ? `I would like to enquire about: ${topic}.` : "I would like to enquire about your documentation services.",
    name.trim() ? `My name is ${name.trim()}.` : "",
  ].filter(Boolean).join(" ");

  return (
    <div className="border border-line bg-white p-6 md:p-8">
      <h2 className="font-display text-3xl font-semibold">Prepare a WhatsApp Enquiry</h2>
      <p className="mt-2 text-sm text-muted">
        Choose a topic and we will prepare your message. Nothing is sent from this page; WhatsApp opens so you can review and send it yourself.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium">What is your enquiry about?</label>
          <select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full border border-line bg-white px-3 py-3 text-sm">
            <option value="">General enquiry</option>
            {services.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
          </select>
        </div>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Your name <span className="font-normal text-muted">(optional)</span></label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="w-full border border-line px-3 py-3 text-sm" />
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendGAEvent("event", "whatsapp_click", { value: "whatsapp_contact" })}
          className="btn btn-dark w-full"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Open WhatsApp with This Message
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <p className="mt-6 flex gap-3 border-t border-line pt-5 text-sm text-muted">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
        <span>Please do not enter identification numbers, case details or confidential documents here. Share sensitive information only after the business has confirmed how to do so securely.</span>
      </p>
    </div>
  );
}
