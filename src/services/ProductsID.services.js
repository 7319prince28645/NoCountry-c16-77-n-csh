import { baseApi } from "../lib/BaseApi";

export const getProductsID = async (id,token) => {
  try {
    const response = await baseApi.get(`api/products/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};