import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    slug: "contract-automation",
    title: "Contract Automation (Beeple → DW)",
    summary: "Python ETL and rules engine to generate contracts from planning, with validation and import.",
    tags: ["Python", "ETL", "Beeple", "DW"],
    impact: ["–40% manual checks", "99.9% import accuracy", "+€20k/yr saved"],
  },
  {
    slug: "planning-converter",
    title: "Planning Converter",
    summary: "Excel/VBA + Python hybrid that normalizes client files into a standard schema.",
    tags: ["VBA", "Python", "Data Modeling"],
    impact: ["2h/week saved per planner", "Fewer payroll corrections"],
  },
  {
    slug: "paymate-analysis",
    title: "Paymate Cost–Benefit",
    summary: "Financial model & report outlining efficiency upside and roadmap options.",
    tags: ["Finance", "ROI", "Strategy"],
    impact: ["1.3 FTE time freed (target)", "Clear go/no‑go gates"],
  },
  {
    slug: "kpi-dashboard",
    title: "KPI Dashboard",
    summary: "Quarterly management view: revenues, margins, and operational KPIs.",
    tags: ["Power BI", "SQL", "Design"],
    impact: ["Faster decisions", "Single source of truth"],
  },
];
