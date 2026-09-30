import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Henry Anayo" },
      {
        name: "description",
        content:
          " measurable outcomes: uptime, latency, cost savings, and what teams say about working with Henry Anayo.",
      },
      { property: "og:title", content: "Impact — Henry Anayo" },
      {
        property: "og:description",
        content:
          "Measurable outcomes: uptime, latency, cost savings, and what teams say about working with Henry Anayo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ImpactPage,
});

const stats = [
  { value: "99.98%", label: "Platform uptime maintained" },
  { value: "38%", label: "Cloud spend reduction delivered" },
  { value: "3.2x", label: "Faster deployment cadence" },
  { value: "12+", label: "Products shipped to production" },
];

const testimonials = [
  {
    quote:
      "Henry rebuilt our checkout pipeline and page loads dropped from 4s to under 900ms. Conversion followed immediately.",
    author: "Product Lead, Fintech Platform",
  },
  {
    quote:
      "Rare combination: writes backend code you can trust, and explains trade-offs in language the whole team understands.",
    author: "CTO, Digital Products Studio",
  },
];

function ImpactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <div className="animate-fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Impact</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Numbers that <span className="text-primary text-glow-red">survive audit</span>
        </h1>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Engineering is only as good as its measurable outcomes. Here's mine.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-3xl border border-primary/15 bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-red"
          >
            <p className="font-display text-4xl font-bold text-primary text-glow-red transition-transform duration-200 group-hover:scale-105">
              {stat.value}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="group rounded-3xl border border-primary/15 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-red"
          >
            <Quote className="h-6 w-6 text-primary transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
            <blockquote className="mt-4 text-base leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm font-medium text-muted-foreground">
              — {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 hover:glow-red"
        >
          Get results like these
        </Link>
      </div>
    </div>
  );
}
