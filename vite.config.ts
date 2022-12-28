import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: `${__dirname}/src`,
      styles: `${__dirname}/src/styles`
    }
  },
  plugins: [react(), svgr()]
})
