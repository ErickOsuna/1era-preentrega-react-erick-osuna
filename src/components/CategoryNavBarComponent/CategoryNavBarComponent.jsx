import React from 'react'
import style from "./style.css"
import { Link } from 'react-router-dom'


export const CategoryNavBarComponent = () => {
  return (
    <div className='categoryNavBar'>
        <ul className='categoryNavBarList'>
            <Link to={"/category"}><li>Todos los Productos</li></Link>
            <Link to={"/category/notebooks"}><li>Notebooks</li></Link>
            <Link to={"/category/procesadores"}><li>Procesadores</li></Link>
            <Link to={"/category/mothers"}><li>Mothers</li></Link>
            <Link to={"/category/placas-video"}><li>Placas de Video</li></Link>
            <Link to={"/category/memorias-ram"}><li>Memorias RAM</li></Link>
            <Link to={"/category/almacenamiento"}><li>Almacenamiento</li></Link>
            <Link to={"/category/fuentes"}><li>Fuentes</li></Link>
            <Link to={"/category/gabinetes"}><li>Gabinetes</li></Link>
            <Link to={"/category/monitores"}><li>Monitores</li></Link>
        </ul>
    </div>
  )
}
