

function Micuenta() {
  return (
    <>
        <div className="my-10 rounded-lg xl:mt-0">
          <h2 className="pl-5 xl:pl-0 xl:text-xl font-semibold border-b-[1px]">Mi cuenta</h2>

          <div className="shadow-xl rounded-lg">
            <h2 className="pt-5 pl-5 border-b-[1px] xl:text-lg">
              Datos de contacto
            </h2>
            <form className='formulario grid xl:grid-cols-3 gap-5 mt-10 p-4'>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Maria"
                  className='py-1 px-1 w-full'
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  placeholder="Maria"
                  className='py-1 px-1 w-full'
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Nro. Documento
                </label>
                <input
                  type="text"
                  name="documentNumber"
                  placeholder="30500600"
                  className='py-1 px-1 w-full'
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Email de Contacto
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="marioyjuli@hola.com"
                  className='py-1 px-1 w-full'
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Cod. Area
                </label>
                <input
                  type="tel"
                  name="codeNumber"
                  placeholder="011"
                  className='py-1 px-1 w-full'
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500">
                  Telefono
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="2525-2525"
                  className='py-1 px-1 w-full'
                />
              </div>
            </form>
            <div className="flex justify-end p-3">
              <button
                type="submit"
                className="bg-[#FFA62b] text-white px-4 py-1 rounded-full hover:bg-[#ffaf3e] hover:transition hover:duration-500 xl:w-1/6"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
          <div className="grid xl:grid-cols-2 mt-1 gap-3">
            <div className="shadow-2xl rounded-lg">
              <h2 className="pt-5 pl-5 border-b-[1px] text-lg">
                Mi acceso
              </h2>
              <div className="gap-5 p-4 space-y-5 mt-4">
                <div>
                  <h2>Email</h2>
                  <h3>marioyjuli@hola.com</h3>
                </div>
                <div>
                  <h2>Acceso con Google</h2>
                  <h3>No</h3>
                </div>
                <div>
                  <h2>Acceso con Facebook</h2>
                  <h3>No</h3>
                </div>
              </div>
            </div>
            <div className="shadow-2xl rounded-lg">
              <h2 className="pt-5 pl-5 border-b-[1px] text-lg">
                Cambiar Contraseña
              </h2>
              <form action="" className="gap-5 p-4 space-y-5">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña Actual"
                    className='py-1 px-1 w-full'
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Nueva Contraseña"
                    className='py-1 px-1 w-full'
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Repetir Contraseña"
                    className='py-1 px-1 w-full'
                  />
                </div>
              </form>
              <div className="flex justify-end p-3">
              <button
                type="submit"
                className="bg-[#FFA62b] text-white px-4 py-1 rounded-full hover:bg-[#ffaf3e] hover:transition hover:duration-500 xl:w-1/3"
              >
                Guardar Cambios
              </button>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Micuenta