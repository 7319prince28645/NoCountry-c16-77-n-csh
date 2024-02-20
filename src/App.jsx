import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from "./pages/sctruct/Navbar";
import Homee from "./pages/Homee";
import Footer from "./pages/sctruct/Footer";
import Productos from "./pages/Productos";
import Login from "./pages/accounts/Login";
import ProductsID from "./pages/ProductsID";

function App() {
  const location = useLocation();
  const pathname = location.pathname !== "/login";
  return (
    <>
    {pathname && <Navbar />}
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/accounts/Login" element={<Login/>} />
        <Route path="/Product/:category" element={<Productos/>} />
        <Route path="/Product/:category/:id" element={<ProductsID/>} />
      </Routes>
    {pathname && <Footer />}
    
    </>
  );
}

export default App;
