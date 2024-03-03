import SinCompras from '../../assets/no-compras.png'

function MisCompras() {
  return (
    <div className='mt-10 xl:mt-0'>
        <div>
            <h2 className="pl-5 xl:pl-0 xl:text-start xl:text-xl font-semibold border-b-[1px]">Mis Compras</h2>
        </div>
        <div className="flex flex-col items-center justify-center h-[700px] text-center space-y-10">
            <div>
                <img src={SinCompras} alt="icono sin compras" />
            </div>
            <div className="space-y-3">
                <h2 className="text-xl xl:text-2xl">No realizaste ninguna compra</h2>
                <h3 className='px-2 xl:text-lg xl:px-0'>Agregá productos a tu carrito y
                    realizá tu primera compra!</h3>
            </div>
            <div>
                <a href="#" className="bg-[#FFA62b] text-white px-4 py-2 rounded hover:bg-[#ffaf3e] w-1/6">
                    Ir a la Tienda
                </a>
            </div>
        
        </div>
    </div>
  )
}

export default MisCompras