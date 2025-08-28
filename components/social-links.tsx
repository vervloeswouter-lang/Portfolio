import { SITE } from "@/lib/site";
import { Mail, Linkedin } from "lucide-react";

type Variant = "icons" | "buttons";
export default function SocialLinks({ variant = "icons", className = "" }: { variant?: Variant; className?: string }) {
  const items = [
    { href: `mailto:${SITE.email}`, label: "Email", Icon: Mail },
    { href: SITE.linkedin, label: "LinkedIn", Icon: Linkedin },
  ];

  if (variant === "buttons") {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {items.map(({ href, label, Icon }) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
             className="btn btn-outline inline-flex items-center gap-2">
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a key={label} href={href} aria-label={label}
           target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
           className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 hover:bg-zinc-50">
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
