import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "https://orca-app-tzhfj.ondigitalocean.app/api/users/";

const login = async (userData) => {
  console.log("running");
  const res = await axios.post(baseUrl + "login", userData);
  if (res.data) {
    const value = JSON.stringify(res.data);
    await AsyncStorage.setItem("user", value);
  }

  return res.data;
};

const authService = {
  login,
};

export default authService;
