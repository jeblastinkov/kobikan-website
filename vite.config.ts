import { defineConfig, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  // Vite runs PostCSS in dev but Lightning CSS at build; using Lightning CSS in
  // both keeps the dev preview honest about build-time CSS transforms.
  css: { transformer: "lightningcss" as const },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR
      // error wrapper). nitro/vite builds from this.
      server: { entry: "server" },
    }),
    // The deploy plugin is build-only; nitro auto-detects the hosting preset in
    // CI (e.g. Vercel) and falls back to cloudflare-module otherwise.
    ...(command === "build"
      ? [nitro({ defaultPreset: "cloudflare-module" }) as PluginOption]
      : []),
    viteReact(),
  ],
}));
