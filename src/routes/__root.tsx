import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Logo } from "../components/Logo";
import { SocialIcons } from "../components/SocialLinks";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/solutions", label: "Solutions" },
  { to: "/stack", label: "Stack" },
  { to: "/impact", label: "Impact" },
] as const;

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setProgress(Math.min(100, Math.max(0, (scrollY / height) * 100)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] pointer-events-none"
    >
      <div
        className="h-full bg-primary text-glow-red transition-[width] duration-75 ease-out shadow-[0_0_8px_var(--primary)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-primary/15 bg-background/70 py-2.5 pl-4 pr-2.5 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300 hover:border-primary/30">
        <Link to="/" className="group flex items-center gap-2.5 transition-transform active:scale-95">
          <Logo size={32} />
          <span className="text-sm font-semibold tracking-tight transition-colors group-hover:text-primary">
            Henry Anayo
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-all duration-150 hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground active:scale-95"
              activeProps={{ className: "bg-secondary text-foreground shadow-sm" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 active:scale-95"
        >
          Let&rsquo;s Talk
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-primary/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo size={22} withGlow={false} />
          <span>© {new Date().getFullYear()} Henry Anayo. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <SocialIcons iconClassName="h-8 w-8" />
          <a href="mailto:Tintillerke@gmail.com" className="transition-colors hover:text-primary">
            Tintillerke@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary text-glow-red">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-input px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
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
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col">
        <ScrollProgress />
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[480px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,oklch(0.585_0.21_27/0.12),transparent_70%)] animate-pulse-slow" />
        <SiteHeader />
        <main className="relative z-10 flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
