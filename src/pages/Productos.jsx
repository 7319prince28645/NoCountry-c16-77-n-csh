import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Datos from "../lib/datos";
import { useState } from "react";
import { data } from "autoprefixer";
function Productos() {
  const [dataFilter, setDataFilter] = useState([]);
  const { id } = useParams();
  const category = {
    0: "Climatizacion",
    1: "Celulares",
    2: "Heladeras",
    3: "Lavadoras",
    4: "Notebooks",
    5: "SmartTv",
  };
  const caterogy1 = Datos[category[id]];
  const handleFilter = (e) => {
    let filter;

    if (e === "conCuotas") {
      filter = caterogy1.filter((item) => item.cuotas !== "no");
    } else if (e === "sinCuotas") {
      filter = caterogy1.filter((item) => item.cuotas === "no");
    } else {
      filter = caterogy1;
    }
    setDataFilter(filter);
  };
  const filter = (e) => {
    let filter;

    switch (e) {
      case "1":
        filter = caterogy1.slice().sort((a, b) => a.precios[1] - b.precios[1]);
        break;
      case "2":
        filter = caterogy1.slice().sort((a, b) => b.precios[1] - a.precios[1]);
        break;
      case "3":
        filter = caterogy1
          .slice()
          .sort((a, b) => a.descripcion.localeCompare(b.descripcion));
        break;
      case "4":
        filter = caterogy1
          .slice()
          .sort((a, b) => b.descripcion.localeCompare(a.descripcion));
        break;
      default:
        filter = caterogy1;
    }

    setDataFilter(filter);
  };
  console.log(dataFilter);
  console.log(caterogy1);
  return (
    <div className="py-3 px-24">
      <article className="flex justify-between">
        <p>
          {" "}
          <span>Todos los Productos</span> - <span>{category[id]}</span>
        </p>
        <span className="relative border-2 p-2">
          <p className="absolute -top-2 text-xs bg-white px-2">Ordenar Por</p>
          <select
            name="option"
            id=""
            className="w-56"
            onChange={(e) => filter(e.target.value)}
          >
            <option value="">Orden por defecto</option>
            <option value="1">Mayor Precio</option>
            <option value="2">Menor Precio</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
          </select>
        </span>
      </article>
      <main className="flex border-t pt-4 mt-2">
        <aside className="w-60 pr-8">
          <p className="text-lg py-1">{category[id]}</p>
          <p className="text-sm mb-4">
            {dataFilter.length > 0 ? dataFilter.length : caterogy1.length}
            resultados/s
          </p>
          <span className="flex flex-col gap-2">
            <button
              onClick={() => handleFilter("sinCuotas")}
              className="rounded-md border bg-blue-500 py-1 text-sm text-white"
            >
              Cuota Simple
            </button>
            <button
              onClick={() => handleFilter("conCuotas")}
              className="rounded-md border bg-blue-500 py-1 text-sm text-white"
            >
              En cuotas
            </button>
            {dataFilter.length > 0 && (
              <button
                onClick={() => setDataFilter([])}
                className="rounded-md border bg-blue-500 py-1 text-sm text-white"
              >
                {" "}
                Todos
              </button>
            )}
          </span>
        </aside>
        <article>
          <div className="grid grid-cols-4 gap-4">
            {(dataFilter.length > 0 ? dataFilter : caterogy1).map(
              (value, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src={value.images[0]}
                    alt={value.descripcion}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-semibold mb-2">
                    {value.descripcion}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Precio: ${value.precios[1]}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-500 font-bold">
                      Ver Detalles
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </article>
      </main>
    </div>
  );
}

export default Productos;
