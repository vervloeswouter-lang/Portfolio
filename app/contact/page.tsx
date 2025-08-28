import Link from "next/link";

export const metadata = {
  title: "Contact — Portfolio",
  description: "Say hello.",
};

export default function ContactPage() {
  return (
    <section className="container py-12 md:py-16 max-w-2xl">
      <h1>Contact</h1>
      <p className="text-zinc-600 mb-6">
        The quickest way is email.
      </p>
      <form action="/api/contact" method="post" className="card space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-xl border px-3 py-2" />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      <p className="mt-6 text-sm text-zinc-600">
        Or email directly:{" "}
        <Link className="underline" href="mailto:you@example.com">woutervervloessem@hotmail.com</Link>
      </p>
    </section>
  );
}
