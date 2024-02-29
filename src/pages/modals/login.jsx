import React from "react";
import { useSpring, animated, config } from "react-spring";
import PagesLogin from "../accounts/PagesLogin";
import { useEffect, useMemo } from "react";
<<<<<<< HEAD
import imgLogin from "../../assets/logo-2.2.webp";
const Modal = ({ isOpen, onClose, children }) => {
=======
import imgLogin from "../../assets/loginimg-3.webp";
import imgLogin2 from "../../assets/loginimg.webp";
const Modal = ({ isOpen, onClose, usserLog }) => {
>>>>>>> b2939c4051a3546cfdf587fb439a2da65090ea32
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
      className="fixed z-50 flex -top-0 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-white xl:w-[40%]"
    >
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="relative h-full w-full overflow-y-hidden">
        <div className="flex flex-col justify-center h-screen bg-gray-100 outline-none focus:outline-none">
          <div className="relative flex items-center justify-center px-8">
            <img src={imgLogin} alt="" className="w-3/4"/>
          </div>
<<<<<<< HEAD
          <div>
            <PagesLogin onClose={onClose} />
=======
          <div className="">
            <PagesLogin onClose={onClose} usserLog={usserLog} />
>>>>>>> b2939c4051a3546cfdf587fb439a2da65090ea32
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
