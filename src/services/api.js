import axios from "axios";
import { getUserDataDetails, setAccessToken } from "../utils/localStorage";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor, Attach Token
API.interceptors.request.use(
  (config) => {
    const token = getUserDataDetails("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor, Handle Expired Token
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/acc/login/"
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = getUserDataDetails("refresh_token");
        if (!refreshToken) throw new Error("No refresh token");

        // request new access token
        const { data } = await API.post("/token", { refresh: refreshToken });
        setAccessToken(data.access);

        // Retry the original request with the new token
        API.defaults.headers.Authorization = `Bearer ${data.access}`;
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return API(originalRequest);
      } catch (refreshError) {
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  }
);

export default API;
