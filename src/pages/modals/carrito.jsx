import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useEffect, useMemo } from "react";
import ima4 from "../../assets/a34.webp";
import Cart from "../Cart";
function Carrito({ isOpen, onClose, product, ContadorCarrito }) {
  const modalAnimation = useSpring({
    right: isOpen ? "0%" : "-100%",
    opacity: isOpen ? 1 : 0,
    config: { ...config.default, duration: 350, easing: (t) => t },
  });
  const bodyOverflow = useMemo(() => {
    return isOpen ? "hidden" : "visible";
  }, [isOpen]);
  useEffect(() => {
    // Añade una clase al body para deshabilitar el scroll cuando el modal está abierto
    document.body.style.overflow = bodyOverflow;

    // Limpiar al desmontar el componente
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [bodyOverflow]);
  if (!isOpen) return null;
  return (
    <animated.div
      style={modalAnimation}
      className="absolute -top-0 z-50 flex items-center justify-end overflow-x-hidden overflow-y-hidden outline-none focus:outline-none xl:w-[30%] bg-white "
    >
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="relative h-screen w-full">
        <div className="relative flex flex-col h-screen bg-white outline-none focus:outline-none">
         
          <div className="h-full flex p-8 w-full mt-8 gap-4">
            <Cart onClose={onClose} product={product}/>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Carrito;
