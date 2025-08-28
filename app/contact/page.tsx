// app/contact/page.tsx
import SocialLinks from "@/components/social-links";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact — Portfolio",
  description: "Get in touch with Wouter Vervloessem",
};

export default function ContactPage({ searchParams }: { searchParams?: { sent?: string } }) {
  const sent = searchParams?.sent === "1";

  return (
    <section className="container py-12 md:py-16 max-w-2xl">
      <h1>Contact</h1>
      <p className="text-zinc-600 mt-2">
        Prefer email or LinkedIn? Use the quick links below, or send a message with the form.
      </p>

      <SocialLinks variant="buttons" className="mt-6" />

      {sent && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          Thanks! Your message was sent. I’ll get back to you soon.
        </div>
      )}

      <form action="/api/contact" method="post" className="card mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      <p className="mt-6 text-sm text-zinc-600">
        Or email directly:{" "}
        <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        {" "}· Connect on{" "}
        <a className="underline" href={SITE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}
