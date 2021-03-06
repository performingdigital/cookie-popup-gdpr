import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "cookie-popup-gdpr",
      fileName: (format) => `cookie-popup-gdpr.${format}.js`,
    },
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
    },
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        require("postcss-nested")
      ],
    },
  },
});
