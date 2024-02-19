import { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from "mdb-react-ui-kit";
import "../sctruct/css/Navbar.css";
import carrito from "../../assets/Carrito.png";
import favoritos from "../../assets/favorito.png";
import logo from "../../assets/logo-2.png";
import usuario from "../../assets/usuario2.png";
import abajo from '../../assets/down.png';
import derecha from '../../assets/right.png';
import { Link } from "react-router-dom";
export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
    <div>
      <MDBNavbar expand="lg" className="lg:px-10">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" className="text-light">
            <img id="logo" className="w-1/2" src={logo} alt="carrito" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas/>
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="navbar grid grid-cols-1 gap-3 md:flex">
                    <div className="dropdown flex items-center px-0 text-sm xl:text-base hover:cursor-pointer">
                      <span className="flex items-center gap-1 mt-2 uppercase">Categorias <span><img src={abajo} className="w-1/2" alt="" /></span></span>
                      <div className="dropdown-content space-y-3 mt-3">
                        <div className="dropdown">
                          <span className="flex justify-between items-center">Tecnologia <span><img src={derecha} className="w-1/2 items-center" alt="" /></span></span>
                          <div className="dropdown-content space-y-3">
                            <div><span>Computadoras</span></div>
                            <div><span>Celulares</span></div>
                            <div><span>Tablets</span></div>
                          </div>
                        </div>
                        <div className="dropdown">
                          <span className="flex justify-between gap-1 items-center">Tv y Audio <span><img src={derecha} className="w-1/2 items-center" alt="" /></span></span>
                          <div className="dropdown-content space-y-3">
                            <div><span>Accesorios</span></div>
                            <div><span>Smart Tv</span></div>
                            <div><span>Audio</span></div>
                            <div><span>Proyectores</span></div>
                          </div>
                        </div>
                        <div className="dropdown">
                          <span className="flex justify-between gap-1 items-center">Electrodomesticos <span><img src={derecha} className="w-1/2 items-center" alt="" /></span></span>
                          <div className="dropdown-content space-y-3">
                            <div><span>Climatizacion</span></div>
                            <div><span>Cocinas</span></div>
                            <div><span>Heladeras</span></div>
                            <div><span>Limpieza</span></div>
                            <div><span>Lavado</span></div>
                            <div><span>Pequeños Electros</span></div>
                          </div>
                        </div>
                        <div className="dropdown">
                          <span className="flex justify-between gap-1 items-center">Hogar y Jardin <span><img src={derecha} className="w-1/2 items-center" alt="" /></span></span>
                          <div className="dropdown-content space-y-3">
                            <div><span>Baño</span></div>
                            <div><span>Cocina</span></div>
                            <div><span>Decoracion</span></div>
                            <div><span>Dormitorio</span></div>
                            <div><span>Iluminacion</span></div>
                            <div><span>Jardin Exterior</span></div>
                          </div>
                        </div>
                        <div className="dropdown">
                          <span className="flex justify-between gap-1 items-center">Belleza <span><img src={derecha} className="w-1/2 items-center" alt="" /></span></span>
                          <div className="dropdown-content space-y-3">
                            <div><span>Cuidado Personal</span></div>
                            <div><span>Salud y Bienestar</span></div>
                          </div>
                        </div>
                      </div>
                    </div>

            <span className="flex justify-center xl:justify-end">
              <form className="flex w-2/3 md:w-1/3 lg:mr-10">
                <input
                  className="text-sm xl:text-lg px-2"
                  type="search"
                  placeholder="¿Qué estas buscando?"
                  aria-label="Search"
                  id="buscador"
                />
                <button className="bg-sky-600 px-3 rounded-r-md hover:bg-sky-500 text-white text-sm xl:text-lg">Buscar</button>
              </form>
            </span>

              <span id="logitos" className="flex justify-center gap-3">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/accounts/Login"
                  className="text-light"
                >
                  <img className="carrito" src={usuario} alt="usuario" />
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="text-light"
                >
                  <img className="carrito" src={favoritos} alt="favoritos" />
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <span>
                    <MDBIcon className="text-light">
                      <img className="carrito" src={carrito} alt="carrito" />
                    </MDBIcon>
                  </span>
                </MDBNavbarLink>
              </MDBNavbarItem>
              </span>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </div>
    </>
  );
}
