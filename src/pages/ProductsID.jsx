import React from "react";
import Datos from "../lib/datos";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
function ProductsID() {
    const {id} = useParams();
    const {pathname} = useLocation();
    const path = pathname.split("/")[2];
    const caterogy1 = Datos[path];
    const product = caterogy1[id-1];
    console.log(path)
    console.log(product);
  return (
    <div className="py-3 px-24">
      <article className="flex justify-between">
        <p>
          {" "}
          <span>Todos los Productos</span> - {path} <span></span> - <span>{product.descripcion}</span>
        </p>
      </article>
    </div>
  );
}

export default ProductsID;
