import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist", // ✅ 빌드 결과물을 dist 폴더에 저장
  },
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
