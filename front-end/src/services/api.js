// src/services/api.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// const API_URL = "https://careerforge-a3ui.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});


const handleError = (error, defaultMsg) => {
  if (error.response) {
    throw new Error(error.response.data.message || defaultMsg);
  } else if (error.request) {
    throw new Error("No response from server. Please try again.");
  } else {
    throw new Error(error.message || "Unexpected error");
  }
};

// ---------- AUTH ----------
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/register", userData);
    return response.data; 
  } catch (error) {
    handleError(error, "Registration failed");
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await api.post("/api/auth/login", loginData);
    return response.data;
  } catch (error) {
    handleError(error, "Login failed");
  }
};
