import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from "./pages/sctruct/Navbar";
import Homee from "./pages/Homee";
import Footer from "./pages/sctruct/Footer";
import PagesLogin from "./pages/accounts/PagesLogin";
import Carrousel from "./pages/sctruct/Carrousel";
import ProducTsCategory from "./pages/ProducTsCategory";
import Productos from "./pages/Productos";
function App() {
  const location = useLocation();
  const pathname = location.pathname !== "/login";
  return (
    <>
    {pathname && <Navbar />}
      <Routes>
        <Route path="/" element={<Homee/>} />
        
        <Route path="/ProducTsCategory" element={<ProducTsCategory/>} />
        <Route path="/Product/:category/:id" element={<Productos/>} />
      </Routes>
    {pathname && <Footer/>}
    
    </>
  );
}

export default App;
