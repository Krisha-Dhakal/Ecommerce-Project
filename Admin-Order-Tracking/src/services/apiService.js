import { apiHelper } from "./apiHelper";

// products
export const getAllProducts = async (page, limit) => {
  const response = await apiHelper(
    `/product?page=${page}&limit=${limit}`,
    "GET"
  );
  return response;
};

export const getProductById = async (productId) => {
  const response = apiHelper(`/product/${productId}`, "GET");
  return response;
};

export const createProduct = async (newProduct) => {
  const response = await apiHelper("/product", "POST", newProduct);
  return response;
};

export const deleteProduct = async (id) => {
  const response = await apiHelper(`/product/${id}`, "DELETE");
  console.log(response);
};

// orders

export const getAllOrder = async (status) => {
  const response = apiHelper(`/order?status=${status}`, "GET");
  return response;
};

export const deleteOrder = async (id) => {
  const response = await apiHelper(`/order/${id}`, "DELETE");
  return response;
};

export const login = async ({ username, password }) => {
  const response = await apiHelper("/login", "POST", { username, password });
  return response;
};
