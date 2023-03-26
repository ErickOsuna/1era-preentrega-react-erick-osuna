import React from 'react';
import "./style.css";

export const NavBarComponent = () => {
  return (
    <div>
      <ul className='navBar'>
        <a href='/category'><li> Productos </li></a>
        <a href='/arma-tu-pc'><li> Arma tu PC </li></a>
        <a href='/contacto'><li> Contacto </li></a>
        <a href='/inicia-sesion'><li> Inicia Sesión </li></a>
      </ul>
    </div>
  )
}
