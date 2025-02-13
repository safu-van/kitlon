import axios from "axios";
import {
  clearStorage,
  getUserDataDetails,
  setAccessToken,
} from "../utils/localStorage";

const API = axios.create({
  baseURL: "https://kitlon-backend.onrender.com/api",
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
      originalRequest.url !== "/acc/login/" &&
      originalRequest.url !== "/token/"
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = getUserDataDetails("refresh_token");
        if (!refreshToken) throw new Error("No refresh token");

        // request new access token
        const { data } = await API.post("/token/", { refresh: refreshToken });
        setAccessToken(data.access);

        // Retry the original request with the new token
        API.defaults.headers.Authorization = `Bearer ${data.access}`;
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return API(originalRequest);
      } catch (refreshError) {
        clearStorage();
        window.location.href = "/sign-in";
      }
    }
    if (error.response?.status === 401 && originalRequest.url === "/token/") {
      clearStorage();
      window.location.href = "/sign-in";
    }

    return Promise.reject(error);
  }
);

export default API;
