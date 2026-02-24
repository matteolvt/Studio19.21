import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600
  },
  server: {
    headers: (path) => {
      if (path.endsWith("llms.txt")) {
        return { "Content-Type": "text/plain; charset=utf-8" };
      }
      return {};
    }
  }
});