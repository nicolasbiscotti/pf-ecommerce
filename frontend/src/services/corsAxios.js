import { API_URL } from "../constants";
import axios from "axios";

const corsAxios = axios.create();

corsAxios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [API_URL];
    const token = localStorage.getItem("jwt");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default corsAxios;

export const corsAxiosGet = async (url) => {
  const { data } = await corsAxios.get(`${API_URL}${url}`);
  return data;
};

export const corsAxiosPost = async (url, body) => {
  const { data } = await corsAxios.post(`${API_URL}${url}`, { ...body });
  return data;
};
