import React, { useState, useEffect } from "react";
import { postNewBrand } from "../../services/newItems/brand.services";
import { postNewCategory } from "../../services/newItems/category.services";
import Swal from "sweetalert2";
import { postNewProduct } from "../../services/newItems/products.services";
const PerfilAdmi = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const [valueBrand, setValueBrand] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [url, setUrl] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(0);
  const [brand, setBrand] = useState(0);

  const createProduct = async () => {
    try {
      if (
        nameProduct === "" ||
        description === "" ||
        price === "" ||
        url === "" ||
        stock === "" ||
        category === "" ||
        brand === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Los campos no pueden estar vacíos",
        });
        return;
      } else {
        const response = await postNewProduct(
          {
            name: nameProduct,
            description: description,
            price: price,
            imageUrl: url,
            stock: stock,
            categoryId: category,
            brandId: brand,
          },
          token
        );
        Swal.fire({
          icon: "success",
          title: "Producto Creado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createAndShowMessage = async (value, postFunction, successMessage) => {
    try {
      if (value === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El campo no puede estar vacío",
        });
        return;
      } else if (value.length < 3) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El campo debe tener al menos 3 caracteres",
        });
        return;
      }
      const data = await postFunction(value, token);
      Swal.fire({
        icon: "success",
        title: successMessage,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const createdBrand = async () => {
    await createAndShowMessage(valueBrand, postNewBrand, "Marca Creada");
  };

  const createCategory = async () => {
    await createAndShowMessage(
      valueCategory,
      postNewCategory,
      "Categoría Creada"
    );
  };
  console.log(url);
  console.log(nameProduct, description, price, stock, category, brand);
  return (
    <div className="p-8 flex flex-col rounded-md shadow-md w-full border gap-4">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-semibold">Registrar Producto</h2>
        <span className="flex w-full justify-between gap-4">
          <span className="flex flex-col">
            <label
              htmlhtmlFor="name"
              className=" text-sm font-medium text-gray-600 "
            >
              Nombre del Producto
            </label>
            <input
              type="text"
              id="name"
              className="p-2 border rounded-md"
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
            />
          </span>
          <span className="flex flex-col w-full">
            <label
              htmlFor="description"
              className=" text-sm font-medium text-gray-600"
            >
              Descripción
            </label>
            <input
              type="text"
              id="description"
              className="p-2 border rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </span>
          <span className="flex flex-col w-full">
            <label htmlFor="url" className=" text-sm font-medium text-gray-600">
              URL de la imagen
            </label>
            <input
              type="text"
              id="url"
              className="p-2 border rounded-md"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </span>
        </span>
        <div className="flex gap-4">
          <label
            htmlFor="precio"
            className=" text-sm font-medium text-gray-600"
          >
            Precio
            <input
              type="number"
              id="precio"
              className=" p-2 border rounded-md w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label htmlFor="stock" className="text-sm font-medium text-gray-600">
            Stock
            <input
              type="number"
              id="stock"
              className="p-2 border rounded-md w-full"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </label>

          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-600"
          >
            Categoría
            <input
              type="number"
              id="category"
              className="p-2 border rounded-md w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>

          <label htmlFor="brand" className="text-sm font-medium text-gray-600">
            Marca
            <input
              type="number"
              id="brand"
              name="brand"
              className=" p-2 border rounded-md w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>

          <button
            className="mt-[16px] bg-[#16697A] text-white font-semibold px-8 rounded-md hover:bg-[#16697acb] "
            onClick={createProduct}
          >
            Registrar
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Registrar Marca o Categoría</h2>
        <div className="flex justify-between">
          <span className="flex gap-8">
            <label
              htmlFor="newBrand"
              className=" mt-8 text-sm font-medium text-gray-600"
            >
              Nueva Marca
              <input
                type="text"
                id="newBrand"
                className="mt-1 p-2 border rounded-md w-full"
                value={valueBrand}
                onChange={(e) => setValueBrand(e.target.value)}
              />
            </label>

            <button
              className="mt-14 bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
              onClick={createdBrand}
            >
              Crear Marca
            </button>
          </span>
          <span className="flex gap-8">
            <label
              htmlFor="newCategory"
              className=" mt-8 text-sm font-medium text-gray-600"
            >
              Nueva Categoría
              <input
                type="text"
                id="newCategory"
                className="mt-1 p-2 border rounded-md w-full"
                value={valueCategory}
                onChange={(e) => setValueCategory(e.target.value)}
              />
            </label>

            <button
              className="mt-14 bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600"
              onClick={createCategory}
            >
              Crear Categoría
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerfilAdmi;
