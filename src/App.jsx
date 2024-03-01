import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import jwt from 'jsonwebtoken';

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/sctruct/Navbar";
import Homee from "./pages/Homee";
import Footer from "./pages/sctruct/Footer";
import Productos from "./pages/Productos";
import Login from "./pages/accounts/Login";
import ProductsID from "./pages/ProductsID";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AdmiRutas from "./pages/admi/AdmiRutas";
import Privacidad from "./pages/sctruct/Privacidad";
import Envios from "./pages/sctruct/Envios";
import Form from "./pages/sctruct/Form";
import Terminos from "./pages/sctruct/Terminos";
import { getObtenerUserAuthen } from "./services/user-services";
import { getObtenerUser } from "./services/Authentificated";
import UserRutas from "./pages/users/UserRutas";
import { jwtDecode } from "jwt-decode";

function App() {
  const [modalIsOpenCarrito, setModalIsOpenCarrito] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [usuarioLoggeado, setUsuarioLoggeado] = useState({});
  const usserLog = async (email1, contra) => {
    try{
      const response = await getObtenerUser(email1, contra);
      localStorage.setItem("user", JSON.stringify(response));
      setToken(jwtDecode(localStorage.getItem("user")));
      console.log(token);
      setLoggedIn(true);
      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Ingreso exitoso",
      });
    }
    catch(error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };
  const getObtenerUsuario = async (tokenPasar) => {
    try {
      const auto = JSON.parse(localStorage.getItem("user"));
      const response = await getObtenerUserAuthen(tokenPasar.nameid, auto.token);
      setUsuarioLoggeado(response);
    } catch (error) {
      console.error("Error al obtener el usuario", error);
    }
  };
  useEffect(() => {
    getObtenerUsuario(token);
  }, [token]);

  console.log(usuarioLoggeado);
  console.log(token);
  
  const openModalCarrito = () => {
    setModalIsOpenCarrito(true);
  };
  const closeModalCarrito = () => {
    setModalIsOpenCarrito(false);
  };

  useEffect(() => {

    if (localStorage.getItem("user")) {
      setLoggedIn(true);
      setToken(jwtDecode(localStorage.getItem("user")));
      
    }
  }, []);
 
  const location = useLocation();
  const pathname2 = !location.pathname.startsWith("/accounts/dashboard");
  return (
    <div className="bg-[#F6F6F6]">
      {pathname2 && (
        <Navbar
          setModalIsOpenCarrito={setModalIsOpenCarrito}
          openModalCarrito={openModalCarrito}
          loggedIn={loggedIn}
          usserLog={usserLog}
          usuarioLoggeado={usuarioLoggeado}
        />
      )}
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/accounts/Login" element={<Login />} />
        <Route path="/Product/:category" element={<Productos />} />
        <Route
          path="/Product/:category/:id"
          element={
            <ProductsID
              openModalCarrito={openModalCarrito}
              modalIsOpenCarrito={modalIsOpenCarrito}
              closeModalCarrito={closeModalCarrito}
            />
          }
        />
        {loggedIn && (
          <Route path="/accounts/dashboard/*" element={<AdmiRutas />} />
        )}
        <Route path="/sctruct/privacidad" element={<Privacidad />} />
        <Route path="/sctruct/envios" element={<Envios />} />
        <Route path="/sctruct/formulario" element={<Form />} />
        <Route path="/sctruct/terminos" element={<Terminos />} />
        <Route
          path="/Product/:category/:id"
          element={
            <ProductsID
              openModalCarrito={openModalCarrito}
              modalIsOpenCarrito={modalIsOpenCarrito}
              closeModalCarrito={closeModalCarrito}
            />
          }
        />
        {loggedIn  && (
          <Route path="/accounts/dashboard/*" element={<AdmiRutas />} />
        )}
        {loggedIn && <Route path="/accounts/user/*" element={<UserRutas />} />}
      </Routes>
      {pathname2 && <Footer />}
    </div>
  );
}

export default App;
