import whatsapp from '../../assets/whatsapp-white.png'
import horario from '../../assets/reloj-white.png'
import email from '../../assets/carta-white.png'
import facebook from '../../assets/facebook-white.png'
import instagram from '../../assets/instagram-white.png'
import datos from '../../lib/datos';
import { Link } from 'react-router-dom';

function Footer() {
  const productsArray = Object.entries(datos).map(([categoria, productos]) => ({
    categoria,
    productos
  }));

  return (
    <div className="text-white">
      <div className="bg-[#2166ae] p-2">
        <form action="" method="post" className='text-center xl:items-center xl:space-y-0 xl:flex xl:justify-center xl:gap-3'>
          <label className='text-xl uppercase 2xl:px-5 2xl:m-a 2xl:text-2xl 2xl:uppercase font-bold'>
            Enterate de las mejores ofertas
          </label>
          <div>
            <input type="text" placeholder='Ingresa tu email' className='my-3 text-[#7f7f7f] focus:outline-none text-left pl-1 pr-20 2xl:pr-28 py-1 bg-[#E5F1FA]' />
            <button className='bg-[#7f7f7f] py-1 px-2 2xl:px-5 uppercase font-semibold rounded-3xl sm:rounded-l-none xl:rounded-r-3xl hover:bg-[#C9C9C9] hover:transition hover:duration-500 hover:text-[#7f7f7f]'>Suscribite Ahora</button>
          </div>
        </form>
      </div>
      <div className="pt-5 2xl:px-10 xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr] bg-[#3E86D5]">
        <div className='2xl:space-y-3'>
          <div className='p-2 2xl:mt-5'>
            <h2 className='text-xl 2xl:text-2xl'>
              Tech S.A
            </h2>
          </div>
          <div className='p-2 2xl:space-y-3'>
            <div className='flex items-center gap-2'>
              <img src={whatsapp} alt="" className='w-4 2xl:w-5' />
              <p>+54 9 112323-4545</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={horario} alt="" className='w-4 2xl:w-5' />
              <p>Lun a Vie 9 a 19 hs. Sáb de 8 a 13 hs.</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={email} alt="" className='w-4 2xl:w-5' />
              <p>consultas@tech.com.ar</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={facebook} alt="" className='w-4 2xl:w-5' />
              <p>tech</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={instagram} alt="" className='w-4 2xl:w-5' />
              <p>tech</p>
            </div>
          </div>
        </div>
        <div className="list-none my-5 hidden xl:grid">
          <h3 className="mb-3 text-[#C9C9C9] font-semibold text-lg">Institucionales</h3>
          <div className="space-y-3">
            <li>
              <a href="#">
                Contacto Comercial
              </a>
            </li>
            <li>
              <a href="#">
                Politica de Privacidad
              </a>
            </li>
            <li>
              <a href="#">
                Politica de Envios
              </a>
            </li>
            <li>
              <a href="#">
                Terminos y Condiciones
              </a>
            </li>
            <li>
              <a href="#">
                Boton de Arrepentimiento
              </a>
            </li>
            <li>
              <a href="#">
                Trabaja con Nosotros
              </a>
            </li>
          </div>
        </div>
        <div className="list-none my-5 xl:my-0 hidden xl:grid">
          <h3 className="mb-3 text-[#C9C9C9] font-semibold text-lg">Marcas</h3>
          <div className="space-y-3">
            {productsArray.map((value, index) =>
            (
              <Link to={`/Product/${value.categoria}`} key={index}>
                <div key={index}>

                  <h2 className='text-left text-lg font-medium my-2'>{value.categoria}</h2>

                </div>
              </Link>
            )
            )}
          </div>
        </div>
        <div className="list-none my-5 xl:my-0 hidden xl:grid">
          <h3 className="mb-3 text-[#C9C9C9] font-semibold text-lg">Nuestros Sellers</h3>
          <div className="space-y-3">
          {productsArray.map((value, index) =>
            (
              <Link to={`/Product/${value.categoria}`} key={index}>
                <div key={index}>

                  <h2 className='text-left text-lg font-medium my-2'>{value.categoria}</h2>

                </div>
              </Link>
            )
            )}
          </div>
        </div>
        <div className='space-y-3 py-5 divide-y'>
          <details className='xl:hidden border-gray-50'>
            <summary>Institucionales</summary>
            <div className="space-y-3 list-none pt-3 ">
              <li>
                <a href="#">
                  Contacto Comercial
                </a>
              </li>
              <li>
                <a href="#">
                  Politica de Privacidad
                </a>
              </li>
              <li>
                <a href="#">
                  Politica de Envios
                </a>
              </li>
              <li>
                <a href="#">
                  Terminos y Condiciones
                </a>
              </li>
              <li>
                <a href="#">
                  Boton de Arrepentimiento
                </a>
              </li>
              <li>
                <a href="#">
                  Trabaja con Nosotros
                </a>
              </li>
            </div>
          </details>
          <details className='xl:hidden border-gray-50'>
            <summary>Marcas</summary>
            <div className="space-y-3 list-none pt-3">
              <li>
                <a href="#">
                  Epson
                </a>
              </li>
              <li>
                <a href="#">
                  Peabody
                </a>
              </li>
              <li>
                <a href="#">
                  Acer
                </a>
              </li>
              <li>
                <a href="#">
                  Sony
                </a>
              </li>
              <li>
                <a href="#">
                  Black & Decker
                </a>
              </li>
              <li>
                <a href="#">
                  Samsung
                </a>
              </li>
            </div>
          </details>
          <details className='xl:hidden border-gray-50'>
            <summary>Nuestros Sellers</summary>
            <div className="space-y-3 list-none pt-3">
              <li>
                <a href="#">
                  Argentina Color
                </a>
              </li>
              <li>
                <a href="#">
                  Dinatech
                </a>
              </li>
              <li>
                <a href="#">
                  Novatech
                </a>
              </li>
              <li>
                <a href="#">
                  Datasoft
                </a>
              </li>
              <li>
                <a href="#">
                  Delta
                </a>
              </li>
              <li>
                <a href="#">
                  Emood
                </a>
              </li>
            </div>
          </details>
        </div>
      </div>
      <div className="bg-[#2166ae] p-2">
        Copyright © {new Date().getFullYear()} Tech S.A
      </div>
    </div>
  )
}

export default Footer