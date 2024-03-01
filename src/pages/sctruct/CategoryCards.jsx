import { Link } from 'react-router-dom'
import aire from '../../assets/aire.webp'
import celulares from '../../assets/celulares.webp'
import heladeras from '../../assets/heladeras.webp'
import lavarropas from '../../assets/lavarropas.webp'
import notebook from '../../assets/notebook.webp'
import smart from '../../assets/smart.webp'
import datos from '../../lib/datos';
import productos from '../../pages/Productos';

function CategoryCards() {
    console.log(datos)
    const productsArray = Object.entries(datos).map(([categoria, productos]) => ({
        categoria,
        productos
    }));
    
    console.log(productsArray)
    return (

        <>
            <div className='text-center text-3xl mt-10 mb-5 font-medium uppercase text-[#16697A]'>
                <h2 className='drop-shadow-lg' >Categorias mas visitadas</h2>
            </div>
            <div className='grid grid-cols-2 px-5 md:grid-cols-3 xl:grid-cols-6 mt-10 mb-20 gap-5'>
                {productsArray.map((value, index) =>
                (
                    <Link to={`/Product/${value.categoria}`} key={index}>
                        <div key={index}>
                            <a href="#">
                                <img src={aire} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                            </a>
                            <h2 className='text-center text-lg font-medium my-2'>{value.categoria}</h2>

                        </div>
                    </Link>
                )
                )}



            </div>
        </>
    )
}

export default CategoryCards
