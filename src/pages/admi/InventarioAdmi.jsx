import React from "react";
import { BrandService } from "../../services/Brand.services";
import { CategoryService } from "../../services/Cateogory.services";
import { getProducts } from "../../services/Products.services";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function InventarioAdmi() {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const [product, setProduct] = useState([{}]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const getProduct = async () => {
    try {
      const data = await getProducts();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getBrand = async () => {
    try {
      const data = await BrandService();
      console.log(data);
      setBrand(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCategory = async () => {
    try {
      const data = await CategoryService();
      setCategory(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBrand();
    getCategory();
    getProduct();
  }, []);
  
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setEditingProduct(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  const handleDelete = (productId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Filtrar la lista de productos para eliminar el producto con el ID proporcionado
        const updatedProducts = product.filter(item => item.id !== productId);
        // Actualizar el estado de los productos con la lista filtrada
        setProduct(updatedProducts);
        Swal.fire(
          'Eliminado!',
          'El producto ha sido eliminado.',
          'success',
          
        );
      }
    });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: 'Guardando Cambios',
      icon: 'info',
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Guardado!',
          'Los cambios han sido guardados.',
          'success'
        );
      }
    });
    closeModal()
  };
  
  

  console.log(product);
  console.log(category);
  console.log(brand);
  return (
    <div className="flex justify-between w-full gap-4">
      <div className="">
        <h2 className="text-2xl font-bold mb-2">Product</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
            <th className="p-3 border-b w-1/12">Id</th>
          <th className="p-3 border-b w-2/12">Nombre</th>
          <th className="p-3 border-b w-3/12">Descripcion</th>
          <th className="p-3 border-b w-1/12">Imagen</th>
          <th className="p-3 border-b w-1/12">Precio</th>
          <th className="p-3 border-b w-1/12">Stock</th>
          <th className="p-3 border-b w-1/12">Category</th>
          <th className="p-3 border-b w-1/12">Marca</th>
          <th className="p-3 border-b w-1/12">Acciones</th>
            </tr>
          </thead>
          </table>
          <table className="border-collapse border">
        <tbody className="">
          {product &&
            product.map((item) => (
              <tr key={item?.id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-3 border-b w-1/12">{item?.id}</td>
                <td className="p-3 border-b w-2/12">{item?.name}</td>
                <td className="p-3 border-b w-3/12">{item?.description}</td>
                <td className="p-3 border-b w-1/12">
                  <img src={item?.imageUrl} alt={item?.name} className="w-16" />
                </td>
                <td className="p-3 border-b w-1/12">{item?.price}</td>
                <td className="p-3 border-b w-1/12">{item?.stock}</td>
                <td className="p-3 border-b w-1/12">
                  {category?.find((cat) => cat?.id === item?.categoryId)?.name}
                </td>
                <td className="p-3 border-b text-left">
                  {brand?.find((br) => br?.id === item?.brandId)?.name}
                </td>
                <td className="p-3 border-b">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => openModal(item)}
                  >
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline" onClick={() => handleDelete(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
        </table>
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-7xl">
            <h2 className="text-lg font-semibold mb-4">Editar Producto</h2>
            <form className="">
              <div className="grid grid-cols gap-5">

              
              <input className="px-2" name="nombre" type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})} />
              <input className="px-2" type="text" value={editingProduct.description} onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})} />
              <input className="px-2" type="text" value={editingProduct.price} onChange={(e) => setEditingProduct({...editingProduct, price: e.target.value})} />
              <input className="px-2" type="text" value={editingProduct.stock} onChange={(e) => setEditingProduct({...editingProduct, stock: e.target.value})} />
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                  onClick={handleSaveChanges}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
      <div className="text-center w-80">
        <div className="">
          <div className="mb-4 border border-gray-300 ">
            <h2 className="text-2xl font-bold mb-2 border-b">Category</h2>
            {category?.map((item) => (
              <div
                key={item?.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <span className="px-2">{item?.name}</span>
                <div className="space-x-2">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 border border-gray-300 ">
            <h2 className="text-2xl font-bold mb-2 border-b">Brand</h2>
            {brand?.map((item, index) => (
              <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2" key={index}>
                <span className="px-2">{item?.name}</span>
                <div className="space-x-2">
                  <button 
                    className="text-blue-500 hover:underline"
                    onClick={() => openEditModal(item.id)}
                    >
                    Editar
                  </button>
                  <button 
                    className="text-red-500 hover:underline"
                    onClick={() => deleteBrand(item.id)}
                    >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventarioAdmi;
