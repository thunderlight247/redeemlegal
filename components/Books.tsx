import Image from "next/image";
import Reveal from "./Reveal";
import { books } from "@/lib/books";

export default function Books() {
  return (
    <Reveal>
      <h2 className="h-display text-3xl md:text-4xl">Titles from Redeem</h2>
      <p className="mt-3 text-sm text-muted">Books written or published under the Redeem Series and by Redeem.</p>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2">
        {books.map((b) => (
          <li key={b.title} className="flex gap-5 border-t border-gold pt-5">
            {b.cover ? (
              <Image src={b.cover.src} width={b.cover.w} height={b.cover.h} alt={`Cover of ${b.title}`} className="h-auto w-28 shrink-0 self-start shadow-md" />
            ) : null}
            <div>
              {b.series ? <p className="eyebrow">{b.series}</p> : null}
              <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{b.title}</h3>
              <p className="mt-1 text-xs text-muted">By {b.author}{b.publishedByRedeem ? ", published by Redeem" : ""}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.blurb}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
