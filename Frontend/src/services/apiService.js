import { apiHelper } from "./apiHelper";

export const getProducts = async ({ page = 1, limit = 20 }) => {
  const response = apiHelper(`/product?page=${page}&limit=${limit}`, "GET");
  return response;
};

export const getProductById = async (id) => {
  const response = await apiHelper(`/product/${id}`, "GET");
  return response;
};

export const postOrder = async (data) => {
  const response = await apiHelper("/order", "POST", data);
  return response;
};
