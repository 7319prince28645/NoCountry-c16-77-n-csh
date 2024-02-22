import React from "react";
import { useState, useEffect } from "react";
import useApiProducts from "../services/ApiProducts";
import fetchUserPractice from "../services/UserPractice";
import CarrouselCards from "./sctruct/CarrouselCards";
import CategoryCards from "./sctruct/CategoryCards";
import Carrousel from "./sctruct/Carrousel";
import datos from "../lib/datos";
import fija1 from '../assets/fija1.png';
import fija2 from '../assets/fija2.png';

import VerOfertas from "./sctruct/VerOfertas";
import { Link } from "react-router-dom";

function Homee() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const getApiProducts = async () => {
    try {
      const response = await useApiProducts();
      const response2 = await fetchUserPractice();
      setUser(response2);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    <>
      <VerOfertas />
      <Carrousel />
      <CategoryCards />
      <CarrouselCards />
      
      <div className="grid grid-cols-2 gap-8 mx-8 ">
        <div className="hover:scale-110 hover:transition hover:duration-300">
          <Link >
            <img src={fija1} alt="" />
          </Link>
        </div>
        <div className="hover:scale-110 hover:transition hover:duration-300">
          <Link>
            <img src={fija2} alt="" />
          </Link>
        </div>
      </div >

      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-8">Tienda de Ropa</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length === 0 && <p>Cargando...</p>}
          {data?.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-500 font-bold">${product.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Homee;
