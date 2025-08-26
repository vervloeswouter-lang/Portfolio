import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Portfolio",
  description: "Selected case studies with outcomes and metrics.",
};

export default function ProjectsPage() {
  return (
    <section className="container py-12 md:py-16">
      <div className="mb-8 space-y-2">
        <h1>Projects</h1>
        <p className="text-zinc-600">A few representative projects. I can demo details on request.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
