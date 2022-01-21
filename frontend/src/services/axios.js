import axios from "axios";
export const axiosGet = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
