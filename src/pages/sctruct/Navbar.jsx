import { useState } from "react";
import Modal from "../modals/login";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../sctruct/css/Navbar.css";
import carrito from "../../assets/carrito-1.svg";
import favoritos from "../../assets/favoritos.svg";
import usuario from "../../assets/user-2.svg";
import abajo from "../../assets/abajo.webp";
import derecha from "../../assets/derecha.webp";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import Carrito from "../modals/carrito";
import ModalUser from "../modals/modalUser";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.2.png";
import BarritaInf from "./BarritaInf";


export default function Navbar({ openModalCarrito, loggedIn, usserLog, usuarioLoggeado}) {
  console.log(usuarioLoggeado);

  const navigate = useNavigate();
  const [openBasic, setOpenBasic] = useState(false);
  const [isHomeIcon, setIsHomeIcon] = useState(true);
  const [iconColor, setIconColor] = useState("white");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
 
  const handleUserAdmin = () => {
    navigate("/accounts/dashboard");
  };

  const handleIconClick = () => {
    setIsHomeIcon(!isHomeIcon);
    setIconColor(isHomeIcon ? "white" : "white");
  };

  const handleUser = () => {
    navigate("/accounts/user");
  }
 
  return (
    <>
     
     
      <div className="sticky z-20 top-0 shadow-lg">
        {loggedIn === false && <Modal isOpen={modalIsOpen} onClose={closeModal} usserLog={usserLog} />}
        <MDBNavbar expand="lg" className="lg:px-10 lg:py-5">
          <MDBContainer fluid>
            <Link to={"/"}>
              <img id="logo" className="w-1/4" src={logo} alt="carrito" />
            </Link>
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenBasic(!openBasic)}
              style={{color: "white", border: "1px solid white"}}
            >
              
            <MDBIcon
              icon={isHomeIcon ? "bars" : "x"}
              fas
              onClick={handleIconClick}
              style={{ color: iconColor }}
            />
            
            </MDBNavbarToggler>

            <MDBCollapse navbar open={openBasic}>
              <MDBNavbarNav className="navbar grid grid-cols-1 gap-3 md:flex">
                <div className="dropdown flex items-center px-0 text-sm xl:text-base hover:cursor-pointer">
                  <span className="flex items-center gap-1 md:ml-2 lg:ml-10 mt-2 uppercase">
                    Categorias{" "}
                    <span>
                      <img src={abajo} className="w-1/2" alt="" />
                    </span>
                  </span>
                  <div className="dropdown-content rounded dropShadow space-y-3 mt-3 xl:ml-10">
                    <div className="dropdown">
                      <span className="flex justify-between items-center">
                        Tecnologia{" "}
                        <span>
                          <img
                            src={derecha}
                            className="w-1/2 items-center"
                            alt=""
                          />
                        </span>
                      </span>
                      <div className="dropdown-content rounded dropShadow space-y-3">
                        <div>
                          <span>Computadoras</span>
                        </div>
                        <div>
                          <span>Celulares</span>
                        </div>
                        <div>
                          <span>Tablets</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center">
                        Tv y Audio{" "}
                        <span>
                          <img
                            src={derecha}
                            className="w-1/2 items-center"
                            alt=""
                          />
                        </span>
                      </span>
                      <div className="dropdown-content rounded dropShadow space-y-3">
                        <div>
                          <span>Smart Tv</span>
                        </div>
                        <div>
                          <span>Audio</span>
                        </div>
                        <div>
                          <span>Proyectores</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center">
                        Electrodomesticos{" "}
                        <span>
                          <img
                            src={derecha}
                            className="w-1/2 items-center"
                            alt=""
                          />
                        </span>
                      </span>
                      <div className="dropdown-content rounded dropShadow space-y-3">
                        <div>
                          <span>Climatizacion</span>
                        </div>
                        <div>
                          <span>Cocinas</span>
                        </div>
                        <div>
                          <span>Heladeras</span>
                        </div>
                        <div>
                          <span>Lavado</span>
                        </div>
                        <div>
                          <span>Pequeños Electros</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center">
                        Hogar y Jardin{" "}
                        <span>
                          <img
                            src={derecha}
                            className="w-1/2 items-center"
                            alt=""
                          />
                        </span>
                      </span>
                      <div className="dropdown-content rounded dropShadow space-y-3">
                        <div>
                          <span>Baño</span>
                        </div>
                        <div>
                          <span>Decoracion</span>
                        </div>
                        <div>
                          <span>Iluminacion</span>
                        </div>
                        <div>
                          <span>Jardin Exterior</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="flex justify-center md:right-10 lg:right-20 xl:justify-end md:relative xl:right-[22.8rem]">
                  <form className="flex w-2/3 sm:w-1/2 md:w-1/3">
                    <input
                      className="text-sm xl:text-lg px-2 py-1"
                      type="search"
                      placeholder="¿Qué estas buscando?"
                      aria-label="Search"
                      id="buscador"
                    />
                    <button className="bg-[#FFA62B] px-3 sombra rounded-r-md hover:[#16697A] text-white text-sm xl:text-lg">
                      Buscar
                    </button>
                  </form>
                </span>

                <span id="logitos" className="flex justify-center gap-3">
                  <MDBNavbarItem>
                    {loggedIn && usuarioLoggeado.admin ? (
                      <div className="flex gap-2">
                        <p className="text-black">
                          Hola {usuarioLoggeado.name}
                        </p>
                        <button
                          title="Ingresar"
                          className="text-black"
                          onClick={handleUserAdmin}
                        >
                          <img
                            className="carrito"                
                            src={usuario}
                            alt="usuario"
                          />
                        </button>
                      </div>
                    ) : loggedIn && !usuarioLoggeado.admin ? (
                      <div className="flex gap-2">
                        <p className="text-black">
                          Hola {usuarioLoggeado.name}
                        </p>
                        <button
                          title="Ingresar"
                          className="text-black"
                          onClick={handleUser}
                        >
                          <img
                            className="carrito"                
                            src={usuario}
                            alt="usuario"
                          />
                        </button>
                      </div>
                    ) :
                          
                     (
                      <button onClick={openModal} className="text-black">
                        <img className="carrito" src={usuario} alt="usuario" />
                      </button>
                    )}
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <img className="carrito" src={favoritos} alt="favoritos" />
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <button onClick={openModalCarrito} className="text-light">
                      <img className="carrito" src={carrito} alt="carrito" />
                    </button>
                  </MDBNavbarItem>
                </span>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <BarritaInf/>
    </>
  );
}
