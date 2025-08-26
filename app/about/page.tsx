export const metadata = {
  title: "About — Portfolio",
  description: "Who I am and how I work.",
};

export default function AboutPage() {
  return (
    <section className="container py-12 md:py-16 prose prose-zinc max-w-3xl">
      <h1>About</h1>
      <p>
        I sit at the intersection of business and technology: translating messy requirements into lean,
        automated workflows. My background is in economics and service delivery, with hands‑on skills in
        Python ETL, Excel/VBA, and integration design.
      </p>
      <h2>How I work</h2>
      <ul>
        <li><strong>Start simple:</strong> prove value within days, not months.</li>
        <li><strong>Automate the boring:</strong> scripts and pipelines first.</li>
        <li><strong>Measure impact:</strong> time saved, error rates, margin uplift.</li>
      </ul>
      <h2>Focus areas</h2>
      <ul>
        <li>Planning & contract automation (Beeple, BookU, AGIpaas)</li>
        <li>Data engineering for reporting (TGNOS, Excel to DW pipelines)</li>
        <li>Cost–benefit analysis and ROI storytelling</li>
      </ul>
    </section>
  );
}
