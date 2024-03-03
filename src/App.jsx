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
    try {
      if(email1 === "" || contra === ""){
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Por favor digite el usuario o contrasenia!",
        });
        return;
      }
    
      const response = await getObtenerUser(email1, contra);
      localStorage.setItem("user", JSON.stringify(response));

      if (response?.token) {
        setToken(jwtDecode(response.token));
        setLoggedIn(true);
        getObtenerUsuario(jwtDecode(response.token));
        
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
          text: "Inicio de sesion exitoso!",
        });
        // Resto de tu código
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contrasenia incorrecta!",
        });
        // Manejar la falta de token en la respuesta
        console.error("Token no presente en la respuesta");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal!",
      });
      // Manejar el error al obtener el usuario
      console.error("Error al obtener el usuario", error);
    }
  };
  const getObtenerUsuario = async (tokenPasar) => {
    try {
      const auto = JSON.parse(localStorage.getItem("user"));
      console.log(auto.token);
      const response = await getObtenerUserAuthen(
        tokenPasar?.nameid,
        auto?.token
      );
      setUsuarioLoggeado(response);
    } catch (error) {
     
      
      console.error("Error al obtener el usuario", error);
    }
  };

  console.log(usuarioLoggeado);
  console.log(token);
  const openModalCarrito = () => {
    setModalIsOpenCarrito(true);
  };
  const closeModalCarrito = () => {
    setModalIsOpenCarrito(false);
  };
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser.token) {
        setLoggedIn(true);
        const userId = jwtDecode(storedUser.token);
        console.log(userId);
        setToken(userId);
        getObtenerUsuario(userId);
       
        // Resto de tu código
      }
    } catch (error) {
      console.error("Error al decodificar el token", error);
    }
  }, []);
  const location = useLocation();
  const pathname2 = !location.pathname.startsWith("/accounts/dashboard");
  return (
    <div className="bg-[#F6F6F6]">
     
        <Navbar
          setModalIsOpenCarrito={setModalIsOpenCarrito}
          openModalCarrito={openModalCarrito}
          loggedIn={loggedIn}
          usserLog={usserLog}
          usuarioLoggeado={usuarioLoggeado}
        />
   
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
        {loggedIn && usuarioLoggeado?.Admin && (
          <Route path="/accounts/dashboard/*" element={<AdmiRutas />} />
        )}
        {loggedIn && <Route path="/accounts/user/*" element={<UserRutas />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
