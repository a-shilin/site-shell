import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "SiteShell",
      fileName: () => "site-shell.js",
      formats: ["iife"]
    }
  }
})