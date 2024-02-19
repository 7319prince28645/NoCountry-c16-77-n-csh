const productsData = {
    climatizacion: [
      {
        descripcion: "Aire acondicionado",
        precios: [599.99, 699.99, 799.99],
        images: ["ac1.jpg", "ac2.jpg", "ac3.jpg"],
        dimensiones: {
          alto: 100,
          ancho: 50,
          profundidad: 30
        },
        colores: ["blanco", "negro", "plateado"]
      },
      // Add more climatizacion products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Aire acondicionado ${index + 2}`,
        precios: [599.99, 699.99, 799.99],
        images: [`ac${index + 2}.jpg`, `ac${index + 3}.jpg`, `ac${index + 4}.jpg`],
        dimensiones: {
          alto: 100,
          ancho: 50,
          profundidad: 30
        },
        colores: ["blanco", "negro", "plateado"]
      }))
    ],
    celulares: [
      {
        descripcion: "Smartphone",
        precios: [299.99, 399.99, 499.99],
        images: ["phone1.jpg", "phone2.jpg", "phone3.jpg"],
        dimensiones: {
          alto: 150,
          ancho: 70,
          profundidad: 10
        },
        colores: ["negro", "blanco", "azul"]
      },
      // Add more celulares products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Smartphone ${index + 2}`,
        precios: [299.99, 399.99, 499.99],
        images: [`phone${index + 2}.jpg`, `phone${index + 3}.jpg`, `phone${index + 4}.jpg`],
        dimensiones: {
          alto: 150,
          ancho: 70,
          profundidad: 10
        },
        colores: ["negro", "blanco", "azul"]
      }))
    ],
    heladeras: [
      {
        descripcion: "Heladera",
        precios: [799.99, 899.99, 999.99],
        images: ["fridge1.jpg", "fridge2.jpg", "fridge3.jpg"],
        dimensiones: {
          alto: 180,
          ancho: 70,
          profundidad: 70
        },
        colores: ["blanco", "negro", "inoxidable"]
      },
      // Add more heladeras products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Heladera ${index + 2}`,
        precios: [799.99, 899.99, 999.99],
        images: [`fridge${index + 2}.jpg`, `fridge${index + 3}.jpg`, `fridge${index + 4}.jpg`],
        dimensiones: {
          alto: 180,
          ancho: 70,
          profundidad: 70
        },
        colores: ["blanco", "negro", "inoxidable"]
      }))
    ],
    lavarropas: [
      {
        descripcion: "Lavarropas",
        precios: [499.99, 599.99, 699.99],
        images: ["washer1.jpg", "washer2.jpg", "washer3.jpg"],
        dimensiones: {
          alto: 100,
          ancho: 60,
          profundidad: 60
        },
        colores: ["blanco", "gris", "negro"]
      },
      // Add more lavarropas products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Lavarropas ${index + 2}`,
        precios: [499.99, 599.99, 699.99],
        images: [`washer${index + 2}.jpg`, `washer${index + 3}.jpg`, `washer${index + 4}.jpg`],
        dimensiones: {
          alto: 100,
          ancho: 60,
          profundidad: 60
        },
        colores: ["blanco", "gris", "negro"]
      }))
    ],
    notebooks: [
      {
        descripcion: "Notebook",
        precios: [899.99, 999.99, 1099.99],
        images: ["laptop1.jpg", "laptop2.jpg", "laptop3.jpg"],
        dimensiones: {
          alto: 20,
          ancho: 300,
          profundidad: 200
        },
        colores: ["plata", "negro", "rojo"]
      },
      // Add more notebooks products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Notebook ${index + 2}`,
        precios: [899.99, 999.99, 1099.99],
        images: [`laptop${index + 2}.jpg`, `laptop${index + 3}.jpg`, `laptop${index + 4}.jpg`],
        dimensiones: {
          alto: 20,
          ancho: 300,
          profundidad: 200
        },
        colores: ["plata", "negro", "rojo"]
      }))
    ],
    smarttvs: [
      {
        descripcion: "Smart TV",
        precios: [599.99, 699.99, 799.99],
        images: ["tv1.jpg", "tv2.jpg", "tv3.jpg"],
        dimensiones: {
          alto: 80,
          ancho: 120,
          profundidad: 10
        },
        colores: ["negro", "plata", "blanco"]
      },
      // Add more smarttvs products here
      ...Array.from({ length: 20 }, (_, index) => ({
        descripcion: `Smart TV ${index + 2}`,
        precios: [599.99, 699.99, 799.99],
        images: [`tv${index + 2}.jpg`, `tv${index + 3}.jpg`, `tv${index + 4}.jpg`],
        dimensiones: {
          alto: 80,
          ancho: 120,
          profundidad: 10
        },
        colores: ["negro", "plata", "blanco"]
      }))
    ]
  };
  
  export default productsData;
  