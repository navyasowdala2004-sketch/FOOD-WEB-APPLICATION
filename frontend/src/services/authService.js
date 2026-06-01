import axios from "axios";

const API = import.meta.env.VITE_API_URL;

// Register User
export const registerUser = (userData) => {
  return axios.post(
    `${API}/auth/register`,
    userData
  );
};

// Login User
export const loginUser = (userData) => {
  return axios.post(
    `${API}/auth/login`,
    userData
  );
};