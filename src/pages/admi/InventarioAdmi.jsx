import React from "react";
import { BrandService } from "../../services/Brand.services";
import { CategoryService } from "../../services/Cateogory.services";
import { getProducts } from "../../services/Products.services";
import { useState, useEffect } from "react";
import { getProductsID } from "../../services/ProductsID.services";
function InventarioAdmi() {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const [product, setProduct] = useState([{}]);
  const [productsID, setProductsID] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const getProduct = async () => {
    try {
      const data = await getProducts();
      setProduct(data);
      if (data.products) {
        const productsIDArray = await Promise.all(
          data.products.map(async (item) => {
            const productIDData = await getProductsID(item.id, token);
            return productIDData;
          })
        );

        setProductsID(productsIDArray);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getBrand = async () => {
    try {
      const data = await BrandService();
      setBrand(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategory = async () => {
    try {
      const data = await CategoryService();
      setCategory(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBrand();
    getCategory();
    getProduct();
  }, []);
  const categoryObtener = (category) => {
    const categoria = {
      1: "Climatización",
      2: "Celulares",
      3: "Smart TV",
    };
    return categoria[category];
  };
  const brandObtener = (brand) => {
    const marca = {
      1: "Apple",
      2: "Samsung",
      3: "Xiaomi",
    };
    return marca[brand];
  };

  console.log(productsID);
  console.log(product);
  console.log(category);
  console.log(brand);
  return (
    <div className="flex justify-between w-full gap-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">Product</h2>
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3  border-b">Id</th>
              <th className="p-3  border-b">Nombre</th>
              <th className="p-3  border-b">Descripcion</th>
              <th className="p-3  border-b">Imagen</th>
              <th className="p-3  border-b">Precio</th>
              <th className="p-3  border-b">Stock</th>
              <th className="p-3  border-b">Category</th>
              <th className="p-3  border-b">Marca</th>
              <th className="p-3  border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {product.products &&
              productsID.map((item) => (
                <tr
                  key={item?.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="p-3  border-b">{item?.id}</td>
                  <td className="p-3  border-b">{item?.name}</td>
                  <td className="p-3  border-b">{item?.description}</td>
                  <td className="p-3  border-b">
                    <img
                      src={item?.imageUrl}
                      alt={item?.name}
                      className="w-16"
                    />
                  </td>
                  <td className="p-3  border-b">{item?.price}</td>
                  <td className="p-3  border-b">{item?.stock}</td>
                  <td className="p-3  border-b">
                    {categoryObtener(item?.categoryId)}
                  </td>
                  <td className="p-3  border-b">{brandObtener(item?.brandId)}</td>
                  <td className="p-3  border-b space-x-2">
                    <button className="text-blue-500 hover:underline">
                      Editar
                    </button>
                    <button className="text-red-500 hover:underline">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="text-center w-80">
        <div className="">
          <div className="mb-4 border border-gray-300 ">
            <h2 className="text-2xl font-bold mb-2 border-b">Category</h2>
            {category.map((item) => (
              <div
                key={item?.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <span className="px-2">{item?.name}</span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 border border-gray-300 ">
            <h2 className="text-2xl font-bold mb-2 border-b">Brand</h2>
            {brand.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <span className="px-2">{item.name}</span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventarioAdmi;
