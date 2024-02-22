import React from "react";
import Datos from "../lib/datos";
import { useParams, useLocation } from "react-router-dom";
import ima4 from "../assets/a34.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "../pages/sctruct/css/swiper.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import Carrito from "./modals/carrito";

function ProductsID({ modalIsOpenCarrito, closeModalCarrito, openModalCarrito }) {
  const [change, setChange] = useState();
  const [ContadorCarrito, setContadorCarrito] = useState(1);
  const [mandarCarrito, setMandarCarrito] = useState([]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/")[2];
  const caterogy1 = Datos[path];
  const product = change ? change[0] : caterogy1[id - 1];
  const productsFitler = change
    ? caterogy1.filter((item) => item.id != product.id)
    : caterogy1.filter((item) => item.id != id);
  const handleClicChange = (e) => {
    const cambiar = caterogy1.filter((item) => item.id === e);
    setChange(cambiar);
  };
  const handleCarrito = () => {
    setMandarCarrito(
      mandarCarrito.concat({
        id: product.id,
        descripcion: product.descripcion,
        img: ima4,
        precio: product.precios[1],
        cantidad: ContadorCarrito,
      })
    );
    openModalCarrito(true);
  };
  console.log(product);
  console.log(productsFitler);
  console.log(path);
  console.log(product);
  return (
    <>
      <Carrito
        isOpen={modalIsOpenCarrito}
        onClose={closeModalCarrito}
        product={mandarCarrito}
        ContadorCarrito={ContadorCarrito}
      />
      <div className="py-3 px-36 flex flex-col gap-4">
        <p>
          <span>Todos los Productos</span> - {path} <span></span> -{" "}
          <span>{product.descripcion}</span>
        </p>
        <main className="flex bg-white h-[500px] rounded-sm">
          <span className="flex flex-1 items-center">
            <div className="h-[450px] w-[20%] grid place-items-center">
              <img src={ima4} alt="" className="h-20 border rounded-md p-2" />
              <img src={ima4} alt="" className="h-20 border rounded-md p-2" />
              <img src={ima4} alt="" className="h-20 border rounded-md p-2" />
              <img src={ima4} alt="" className="h-20 border rounded-md p-2" />
            </div>
            <div className="flex-1 items-center flex justify-center">
              <img src={ima4} alt="" className="h-96" />
            </div>
          </span>
          <hr />
          <span className="w-[40%] px-8 py-4">
            <h1 className="text-3xl font-bold">{product.descripcion}</h1>
            <p className="mb-8">Marca: pimpim</p>
            <article className="flex flex-col gap-4">
              <p className="text-red-800 text-3xl font-semibold">
                ${product.precios[1]}
              </p>
              <span
                className={
                  product.cuotas === "no"
                    ? "px-2 py-1 w-36 bg-[#34659F] text-white rounded-sm"
                    : "px-2 py-1 w-52 bg-[#34659F] text-white rounded-sm"
                }
              >
                {product.cuotas === "no"
                  ? "Solo pago directo"
                  : `${product.cuotas} Cuotas SIN interes`}
              </span>
              <p>Disponible en stock</p>
              <span className="flex">
                <button
                  className="px-4 border-2"
                  onClick={() => setContadorCarrito(ContadorCarrito - 1)}
                  disabled={ContadorCarrito === 1}
                >
                  -
                </button>
                <p className="border-y-2 py-2 px-4">{ContadorCarrito} Unidad</p>
                <button
                  className="px-4 border-2"
                  onClick={() => setContadorCarrito(ContadorCarrito + 1)}
                >
                  +
                </button>
              </span>
              <p>1 unidad disponible</p>
              <button
                className="bg-[#E5F1FA] w-full py-2 text-lg font-semibold"
                onClick={() => handleCarrito()}
              >
                Comprar
              </button>
            </article>
          </span>
        </main>
        <h2 className="mt-8 text-2xl font-semibold">
          Tambien te pueden interesar
        </h2>
        <article className="p-8">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={20}
            slidesPerView={4}
          >
            {productsFitler.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card h-80 px-16"
                  onClick={() => handleClicChange(item.id)}
                >
                  <img
                    src={ima4}
                    className=" max-h-36 object-cover p-2"
                    alt="..."
                  />
                  <p className="text-red-900 mt-2">${item.precios[0]}</p>
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
