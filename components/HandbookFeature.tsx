import Image from "next/image";
import Reveal from "./Reveal";

export default function HandbookFeature() {
  return (
    <Reveal>
      <h2 className="h-display text-3xl md:text-4xl">Handbook for Commissioners for Oaths</h2>
      <div className="mt-6 grid items-center gap-6 md:grid-cols-5">
        <Image
          src="/images/book-commissioners-handbook-wrap.jpg"
          width={1280}
          height={882}
          alt="Full cover of the Commissioners for Oaths Handbook by Caleb Dickens, showing a gavel and the Martyrs of the Rule of Law memorial"
          className="h-auto w-full md:col-span-3"
        />
        <p className="text-sm leading-relaxed text-muted md:col-span-2">
          Caleb Dickens wrote the Commissioners for Oaths Handbook, a legal handbook for Commissioners for Oaths. It is part of Redeem&rsquo;s publishing and training work. Ask the business about availability.
        </p>
      </div>
    </Reveal>
  );
}
