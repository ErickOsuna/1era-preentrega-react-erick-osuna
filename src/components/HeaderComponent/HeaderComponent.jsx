import React from 'react'
import { NavBarComponent } from '../NavBarComponent/NavBarComponent'
import logo from "../../img/logo.png"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'
import "./style.css";

export const HeaderComponent = () => {
  return (
    <header className='header'>
      <div className='logoYTitulo'>
        <a href='#'><img src={logo} alt="Logo" className='logo' /></a>
        <a href='#' className='linkTitulo'><h2 className='tituloTiendaDeComputadora'>VGA<br/>Store</h2></a>
      </div>
      <NavBarComponent />
      <CartWidgetComponent />
    </header>
  )
}
