import axios from "axios";
const api = axios.create({
    baseURL: process.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }, // 환경 변수에서 기본 URL 참조
});
export default api;
