import React from 'react';
import "./style.css";

export const NavBarComponent = () => {
  return (
    <div>
      <ul className='navBar'>
        <a href='#'><li> Productos </li></a>
        <a href='#'><li> Arma tu PC </li></a>
        <a href='#'><li> Contacto </li></a>
        <a href='#'><li> Inicia Sesión </li></a>
      </ul>
    </div>
  )
}
