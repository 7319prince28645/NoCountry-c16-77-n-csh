import whatsapp from '../../assets/whatsapp-white.png'
import horario from '../../assets/reloj-white.png'
import email from '../../assets/carta-white.png'
import facebook from '../../assets/facebook-white.png'
import instagram from '../../assets/instagram-white.png'
import datos from '../../lib/datos';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useState } from 'react'


function Footer() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const productsArray = Object.entries(datos).map(([categoria, productos]) => ({
    categoria,
    productos
  }));

  const suscribirseExitosamente = () => {
    // Lógica para suscribir al usuario aquí...
    // Mostrar la alerta exitosa
    Swal.fire({
      icon: "success",
      title: "¡Suscripción exitosa!",
      text: "Gracias por suscribirte.",
      confirmButtonText: "OK",
    });
  };

  const handleSuscribirse = (e) => {
    e.preventDefault(); // Evitar el envío automático del formulario
    suscribirseExitosamente(); // Llamar a la función de suscripción exitosa
    setFormSubmitted(true);
  };

  return (

    <div className="text-white">

      <div className="text-white">
        <div className="bg-[#16697A] p-2">
          {
            formSubmitted ? <p className='py-3 text-2xl text-center'>Gracias por suscribirte- Recibirás las mejores ofertas en tu correo</p> :

              <form onSubmit={handleSuscribirse} className='text-center xl:items-center xl:space-y-0 xl:flex xl:justify-center xl:gap-3'>
                <label className='text-xl uppercase 2xl:px-5 2xl:m-a 2xl:text-2xl 2xl:uppercase font-bold'>
                  Enterate de las mejores ofertas
                </label>
                <div>
                  <input type="email" placeholder={formSubmitted ? '' : 'Ingresa tu email'} className='my-3 sm:rounded-r-none sm:rounded-l-3xl text-[#7f7f7f] focus:outline-none text-left pl-1 pr-20 2xl:pr-28 py-1 bg-[#E5F1FA]' />
                  <button type="submit" className='bg-[#ffa62B] py-1 px-2 2xl:px-5 uppercase font-semibold rounded-3xl sm:rounded-l-none xl:rounded-r-3xl hover:bg-[#C9C9C9] hover:transition hover:duration-500 hover:text-[#7f7f7f]'>
                    Suscribite Ahora
                  </button>
                </div>
              </form>
          }
        </div>
      </div>
    
      

      <div className="pt-5 2xl:px-10 xl:grid xl:grid-cols-[2fr_1fr_1fr_1fr] bg-[#82C0CC]">
       
        <div className='2xl:space-y-3 ms-20 mt-12'>
          <div className='p-2 2xl:mt-5'>
            <h2 className='text-xl 2xl:text-2xl text-[#16697a] font-bold'>
              Tech S.A
            </h2>
          </div>

          <div className='space-x-4'>
            <div className='flex items-center gap-2 ms-3'>
              <img src={whatsapp} alt="" className='w-4 2xl:w-5' />
              <p>+54 9 112323-4545</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={horario} alt="" className='w-4 2xl:w-5' />
              <p>Lun a Vie 9 a 19 hs. S b de 8 a 13 hs.</p>
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
          <h3 className="mb-3 text-[#16697a] font-bold text-lg">Institucionales</h3>
          <div className="space-y-3 text-lg">
            <li>
              <Link to={"/sctruct/privacidad"}>
                Politica de Privacidad
              </Link>
            </li>
            <li>
              <Link to={"/sctruct/envios"}>
                Politica de Envios
              </Link>
            </li>
            <li>
              <Link to={"/sctruct/formulario"}>
                Boton de Arrepentimiento
              </Link>
            </li>
            <li>
              <a href="#">
                Contacto Comercial
              </a>
            </li>
            <li>
              <Link to={"/sctruct/terminos"}>
                Terminos y Condiciones
              </Link>
            </li>
          </div>
        </div>
        <div className="list-none my-5 xl:my-0 hidden xl:grid">
          <h3 className="mb-3 text-[#16697a] font-bold text-lg">Marcas</h3>
          <div className="space-y-3">
            {productsArray.map((value, index) =>
            (
              <Link to={`/Product/${value.categoria}`} key={index}>
                <div key={index}>

                  <li className='text-left text-lg my-2'>{value.categoria}</li>

                </div>
              </Link>
            )
            )}
          </div>
        </div>
        <div className="list-none my-5 xl:my-0 hidden xl:grid">
          <h3 className="mb-3 text-[#16697a] font-bold text-lg">Categorias</h3>
          <div className="">
            {productsArray.map((value, index) =>
            (
              <Link to={`/Product/${value.categoria}`} key={index}>
                <div key={index}>

                  <h2 className='text-left text-lg my-2'>{value.categoria}</h2>

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
            <summary>Categorias</summary>
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
      <div className="bg-[#16697A] p-2 text-center ">
        Copyright   {new Date().getFullYear()} Tech S.A
      </div>
    </div>
  )
}

export default Footer