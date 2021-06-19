import axios from "axios";
import { getToken } from "../services/storage";

const axiosWrapper = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const token = getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default axiosWrapper;
