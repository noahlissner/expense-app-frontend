import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLoggedInUser = async (user) => {
  try {
    await AsyncStorage.setItem("loggedInUser", JSON.stringify(user));
  } catch (e) {
    console.error(e);
  }
};

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (e) {
    console.error(e);
  }
};

export const clearLoginData = async () => {
  await AsyncStorage.multiRemove("loggedInUser", "token");
};

export const getLoggedInUser = async () => {
  try {
    const user = await AsyncStorage.getItem("loggedInUser");
    return JSON.parse(user);
  } catch (e) {
    console.error(e);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (e) {
    console.error(e);
  }
};
