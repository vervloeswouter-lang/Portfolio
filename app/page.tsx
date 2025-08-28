import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Mail,
  BrainCircuit,
  BarChart3,
  Cpu,
  GitBranch,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            Wouter Vervloessem
          </span>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            I turn business challenges into creative tech solutions.
          </h1>
          <p className="mt-4 text-lg text-zinc-600 md:text-xl">
            With a strong economics background, hands-on IT expertise, and a creative approach to problem-solving,
            I bridge the gap between business strategy and technology execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </Link>
            <Link href="/cv/Wouter_Vervloessem_CV.pdf" className="btn btn-outline">
              Download CV <FileDown size={18} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-2">
            <h2>About me</h2>
            <p className="mt-3 text-zinc-600">
              I’m Wouter — a creative problem-solver at the intersection of IT, economics, and innovation.
              I translate business goals into scalable, tech-enabled outcomes.
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              Next step: grow into an <span className="font-medium text-zinc-800">IT Solution Architect</span>,
              designing scalable solutions and driving innovation.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="card">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-brand" size={18} />
                  <h3 className="text-base font-semibold">Business &amp; Economics Mindset</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600">From strategy to measurable KPIs and real outcomes.</p>
              </article>

              <article className="card">
                <div className="flex items-center gap-2">
                  <Cpu className="text-brand" size={18} />
                  <h3 className="text-base font-semibold">IT &amp; Automation</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Python, API integrations, Salesforce, Beeple, Excel/VBA.
                </p>
              </article>

              <article className="card">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="text-brand" size={18} />
                  <h3 className="text-base font-semibold">Turning Complexity into Clarity</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Automation, dashboards, and data flows that make decisions easy.
                </p>
              </article>

              <article className="card">
                <div className="flex items-center gap-2">
                  <GitBranch className="text-brand" size={18} />
                  <h3 className="text-base font-semibold">Bridge Builder</h3>
                </div>
                <p className="mt-2 text-sm text-zinc-600">
                  Align stakeholders across business and engineering to ship.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities (replaces project teaser) */}
      <section className="container py-12 md:py-16">
        <div className="mb-8">
          <h2>AI capabilities</h2>
          <p className="mt-2 text-zinc-600">Pragmatic, business-first applications of AI.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="card flex flex-col">
            <h3 className="text-lg font-semibold">Email &amp; Sales Copilot</h3>
            <p className="mt-2 text-sm text-zinc-600">Drafts, enriches, and routes outreach with your tone &amp; data.</p>
          </article>

          <article className="card flex flex-col">
            <h3 className="text-lg font-semibold">Document Intake Automation</h3>
            <p className="mt-2 text-sm text-zinc-600">Parse PDFs/exports; validate, normalize, and hand off to ops.</p>
          </article>

          <article className="card flex flex-col">
            <h3 className="text-lg font-semibold">Knowledge Assistant (RAG)</h3>
            <p className="mt-2 text-sm text-zinc-600">Answers from your docs with citations; reduces back-and-forth.</p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-20">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s talk about solving problems creatively.</h2>
          <p className="mt-2 text-zinc-600">
            Bring your goals and constraints — I’ll bring structure, creativity, and delivery.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary">
              Contact <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
