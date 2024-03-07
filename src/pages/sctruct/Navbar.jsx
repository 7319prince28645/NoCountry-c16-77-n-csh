import { useState, useEffect } from "react";
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
import { CategoryService } from "../../services/Cateogory.services";
export default function Navbar({
  openModalCarrito,
  loggedIn,
  usserLog,
  usuarioLoggeado,
}) {
  console.log(usuarioLoggeado);

  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [openBasic, setOpenBasic] = useState(false);
  const [isHomeIcon, setIsHomeIcon] = useState(true);
  const [iconColor, setIconColor] = useState("white");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const getCategory = async () => {
    try {
      const response = await CategoryService();
      setCategory(response);
      console.log(response);
    } catch (error) {
      console.error("Error al obtener categoría:", error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

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
        <MDBNavbar expand="lg" className="lg:px-10 lg:pt-4 lg:pb-12 relative">
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-4 p-2 bg-[#16697a81] ">
          {category?.map((item, index) => (
            <Link to={`/Product/${item.name}`} key={index}>
            <div key={index} className="flex gap-2 hover:text-[#9eff78] cursor-pointer font-semibold">
              <p className="">{item.name}</p>
            </div>
          </Link>
          ))}
        </div>
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

            <MDBCollapse navbar open={openBasic} className="relative">
              <nav className="navbar flex flex-col lg:flex-row md:justify-between w-[100%] gap-3 relative">
                <div className=""></div>

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
