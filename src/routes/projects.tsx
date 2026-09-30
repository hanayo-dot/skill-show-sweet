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
    name: "Kivu",
    year: "2025 — 2026",
    description:
      "A lake-wide aquaculture, water-quality, and spatial intelligence platform built for fish-cage farmers on Lake Victoria.",
    tags: ["Spatial Intelligence", "IoT Telemetry", "GIS", "React", "PostgreSQL"],
  },
  {
    name: "Tartua",
    year: "2025",
    description:
      "A platform that unifies all your social media accounts into one dashboard, allowing you to manage them and track analytics, performance, and audience data in one place.",
    tags: ["Social APIs", "Analytics Engine", "React", "Node.js", "Redis"],
  },
  {
    name: "Jonam",
    year: "2025",
    description:
      "An interactive, machine-learning-driven environmental monitoring and risk assessment platform built to protect Lake Victoria's ecosystem.",
    tags: ["Machine Learning", "Environmental AI", "Time-Series", "Python", "React"],
  },
  {
    name: "Haven Property",
    year: "2026",
    description:
      "Haven Kenya is a property and maintenance management platform engineered with React 19 + Tailwind CSS on the frontend and an ultra-fast, robust Go (1.26) backend.",
    tags: ["React 19", "Go 1.26", "Tailwind CSS", "PostgreSQL", "REST APIs"],
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
