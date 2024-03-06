import { baseApi } from "../lib/BaseApi";
import { getProductsID } from "./ProductsID.services";

export const getProducts = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("user"));
    const response = await baseApi.get("api/products", {
      headers: {
        Authorization: `Bearer ${token?.token}`,
      },
    });
    if (response.data.products) {
      const products = await Promise.all(
        response?.data.products.map(async (item) => {
          const productIDData = await getProductsID(item?.id, token?.token);
          return productIDData;
        })
      );
      return products;
    }
  } catch (error) {
    console.error(error);
  }
};
