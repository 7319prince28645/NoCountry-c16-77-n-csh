import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import '../sctruct/css/users.css'
import user from '../../assets/user-logo.svg'
import compras from '../../assets/compras-logo.svg'
import cerrar from '../../assets/cerrar-logo-7.svg'
import MiCuenta from "../sctruct/MiCuenta";
import MisCompras from "../sctruct/MisCompras";


function ModalUserLogger() {
  const [clic, setClic] = useState("");
  const handleClick = (link) => {
    setClic(link);
  };
  const navigate = useNavigate();
  const handleCerrarSesion = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  function handleLiClick(index) {
    setSelectedItemIndex(index);
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] bg-gray-100 gap-2 xl:px-20">
        <div className="px-2">
          <ul className="space-y-5">
            <li className={`bg-li py-3 pl-5 rounded-md ${selectedItemIndex === 0 ? 'active' : ''}`}>
              <a href="#" className="flex gap-4" onClick={() => handleLiClick(0) }>
                <span><img src={user} alt="icono usuario" /></span>Mi cuenta
              </a>
            </li>
            <li className={`bg-li py-3 pl-5 rounded-md ${selectedItemIndex === 1 ? 'active' : ''}`}>
              <a href="#" className="flex gap-4" onClick={() => handleLiClick(1)}>
                <span><img src={compras} alt="icono compras" /></span>Mis compras
              </a>
            </li>
            <li className="bg-li py-3 pl-5">
            <Link
          to={"/accounts/dashboard/home"}
          className="flex gap-4"
          onClick={handleCerrarSesion}
        >
          <span><img src={cerrar} alt="icono cerrar sesion" /></span>Cerrar sesión
        </Link>
            </li>
          </ul>
        </div>

        {selectedItemIndex === 0 && <MiCuenta />}
        {selectedItemIndex === 1 && <MisCompras />}
        

      </div>

      <div className="w-52">
        <h2 className="text-2xl font-bold cursor-pointer">
          User Accounts
        </h2>

        <Link
          to={"/accounts/dashboard/home"}
          className={
            clic === "home" ? "hover:text-gray-300" : "hover:text-gray-300"
          }
          onClick={handleCerrarSesion}
        >
          Cerrar sesión
        </Link>
      </div>
    </>
  );
}

export default ModalUserLogger;
