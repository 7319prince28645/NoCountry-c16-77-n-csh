import React from 'react'
import datos from '../lib/datos';

function ProducTsCategory() {
    console.log(datos);
  return (
    <div>
    {datos.climatizacion.map((value,index)=>
    <div>
        {value.descripcion}
    </div>
    )}
    </div>
  )
}

export default ProducTsCategory
