import React from "react";
import { useSpring, animated, config } from "react-spring";
import PagesLogin from "../accounts/PagesLogin";
import { useEffect, useMemo } from "react";
import imgLogin from "../../assets/loginimg-3.webp";
import imgLogin2 from "../../assets/loginimg.webp";
const Modal = ({ isOpen, onClose, children }) => {
  const modalAnimation = useSpring({
    left: isOpen ? "0%" : "-100%",
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
      className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white"
    >
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="relative h-full w-full overflow-y-hidden">
        <div className="relative flex flex-col xl:grid xl:grid-cols-2 h-screen bg-gray-100 outline-none focus:outline-none">
          <div className="relative h-[70%] flex items-center justify-center px-8 w-full xl:h-full">
            <img src={imgLogin} alt="" className="sm:hidden shadow-2xl xl:flex" />
            <img src={imgLogin2} alt="" className="hidden sm:flex shadow-2xl xl:hidden w-full" />
          </div>
          <div className="">
            <PagesLogin onClose={onClose} />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
