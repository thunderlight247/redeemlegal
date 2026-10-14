"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt?: string; // leave empty for decorative images
  className?: string;
  aspect?: string; // e.g. "aspect-[16/9]"; omit when absolutely positioned
  absolute?: boolean;
  priority?: boolean;
  focus?: string; // CSS object-position, e.g. "50% 25%"
};

/** Toned photo with a graceful fallback panel if the image fails to load. */
export default function Photo({ src, alt = "", className = "", aspect = "", absolute = false, priority = false, focus }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${absolute ? "absolute inset-0" : "relative"} overflow-hidden bg-ink ${aspect} ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover"
          style={focus ? { objectPosition: focus } : undefined}
          onError={() => setFailed(true)}
        />
      )}
      {/* warm tone + vignette to unify different photos with the gold/charcoal palette */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/60 via-gold/15 to-ink/20 mix-blend-multiply" />
      {failed && <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-ink via-night to-ink" />}
    </div>
  );
}
