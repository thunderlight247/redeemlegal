import { FileSignature, FolderOpen, GraduationCap, Globe, Newspaper, Stamp } from "lucide-react";
import type { IconKey } from "@/lib/services";

const map = { FileSignature, Stamp, Newspaper, FolderOpen, GraduationCap, Globe };

export default function ServiceIcon({ name, className = "h-6 w-6" }: { name: IconKey; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
