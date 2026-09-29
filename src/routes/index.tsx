import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Gauge } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import dottedGlobe from "@/assets/dotted-globe.jpg";
import chipMacro from "@/assets/chip-macro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Henry Anayo — Full-Stack Software Engineer" },
      {
        name: "description",
        content:
          "Full-Stack Software Engineer specializing in performant React applications, robust Node.js backend systems, and cloud optimization.",
      },
      { property: "og:title", content: "Henry Anayo — Full-Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-Stack Software Engineer specializing in performant React applications, robust Node.js backend systems, and cloud optimization.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const techStrip = [
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Redis",
  "PostgreSQL",
  "AWS",
  "GraphQL",
];

const whyCardsTop = [
  {
    icon: Code2,
    title: "Production-Grade Reliability",
    body: "Clean, thoroughly tested, and production-ready code with full observability baked in from day one.",
  },
  {
    icon: Gauge,
    title: "Performance First Mindset",
    body: "Core Web Vitals, ultra-fast render, and aggressive latency optimization across every critical path.",
  },
];

const cloudCard = {
  title: "Scalable Cloud Architecture",
  body: "Serverless infrastructure, secure-by-default design, and efficient data pipelines built to grow with load.",
};

const milestones = [
  {
    role: "Senior Software Engineer",
    company: "Fintech Platform Lead",
    period: "Sep 2024 — Present",
    points: [
      "Spearheaded the development of performant web architecture, slashing user load times.",
      "Cut cloud spend by 38% while raising platform availability to 99.98%.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Digital Products Studio",
    period: "2022 — 2024",
    points: [
      "Shipped 12+ client platforms across React, Node.js, and serverless AWS.",
      "Designed GraphQL APIs serving millions of requests per month.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Startup Studio",
    period: "2020 — 2022",
    points: [
      "Built and maintained the design system used across four products.",
      "Improved Core Web Vitals from failing to consistently green.",
    ],
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-red [mask-image:radial-gradient(ellipse_65%_75%_at_68%_35%,black,transparent)]" />
        <div className="absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:pt-44">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Full-Stack Software Engineer
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Engineering <span className="text-primary text-glow-red">scalable architecture</span>{" "}
              for modern enterprises
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Full-Stack Software Engineer specializing in performant React applications, robust
              Node.js backend systems, and cloud optimization.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Let&rsquo;s Talk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                View My Work
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-primary/25 blur-[100px]" />
            <img
              src={heroPortrait}
              alt="Henry Anayo, Full-Stack Software Engineer"
              width={1024}
              height={1280}
              className="relative w-full rounded-3xl border border-primary/20 object-cover glow-red"
            />
          </div>
        </div>
        {/* Tech strip */}
        <div className="relative border-t border-primary/10 bg-background/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
            {techStrip.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner with me */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Why partner with me
        </p>
        <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Why Partner With Me Today And Always?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whyCardsTop.map((card) => (
            <WhyCard key={card.title} {...card} />
          ))}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-card transition-shadow hover:glow-red">
            <div className="absolute inset-0 bg-grid-red opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="relative flex h-full min-h-56 flex-col justify-end p-6">
              <h3 className="font-display text-lg font-semibold">{cloudCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cloudCard.body}</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 transition-shadow hover:glow-red">
            <img
              src={dottedGlobe}
              alt=""
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="relative flex h-full min-h-56 flex-col justify-end p-6">
              <h3 className="font-display text-lg font-semibold">Business-Driven Decisions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cross-functional alignment, clear technical communication, and product strategy that
                ships outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-primary/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Professional milestones &amp; impact
          </h2>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-primary/15">
              <img
                src={chipMacro}
                alt="Processor on a circuit board with glowing red traces"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <ol className="relative space-y-10 border-l border-primary/20 pl-8">
              {milestones.map((job) => (
                <li key={job.role} className="relative">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {job.company}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {job.role}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      · {job.period}
                    </span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 bg-grid-red opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a system that needs to <span className="text-primary text-glow-red">scale</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Tell me about the product you're building and I'll show you what production-grade looks
            like.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Let&rsquo;s Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function WhyCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Code2;
  title: string;
  body: string;
}) {
  return (
    <div className="group rounded-3xl border border-primary/15 bg-card p-6 transition-shadow hover:glow-red">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
