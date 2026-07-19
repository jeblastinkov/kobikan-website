import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  /** Base path holding `d/NNN.webp` (desktop) and `m/NNN.webp` (mobile) frames. */
  base: string;
  /** Poster image rendered in SSR HTML; the only thing shown as fallback. */
  poster: string;
  desktopFrames: number;
  mobileFrames: number;
  className?: string;
};

/**
 * Scroll-scrubbed frame sequence. SSR renders the poster <img>; the canvas
 * hydrates on top once frames decode. Reduced motion / Save-Data users keep
 * the poster only.
 */
export function FrameSequence({ base, poster, desktopFrames, mobileFrames, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const canvas = canvasRef.current;
      if (!el || !canvas) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const connection = (navigator as { connection?: { saveData?: boolean } }).connection;
      if (connection?.saveData) return;

      const mobile = window.matchMedia("(max-width: 1023px)").matches;
      const dir = mobile ? "m" : "d";
      const count = mobile ? mobileFrames : desktopFrames;
      const width = mobile ? 720 : 1280;
      canvas.width = width;
      canvas.height = Math.round((width * 9) / 16);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const images: HTMLImageElement[] = [];
      const state = { frame: 0 };
      const draw = () => {
        const img = images[Math.max(0, Math.min(count - 1, Math.round(state.frame)))];
        if (img?.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.style.opacity = "1";
        }
      };
      for (let i = 1; i <= count; i++) {
        const img = new Image();
        img.src = `${base}/${dir}/${String(i).padStart(3, "0")}.webp`;
        if (i === 1) img.onload = draw;
        images.push(img);
      }

      gsap.to(state, {
        frame: count - 1,
        ease: "none",
        onUpdate: draw,
        scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.4 },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`pointer-events-none ${className ?? ""}`} aria-hidden>
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500"
      />
    </div>
  );
}
