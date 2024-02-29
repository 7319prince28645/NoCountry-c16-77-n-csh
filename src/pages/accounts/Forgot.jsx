import React from "react";

function Forgot({ handClickState }) {
  return (
    <>
      <p
        onClick={() => handClickState(0)}
        className="absolute top-10 right-2 text-gray-500 cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300"
      >
        Atrás
      </p>
      <form action="" className="flex flex-col gap-2 mt-6 p-5">
      <h2 className="text-2xl font-semibold border-b w-[100%]">Recuperar contraseña</h2>
      <p className="text-gray-600 mt-3 mb-2">
        Ingresa el email con el cual te registraste
      </p>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className=" border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 mt-5 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Recuperar
        </button>
      </form>
    </>
  );
}

export default Forgot;
