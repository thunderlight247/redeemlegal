import { BookOpen, ClipboardList, PenLine, FileSignature, FolderOpen, GraduationCap, Globe, Handshake, Heart, Home, Newspaper, Scroll, ShieldCheck, Stamp, UserCheck } from "lucide-react";
import type { IconKey } from "@/lib/services";

const map = { FileSignature, Stamp, Newspaper, FolderOpen, GraduationCap, Globe, UserCheck, Home, Handshake, Heart, Scroll, ShieldCheck, BookOpen, PenLine, ClipboardList };

export default function ServiceIcon({ name, className = "h-6 w-6" }: { name: IconKey; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
