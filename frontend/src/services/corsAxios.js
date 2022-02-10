import { REACT_APP_BACKEND } from "../constants";
import axios from "axios";

const corsAxios = axios.create();

corsAxios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [REACT_APP_BACKEND];
    const token = localStorage.getItem("jwt");

    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    config.headers["Access-Control-Allow-Origin"] = "*";

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
  // url --> "/users/delete"
  const { data } = await corsAxios.get(`${REACT_APP_BACKEND}${url}`);
  return data;
};

export const corsAxiosPost = async (url, body) => {
  const { data } = await corsAxios.post(`${REACT_APP_BACKEND}${url}`, {
    ...body,
  });
  return data;
};

export const corsAxiosPut = async (url, body) => {
  const { data } = await corsAxios.put(`${REACT_APP_BACKEND}${url}`, {
    ...body,
  });
  return data; // ya es la info que necesitas.
};
