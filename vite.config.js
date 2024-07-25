import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [
    preact({
      prerender: {
        enabled: true,
        prerenderScript: "./src/main.jsx",
        renderTarget: "#app",
      },
    }),
  ],
});
