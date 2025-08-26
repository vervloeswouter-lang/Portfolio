export const metadata = {
  title: "About — Portfolio",
  description: "Who I am and how I work.",
};

export default function AboutPage() {
  return (
    <section className="container py-12 md:py-16 max-w-3xl">
      <h1 className="mb-4">About</h1>

      <p className="text-zinc-700">
        I’m a creative business professional with a Business Engineering background. 
        I bridge stakeholders, operations, and technology—turning fuzzy goals into aligned plans and shipped outcomes. 
        I’m comfortable in ambiguity, quick to prototype, and focused on solutions teams can own.
      </p>

      <h2 className="mt-10">Hard skills</h2>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
        <li>Process automation (Python, Excel/VBA, scripting)</li>
        <li>Data pipelines & ETL; data modeling; SQL</li>
        <li>Dashboards & reporting (Power BI / spreadsheets)</li>
        <li>Web & integrations (APIs, webhooks, basic Next.js)</li>
        <li>Version control & CI (Git, GitHub Actions)</li>
        <li>Structured financial thinking (cost–benefit, ROI)</li>
      </ul>

      <h2 className="mt-10">Soft skills</h2>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
        <li>Stakeholder discovery & requirement elicitation</li>
        <li>Problem framing & prioritization by impact/feasibility</li>
        <li>Clear, concise communication with executives & teams</li>
        <li>Workshop facilitation & alignment across functions</li>
        <li>Rapid prototyping and iterative delivery</li>
        <li>Documentation & handover for long-term ownership</li>
      </ul>

      <h2 className="mt-10">Education</h2>
      <p className="mt-3 text-zinc-700">
        Business Engineering — combining economics, analytics, and technology. 
        Ongoing learning through hands-on projects and targeted certifications.
      </p>

      <h2 className="mt-10">How I work</h2>
      <ul className="mt-3 list-disc pl-5 space-y-2 text-zinc-700">
        <li><strong>Start simple:</strong> prove value in days, not months.</li>
        <li><strong>Collaborate early:</strong> co-design with stakeholders.</li>
        <li><strong>Measure:</strong> time saved, error rates, margin uplift.</li>
        <li><strong>Enablement:</strong> leave teams with clear docs & ownership.</li>
      </ul>
    </section>
  );
}
