
import axios from "axios";

const API = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : import.meta.env.VITE_API_URL ||
    "https://food-web-application-2.onrender.com/api";

export const getFoods = () => {
  return axios.get(`${API}/foods`);
};
