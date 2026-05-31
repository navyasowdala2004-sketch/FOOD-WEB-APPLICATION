import axios from "axios";

const API_URL =
  "https://online-food-app-zn4y.onrender.com/api/foods";

export const getFoods = () => {
  return axios.get(API_URL);
};