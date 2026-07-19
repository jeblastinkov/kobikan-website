// Converts the delivered masters in temp/ into web assets:
//   - hero scroll sequence:  public/sequences/hero/{d,m}/NNN.webp
//   - posters (frame 1):     public/posters/poster-<clip>.{webp,jpg}
//   - stills:                public/og-image.jpg, public/trust-backplate.jpg
// Run: node scripts/make-sequence.mjs
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import ffmpeg from "ffmpeg-static";

const root = path.resolve(import.meta.dirname, "..");
const temp = path.join(root, "temp");
const pub = path.join(root, "public");

const run = (args) => execFileSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-y", ...args]);

// The generator bakes a sparkle watermark into the bottom-right of every video
// (~center 1160,605 in the 1280x720 masters). delogo interpolates it away from
// the surrounding pixels before any scaling.
const DELOGO = "delogo=x=1105:y=550:w=115:h=110";

// Hero scroll sequence (handover): desktop 10 fps @1280w, mobile 5 fps @720w.
for (const [dir, fps, width, q] of [
  ["d", 10, 1280, 70],
  ["m", 5, 720, 65],
]) {
  const out = path.join(pub, "sequences", "hero", dir);
  mkdirSync(out, { recursive: true });
  run([
    "-i",
    path.join(temp, "handover.mp4"),
    "-vf",
    `${DELOGO},fps=${fps},scale=${width}:-2`,
    "-c:v",
    "libwebp",
    "-quality",
    String(q),
    path.join(out, "%03d.webp"),
  ]);
}

// Posters: first frame of each clip, webp + jpg fallback.
mkdirSync(path.join(pub, "posters"), { recursive: true });
for (const clip of ["handover", "answer", "shift"]) {
  const src = path.join(temp, `${clip}.mp4`);
  run([
    "-i",
    src,
    "-vframes",
    "1",
    "-vf",
    DELOGO,
    "-c:v",
    "libwebp",
    "-quality",
    "80",
    path.join(pub, "posters", `poster-${clip}.webp`),
  ]);
  run([
    "-i",
    src,
    "-vframes",
    "1",
    "-vf",
    DELOGO,
    "-q:v",
    "3",
    path.join(pub, "posters", `poster-${clip}.jpg`),
  ]);
}

// Background loop clips (answer, shift): re-encoded small h264, no audio.
mkdirSync(path.join(pub, "clips"), { recursive: true });
for (const clip of ["answer", "shift"]) {
  run([
    "-i",
    path.join(temp, `${clip}.mp4`),
    "-an",
    "-vf",
    `${DELOGO},scale=1280:-2`,
    "-c:v",
    "libx264",
    "-crf",
    "30",
    "-preset",
    "slow",
    "-movflags",
    "+faststart",
    path.join(pub, "clips", `${clip}.mp4`),
  ]);
}

// Stills.
run(["-i", path.join(temp, "hands-tablet.jpeg"), "-q:v", "3", path.join(pub, "og-image.jpg")]);
run([
  "-i",
  path.join(temp, "trust-backplate.jpeg"),
  "-q:v",
  "4",
  path.join(pub, "trust-backplate.jpg"),
]);

// Report sizes.
const dirSize = (d) => readdirSync(d).reduce((s, f) => s + statSync(path.join(d, f)).size, 0);
for (const d of ["sequences/hero/d", "sequences/hero/m", "posters"]) {
  const full = path.join(pub, d);
  console.log(d, readdirSync(full).length, "files,", (dirSize(full) / 1e6).toFixed(2), "MB");
}
