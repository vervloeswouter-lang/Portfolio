"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, FileText, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/cv", label: "CV", icon: User },
  { href: "/contact", label: "Contact", icon: Mail }, // keep if you want Contact in the nav
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-zinc-200">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">WV</span>
          <span>Wouter Vervloessem</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => {
            const Icon = l.icon;
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-50",
                  active && "bg-zinc-100"
                )}
              >
                <Icon size={16} />
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
