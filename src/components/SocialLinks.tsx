import { Github, Linkedin, Download, ExternalLink } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/hanayo-dot",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/henry-anayo-4b8923414/",
    icon: Linkedin,
  },
  {
    name: "X",
    url: "https://x.com/hanayoDev",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Dev.to",
    url: "https://dev.to/hanayo",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H5.34v4.35h1.24c.38 0 .66-.07.84-.23.18-.16.27-.42.27-.79v-2.31c0-.37-.09-.63-.27-.79zm-4.34-4.8c-.8 0-1.45.65-1.45 1.45v10.6c0 .8.65 1.45 1.45 1.45h17.84c.8 0 1.45-.65 1.45-1.45V6.7c0-.8-.65-1.45-1.45-1.45H3.08zm5.95 8.94c0 .87-.31 1.54-.92 2.01-.61.47-1.45.71-2.52.71H3.72V7.95h1.87c1.07 0 1.91.24 2.52.71.61.47.92 1.14.92 2.01v2.52zm3.32 2.72H10.1V7.95h2.25v6.09h1.7v1.67h-1.7zm6.75-5.83h-2.11v1.54h1.96v1.67h-1.96v2.62h-2.25V7.95h4.36v1.66z" />
      </svg>
    ),
  },
] as const;

export const RESUME_URL =
  "https://drive.google.com/file/d/14Z0_i7j2ese5s5JR4XOz5BiyIPBmTBn_/view?usp=drive_link";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({ className = "", iconClassName = "" }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const IconComponent = item.icon;
        const CustomIcon = item.customIcon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Henry Anayo on ${item.name}`}
            className={`group/icon flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-primary hover:glow-red active:scale-90 ${iconClassName}`}
          >
            {IconComponent ? (
              <IconComponent className="h-4 w-4 transition-transform duration-200 group-hover/icon:scale-110" />
            ) : CustomIcon ? (
              <span className="transition-transform duration-200 group-hover/icon:scale-110">
                <CustomIcon />
              </span>
            ) : null}
          </a>
        );
      })}
    </div>
  );
}

interface ResumeButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "subtle";
  label?: string;
}

export function ResumeButton({
  className = "",
  variant = "outline",
  label = "Download Resume",
}: ResumeButtonProps) {
  const baseClasses =
    "group/resume inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-95";
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 hover:glow-red",
    outline:
      "border border-input text-foreground hover:border-primary/40 hover:bg-secondary",
    subtle:
      "border border-primary/25 bg-primary/10 text-primary hover:bg-primary/20 hover:glow-red",
  };

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <Download className="h-4 w-4 transition-transform duration-200 group-hover/resume:translate-y-0.5" />
      {label}
      <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5" />
    </a>
  );
}
