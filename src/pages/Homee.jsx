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

    </>
  );
}

export default Homee;
