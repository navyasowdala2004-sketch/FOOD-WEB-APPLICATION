import axios from "axios";

const LOCAL_API = "http://localhost:5000/api";
const API = import.meta.env.DEV && (typeof window !== "undefined") && window.location.hostname.includes("localhost")
  ? LOCAL_API
  : import.meta.env.VITE_API_URL || LOCAL_API;

// Register User
export const registerUser = (userData) => {
  return axios.post(
    `${API}/auth/register`,
    userData
  );
};

// Register Admin
export const registerAdmin = (userData) => {
  return axios.post(
    `${API}/auth/register-admin`,
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

