

function DetalleProducto({ producto }) {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Marca: {producto.marca}</p>
      <p>Precio: {producto.precio}</p>
      <img src={producto.img} alt={producto.nombre} style={{ maxWidth: '200px' }} />
    </div>
  );
}

export default DetalleProducto;
