export function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="container flex h-14 items-center justify-between text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Wouter Vervloessem</p>
        <p className="hidden sm:block">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
