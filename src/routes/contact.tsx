import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SocialIcons, ResumeButton } from "@/components/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Henry Anayo" },
      {
        name: "description",
        content: "Get in touch with Henry Anayo about full-stack engineering projects and consulting.",
      },
      { property: "og:title", content: "Contact — Henry Anayo" },
      {
        property: "og:description",
        content: "Get in touch with Henry Anayo about full-stack engineering projects and consulting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:Tintillerke@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-ring focus:-translate-y-0.5 focus:shadow-[0_0_20px_oklch(0.585_0.21_27/0.15)]";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <div className="relative overflow-hidden rounded-4xl border border-primary/15 bg-card shadow-2xl transition-all duration-300 hover:border-primary/30 animate-fade-in-up">
        <div className="absolute inset-0 bg-grid-red opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let&rsquo;s <span className="text-primary text-glow-red">talk</span>
            </h1>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Tell me about the system you're building, the problem you're solving, or the incident
              you never want to see again. I reply within one business day.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a
                href="mailto:Tintillerke@gmail.com"
                className="group flex items-center gap-3 text-muted-foreground transition-all duration-200 hover:text-primary hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-red">
                  <Mail className="h-4 w-4" />
                </span>
                Tintillerke@gmail.com
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                Nairobi, Kenya · Working worldwide
              </p>
            </div>
            <div className="mt-8 border-t border-primary/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Connect &amp; Socials
              </p>
              <div className="mt-3">
                <SocialIcons />
              </div>
              <div className="mt-4">
                <ResumeButton variant="subtle" />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={inputClasses}
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Message
              </span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you building, and what does success look like?"
                className={`${inputClasses} resize-none`}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 hover:glow-red cursor-pointer"
            >
              Send message
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Submitting opens your email client — nothing is stored.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
