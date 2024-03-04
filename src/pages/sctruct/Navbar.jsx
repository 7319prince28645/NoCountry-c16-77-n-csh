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
import Buscador from "./Buscador";

export default function Navbar({
  openModalCarrito,
  loggedIn,
  usserLog,
  usuarioLoggeado, 
}) {
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
  };

  return (
    <>
      <div className="sticky z-20 top-0 shadow-lg">
        {loggedIn === false && (
          <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            usserLog={usserLog}
          />
        )}
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
              style={{ color: "white", border: "1px solid white" }}
            >
              <MDBIcon
                icon={isHomeIcon ? "bars" : "x"}
                fas
                onClick={handleIconClick}
                style={{ color: iconColor }}
              />
            </MDBNavbarToggler>

            <MDBCollapse navbar open={openBasic}>
              <nav className="navbar flex flex-col lg:flex-row md:justify-between w-[100%] gap-3">
                <div className="dropdown flex items-center relative right-36 sm:right-0 text-sm xl:text-base hover:cursor-pointer">
                  <span className="flex items-center gap-1 md:ml-2 mt-2 uppercase">
                    Categorias{" "}
                    <span>
                      <img src={abajo} className="w-1/2" alt="" />
                    </span>
                  </span>
                  <div className="dropdown-content rounded dropShadow space-y-3 mt-3 xl:ml-10">
                    <div className="dropdown">
                      <span className="flex justify-between items-center hover:text-[#16697A]">
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
                          <span className="hover:text-[#16697A]">Computadoras</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Celulares</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Tablets</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center hover:text-[#16697A]">
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
                          <span className="hover:text-[#16697A]">Smart Tv</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Audio</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Proyectores</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center hover:text-[#16697A]">
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
                          <span className="hover:text-[#16697A]">Climatizacion</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Cocinas</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Heladeras</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Lavado</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Pequeños Electros</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <span className="flex justify-between gap-1 items-center hover:text-[#16697A]">
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
                          <span className="hover:text-[#16697A]">Baño</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Decoracion</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Iluminacion</span>
                        </div>
                        <div>
                          <span className="hover:text-[#16697A]">Jardin Exterior</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Buscador />

                <div id="logitos" className="flex justify-center gap-3">
                  <div>
                    {loggedIn && usuarioLoggeado?.admin ? (
                      <div className="flex gap-2">
                        <p className="text-white uppercase">
                          Hola {usuarioLoggeado?.name}
                        </p>
                        <button
                          title="Ingresar"
                          className="text-white font-medium"
                          onClick={handleUserAdmin}
                        >
                          <img
                            className="carrito"
                            src={usuario}
                            alt="usuario"
                          />
                        </button>
                      </div>
                    ) : loggedIn && !usuarioLoggeado?.admin ? (
                      <div className="flex gap-2">
                        <p className="text-white uppercase font-medium">
                          Hola {usuarioLoggeado?.name}
                        </p>
                        <button
                          title="Ingresar"
                          className="text-white"
                          onClick={handleUser}
                        >
                          <img
                            className="carrito"
                            src={usuario}
                            alt="usuario"
                          />
                        </button>
                      </div>
                    ) : (
                      <button onClick={openModal} className="text-black">
                        <img className="carrito" src={usuario} alt="usuario" />
                      </button>
                    )}
                  </div>

                  <div>
                    <button onClick={openModalCarrito} className="text-light">
                      <img className="carrito" src={carrito} alt="carrito" />
                    </button>
                  </div>
                </div>
              </nav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
      <BarritaInf />
    </>
  );
}
