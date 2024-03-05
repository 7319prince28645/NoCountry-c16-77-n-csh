import { baseApi } from "../../lib/BaseApi";

export const postNewProduct = async (
  { name, description, price, imageUrl, stock, categoryId, brandId },
  token
) => {
  try {
    const response = await baseApi.post(
      "api/products",
      {
        name,
        description,
        price,
        imageUrl,
        stock,
        categoryId,
        brandId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
