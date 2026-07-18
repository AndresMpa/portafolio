/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#09090d",
        accent: "#0bc7c3",
        text: "#ffffff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
