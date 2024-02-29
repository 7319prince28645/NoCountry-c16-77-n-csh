import React from "react";
import { useState, useEffect } from "react";
import useApiProducts from "../services/ApiProducts";
import fetchUserPractice from "../services/UserPractice";
import CategoryCards from "./sctruct/CategoryCards";
import Carrousel from "./sctruct/Carrousel";
import datos from "../lib/datos";
import fija1 from '../assets/banner-black-friday.webp';
import fija2 from '../assets/banner-verano.webp';
import VerOfertas from "./sctruct/VerOfertas";
import { Link } from "react-router-dom";
import Slider from "./sctruct/Slider";
import Slider2 from "./sctruct/Slider2";
import bannerSM from '../assets/banner-tech-sm.webp'
import bannerXL from '../assets/banner-tech-xl.webp'

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
      <Carrousel />
      <CategoryCards />
      <Slider/>
      <VerOfertas/>
      <div className="grid md:grid-cols-2 gap-8 mx-8 md:my-20">
        <div className="hover:scale-105 hover:transition hover:duration-300">
          <Link >
            <img src={fija1} className="shadow-2xl" alt="" />
          </Link>
        </div>
        <div className="hover:scale-105 hover:transition hover:duration-300">
          <Link>
            <img src={fija2} className="shadow-2xl" alt="" />
          </Link>
        </div>
      </div >
    <Slider2/>
    <div className="items-center text-center my-10 mx-2 md:mx-8 md:my-20">
      <a href="#">
      <img src={bannerSM} className="lg:hidden sombra2 rounded-lg" alt="imagen banner auriculares" />
      <img src={bannerXL} className="hidden lg:flex sombra2 rounded-lg w-full" alt="imagen banner auriculares" />
      </a>
    </div>
      
    </>
  );
}

export default Homee;
