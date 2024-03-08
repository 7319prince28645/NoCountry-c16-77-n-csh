import React from "react";
import "./css/CarrouselCards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/Products.services";
import { CategoryService } from "../../services/Cateogory.services";
import { Link } from "react-router-dom";
function VerOfertas() {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await getProducts();
      const response2 = await CategoryService();
      setCategory(response2);
      console.log(response2);
      setProducts(response);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="fixed w-[35%] h-full bg-white p-4 rounded-lg overflow-y-auto">
            <span className="flex justify-between pb-4">
              <h1 className="font-semibold">OFERTAS</h1>
              <b onClick={handleShow} className="cursor-pointer">
                X
              </b>
            </span>
            <ul className="flex flex-col gap-4 w-full">
              {products.map((product) => (
                <Link
                  to={`/Product/${
                    category.find((item) => item.id === product.categoryId)
                      ?.name
                  }/${product.id}`}
                >
                  <li key={product.id} className="flex w-full shadow-sm hover:bg-slate-100">
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="h-20 w-20 object-contain"
                    />
                    <span className="w-full flex flex-col justify-between">
                      <p className="pt-2">{product.name}</p>
                      <span className="flex justify-between w-full">
                        <p className="line-through">Antes: ${product.price}</p>
                        <p className="text-red-600">
                          Ahora: ${product.price - (product.price * 4) / 100}
                        </p>
                      </span>
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-12 left-10 z-50">
          <button
            className="bg-[#FFA62B] text-white px-4 py-1 rounded-full hover:bg-[#82C0CC] text-sm font-bold  button"
            onClick={handleShow}
          >
            Ver Ofertas
          </button>
        </div>
      )}
    </>
  );
}

export default VerOfertas;
