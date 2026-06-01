import axios from "axios";


const API = import.meta.env.VITE_API_URL;

export const getFoods = () => {
  return axios.get(`${API}/foods`);
};