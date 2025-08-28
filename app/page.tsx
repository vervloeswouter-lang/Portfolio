import Link from "next/link";
import {
  ArrowRight,
  FileDown,
  Mail,
  BrainCircuit,
  BarChart3,
  Cpu,
  GitBranch,
  Lightbulb,
  Workflow,
  LineChart,
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

      {/* Where I add value (replaces AI capabilities) */}
      <section className="container py-12 md:py-16">
        <div className="mb-8">
          <h2>Where I add value</h2>
          <p className="mt-2 text-zinc-600">Practical ways I help teams move from intent to impact.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="card">
            <div className="flex items-center gap-2">
              <Lightbulb className="text-brand" size={18} />
              <h3 className="text-base font-semibold">Discovery &amp; Alignment</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Clarify goals, risks, constraints, and success metrics with stakeholders.
            </p>
          </article>

          <article className="card">
            <div className="flex items-center gap-2">
              <Workflow className="text-brand" size={18} />
              <h3 className="text-base font-semibold">Automation &amp; Integrations</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Build lean workflows and connect systems to reduce manual work and errors.
            </p>
          </article>

          <article className="card">
            <div className="flex items-center gap-2">
              <LineChart className="text-brand" size={18} />
              <h3 className="text-base font-semibold">Decision Support</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Dashboards and models that surface signals and support clear decisions.
            </p>
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
