import  { useState } from 'react';
import '../sctruct/css/form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    documentNumber: '',
    email: '',
    phoneNumber: '',
    orderNumber: '',
    subject: '',
    message: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow-lg my-20">
      <h2 className="text-xl font-semibold pt-5 xl:w-3/4 xl:m-auto">Arrepentimiento</h2>
      <form onSubmit={handleSubmit} className='flex flex-col py-5 xl:w-3/4 xl:m-auto xl:space-y-10'>
        <input
          type="text"
          name="name"
          placeholder="Nombre Completo"
          value={formData.name}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="text"
          name="documentNumber"
          placeholder="Número de Documento"
          value={formData.documentNumber}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Teléfono"
          value={formData.phoneNumber}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="text"
          name="orderNumber"
          placeholder="Número de Pedido"
          value={formData.orderNumber}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className='py-1 px-2'
        />
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className='p-1'
        />
        <button 
          type="submit"
          className="bg-[#3786da] text-white px-4 py-2 rounded hover:bg-blue-600 w-1/3 uppercase"
          >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
