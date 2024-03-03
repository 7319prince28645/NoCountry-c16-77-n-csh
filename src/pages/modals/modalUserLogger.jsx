import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
  return (
    <div className="w-52">
      <h2
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
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
  );
}

export default ModalUserLogger;
