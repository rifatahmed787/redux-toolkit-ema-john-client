import axios from "../../AxiosInstance/axios.config";

export const fetchProduct = async () => {
  const data = await axios.get("/product");
  return data.data;
};
