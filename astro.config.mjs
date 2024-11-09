// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import liciousI18n from "@astrolicious/i18n";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    liciousI18n({
      defaultLocale: "en",
      locales: ["en", "es"],
      client: {
        data: true,
      },
    }),
  ],
  site: "https://andresmpa.github.io/",
  base: "/portafolio/",
});
