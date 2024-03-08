import { useState, useEffect } from 'react';
import productos from '../../lib/DatosBuscador';
import '../sctruct/css/Admi.css';

const Productos = () => {
  // Obtener los estados guardados del almacenamiento local o inicializarlos si no existen
  const initialProductStates = JSON.parse(localStorage.getItem('productStates')) || new Array(productos.length).fill(false);
  const initialSaleStates = JSON.parse(localStorage.getItem('saleStates')) || new Array(productos.length).fill(false);
  const initialPublishedStates = JSON.parse(localStorage.getItem('publishedStates')) || new Array(productos.length).fill(false);

  // Crear estados para los productos
  const [productStates, setProductStates] = useState(initialProductStates);
  const [saleStates, setSaleStates] = useState(initialSaleStates);
  const [publishedStates, setPublishedStates] = useState(initialPublishedStates);

  // Función para manejar el cambio de estado de un producto
  const handleProductToggle = (index) => {
    const updatedStates = [...productStates];
    updatedStates[index] = !updatedStates[index];
    setProductStates(updatedStates);
    localStorage.setItem('productStates', JSON.stringify(updatedStates));
  };

  // Función para manejar el cambio de estado de "En Oferta"
  const handleSaleToggle = (index) => {
    const updatedStates = [...saleStates];
    updatedStates[index] = !updatedStates[index];
    setSaleStates(updatedStates);
    localStorage.setItem('saleStates', JSON.stringify(updatedStates));
  };

  // Función para manejar el cambio de estado de "Publicado"
  const handlePublishedToggle = (index) => {
    const updatedStates = [...publishedStates];
    updatedStates[index] = !updatedStates[index];
    setPublishedStates(updatedStates);
    localStorage.setItem('publishedStates', JSON.stringify(updatedStates));
  };

  useEffect(() => {
    // Actualizar los estados en el almacenamiento local cuando cambien
    localStorage.setItem('productStates', JSON.stringify(productStates));
    localStorage.setItem('saleStates', JSON.stringify(saleStates));
    localStorage.setItem('publishedStates', JSON.stringify(publishedStates));
  }, [productStates, saleStates, publishedStates]);

  return (
    <div className='shadow-2xl border-[1px] rounded-lg'>
      <table className='w-[1440px] '>
        <thead>
          <tr className='bg-gray-200 border-b-[1px]'>
            <th className='px-3 w-10'>Id</th>
            <th className='px-2 w-20'>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th className='text-center py-3'>En Oferta</th>
            <th className='text-center'>Publicado</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((product, index) => (
            <tr key={product.id} className='border-b-[1px]'>
                <td>
                    <h2 className='px-3'>
                        {product.id}
                    </h2>
                </td>
              <td>
                <img src={product.img} alt={product.nombre} className='my-2 pl-2' width='50' />
              </td>
              <td>{product.nombre} {product.modelo}</td>
              <td>${product.precio}</td>
              <td className='text-center'>
                <input
                  type='checkbox'
                  checked={saleStates[index]}
                  onChange={() => handleSaleToggle(index)}
                  className='switch'
                />
              </td>
              <td className='text-center'>
                <input
                  type='checkbox'
                  checked={publishedStates[index]}
                  onChange={() => handlePublishedToggle(index)}
                  className='switch'
                />
              </td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
