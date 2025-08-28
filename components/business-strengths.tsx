import { Users, Megaphone, Target, SlidersHorizontal, Handshake, FileText } from "lucide-react";

export default function BusinessStrengths() {
  const items = [
    {
      icon: <Users size={18} className="text-brand" />,
      title: "Stakeholder alignment",
      body: "From discovery to decisions: shared language, clear owners, and momentum.",
    },
    {
      icon: <Megaphone size={18} className="text-brand" />,
      title: "Executive communication",
      body: "Concise storylines, sharp slides, and well-run meetings that land the message.",
    },
    {
      icon: <Target size={18} className="text-brand" />,
      title: "Problem framing",
      body: "Define scope, risks, and success metrics; make trade-offs explicit early.",
    },
    {
      icon: <SlidersHorizontal size={18} className="text-brand" />,
      title: "Prioritization",
      body: "Impact × effort, sequencing, and pragmatic roadmaps teams actually follow.",
    },
    {
      icon: <Handshake size={18} className="text-brand" />,
      title: "Presales & commercial",
      body: "Architectural options with costs/TCO and a clear value narrative.",
    },
    {
      icon: <FileText size={18} className="text-brand" />,
      title: "Change & handover",
      body: "Docs, training, and adoption so the solution sticks after delivery.",
    },
  ];

  return (
    <section className="container py-12 md:py-16">
      <h2>Business strengths</h2>
      <p className="mt-2 text-zinc-600">
        The counterpart to my tech stack: how I drive clarity, decisions, and adoption.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="card">
            <div className="flex items-center gap-2">
              {it.icon}
              <h3 className="text-base font-semibold">{it.title}</h3>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
