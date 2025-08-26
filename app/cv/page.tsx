import PrintButton from "@/components/print-button";

export const metadata = {
  title: "CV — Portfolio",
  description: "Printable CV of Wouter Vervloessem",
};

export default function CvPage() {
  return (
    <main className="container py-12 md:py-16">
      {/* Print action (client-only button) */}
      <div className="no-print mb-6 flex justify-end">
        <PrintButton />
      </div>

      <article className="page mx-auto max-w-3xl rounded-2xl border border-zinc-200 p-8 shadow-sm bg-white">
        {/* Header */}
        <header className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold">Wouter Vervloessem</h1>
            <p className="text-zinc-600">Creative business professional • Stakeholder-driven delivery</p>
          </div>
          <div className="text-right text-sm text-zinc-600">
            <p>
              <a className="underline" href="mailto:you@example.com">
                you@example.com
              </a>
            </p>
            <p>
              <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>{" "}
              ·{" "}
              <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
            <p>Belgium</p>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="mt-2 text-zinc-700">
            Business Engineer who bridges stakeholders, operations, and technology. I elicit real needs, frame the
            problem, prototype fast, and deliver pragmatic solutions teams can own.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold">Hard skills</h2>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Process automation (Python, Excel/VBA)</li>
              <li>Data pipelines &amp; ETL; SQL; data modeling</li>
              <li>Dashboards &amp; reporting (Power BI / spreadsheets)</li>
              <li>Web &amp; integrations (APIs, webhooks, basic Next.js)</li>
              <li>Version control &amp; CI (Git, GitHub Actions)</li>
              <li>Cost–benefit &amp; ROI analysis</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Soft skills</h2>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Stakeholder discovery &amp; alignment</li>
              <li>Problem framing &amp; prioritization</li>
              <li>Clear exec &amp; team communication</li>
              <li>Workshop facilitation</li>
              <li>Rapid prototyping &amp; iteration</li>
              <li>Documentation &amp; handover</li>
            </ul>
          </div>
        </section>

        {/* Experience (sample content—edit bullets/titles/dates) */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Experience</h2>

          <div className="mt-3">
            <h3 className="font-semibold">Service Delivery / Pre-Sales</h3>
            <p className="text-sm text-zinc-600">Agilitas Group — 202X–present</p>
            <ul className="mt-2 list-disc pl-5 text-zinc-700">
              <li>Reduced manual checks by ~40% through workflow automation.</li>
              <li>Planning/contract tools delivering measurable savings (~€20k/yr).</li>
              <li>Exec-ready ROI narratives and roadmaps that aligned stakeholders.</li>
            </ul>
          </div>

          {/* Add more roles as needed */}
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-2 text-zinc-700">
            <strong>Business Engineering</strong> — combines economics, analytics, and technology.
          </p>
        </section>

        {/* Tools (optional) */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Tools</h2>
          <p className="mt-2 text-zinc-700">
            Python, Excel/VBA, SQL, Power BI, Git/GitHub, Next.js, REST APIs, webhooks.
          </p>
        </section>
      </article>
    </main>
  );
}
