import { useState } from 'react';
import datos from '../../lib/DatosBuscador';
import lupa from '../../assets/lupa.svg'


function Buscador() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchVal(searchTerm);


    const filtered = datos.filter(product => {
      return (
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.marca.toLowerCase().includes(searchTerm.toLowerCase())  ||
        product.modelo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex relative md:right-0 lg:right-20 xl:right-28">
      
      <input
        type="text"
        value={searchVal}
        onChange={handleInputChange}
        placeholder="¿Qué estás buscando?"
        className='lg:w-96 border-white placeholder:italic placeholder:text-white'
      />
      <span className='border-b-[1px]'>
        <img src={lupa} alt="" />
      </span>
      {searchVal && (
        <ul className='active absolute top-7 left-0 bg-slate-100 border-[1px] border-[#ccc] p-3 z-50 text-black w-[410px] rounded-md h-96 overflow-y-scroll'>
          {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id} className='flex gap-5 my-3 p-1 rounded-lg hover:bg-gray-200 hover:cursor-pointer'>
                <div>
              <img src={product.img} alt={product.nombre} className='max-w-14' />
                </div>
                <div className='flex flex-col'>
                <div>
              <span>{product.nombre} {product.marca} {product.modelo}</span>
                </div>
              <div>
              <span className='text-[#FFA62b] text-lg font-medium'>$ {product.precioFormateado}</span>
              </div>
                </div>
            </li>
          ))
          ) : (
            <li>No se encontró el producto</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Buscador;
