import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    minify: false,
    lib: {
      entry: "src/main.js",
      fileName: () => `main.js`,
      formats: ["umd"],
      name: 'main'
    },
    watch: true,
  }
})
