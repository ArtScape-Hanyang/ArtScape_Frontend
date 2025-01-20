import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    base: "/", // ✅ Firebase에서 올바르게 인식하도록 설정
    build: {
        outDir: "dist", // ✅ 빌드 결과물을 dist 폴더에 저장
        emptyOutDir: true, // ✅ 기존 dist 폴더 삭제 후 새로 빌드
        assetsDir: "assets", // ✅ 정적 파일(이미지, CSS, JS)을 assets 폴더에 저장
    },
    define: {
        "process.env": process.env, // ✅ 환경 변수 사용 가능하도록 설정
    },
});
