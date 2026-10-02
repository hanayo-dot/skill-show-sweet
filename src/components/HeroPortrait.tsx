import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import henryCutout from "@/assets/henry-cutout.png";
import henryText from "@/assets/henry-text.png";
import anayoText from "@/assets/anayo-text.png";

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const henryRef = useRef<HTMLImageElement>(null);
  const anayoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (!containerRef.current || !henryRef.current || !anayoRef.current) {
        ticking = false;
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Center of the image container relative to viewport
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Distance from the card's optimal center position
      const scrollY = window.scrollY || 0;

      let dist = Math.abs(cardCenter - viewportCenter) / (windowHeight * 0.7);
      if (scrollY <= 15) {
        dist = 0;
      } else {
        dist = Math.min(1, Math.max(0, dist));
      }

      // Max travel: at dist = 0 (viewing page/portrait), translate is 0% (central position).
      // When scrolling away from the portrait, HENRY moves left (-20%) and ANAYO moves right (+20%).
      const maxPercent = 20;
      const henryX = -dist * maxPercent;
      const anayoX = dist * maxPercent;

      henryRef.current.style.transform = `translate3d(${henryX}%, 0, 0)`;
      anayoRef.current.style.transform = `translate3d(${anayoX}%, 0, 0)`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    // Initial position calculation
    updatePosition();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-primary/20 glow-red transition-all duration-500 select-none group-hover:scale-[1.01] group-hover:border-primary/40"
    >
      <span className="sr-only">Henry Anayo, Full-Stack Software Engineer</span>

      {/* Layer 1: Crimson laser grid backdrop */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Layer 2: "HENRY" optical glass typography — positioned behind Henry's head/neck */}
      <img
        ref={henryRef}
        src={henryText}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1280}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />

      {/* Layer 3: Henry's transparent cutout — sits in front of "HENRY" */}
      <img
        src={henryCutout}
        alt="Henry Anayo, Full-Stack Software Engineer"
        width={1024}
        height={1280}
        className="relative z-10 h-full w-full object-cover pointer-events-none"
      />

      {/* Layer 4: "ANAYO" optical glass typography — positioned in front of Henry's jacket */}
      <img
        ref={anayoRef}
        src={anayoText}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1280}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full object-cover transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      />
    </div>
  );
}
