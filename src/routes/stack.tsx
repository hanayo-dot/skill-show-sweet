import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Henry Anayo" },
      {
        name: "description",
        content:
          "The technologies Henry Anayo works with daily: React, Node.js, TypeScript, PostgreSQL, AWS, and more.",
      },
      { property: "og:title", content: "Stack — Henry Anayo" },
      {
        property: "og:description",
        content:
          "The technologies Henry Anayo works with daily: React, Node.js, TypeScript, PostgreSQL, AWS, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StackPage,
});

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "tRPC", "GraphQL", "Zod", "Jest / Vitest"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Cloudflare Workers", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Redis", "TimescaleDB", "Prisma", "Kafka", "S3"],
  },
];

function StackPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Stack</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Tools I reach for <span className="text-primary text-glow-red">every day</span>
      </h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Boring where it should be boring, modern where it pays off. Everything here is in active
        production use.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-3xl border border-primary/15 bg-card p-7 transition-shadow hover:glow-red"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {group.label}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
