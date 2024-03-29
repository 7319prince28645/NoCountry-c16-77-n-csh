import { baseApi } from "../lib/BaseApi";

export const getProductsID = async (id) => {
  try {
    const response = await baseApi.get(`api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
