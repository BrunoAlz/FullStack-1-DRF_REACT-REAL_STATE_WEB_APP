import axios from "axios";

const REGISTER_URL = "/api/v1/auth/users/";
const LOGIN_URL = "/api/v1/auth/jwt/create/";
const ACTIVATE_URL = "/api/v1/auth/users/activation/";

const CONFIG = { headers: { "Content-Type": "application/json" } };

// USER REGISTER
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData, CONFIG);

  return response.data;
};

// USER LOGIN
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData, CONFIG);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// USER LOGOUT
const logout = () => {
  localStorage.removeItem("user");
};

// USER ACTIVATE
const activate = async (userData) => {
  const response = await axios.post(ACTIVATE_URL, userData, CONFIG);

  return response.data;
};

const authService = { register, login, logout, activate };
export default authService;
