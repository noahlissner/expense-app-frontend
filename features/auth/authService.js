import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL =
  "https://expense-app-backend-production.up.railway.app/api/users/";

const register = async (userData) => {
  const res = await axios.post(API_URL + "register", userData);
  if (res.data) {
    const value = JSON.stringify(res.data);
    await AsyncStorage.setItem("user", value);
  }

  return res.data;
};

const login = async (userData) => {
  const res = await axios.post(API_URL + "login", userData);
  if (res.data) {
    const value = JSON.stringify(res.data);
    await AsyncStorage.setItem("user", value);
  }

  return res.data;
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (e) {
    console.error(e);
  }
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
