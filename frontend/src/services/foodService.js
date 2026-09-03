import axios from "axios";

const API = import.meta.env.DEV && typeof window !== "undefined" && window.location.hostname.includes("localhost")
  ? "http://localhost:5000/api"
  : import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getFoods = () => {
  return axios.get(`${API}/foods`);
};