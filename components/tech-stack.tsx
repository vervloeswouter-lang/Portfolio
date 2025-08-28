import Image from "next/image";

type Logo = { name: string; src: string };

const categories: { title: string; items: Logo[] }[] = [
  {
    title: "Automation & AI",
    items: [
      { name: "OpenAI", src: "/logos/openai.svg" },
      { name: "Power Automate", src: "/logos/power-automate.svg" },
      { name: "Zapier", src: "/logos/zapier.svg" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Python", src: "/logos/python.svg" },
      { name: "Power BI", src: "/logos/powerbi.svg" },
      { name: "SQL", src: "/logos/sql.svg" },
      { name: "Excel / VBA", src: "/logos/excel.svg" },
    ],
  },
  {
    title: "Web & Integrations",
    items: [

      { name: "React", src: "/logos/react.svg" },
      { name: "Salesforce", src: "/logos/salesforce.svg" },
      { name: "REST APIs", src: "/logos/api.svg" },
    ],
  }
];

export default function TechStack() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2>Tech stack</h2>
          <p className="mt-2 text-zinc-600">
            Early AI adopter — fluent across business and engineering tools. I adapt to any stack.
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
                <li key={it.name} className="flex items-center gap-2">
                  <Image
                    src={it.src}
                    alt={it.name}
                    width={28}
                    height={28}
                    className="rounded"
                    priority={false}
                  />
                  <span className="text-sm">{it.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
