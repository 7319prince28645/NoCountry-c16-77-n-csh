import React from "react";
import ima4 from '../assets/a34.webp'

function Cart({ onClose, product }) {
  console.log(product);
  return (
    <>
      <div className="flex flex-col px-8 h-screen w-full">
      <span
        className="text-gray-500 text-end cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300 text-xl"
        onClick={onClose}
      >
        ×
      </span>
      <h2 className="text-2xl mb-4 tex font-semibold p-2 border-b w-[98%]">
        Carrito
      </h2>
      <div className="w-full">
        {product.length > 0 ? (
          <div className="flex flex-col gap-4 w-full">
            <span className="flex items-center justify-between w-full">
              <img
                src={ima4}
                alt=""
                className="h-20 rounded-md p-2"
              />
              <span>
              <h1 className="text-3xl font-bold">{product[0].descripcion}</h1>
              <p className="text-red-800 text-3xl font-semibold">
                  {product[0].precio}
                </p>
              </span>
              <article className="flex flex-col gap-4">
                <span className="">
                  Cantidad: {product[0].cantidad}
                </span>
              </article>
            </span>
            <button className="py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md">Finalizar Compra</button>
          </div>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
      </div>
    </>
  );
}

export default Cart;
