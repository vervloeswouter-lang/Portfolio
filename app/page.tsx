import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT: Intro */}
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            Portfolio
          </span>

          <h1>
            I turn fuzzy goals into aligned plans and shipped outcomes.
          </h1>

          <p className="text-zinc-600">
            I’m a creative business professional who bridges stakeholders, operations, and tech.
            I uncover real needs, frame the problem, prototype fast, and deliver pragmatic solutions
            the organization can own.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              See work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Let’s talk
            </Link>
          </div>

          <ul role="list" className="mt-6 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
            {[
              "Elicit & clarify stakeholder requirements",
              "Align priorities by impact & feasibility",
              "Prototype fast; iterate with feedback",
              "Deliver outcomes & measure value",
            ].map((m) => (
              <li key={m} className="flex items-start gap-2">
                <CheckCircle size={16} className="mt-0.5 text-brand" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Featured work */}
        <div className="card">
          <h3 className="mb-4">Selected work</h3>
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
