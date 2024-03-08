import React from "react";
import ima4 from "../assets/a34.webp";
import { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useEffect } from "react";
import Swal from "sweetalert2";
function Cart({ onClose, product }) {
  const [productos, setProductos] = useState(product);
  console.log(productos);

  const deleteProduct = (index) => {
    const newProducts = productos.productos.filter((item, i) => i !== index);
    setProductos({ productos: newProducts });
    localStorage.setItem("carrito", JSON.stringify({ productos: newProducts }));
  };
  const handleCarrito = () => {
    if (!localStorage.getItem("user")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes iniciar sesión para agregar productos al carrito!",
      });
      // Redirigir a la página de inicio de sesión o registro si es apropiado
      // Ejemplo: history.push("/login");
    } else {
      Swal.fire({
        icon: "success",
        title: "Compra exitosa",
        text: "Compra realizada con éxito!",
      });
      const existingCartData = JSON.parse(localStorage.getItem("carrito")) || {
        productos: [],
      };

      
      localStorage.setItem("carritoComprado", JSON.stringify(existingCartData));
      // Guardar los datos actualizados en el almacenamiento local

      // Considera si realmente necesitas esta línea siguiente
      // localStorage.setItem("carrito", JSON.stringify({ productos: [] }));
    }
  };
  return (
    <>
      <div className="flex flex-col h-screen w-full relative">
        <span
          className="text-gray-500 text-end cursor-pointer z-40 py-2 font-semibold absolute right-0 hover:text-neutral-300 text-xl"
          onClick={onClose}
        >
          ×
        </span>
        <h2 className="text-2xl font-semibold py-2 border-b w-[98%]">
          Carrito
        </h2>
        <div className="w-full flex flex-col gap-4">
          {productos && productos.productos.length > 0 ? (
            <>
              {productos.productos?.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <span className="flex  w-full shadow-sm rounded-sm p-2">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="h-20 rounded-md p-2 w-20"
                    />
                    <span className="flex-1 justify-between items-end min-h-full px-4 relative">
                      <h1 className="font-semibold text-lg pt-2">
                        {item?.name}
                      </h1>
                      <span className="flex justify-between w-full absolute bottom-0 pr-8 pb-1">
                        <p className="text-sky-600 text-sm font-semibold">
                          ${item?.price}
                        </p>
                        <p>
                          Total: <b className="text-sky-600"> ${item?.total}</b>
                        </p>
                      </span>
                    </span>
                    <article className="flex flex-col justify-center items-center gap-4">
                      <span className="">
                        Cantidad: {item?.ContadorCarrito}
                      </span>
                      <RiDeleteBin2Line
                        onClick={() => deleteProduct(index)}
                        className="text-2xl text-red-300"
                      />
                    </article>
                  </span>
                </div>
              ))}
              <p className="text-red-500 font-semibold">
                {" "}
                Total a pagar: $
                {productos.productos.reduce((acc, item) => acc + item.total, 0)}
              </p>
              <button
                className="py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-md w-full"
                onClick={() => handleCarrito()}
              >
                Finalizar Compra
              </button>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
