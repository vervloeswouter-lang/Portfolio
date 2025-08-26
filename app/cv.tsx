export const metadata = {
  title: "CV — Portfolio",
  description: "Printable CV",
};

export default function CvPage() {
  return (
    <main className="container py-12 md:py-16">
      <div className="no-print mb-6 flex justify-end">
        <button onClick={() => window.print()} className="btn btn-primary">Download as PDF</button>
      </div>

      <article className="page mx-auto max-w-3xl rounded-2xl border border-zinc-200 p-8 shadow-sm bg-white">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Wouter Vervloessem</h1>
            <p className="text-zinc-600">Creative business professional • Stakeholder-driven delivery</p>
          </div>
          <div className="text-right text-sm text-zinc-600">
            <p><a className="underline" href="mailto:you@example.com">you@example.com</a></p>
            <p>LinkedIn / GitHub (add links)</p>
            <p>Belgium</p>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-2 text-zinc-700">
            Creative business generalist with a Business Engineering background. I elicit real stakeholder needs,
            frame problems clearly, prototype fast, and deliver pragmatic solutions teams can own.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Hard skills</h2>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Process automation (Python, Excel/VBA)</li>
              <li>Data pipelines & ETL; SQL; data modeling</li>
              <li>Dashboards & reporting (Power BI / spreadsheets)</li>
              <li>Web & integrations (APIs, webhooks, basic Next.js)</li>
              <li>Version control & CI (Git, GitHub Actions)</li>
              <li>Cost–benefit & ROI analysis</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Soft skills</h2>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Stakeholder discovery & alignment</li>
              <li>Problem framing & prioritization</li>
              <li>Clear exec & team communication</li>
              <li>Workshop facilitation</li>
              <li>Rapid prototyping & iteration</li>
              <li>Documentation & handover</li>
            </ul>
          </div>
        </section>

        {/* Experience (sample structure—replace bullets) */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="mt-2">
            <h3 className="font-semibold">Service Delivery / Pre-Sales</h3>
            <p className="text-sm text-zinc-600">Agilitas Group — 202X–present</p>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Automations & data flows that reduced manual checks (–40%).</li>
              <li>Planning/contract tooling; measurable savings (+€20k/yr).</li>
              <li>Executive-ready ROI storytelling and roadmaps.</li>
            </ul>
          </div>
          {/* Add more roles as needed */}
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-2 text-zinc-700">
            <strong>Business Engineering</strong> — economics, analytics, and technology.
          </p>
        </section>
      </article>
    </main>
  );
}
