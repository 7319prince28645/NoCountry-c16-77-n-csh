import { baseApi } from "../lib/BaseApi";
import { getProductsID } from "./ProductsID.services";
export const getProductsxBrandww = async (brand) => {
  try {
    const response = await baseApi.get("api/products", {
      params: {
        brandId: brand,
        pageSize: 100,
      },
    });
    if (response.data.products) {
      const products = await Promise.all(
        response?.data.products.map(async (item) => {
          const productIDData = await getProductsID(item?.id);
          return productIDData;
        })
      );
      return products;
    }
  } catch (error) {
    console.error(error);
  }
};
