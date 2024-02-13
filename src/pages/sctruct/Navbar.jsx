import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex h-[48px] justify-around py-8 items-center'>
        <p>Logo</p>
        <label htmlFor="search" >
            <input type="text" id="search" placeholder="Search..." className='border px-4 py-2 rounded-lg'/>
        </label>
        <article className='flex gap-4'>
           <Link to={"/login"}> <p>Ingresar</p> </Link>
            <p>Corazon</p>
            <p>Carrito</p>
        </article>
    </div>
  )
}

export default Navbar