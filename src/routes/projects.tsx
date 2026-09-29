import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Henry Anayo" },
      {
        name: "description",
        content:
          "Selected engineering projects: performant React applications, Node.js platforms, and cloud-native systems.",
      },
      { property: "og:title", content: "Projects — Henry Anayo" },
      {
        property: "og:description",
        content:
          "Selected engineering projects: performant React applications, Node.js platforms, and cloud-native systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "Ledger Grid",
    year: "2025",
    description:
      "Real-time financial reconciliation platform processing 2M+ transactions daily with sub-second match latency.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    name: "FleetSense",
    year: "2024",
    description:
      "IoT telemetry dashboard ingesting sensor data from 40,000 fleet vehicles, with anomaly alerts and live maps.",
    tags: ["Next.js", "TimescaleDB", "AWS IoT"],
  },
  {
    name: "Orbit CMS",
    year: "2024",
    description:
      "Headless content platform with a GraphQL API, edge caching, and a visual editor used by non-technical teams.",
    tags: ["GraphQL", "Serverless", "Cloudflare"],
  },
  {
    name: "PulsePay",
    year: "2023",
    description:
      "Payments orchestration API routing across multiple processors with automatic failover and idempotent retries.",
    tags: ["Node.js", "Stripe", "Kubernetes"],
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Projects</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Systems I've <span className="text-primary text-glow-red">built and shipped</span>
      </h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        A selection of production platforms — each one live, load-tested, and still earning its
        keep.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col rounded-3xl border border-primary/15 bg-card p-7 transition-shadow hover:glow-red"
          >
            <div className="flex items-start justify-between">
              <h2 className="font-display text-2xl font-semibold">{project.name}</h2>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                {project.year}
                <ArrowUpRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Discuss a project like these
        </Link>
      </div>
    </div>
  );
}
