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

function App() {
  const [modalIsOpenCarrito, setModalIsOpenCarrito] = useState(false);
  const openModalCarrito = () => {
    setModalIsOpenCarrito(true);
  };
  const closeModalCarrito = () => {
    setModalIsOpenCarrito(false);
  };
  const location = useLocation();
  const pathname = location.pathname !== "/login";
  return (
    <div className="bg-[#F6F6F6]">
    {pathname && <Navbar setModalIsOpenCarrito={setModalIsOpenCarrito} openModalCarrito={openModalCarrito}/>}
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/accounts/Login" element={<Login/>} />
        <Route path="/Product/:category" element={<Productos/>} />
        <Route path="/Product/:category/:id" element={<ProductsID openModalCarrito={openModalCarrito} modalIsOpenCarrito={modalIsOpenCarrito} closeModalCarrito={closeModalCarrito}/>} />
      </Routes>
    {pathname && <Footer />}
    
    </div>
  );
}

export default App;
