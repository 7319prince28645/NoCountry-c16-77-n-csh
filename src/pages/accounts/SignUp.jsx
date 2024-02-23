import React from "react";

function SignUp({ handClickState }) {

  const handClicData = () => {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  handClickState(0);  
  };
  return (
    <>
      <p
        onClick={() => handClickState(0)}
        className="absolute top-1 right-2 text-gray-500 cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300"
      >
        Atrás
      </p>
      <p className="text-2xl font-semibold absolute top-1 left-1 p-2 border-b w-[98%]">Regístrate</p>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={()=>handClicData()}
        >
          Registrarse
        </button>
      </form>
    </>
  );
}

export default SignUp;
