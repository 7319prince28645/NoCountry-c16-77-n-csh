
const productos = [
    {
      id: 1,
      nombre: 'Heladera',
      marca: 'samsung',
      modelo: 'S400',
      precio: 400000,
      categoria: 'electrodomesticos',
      img: '/heladera-samsung.webp'
    },
    {
      id: 2,
      nombre: 'Heladera',
      marca: 'Patrick',
      modelo: 'P400',
      precio: 390000,
      categoria: 'electrodomesticos',
      img: '/heladera-patrick.webp'
    },
    {
      id: 3,
      nombre: 'Heladera',
      marca: 'Gafa',
      modelo: 'G400',
      precio: 350000,
      categoria: 'electrodomesticos',
      img: '/heladera-gafa.webp'
    },
    {
        id: 4,
        nombre: 'Celular',
        marca: 'samsung',
        modelo: 'Galaxy S23',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/samsung-s23.webp'
      },
      {
        id: 5,
        nombre: 'Celular',
        marca: 'motorola',
        modelo: 'Moto Edge 30',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/moto-edge.webp'
      },
      {
        id: 6,
        nombre: 'Celular',
        marca: 'Xiaomi',
        modelo: 'Redmi 10',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/xiaomi-redmi.webp'
      },
      {
        id: 7,
        nombre: 'Notebook',
        marca: 'Lenovo',
        modelo: 'V 15',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/v15.webp'
      },
      {
        id: 8,
        nombre: 'Notebook',
        marca: 'Apple',
        modelo: 'MacBook Pro',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/macbook.webp'
      },
      {
        id: 9,
        nombre: 'Notebook',
        marca: 'Acer',
        modelo: 'Predator Helios',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/predator.webp'
      },
      {
        id: 10,
        nombre: 'Tablet',
        marca: 'Samsung',
        modelo: 'S7',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tablet-samsung.webp'
      },
      {
        id: 11,
        nombre: 'Tablet',
        marca: 'Lenovo',
        modelo: 'P11',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tablet-lenovo.webp'
      },
      {
        id: 12,
        nombre: 'Tablet',
        marca: 'Xiaomi',
        modelo: 'Pad',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tablet-xiaomi.webp'
      },
      {
        id: 13,
        nombre: 'Cocina',
        marca: 'Domec',
        modelo: 'CDG-200',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/cocina-domec.webp'
      },
      {
        id: 14,
        nombre: 'Cocina',
        marca: 'Mabe',
        modelo: 'CMG-2250',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/cocina-mabe.webp'
      },
      {
        id: 15,
        nombre: 'Cocina',
        marca: 'Whirlpool',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/cocina-whirlpool.webp'
      },
      {
        id: 16,
        nombre: 'Smart TV',
        marca: 'Samsung',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tv-samsung.webp'
      },
      {
        id: 17,
        nombre: 'Smart TV',
        marca: 'Xiaomi',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tv-xiaomi.webp'
      },
      {
        id: 18,
        nombre: 'Smart TV',
        marca: 'BGH',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/tv-bgh.webp'
      },
      {
        id: 19,
        nombre: 'Parlante Bluetooth ',
        marca: 'JBL',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/parlante-jbl.webp'
      },
      {
        id: 20,
        nombre: 'Parlante Bluetooth',
        marca: 'Philco',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/parlante-philco.webp'
      },
      {
        id: 21,
        nombre: 'Parlante Bluetooth',
        marca: 'Philips',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/parlante-philips.webp'
      },
      {
        id: 22,
        nombre: 'Lavarropas',
        marca: 'Longvie',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/lavarropas-longvie.webp'
      },
      {
        id: 23,
        nombre: 'Lavarropas',
        marca: 'Samsung',
        modelo: 'CWG-0012',
        precio: 350000,
        categoria: 'tecnologia',
        img: '/lavarropas-samsung.webp'
      },
    
  ];

  productos.forEach(producto => {
    producto.precioFormateado = producto.precio.toLocaleString('es-AR');
  });
  
  export default productos;
  