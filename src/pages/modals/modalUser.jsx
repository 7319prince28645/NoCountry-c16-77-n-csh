import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeAdmi from "../admi/HomeAdmi";
import PerfilAdmi from "../admi/PerfilAdmi";
import InventarioAdmi from "../admi/InventarioAdmi";
import NotifacionesAdmi from "../admi/NotifacionesAdmi";
import SoporteAdmi from "../admi/SoporteAdmi";
import AyudaAdmi from "../admi/AyudaAdmi";
import ContactoAdmi from "../admi/ContactoAdmi";
import ProductosAdmi from "../admi/ProductosAdmi";
import AdmiRutas from "../admi/AdmiRutas";
import { useState } from "react";
function ModalUser() {
  const [clic, setClic] = useState("home");
  const handleClick = (link) => {
    setClic(link);
  };
  const navigate = useNavigate();
  const handleCerrarSesion = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div className="w-52">
      <nav className="text-center">
        <ul className="flex flex-col gap-2 w-full">
          <li className="w-full">
            <Link
              to={"/accounts/dashboard"}
              onClick={() => handleClick("home")}
            >
              <p
                className={
                  clic === "home"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Perfil"}
              onClick={() => handleClick("perfil")}
            >
              <p
                className={
                  clic === "perfil"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Perfil
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Inventario"}
              onClick={() => handleClick("inventario")}
            >
              <p
                className={
                  clic === "inventario"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                {" "}
                Inventario
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Productos"}
              onClick={() => handleClick("productos")}
            >
              <p
                className={
                  clic === "productos"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Productos
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Notificaciones"}
              onClick={() => handleClick("notifaciones")}
            >
              <p
                className={
                  clic === "notifaciones"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Notifaciones
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Soporte"}
              onClick={() => handleClick("soporte")}
            >
              {" "}
              <p
                className={
                  clic === "soporte"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Soporte
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Ayuda"}
              onClick={() => handleClick("ayuda")}
            >
              {" "}
              <p
                className={
                  clic === "ayuda"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Ayuda{" "}
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/Contacto"}
              onClick={() => handleClick("contacto")}
            >
              {" "}
              <p
                className={
                  clic === "contacto"
                    ? "bg-[#82C0CC] hover:text-gray-300 px-4 py-2  text-black shadow-md"
                    : "hover:text-gray-300 w-full px-4 py-2"
                }
              >
                Contacto{" "}
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/accounts/dashboard/home"}
              className={
                clic === "home" ? "hover:text-gray-300" : "hover:text-gray-300"
              }
              onClick={handleCerrarSesion}
            >
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ModalUser;
