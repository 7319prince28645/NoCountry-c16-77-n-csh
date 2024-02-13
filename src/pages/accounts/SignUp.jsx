import React from 'react'

function SignUp({handClickState}) {
  return (
    <div className="max-w-md mx-auto p-4 relative bg-white rounded-lg shadow-md h-[400px] w-[350px]">
  <p onClick={() => handClickState(0)} className="absolute top-0 right-0 text-gray-500 cursor-pointer">
    Atrás
  </p>
  <p className="text-gray-600 mb-4">Regístrate</p>
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-600">
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
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">
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
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">
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
    >
      Registrarse
    </button>
  </form>
</div>

  )
}

export default SignUp