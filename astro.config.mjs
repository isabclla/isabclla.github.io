// @ts-check 
import { defineConfig } from "astro/config"; 
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://isabclla.github.io",
  // no base needed for isabclla.github.io
  vite: { plugins: [tailwindcss()] },
});
