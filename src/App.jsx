import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Experiencias from './pages/Experiencias'
import Navbar from './pages/Navbar'
import Populares from './pages/Populares'
import Cursos from './pages/Cursos'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Populares/>
      <Experiencias/>
      <Cursos/>
      <Footer/>
      
    </>
  )
}

export default App

