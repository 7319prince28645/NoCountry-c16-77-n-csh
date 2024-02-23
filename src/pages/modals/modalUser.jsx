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
  const [clic, setClic] = useState("");
  const handleClick = (link) => {
    setClic(link);
  };
  const navigate = useNavigate();
  const handleCerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  };
  return (
    <div className="w-52">
      <h2
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Admin Dashboard
      </h2>
      <nav className="py-4 text-center">
        <ul className="flex flex-col gap-8 w-full">
          <li className="w-full">
            <Link
              to={"/accounts/dashboard"}
              onClick={() => handleClick("home")}
            >
              <p
                className={
                  clic === "home"
                    ? "bg-[#3E86D5] hover:text-gray-300 px-4 py-2 rounded-lg text-white shadow-md"
                    : "hover:text-gray-300 w-full"
                }
              >
                Home
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
                    ? "bg-[#3E86D5] hover:text-gray-300 px py-2 rounded-lg text-white shadow-md "
                    : "hover:text-gray-300"
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
