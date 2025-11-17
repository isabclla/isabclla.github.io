export default defineConfig({
  site: "https://isabclla.github.io",
  // no base needed for isabclla.github.io
  vite: { plugins: [tailwindcss()] },
});
