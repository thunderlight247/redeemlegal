import Image from "next/image";

export default function Logo({ size = 48, priority = false, className = "" }: { size?: number; priority?: boolean; className?: string }) {
  return (
    <Image
      src="/images/redeem-logo.png"
      width={570}
      height={570}
      alt="Redeem Publication and Legal Consult seal with gold RS monogram"
      priority={priority}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
