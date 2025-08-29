// components/tech-stack.tsx
/* Tech Stack section wired to YOUR current filenames + graceful fallbacks */

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
  // Add more categories any time; missing logo files will render as clean text badges.
];

function LogoBadge({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        width={28}
        height={28}
        className="rounded"
        onError={(e) => {
          e.currentTarget.outerHTML =
            `<span class='inline-flex h-7 items-center rounded-md bg-zinc-100 px-2 text-xs text-zinc-700'>${name}</span>`;
        }}
      />
      <span className="text-sm">{name}</span>
    </div>
  );
}

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
