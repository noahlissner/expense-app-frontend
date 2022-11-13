import axios from "axios";

export const axiosLoggedInInstance = axios.create();
export const axiosDefaultInstance = axios.create();

axiosLoggedInInstance.defaults.baseURL =
  "https://orca-app-tzhfj.ondigitalocean.app/api/users/";

axiosDefaultInstance.defaults.baseURL =
  "https://orca-app-tzhfj.ondigitalocean.app/api/users/";

export const configureTokenHeader = (token) => {
  axiosLoggedInInstance.defaults.headers.common.token = token;
};

export const getBaseURL = () => axiosLoggedInInstance.defaults.baseURL;

export const getTokenHeader = () =>
  axiosLoggedInInstance.defaults.common.token.toString();
