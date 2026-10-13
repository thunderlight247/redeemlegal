import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type Props = {
  message?: string;
  variant?: "gold" | "dark" | "line-light" | "line-dark";
  children?: React.ReactNode;
  className?: string;
};

export default function WhatsAppButton({ message, variant = "gold", children = "Enquire on WhatsApp", className = "" }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-${variant} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
