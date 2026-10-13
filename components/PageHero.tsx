import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="on-dark bg-ink text-white">
      <div className="wrap py-16 md:py-24">
        <Reveal stagger className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-4 text-4xl md:text-6xl">{title}</h1>
          {children ? <div className="mt-6 text-lg leading-relaxed text-white/75">{children}</div> : null}
        </Reveal>
      </div>
      <div className="hairline-gold" />
    </section>
  );
}
