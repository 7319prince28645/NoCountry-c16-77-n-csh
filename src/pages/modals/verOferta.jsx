import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/Products.services";
function verOferta() {
  const [productsAll, setProductsAll] = useState([]);

  const getProductosAll = async () => {
    try {
      const response = await getProducts();
      setProductsAll(response);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };
    useEffect(() => {
        getProductosAll();
    }, []);
  return <div></div>;
}

export default verOferta;
