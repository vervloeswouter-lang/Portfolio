import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Portfolio",
  description: "Selected work focused on impact, automation, and AI.",
};

export default function ProjectsPage() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mb-8 space-y-2">
        <h1>Projects</h1>
        <p className="text-zinc-600">
          Generalized case studies that highlight business value and delivery. Brand names removed; outcomes first.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
