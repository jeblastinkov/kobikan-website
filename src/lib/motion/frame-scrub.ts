import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsap-config";
import { prefersReducedMotion } from "./reduced-motion";

export type FrameScrubConfig = {
  /** folder under /video/frames/ */
  dir: "hero" | "macro" | "knowledge";
  /** frame file extension (hero uses jpg — local ffmpeg lacks webp encoder) */
  ext?: "webp" | "jpg";
  frameCount?: number;
  sectionRef: RefObject<HTMLElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  /** scroll distance of the pin on desktop, e.g. "+=250%" */
  end?: string;
  /** scroll distance of the pin on mobile (<768px) */
  endMobile?: string;
  /** start loading all frames immediately (hero) instead of on approach */
  eager?: boolean;
  /** add extra tweens synced to the same scrubbed timeline (0..1 progress) */
  build?: (tl: gsap.core.Timeline) => void;
  /** called on every scrub tick with the current frame + progress */
  onUpdate?: (frame: number, progress: number) => void;
};

const pad = (n: number) => String(n).padStart(3, "0");

/**
 * Scroll-scrubbed canvas frame sequence.
 * - pins the section and maps scroll progress to frames
 * - progressive frame loading (coarse passes first) so scrubbing
 *   never blocks: draws the nearest loaded frame
 * - prefers-reduced-motion: draws frame 0 once, no pin, no scrub
 */
export function useFrameScrub({
  dir,
  ext = "webp",
  frameCount = 120,
  sectionRef,
  canvasRef,
  end = "+=250%",
  endMobile = "+=150%",
  eager = false,
  build,
  onUpdate,
}: FrameScrubConfig) {
  useGSAP(
    () => {
      const section = sectionRef.current;
      const canvas = canvasRef.current;
      if (!section || !canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const reduced = prefersReducedMotion();
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const images: (HTMLImageElement | undefined)[] = new Array(frameCount);
      const state = { frame: 0 };
      let loadingStarted = false;
      let destroyed = false;

      const src = (i: number) => `/video/frames/${dir}/${pad(i + 1)}.${ext}`;

      const nearestLoaded = (target: number): HTMLImageElement | undefined => {
        const at = (i: number) => {
          const img = images[i];
          return img && img.complete && img.naturalWidth > 0 ? img : undefined;
        };
        const direct = at(target);
        if (direct) return direct;
        for (let d = 1; d < frameCount; d++) {
          const below = target - d >= 0 ? at(target - d) : undefined;
          if (below) return below;
          const above = target + d < frameCount ? at(target + d) : undefined;
          if (above) return above;
        }
        return undefined;
      };

      const draw = () => {
        if (destroyed) return;
        const img = nearestLoaded(Math.round(state.frame));
        if (!img) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w === 0 || h === 0) return;
        if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
        }
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const s = Math.max(w / iw, h / ih);
        const dw = iw * s;
        const dh = ih * s;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
      };

      const load = (i: number) => {
        if (images[i]) return;
        const img = new Image();
        img.decoding = "async";
        img.src = src(i);
        img.onload = () => draw();
        images[i] = img;
      };

      const startLoading = () => {
        if (loadingStarted) return;
        loadingStarted = true;
        // coarse-to-fine passes: usable scrub almost immediately
        for (const step of [16, 8, 4, 2, 1]) {
          for (let i = 0; i < frameCount; i += step) load(i);
        }
      };

      load(0);

      if (reduced) {
        // static poster frame, no pin, no scrub
        const once = () => draw();
        window.addEventListener("resize", once);
        draw();
        return () => window.removeEventListener("resize", once);
      }

      if (eager) {
        startLoading();
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: "top 250%",
          once: true,
          onEnter: startLoading,
        });
        // already past the preload line on mount (deep links)
        if (section.getBoundingClientRect().top < window.innerHeight * 2.5) startLoading();
      }

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: isMobile ? endMobile : end,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        state,
        {
          frame: frameCount - 1,
          duration: 1,
          onUpdate: () => {
            draw();
            onUpdate?.(state.frame, state.frame / (frameCount - 1));
          },
        },
        0,
      );

      build?.(tl);

      const onResize = () => draw();
      window.addEventListener("resize", onResize);
      return () => {
        destroyed = true;
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: sectionRef },
  );
}
