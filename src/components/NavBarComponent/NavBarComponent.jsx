import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export const NavBarComponent = () => {
  return (
    <div>
      <ul className='navBar'>
        <Link to={'/category'}><li> Productos </li></Link>
        <Link to={'/arma-tu-pc'}><li> Arma tu PC </li></Link>
        <Link to={'/contacto'}><li> Contacto </li></Link>
        <Link to={'/inicia-sesion'}><li> Inicia Sesión </li></Link>
      </ul>
    </div>
  )
}
