"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape and return focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Logo size={44} priority />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-semibold">{site.shortName}</span>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">and Legal Consult</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors hover:text-gold-deep ${
                isActive(l.href) ? "text-gold-deep underline decoration-gold decoration-2 underline-offset-8" : "text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton variant="dark" className="hidden !py-2 !text-[0.82rem] sm:inline-flex">
            WhatsApp
          </WhatsAppButton>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-white md:hidden">
        <nav aria-label="Mobile" className="wrap flex flex-col py-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`border-b border-line py-3 text-base ${isActive(l.href) ? "font-semibold text-gold-deep" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <WhatsAppButton variant="dark" className="mt-4">Enquire on WhatsApp</WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
