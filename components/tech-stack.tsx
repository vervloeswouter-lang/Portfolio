// components/tech-stack.tsx
import LogoBadge from "@/components/logo-badge";

type Logo = { name: string; src: string };
const categories: { title: string; items: Logo[] }[] = [
  {
    title: "Automation & AI",
    items: [
      { name: "OpenAI", src: "/logos/OpenAI.svg" },
      { name: "Power Automate", src: "/logos/PowerAutomate.svg" },
      { name: "Zapier", src: "/logos/zapier-icon-svgrepo-com.svg" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Python", src: "/logos/python.svg" },
      { name: "Power BI", src: "/logos/powerbi.svg" },
      { name: "SQL", src: "/logos/sql.svg" },
      { name: "Excel / VBA", src: "/logos/Excel.svg" },
    ],
  },
  {
    title: "Web & Integrations",
    items: [
      { name: "React", src: "/logos/react.svg" },
      { name: "REST APIs", src: "/logos/restapi.svg" },
      { name: "Salesforce", src: "/logos/salesforce.svg" },
    ],
  },
  // add more categories if you like
];

export default function TechStack() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2>Tech stack</h2>
          <p className="mt-2 text-zinc-600">
            Early AI adopter — fluent across business and engineering tools. I adapt to your stack.
          </p>
        </div>
        <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          Early AI adopter
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((cat) => (
          <article key={cat.title} className="card">
            <h3 className="text-sm font-semibold text-zinc-700">{cat.title}</h3>
            <ul className="mt-3 flex flex-wrap items-center gap-4">
              {cat.items.map((it) => (
                <li key={it.name}>
                  <LogoBadge name={it.name} src={it.src} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
