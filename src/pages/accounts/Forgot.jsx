import React from 'react'

function Forgot({handClickState}) {
  return (
    <div className="bg-white p-8 rounded shadow-md relative h-[400px] w-[350px] flex flex-col ">
  <p onClick={() => handClickState(0)} className="absolute top-0 right-0 text-gray-500 cursor-pointer">
    Atrás
  </p>
  <h2 className="text-xl font-semibold mb-4">RECUPERA TU CONTRASEÑA</h2>
  <p className="text-gray-600">Ingresa el email con el cual te registraste</p>
  <form action="" className="flex flex-col gap-2 mt-6 ">
    <input
      type="email"
      id="email"
      placeholder="Email"
      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
    >
      Recuperar
    </button>
  </form>
</div>

  )
}

export default Forgot