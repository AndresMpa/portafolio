// @ts-check
import { defineConfig } from "astro/config";
import liciousI18n from "@astrolicious/i18n";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    liciousI18n({
      defaultLocale: "en",
      locales: ["en", "es"],
      client: {
        data: true,
        translations: true,
      },
    }),
  ],
  output: "server",
  adapter: netlify(),
});
