import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Feather,
  Gauge,
  PenLine,
  Sparkles,
} from "lucide-react";
import { HeroPortrait } from "@/components/HeroPortrait";
import dottedGlobe from "@/assets/dotted-globe.jpg";
import chipMacro from "@/assets/chip-macro.jpg";
import { SocialIcons, ResumeButton } from "@/components/SocialLinks";

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
    role: "Software Engineer",
    company: "Zone 01 Kisumu",
    period: "2026",
    points: [
      "Engineered performant software architectures and scalable backend services handling concurrent workloads.",
      "Spearheaded core system optimizations and collaborative full-stack delivery.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Point-Up Digital",
    period: "2025 — 2026",
    points: [
      "Shipped client platforms and modern web applications across React, Node.js, and cloud services.",
      "Designed robust APIs and optimized database pipelines serving high-throughput users.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Ayanga Studios",
    period: "2024 — 2025",
    points: [
      "Built and maintained responsive UI design systems and interactive web interfaces.",
      "Improved Core Web Vitals and frontend rendering performance to consistently green.",
    ],
  },
];

const articles = [
  {
    title: "Architecting Real-Time Spatial Pipelines for Lake Victoria Aquaculture",
    summary:
      "Deep-dive into Kivu's telemetry engine: streaming water-quality sensor packets, bathymetric tile ingestion, and sub-second anomaly detection.",
    date: "Sep 2026",
    readTime: "7 min read",
    tags: ["Go", "GIS", "React 19", "IoT"],
    url: "https://dev.to/hanayo",
  },
  {
    title: "Building High-Throughput Social Media Aggregation with Go and Redis",
    summary:
      "Behind Tartua's unified analytics platform: handling concurrent API rate-limits, fault-tolerant worker pools, and cache invalidation strategies.",
    date: "Aug 2026",
    readTime: "9 min read",
    tags: ["Go", "Distributed Systems", "Redis", "APIs"],
    url: "https://dev.to/hanayo",
  },
  {
    title: "Predictive Environmental Modeling at the Edge for Freshwater Ecosystems",
    summary:
      "How Jonam leverages lightweight machine learning on sparse sensor readings to forecast dissolved oxygen crashes and algal blooms before cage die-offs.",
    date: "Jun 2026",
    readTime: "6 min read",
    tags: ["Machine Learning", "Ecology", "Python", "Sensors"],
    url: "https://dev.to/hanayo",
  },
];

const hobbies = [
  {
    icon: BookOpen,
    title: "Reading",
    category: "Knowledge & Inquiry",
    description:
      "Exploring literature, philosophy, and technical classics to cultivate deep focus, broaden perspective, and inform architectural thinking.",
  },
  {
    icon: PenLine,
    title: "Writing",
    category: "Clarity & Synthesis",
    description:
      "Articulating complex ideas, essays, and technical reflections with precision, narrative structure, and deliberate intent.",
  },
  {
    icon: Feather,
    title: "Poetry",
    category: "Creative Expression",
    description:
      "Engaging with rhythm, imagery, and concise phrasing to cultivate creative intuition, emotional nuance, and economy of expression.",
  },
  {
    icon: Sparkles,
    title: "Strategic Chess",
    category: "Mental Discipline",
    description:
      "Playing rapid and positional chess, studying master endgames, and training deep tactical calculation and composure under pressure.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-red [mask-image:radial-gradient(ellipse_65%_75%_at_68%_35%,black,transparent)]" />
        <div className="absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[140px] animate-pulse-slow" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:pt-44">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary animate-fade-in-up">
              Full-Stack Software Engineer
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl animate-fade-in-up delay-100">
              Engineering <span className="text-primary text-glow-red">scalable architecture</span>{" "}
              for modern enterprises
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground animate-fade-in-up delay-200">
              Full-Stack Software Engineer specializing in performant React applications, robust
              Node.js backend systems, and cloud optimization.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up delay-300">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 active:scale-95"
              >
                Let&rsquo;s Talk{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5 active:scale-95"
              >
                View My Work
              </Link>
              <ResumeButton variant="subtle" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-in-up delay-400">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80">
                Connect
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="relative group animate-fade-in-up delay-200">
            <div className="absolute inset-8 rounded-full bg-primary/25 blur-[100px] transition-all duration-700 group-hover:scale-105 group-hover:bg-primary/35 animate-pulse-slow" />
            <HeroPortrait />
          </div>
        </div>
        {/* Tech strip */}
        <div className="relative border-t border-primary/10 bg-background/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
            {techStrip.map((tech) => (
              <span
                key={tech}
                className="cursor-default rounded-md px-3 py-1 text-sm font-medium tracking-wide text-muted-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
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
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-red">
            <div className="absolute inset-0 bg-grid-red opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="relative flex h-full min-h-56 flex-col justify-end p-6">
              <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">{cloudCard.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cloudCard.body}</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-red">
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
              <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">Business-Driven Decisions</h3>
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
            <div className="group relative overflow-hidden rounded-3xl border border-primary/15 transition-all duration-500 hover:border-primary/40 hover:glow-red">
              <img
                src={chipMacro}
                alt="Processor on a circuit board with glowing red traces"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <ol className="relative space-y-10 border-l border-primary/20 pl-8">
              {milestones.map((job) => (
                <li key={job.company} className="group relative transition-all">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background transition-all duration-200 group-hover:scale-125 group-hover:bg-primary" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary transition-colors group-hover:text-glow-red">
                    {job.company}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold transition-colors group-hover:text-foreground">
                    {job.role}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      · {job.period}
                    </span>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/90">
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

      {/* Technical Articles */}
      <section id="articles" className="border-t border-primary/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Writing &amp; Research
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Technical Articles &amp; Insights
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Engineering deep-dives on high-throughput backend services, spatial data pipelines,
                and resilient web architectures. Published on Dev.to.
              </p>
            </div>
            <a
              href="https://dev.to/hanayo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/20 hover:border-primary/45 hover:glow-red active:scale-95"
            >
              <BookOpen className="h-4 w-4" />
              Read on Dev.to
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((art) => (
              <a
                key={art.title}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-3xl border border-primary/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:glow-red"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono">{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                    {art.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {art.summary}
                  </p>
                </div>
                <div className="mt-6 border-t border-primary/10 pt-4">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {art.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Read article{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Hobbies */}
      <section id="hobbies" className="border-t border-primary/10 bg-background/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Beyond The Terminal
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Relevant Hobbies &amp; Pursuits
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Disciplines outside daily engineering that shape problem-solving resilience, tactical thinking,
              and respect for complex real-world dynamics.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="group rounded-3xl border border-primary/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:glow-red"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="mt-4 block text-[11px] font-mono uppercase tracking-widest text-primary">
                    {h.category}
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold transition-colors group-hover:text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              );
            })}
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
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 hover:glow-red"
          >
            Let&rsquo;s Talk{" "}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
    <div className="group rounded-3xl border border-primary/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-red">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-red">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold transition-colors group-hover:text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
