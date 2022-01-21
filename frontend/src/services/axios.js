import axios from "axios";
export const axiosGet = async (url) => {
  const result = axios.get(url);
  return result.data;
};
