import axios from "axios";

import { authorizationInterceptor } from "./middlewares";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(authorizationInterceptor as any);

export default api;
