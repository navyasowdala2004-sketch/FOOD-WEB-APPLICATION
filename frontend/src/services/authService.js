import axios from "axios";

const LOCAL_API = "http://localhost:5000/api";
const PRODUCTION_API = "https://food-web-application-2.onrender.com/api";

const API =
  typeof window !== "undefined" &&
  window.location.hostname.includes("localhost")
    ? LOCAL_API
    : PRODUCTION_API;

// Register User
export const registerUser = (userData) => {
  return axios.post(`${API}/auth/register`, userData);
};

// Register Admin
export const registerAdmin = (userData) => {
  return axios.post(`${API}/auth/register-admin`, userData);
};

// Login User
export const loginUser = (userData) => {
  return axios.post(`${API}/auth/login`, userData);
};

// Login Admin
export const loginAdmin = (userData) => {
  return axios.post(`${API}/auth/login-admin`, userData);
};