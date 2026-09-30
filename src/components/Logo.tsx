import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export function Logo({ size = 34, className = "", withGlow = true, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Henry Anayo HA Logo"
      role="img"
      className={`shrink-0 transition-all duration-300 group-hover:scale-105 ${
        withGlow ? "drop-shadow-[0_0_12px_oklch(0.585_0.21_27/0.45)]" : ""
      } ${className}`}
      {...props}
    >
      <defs>
        <linearGradient id="logo-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--card)" />
          <stop offset="1" stopColor="var(--background)" />
        </linearGradient>
        <linearGradient id="logo-primary-grad" x1="0" y1="10" x2="0" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {/* Rounded squircle badge */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="13"
        fill="url(#logo-badge)"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* Subtle architectural grid lines */}
      <line x1="2" y1="24" x2="46" y2="24" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="1" />
      <line x1="24" y1="2" x2="24" y2="46" stroke="var(--primary)" strokeOpacity="0.08" strokeWidth="1" />

      {/* H Left Pillar */}
      <path d="M11 11 H16 V37 H11 Z" fill="url(#logo-primary-grad)" />

      {/* H Right Pillar */}
      <path d="M32 11 H37 V37 H32 Z" fill="url(#logo-primary-grad)" />

      {/* Connecting Architectural Crossbar */}
      <path d="M16 23 H32 V27 H16 Z" fill="url(#logo-primary-grad)" />

      {/* A Apex Chevron (Luminous white/silver glyph) */}
      <path
        d="M24 10 L31 23 H26.2 L24 18.2 L21.8 23 H17 L24 10 Z"
        fill="var(--foreground)"
      />

      {/* Glowing Crimson Focal Node at Apex */}
      <circle
        cx="24"
        cy="10"
        r="2.2"
        fill="var(--primary)"
      />
    </svg>
  );
}
export default Logo;
