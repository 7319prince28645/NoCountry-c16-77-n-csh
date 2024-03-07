import { useState } from 'react';
import { baseApi } from '../../lib/BaseApi';
import axios from 'axios';



function SignUp({handClickState}) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    celular: '',
    direccion: '',
    dni: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('https://localhost:7258/api/users', formData);
      
      return response.data;
      
      }
    catch(error){
          console.error(error);
      }
  }
  return (
    <div className="h-[100%] w-full px-10">
      <p
        onClick={() => handClickState(0)}
        className="absolute top-10 right-2 text-gray-500 cursor-pointer z-40 p-2 font-semibold hover:text-neutral-300"
      >
        Atrás
      </p>
    <form onSubmit={handleSubmit} className='space-y-5 px-5 gap-5 rounded-lg shadow-2xl p-8 xl:h-[55%] 2xl:pt-10'>
      <div>
      <label className="block text-sm font-medium text-gray-600">
            Nombre
          </label>
      <input
        type="text"
        name="name"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-600">
            Apellido
          </label>
      <input
        type="text"
        name="lastName"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="text-sm font-medium text-gray-600">
            Email
          </label>
      <input
        type="email"
        name="email"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
      <input
        type="password"
        name="password"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-600">
            Telefono
          </label>
      <input
        type="text"
        name="celular"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.celular}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-600">
            Direccion
          </label>
      <input
        type="text"
        name="direccion"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.direccion}
        onChange={handleInputChange}
        required
      />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-600">
      N° Documento
          </label>
      <input
        type="number"
        name="dni"
        className="w-full border py-2 px-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={formData.dni}
        onChange={handleInputChange}
        required
      />
      </div>
      <div className='flex justify-center'>
      <button type="submit" className='bg-[#82C0CC] w-full rounded text-white px-5 py-2 hover:bg-[#16697a] hover:transition hover:duration-300'>Registrarse</button>
      </div>
    </form>
    </div>
  );
}

export default SignUp;
