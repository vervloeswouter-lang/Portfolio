import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  impact?: string[];
  link?: string;
};

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="card h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{project.summary}</p>
        </div>
        {project.link && (
          <Link className="btn btn-outline whitespace-nowrap" href={project.link} target="_blank">
            View <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full border border-zinc-300 px-2 py-1 text-xs text-zinc-700">{t}</li>
        ))}
      </ul>
      {!compact && project.impact && (
        <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700">
          {project.impact.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      )}
    </article>
  );
}
