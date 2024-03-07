import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Datos from "../lib/datos";
import { useState, useEffect } from "react";
import "../pages/sctruct/CarrouselCards";
import ima4 from "../assets/a34.webp";
import { Link } from "react-router-dom";
import { CategoryService } from "../services/Cateogory.services";
import { getProductsxCategory } from "../services/ProductsCategory";
import { getProducts } from "../services/Products.services";
import { BrandService } from "../services/Brand.services";

function Productos() {
  const [productsAll, setProductsAll] = useState([]);
  const [marcasProductos, setMarcasProductos] = useState([]);
  const [cargarMas, setCargarMas] = useState(7);
  const [dataFilter, setDataFilter] = useState([]);
  const [categoria, setCategoria] = useState();
  const { pathname } = useLocation();
  const pathpp = pathname.split("/")[2];
  const path = decodeURIComponent(pathpp);
  const getBrands = async () => {
    try {
      const response = await BrandService();
      const brandsWithProducts = response.map((brand) => {
        const productsCount = productsAll.filter(
          (product) => product.brandId === brand.id
        ).length;
        return {
          ...brand,
          productsCount,
        };
      });
      setMarcasProductos(brandsWithProducts);
      console.log(brandsWithProducts);
    } catch (error) {
      console.error("Error al obtener marcas:", error);
    }
  };
  const getCategory = async () => {
    try {
      const response = await CategoryService();
      console.log(response);
      const foundCategoria = response.find((item) => item.name === path);
      console.log(foundCategoria);
      if (foundCategoria) {
        setCategoria(foundCategoria);
      }
    } catch (error) {
      console.error("Error al obtener categoría:", error);
    }
  };
  const getProductosAll = async () => {
    try {
      if (categoria?.id) {
        const response = await getProducts(categoria.id);
        setProductsAll(response);
        console.log(response);
      } else {
        console.log("La categoría no tiene un ID válido.");
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    getCategory();
  }, [path, pathpp]);
  useEffect(() => {
    getProductosAll();
  }, [categoria, path]);
  useEffect(() => {
    getBrands();
  }, [productsAll]);

  const filter = (e, item=null) => {
    const sortFunctions = {
      "1": (a, b) => a.price - b.price,
      "2": (a, b) => b.price - a.price,
      "3": (a, b) => a.name.trim().localeCompare(b.name.trim()),
      "4": (a, b) => b.name.trim().localeCompare(a.name.trim()),
    };
  
    const sortFunction = sortFunctions[e] || ((a, b) => 0);
  
    const filteredProducts = [...productsAll].sort(sortFunction);
    setDataFilter(filteredProducts);
  };
  
  const productsToDisplay = dataFilter.length > 0 ? dataFilter : productsAll;
  
  return (
    <div className="py-3 px-24">
      <article className="flex justify-between gap-3">
        <p>
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
            {productsToDisplay?.length} resultado/s{" "}
          </p>
          <span className="flex flex-col gap-2">
            {marcasProductos?.map((item, index) =>
              item.productsCount > 0 ? (
                <button
                  key={index}
                  onClick={() =>
                    setDataFilter(
                      productsToDisplay.filter(
                        (product) => product.brandId === item.id
                      )
                    )
                  }
                  className="rounded-md border bg-blue-500 py-1 text-sm text-white"
                >
                  {item.name} ({item.productsCount})
                </button>
              ) : null
            )}
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
                <p className=" text-center text-sm mt-2">
                  {marcasProductos[value.brandId - 1]?.name}
                </p>
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
