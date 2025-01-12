import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://3.38.5.44:3000",
        changeOrigin: true,
      },
    },
  },
  define: {
    "process.env": {},
  },
});
