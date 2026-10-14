import Image from "next/image";

export default function CoatOfArms({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/ghana-coat-of-arms.png"
      width={668}
      height={559}
      alt="Coat of arms of Ghana"
      className={className}
      style={{ height: size, width: "auto" }}
    />
  );
}
