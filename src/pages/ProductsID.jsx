import React from "react";
import Datos from "../lib/datos";
import { useParams, useLocation } from "react-router-dom";
import ima4 from "../assets/a34.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../pages/sctruct/css/swiper.css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import Carrito from "./modals/carrito";
import { getProductsID } from "../services/ProductsID.services";
import { getProductsxCategory } from "../services/ProductsCategory";
import { CategoryService } from "../services/Cateogory.services";

function ProductsID({
  modalIsOpenCarrito,
  closeModalCarrito,
  openModalCarrito,
}) {
  const [change, setChange] = useState();
  const [product, setProduct] = useState();
  const [ContadorCarrito, setContadorCarrito] = useState(1);
  const [mandarCarrito, setMandarCarrito] = useState([]);
  const [categoria, setCategoria] = useState();
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const path11 = pathname.split("/")[2];
  const path = decodeURIComponent(path11);
  console.log(path);
  const getProductsIDa = async () => {
    const response = await getProductsID(id);
    setProduct(response);
    console.log(response);
  };
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
  useEffect(() => {
    getProductsIDa();
  }, []);
  const productsFitler = change
    ? products?.products?.filter((item) => item.id != product.id)
    : products?.products?.filter((item) => item.id != id);
  const handleClicChange = (e) => {
    console.log(e);
    const cambiar = products?.products?.filter((item) => item.id === e);
    setProduct(cambiar[0]);
    setChange(cambiar);
  };
  const handleCarrito = () => {
    // Recuperar datos del carrito del almacenamiento local
    const existingCartData = JSON.parse(localStorage.getItem("carrito")) || {
      productos: [],
    };

    // Agregar el nuevo producto al carrito
    existingCartData.productos.push({
      ...product,
      ContadorCarrito,
      total: product.price * ContadorCarrito,
    });

    // Guardar los datos actualizados en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(existingCartData));

    // Abrir el modal del carrito
    openModalCarrito(true);
  };

  return (
    <>
      <div className="py-3 mt-5 xl:px-36 flex flex-col gap-4">
        <p className="pl-1">
          <span>Todos los Productos</span> - {path} <span></span> -{" "}
          <span>{}</span>
        </p>
        <main className="flex flex-col md:flex-row bg-white h-full md:h-[500px] rounded-sm shadow-lg">
          <div className="flex-1 items-center flex justify-center p-2">
            <img src={product?.imageUrl} alt="" className="h-96" />
          </div>
          <hr />
          <span className="w-full md:w-[40%] px-8 py-4">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="mb-8">Marca: {product?.brandId}</p>
            <article className="flex flex-col gap-4">
              <p className="text-red-800 text-3xl font-semibold">
                ${product?.price}
              </p>
              <p>Disponible en stock</p>
              <span className="flex">
                <button
                  className="px-4 border-[1px] text-center rounded-full hover:shadow-lg"
                  onClick={() => setContadorCarrito(ContadorCarrito - 1)}
                  disabled={ContadorCarrito === 1}
                >
                  -
                </button>
                <p className="py-2 px-4">{ContadorCarrito} Unidad</p>
                <button
                  className="px-4 border-[1px] text-center rounded-full hover:shadow-lg"
                  onClick={() => setContadorCarrito(ContadorCarrito + 1)}
                >
                  +
                </button>
              </span>
              <p>{product?.stock} unidad disponible</p>
              <button
                className="bg-[#489FB5] w-full py-2 text-lg font-semibold text-white hover:bg-[#82C0CC]"
                onClick={() => handleCarrito()}
              >
                Comprar
              </button>
            </article>
          </span>
        </main>
        <article className="p-2">
          <h2 className="pl-1 my-5 mt-8 text-2xl font-semibold">
            Tambien te pueden interesar
          </h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {productsFitler?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card px-16 h-72"
                  onClick={() => handleClicChange(item.id)}
                >
                  <div className="flex items-center justify-center max-h-36">
                    <img src={item.imageUrl} className="p-2" alt="..." />
                  </div>
                  <p className="text-red-900">${item.price}</p>
                  <div className="card-body">
                    <h5 className="card-title">{item.descripcion}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">Electrolux</small>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>
    </>
  );
}

export default ProductsID;
