import { SITE } from "@/lib/site";
import SocialLinks from "@/components/social-links";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <SocialLinks variant="icons" />
      </div>
    </footer>
  );
}
