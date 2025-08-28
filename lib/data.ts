import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    slug: "business-cases-financial-modeling",
    title: "Business Cases & Financial Modeling",
    summary:
      "Structured business cases that combine economics with data analysis to drive go/no-go decisions.",
    tags: ["Business Engineering", "Finance", "Data Analysis"],
    impact: ["Clear ROI & payback", "Scenario planning", "Stakeholder alignment"],
  },
  {
    slug: "operations-automations",
    title: "Operations Automations (Company-Specific)",
    summary:
      "Workflow automations across tools and data flows; includes AI assistance for extraction and classification.",
    tags: ["Python", "Power Automate", "OpenAI", "APIs"],
    impact: ["–40% manual work (target)", "Fewer errors", "Faster cycle time"],
  },
  {
    slug: "service-delivery-model",
    title: "Service Delivery Model & Operating Playbook",
    summary:
      "Designed and aligned a service delivery model that connects business needs with tech solutions.",
    tags: ["Stakeholder Management", "Operating Model", "Governance"],
    impact: ["Clear roles & RACI", "Better throughput", "Fewer escalations"],
  },
  {
    slug: "presales-engineering",
    title: "Presales Engineering & Architectural Options",
    summary:
      "Drew out architectural possibilities for clients, clarified costs and trade-offs, and supported commercial conversations.",
    tags: ["Presales", "Architecture", "Costing", "Diagrams"],
    impact: ["Transparent TCO", "Clear choices & risks", "Sales-savvy engagement"],
  },
];
