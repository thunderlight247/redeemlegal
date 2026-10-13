export type IconKey =
  | "FileSignature"
  | "Stamp"
  | "Newspaper"
  | "FolderOpen"
  | "GraduationCap"
  | "Globe";

export type Service = {
  slug: string;
  title: string;
  icon: IconKey;
  short: string;
  intro: string;
  concerns: string[];
  questions: string[];
  confirm: string[];
  note: string;
  enquiry: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "affidavits-and-statutory-declarations",
    title: "Affidavits and Statutory Declarations",
    icon: "FileSignature",
    short:
      "Help understanding and arranging written statements of fact made on oath or by formal declaration.",
    intro:
      "Many applications and institutional processes ask for a sworn or declared written statement. Redeem can talk you through what is generally involved and what to prepare before you proceed.",
    concerns: [
      "An affidavit is generally a written statement of facts made on oath or affirmation. A statutory declaration is a formal written declaration of facts made under the rules that apply to it. Which of the two is suitable, and how it should be worded, depends on the purpose and on who will receive it.",
      "People commonly need such statements to support an application, record a change of circumstances or confirm facts for an institution. The receiving institution decides what it will accept.",
    ],
    questions: [
      "What is the difference between an affidavit and a statutory declaration?",
      "What details and supporting documents should I bring?",
      "Do I need to attend in person, and what identification is expected?",
      "Does the institution receiving it have a required wording or format?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "The purpose of the document and who will receive it",
      "Any wording or format requirements set by the receiving body",
      "Whether personal attendance and valid identification are needed",
      "Fees and likely timing, to be confirmed directly by the business",
    ],
    note:
      "Whether a document is accepted is decided by the institution that receives it, not by this website or by Redeem.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about affidavits or statutory declarations.",
    related: [
      "deeds-and-power-of-attorney",
      "publication-filing-and-documentation",
    ],
  },
  {
    slug: "deeds-and-power-of-attorney",
    title: "Deeds and Power of Attorney",
    icon: "Stamp",
    short:
      "Documentation support for formal deeds and for documents that authorise another person to act on your behalf.",
    intro:
      "Deeds and powers of attorney carry real consequences, so the details matter. Redeem can help you understand the documentation side and confirm what is needed for your situation.",
    concerns: [
      "A deed is a formal written document commonly used to record certain transactions or commitments. A power of attorney is a document by which one person authorises another to act for them in stated matters.",
      "The right form, how it must be signed or witnessed, and whether any registration is needed depend on the nature of the document and its intended use. Not every document can be prepared or validated by Redeem, and this is confirmed at enquiry.",
    ],
    questions: [
      "What should a power of attorney cover, and for how long?",
      "Is the document for one transaction or a wider range of matters?",
      "Can it be arranged if I am outside Ghana?",
      "How is a power of attorney changed or brought to an end?",
      "What supporting documents and identification are required?",
    ],
    confirm: [
      "The exact scope of the authority being given or recorded",
      "Signing, witnessing or registration requirements",
      "Where and by whom the document will be used",
      "Whether you should also seek advice from a qualified lawyer on its legal effect",
    ],
    note:
      "Redeem assists with documentation. For advice on the legal effect of a deed or power of attorney, consult a qualified lawyer.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about a deed or power of attorney.",
    related: [
      "diaspora-documentation-assistance",
      "affidavits-and-statutory-declarations",
    ],
  },
  {
    slug: "gazette-related-services",
    title: "Gazette-Related Services",
    icon: "Newspaper",
    short:
      "Guidance on matters that may involve the Ghana Gazette, and help preparing the information involved.",
    intro:
      "Some matters require a notice to appear in the Gazette. Redeem can help you understand what is involved and prepare the documentation, while the official process itself stays with the relevant public authorities.",
    concerns: [
      "The Ghana Gazette is an official government publication. Whether a matter has to be gazetted, and how, is set by the rules that apply to it.",
      "Redeem is not the publisher of the Gazette and does not control the timing or outcome of any official process. Assistance is limited to the documentation and follow-up steps that the business confirms it can handle.",
    ],
    questions: [
      "Does my matter need to be published in the Gazette?",
      "What information and documents have to be prepared?",
      "What are the usual steps, and who is responsible for each?",
      "How can I find out where my application has reached?",
    ],
    confirm: [
      "Whether gazette publication applies to your particular matter",
      "Which documents and details are needed before you start",
      "Which steps Redeem can assist with and which are handled by others",
      "That official timelines and decisions rest with the authorities",
    ],
    note:
      "Gazette processing times and decisions belong to the relevant public authorities. Redeem cannot guarantee them.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about gazette-related services.",
    related: [
      "publication-filing-and-documentation",
      "affidavits-and-statutory-declarations",
    ],
  },
  {
    slug: "publication-filing-and-documentation",
    title: "Legal Publication, Filing and Documentation",
    icon: "FolderOpen",
    short:
      "Support with preparing, organising and following through on publication, filing and documentation matters.",
    intro:
      "Well-prepared paperwork saves time and avoids avoidable resubmissions. Redeem can help you organise your documents and understand the steps involved in relevant publication and filing matters.",
    concerns: [
      "Publication, filing and documentation work can include preparing documents, assembling supporting papers and following the steps needed to publish or file them where that applies.",
      "Each office or institution sets its own requirements. Redeem can assist with preparation and follow-through but cannot promise that a document will be accepted or by when.",
    ],
    questions: [
      "What should I gather before I begin?",
      "Which documents need copies, originals or certified versions?",
      "Where does this need to be published or filed?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "The body the document is going to and its current requirements",
      "Which documents you already hold and which are missing",
      "The portion of the process Redeem will handle",
      "Fees and expected steps, confirmed before you proceed",
    ],
    note:
      "Acceptance of any filing or publication rests with the receiving office or institution.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about publication, filing or documentation support.",
    related: [
      "gazette-related-services",
      "deeds-and-power-of-attorney",
    ],
  },
  {
    slug: "paralegal-consultation-and-training",
    title: "Paralegal Consultation and Training",
    icon: "GraduationCap",
    short:
      "Consultation to help you understand documentation processes, and training for those building paralegal skills.",
    intro:
      "Redeem offers paralegal consultation and training. Ask about what is available, who it suits and how it is delivered.",
    concerns: [
      "Consultation here means helping you understand documentation processes and what to prepare. It is not legal representation or regulated legal advice unless management confirms otherwise.",
      "Training is intended for people who want to build practical paralegal knowledge. Topics, format and duration are confirmed on enquiry.",
    ],
    questions: [
      "Is the training for individuals, organisations or both?",
      "Which topics does it cover?",
      "How is it delivered, and how long does it take?",
      "Is any certificate issued, and by whom?",
      "What does it cost?",
    ],
    confirm: [
      "Whether you want a consultation, training or both",
      "The topics and format that apply to you",
      "Whether any certificate is offered and who issues it",
      "Fees and schedule, confirmed directly by the business",
    ],
    note:
      "Nothing on this page should be taken as legal advice or as a promise of any qualification.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about paralegal consultation or training.",
    related: [
      "publication-filing-and-documentation",
      "affidavits-and-statutory-declarations",
    ],
  },
  {
    slug: "diaspora-documentation-assistance",
    title: "Documentation Assistance for Clients in Ghana and the Diaspora",
    icon: "Globe",
    short:
      "Enquire about documentation needs from within Ghana or abroad, and confirm what can be handled remotely.",
    intro:
      "If you live outside Ghana, or act for family there, you can ask Redeem what is needed for your documents and which steps may be possible at a distance.",
    concerns: [
      "Some steps may be handled remotely and others may need personal attendance, original documents or a representative in Ghana. This depends on the document, the procedure and the rules that apply.",
      "Start with a WhatsApp enquiry, explain what the document is for and where it will be used, and the business will advise on next steps.",
    ],
    questions: [
      "Which parts can be handled without travelling to Ghana?",
      "Do I need originals, and how are they provided?",
      "Can someone in Ghana act for me?",
      "How do I share documents safely?",
      "How do time differences affect communication?",
    ],
    confirm: [
      "What can and cannot be done remotely for your document",
      "How identification and documents should be shared securely",
      "Whether anyone must attend in person on your behalf",
      "Fees, payment method and next steps, in writing where possible",
    ],
    note:
      "Do not send identification numbers or sensitive documents until the business has confirmed how to share them securely.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I am outside Ghana and would like to enquire about documentation assistance.",
    related: [
      "deeds-and-power-of-attorney",
      "affidavits-and-statutory-declarations",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
