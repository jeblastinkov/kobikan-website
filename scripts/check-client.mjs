import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../.vercel/output/static");
const mod = await import("../.vercel/output/functions/__server.func/index.mjs");
const handler = mod.default;

const mime = {
  ".js": "application/javascript",
  ".css": "text/css",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://127.0.0.1:3456");
  const filePath = path.join(root, url.pathname);

  if (url.pathname.startsWith("/assets/") || url.pathname.startsWith("/video/") || url.pathname.startsWith("/favicon")) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      res.writeHead(200, { "content-type": mime[ext] ?? "application/octet-stream" });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  const response = await handler.fetch(new Request(`http://127.0.0.1:3456${url.pathname}`), {}, {});
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
});

await new Promise((r) => server.listen(3456, "127.0.0.1", r));

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));

await page.goto("http://127.0.0.1:3456/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

const body = await page.textContent("body");
console.log("ERROR_UI", body?.includes("This page didn't load"));
console.log("KOBKAN", body?.includes("KobiKan"));
console.log("PAGE_ERRORS", errors);

await browser.close();
server.close();
