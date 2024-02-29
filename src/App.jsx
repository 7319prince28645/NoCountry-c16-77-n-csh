import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from "./pages/sctruct/Navbar";
import Homee from "./pages/Homee";
import Footer from "./pages/sctruct/Footer";
import Productos from "./pages/Productos";
import Login from "./pages/accounts/Login";
import ProductsID from "./pages/ProductsID";
import { useState } from "react";
import ModalUser from "./pages/modals/modalUser";
import AdmiRutas from "./pages/admi/AdmiRutas";
import Privacidad from "./pages/sctruct/Privacidad";
import Envios from "./pages/sctruct/Envios";
import Form from "./pages/sctruct/Form";
import Terminos from "./pages/sctruct/Terminos";


function App() {
  const [modalIsOpenCarrito, setModalIsOpenCarrito] = useState(false);
  const loggedIn = localStorage.getItem("usuario");
  console.log(loggedIn);
  const openModalCarrito = () => {
    setModalIsOpenCarrito(true);
  };
  const closeModalCarrito = () => {
    setModalIsOpenCarrito(false);
  };
  const location = useLocation();
  const pathname2 = !location.pathname.startsWith("/accounts/dashboard");
  return (
    <div className="bg-[#F6F6F6]">
    {pathname2 && <Navbar setModalIsOpenCarrito={setModalIsOpenCarrito} openModalCarrito={openModalCarrito} loggedIn={loggedIn}/>}
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/accounts/Login" element={<Login/>} />
        <Route path="/Product/:category" element={<Productos/>} />
        <Route path="/Product/:category/:id" element={<ProductsID openModalCarrito={openModalCarrito} modalIsOpenCarrito={modalIsOpenCarrito} closeModalCarrito={closeModalCarrito}/>} />
        {loggedIn && <Route path="/accounts/dashboard/*" element={<AdmiRutas/>} />}
        <Route path="/sctruct/privacidad" element={<Privacidad/>} />
        <Route path="/sctruct/envios" element={<Envios/>} />
        <Route path="/sctruct/formulario" element={<Form/>} />
        <Route path="/sctruct/terminos" element={<Terminos/>} />
      </Routes>
    {pathname2 && <Footer />}
    
    </div>
  );
}

export default App;
