import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Datos from "../lib/datos";
import { useState } from "react";
import '../pages/sctruct/CarrouselCards';
import ima4 from '../assets/a34.webp';
import { Link } from "react-router-dom";


function Productos() {
  const [cargarMas,setCargarMas]= useState(7);
  const [dataFilter, setDataFilter] = useState([]);
  const {pathname} = useLocation();
  const path = pathname.split("/")[2];
  const caterogy1 = Datos[path];
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
          <span>Todos los Productos</span> - <span>{path}</span>
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
          <p className="text-lg py-1">{path}</p>
          <p className="text-sm mb-4">
            {dataFilter?.length > 0 ? dataFilter?.length : caterogy1?.length}
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
        <article className="flex flex-col items-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">

            {(dataFilter?.length > 0 ? dataFilter : caterogy1).slice(0,cargarMas).map(
              (value, index) => (
                <Link key={index} className="card" to={`/Product/${path}/${value.id}`}>
                  <img
                    src={ima4}
                    alt={value.descripcion}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <p className=" text-center  text-3xl text-red-700">
                    ${value.precios[1]}
                  </p>
                  <h2 className=" text-center text-2xl mt-8 font-semibold">
                    {value.descripcion}
                  </h2>

                  <p className="text-center text-blue-500 ">
                    Samsung
                  </p>

                </Link>
              )
            )}

          </div>

         {cargarMas!==21&& <button className="text-center rounded-3xl bg-black text-white p-2 px-4 "  onClick={()=>setCargarMas(cargarMas+7)}>
            Cargar mas productos
          </button>}

        </article>
      </main>
    </div>
  );
}

export default Productos;
