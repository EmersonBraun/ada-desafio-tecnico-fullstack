import { AxiosRequestConfig } from "axios";

export function authorizationInterceptor(
  config: AxiosRequestConfig | any
): AxiosRequestConfig {
  const token = localStorage.getItem("@ADA:token");
  config.headers = config.headers || {};
  config.headers.Authorization = token ? `Bearer ${String(token)}` : null;
  return config;
}
