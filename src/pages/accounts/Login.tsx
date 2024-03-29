import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgot from "./Forgot";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
function Login({ handClickState, onClose, usserLog }) {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleData = (e, data) => {
    if (data === "email") {
      setEmail(e.target.value);
    }
    if (data === "password") {
      setPassword(e.target.value);
    }
  };

  const handleClic = (e) => {
    e.preventDefault();

   
    usserLog(Email, Password);
  };

  return (
    <div className="h-[100%] mb-12 w-full px-8">
      <span
        className="absolute top-10 right-2 text-gray-500 cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300 text-xl"
        onClick={onClose}
      >
        ×
      </span>

      <form className="space-y-4 rounded-lg shadow-2xl p-8 xl:h-[55%] 2xl:pt-10">
        <h2 className="text-2xl font-semibold 2xl:py-5 text-center">
          Iniciar Sesion
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => handleData(e, "email")}
            className="w-full border py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={Password}
            onChange={(e) => handleData(e, "password")}
            className="w-full border py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex">
          <input type="checkbox" className="bg-blue-600" />
          <p
            className=" text-md text-center text-blue-500 hover:underline cursor-pointer"
            onClick={() => handClickState(2)}
          >
            Olvido su contraseña?
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-[#82C0CC] text-white py-2 rounded-md hover:bg-[#16697a] hover:transition hover:duration-300 focus:outline-none focus:ring focus:border-blue-300"
          onClick={(e) => handleClic(e)}
        >
          Iniciar Sesion
        </button>
        <div
          className="text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => handClickState(1)}
        >
          Create an account
        </div>
      </form>
    </div>
  );
}

export default Login;
