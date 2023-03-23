import React from 'react'
import style from "./style.css"

export const CategoryNavBarComponent = () => {
  return (
    <div className='categoryNavBar'>
        <ul className='categoryNavBarList'>
            <a href="#"><li>Todos los Productos</li></a>
            <a href="/productos/notebooks"><li>Notebooks</li></a>
            <a href="#"><li>Procesadores</li></a>
            <a href="#"><li>Mothers</li></a>
            <a href="#"><li>Placas de Video</li></a>
            <a href="#"><li>Memorias RAM</li></a>
            <a href="#"><li>Almacenamiento</li></a>
            <a href="#"><li>Fuentes</li></a>
            <a href="#"><li>Gabinetes</li></a>
            <a href="#"><li>Monitores</li></a>
        </ul>
    </div>
  )
}
