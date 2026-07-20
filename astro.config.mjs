// @ts-check
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import liciousI18n from "@astrolicious/i18n";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://andresmpa.netlify.app",
  integrations: [
    tailwind(),
    sitemap(),
    liciousI18n({
      defaultLocale: "en",
      locales: ["en", "es"],
      client: {
        data: true,
        translations: true,
      },
      strategy: "prefix",
    }),
  ],
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
