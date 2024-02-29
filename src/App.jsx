import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
import { getObtenerUser } from "./services/user-services";
import UserRutas from "./pages/users/UserRutas";


function App() {

  const [users, setUsers] = useState([]);
  const [modalIsOpenCarrito, setModalIsOpenCarrito] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [usuarioLoggeado, setUsuarioLoggeado] = useState({});

  console.log(usuarioLoggeado);
  const usserLog = (email, password) => {
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
     
      setUsuarioLoggeado(user);
      setLoggedIn(true);
      Swal.fire({
        title: "Bienvenido!",
        text: "disfruta de tu estadia en nuestra pagina.",
        icon: "success",
        confirmButtonText: "¡Entendido!",
      });
    } else {
      setLoggedIn(false);
    }
  };

  const openModalCarrito = () => {
    setModalIsOpenCarrito(true);
  };
  const closeModalCarrito = () => {
    setModalIsOpenCarrito(false);
  };
  const getUser = async () => {
    const response = await getObtenerUser();
    setUsers(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(users);
  const location = useLocation();
  const pathname2 = !location.pathname.startsWith("/accounts/dashboard") ;
  console.log(pathname2);
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

        <Route path="/" element={<Homee/>} />
        <Route path="/accounts/Login" element={<Login/>} />
        <Route path="/Product/:category" element={<Productos/>} />
        <Route path="/Product/:category/:id" element={<ProductsID openModalCarrito={openModalCarrito} modalIsOpenCarrito={modalIsOpenCarrito} closeModalCarrito={closeModalCarrito}/>} />
        {loggedIn && <Route path="/accounts/dashboard/*" element={<AdmiRutas/>} />}
        <Route path="/sctruct/privacidad" element={<Privacidad/>} />
        <Route path="/sctruct/envios" element={<Envios/>} />
        <Route path="/sctruct/formulario" element={<Form/>} />
        <Route path="/sctruct/terminos" element={<Terminos/>} />
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
        {loggedIn && usuarioLoggeado.admin && (
          <Route path="/accounts/dashboard/*" element={<AdmiRutas />} />
        )}
        {loggedIn && (
          <Route path="/accounts/user/*" element={<UserRutas />} />
        )  
        }
      </Routes>
      {pathname2 && <Footer />}
    </div>
  );
}

export default App;
