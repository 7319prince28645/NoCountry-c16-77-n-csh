import aire from '../../assets/aire.webp'
import celulares from '../../assets/celulares.webp'
import heladeras from '../../assets/heladeras.webp'
import lavarropas from '../../assets/lavarropas.webp'
import notebook from '../../assets/notebook.webp'
import smart from '../../assets/smart.webp'

function CategoryCards() {
    return (
        <>
        <div className='text-center text-3xl mt-10 mb-5 font-medium uppercase'>
            <h2>Categorias mas visitadas</h2>
        </div>
        <div className='grid grid-cols-2 px-5 md:grid-cols-3 xl:grid-cols-6 mt-10 mb-20 gap-5'>
            <div>
                <a href="#">
                    <img src={aire} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Climatizacion</h2>
            </div>
            <div>
                <a href="#">
                    <img src={celulares} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Celulares</h2>
            </div>
            <div>
                <a href="#">
                    <img src={heladeras} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Heladeras</h2>
            </div>
            <div>
                <a href="#">
                    <img src={lavarropas} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Lavarropas</h2>
            </div>
            <div>
                <a href="#">
                    <img src={notebook} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Notebooks</h2>
            </div>
            <div>
                <a href="#">
                    <img src={smart} className='m-auto rounded-full shadow-md hover:scale-95 hover:shadow-2xl hover:transition hover:duration-500' alt="" />
                </a>
                <h2 className='text-center text-lg font-medium my-2'>Smart TVs</h2>
            </div>

        </div>
        </>
    )
}

export default CategoryCards
