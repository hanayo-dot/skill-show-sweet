import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Henry Anayo" },
      {
        name: "description",
        content:
          "Engineering services: full-stack product development, cloud optimization, API design, and performance audits.",
      },
      { property: "og:title", content: "Solutions — Henry Anayo" },
      {
        property: "og:description",
        content:
          "Engineering services: full-stack product development, cloud optimization, API design, and performance audits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    number: "01",
    title: "Full-Stack Product Development",
    body: "End-to-end delivery of web products — from schema design and APIs to polished React frontends. One engineer, entire stack, no handoff gaps.",
  },
  {
    number: "02",
    title: "Cloud Architecture & Optimization",
    body: "Design or rescue serverless and containerized infrastructure. Typical outcome: lower cloud spend, higher availability, infrastructure you can reason about.",
  },
  {
    number: "03",
    title: "API & Systems Design",
    body: "REST and GraphQL APIs built for scale — versioned, documented, load-tested, and observable from day one.",
  },
  {
    number: "04",
    title: "Performance Audits",
    body: "A deep pass over your app's critical paths: bundle size, render cost, query latency, and caching. You get a prioritized fix list with measurable targets.",
  },
];

function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Solutions</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        How I can <span className="text-primary text-glow-red">move the needle</span>
      </h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        Focused engagements for teams that need senior full-stack firepower without the agency
        overhead.
      </p>
      <div className="mt-12 space-y-4">
        {solutions.map((item) => (
          <div
            key={item.number}
            className="group flex flex-col gap-4 rounded-3xl border border-primary/15 bg-card p-7 transition-shadow hover:glow-red sm:flex-row sm:items-start sm:gap-8"
          >
            <span className="font-display text-3xl font-bold text-primary/60 transition-colors group-hover:text-primary">
              {item.number}
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
