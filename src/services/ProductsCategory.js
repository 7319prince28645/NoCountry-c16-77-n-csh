import { baseApi } from "../lib/BaseApi";

export const getProductsxCategory = async (category) => {
  try {
    const response = await baseApi.get(`/api/products`, {
        params: {
        categoryId: category
        }
    });
    
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
