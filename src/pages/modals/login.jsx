import React from "react";
import { useSpring, animated, config } from "react-spring";
import PagesLogin from "../accounts/PagesLogin";
import { useEffect, useMemo } from "react";
import imgLogin from "../../assets/loginimg.png";
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
      className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none w-[60%] bg-white"
    >
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="relative h-full w-full">
        <div className="relative flex flex-col h-screen bg-white   outline-none focus:outline-none">
          <div className="relative h-full flex items-center justify-center p-8 w-full">
            <img src={imgLogin} alt="" className="h-[95%] w-[400px] flex-1" />
            <PagesLogin onClose={onClose} />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
