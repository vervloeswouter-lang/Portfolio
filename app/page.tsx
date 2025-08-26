import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            Portfolio
          </span>
          <h1>Hi, I’m Wouter — I turn messy processes into clean automations.</h1>
          <p className="text-zinc-600">
            Pre‑sales & service delivery with a strong economics backbone. I build pragmatic automations,
            data pipelines, and dashboards that save hours every week and make decisions faster.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              View projects <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-zinc-600 md:grid-cols-2">
            <li>• –40% manual processing (contract automation)</li>
            <li>• +€20k/yr saved (planning scripts)</li>
            <li>• 99.9% import accuracy (ETL)</li>
            <li>• 1.3 FTE time freed (Paymate)</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="mb-4">Featured work</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/projects" className="btn btn-outline">
              See all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
