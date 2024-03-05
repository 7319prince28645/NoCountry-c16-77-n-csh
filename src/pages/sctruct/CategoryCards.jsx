import { Link } from 'react-router-dom'
import celulares1 from '../../assets/aire.webp'
import celulares2 from '../../assets/celulares.webp'
import celulares3 from '../../assets/heladeras.webp'
import celulares4 from '../../assets/lavarropas.webp'
import celulares5 from '../../assets/notebook.webp'
import celulares6 from '../../assets/smart.webp'
import datos from '../../lib/datos';
import productos from '../../pages/Productos';

function CategoryCards() {
    console.log(datos)
    const productsArray = Object.entries(datos).map(([categoria, productos]) => ({
        categoria,
        productos
    }));
    const category = (id) => {
        const category = {
            1: celulares1,
            2: celulares2,
            3: celulares3,
            4: celulares4,
            5: celulares5,
            6: celulares6
        }
        return category[id]
    }
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
                                <img src={category(index+1)} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
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
