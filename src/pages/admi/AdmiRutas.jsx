import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAdmi from "./HomeAdmi";
import PerfilAdmi from "./PerfilAdmi";
import InventarioAdmi from "./InventarioAdmi";
import ProductosAdmi from "./ProductosAdmi";
import NotifacionesAdmi from "./NotifacionesAdmi";
import SoporteAdmi from "./SoporteAdmi";
import AyudaAdmi from "./AyudaAdmi";
import ContactoAdmi from "./ContactoAdmi";
import ModalUser from "../modals/modalUser";

function AdmiRutas() {
  return (
    <div className="flex h-screen p-8 bg-[#F6F6F6] gap-4 w-full">
      {" "}
      <ModalUser />
      <Routes>
        <Route path="*" element={<HomeAdmi />} />
        <Route path="Perfil" element={<PerfilAdmi />} />
        <Route
          path="Inventario"
          element={<InventarioAdmi />}
        />
        <Route
          path="Productos"
          element={<ProductosAdmi />}
        />
        <Route
          path="Notificaciones"
          element={<NotifacionesAdmi />}
        />
        <Route path="Soporte" element={<SoporteAdmi />} />
        <Route path="Ayuda" element={<AyudaAdmi />} />
        <Route path="Contacto" element={<ContactoAdmi />} />
      </Routes>
    </div>
  );
}

export default AdmiRutas;
