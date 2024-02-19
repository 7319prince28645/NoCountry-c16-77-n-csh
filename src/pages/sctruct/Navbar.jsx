import React, { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../sctruct/css/Navbar.css";
import carrito from "../../assets/Carrito.png";
import favoritos from "../../assets/favorito.png";
import logo from "../../assets/logo.png";
import usuario from "../../assets/usuario2.png";
import buscar from "../../assets/lupa.png";
import { Link } from "react-router-dom";
export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="text-light">
           <Link to={"/"}> <img id="logo" src={logo} alt="carrito" /></Link>
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="navbar" >

            <span >
              <form className=" input-group"  >
                <input
                  type="search"
                  placeholder="¿Qué estas buscando?"
                  aria-label="Search"
                  id="buscador"
                />
                <MDBBtn color='secondary' > <img id="lupa" src={buscar} alt="buscar"/></MDBBtn>
              </form>
            </span>

              <span id="logitos" >
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
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

      <div className="barraInferior ">
        <span>
          {" "}
          Innovación para tu hogar, inspiración para tu jardin, todo en un solo
          lugar
        </span>
      </div>
    </>
  );
}
