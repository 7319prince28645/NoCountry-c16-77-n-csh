import SinCompras from "../../assets/no-compras.png";
import { useEffect, useState } from "react";
function MisCompras() {
  const [compras, setCompras] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      window.location.href = "/accounts/login";
    } else if (localStorage.getItem("carritoComprado")) {
      setCompras(JSON.parse(localStorage.getItem("carritoComprado")));
    }
  }, []);
  console.log(compras);
  return (
    <div className="mt-10 xl:mt-0">
      <div>
        <h2 className="pl-5 xl:pl-0 xl:text-start xl:text-xl font-semibold border-b-[1px]">
          Mis Compras
        </h2>
      </div>
      <div className="p-8">
        <div className="">
          {compras?.productos && compras?.productos?.length > 0 ? (
            <>
              {compras.productos?.map((item, index) => (
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
                    </article>
                  </span>
                </div>
              ))}
              <div>
                <p className="text-lg font-semibold py-4">
                  {" "}
                  Total comprado: ${compras.productos.reduce((acc, item) => acc + item.total, 0)}
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={SinCompras} alt="icono sin compras" />
              </div>
              <h2 className="text-xl xl:text-2xl">
                No realizaste ninguna compra
              </h2>
              <h3 className="px-2 xl:text-lg xl:px-0">
                Agregá productos a tu carrito y realizá tu primera compra!
              </h3>
              <div>
                <a
                  href="#"
                  className="bg-[#FFA62b] text-white px-4 py-2 rounded hover:bg-[#ffaf3e] w-1/6"
                >
                  Ir a la Tienda
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MisCompras;
