export type IconKey =
  | "FileSignature"
  | "Stamp"
  | "Newspaper"
  | "FolderOpen"
  | "GraduationCap"
  | "Globe"
  | "UserCheck"
  | "Home"
  | "Handshake"
  | "Heart"
  | "Scroll"
  | "ShieldCheck"
  | "BookOpen"
  | "PenLine"
  | "ClipboardList";

export type Service = {
  slug: string;
  title: string;
  icon: IconKey;
  /** Specific documents commonly asked about; shown on the page and in the document finder. */
  documents: string[];
  /** Heading for the documents list when it is not about documents (e.g. publishing). */
  documentsLabel?: string;
  /** Example documents shown on the page (personal details must be covered). */
  /** Numbered list of procedures/matters with short descriptions. */
  procedures?: { title: string; text: string; href?: string }[];
  exhibits?: { src: string; w: number; h: number; alt: string; caption: string }[];
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
    exhibits: [
      {
        src: "/images/sample-statutory-declaration.jpg",
        w: 913,
        h: 1280,
        alt: "Sample statutory declaration confirming that several names refer to the same person, commissioned by Caleb Dickens, with the declarant's personal details covered",
        caption:
          "A sample statutory declaration confirming that different names refer to the same person, commissioned by Caleb Dickens. The declarant's personal details are covered.",
      },
    ],
    documents: [
      "Affidavits",
      "Statutory declarations",
      "Attestation of the authenticity of documents",
      "Court affidavits: loss of documents, age, marriage, support, travel, lost phone and bank",
    ],
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
    documents: ["Power of attorney", "Indenture", "Deeds, as applicable"],
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
    exhibits: [
      {
        src: "/images/gazette-contents.jpg",
        w: 976,
        h: 1280,
        alt: "Cover and contents page of the Ghana Gazette No. 336 of 16 September 2026, listing change of names and corrections of dates and places of birth",
        caption:
          "The Ghana Gazette of 16 September 2026. Its contents include change of names and corrections of dates and places of birth.",
      },
      {
        src: "/images/gazette-change-of-names.jpg",
        w: 1280,
        h: 810,
        alt: "Pages of the Ghana Gazette of 16 September 2026 showing change of name notices for many people",
        caption:
          "A page of change of name notices in the Ghana Gazette. The Gazette publishes the notices of many people together.",
      },
    ],
    documents: ["Gazette notices", "Gazette-related applications and follow-up"],
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
    documents: ["Document preparation and organisation", "Filing and publication support"],
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
    documents: ["Documentation consultation", "Paralegal training"],
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
    documents: ["Documents needed in Ghana by clients abroad", "Remote enquiry and next-step guidance"],
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
      "attestation-and-notarisation-of-documents",
      "deeds-and-power-of-attorney",
    ],
  },
  {
    slug: "change-of-name-and-personal-records",
    title: "Change of Name and Personal Records",
    icon: "UserCheck",
    documents: [
      "Change of name",
      "Deed poll",
      "Gazetting of a change of name",
      "Addition and deletion of name",
      "Correction of name and date of birth (age correction)",
      "Change of signature",
      "Missing marriage certificate",
      "Biometric marriage certificate",
      "Missing or damaged Ghana passport (supporting documents)",
    ],
    short:
      "Support with documents for changing, correcting or adding to names and personal details on your records.",
    intro:
      "Names, dates of birth and signatures need to match across your records. Redeem can help you understand and prepare the documents usually requested when something has to be changed, corrected or replaced.",
    concerns: [
      "Changes and corrections usually involve a sworn or declared statement and supporting documents, and sometimes a notice or an application to the body that holds the record. The steps differ by type of record and by institution.",
      "For passports, marriage certificates and similar records, the issuing public authority decides on any replacement or correction. Redeem's role is limited to the supporting documentation it confirms it can handle.",
    ],
    questions: [
      "Which documents do I need to change my name on my records?",
      "How is a wrong name or date of birth corrected?",
      "What should I prepare if a certificate or passport is lost or damaged?",
      "Does a change of name need to be published?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "Which record is being changed, and which body holds it",
      "The supporting documents you already have",
      "Whether a notice or publication applies to your case",
      "Which steps Redeem handles and which belong to the issuing authority",
    ],
    note:
      "Corrections and replacements of official records are decided by the issuing authority, not by Redeem.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about a change or correction of name or personal records.",
    related: [
      "affidavits-and-statutory-declarations",
      "gazette-related-services",
    ],
  },
  {
    slug: "property-land-and-vehicle-documents",
    title: "Property, Land and Vehicle Documents",
    icon: "Home",
    documents: [
      "Tenancy agreement",
      "Quit notices",
      "Sale agreement",
      "Change of ownership (land, car, house)",
      "Receipt and transfer (land, car, house)",
      "Property change of name",
      "Indentures and transfer of title documents",
      "Search reports and declarations of title",
      "Site plan (supporting documentation)",
    ],
    short:
      "Documentation support for tenancy agreements, transfers of ownership, receipts and related property or vehicle paperwork.",
    intro:
      "Property and vehicle paperwork is easier when the documents are clear and complete. Redeem can help you understand what is usually needed and prepare the documentation.",
    concerns: [
      "A tenancy agreement records the terms agreed between landlord and tenant. Transfers or changes of ownership generally need proof of ownership, supporting documents and, where it applies, registration with the relevant authority.",
      "Requirements differ between land, houses and vehicles, and each registry or licensing authority sets its own. Redeem can help with the documents but does not decide whether a transfer is registered.",
    ],
    questions: [
      "What documents are needed to transfer a house, land or vehicle?",
      "What should a tenancy agreement include?",
      "How is a receipt for a sale or transfer documented?",
      "Whose name should appear on the papers, and how is it changed?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "What is being transferred or agreed, and between whom",
      "Proof of ownership and identification the other side will expect",
      "The registry or authority that must receive the documents",
      "Whether you should also seek advice from a qualified lawyer, particularly for land",
    ],
    note:
      "Registration and acceptance of ownership changes rest with the relevant authority. For advice on legal rights over property, consult a qualified lawyer.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about property, land or vehicle documents.",
    related: [
      "deeds-and-power-of-attorney",
      "contracts-agreements-and-business-documents",
    ],
  },
  {
    slug: "contracts-agreements-and-business-documents",
    title: "Contracts, Agreements and Business Documents",
    icon: "Handshake",
    documents: [
      "Contract agreement",
      "Undertaking and promissory note",
      "Car work-and-pay agreement",
      "Change of company name",
      "Business and company registration (supporting documentation)",
    ],
    short:
      "Help preparing written agreements and the supporting paperwork for business and company matters.",
    intro:
      "Clear written agreements help everyone understand what was agreed. Redeem can help you put arrangements in writing and prepare paperwork for business matters.",
    concerns: [
      "Agreements such as contracts, undertakings, promissory notes and work-and-pay arrangements record who agreed to what. The terms are for the parties to settle; Redeem helps with the documentation.",
      "Business and company registration and changes of company name are handled by the relevant registration authorities. Redeem's help is limited to the supporting paperwork it confirms it can assist with.",
    ],
    questions: [
      "What should be written into an agreement between two parties?",
      "What is the difference between an undertaking and a promissory note?",
      "What documents are needed to register a business or change a company name?",
      "Can an agreement be signed in front of a Commissioner for Oaths?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "The parties, the purpose and the main terms you intend to record",
      "Whether any registration authority must receive the documents",
      "What Redeem can prepare and what remains with you or the authority",
      "Whether the terms need review by a qualified lawyer",
    ],
    note:
      "Redeem does not give legal advice on the terms of an agreement, and does not decide whether a registration is approved.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about a contract, agreement or business document.",
    related: [
      "property-land-and-vehicle-documents",
      "publication-filing-and-documentation",
    ],
  },
  {
    slug: "marriage-family-and-travel-attestations",
    title: "Marriage, Family and Travel Attestations",
    icon: "Heart",
    documents: [
      "Attestation for dissolution of marriage",
      "Attestation for consent",
      "Attestation for customary and ordinance marriage",
      "Attestation for travel abroad",
      "Attestation for visa applications",
    ],
    short:
      "Written attestations for family matters, consent, travel and visa applications, prepared for the body that will receive them.",
    intro:
      "Embassies, courts and other offices often ask for a written attestation before they will proceed. Redeem can help you understand what is being asked and prepare the document.",
    concerns: [
      "An attestation is generally a written statement confirming facts or consent for a stated purpose. The wording and the supporting documents requested depend on the purpose and on who will receive it.",
      "The receiving body, such as an embassy or a court, decides what it will accept. Redeem prepares documentation; it does not decide visa outcomes, and the dissolution of a marriage is a matter for the courts.",
    ],
    questions: [
      "What does the embassy or office asking for this require?",
      "Who needs to attend and sign?",
      "What identification and supporting documents should I bring?",
      "Can part of this be arranged if one person is abroad?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "Who is requesting the attestation and what they require in writing",
      "Who must be present and what identification is needed",
      "Whether supporting documents have to accompany it",
      "Deadlines, which Redeem cannot extend",
    ],
    note:
      "Whether an attestation is accepted is decided by the receiving body, not by Redeem.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about a marriage, family or travel attestation.",
    related: [
      "affidavits-and-statutory-declarations",
      "diaspora-documentation-assistance",
    ],
  },
  {
    slug: "wills-estates-and-court-documents",
    title: "Wills, Estates and Probate",
    icon: "Scroll",
    documents: [
      "Last will and testament",
      "Letters of administration (L.A.)",
      "Probate applications: affidavits, consents and gazette publications",
    ],
    short:
      "Documentation support for wills, letters of administration and probate applications.",
    intro:
      "These matters can be sensitive and time-consuming. Redeem can help you understand the documentation involved and prepare it carefully.",
    concerns: [
      "A will records how a person wishes their property to be handled. A letter of administration relates to the authority to manage the estate of someone who has died. The right route depends on the circumstances and the rules that apply.",
      "Court matters are decided by the courts. Redeem can help with preparing documents but does not represent clients in court and is not presented as a law firm.",
    ],
    questions: [
      "What information is needed to prepare a will?",
      "What do I need to apply for a letter of administration?",
      "What is the difference between letters of administration and probate?",
      "Which consents, affidavits and gazette publications are needed?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "What the document is for and which court or office will receive it",
      "Who is involved, and any documents already issued",
      "Which steps Redeem can assist with",
      "Whether you need a qualified lawyer to advise or act for you",
    ],
    note:
      "Redeem is a paralegal and Commissioner for Oaths consult, not a law firm. Where legal representation is required, clients are referred to partner law firms. Court and registry decisions are theirs alone.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about a will, estate or court document.",
    related: [
      "court-proceedings-support",
      "gazette-related-services",
    ],
  },
  {
    slug: "attestation-and-notarisation-of-documents",
    title: "Attestation and Notarisation of Documents",
    icon: "ShieldCheck",
    documents: [
      "Passports and birth certificates for use abroad",
      "School certificates for use abroad",
      "Land and property papers for use abroad",
      "Affidavits prepared for notarisation",
      "Notarisation by a notary public",
      "Judicial Service attestation",
      "Ministry of Foreign Affairs authentication",
    ],
    short:
      "Help moving documents through notarisation, Judicial Service attestation and Ministry of Foreign Affairs authentication for use abroad.",
    intro:
      "Documents going outside Ghana, such as passports, birth certificates, school certificates and land papers, often pass through several offices before a foreign authority will consider them. Bring your documents to Redeem and the business will guide you through each stage.",
    concerns: [
      "Depending on the document and the country where it will be used, the stages can include an affidavit, notarisation by a notary public, attestation by the Judicial Service, and authentication by the Ministry of Foreign Affairs. The receiving country or institution decides which stages it requires.",
      "Redeem arranges the notarisation, which is carried out by a notary public. Where needed, the business also prepares the affidavit and takes the document through the attestation and Foreign Affairs stages for you.",
      "Attestation by the Judicial Service confirms the stamp, signature and seal of the notary public. It does not confirm the contents of the document. Each office decides for itself whether to attest or authenticate, and sets its own requirements.",
    ],
    questions: [
      "What does the country or institution receiving my document require?",
      "Does my document need a notary public first?",
      "What happens at the Judicial Service and at the Ministry of Foreign Affairs?",
      "Which documents should be originals and which can be copies?",
      "Can I start the process from abroad?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "Which country or institution will receive the document, and what stages it requires",
      "Whether the document needs notarisation first",
      "Originals, copies and identification needed at each stage",
      "Which stages apply to your document, in what order",
      "Official fees and timing, which each office sets and Redeem cannot control",
    ],
    note:
      "Notarisation is carried out by a notary public. Attestation and authentication are decisions of the Judicial Service and the Ministry of Foreign Affairs, and Redeem cannot guarantee them or their timing.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about attestation or notarisation of a document.",
    related: [
      "diaspora-documentation-assistance",
      "marriage-family-and-travel-attestations",
    ],
  },
  {
    slug: "book-writing-and-publishing",
    title: "Book Writing and Publishing",
    icon: "BookOpen",
    documentsLabel: "Books and Materials We Publish",
    documents: [
      "Educational books: simplified notes, Q&A, past questions and research guides, basic to tertiary",
      "Religious books: Christian literature, sermon notes, devotionals and church manuals",
      "Motivational and general books: life guides, business ideas, personal development and family values",
    ],
    short:
      "Redeem is also a publishing house that researches, writes, publishes and helps market books for students, churches and general readers.",
    intro:
      "Alongside its legal documentation work, Redeem is a house of knowledge. It works on books it believes can inform, encourage and help people.",
    concerns: [
      "Redeem writes and publishes in three broad areas: educational material for students and teachers, religious books and church materials, and motivational and general titles. Support can include research, writing, publishing and marketing.",
      "Scope, costs, timelines and rights for any project are agreed with the business before work starts. Each project is different, and Redeem does not promise sales or particular outcomes.",
    ],
    questions: [
      "What kind of book do I want to publish, and who is it for?",
      "Do I already have a manuscript, or only an idea?",
      "Which parts of the work will Redeem handle?",
      "Who will own the rights, and how will the book be distributed?",
      "What are the costs and the timeline?",
    ],
    confirm: [
      "Your subject, your audience and the stage you have reached",
      "Which parts of the work Redeem will take on, such as research, writing, publishing and marketing",
      "Rights, ownership and credit, agreed in writing",
      "Costs and timing for your project, confirmed before you begin",
    ],
    note:
      "Terms, costs, timelines and rights are agreed with the business for each project. Redeem cannot promise sales or outcomes.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about writing or publishing a book.",
    related: [
      "ghostwriting-editing-and-self-publishing",
      "publication-filing-and-documentation",
    ],
  },
  {
    slug: "ghostwriting-editing-and-self-publishing",
    title: "Ghostwriting, Editing and Self-Publishing Consultancy",
    icon: "PenLine",
    documentsLabel: "What We Help With",
    documents: ["Ghostwriting", "Editing", "Proofreading", "Self-publishing consultancy"],
    short:
      "Professional help for authors, churches, schools and organisations that have a message but need support to bring it to print.",
    intro:
      "If you have something to say but need a professional hand to shape it, Redeem offers ghostwriting, editing, proofreading and guidance on publishing your own book.",
    concerns: [
      "Ghostwriting means writing material that is published under your name. Editing and proofreading improve and correct a manuscript you have already written. Self-publishing consultancy guides you through publishing the book yourself.",
      "Ownership of the text, credit and confidentiality should be agreed in writing before work begins, particularly for ghostwriting projects.",
    ],
    questions: [
      "Can you write this for me from my ideas or notes?",
      "Can you edit and proofread my draft?",
      "How does self-publishing work, and what will I need to do?",
      "Who owns the finished text?",
      "What are the costs and the timeline?",
    ],
    confirm: [
      "Whether you need writing, editing, proofreading, guidance or a combination",
      "The length and stage of your material",
      "Ownership, credit and confidentiality terms in writing",
      "Costs and timing, confirmed before you begin",
    ],
    note:
      "Terms, costs and timelines are agreed with the business for each project. Redeem cannot promise sales or outcomes.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about ghostwriting, editing or self-publishing support.",
    related: [
      "book-writing-and-publishing",
      "publication-filing-and-documentation",
    ],
  },
  {
    slug: "court-proceedings-support",
    procedures: [
      { title: "Writ of Summons", text: "We assist clients to prepare, type and process a writ of summons for civil matters: debt recovery, breach of contract, land disputes and money claims." },
      { title: "Letters of Administration (L.A.) and Probate", text: "We assist families to prepare the affidavits, consents and gazette publications required for letters of administration and probate applications, when a loved one dies intestate or with a will.", href: "/services/wills-estates-and-court-documents" },
      { title: "Divorce Petition", text: "Support with divorce filing: preparing the petition for divorce, custody and property settlement affidavits, and guidance on court filing. Sensitive matters are handled with care." },
      { title: "Child Custody and Maintenance", text: "We assist mothers and fathers to file for child custody and child maintenance at the Family Tribunal." },
      { title: "Adoption and Guardianship", text: "Documentation and affidavit support for adoption and guardianship processes." },
      { title: "Change of Name, Age Correction and Deed Poll", text: "We prepare and gazette your change of name, correction of date of birth and deed poll, for legal and travel purposes.", href: "/services/change-of-name-and-personal-records" },
      { title: "Tenancy and Landlord Disputes", text: "We draft tenancy agreements and quit notices, and assist landlords and tenants with rent recovery proceedings at the Rent Control and District Court.", href: "/services/property-land-and-vehicle-documents" },
      { title: "Affidavits for Court", text: "All types of court affidavits, including loss of documents, age, marriage, support, travel, lost phone and bank.", href: "/services/affidavits-and-statutory-declarations" },
      { title: "Statutory Declarations and Oaths", text: "Commissioning of oaths and declarations for court and administrative use.", href: "/services/affidavits-and-statutory-declarations" },
      { title: "Land and Property Matters", text: "Preparation of search reports, indentures, transfer of title documents and declarations of title.", href: "/services/property-land-and-vehicle-documents" },
      { title: "Small Claims and Debt Recovery", text: "We help small businesses and individuals prepare demand notices and file for debt recovery." },
    ],
    title: "Court Proceedings Support",
    icon: "ClipboardList",
    documents: [
      "Writ of summons: debt recovery, breach of contract, land disputes and money claims",
      "Divorce petition, with custody and property settlement affidavits",
      "Child custody and maintenance applications (Family Tribunal)",
      "Adoption and guardianship documents",
      "Tenancy and landlord matters: quit notices and rent recovery proceedings",
      "Small claims and debt recovery: demand notices and filing",
      "Court affidavits and statutory declarations",
    ],
    short:
      "Paralegal support with preparing, typing, commissioning and filing documents for a range of court matters.",
    intro:
      "Court processes involve a lot of paperwork. From its main office at the Ashaiman Old District Court, Redeem provides paralegal support, documentation and filing assistance for civil, family and tenancy matters, so your documents are properly prepared before they reach the court.",
    concerns: [
      "Support means preparing and typing documents, commissioning affidavits and declarations, and helping with filing at the relevant court or tribunal. Redeem also helps small businesses and individuals prepare demand notices for debt recovery.",
      "Redeem does not hold itself out as a lawyer. Where legal representation is required, clients are referred to partner law firms. Courts and tribunals alone decide every matter.",
    ],
    questions: [
      "Which documents does my type of case start with?",
      "Can you prepare and type the document for me?",
      "Do I need a lawyer for this?",
      "Which court or tribunal will my matter go to?",
      "What are the fees and the next steps?",
    ],
    confirm: [
      "The type of matter and the court or tribunal that handles it",
      "The documents and evidence you already have",
      "What Redeem prepares and files, and what needs a lawyer",
      "Court fees and timing, which the court sets",
    ],
    note:
      "Redeem is a paralegal and Commissioner for Oaths consult, not a law firm. Where legal representation is required, you will be referred to partner law firms.",
    enquiry:
      "Hello Redeem Publication and Legal Consult, I would like to enquire about support with a court matter.",
    related: [
      "wills-estates-and-court-documents",
      "affidavits-and-statutory-declarations",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services belonging to the publication mandate (the rest are legal and documentation services). */
export const publicationSlugs = ["book-writing-and-publishing", "ghostwriting-editing-and-self-publishing"];
