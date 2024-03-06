import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Datos from "../lib/datos";
import { useState, useEffect } from "react";
import "../pages/sctruct/CarrouselCards";
import ima4 from "../assets/a34.webp";
import { Link } from "react-router-dom";
import { CategoryService } from "../services/Cateogory.services";
import { getProductsxCategory } from "../services/ProductsCategory";

function Productos() {
  const [products, setProducts] = useState([]);
  const [cargarMas, setCargarMas] = useState(7);
  const [dataFilter, setDataFilter] = useState([]);
  const [categoria, setCategoria] = useState();
  const { pathname } = useLocation();
  const pathpp = pathname.split("/")[2];
  const path = decodeURIComponent(pathpp);

  const getCategory = async () => {
    try {
      const response = await CategoryService();
      const foundCategoria = response.find((item) => item.name === path);

      if (foundCategoria) {
        setCategoria(foundCategoria);
      }
    } catch (error) {
      console.error("Error al obtener categoría:", error);
    }
  };

  const getProducts = async () => {
    try {
      if (categoria?.id) {
        const response = await getProductsxCategory(categoria.id);
        setProducts(response);
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [path]);

  useEffect(() => {
    getProducts();
  }, [categoria]);
 
  const filter = (e) => {
    let filter;
  
    switch (e) {
      case "1":
        filter = [...products.products].sort((a, b) => a.price - b.price);
        break;
      case "2":
        filter = [...products.products].sort((a, b) => b.price - a.price);
        break;
      case "3":
        filter = [...products.products].sort((a, b) => a.name.trim().localeCompare(b.name.trim()));
        break;
      case "4":
        filter = [...products.products].sort((a, b) => b.name.trim().localeCompare(a.name.trim()));
        break;
      default:
        filter = [...products.products];
    }
  
    setDataFilter(filter);
  };
  const productsToDisplay = dataFilter.length > 0 ? dataFilter : products?.products;
  console.log(products);
  console.log(productsToDisplay);
  return (
    <div className="py-3 px-24">
      <article className="flex justify-between gap-3">
        <p>
          {productsToDisplay?.length} 
          <span>Todos los Productos</span> - <span>{path}</span>
        </p>
        <span className="relative border-2 p-2">
          <p className="absolute -top-2 text-xs bg-white px-2">Ordenar Por</p>
          <select
            name="option"
            id=""
            className="w-56"
            onChange={(e) => filter(e.target.value)}
          >
            <option value="">Orden por defecto</option>
            <option value="1">Menor Precio</option>
            <option value="2">Mayor Precio</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
          </select>
        </span>
      </article>

      <main className="grid border-t gap-5 pt-4 mt-2 md:grid-cols-[1fr_4fr]">
        <aside className="xl:w-60 xl:pr-8 text-center">
          <p className="text-lg py-1">{path}</p>
          <p className="text-sm mb-4">
            {}
            resultados/s
          </p>
          <span className="flex flex-col gap-2">
            <button
              className="rounded-md border bg-blue-500 py-1 text-sm text-white"
            >
              Marca
            </button>
            <button
              className="rounded-md border bg-blue-500 py-1 text-sm text-white"
            >
              En cuotas
            </button>
            {dataFilter.length > 0 && (
              <button
                onClick={() => setDataFilter([])}
                className="rounded-md border bg-blue-500 py-1 text-sm text-white"
              >
                {" "}
                Todos
              </button>
            )}
          </span>
        </aside>
        <article className="flex flex-col items-center mt-5 mb-10">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {productsToDisplay?.map((value, index) => (
              <Link
                key={index}
                className="card flex"
                to={`/Product/${path}/${value.id}`}
              >
                <div className="flex h-48">
                <img
                  src={value.imageUrl}
                  alt={value.name}
                  className="w-full object-contain mb-4 rounded-md"
                />
                </div>
                <p className=" text-center  text-3xl text-red-700">
                  ${value.price}
                </p>
                <h2 className=" text-center text-lg mt-8 font-semibold">
                  {value.name}
                </h2>

              </Link>
            ))}
          </div>

          {cargarMas !== 21 && (
            <button
              className="text-center rounded-3xl bg-black text-white p-2 px-4 mt-5"
              onClick={() => setCargarMas(cargarMas + 7)}
            >
              Cargar mas productos
            </button>
          )}
        </article>
      </main>
    </div>
  );
}

export default Productos;
